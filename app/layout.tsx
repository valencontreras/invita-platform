import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter, Newsreader } from "next/font/google";

import { site } from "@/lib/content/site";

import "./globals.css";

/**
 * "Botanical Heirloom" typography, self-hosted through next/font so the browser
 * makes no external font request: EB Garamond for display, Newsreader italic for
 * editorial accents, Inter for body and UI copy.
 */
const displayFont = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
});

const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const editorialFont = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

/**
 * Metadata for the whole app (the landing overrides title/description in
 * `app/page.tsx`).
 *
 * No `icons` entry on purpose: the favicon is served through Next's file
 * convention from `app/favicon.ico` — a real multi-size icon (16/32/48 BMP plus
 * a 256 PNG frame) — so Next emits the `<link rel="icon">` itself. Never point
 * `icons` at a file that is not there: the browser 404s on it instead of falling
 * back to the favicon, which is how this page ended up with four dead icon
 * links. To extend the set later, drop the file next to the favicon and Next
 * picks it up with no config: `app/icon.svg` (scalable, any screen density) or
 * `app/apple-icon.png` (180×180, iOS home screen).
 * `public/invita-logo.png` is the exported brand mark, not an icon: it is a
 * 1254×1254 / 957 kB PNG, so never reuse it as one.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Invita | Invitaciones digitales interactivas para bodas inolvidables",
  description:
    "Invitaciones digitales interactivas diseñadas a mano para bodas inolvidables: música, mapas, cuenta regresiva y confirmaciones RSVP en vivo.",
};

/** The landing and the invitations are light-only editorial surfaces. */
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fcf9f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${displayFont.variable} ${bodyFont.variable} ${editorialFont.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
