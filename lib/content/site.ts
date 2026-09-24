/*
 * Business contact details, used by the landing page, the quote form and the
 * footer. They are read from env vars so the same code works locally, in
 * preview and in production without edits.
 *
 * TODO: define the real values in `.env.local` (and in Vercel) — the fallbacks
 * below are placeholders so the page still renders before launch.
 */

function envOr(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : fallback;
}

export const siteConfig = {
  name: "Invita",
  /** International format, digits only: 58 + operator code + number. */
  whatsappNumber: envOr(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER, "580000000000"),
  contactEmail: envOr(process.env.NEXT_PUBLIC_CONTACT_EMAIL, "hola@invita.com"),
  instagramUrl: envOr(process.env.NEXT_PUBLIC_INSTAGRAM_URL, "https://instagram.com/invita"),
  country: "Venezuela",
} as const;

/** Deep link to WhatsApp with a pre-filled message, the main CTA of the site. */
export function whatsappLink(message: string): string {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
