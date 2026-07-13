import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PortfolioHighlights } from '@/components/home/portfolio-highlights'
import { PortfolioCta } from '@/components/home/portfolio-cta'
import { homeContent } from '@/lib/content/home'

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
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'url(/fonts/Ellipse-1-2.png)',
              backgroundPosition: 'bottom center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              opacity: 0.42,
            }}
          />

        <PortfolioHighlights content={content.portfolio} />
        <PortfolioCta />
      </main>
      <Footer locale="en" />
    </>
  )
}
