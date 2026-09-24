import { siteConfig, whatsappLink } from "@/lib/content/site";
import { ChatGlyph, InstagramGlyph, MailGlyph } from "./icons";

const whatsappMessage = `Hola, quiero información sobre las invitaciones digitales de ${siteConfig.name}.`;

const linkClass =
  "inline-flex items-center gap-3 text-sm text-ivory transition-colors duration-200 hover:text-gold";

/**
 * Public footer. Admin routes are deliberately absent: `/admin` is private and
 * must never be advertised from a page guests can reach.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest px-6 py-16 text-ivory sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg tracking-[0.35em] uppercase">{siteConfig.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sage">
            Invitaciones digitales para bodas en {siteConfig.country}. Hechas una por una, con la
            historia de cada pareja.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <ChatGlyph className="h-4 w-4 text-gold" />
            WhatsApp
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <InstagramGlyph className="h-4 w-4 text-gold" />
            Instagram
          </a>
          <a href={`mailto:${siteConfig.contactEmail}`} className={linkClass}>
            <MailGlyph className="h-4 w-4 text-gold" />
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-2 border-t border-ivory/15 pt-6 text-xs text-sage sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p>Hecho en {siteConfig.country}.</p>
      </div>
    </footer>
  );
}
