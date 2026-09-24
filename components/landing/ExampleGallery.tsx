import Link from "next/link";
import { galleryExamples, type GalleryExample } from "@/lib/content/landing";
import { Reveal } from "./Reveal";

/**
 * Previews are drawn with markup instead of screenshots so the section never
 * shows a broken image. Once an invitation is published, put its slug in
 * `galleryExamples` and the card turns into a real "Ver invitación" link.
 */
function InvitationPreview({ example }: { example: GalleryExample }) {
  return (
    <article className="group">
      <div className="border border-forest/15 bg-white p-3 transition-colors duration-300 group-hover:border-gold/60">
        <div className="border border-gold/35 px-5 py-7 text-center">
          <p className="font-script text-3xl leading-relaxed text-forest">
            {example.couple}
          </p>
          <p className="mt-3 font-display text-xs tracking-[0.3em] text-forest/70">
            {example.date}
          </p>
          <div className="mt-6 flex aspect-4/5 items-center justify-center border border-forest/10 bg-sage/25">
            <span
              aria-hidden
              className="font-display text-[0.68rem] tracking-[0.18em] text-forest/50"
            >
              Foto de la pareja
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <p className="text-sm leading-relaxed text-forest/70">
          {example.venue}
        </p>
        {example.slug ? (
          <Link
            href={`/${example.slug}`}
            className="shrink-0 font-display text-sm text-forest underline decoration-gold underline-offset-4 transition-colors hover:text-forest/70"
          >
            Ver invitación
          </Link>
        ) : (
          <span className="shrink-0 font-display text-sm text-forest/70">
            Próximamente
          </span>
        )}
      </div>
    </article>
  );
}

export function ExampleGallery() {
  return (
    <section
      id="ejemplos"
      className="scroll-mt-8 bg-ivory px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">
            Tres invitaciones, tres historias distintas
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-forest/70">
            Ninguna invitación se repite: cada una se arma con las fotos, los
            lugares y la canción de esa pareja. Estas son algunas de las que ya
            salieron de casa.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {galleryExamples.map((example, index) => (
            <Reveal
              key={example.couple}
              delay={index * 0.12}
              /* the middle card drops a step so the row never reads as a table */
              className={index === 1 ? "sm:mt-10 lg:mt-16" : undefined}
            >
              <InvitationPreview example={example} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
