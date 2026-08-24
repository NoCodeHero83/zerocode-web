import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SectionIcon } from '@/components/ui/section-icon'
import { blogContent } from '@/lib/content/blog'
import { HeroBackground } from '@/components/ui/hero-background'

const content = blogContent.es

export const metadata: Metadata = {
  title: 'Blog | Guías de Desarrollo de Software e IA — Zerocode',
  description:
    'Guías prácticas sobre desarrollo asistido por IA, migración de SaaS, costos de aplicaciones web y sistemas digitales que escalan.',
  alternates: {
    canonical: '/es/blog/',
    languages: {
      en: '/blog/',
      es: '/es/blog/',
    },
  },
}

export default function BlogPageEs() {
  return (
    <>
      <Header locale="es" />
      <main className="relative overflow-hidden">
        <section className="py-16 sm:py-24 lg:py-28 relative text-center overflow-hidden">
          <HeroBackground />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00dcfc] border border-[rgba(0,220,252,0.35)] rounded-full">
              <SectionIcon />
              {content.hero.tag}
            </p>
            <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-[46px] leading-tight">
              {content.hero.heading}
            </h1>
            <p className="mt-4 text-lg text-[rgba(255,255,255,0.68)] max-w-2xl mx-auto leading-relaxed">
              {content.hero.subtitle}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 relative">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {content.intro.heading}
            </h2>
            <p className="mt-1 text-[rgba(255,255,255,0.58)]">{content.intro.text}</p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {content.posts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,220,252,0.35)] hover:shadow-[0_16px_48px_rgba(0,220,252,0.08)]"
                >
                  <div className="flex-1 bg-[#0A0F1E] p-7 sm:p-8">
                    <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#00dcfc]">
                      {post.category}
                    </p>
                    <h3 className="mt-3.5 text-lg font-semibold text-foreground leading-snug">
                      {post.title}
                    </h3>
                  </div>
                  <div className="p-7 sm:p-8 pt-5 sm:pt-6">
                    <p className="text-sm text-[rgba(255,255,255,0.52)] leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wider text-[#00dcfc]">
                      Leer artículo &rsaquo;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </>
  )
}
