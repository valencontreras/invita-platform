import type { Metadata } from "next";
import { Fraunces, Inter, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display face for headings on the landing page and the public invitations.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

// Calligraphic accent, reserved for couple names. Never used for UI copy.
const script = Mrs_Saint_Delafield({
  variable: "--font-script-accent",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Invita | Invitaciones de boda digitales",
    template: "%s | Invita",
  },
  description:
    "Invitaciones de boda digitales: una página propia para su boda, confirmación de asistencia en línea y panel de invitados.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} ${script.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
