'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { HomeContent } from '@/lib/content/home'
import { SectionIcon } from '@/components/ui/section-icon'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface PortfolioHighlightsProps {
  content: HomeContent['portfolio']
  /** Hide the internal heading (when rendered under a separate hero) */
  hideHeading?: boolean
}

const ITEMS_PER_PAGE = 8

export function PortfolioHighlights({ content, hideHeading = false }: PortfolioHighlightsProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(content.items.length / ITEMS_PER_PAGE)
  const currentItems = content.items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <section className="py-16 sm:py-24 lg:py-28 relative">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {!hideHeading && (
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="glass-card inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
              <SectionIcon />
              {content.label}
            </p>
            <h2 className="mt-3 text-3xl font-medium text-balance text-foreground sm:text-4xl lg:text-5xl">
              {content.heading}
            </h2>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          {currentItems.map((project, index) => {
            const isMobile = project.mockType === 'mobile'
            return (
              <Link
                key={project.title}
                href={project.href}
                className="group project-card animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="relative overflow-hidden rounded-t-[16px] bg-[radial-gradient(ellipse_at_top_left,_rgba(99,102,241,0.06)_0%,_rgba(0,220,252,0.03)_40%,_transparent_70%)] px-8 pt-8">
                  <div className={`relative mx-auto h-[300px] overflow-hidden rounded-xl shadow-[0_8px_40px_-8px_rgba(0,220,252,0.2)] ring-1 ring-white/10 ${isMobile ? 'w-[65%]' : 'w-[85%]'}`}>
                    <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/15 via-cyan-500/5 to-transparent blur-xl" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes={isMobile ? '(max-width: 640px) 44vw, 22vw' : '(max-width: 640px) 80vw, 40vw'}
                      className={`object-cover ${project.imagePosition ?? 'object-top'} transition-transform duration-500 group-hover:scale-105`}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold normal-case text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70 line-clamp-3">{project.description}</p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    See more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  pageNum === page
                    ? 'bg-[#0A4A7A] text-white border border-[#0A4A7A]'
                    : 'bg-transparent text-white/70 border border-white/20 hover:border-[#0A4A7A] hover:text-white'
                }`}
              >
                Page {pageNum}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
