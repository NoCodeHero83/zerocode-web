"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  { value: "30+", label: "Proyectos enterprise entregados" },
  { value: "50+", label: "Clientes satisfechos" },
  { value: "15+", label: "Años de experiencia" },
  { value: "100%", label: "Tasa de éxito  " }
]

const technologies = [
  { name: "React", src: "/tech/react.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "TypeScript", src: "/tech/typescript.png" },
  { name: "Supabase", src: "/tech/supabase.svg" },
  { name: "Vercel", src: "/tech/vercel.svg" },
  { name: "Claude", src: "/tech/claude.svg" },
  { name: "Bolt", src: "/tech/bolt.svg" },
  { name: "Lovable", src: "/tech/lovable.svg" },
  { name: "v0", src: "/tech/v0.svg" },
  { name: "Cursor", src: "/tech/cursor.svg" },
]

export function Trust() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section 
      ref={ref}
      className="py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Credibility section */}
        <div 
          className={`text-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            La tecnología detrás de tu plataforma
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Construimos con el mismo stack que usan las empresas de clase mundial. Código real, ingenieros senior y arquitectura diseñada para escalar.
          </p>
        </div>

        {/* Tech logos */}
<div 
  className={`flex flex-wrap justify-center gap-6 sm:gap-8 transition-all duration-700 delay-300 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  {technologies.map((tech, index) => (
    <div 
      key={index}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="w-20 h-20 flex items-center justify-center">
        <img
          src={tech.src}
          alt={tech.name}
          className="w-16 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
        />
      </div>
      <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {tech.name}
      </span>
    </div>
  ))}
</div>

        {/* Global indicator */}
        <div 
          className={`mt-12 sm:mt-16 text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/30 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg sm:text-xl text-foreground font-medium mb-2">
            De Lima a Londres. De Bogotá a Nueva York.
          </p>
          <p className="text-sm text-muted-foreground">
            Clientes en Perú, Chile, Argentina, Colombia, Paraguay, México y Reino Unido. El modelo remoto no es una limitación, es cómo operamos desde el primer día.
          </p>
        </div>
      </div>
    </section>
  )
}
