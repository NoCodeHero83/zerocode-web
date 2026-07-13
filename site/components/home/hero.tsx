'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { HomeContent } from '@/lib/content/home'
import { SectionIcon } from '@/components/ui/section-icon'

interface HeroProps {
  content: HomeContent['hero']
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-4 pt-[130px] pb-20 sm:px-6 lg:px-[60px] z-[1] animate-fadeIn">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundColor: '#000000',
          backgroundImage: 'url(/images/testsvg.svg)',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      <div className="mx-auto flex w-full max-w-full flex-col items-center lg:flex-row lg:items-center lg:gap-0">
        <div className="hidden lg:block lg:flex-1" />

        <div className="flex w-full max-w-[880px] flex-shrink-0 flex-col items-center text-center">
          <div className="glass-card flex items-center justify-center gap-2 px-5 py-2 mb-4">
            <SectionIcon />
            <span className="text-sm font-semibold uppercase tracking-widest text-white">Your business isn&apos;t the problem.</span>
          </div>

          <h1 className="sr-only">{content.seoTitle}</h1>

          <h2 className="animate-fadeInUp text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] text-white max-w-3xl font-heading" style={{ animationDelay: '0ms' }}>
            The tools running it are{' '}
            <span className="text-[#00DCFC]">CAPPING YOUR REVENUE</span>
          </h2>

          <p className="animate-fadeInUp mt-5 mx-auto text-base sm:text-lg text-white max-w-2xl leading-relaxed" style={{ animationDelay: '300ms' }}>
            We help established businesses that have more demand than they can handle or{' '}
            <span className="font-normal text-white">reach markets they can&apos;t serve yet</span>, 
            fix the operational bottleneck costing them clients and revenue, without risking what they&apos;ve already built.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium uppercase tracking-wider text-white">VERIFIED DUNS NUMBER: 751503449</span>
            <a
              href="https://www.dnb.com/de-de/upik-en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fadeInUp font-medium uppercase tracking-wider text-[#38bdf8] underline hover:no-underline text-sm"
              style={{ animationDelay: '500ms' }}
            >
              Verify
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://zerocode.la/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fadeInUp group inline-flex items-center gap-2 rounded-full border border-[#0A4A7A] bg-[#0A4A7A] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer"
              style={{ animationDelay: '400ms' }}
            >
              Get started
              <svg className="size-4 transition-transform group-hover:translate-x-1" viewBox="0 0 320 512" fill="currentColor">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
              </svg>
            </a>
            <Link
              href={content.ctaHref}
              className="animate-fadeInUp group inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-[#0A4A7A] hover:text-[#0A4A7A] cursor-pointer"
              style={{ animationDelay: '500ms' }}
            >
              {content.cta}
              <svg className="size-4 transition-transform group-hover:translate-x-1" viewBox="0 0 320 512" fill="currentColor">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
              </svg>
            </Link>
          </div>

          <a
            href="https://clutch.co/profile/zerocode-0?utm_source=widget&utm_medium=1&utm_campaign=widget&utm_content=stars&utm_term=cdpn.io#reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fadeInUp mt-8 inline-flex items-center gap-3 rounded-2xl border border-[rgba(56,189,248,0.15)] bg-[rgba(255,255,255,0.03)] px-5 py-3 transition-all hover:border-[rgba(56,189,248,0.3)]"
            style={{ animationDelay: '600ms' }}
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
              <span className="text-xs text-white/50">Based on 3 Clutch reviews</span>
            </div>
          </a>

          <div className="animate-fadeInUp mt-10 w-full overflow-hidden" style={{ animationDelay: '700ms' }}>
            <div className="infinite-scroll-wrapper">
              <div className="flex gap-8 items-center" style={{ animation: 'scroll 40s linear infinite', display: 'flex', width: 'max-content' }}>
                {[
                  '/images/thumb_0x0_convert_f9ee12e7ef999eef2afedb2748a8b4de.png',
                  '/images/thumb_0x0_convert_3df2b85a3f445e755da04aef6a4701d8.png',
                  '/images/thumb_0x0_convert_925f908f0fc4237921cddbdb2814f314.png',
                  '/images/top_clutch.co_it_services_company_peru_2025.svg',
                ].map((src, i) => (
                  <div key={i} className="flex-shrink-0 overflow-hidden rounded-2xl size-[120px]">
                    <img
                      src={src}
                      alt={i < 3 ? 'Zerocode client testimonial photo' : 'Top Clutch IT Services Company Peru 2025'}
                      className="size-full object-contain"
                    />
                  </div>
                ))}
                {[
                  '/images/thumb_0x0_convert_f9ee12e7ef999eef2afedb2748a8b4de.png',
                  '/images/thumb_0x0_convert_3df2b85a3f445e755da04aef6a4701d8.png',
                  '/images/thumb_0x0_convert_925f908f0fc4237921cddbdb2814f314.png',
                  '/images/top_clutch.co_it_services_company_peru_2025.svg',
                ].map((src, i) => (
                  <div key={i + 4} className="flex-shrink-0 overflow-hidden rounded-2xl size-[120px]">
                    <img
                      src={src}
                      alt={i < 3 ? 'Zerocode client testimonial photo' : 'Top Clutch IT Services Company Peru 2025'}
                      className="size-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:flex-1" />
      </div>
    </section>
  )
}