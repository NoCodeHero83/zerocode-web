'use client'

import type { HomeContent } from '@/lib/content/home'
import { SectionIcon } from '@/components/ui/section-icon'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const serviceIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="44" height="44" fill="white">
    <g>
      <path d="M390.65,175.9c26.08-17.14,43.33-46.65,43.33-80.11C433.98,42.97,391,0,338.18,0H173.82C121,0,78.02,42.97,78.02,95.79c0,33.46,17.25,62.97,43.33,80.11c-26.08,17.13-43.33,46.64-43.33,80.1s17.25,62.97,43.33,80.11c-26.08,17.12-43.33,46.64-43.33,80.1c0,52.82,43.21,95.79,96.31,95.79c53.68,0,97.36-43.44,97.36-96.83v-88.34c17.02,15.51,39.63,24.96,64.41,24.96h2.08c52.82,0,95.8-42.97,95.8-95.79C433.98,222.54,416.73,193.03,390.65,175.9z M271.69,31.38h66.49c35.52,0,64.42,28.89,64.42,64.41s-28.9,64.42-64.42,64.42h-66.49V31.38z M109.4,95.79c0-35.52,28.9-64.41,64.42-64.41h66.49v128.83h-66.49C138.3,160.21,109.4,131.31,109.4,95.79z M109.4,256c0-35.52,28.9-64.41,64.42-64.41h66.49v128.83h-66.9C138.08,320.2,109.4,291.38,109.4,256z M240.31,415.17c0,36.09-29.6,65.45-65.98,65.45c-35.8,0-64.93-28.89-64.93-64.41s28.9-64.42,64.42-64.42h66.49V415.17z M338.18,320.42h-2.08c-35.52,0-64.41-28.9-64.41-64.42s28.89-64.41,64.41-64.41h2.08c35.52,0,64.42,28.89,64.42,64.41S373.7,320.42,338.18,320.42z"/>
    </g>
  </svg>
)

const techLogos = [
  { src: '/images/bolt_white_optimized-1.png', alt: 'Bolt' },
  { src: '/images/claude_white_optimized.png', alt: 'Claude AI by Anthropic' },
  { src: '/images/google_antigravity_white_optimized.png', alt: 'Google Antigravity' },
  { src: '/images/lovable_white_optimized-1.png', alt: 'Lovable' },
  { src: '/images/supabase_white_optimized-1.png', alt: 'Supabase' },
]

interface ServicesProps {
  content: HomeContent['services']
  hideHeading?: boolean
}

export function Services({ content, hideHeading }: ServicesProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className={`lg:sticky lg:top-[148px] lg:self-start lg:w-[45%] lg:shrink-0 ${isVisible ? 'animate-zoomIn' : ''}`}>
            <div className="text-center lg:text-left">
              <span className="glass-card inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                <SectionIcon />
                {content.label}
              </span>
              {!hideHeading && (
                <h2 className="mt-4 text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
                  {content.heading}
                </h2>
              )}
              <div className="flex justify-center lg:justify-start mt-4">
                <div className="main-line">
                  <div className="line" />
                </div>
              </div>
              <p className="mt-4 text-base text-pretty text-white sm:text-lg">
                {content.description}
              </p>
              <p className="mt-8 text-sm font-bold uppercase tracking-widest text-white">
                Our expertise includes the following technologies:
              </p>
            </div>

            <div className="mt-6 overflow-hidden relative">
              <div className="flex gap-16 items-center relative" style={{ animation: 'scroll 40s linear infinite', display: 'flex', width: 'max-content' }}>
                {[...techLogos, ...techLogos].map((logo, index) => (
                  <div key={index} className="flex h-16 w-32 flex-shrink-0 items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-12 w-auto object-contain opacity-70"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 flex-1 flex flex-col gap-5">
            {content.items.map((service, index) => (
              <div
                key={service.title}
                className="glass-card service-card relative p-5 sm:p-6 animate-fadeInUp"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex size-24 shrink-0 items-center justify-center"
                    style={{
                      background: 'linear-gradient(90deg, rgb(45, 47, 134) 0%, rgb(1, 220, 252) 100%)',
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                  >
                    {serviceIcon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold uppercase tracking-wide text-foreground sm:text-lg">{service.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed sm:text-base">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}