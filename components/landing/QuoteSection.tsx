import { CircleCheck, Hourglass } from 'lucide-react'

import { QuoteForm } from '@/components/landing/QuoteForm'
import { quoteHighlights } from '@/lib/content/landing'

/**
 * Conversion block: the promises on the left, the quote form on the right.
 * The form itself is a client component; this section stays on the server.
 */
export function QuoteSection() {
  return (
    <section id="cotizar" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-white p-6 gold-foil-border botanical-glow md:p-12 lg:p-14">
        <span
          aria-hidden
          className="absolute -top-32 -right-24 size-80 rounded-full bg-sage-soft/35 blur-3xl"
        />
        <span
          aria-hidden
          className="absolute -bottom-32 -left-24 size-80 rounded-full bg-gold-soft/20 blur-3xl"
        />

        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-3 text-label-caps text-sage uppercase">
              <span aria-hidden className="h-px w-8 bg-gold/60" />
              Atención personalizada
            </span>
            <h2 className="mt-3 font-display text-headline-lg leading-tight text-forest md:text-display-md">
              Cotiza la invitación de tus sueños
            </h2>
            <p className="mt-4 text-body-md text-ink-soft">
              Cuéntanos la fecha y el estilo que imaginas: recibirás una propuesta visual y su
              presupuesto en menos de 2 horas hábiles.
            </p>

            <ul className="mt-8 flex flex-col gap-4 border-t border-line/50 pt-8">
              {quoteHighlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-body-md text-ink-soft">
                  <CircleCheck className="mt-0.5 size-4.5 shrink-0 text-gold" strokeWidth={1.75} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4 rounded-xl border border-gold-soft/50 bg-paper px-5 py-4">
              <Hourglass className="size-6 shrink-0 text-wine" strokeWidth={1.5} />
              <p className="text-body-sm text-ink-soft">
                <strong className="block font-display text-headline-sm leading-tight text-forest">
                  Respuesta en menos de 2 horas
                </strong>
                Por WhatsApp o correo, de lunes a sábado.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}
