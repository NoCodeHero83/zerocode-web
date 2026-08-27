import type { Metadata } from 'next'
import { CalendarCheck, Newspaper, ListChecks, Rocket, SlidersHorizontal, Atom } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SectionIcon } from '@/components/ui/section-icon'
import { Services } from '@/components/home/services'
import { Testimonials } from '@/components/home/testimonials'
import { PortfolioCta } from '@/components/home/portfolio-cta'
import { servicesContent } from '@/lib/content/services'
import { homeContent } from '@/lib/content/home'
import { HeroBackground } from '@/components/ui/hero-background'

const processIconMap: Record<string, React.ReactNode> = {
  CalendarCheck: <CalendarCheck className="size-7" />,
  Newspaper: <Newspaper className="size-7" />,
  ListChecks: <ListChecks className="size-7" />,
  Rocket: <Rocket className="size-7" />,
  SlidersHorizontal: <SlidersHorizontal className="size-7" />,
  Atom: <Atom className="size-7" />,
}

const content = servicesContent.en
const shared = homeContent.en

export const metadata: Metadata = {
  title: 'Services | AI-Assisted Development, Automation & Custom Software — Zerocode',
  description: 'Custom web apps, mobile apps, AI automations, and team augmentation. Fixed-price milestones, full IP ownership, no vendor lock-in.',
}

export default function ServicePage() {
  return (
    <>
      <Header locale="en" />
      <main className="relative overflow-hidden">
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <HeroBackground />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <p className="gradient-border inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white animate-fadeInUp" style={{ borderRadius: '15px', zIndex: 1, position: 'relative' }}>
                <SectionIcon />
                {content.hero.label}
              </p>
              <h1 className="mt-3 text-3xl font-medium text-balance text-foreground sm:text-4xl lg:text-5xl animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                {content.hero.heading}
              </h1>
              <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                {content.hero.description}
              </p>
            </div>
          </div>
        </section>

        <Services content={shared.services} hideHeading />

        <section className="py-16 sm:py-24 lg:py-28 relative">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl animate-fadeInUp">{content.designProcess.heading}</h2>
              <p className="mt-2 text-lg font-medium text-[#00dcfc]">{content.designProcess.subtitle}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.designProcess.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="glass-card animate-fadeInUp p-6"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex justify-center mb-5">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-[#00dcfc]/10 text-[#00dcfc]">
                      {processIconMap[step.icon] || <div className="size-7" />}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground text-center">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-28 relative">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl animate-fadeInUp">{content.devProcess.heading}</h2>
              <p className="mt-2 text-lg font-medium text-[#00dcfc]">{content.devProcess.subtitle}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.devProcess.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="glass-card animate-fadeInUp p-6"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex justify-center mb-5">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-[#00dcfc]/10 text-[#00dcfc]">
                      {processIconMap[step.icon] || <div className="size-7" />}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground text-center">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials content={shared.testimonials} />
        <PortfolioCta />
      </main>
      <Footer locale="en" />
    </>
  )
}
