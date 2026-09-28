"use client";

import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";

import { buttonGhost, buttonPrimary } from "@/components/landing/cta";
import { whatsappUrl } from "@/lib/content/site";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-lg border border-line/60 bg-white px-4 py-3 text-body-md text-forest transition-colors placeholder:text-ink-soft/45 focus:border-gold focus:ring-2 focus:ring-gold/25 focus:outline-none";

type FieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "date";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-label-caps text-forest uppercase">
        {label}
      </span>
      <input
        className={fieldClasses}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
    </label>
  );
}

/**
 * Quote request form.
 *
 * Scope note: this is the visual/UX layer of Phase 2 — the fields validate in
 * the browser and the success state is shown locally. Wiring it to
 * `POST /api/leads` (Supabase `leads` table, Zod validation) is a separate step,
 * which is why no network call is made yet.
 */
export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line/50 bg-paper/70 p-8 text-center md:p-10"
      >
        <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-gold-soft/60 bg-white text-forest">
          <Check className="size-6" strokeWidth={1.5} />
        </span>
        <h3 className="mt-5 font-display text-headline-md text-forest">
          Gracias, ya tenemos tus datos
        </h3>
        <p className="mx-auto mt-3 max-w-md text-body-md text-ink-soft">
          Te escribimos con una propuesta de diseño y su presupuesto en menos de
          2 horas hábiles.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonPrimary}
          >
            Adelantar la conversación
          </a>
          <button
            type="button"
            onClick={() => setSent(false)}
            className={buttonGhost}
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="space-y-5 rounded-2xl border border-line/50 bg-paper/70 p-6 md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Nombres de la pareja"
          name="couple_names"
          placeholder="Sofía & Mateo"
          autoComplete="name"
          required
        />
        <Field
          label="Fecha de la boda"
          name="wedding_date"
          type="date"
          autoComplete="off"
          required
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="WhatsApp de contacto"
          name="contact"
          type="tel"
          placeholder="+58 412 1234 5678"
          autoComplete="tel"
          required
        />
        <Field
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="tu-correo@ejemplo.com"
          autoComplete="email"
          required
        />
      </div>
      <Field
        label="Ciudad o destino de la boda"
        name="location"
        placeholder="San Miguel de Allende, jardín en Cuernavaca…"
        autoComplete="address-level2"
      />
      <label className="block">
        <span className="mb-2 block text-label-caps text-forest uppercase">
          Cuéntanos el estilo que imaginas
        </span>
        <textarea
          className={cn(fieldClasses, "min-h-24 resize-y")}
          name="message"
          rows={4}
          placeholder="Minimalista, botánico, clásico, boda destino… cualquier referencia que tengan nos ayuda."
        />
      </label>
      <button type="submit" className={cn(buttonPrimary, "w-full px-6")}>
        Solicitar propuesta personalizada
        <Send className="size-4" strokeWidth={1.75} />
      </button>
      <p className="text-center text-body-sm text-ink-soft/80">
        Sin spam y sin compromiso. Tus datos se tratan de forma confidencial.
      </p>
    </form>
  );
}
