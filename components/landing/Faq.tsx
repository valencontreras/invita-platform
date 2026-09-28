import { ChevronDown } from 'lucide-react'

import { Reveal } from '@/components/landing/Reveal'
import { SectionHeading } from '@/components/landing/SectionHeading'
import { faqs } from '@/lib/content/landing'

/**
 * Frequently asked questions.
 *
 * Native `<details>` so the answers work without JavaScript; only the first one
 * starts open, and the chevron rotates with the `group-open` variant.
 */
export function Faq() {
  return (
    <section className="border-t border-line/50 bg-paper/60 py-20 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Resolviendo dudas" title="Preguntas frecuentes" className="mb-10" />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60}>
              <details
                open={index === 0}
                className="group rounded-xl bg-white px-6 py-5 gold-foil-border"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-headline-sm text-forest">{faq.question}</h3>
                  <ChevronDown
                    className="size-5 shrink-0 text-sage transition-transform duration-200 group-open:rotate-180"
                    strokeWidth={1.5}
                  />
                </summary>
                <p className="mt-4 border-t border-line/40 pt-4 text-body-md text-ink-soft">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
