'use client'

import { CheckCircle2, Sparkles } from 'lucide-react'
import type { FintechSolution } from '@/lib/content/fintech'
import { FintechCarousel } from './fintech-carousel'
import { SectionIcon } from '@/components/ui/section-icon'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface Props {
  solution: FintechSolution
  index: number
  reverse?: boolean
}

export function FintechSolutionSection({ solution, index, reverse }: Props) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 lg:py-28 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — centered with elegant scroll animation */}
        <div
          className={`mx-auto mb-10 max-w-3xl text-center sm:mb-14 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {solution.label && (
            <p
              className={`glass-card !rounded-none inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <SectionIcon />
              {solution.label}
            </p>
          )}
          <h2
            className={`mt-4 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance text-center transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {solution.title}
          </h2>
          <p
            className={`mt-2 text-sm font-medium uppercase tracking-wide text-[#00dcfc] sm:text-base text-center transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {solution.subtitle}
          </p>
          <p
            className={`mt-4 text-base leading-relaxed text-foreground/70 sm:text-lg text-pretty text-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {solution.description}
          </p>
          {solution.highlight && (
            <div
              className={`mt-6 border border-[#00dcfc]/20 bg-[#00dcfc]/5 px-5 py-4 text-sm leading-relaxed text-foreground/80 text-center transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
            >
              <span className="inline-flex items-center justify-center gap-2 font-semibold text-[#00dcfc]">
                <Sparkles className="size-4" /> White-label advantage
              </span>
              <span className="block mt-1">{solution.highlight}</span>
            </div>
          )}
        </div>

        {/* Content grid — carousel protagonista, square professional */}
        <div
          className={`grid gap-8 lg:gap-12 items-start ${
            reverse ? 'lg:grid-cols-[0.85fr_1.15fr]' : 'lg:grid-cols-[1.15fr_0.85fr]'
          }`}
        >
          {/* Carousel — larger, square */}
          <div
            className={`${reverse ? 'lg:order-2' : 'lg:order-1'} transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <FintechCarousel
              images={solution.images}
              title={solution.title}
              variant={solution.id === 'core' ? 'desktop' : 'mobile'}
            />
            <p className="mt-3 text-center text-xs uppercase tracking-widest text-white/40">
              {solution.images.length} screens • ordered 1 → {solution.images.length}
            </p>
          </div>

          {/* Capabilities — staggered, square sober */}
          <div className={`space-y-5 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            {solution.capabilities.map((group, gi) => (
              <div
                key={group.title}
                className={`frosted-card !rounded-none p-6 sm:p-7 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + gi * 120}ms` }}
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-white flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                  <span className="size-1.5 rounded-full bg-[#00dcfc] inline-block" />
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                      <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-[#00dcfc]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
