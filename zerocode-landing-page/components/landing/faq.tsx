"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Ya lo intentamos con otro proveedor, ¿por qué esta vez sería diferente?",
    answer: "Porque ves el producto antes de comprometer tu inversión completa. El discovery mapea tus requerimientos reales, construimos el frontend completo y definimos alcance, presupuesto y tiempos antes de que empiece el desarrollo. Sin sorpresas, sin scope abierto."
  },
  {
    question: "¿Cómo garantizan que nuestros clientes actuales no noten la transición?",
    answer: "La migración se planifica en la Semana 1, no después de la entrega. Definimos el protocolo de ejecución paralela, los puntos de validación de datos y el cronograma de comunicación con clientes antes de que empiece el desarrollo. Tus clientes no van a notar nada excepto que todo funciona mejor."
  },
  {
    question: "¿Quién es el dueño del código?",
    answer: "Tú. Desde el día 1 firmamos NDA y acuerdo de propiedad intelectual. En la entrega recibís el código completo, la documentación y una sesión de capacitación para tu equipo. Nunca dependés de nosotros a menos que así lo eliges."
  },
  {
    question: "¿Cuánto cuesta y cómo se estructuran los pagos?",
    answer: "Trabajamos con precio fijo atado a hitos claros. Sin facturas abiertas ni cambios sorpresa. Cada pago está atado a un entregable real que podés ver y aprobar. La mayoría de nuestros clientes recuperan el costo total del desarrollo en 4 a 6 meses solo con los ahorros en SaaS y reducción de trabajo manual."
  },
  {
    question: "¿Qué pasa después del lanzamiento?",
    answer: "30 días de soporte post lanzamiento para resolver cualquier ajuste antes de que llegue a tus clientes. En el Día 90 definimos el roadmap de la Fase 2 con claridad sobre lo que viene. La mayoría de nuestros clientes continúan como socios tecnológicos a largo plazo más allá del desarrollo inicial."
  },
  {
    question: "¿Cómo entregan más rápido manteniendo la calidad de primer nivel?",
    answer: "Combinamos ingenieros senior con desarrollo asistido por inteligencia artificial. La IA acelera interfaces, código base y lógica repetitiva. Los ingenieros diseñan la arquitectura y validan cada decisión. El resultado es código listo para producción entregado más rápido que una agencia tradicional — sin comprometer seguridad, escalabilidad ni rendimiento."
  }
]

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section 
      ref={ref}
      className="py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
            Lo que más nos preguntan, respondidas sin rodeos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div 
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-xl bg-card px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-lg text-left hover:no-underline py-5 text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
