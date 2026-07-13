'use client'

import type { HomeContent } from '@/lib/content/home'
import { SectionIcon } from '@/components/ui/section-icon'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const processIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="44" height="44" fill="white">
    <g>
      <path d="M390.65,175.9c26.08-17.14,43.33-46.65,43.33-80.11C433.98,42.97,391,0,338.18,0H173.82C121,0,78.02,42.97,78.02,95.79c0,33.46,17.25,62.97,43.33,80.11c-26.08,17.13-43.33,46.64-43.33,80.1s17.25,62.97,43.33,80.11c-26.08,17.12-43.33,46.64-43.33,80.1c0,52.82,43.21,95.79,96.31,95.79c53.68,0,97.36-43.44,97.36-96.83v-88.34c17.02,15.51,39.63,24.96,64.41,24.96h2.08c52.82,0,95.8-42.97,95.8-95.79C433.98,222.54,416.73,193.03,390.65,175.9z M271.69,31.38h66.49c35.52,0,64.42,28.89,64.42,64.41s-28.9,64.42-64.42,64.42h-66.49V31.38z M109.4,95.79c0-35.52,28.9-64.41,64.42-64.41h66.49v128.83h-66.49C138.3,160.21,109.4,131.31,109.4,95.79z M109.4,256c0-35.52,28.9-64.41,64.42-64.41h66.49v128.83h-66.9C138.08,320.2,109.4,291.38,109.4,256z M240.31,415.17c0,36.09-29.6,65.45-65.98,65.45c-35.8,0-64.93-28.89-64.93-64.41s28.9-64.42,64.42-64.42h66.49V415.17z M338.18,320.42h-2.08c-35.52,0-64.41-28.9-64.41-64.42s28.89-64.41,64.41-64.41h2.08c35.52,0,64.42,28.89,64.42,64.41S373.7,320.42,338.18,320.42z"/>
    </g>
  </svg>
)

interface ProcessProps {
  content: HomeContent['process']
}

export function Process({ content }: ProcessProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12 sm:mb-16">
          <p className="glass-card inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
            <SectionIcon />
            {content.label}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
            {content.heading}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/images/0_Animation_Scope_720x1280.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {content.steps.map((step, index) => (
              <div
                key={step.title}
                className="glass-card process-card relative p-6 opacity-0 animate-fadeInRight"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex size-24 shrink-0 items-center justify-center"
                    style={{
                      background: 'linear-gradient(90deg, rgb(45, 47, 134) 0%, rgb(1, 220, 252) 100%)',
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                  >
                    {processIcon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold uppercase tracking-wide text-foreground">{step.title}</h3>
                    <p className="mt-2 text-base text-foreground/70 leading-relaxed">{step.description}</p>
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