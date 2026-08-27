'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { HomeContent } from '@/lib/content/home'
import { SectionIcon } from '@/components/ui/section-icon'
import { InteractiveNebulaShader } from '@/components/ui/interactive-nebula-shader'

interface HeroProps {
  content: HomeContent['hero'] & {
    description: string
    dunsText: string
    verifyText: string
    getStartedText: string
  }
}

export function Hero({ content }: HeroProps) {
  const [enableNebula, setEnableNebula] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnableNebula(!reduced)
  }, [])

  return (
    <section className="relative flex min-h-0 flex-col overflow-hidden px-4 pt-20 pb-0 sm:px-6 sm:pt-24 lg:pt-[130px] z-[1] animate-fadeIn" style={{ background: '#070b14' }}>
      {/* Background: WebGL nebula on all viewports (except reduced-motion) */}
      {enableNebula && <InteractiveNebulaShader />}

      {/* Smooth blend into the next section */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-[35%] -z-10" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(2,3,6,0.85) 55%, #000000 100%)'
      }} />

      {/* Centered hero content */}
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        <div className="flex justify-center mb-10 lg:mb-6">
          <div className="glass-card inline-flex items-center justify-center gap-2 px-5 py-2 animate-fadeInUp" style={{ animationDelay: '0ms' }}>
            <SectionIcon />
            <span className="text-sm font-regular uppercase tracking-widest text-white/70">{content.subheadline}</span>
          </div>
        </div>

        <h1 className="sr-only">{content.seoTitle}</h1>

        <h2 className="animate-fadeInUp text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1.1] text-white max-w-4xl font-heading tracking-tight" style={{ animationDelay: '100ms' }}>
          {content.headlinePart1}{' '}
          <span className="text-[#1683B8]">{content.headlinePart2}</span>
        </h2>

        <p className="animate-fadeInUp mt-5 text-base sm:text-lg font-light text-white/70 max-w-2xl leading-[1.6] mx-auto" style={{ animationDelay: '200ms' }}>
          {content.description}
        </p>

        <div className="animate-fadeInUp mt-4 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: '300ms' }}>
          <span className="text-sm font-regular uppercase tracking-wider text-white/70">{content.dunsText}</span>
          <a
            href="https://www.dnb.com/de-de/upik-en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium uppercase tracking-wider text-[#38bdf8] underline hover:no-underline text-sm"
          >
            {content.verifyText}
          </a>
        </div>

        <div className="animate-fadeInUp mt-8 flex flex-col sm:flex-row justify-center gap-4" style={{ animationDelay: '400ms' }}>
          <a
            href="https://zerocode.la/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#0A4A7A] bg-[#0A4A7A] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer min-h-[44px]"
          >
            {content.getStartedText}
            <svg className="size-4 transition-transform group-hover:translate-x-1" viewBox="0 0 320 512" fill="currentColor">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
            </svg>
          </a>
          <Link
            href={content.ctaHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:border-[#0A4A7A] hover:text-[#0A4A7A] cursor-pointer min-h-[44px]"
          >
            {content.cta}
            <svg className="size-4 transition-transform group-hover:translate-x-1" viewBox="0 0 320 512" fill="currentColor">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
            </svg>
          </Link>
        </div>

        <div className="flex justify-center mt-10">
          <a href="https://clutch.co/profile/zerocode-0?utm_source=widget&utm_medium=1&utm_campaign=widget&utm_content=stars&utm_term=cdpn.io#reviews" target="_blank" rel="noopener noreferrer" className="animate-fadeInUp inline-flex items-center gap-3 rounded-2xl border border-[rgba(56,189,248,0.15)] bg-[rgba(255,255,255,0.03)] px-5 py-3 transition-all hover:border-[rgba(56,189,248,0.3)]" style={{ animationDelay: '500ms' }}>
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
              <span className="text-xs text-white/50">Based on 3 Clutch reviews</span>
            </div>
          </a>
        </div>
      </div>

      {/* CRM board below the buttons — fades into black to blend with the rest of the page (hidden on mobile) */}
      <div className="relative mx-auto hidden w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:block mb-16 sm:mb-24">
        <div
          className="pointer-events-none absolute left-1/2 top-[-22%] w-[88%] -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            src="/images/hero/crm-glow.png"
            alt=""
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        <div
          className="relative"
          style={{
            maskImage: 'linear-gradient(to bottom, #000 72%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 72%, transparent 100%)',
          }}
        >
          <Image
            src="/images/hero/crm-board.png"
            alt="ZEROCODE dashboard interface — real product"
            width={1600}
            height={1000}
            priority
            className="w-full h-auto rounded-[16px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            sizes="1200px"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
