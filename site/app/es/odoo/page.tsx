import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Star, Code, Server, Layout, Plug } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageHeroBackground } from '@/components/ui/page-hero-background'
import { SectionIcon } from '@/components/ui/section-icon'
import { odooContent } from '@/lib/content/odoo'

const content = odooContent.es

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="size-6" />,
  Server: <Server className="size-6" />,
  Layout: <Layout className="size-6" />,
  Plug: <Plug className="size-6" />,
}

export const metadata: Metadata = {
  title: 'Soluciones Odoo ERP & CRM — Implementación y Personalización | Zerocode',
  description:
    'Desarrollo e integración sobre Odoo para optimización de negocios: automatización API, vistas personalizadas, facturación electrónica e implementación completa de módulos.',
  alternates: {
    canonical: '/es/odoo/',
    languages: { en: '/odoo/', es: '/es/odoo/' },
  },
}

export default function OdooPageEs() {
  return (
    <>
      <Header locale="es" />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
          <PageHeroBackground />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-4xl text-center">
              <p className="glass-card !rounded-none inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white animate-fadeInUp">
                <SectionIcon />
                {content.hero.label}
              </p>
              <h1 className="mt-4 text-3xl font-medium text-balance text-foreground sm:text-4xl lg:text-5xl animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                {content.hero.title} <span className="text-[#00dcfc]">{content.hero.titleAccent}</span>
              </h1>
              <p className="mt-5 text-lg text-foreground/70 max-w-3xl mx-auto text-pretty animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                {content.hero.description}
              </p>
              {content.hero.bullets.length > 0 && (
                <div className="mt-6 flex flex-wrap justify-center gap-3 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                  {content.hero.bullets.map((bullet) => (
                    <span key={bullet} className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80">
                      <span className="size-1.5 bg-[#00dcfc] inline-block" />
                      {bullet}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <Link href={content.hero.ctaHref} className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-xl">
                  {content.hero.cta}
                  <ArrowRight className="size-4" />
                </Link>
                <span className="text-xs uppercase tracking-widest text-white/40">{content.hero.secondaryNote}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-10 sm:py-16 lg:py-20 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <p className="glass-card !rounded-none inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                <SectionIcon />
                {content.techStack.label}
              </p>
              <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">{content.techStack.title}</h2>
              <p className="mt-2 text-base text-foreground/60">{content.techStack.subtitle}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {content.techStack.items.map((item) => (
                <div key={item.title} className="frosted-card p-6 group hover:border-[#00dcfc]/30 transition-colors">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#00dcfc]/10 text-[#00dcfc] mb-4">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#00dcfc]">{item.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.description}</p>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-foreground/60">
                        <CheckCircle2 className="size-3 shrink-0 text-[#00dcfc]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-10 sm:py-16 lg:py-20 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <p className="glass-card !rounded-none inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                <SectionIcon />
                {content.featuredProject.label}
              </p>
              <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">{content.featuredProject.title}</h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="relative">
                <div className="absolute left-[29px] top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
                <div className="space-y-4">
                  {content.featuredProject.steps.map((step) => (
                    <div key={step.number} className="frosted-card p-5 sm:p-6 sm:pl-20 relative group hover:border-[#00dcfc]/30 transition-colors">
                      <div className="hidden sm:flex absolute left-0 top-5 -translate-x-1/2 size-14 items-center justify-center rounded-full border border-[#00dcfc]/30 bg-background text-[#00dcfc] text-sm font-bold">
                        {step.number}
                      </div>
                      <span className="sm:hidden text-xs font-bold text-[#00dcfc] uppercase tracking-widest">Paso {step.number}</span>
                      <h3 className="mt-1 text-base font-bold uppercase tracking-wide text-foreground">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Module Catalog */}
        <section className="py-10 sm:py-16 lg:py-20 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <p className="glass-card !rounded-none inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                <SectionIcon />
                {content.moduleCatalog.label}
              </p>
              <h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">{content.moduleCatalog.title}</h2>
              <p className="mt-2 text-base text-foreground/60">{content.moduleCatalog.description}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.moduleCatalog.groups.map((group) => (
                <div key={group.title} className="frosted-card p-6 hover:border-[#00dcfc]/30 transition-colors">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#00dcfc] inline-block" />
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {group.modules.map((mod) => (
                      <li key={mod.name} className="flex gap-2.5 text-sm leading-relaxed text-foreground/75">
                        {mod.hasExperience ? (
                          <Star className="size-3.5 shrink-0 mt-1 text-[#00dcfc] fill-[#00dcfc]" />
                        ) : (
                          <CheckCircle2 className="size-3.5 shrink-0 mt-1 text-[#00dcfc]" />
                        )}
                        <span>
                          <span className="font-semibold text-white">{mod.name}</span>
                          {mod.description && <span className="text-foreground/60"> — {mod.description}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs uppercase tracking-widest text-white/40">
              <Star className="size-3 inline-block mr-1 fill-[#00dcfc] text-[#00dcfc]" /> = Módulos con experiencia comprobada de implementación
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="py-10 sm:py-16 lg:py-20 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center frosted-card p-8 sm:p-10">
              <h2 className="text-2xl font-medium text-foreground sm:text-3xl lg:text-4xl text-balance">{content.closing.title}</h2>
              <p className="mt-3 text-base text-foreground/70 text-pretty">{content.closing.description}</p>
              <Link href={content.closing.ctaHref} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-xl">
                {content.closing.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </>
  )
}
