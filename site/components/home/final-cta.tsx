'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import type { Locale } from '@/lib/nav'
import { SectionIcon } from '@/components/ui/section-icon'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface FinalCtaProps {
  content: {
    href: string
    label?: string
    heading?: string
    button?: string
  }
  locale?: Locale
}

const ctaCopy = {
  en: {
    badge: 'Contact Us',
    heading: "Let's Get In Touch!",
    description: 'Your Fractional CTO + Execution Team: We build the automations, systems, and software that grow revenue and cut costs — in 30 days or less. Guaranteed.',
    button: 'Schedule a Call',
    submit: 'Submit',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    company: 'Company',
    message: 'Message',
    clutchLabel: 'Based on 3 Clutch reviews',
  },
  es: {
    badge: 'Contáctenos',
    heading: '¡Pongámonos en contacto!',
    description: 'Su CTO Fraccionado + Equipo de Ejecución: Creamos las automatizaciones, sistemas y software que aumentan ingresos y reducen costos — en 30 días o menos. Garantizado.',
    button: 'Programe una llamada',
    submit: 'Enviar',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    company: 'Empresa',
    message: 'Mensaje',
    clutchLabel: 'Basado en 3 reseñas de Clutch',
  },
}

export function FinalCta({ content, locale = 'en' }: FinalCtaProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  const copy = ctaCopy[locale]

  return (
    <section className="py-16 sm:py-24 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-10 lg:gap-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="glass-card inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
              <SectionIcon />
              {copy.badge}
            </p>
            <h2 className="text-3xl font-medium text-balance text-foreground sm:text-4xl lg:text-5xl">
              {copy.heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              {copy.description}
            </p>
            <Link
              href={content.href}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#0A4A7A] bg-[#0A4A7A] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer"
            >
              <Phone className="size-4" />
              {copy.button}
            </Link>

            <div className="pt-4">
              <a
                href="https://clutch.co/profile/zerocode-0?utm_source=widget&utm_medium=1&utm_campaign=widget&utm_content=stars&utm_term=cdpn.io#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-[rgba(56,189,248,0.15)] bg-[rgba(255,255,255,0.03)] px-5 py-3 transition-all hover:border-[rgba(56,189,248,0.3)]"
              >
                <Image src="/images/image.png" alt="Clutch" width={48} height={44} className="object-contain" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">4.8</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="size-4 text-[#f0ad4e]" viewBox="0 0 1000 1000" fill="currentColor">
                          <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-white/50">{copy.clutchLabel}</span>
                </div>
              </a>
            </div>

            <div className="overflow-hidden pt-2">
              <div className="flex gap-6 items-center" style={{ animation: 'scroll 40s linear infinite', display: 'flex', width: 'max-content' }}>
                {[
                  '/images/thumb_0x0_convert_f9ee12e7ef999eef2afedb2748a8b4de.png',
                  '/images/thumb_0x0_convert_3df2b85a3f445e755da04aef6a4701d8.png',
                  '/images/thumb_0x0_convert_925f908f0fc4237921cddbdb2814f314.png',
                  '/images/top_clutch.co_it_services_company_peru_2025.svg',
                  '/images/thumb_0x0_convert_f9ee12e7ef999eef2afedb2748a8b4de.png',
                  '/images/thumb_0x0_convert_3df2b85a3f445e755da04aef6a4701d8.png',
                  '/images/thumb_0x0_convert_925f908f0fc4237921cddbdb2814f314.png',
                  '/images/top_clutch.co_it_services_company_peru_2025.svg',
                ].map((src, i) => (
                  <div key={i} className="flex-shrink-0 overflow-hidden rounded-2xl size-[90px]">
                    <img
                      src={src}
                      alt={i % 4 < 3 ? 'Zerocode client testimonial photo' : 'Top Clutch IT Services Company Peru 2025'}
                      className="size-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="glass-card p-8 sm:p-10">
              <p className="glass-card inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white mb-4">
                <SectionIcon />
                {copy.badge}
              </p>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-2">
                {copy.heading}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {copy.description}
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder={copy.firstName}
                    required
                    className="w-full rounded-xl border border-border/50 bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  />
                  <input
                    type="text"
                    placeholder={copy.lastName}
                    required
                    className="w-full rounded-xl border border-border/50 bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  />
                </div>
                <input
                  type="email"
                  placeholder={copy.email}
                  required
                  className="w-full rounded-xl border border-border/50 bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <input
                  type="text"
                  placeholder={copy.company}
                  required
                  className="w-full rounded-xl border border-border/50 bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <textarea
                  placeholder={copy.message}
                  rows={4}
                  className="w-full rounded-xl border border-border/50 bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 resize-none"
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full border border-[#0A4A7A] bg-[#0A4A7A] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer"
                  >
                    {copy.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
