'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { HomeContent } from '@/lib/content/home'
import { SectionIcon } from '@/components/ui/section-icon'

interface HeroProps {
  content: HomeContent['hero'] & {
    description: string
    dunsText: string
    verifyText: string
    getStartedText: string
  }
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative flex min-h-0 flex-col overflow-hidden px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:min-h-screen lg:px-8 lg:pt-[130px] lg:pb-28 xl:px-[60px] z-[1] animate-fadeIn" style={{ background: '#070b14' }}>
      {/* Hero Background Layers */}
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #0a1120 0%, #070b14 45%, #04070d 100%), linear-gradient(120deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 30%)' }} />
      <div className="pointer-events-none absolute inset-0 -z-10" style={{
        background: `
          radial-gradient(60% 50% at 62% 38%, rgba(33, 92, 199, 0.16) 0%, rgba(33, 92, 199, 0) 70%),
          radial-gradient(40% 35% at 20% 70%, rgba(33, 92, 199, 0.07) 0%, rgba(33, 92, 199, 0) 70%),
          radial-gradient(50% 45% at 85% 80%, rgba(33, 92, 199, 0.06) 0%, rgba(33, 92, 199, 0) 70%)
        `
      }} />
      <svg className="pointer-events-none absolute inset-0 -z-10 w-full h-full opacity-50" viewBox="0 0 1600 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path className="c1" d="M -100,180 C 350,60 700,320 1000,220 C 1250,140 1450,-40 1800,90" fill="none" stroke="rgba(140, 165, 200, 0.16)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path className="c2" d="M -100,480 C 300,360 650,600 950,480 C 1250,360 1500,180 1800,340" fill="none" stroke="rgba(140, 165, 200, 0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path className="c3" d="M -100,700 C 280,600 620,780 950,700 C 1280,620 1500,500 1800,580" fill="none" stroke="rgba(140, 165, 200, 0.09)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="pointer-events-none absolute left-[-25%] right-[-25%] bottom-0 h-[38%] -z-10 overflow-hidden" style={{
        maskImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0) 100%)',
      }}>
        <div className="absolute left-0 right-0 bottom-[-20%] h-[150%]" style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(120, 145, 180, 0.30) 0 1px, transparent 1px calc(100%/28)),
            repeating-linear-gradient(to top, rgba(120, 145, 180, 0.26) 0 1px, transparent 1px 46px)
          `,
          backgroundSize: 'calc(100%/28) 100%, 100% 46px',
          transform: 'perspective(480px) rotateX(58deg)',
          transformOrigin: 'bottom center',
          opacity: 0.8,
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, #070b14 0%, rgba(7,11,20,0) 18%, rgba(7,11,20,0) 82%, #070b14 100%)'
        }} />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" style={{
        background: `
          radial-gradient(120% 90% at 50% 40%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%),
          linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 14%, rgba(0,0,0,0) 78%, rgba(0,0,0,0.55) 100%)
        `
      }} />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-[22%] -z-10" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(2,3,6,0.85) 55%, #000000 100%)'
      }} />

      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start lg:flex-row lg:items-center lg:justify-between lg:gap-[40px]">
        <div className="w-full flex-shrink-0 lg:max-w-[700px]">
          <div className="flex justify-center lg:justify-start mb-10 lg:mb-6">
<div className="glass-card inline-flex items-center justify-start gap-2 px-5 py-2 animate-fadeInUp" style={{ animationDelay: '0ms' }}>
            <SectionIcon />
            <span className="text-sm font-regular uppercase tracking-widest text-white/70">{content.subheadline}</span>
          </div>
          </div>

          <h1 className="sr-only">{content.seoTitle}</h1>

          <h2 className="animate-fadeInUp text-[clamp(1.5rem,3vw,2.7rem)] font-medium leading-[1.12] text-white max-w-3xl font-heading tracking-tight" style={{ animationDelay: '100ms' }}>
            {content.headlinePart1}{' '}
            <span className="text-[#1683B8]">{content.headlinePart2}</span>
          </h2>

<p className="animate-fadeInUp mt-4 text-base sm:text-lg font-light text-white/70 max-w-2xl leading-[1.6] text-center lg:text-left mx-auto lg:mx-0" style={{ animationDelay: '200ms' }}>
  {content.description}
</p>

          <div className="animate-fadeInUp mt-4 flex flex-wrap items-center justify-start gap-3" style={{ animationDelay: '300ms' }}>
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

          <div className="animate-fadeInUp mt-8 flex flex-col sm:flex-row justify-start gap-4" style={{ animationDelay: '400ms' }}>
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

          <div className="flex justify-center lg:justify-start mt-10">
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

        <div className="hidden lg:block animate-fadeInRight" style={{ animationDelay: '200ms', width: '600px', flexShrink: 0 }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1.47' }}>
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#26277A]/12 via-transparent to-[#00DCFC]/6 rounded-[16px] blur-[100px]"
              aria-hidden="true"
            />

            {/* Primary Dashboard - dominant */}
            <Image
              src="/images/hero/dashboard1.png"
              alt="ZEROCODE dashboard interface — real product"
              width={3999}
              height={2729}
              priority
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: 'auto',
              }}
              className="rounded-[16px] border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
              sizes="600px"
            />

            {/* Secondary Dashboard */}
            <Image
              src="/images/hero/dashboard2.png"
              alt="ZEROCODE dashboard interface — real product"
              width={3999}
              height={2729}
              style={{
                position: 'absolute',
                left: '2%',
                bottom: '-19%',
                width: '70%',
                height: 'auto',
              }}
              className="rounded-[16px] border border-white/10 shadow-[0_20px_56px_rgba(0,0,0,0.35)] opacity-90"
              sizes="216px"
            />

            {/* Mobile screenshot */}
            <Image
              src="/images/hero/mobile1.png"
              alt="ZEROCODE mobile application — real product"
              width={1858}
              height={3999}
              style={{
                position: 'absolute',
                right: '5%',
                bottom: '-18%',
                width: '22%',
                height: 'auto',
              }}
              className="rounded-[12px] border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.25)] opacity-90"
              sizes="80px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
