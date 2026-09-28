import { Reveal } from '@/components/landing/Reveal'
import { SectionHeading } from '@/components/landing/SectionHeading'
import { STEP_ICONS } from '@/components/landing/icons'
import { howItWorks } from '@/lib/content/landing'
import { cn } from '@/lib/utils'

/**
 * The three steps, told left to right on a hairline.
 *
 * Icons are resolved by position from `STEP_ICONS`, so the copy in
 * `lib/content/landing.ts` never has to mention a glyph.
 */
export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionHeading
        align="start"
        eyebrow="Un proceso sin estrés"
        title="Tu invitación lista en 3 pasos"
        description="Nos encargamos de toda la parte técnica para que tú solo disfrutes organizando la boda."
        className="mb-16 md:mb-20"
      />

      <div className="relative">
        <span
          aria-hidden
          className="hairline-gold absolute top-12 right-[18%] left-[18%] hidden h-px lg:block"
        />

        <ol className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">
          {howItWorks.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? STEP_ICONS[0]
            const isLast = index === howItWorks.length - 1

            return (
              <li key={step.title}>
                <Reveal
                  className="flex h-full flex-col items-center gap-4 text-center"
                  delay={index * 110}
                >
                  <span
                    className={cn(
                      'flex size-24 items-center justify-center rounded-full',
                      isLast
                        ? 'botanical-glow bg-forest-soft text-ivory'
                        : 'gold-foil-border bg-white text-forest',
                    )}
                  >
                    <Icon className="size-8" strokeWidth={1.25} />
                  </span>
                  <span className="text-label-caps text-gold-deep/60 uppercase">
                    Paso 0{index + 1}
                  </span>
                  <h3 className="font-display text-headline-md text-forest">{step.title}</h3>
                  <p className="max-w-sm text-body-md text-ink-soft">{step.description}</p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
