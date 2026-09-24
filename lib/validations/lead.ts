import { z } from "zod";

/**
 * Shared by the landing page form (client) and POST /api/leads (server) so both
 * sides can never disagree about what a valid lead looks like.
 */
export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Escribe tu nombre completo.")
    .max(120, "Máximo 120 caracteres."),
  wedding_date: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Elige la fecha de la boda.")
    .refine((value) => !Number.isNaN(Date.parse(value)), "Esa fecha no parece válida."),
  contact: z
    .string()
    .trim()
    .min(6, "Déjanos un correo o un número de WhatsApp.")
    .max(160, "Máximo 160 caracteres."),
  message: z.string().trim().max(1000, "Máximo 1000 caracteres.").optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadField = keyof LeadInput;

export const emptyLead: LeadInput = {
  name: "",
  wedding_date: "",
  contact: "",
  message: "",
};

/** Keeps the first message per field, which is the one the form displays. */
export function fieldErrorsFrom(
  issues: readonly { path: readonly PropertyKey[]; message: string }[],
): Partial<Record<LeadField, string>> {
  const errors: Partial<Record<LeadField, string>> = {};

  for (const issue of issues) {
    const field = issue.path[0] as LeadField | undefined;
    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  }

  return errors;
}
