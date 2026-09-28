import { ArrowRight, ArrowUpRight, CircleCheck, Hourglass } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";
import { buttonOutline, buttonPrimary } from "@/components/landing/cta";
import { heroMockupPhoto } from "@/lib/content/landing";
import { whatsappUrl } from "@/lib/content/site";

/**
 * Opening statement of the landing page.
 *
 * The floating invitation mockup carries the single piece of motion that runs
 * on its own (`motion-safe:animate-seal-glow`); everything else waits for
 * scroll or an explicit action (see AGENTS.md › Design system).
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto max-w-7xl px-5 pt-12 pb-20 md:px-8 md:pt-20 md:pb-24"
    >
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[2.5rem] leading-[1.04] text-forest text-balance sm:text-5xl lg:text-display-lg">
            Invitaciones digitales para una boda{" "}
            <em className="font-editorial text-wine italic">inolvidable</em>
          </h1>

          <p className="mt-6 max-w-2xl text-body-lg text-ink-soft">
            La delicadeza táctil de la imprenta tradicional, unida a la
            practicidad de la era digital: piezas diseñadas a mano, sin
            plantillas masivas, que acompañan a tus invitados desde el primer
            clic hasta el último baile.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonPrimary}
            >
              Conversar por WhatsApp
              <ArrowUpRight className="size-4" strokeWidth={1.75} />
            </a>
            <a href="#coleccion" className={buttonOutline}>
              Explorar ejemplos
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </a>
          </div>

          <div className="mt-9 flex max-w-xl items-center gap-4 border-t border-line/60 pt-6">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-soft/60 bg-white text-gold">
              <CircleCheck className="size-5" strokeWidth={1.5} />
            </span>
            <p className="text-body-sm text-ink-soft">
              <strong className="font-medium text-forest">
                Primera versión en 72 horas.
              </strong>{" "}
              Dominio propio incluido y confirmaciones RSVP en vivo desde el
              primer día.
            </p>
          </div>
        </div>

        <Reveal className="lg:col-span-5" delay={120}>
          <div className="relative mx-auto w-full max-w-md">
            {/* The only animation that runs on its own (see AGENTS.md › Design system). */}
            <span
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-tr from-sage-soft/60 via-ivory/0 to-gold-soft/35 blur-3xl motion-safe:animate-seal-glow motion-reduce:animate-none"
            />

            <div className="relative rounded-2xl bg-white p-3 gold-foil-border botanical-glow sm:p-4">
              <div aria-hidden className="flex items-center gap-1.5 px-1 pb-3">
                <span className="size-1.5 rounded-full bg-line-strong/45" />
                <span className="size-1.5 rounded-full bg-line-strong/45" />
                <span className="size-1.5 rounded-full bg-line-strong/45" />
                <span className="ml-auto font-body text-[10px] tracking-wide text-ink-soft/70">
                  sofia-y-mateo.com
                </span>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line/40 sm:aspect-[5/6]">
                <Image
                  src={heroMockupPhoto.src}
                  alt={heroMockupPhoto.alt}
                  fill
                  priority
                  sizes="(min-width: 640px) 448px, 100vw"
                  className="object-cover"
                />

                <div className="relative flex h-full flex-col justify-end bg-linear-to-t from-forest/92 via-forest/30 to-ivory/0 p-5 sm:p-6">
                  <span className="text-label-caps text-sage-soft uppercase">
                    Demo interactiva
                  </span>
                  <h2 className="mt-1.5 font-display text-headline-lg leading-tight text-ivory sm:text-display-md">
                    Sofía &amp; Mateo
                  </h2>
                  <p className="mt-1.5 text-body-sm text-ivory/80">
                    Sábado 18 de octubre · Hacienda San Gabriel
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory/30 px-3 py-1 text-label-caps text-ivory uppercase backdrop-blur-sm">
                      <Hourglass className="size-3" strokeWidth={1.75} />
                      Cuenta regresiva
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft px-3 py-1 text-label-caps font-semibold text-forest uppercase">
                      RSVP abierto
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-2 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 gold-foil-border">
              <span
                aria-hidden
                className="size-2 rounded-full bg-emerald-600 motion-safe:animate-pulse motion-reduce:animate-none"
              />
              <span className="text-label-caps text-forest uppercase">
                Confirmaciones al instante
              </span>
            </div>

            <div className="absolute -bottom-12 left-1 hidden w-72 -translate-x-1/2 items-center gap-3 rounded-xl bg-white p-3 gold-foil-border sm:flex">
              <span
                aria-hidden
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-wine font-display text-headline-sm text-ivory"
              >
                S
              </span>
              <span className="text-body-sm text-ink-soft">
                <strong className="block font-display text-headline-sm leading-none text-forest">
                  Sello de cera digital
                </strong>
                Apertura ceremonial al abrir el enlace
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
