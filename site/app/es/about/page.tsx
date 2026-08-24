import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Linkedin, Settings, HeartHandshake, Users, ShieldCheck, BookOpen, Zap } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Settings: <Settings className="size-6" />,
  HeartHandshake: <HeartHandshake className="size-6" />,
  Users: <Users className="size-6" />,
  ShieldCheck: <ShieldCheck className="size-6" />,
  BookOpen: <BookOpen className="size-6" />,
  Zap: <Zap className="size-6" />,
}
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PortfolioCta } from '@/components/home/portfolio-cta'
import { FinalCta } from '@/components/home/final-cta'
import { SectionIcon } from '@/components/ui/section-icon'
import { AboutVideo } from '@/components/about/about-video'
import { aboutContent } from '@/lib/content/about'
import { HeroBackground } from '@/components/ui/hero-background'

const content = aboutContent.es

export const metadata: Metadata = {
  title: 'Sobre Zerocode — Agencia de Desarrollo de Software Asistido por IA',
  description: 'Conozca la misión, el equipo y los valores de Zerocode. Ayudamos a empresas establecidas a eliminar cuellos de botella operativos.',
}

export default function AboutPageEs() {
  return (
    <>
      <Header locale="es" />
      <main className="relative overflow-hidden">
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
          <HeroBackground />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-4xl text-center animate-fadeInUp">
              <p className="gradient-border inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white" style={{ borderRadius: '15px', zIndex: 1, position: 'relative' }}>
                <SectionIcon />
                {content.hero.label}
              </p>
              <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                {content.hero.heading}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
                {content.hero.paragraphs.map((p, i) => (
                  <p key={i} className="animate-fadeInUp" style={{ animationDelay: `${200 + i * 100}ms` }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-28 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 animate-fadeInUp">
              <p className="gradient-border inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white" style={{ borderRadius: '15px', zIndex: 1, position: 'relative' }}>
                <SectionIcon />
                {content.coreValues.label}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                {content.coreValues.heading}
              </h2>
              <div className="main-line mt-3 flex justify-center">
                <div className="line" />
              </div>
              <p className="mt-4 text-foreground/70">{content.coreValues.subtitle}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.coreValues.values.map((value, i) => (
                <div
                  key={value.title}
                  className="glass-card group relative p-6 animate-fadeInRight"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white/40 transition-colors group-hover:bg-white/20 group-hover:text-white">
                    <ArrowRight className="size-4" />
                  </div>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#00dcfc]/10 text-[#00dcfc]">
                      {iconMap[value.icon] || <div className="size-6" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                      <p className="mt-1.5 text-base text-foreground/70">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-28 relative">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <p className="gradient-border inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white animate-fadeInUp" style={{ borderRadius: '15px', zIndex: 1, position: 'relative' }}>
                <SectionIcon />
                {content.team.label}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                {content.team.heading}
              </h2>
              <p className="mt-3 text-foreground/70 animate-fadeInUp" style={{ animationDelay: '200ms' }}>{content.team.subtitle}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {content.team.members.map((member, i) => (
                <div
                  key={member.name}
                  className="glass-card animate-fadeIn p-6"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="relative mx-auto mb-4 size-48 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="192px"
                      className="object-cover object-top"
                    />
                    {member.linkedin && (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-110"
                      >
                        <Linkedin className="size-5" />
                      </Link>
                    )}
                  </div>
                  <h3 className="text-center text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-center text-sm font-medium text-[#00dcfc]">{member.role}</p>
                  <p className="mt-3 text-center text-sm leading-relaxed text-foreground/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutVideo
          label={content.video.label}
          heading={content.video.heading}
          description={content.video.description}
          videoId={content.video.videoId}
        />

        <PortfolioCta
          label={content.cta.label}
          heading={content.cta.heading}
          button={content.cta.button}
          href={content.cta.href}
        />

        <FinalCta content={{ href: content.contact.href }} locale="es" />
      </main>
      <Footer locale="es" />
    </>
  )
}
