import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SectionIcon } from '@/components/ui/section-icon'
import { ContactCalendly } from '@/components/contact/contact-calendly'

export const metadata: Metadata = {
  title: 'Reserva una llamada de descubrimiento gratuita | Zerocode',
  description: 'Programa tu llamada de descubrimiento gratuita. Obtén claridad total sobre tu cuello de botella operativo, cómo solucionarlo y tu cronograma de retorno exacto — todo en la Semana 1.',
}

export default function ContactPageEs() {
  return (
    <>
      <Header locale="es" />
      <main className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/fonts/Ellipse-1-2.png)',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 0.42,
          }}
        />
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-4xl text-center animate-fadeInUp">
              <p className="gradient-border inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white" style={{ borderRadius: '15px', zIndex: 1, position: 'relative' }}>
                <SectionIcon />
                Consulta Gratuita
              </p>
              <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                De Cero a Ingresos — la solución operacional
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
                <p><em>En esta llamada vamos a:</em></p>
                <ul className="list-disc list-inside text-left inline-block">
                  <li><em>Identificar el cuello de botella que está limitando tus ingresos ahora mismo</em></li>
                  <li><em>Decirte honestamente si una plataforma digital es la solución correcta o no</em></li>
                  <li><em>Mostrarte exactamente cómo sería la Fase 1 para tu operación específica</em></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24 lg:pb-28 relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
            <ContactCalendly locale="es" />
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </>
  )
}
