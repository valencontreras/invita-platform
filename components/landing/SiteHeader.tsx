import { MessageCircle } from "lucide-react";

import { buttonGhost, buttonPrimary } from "@/components/landing/cta";
import { navLinks } from "@/lib/content/landing";
import { site, whatsappUrl } from "@/lib/content/site";
import { cn } from "@/lib/utils";

/**
 * Sticky navigation for the landing sheet.
 *
 * Links are in-page anchors plus WhatsApp: the admin panel is never referenced
 * from any public surface (see AGENTS.md › Route structure).
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/50 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-8 md:py-4">
        <a
          href="#inicio"
          className="font-display text-headline-sm leading-none tracking-[0.22em] text-forest uppercase transition-opacity hover:opacity-80"
        >
          {site.name}
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-label-caps uppercase transition-colors text-sm",
                index === 0
                  ? "border-b border-forest pb-1 text-forest"
                  : "text-ink-soft hover:text-forest",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#coleccion"
            className={cn(buttonGhost, "hidden lg:inline-flex")}
          >
            Ver ejemplos
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonPrimary, "px-4 py-3 sm:px-5")}
          >
            <MessageCircle className="size-4" strokeWidth={1.75} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
