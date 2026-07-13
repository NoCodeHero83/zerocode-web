import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { JsonLd } from '@/components/seo/json-ld'
import { Hero } from '@/components/home/hero'
import { ClientLogoCarousel } from '@/components/home/client-logo-carousel'
import { Stats } from '@/components/home/stats'
import { Services } from '@/components/home/services'
import { PortfolioHighlights } from '@/components/home/portfolio-highlights'
import { PortfolioCta } from '@/components/home/portfolio-cta'
import { Testimonials } from '@/components/home/testimonials'
import { Process } from '@/components/home/process'
import { Faq } from '@/components/home/faq'
import { AiVideoSection } from '@/components/home/ai-video-section'
import { FinalCta } from '@/components/home/final-cta'
import { homeContent } from '@/lib/content/home'
import { organizationSchema, websiteSchema, professionalServiceSchema, faqPageSchema } from '@/lib/seo/json-ld'

const content = homeContent.es

export const metadata: Metadata = {
  title: content.hero.seoTitle,
  alternates: {
    canonical: '/es/',
    languages: {
      en: '/',
      es: '/es/',
    },
  },
}

export default function HomeEs() {
  return (
    <>
      <JsonLd items={[organizationSchema, websiteSchema, professionalServiceSchema, faqPageSchema]} />
      <Header locale="es" />
      <main>
        <Hero content={content.hero} />
        <ClientLogoCarousel />
        <Stats stats={content.stats} />
        <Services content={content.services} />
        <PortfolioHighlights content={content.portfolio} />
        <PortfolioCta />
        <Testimonials content={content.testimonials} />
        <Process content={content.process} />
        <Faq content={content.faq} />
        <AiVideoSection />
        <PortfolioCta />
        <FinalCta content={content.finalCta} locale="es" />
      </main>
      <Footer locale="es" />
    </>
  )
}
