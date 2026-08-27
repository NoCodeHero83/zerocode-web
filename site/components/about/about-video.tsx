'use client'

import { useState } from 'react'

interface AboutVideoProps {
  label: string
  heading: string
  description: string
  videoId: string
}

export function AboutVideo({ label, heading, description, videoId }: AboutVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-16 sm:py-24 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="gradient-border inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white" style={{ borderRadius: '15px', zIndex: 1, position: 'relative' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            {label}
          </p>
          <h2 className="mt-3 text-3xl font-medium text-balance text-foreground sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-3 text-foreground/70">{description}</p>
        </div>

        <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-2xl">
          {!isPlaying ? (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="group relative flex h-full w-full cursor-pointer items-center justify-center"
              aria-label="Play video"
            >
              <img
                src="/images/maxresdefault.jpg"
                alt="Video thumbnail"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                <div className="flex size-20 items-center justify-center rounded-full bg-[#00dcfc] transition-transform group-hover:scale-110">
                  <svg className="ml-1 size-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            <div className="h-full w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
