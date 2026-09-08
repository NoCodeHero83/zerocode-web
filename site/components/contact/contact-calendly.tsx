'use client'

import { useEffect, useRef } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface Props {
  locale: string
}

export function ContactCalendly({ locale }: Props) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const loadedRef = useRef(false)

  useEffect(() => {
    if (loadedRef.current) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    loadedRef.current = true
  }, [])

  const isEs = locale === 'es'

  // Copia exacta del widget premium de /lets-talk (final-cta.tsx)
  const url = isEs
    ? 'https://calendly.com/andres-diaz-/llamada-de-diagnostico-zerocode?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=7c3aed'
    : 'https://calendly.com/andres-diaz-/discoverycall?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=7c3aed'

  const copy = isEs
    ? {
        heading: 'Todo lo que necesitas saber en una sola llamada',
      }
    : {
        heading: 'Everything you need to know in a single call',
      }

  return (
    <section id="calendly" ref={ref} className="py-20 sm:py-28 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — heading only, 1pt less weight / 2pt less size / full width */}
        <div
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="w-full text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            {copy.heading}
          </h2>
        </div>

        {/* Calendly embed — contenedor premium perfectamente alineado */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-card shadow-2xl shadow-primary/10">
            <div
              className="calendly-inline-widget"
              data-url={url}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
