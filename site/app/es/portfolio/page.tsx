import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PortfolioHighlights } from '@/components/home/portfolio-highlights'
import { PortfolioCta } from '@/components/home/portfolio-cta'
import { homeContent } from '@/lib/content/home'
import { HeroBackground } from '@/components/ui/hero-background'

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
        <HeroBackground />

        <PortfolioHighlights content={content.portfolio} />
        <PortfolioCta />
      </main>
      <Footer locale="es" />
    </>
  )
}
