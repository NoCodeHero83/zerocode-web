'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { HomeContent } from '@/lib/content/home'
import { SectionIcon } from '@/components/ui/section-icon'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface FaqProps {
  content: HomeContent['faq']
}

export function Faq({ content }: FaqProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-10 text-center sm:mb-12">
          <p className="glass-card inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
            <SectionIcon />
            {content.label}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
            {content.heading}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {content.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="faq-accordion rounded-xl border border-border/50 bg-[rgba(255,255,255,0.04)] px-6 transition-colors data-[state=open]:border-primary/30 data-[state=open]:bg-[rgba(255,255,255,0.06)]"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
