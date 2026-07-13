'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { SectionIcon } from '@/components/ui/section-icon'

export function AiVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="py-16 sm:py-24 lg:py-28 relative">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="glass-card inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">
            <SectionIcon />
            How it work
          </p>

          <h2 className="mt-3 text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-5xl">
            What is AI ASSISTED DEVELOPMENT?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-pretty text-muted-foreground">
            Discover the tools we use on a day to day basis to change how people access the technology.
          </p>

          <div className="glass-card relative mx-auto mt-10 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl p-4">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              {!isPlaying ? (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="group relative flex h-full w-full cursor-pointer items-center justify-center"
                  aria-label="Play video"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/maxresdefault.jpg"
                    alt="AI Assisted Development video thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                    <div className="flex size-20 items-center justify-center rounded-full bg-primary/90 transition-transform group-hover:scale-110 sm:size-24">
                      <svg className="ml-1 size-8 text-primary-foreground sm:size-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              ) : (
                <div className="h-full w-full">
                  <iframe
                    src="https://www.youtube.com/embed/mViFYTwWvcM?autoplay=1"
                    title="What is AI ASSISTED DEVELOPMENT?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
