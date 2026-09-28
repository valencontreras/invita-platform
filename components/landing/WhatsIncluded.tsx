import type { ReactNode } from "react";
import { Copy, MapPin, Play } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/landing/Reveal";
import { SectionHeading } from "@/components/landing/SectionHeading";
import type { IconComponent } from "@/components/landing/icons";
import { FEATURE_ICONS } from "@/components/landing/icons";
import type { FeatureIcon } from "@/lib/content/landing";
import {
  includedFeatures,
  includedNote,
  preWeddingPhotos,
} from "@/lib/content/landing";
import { cn } from "@/lib/utils";

/**
 * Column span of each card in the 12-column grid: a first row of three compact
 * cards, then two wide rows of two, so the grid never reads as a uniform block.
 */
const CARD_SPAN: Record<FeatureIcon, string> = {
  countdown: "lg:col-span-4",
  rsvp: "lg:col-span-4",
  map: "lg:col-span-4",
  gallery: "lg:col-span-6",
  music: "lg:col-span-6",
  dress: "lg:col-span-6",
  gift: "lg:col-span-6",
};

function BenefitCard({
  icon: Icon,
  title,
  description,
  footer,
  className,
}: {
  icon: IconComponent;
  title: string;
  description: string;
  /** Illustrative sample of the published invitation — kept out of the a11y tree. */
  footer: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("h-full", className)}>
      <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-white p-7 gold-foil-border md:p-8">
        <div>
          <span className="flex size-12 items-center justify-center rounded-xl border border-line/50 bg-paper text-forest">
            <Icon className="size-6" strokeWidth={1.4} />
          </span>
          <h3 className="mt-5 font-display text-headline-md text-forest">
            {title}
          </h3>
          <p className="mt-2 text-body-sm text-ink-soft">{description}</p>
        </div>
        <div aria-hidden>{footer}</div>
      </div>
    </Reveal>
  );
}

/**
 * Sample UI shown at the foot of every card: a miniature of the real
 * invitation, keyed by the same `FeatureIcon` used by the copy.
 */
const SAMPLE_UI: Record<FeatureIcon, ReactNode> = {
  countdown: (
    <div className="flex items-center justify-around border-t border-line/50 pt-6">
      {[
        { value: "142", label: "Días" },
        { value: "18", label: "Horas" },
        { value: "45", label: "Minutos" },
      ].map((unit) => (
        <span key={unit.label} className="flex flex-col items-center gap-1">
          <span className="font-display text-headline-lg leading-none text-forest">
            {unit.value}
          </span>
          <span className="text-label-caps text-sage uppercase">
            {unit.label}
          </span>
        </span>
      ))}
    </div>
  ),
  rsvp: (
    <div className="flex flex-wrap gap-2 border-t border-line/50 pt-6">
      <span className="rounded-full bg-forest-soft px-3.5 py-1.5 text-label-caps text-ivory uppercase">
        Asistiré con 2
      </span>
      <span className="rounded-full border border-line/60 bg-paper px-3.5 py-1.5 text-label-caps text-ink-soft uppercase">
        Vegetariano
      </span>
      <span className="rounded-full border border-line/60 bg-paper px-3.5 py-1.5 text-label-caps text-ink-soft uppercase">
        Sin gluten
      </span>
    </div>
  ),
  map: (
    <div className="flex flex-wrap gap-2 border-t border-line/50 pt-6">
      <span className="inline-flex items-center gap-1.5 rounded-lg border border-line/60 bg-paper px-3.5 py-2 text-label-caps text-forest uppercase">
        <MapPin className="size-3.5 text-gold" strokeWidth={1.75} />
        Google Maps
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-lg border border-line/60 bg-paper px-3.5 py-2 text-label-caps text-forest uppercase">
        <MapPin className="size-3.5 text-gold" strokeWidth={1.75} />
        Waze
      </span>
    </div>
  ),
  gallery: (
    <div className="flex gap-2 border-t border-line/50 pt-6">
      {/* Real preboda photography from `public/pre-wedding/` (see
          `preWeddingPhotos`); each 16:9 original is cropped to the strip's
          thumbnail frame, same as the collection cards do. */}
      {preWeddingPhotos.map((photo) => (
        <div
          key={photo.src}
          className="relative h-16 flex-1 overflow-hidden rounded-md border border-line/40 bg-paper-deep"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 172px, 30vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  ),
  music: (
    <div className="border-t border-line/50 pt-6">
      {/* Still frame of the invitation's audio control: solid play button, track
          name, elapsed time and the waveform the real player animates. */}
      <div className="flex items-center gap-4 rounded-xl bg-paper px-4 py-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-forest text-ivory">
          <Play
            className="size-3.5 translate-x-px fill-current"
            strokeWidth={0}
          />
        </span>
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="text-label-caps text-forest uppercase">
            Nuestra canción · Instrumental acústico
          </span>
          <span className="text-body-sm text-sage tabular-nums">
            0:45 / 3:12
          </span>
        </span>
        <span className="ml-auto flex h-6 shrink-0 items-center gap-[3px]">
          {["h-2", "h-5", "h-3", "h-6", "h-4", "h-2"].map((height, index) => (
            <span
              key={index}
              className={cn("w-[3px] rounded-full bg-gold/70", height)}
            />
          ))}
        </span>
      </div>
    </div>
  ),
  dress: (
    <div className="flex flex-wrap items-center gap-3 border-t border-line/50 pt-6">
      <span className="size-8 rounded-full border border-line/60 bg-forest-soft" />
      <span className="size-8 rounded-full border border-line/60 bg-gold-soft" />
      <span className="size-8 rounded-full border border-line/60 bg-paper-deep" />
      <span className="size-8 rounded-full border border-line/60 bg-wine" />
      <span className="ml-1 text-label-caps text-sage uppercase">
        Formal de noche
      </span>
    </div>
  ),
  gift: (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line/50 pt-6">
      <span className="font-mono text-xs tracking-wider text-forest">
        BANCO ···· ···· ···· 0123
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-md border border-line/60 bg-paper px-3 py-1.5 text-label-caps text-forest uppercase">
        <Copy className="size-3.5" strokeWidth={1.75} />
        Copiar
      </span>
    </div>
  ),
};

export function WhatsIncluded() {
  return (
    <section
      id="beneficios"
      className="border-y border-line/50 bg-paper/60 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Una suite completa"
          title="Todo lo que tus invitados necesitan, en un solo enlace"
          description="Nada de PDFs adjuntos ni cadenas infinitas de mensajes: la invitación resuelve dudas, recibe confirmaciones y acompaña a cada invitado hasta la mesa."
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {includedFeatures.map((feature) => (
            <BenefitCard
              key={feature.icon}
              className={CARD_SPAN[feature.icon]}
              icon={FEATURE_ICONS[feature.icon]}
              title={feature.title}
              description={feature.description}
              footer={SAMPLE_UI[feature.icon]}
            />
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-2xl font-editorial text-headline-sm text-sage italic">
            {includedNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
