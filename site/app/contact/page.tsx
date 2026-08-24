import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SectionIcon } from '@/components/ui/section-icon'
import { ContactCalendly } from '@/components/contact/contact-calendly'
import { HeroBackground } from '@/components/ui/hero-background'

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call | Zerocode — Operational Bottleneck Fix',
  description: 'Schedule your free discovery call. Get full clarity on your operational bottleneck, how to fix it, and your exact payback timeline — all in Week 1.',
}

export default function ContactPage() {
  return (
    <>
      <Header locale="en" />
      <main className="relative overflow-hidden">
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <HeroBackground />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-4xl text-center animate-fadeInUp">
              <p className="gradient-border inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white" style={{ borderRadius: '15px', zIndex: 1, position: 'relative' }}>
                <SectionIcon />
                Free Consultation
              </p>
              <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                Zero to Revenue — the operational fix
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
                <p><em>In this call we will:</em></p>
                <ul className="list-disc list-inside text-left inline-block">
                  <li><em>Map the bottleneck that is capping your revenue right now</em></li>
                  <li><em>Tell you honestly whether a digital platform is the right solution or not</em></li>
                  <li><em>Show you exactly what Phase 1 would look like for your specific operation</em></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24 lg:pb-28 relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
            <ContactCalendly locale="en" />
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  )
}
