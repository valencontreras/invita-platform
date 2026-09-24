import { whatsappLink } from "@/lib/content/site";
import { ChatGlyph } from "./icons";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "./Reveal";

const whatsappMessage = `Hola, quiero cotizar una invitación digital para mi boda.`;

export function QuoteSection() {
  return (
    <section
      id="cotizar"
      className="scroll-mt-8 bg-ivory px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">
            Cuéntanos de tu boda
          </h2>
          <p className="mt-4 text-base leading-relaxed text-forest/70">
            Déjanos tus datos y te escribimos por WhatsApp con las opciones y
            los precios. Sin compromiso y sin letra pequeña.
          </p>

          <ul className="mt-8 flex flex-col gap-3 text-sm leading-relaxed text-forest/70">
            <li>Te respondemos el mismo día.</li>
            <li>Vemos juntos el estilo que va con ustedes.</li>
            <li>
              Te mostramos ejemplos de invitaciones parecidas a lo que buscas.
            </li>
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-forest/70">
            ¿Prefieres hablar ahora?{" "}
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
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
