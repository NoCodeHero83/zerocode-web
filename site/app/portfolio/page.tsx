import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PortfolioHighlights } from '@/components/home/portfolio-highlights'
import { PortfolioCta } from '@/components/home/portfolio-cta'
import { homeContent } from '@/lib/content/home'
import { HeroBackground } from '@/components/ui/hero-background'

const content = homeContent.en

export const metadata: Metadata = {
  title: 'Portfolio — Custom Digital Systems | Zerocode',
  description: 'Explore our portfolio of custom digital systems that drive revenue growth and operational scale for businesses across industries.',
}

export default function PortfolioPage() {
  return (
    <>
      <Header locale="en" />
      <main className="relative overflow-hidden">
        <HeroBackground />

        <PortfolioHighlights content={content.portfolio} />
        <PortfolioCta />
      </main>
      <Footer locale="en" />
    </>
  )
}
