"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useRef } from "react"

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()
  const calendlyLoaded = useRef(false)

  useEffect(() => {
    // Load Calendly script only once
    if (calendlyLoaded.current) return
    
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
    calendlyLoaded.current = true

    return () => {
      // Cleanup not needed as we want to keep the script
    }
  }, [])

  return (
    <section 
      id="calendly"
      ref={ref}
      className="py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Todo lo que necesitas saber, en una sola llamada.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Agenda una llamada de 30 minutos. Te decimos exactamente qué necesitas, cuánto cuesta y cuándo recuperas tu inversión. Si no tiene sentido para tu negocio, te lo decimos en esa misma llamada.
          </p>
        </div>

        {/* Calendly embed */}
        <div 
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-card shadow-2xl shadow-primary/10">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/andres-diaz-/llamada-de-diagnostico-zerocode?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=7c3aed"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
