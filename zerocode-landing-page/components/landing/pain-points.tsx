"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AlertTriangle, Clock, DollarSign, HelpCircle, XCircle } from "lucide-react"

const painPoints = [
  {
    icon: Clock, 
    title: "Has trabajado con otros equipos y el resultado no fue lo que esperabas.",
  },
  {
    icon: XCircle,
    title: "Te ofrecieron soluciones genéricas que no encajan con tu idea.",
  },
  {
    icon: AlertTriangle,
    title: "Tuviste malas experiencias con desarrolladores o agencias y no puedes arriesgarte una vez más",
  },
  {
    icon: HelpCircle,
    title: "Quieres lanzar tu producto pero no sabes por dónde empezar.",
  },
  {
    icon: DollarSign,
    title: "No encuentras un equipo que realmente te acompañe de inicio a fin.",
  }
]

export function PainPoints() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section 
      ref={ref}
      className="py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Has pasado por esto?
          </h2>
        </div>

        {/* Pain points grid */}
<div
  className={`rounded-3xl border border-border/50 bg-transparent p-6 sm:p-8 lg:p-10 transition-all duration-700 ${
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8"
  }`}
>
  <div className="space-y-6">
    {painPoints.map((point, index) => (
      <div
        key={index}
        className="flex items-start gap-4"
      >
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
          <point.icon className="w-5 h-5 text-destructive" />
        </div>

        {/* Text */}
        <h3 className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
          {point.title}
        </h3>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  )
}
