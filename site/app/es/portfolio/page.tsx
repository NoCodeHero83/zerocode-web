import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PortfolioHighlights } from '@/components/home/portfolio-highlights'
import { PortfolioCta } from '@/components/home/portfolio-cta'
import { SectionIcon } from '@/components/ui/section-icon'
import { homeContent } from '@/lib/content/home'
import { PageHeroBackground } from '@/components/ui/page-hero-background'

const content = homeContent.es

export const metadata: Metadata = {
  title: 'Portafolio — Sistemas Digitales | Zerocode',
  description: 'Explore nuestro portafolio de sistemas digitales que impulsan el crecimiento de ingresos y la escala operativa.',
}

export default function PortfolioPageEs() {
  return (
    <>
      <Header locale="es" />
      <main className="relative overflow-hidden">
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <PageHeroBackground />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 animate-fadeInUp">
              <p className="glass-card inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                <SectionIcon />
                {content.portfolio.label}
              </p>
              <h1 className="mt-3 text-3xl font-medium text-balance text-foreground sm:text-4xl lg:text-5xl">
                {content.portfolio.heading}
              </h1>
            </div>
          </div>
        </section>

        <PortfolioHighlights content={content.portfolio} hideHeading />
        <PortfolioCta />
      </main>
      <Footer locale="es" />
    </>
  )
}
