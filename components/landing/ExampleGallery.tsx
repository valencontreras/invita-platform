import { ArrowRight, CircleCheck, Volume2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PhotoPlate } from '@/components/landing/PhotoPlate'
import { Reveal } from '@/components/landing/Reveal'
import { SectionHeading } from '@/components/landing/SectionHeading'
import { galleryExamples } from '@/lib/content/landing'

/**
 * Three sample invitations.
 *
 * Cards point to `slug` only when that invitation is really published; while the
 * slug is `null` the card shows a "Próximamente" note so no guest lands on a 404.
 * The link goes through `next/link`, so navigation stays client-side (see
 * AGENTS.md › Conventions).
 */
export function ExampleGallery() {
  return (
    <section id="coleccion" className="border-y border-line/50 bg-paper/70 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Curadurías digitales"
          title="Historias que cobran vida"
          description="Cada pareja tiene una narrativa irrepetible. Diseñamos la identidad visual completa —música, mapas y confirmación sin fricción— alrededor de la suya."
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryExamples.map((example, index) => (
            <Reveal key={example.couple} className="h-full" delay={index * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white gold-foil-border transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Real sample photo when the example ships one. `fill` + object-cover
                      crop the 16:9 original to the card's 4:3 frame; the tonal plate
                      remains the fallback for examples still without photography. */}
                  {example.photo ? (
                    <Image
                      src={example.photo.src}
                      alt={example.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <PhotoPlate
                      tone={example.tone}
                      monogram={example.monogram}
                      className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                  <span className="absolute top-4 left-4 rounded-full border border-line/50 bg-white/90 px-3 py-1 text-label-caps text-forest uppercase backdrop-blur-sm">
                    {example.style}
                  </span>
                  <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-forest-soft px-3 py-1 text-label-caps text-sage-soft uppercase">
                    <CircleCheck className="size-3" strokeWidth={2} />
                    {example.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-label-caps text-sage uppercase">{example.place}</span>
                      <span className="inline-flex items-center gap-1.5 text-body-sm text-ink-soft/80">
                        <Volume2 className="size-3.5 text-gold" strokeWidth={1.75} />
                        {example.music}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-headline-md text-forest">
                      {example.couple}
                    </h3>
                    <p className="mt-2 text-body-sm text-ink-soft">{example.description}</p>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-line/50 pt-4">
                    {example.slug ? (
                      <Link
                        href={`/${example.slug}`}
                        className="inline-flex items-center gap-2 text-label-caps text-forest uppercase transition-colors hover:text-gold"
                      >
                        Ver invitación
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-1"
                          strokeWidth={1.75}
                        />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-label-caps text-line-strong uppercase">
                        <ArrowRight className="size-4" strokeWidth={1.75} />
                        Próximamente
                      </span>
                    )}
                    <span className="text-label-caps text-sage uppercase">Ejemplo</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="mx-auto max-w-2xl font-editorial text-headline-sm text-sage italic">
            ¿Tienes un concepto temático en mente? Lo maquetamos desde cero: cada invitación se
            dibuja para una sola pareja.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
