import type { ComponentType } from "react";
import { includedFeatures, includedNote, type FeatureIcon } from "@/lib/content/landing";
import {
  BowTieGlyph,
  CheckCircleGlyph,
  ClockGlyph,
  GalleryGlyph,
  GiftGlyph,
  MapPinGlyph,
  MusicGlyph,
} from "./icons";
import { Reveal } from "./Reveal";

const icons: Record<FeatureIcon, ComponentType<{ className?: string }>> = {
  countdown: ClockGlyph,
  rsvp: CheckCircleGlyph,
  gallery: GalleryGlyph,
  map: MapPinGlyph,
  music: MusicGlyph,
  dress: BowTieGlyph,
  gift: GiftGlyph,
};

export function WhatsIncluded() {
  return (
    <section className="bg-ivory px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">
            Qué incluye tu invitación
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-forest/70">
            Todo lo que tus invitados necesitan saber, en un solo lugar y sin que tengas que
            responder la misma pregunta cien veces.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-14 gap-y-9 sm:grid-cols-2">
          {includedFeatures.map((feature, index) => {
            const Icon = icons[feature.icon];

            return (
              <Reveal key={feature.title} delay={index * 0.07}>
                <div className="flex gap-5 border-t border-forest/12 pt-6">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-lg text-forest">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-14 max-w-2xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-forest/70">
          {includedNote}
        </p>
      </div>
    </section>
  );
}
