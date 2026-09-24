"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { whatsappLink } from "@/lib/content/site";
import {
  emptyLead,
  fieldErrorsFrom,
  leadSchema,
  type LeadField,
  type LeadInput,
} from "@/lib/validations/lead";
import { ctaPrimaryOnLight } from "./cta";
import { ChatGlyph } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

const whatsappMessage = "Hola, quiero cotizar una invitación digital para mi boda.";

const inputClass =
  "w-full border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-forest/60 focus:border-gold focus:ring-2 focus:ring-gold/50";

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-display text-sm text-forest">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Landing page quote form. It validates with the very same Zod schema the API
 * route uses, and a submission only becomes an enquiry — it never creates an
 * invitation.
 */
export function QuoteForm() {
  const [values, setValues] = useState<LeadInput>(emptyLead);
  const [errors, setErrors] = useState<Partial<Record<LeadField, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  function update(field: LeadField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(fieldErrorsFrom(parsed.error.issues));
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          // Anti-bot trap: a real visitor can never fill this in.
          company: honeypotRef.current?.value ?? "",
        }),
      });

      if (!response.ok) {
        throw new Error(`Lead request failed with status ${response.status}`);
      }

      setValues(emptyLead);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-forest/15 bg-white p-6 sm:p-8">
        <h3 className="font-display text-2xl text-forest">¡Gracias! Ya nos llegó tu mensaje</h3>
        <p className="mt-4 text-sm leading-relaxed text-forest/70">
          Revisamos la fecha de tu boda y te escribimos por WhatsApp con las opciones y los precios.
        </p>
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-7 ${ctaPrimaryOnLight}`}
        >
          Escribirnos ahora
          <ChatGlyph className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative border border-forest/15 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Tu nombre" id="lead-name" error={errors.name}>
          <input
            id="lead-name"
            name="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            autoComplete="name"
            placeholder="Camila y Sebastián"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "lead-name-error" : undefined}
            className={`${inputClass} ${errors.name ? "border-red-600" : "border-forest/50"}`}
          />
        </Field>

        <Field label="Fecha de la boda" id="lead-date" error={errors.wedding_date}>
          <input
            id="lead-date"
            name="wedding_date"
            type="date"
            value={values.wedding_date}
            onChange={(event) => update("wedding_date", event.target.value)}
            aria-invalid={Boolean(errors.wedding_date)}
            aria-describedby={errors.wedding_date ? "lead-date-error" : undefined}
            className={`${inputClass} ${errors.wedding_date ? "border-red-600" : "border-forest/50"}`}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Tu correo o tu WhatsApp" id="lead-contact" error={errors.contact}>
            <input
              id="lead-contact"
              name="contact"
              value={values.contact}
              onChange={(event) => update("contact", event.target.value)}
              autoComplete="email"
              placeholder="camila@correo.com o 0414 123 4567"
              aria-invalid={Boolean(errors.contact)}
              aria-describedby={errors.contact ? "lead-contact-error" : undefined}
              className={`${inputClass} ${errors.contact ? "border-red-600" : "border-forest/50"}`}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Cuéntanos de tu boda (opcional)" id="lead-message" error={errors.message}>
            <textarea
              id="lead-message"
              name="message"
              rows={4}
              value={values.message ?? ""}
              onChange={(event) => update("message", event.target.value)}
              placeholder="Ciudad, cantidad de invitados, el estilo que te imaginas…"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "lead-message-error" : undefined}
              className={`${inputClass} resize-none ${errors.message ? "border-red-600" : "border-forest/50"}`}
            />
          </Field>
        </div>
      </div>

      <input
        ref={honeypotRef}
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] h-px w-px opacity-0"
      />

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`${ctaPrimaryOnLight} disabled:cursor-not-allowed disabled:opacity-60`}
        >
          {status === "sending" ? "Enviando…" : "Pedir mi cotización"}
        </button>
        <p className="text-xs leading-relaxed text-forest/70">
          Sin compromiso. Usamos tus datos solo para responderte.
        </p>
      </div>

      <div aria-live="polite">
        {status === "error" ? (
          <p className="mt-5 border border-red-600/40 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800">
            No pudimos enviar el formulario.{" "}
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Escríbenos por WhatsApp
            </a>{" "}
            y lo resolvemos al momento.
          </p>
        ) : null}
      </div>
    </form>
  );
}
