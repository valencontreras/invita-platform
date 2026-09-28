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
 * No `icons` entry on purpose: every icon is served through Next's file
 * convention, so Next emits the `<link>` tags itself. `app/favicon.ico` is a real
 * multi-size icon — PNG frames at 16/32/48/64/128/256 — and `app/icon.png`
 * (512×512) plus `app/apple-icon.png` (180×180, iOS home screen) sit next to it.
 * Never point `icons` at a file that is not there: the browser 404s on it instead
 * of falling back to the favicon, which is how a previous version of this page
 * ended up with four dead icon links. To extend the set, drop the file next to
 * the favicon and Next picks it up with no config (`app/icon.svg` for a scalable
 * option).
 * `public/invita-logo.png` is the exported brand mark the three icons were drawn
 * from, not an icon itself: it is a 1254×1254 / 957 kB PNG, so never reuse it as
 * one.
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
