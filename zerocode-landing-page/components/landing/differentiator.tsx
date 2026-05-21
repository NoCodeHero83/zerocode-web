"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Lightbulb, Eye, CheckCircle, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "01",
    description: "Entendemos tu idea y el objetivo de tu negocio."
  },
  {
    icon: Eye,
    title: "02",
    description: "Creamos la interfaz funcional de tu producto con IA"
  },
  {
    icon: CheckCircle,
    title: "03",
    description: "Validas la intefaz con tus usuarios finales o stakeholders"
  },
  {
    icon: Rocket,
    title: "04",
    description: "Desarrollamos la versión final escalable de tu producto"
  }
]

export function Differentiator() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section 
      ref={ref}
      className="py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Explanation */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Validamos tu producto antes de desarrollarlo
            </h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/30 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mockup */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl rounded-3xl" />
              
              {/* Mockup container */}
              <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden shadow-2xl shadow-primary/10">
{/* Browser chrome */}
<div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
  <div className="flex gap-1.5">
    <div className="w-3 h-3 rounded-full bg-red-500/50" />
    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
    <div className="w-3 h-3 rounded-full bg-green-500/50" />
  </div>
</div>

{/* Real video */}
<div className="relative aspect-video bg-card">
  <iframe
    src="https://player.vimeo.com/video/1192860195" 
    style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none"}}
    allowFullScreen
    title="Ellos también solo tenían una idea. Hoy tienen un negocio digital."
  />
</div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 px-4 py-2 bg-card border border-border/50 rounded-xl shadow-lg">
                <p className="text-xs text-muted-foreground">Interfaces y prototipos 100% funcionales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
