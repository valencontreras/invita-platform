import { faqs } from "@/lib/content/landing";
import { siteConfig, whatsappLink } from "@/lib/content/site";
import { ChatGlyph } from "./icons";

const whatsappMessage = `Hola, tengo una duda sobre las invitaciones de ${siteConfig.name}.`;

/**
 * Built on <details>, so it works without JavaScript and needs no motion — the
 * brief wants movement to stay the exception, not the decoration of every block.
 */
export function Faq() {
  return (
    <section className="bg-ivory px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">
          Preguntas frecuentes
        </h2>

        <div className="border-t border-forest/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-forest/10 py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg text-forest marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden
                  className="mt-0.5 shrink-0 text-2xl leading-none text-gold transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-forest/70">{faq.answer}</p>
            </details>
          ))}

          <p className="mt-8 text-sm leading-relaxed text-forest/70">
            ¿Te quedó otra duda?{" "}
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-forest underline decoration-gold underline-offset-4 transition-colors hover:text-forest/70"
            >
              Escríbenos por WhatsApp
              <ChatGlyph className="h-4 w-4 text-gold" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
