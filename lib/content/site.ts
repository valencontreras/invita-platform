/**
 * Site-wide constants and contact details for public-facing surfaces.
 *
 * Everything here is read at build time from `NEXT_PUBLIC_*` variables (see
 * `.env.example`). Optional values stay `undefined` when unset so the UI can
 * simply hide the corresponding link instead of rendering a dead one.
 */

/** Accepts `invita.app` or `https://invita.app` and always returns a full URL. */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "http://localhost:3000";
  return raw.startsWith("http://") || raw.startsWith("https://")
    ? raw
    : `https://${raw}`;
}

/** International format, digits only (e.g. `5215512345678`). */
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);

export const site = {
  name: "Invita",
  tagline: "Invitaciones digitales interactivas para bodas inolvidables",
  url: resolveSiteUrl(),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || undefined,
} as const;

/** Pre-filled first message so the owner sees the intent before answering. */
const WHATSAPP_MESSAGE =
  "¡Hola! Nos casamos y quisiéramos cotizar la invitación digital de nuestra boda.";

/**
 * WhatsApp deep link for every "converse with us" call to action.
 *
 * Falls back to the on-page quote form (`#cotizar`) when the number is not
 * configured, so a CTA never dead-ends in a broken `wa.me` link.
 */
export const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "#cotizar";
