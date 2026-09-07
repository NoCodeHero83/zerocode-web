import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageHeroBackground } from '@/components/ui/page-hero-background'
import { SectionIcon } from '@/components/ui/section-icon'
import { FintechSolutionSection } from '@/components/fintech/fintech-solution-section'
import { fintechContent } from '@/lib/content/fintech'

const content = fintechContent.en

export const metadata: Metadata = {
  title: 'Fintech Solutions — White-Label Banking, Wallet & Core | Zerocode',
  description:
    'Proven fintech foundations ready as white-label / SaaS: App Bancaria, Billetera Virtual (React Native + Supabase) and Core Bancario multipurpose. Launch faster with Zerocode.',
  alternates: {
    canonical: '/fintech/',
    languages: {
      en: '/fintech/',
      es: '/es/fintech/',
    },
  },
}

export default function FintechPage() {
  return (
    <>
      <Header locale="en" />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <PageHeroBackground />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-4xl text-center">
              <p className="glass-card !rounded-none inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white animate-fadeInUp">
                <SectionIcon />
                {content.hero.label}
              </p>
              <h1 className="mt-4 text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                {content.hero.title} <span className="text-[#00dcfc]">{content.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-3xl mx-auto text-pretty animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                {content.hero.description}
              </p>

              {content.hero.bullets.length > 0 && (
                <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                  {content.hero.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80"
                    >
                      <span className="size-1.5 bg-[#00dcfc] inline-block" />
                      {bullet}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <Link
                  href={content.hero.ctaHref}
                  className="inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-xl"
                >
                  {content.hero.cta}
                  <ArrowRight className="size-4" />
                </Link>
                <span className="text-xs uppercase tracking-widest text-white/40">
                  {content.hero.secondaryNote}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions — with CTA between each */}
        {content.solutions.map((solution, idx) => (
          <div key={solution.id}>
            <FintechSolutionSection solution={solution} index={idx} reverse={idx % 2 === 1} />
            {idx < content.solutions.length - 1 && (
              <div className="flex justify-center -mt-4 mb-4">
                <Link
                  href={content.hero.ctaHref}
                  className="inline-flex items-center gap-2 bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90"
                >
                  {content.hero.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            )}
          </div>
        ))}

        {/* Closing */}
        <section className="py-16 sm:py-24 lg:py-28 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center frosted-card !rounded-none p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
                {content.closing.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/70 text-pretty">
                {content.closing.description}
              </p>
              <Link
                href={content.closing.ctaHref}
                className="mt-8 inline-flex items-center gap-2 bg-[#00dcfc] px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-[#00dcfc]/90 hover:shadow-xl hover:shadow-[#00dcfc]/20"
              >
                {content.closing.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  )
}
