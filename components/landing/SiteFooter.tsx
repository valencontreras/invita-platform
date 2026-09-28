import { ArrowUpRight, MessageCircle } from 'lucide-react'

import { navLinks } from '@/lib/content/landing'
import { site, whatsappUrl } from '@/lib/content/site'

/**
 * Closing block: brand line, in-page links and the two contact channels.
 * Email and Instagram hide themselves when `NEXT_PUBLIC_*` values are unset.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line/50 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-14 text-center md:flex-row md:px-8 md:text-left">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="font-display text-headline-md tracking-[0.2em] text-forest uppercase">
            {site.name}
          </span>
          <p className="text-body-sm text-ink-soft/80">
            © {new Date().getFullYear()} {site.name} · {site.tagline}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <nav
            aria-label="Enlaces del sitio"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label-caps text-ink-soft uppercase transition-colors hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-5 text-label-caps uppercase">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-forest transition-colors hover:text-gold-deep"
            >
              <MessageCircle className="size-3.5" strokeWidth={1.75} />
              WhatsApp
              <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
            </a>
            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="text-ink-soft transition-colors hover:text-forest"
              >
                {site.email}
              </a>
            ) : null}
            {site.instagram ? (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-forest"
              >
                Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  )
}
