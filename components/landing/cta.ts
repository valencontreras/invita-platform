/*
 * Shared button styles. Corners stay square and shadows are avoided on purpose:
 * the brief rules out rounded cards with the generic gray shadow of template
 * sites, and this is the same idea applied to the calls to action.
 *
 * Note: tailwind-merge is not part of the stack, so these class lists are meant
 * to be used as-is without appending conflicting utilities.
 */

/** Filled gold button — the main call to action on dark surfaces. */
export const ctaPrimary =
  "inline-flex w-full items-center justify-center gap-2.5 bg-gold px-7 py-3.5 font-display text-[0.95rem] tracking-wide text-ink transition-colors duration-200 hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto";

/** Same button on light surfaces, where gold on ivory would not have contrast. */
export const ctaPrimaryOnLight =
  "inline-flex w-full items-center justify-center gap-2.5 bg-forest px-7 py-3.5 font-display text-[0.95rem] tracking-wide text-ivory transition-colors duration-200 hover:bg-forest/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:w-auto";

/** Quiet secondary action. */
export const ctaGhost =
  "inline-flex w-full items-center justify-center border border-ivory/35 px-7 py-3.5 font-display text-[0.95rem] tracking-wide text-ivory transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto";
