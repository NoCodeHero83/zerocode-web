"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Zerocode ofrece servicios de desarrollo de software excepcionales. Su equipo es altamente capacitado, cumple con los plazos establecidos y entrega soluciones de gran calidad. Totalmente recomendados.",
    name: "Manuel Montes de Oca",
    role: "CTO",
    company: "Supra Networks",
    image: "/testimonials/Manuel.jpeg"
  },
  {
    quote: "Zerocode brindó un servicio altamente eficiente y confiable. El equipo superó nuestras expectativas para entregar soluciones de primer nivel. Quedamos muy impresionados con su profesionalismo.",
    name: "Alejandro García Soto",
    role: "CTO",
    company: "Tok&Go",
    image: "/testimonials/Alejandro-Garcia.png"
  },
  {
    quote: "Zerocode llegó cuando nuestro sitio web ya llevaba varios meses en desarrollo. Nuestro desarrollador anterior había abandonado el proyecto. El equipo transformó completamente nuestra plataforma y logró implementar funcionalidades que el proveedor previo consideraba imposibles.",
    name: "Pete Campbell",
    role: "Technical Leader",
    company: "Later Life Training",
    image: "/testimonials/Pete.jpeg"
  },
    {
    quote: "Estamos desarrollando una aplicación con escalabilidad de nivel bancario para toda Latinoamérica, ofreciendo servicios financieros tradicionales mediante una experiencia de onboarding 100% digital. Transformamos un proceso tradicionalmente complejo en una experiencia simple, rápida y completamente en línea.",
    name: "Sebastián Saenz",
    role: "CEO",
    company: "Alianza Capital",
    image: "/testimonials/Sebastian.png"
  }
]

export function Testimonials() {
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
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conoce las historias detrás de las relaciones que hemos construido con nuestros clientes.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>
              
              {/* Quote text */}
              <p className="text-foreground mb-6 leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>
              
              {/* Author */}
<div className="flex items-center gap-3">
  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
    {testimonial.image ? (
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-sm font-medium text-foreground">
        {testimonial.name.split(" ").map(n => n[0]).join("")}
      </div>
    )}
  </div>
  <div>
    <p className="font-medium text-foreground text-sm">
      {testimonial.name}
    </p>
    <p className="text-xs text-muted-foreground">
      {testimonial.role}, {testimonial.company}
    </p>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
