import type { Metadata } from "next";
import { ExampleGallery } from "@/components/landing/ExampleGallery";
import { Faq } from "@/components/landing/Faq";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { QuoteSection } from "@/components/landing/QuoteSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhatsIncluded } from "@/components/landing/WhatsIncluded";

export const metadata: Metadata = {
  title: "Invitaciones de boda digitales",
  description:
    "Invitaciones interactivas con cuenta regresiva, confirmación de asistencia y galería de fotos. Se comparten por WhatsApp y se ven perfectas en el celular.",
  openGraph: {
    type: "website",
    locale: "es_VE",
    siteName: "Invita",
    title: "Invitaciones de boda digitales | Invita",
    description:
      "Cuenta regresiva, confirmación de asistencia y galería de fotos en una página propia para tu boda.",
  },
};

export default function LandingPage() {
  return (
    <div className="flex flex-1 flex-col bg-ivory">
      <Hero />
      <ExampleGallery />
      <HowItWorks />
      <WhatsIncluded />
      <QuoteSection />
      <Testimonials />
      <Faq />
      <SiteFooter />
    </div>
  );
}
