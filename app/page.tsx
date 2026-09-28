import type { Metadata } from 'next'

import { ExampleGallery } from '@/components/landing/ExampleGallery'
import { Faq } from '@/components/landing/Faq'
import { Hero } from '@/components/landing/Hero'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { QuoteSection } from '@/components/landing/QuoteSection'
import { SiteFooter } from '@/components/landing/SiteFooter'
import { SiteHeader } from '@/components/landing/SiteHeader'
import { Testimonials } from '@/components/landing/Testimonials'
import { WhatsIncluded } from '@/components/landing/WhatsIncluded'
import { site } from '@/lib/content/site'

/**
 * Product landing page — "Botanical Heirloom".
 *
 * Only the composition lives here; every section is its own module and all
 * Spanish copy comes from `lib/content/landing.ts` / `lib/content/site.ts`.
 * Design tokens live in `app/globals.css`.
 *
 * Mobile-first: check every change at a 375px viewport before anything wider.
 * `/admin` is never referenced from this page (see AGENTS.md › Route structure).
 */
export const metadata: Metadata = {
  title: 'Invitaciones de boda digitales | Invita',
  description:
    'Invitaciones digitales interactivas diseñadas a mano para bodas inolvidables: cuenta regresiva, música, mapas y confirmación de asistencia. Se comparten por WhatsApp y se ven perfectas en el celular.',
  openGraph: {
    type: 'website',
    locale: 'es_VE',
    siteName: site.name,
    title: 'Invitaciones de boda digitales | Invita',
    description:
      'Cuenta regresiva, música, mapas y confirmación de asistencia en una página propia para tu boda.',
  },
}

export default function LandingPage() {
  return (
    <main className="paper-texture bg-ivory">
      <SiteHeader />
      <Hero />
      <ExampleGallery />
      <HowItWorks />
      <WhatsIncluded />
      <QuoteSection />
      <Testimonials />
      <Faq />
      <SiteFooter />
    </main>
  )
}
