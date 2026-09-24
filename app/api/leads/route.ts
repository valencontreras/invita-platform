import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations/lead";

/** Name of the anti-bot trap field; see `QuoteForm`. */
const HONEYPOT_FIELD = "company";

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null ? (value as Record<string, unknown>) : {};
}

/**
 * Receives the "get a quote" form from the landing page and stores it in the
 * `leads` table. It never creates an invitation: the owner still loads each
 * client's data by hand from the admin panel.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = asRecord(await request.json());
  } catch {
    return NextResponse.json({ error: "No pudimos leer el formulario." }, { status: 400 });
  }

  const honeypot = body[HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    // Answer as if it had worked, so the bot gets no hint about the trap.
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Revisa los datos del formulario." }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error(
      "[/api/leads] NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing.",
    );
    return NextResponse.json(
      { error: "El formulario no está disponible en este momento." },
      { status: 503 },
    );
  }

  // Service role key: this route is the only writer of `leads`, and the insert
  // bypasses RLS. It must never reach the browser.
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from("leads").insert({
    name: parsed.data.name,
    wedding_date: parsed.data.wedding_date,
    contact: parsed.data.contact,
    message: parsed.data.message && parsed.data.message.length > 0 ? parsed.data.message : null,
    status: "new",
  });

  if (error) {
    console.error("[/api/leads] Supabase insert failed:", error.message);
    return NextResponse.json({ error: "No pudimos guardar tu información." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
