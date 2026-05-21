"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Video() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section 
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
            Nos quedamos hasta que el negocio funcione.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            No solo construimos tu plataforma. Estamos contigo hasta que tus clientes no noten la diferencia.
          </p>
        </div>

        {/* Video embed */}
        <div 
          className={`relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl opacity-50 -z-10" />
          
          <div className="relative aspect-video bg-card">
            <iframe
    src="https://player.vimeo.com/video/1192861005" 
    style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none"}}
    allowFullScreen
    title="No somos otra agencia de desarrollo. Te explicamos por qué"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
