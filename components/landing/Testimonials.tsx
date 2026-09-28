import { Star } from 'lucide-react'

import { Reveal } from '@/components/landing/Reveal'
import { SectionHeading } from '@/components/landing/SectionHeading'
import { testimonials } from '@/lib/content/landing'

/**
 * Real guest quotes only.
 *
 * Renders nothing while `testimonials` is empty, so the landing never shows
 * invented social proof (see `lib/content/landing.ts`).
 */
export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section className="border-t border-line/50 bg-paper/60 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Historias compartidas"
          title="La experiencia de nuestras parejas"
          className="mb-12 md:mb-14"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.couple} className="h-full" delay={index * 90}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-white p-8 gold-foil-border md:p-10">
                <div>
                  <div className="flex gap-1 text-gold" aria-label="Calificación: 5 de 5">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="size-4 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-4 font-editorial text-headline-sm text-forest italic">
                    “{testimonial.quote}”
                  </blockquote>
                </div>
                <figcaption className="flex items-center justify-between gap-4 border-t border-line/50 pt-4">
                  <strong className="text-label-caps text-forest uppercase">
                    {testimonial.couple}
                  </strong>
                  <span className="text-body-sm text-sage">{testimonial.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
