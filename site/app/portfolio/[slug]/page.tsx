import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { SectionIcon } from '@/components/ui/section-icon'
import { PortfolioCarousel } from '@/components/portfolio/portfolio-carousel'
import { PortfolioBusinessCase } from '@/components/portfolio/portfolio-business-case'
import { PortfolioCta } from '@/components/home/portfolio-cta'
import { homeContent } from '@/lib/content/home'
import { getPortfolioItemBySlug, getRelatedItems } from '@/lib/content/portfolio-items'
import { PageHeroBackground } from '@/components/ui/page-hero-background'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { portfolioItemsData } = await import('@/lib/content/portfolio-items')
  return portfolioItemsData.en.map((item) => ({
    slug: item.href.split('/').filter(Boolean).pop() || '',
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getPortfolioItemBySlug(slug, 'en')
  if (!item) return {}
  return {
    title: `${item.title} — Portfolio | Zerocode`,
    description: item.description,
  }
}

export default async function PortfolioItemPage({ params }: Props) {
  const { slug } = await params
  const item = getPortfolioItemBySlug(slug, 'en')
  if (!item) notFound()

  const shared = homeContent.en
  const relatedItems = getRelatedItems(item, 'en')

  const specs = Object.entries(item.techSpecs)
  const paragraphs = item.description.split('\n\n')

  return (
    <>
      <Header locale="en" />
      <main className="relative overflow-hidden">
        <section className="py-16 sm:py-24 lg:py-28 relative text-center overflow-hidden">
          <PageHeroBackground />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <p className="gradient-border inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white" style={{ borderRadius: '15px', zIndex: 1, position: 'relative' }}>
              <SectionIcon />
              {shared.portfolio.label}
            </p>
            <h1 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
              {item.title}
            </h1>
          </div>
        </section>

        <section className="pb-16 sm:pb-24 lg:pb-28 relative -mt-12 sm:-mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col lg:flex-row gap-8 p-5 lg:p-7 border border-white/10 rounded-[25px] bg-[#FFFFFF1C] shadow-[0_0_0_0_rgba(0,0,0,0)] animate-fadeIn">
              <div className="flex-1 min-w-0">
                <PortfolioCarousel images={item.images} title={item.title} />
              </div>
              <div className="flex-1 min-w-0">
                {item.businessCase && (
                  <PortfolioBusinessCase businessCase={item.businessCase} locale="en" />
                )}

                {item.businessCase && paragraphs.length > 0 && (
                  <div className="h-px bg-white/10 my-6" />
                )}

                {paragraphs.map((p, i) => (
                  <p key={i} className="text-foreground/80 text-base leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}

                {specs.length > 0 && (
                  <div className="mt-6 space-y-2">
                    {specs.map(([label, value]) => (
                      <p key={label} className="text-foreground/80 text-sm leading-relaxed">
                        <span className="font-medium text-foreground">{label}: </span>
                        {value.startsWith('http') ? (
                          <Link href={value} target="_blank" className="text-[#00DCFC] hover:underline">
                            {value}
                          </Link>
                        ) : (
                          <span>{value}</span>
                        )}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {relatedItems.length > 0 && (
          <section className="py-16 sm:py-24 lg:py-28 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                <h2 className="text-3xl font-bold text-balance text-foreground sm:text-4xl">Related Projects</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedItems.map((related) => (
                  <Link
                    key={related.title}
                    href={related.href}
                    className="group project-card animate-fadeInUp flex flex-col sm:flex-row overflow-hidden"
                  >
                    <div className="relative w-full sm:w-1/3 shrink-0 h-[250px] sm:h-[380px]">
                      <Image
                        src={related.thumbnail}
                        alt={related.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className={`object-cover ${related.imagePosition ?? 'object-top'} transition-transform duration-500 group-hover:scale-105`}
                      />
                    </div>
                    <div className="p-6 sm:p-[30px] flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-semibold normal-case text-foreground transition-colors group-hover:text-primary pt-[15px]">
                        {related.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70 line-clamp-4">{related.description}</p>
                      <span className="mt-4 inline-flex items-center gap-[10px] self-start px-[30px] py-[14px] text-sm font-medium text-foreground border border-white/30 rounded-full transition-all hover:bg-[rgba(56,189,248,0.32)] hover:border-[rgba(56,189,248,0.32)] hover:text-white">
                        See more
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <PortfolioCta />
      </main>
      <Footer locale="en" />
    </>
  )
}
