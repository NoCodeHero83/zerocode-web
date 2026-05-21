"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Phone, Zap, BarChart3, Code2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Entendemos tu idea y definimos el objetivo",
    description: "Alineamos tu producto, el problema que resuelve y cómo se ve el éxito."
  },
  {
    number: "02",
    icon: Zap,
    title: "Creamos el prototipo y validamos la idea",
    description: "Construimos una versión funcional rápida y exacta para validar el valor del producto."
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Construimos el producto ya validado",
    description: "Desarrollamos solo lo que ha demostrado funcionar en la fase de validación."
  },
  {
    number: "04",
    icon: Code2,
    title: "Verificamos y te acompañamos en el lanzamiento",
    description: "Estabilizamos el producto y te apoyamos en el despliegue inicial."
  }
]

export function Process() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section 
      id="process"
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
            Lo logramos en 4 pasos
          </h2>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step number */}
                <div className="relative z-10 w-12 h-12 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/25">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile & Tablet */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex gap-4 p-4 sm:p-6 rounded-2xl bg-card border border-border/50 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/25">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
