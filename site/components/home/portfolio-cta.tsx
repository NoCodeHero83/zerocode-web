'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { SectionIcon } from '@/components/ui/section-icon'

interface PortfolioCtaProps {
  label?: string
  heading?: string
  button?: string
  href?: string
}

const defaults = {
  label: "Let's connect!",
  heading: 'Get a free 30-minute consultation to discuss your project.',
  button: "Let's have a quick chat",
  href: 'https://zerocode.la/contact/',
}

export function PortfolioCta({ label, heading, button, href }: PortfolioCtaProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  useEffect(() => {
    const preferNotAutoplay = localStorage.getItem('prefersReducedMotion') === 'true'
    if (videoRef.current && !preferNotAutoplay) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="py-16 sm:py-24 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`flex flex-col items-center gap-10 rounded-2xl border border-border/50 glass-card p-8 transition-all duration-700 lg:flex-row lg:p-12 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-full overflow-hidden rounded-xl lg:w-1/2 relative">
            <div className="pointer-events-none absolute inset-0 z-10" style={{ backdropFilter: 'blur(2px)' }} />
            <video
              ref={videoRef}
              src="/images/5869295_Indoors_Day_1280x720-1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-xl"
            />
          </div>

          <div className="flex w-full flex-col items-start lg:w-1/2">
            <div className="glass-card mb-6 inline-flex items-center gap-2 px-5 py-2">
              <SectionIcon />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {label ?? defaults.label}
              </span>
            </div>

            <h2 className="text-2xl font-medium text-balance text-foreground sm:text-3xl lg:text-4xl">
              {heading ?? defaults.heading}
            </h2>

            <div className="mt-8">
              <Button asChild variant="primary" size="lg">
                <Link href={href ?? defaults.href}>
                  {button ?? defaults.button}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
