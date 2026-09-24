import { testimonials } from "@/lib/content/landing";
import { Reveal } from "./Reveal";

/**
 * Renders nothing while `testimonials` is empty, so the live page never shows
 * invented quotes. Add a real one to the list in `lib/content/landing.ts` and
 * the section appears on its own.
 */
export function Testimonials() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-forest px-6 py-20 text-ivory sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Lo que cuentan las parejas
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.couple} delay={index * 0.12}>
              <figure className="border-l-2 border-gold/60 pl-6">
                <blockquote className="font-display text-lg leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-sage">
                  <span className="font-script text-2xl text-gold">{testimonial.couple}</span>
                  <span className="ml-3">{testimonial.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
