'use client'

import Image from 'next/image'
import type { HomeContent } from '@/lib/content/home'
import { SectionIcon } from '@/components/ui/section-icon'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface TestimonialsProps {
  content: HomeContent['testimonials']
}

export function Testimonials({ content }: TestimonialsProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="glass-card inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
            <SectionIcon />
            {content.label}
          </p>
          <h2 className="mt-3 text-3xl font-medium text-balance text-foreground sm:text-4xl lg:text-5xl">
            {content.heading}
          </h2>
          <div className="flex justify-center mt-4">
            <div className="main-line">
              <div className="line" />
            </div>
          </div>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">{content.subtext}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-center">
          {content.items.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="testimonial-card flex flex-col animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div className="relative size-[100px] shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                  <Image src={testimonial.image} alt={testimonial.name} fill sizes="100px" className="object-cover" />
                </div>
                <div>
                  <p className="text-lg font-bold uppercase tracking-wide text-white">{testimonial.name}</p>
                  <p className="mt-2 text-sm font-semibold text-[#38bdf8] uppercase">{testimonial.company}</p>
                </div>
              </div>
              <p className="mt-8 flex-1 text-base leading-relaxed text-white/80 text-center">{`"${testimonial.quote}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}