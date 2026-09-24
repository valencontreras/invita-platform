import { howItWorks } from "@/lib/content/landing";
import { Reveal } from "./Reveal";

/**
 * Steps arrive from the side instead of the bottom, which keeps the page from
 * repeating the same entrance on every section.
 */
export function HowItWorks() {
  return (
    <section className="bg-forest px-6 py-20 text-ivory sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Así se hace, en tres pasos
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-sage">
            Tú te encargas de la boda. De la invitación nos encargamos nosotros.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {howItWorks.map((step, index) => (
            <Reveal key={step.title} direction="right" delay={index * 0.15}>
              <div className="border-t border-gold/40 pt-6">
                <span className="font-display text-4xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sage">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
