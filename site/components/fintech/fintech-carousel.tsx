'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface FintechCarouselProps {
  images: string[]
  title: string
  variant?: 'mobile' | 'desktop'
}

export function FintechCarousel({ images, title, variant = 'desktop' }: FintechCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [hovering, setHovering] = useState(false)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }, [images.length])

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1 || hovering) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [next, images.length, hovering])

  if (!images.length) return null

  const isMobile = variant === 'mobile'

  return (
    <div
      className="relative w-full overflow-hidden border border-white/10 bg-[#0a0f1e] shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className={`relative w-full overflow-hidden bg-black ${
          isMobile ? 'aspect-[9/16] max-h-[640px] sm:aspect-[9/16]' : 'aspect-[16/10] sm:aspect-[16/9]'
        }`}
      >
        <Image
          src={images[current]}
          alt={`${title} — ${current + 1}`}
          fill
          sizes={isMobile ? "(max-width: 768px) 100vw, 400px" : "(max-width: 768px) 100vw, 640px"}
          className={isMobile ? "object-contain bg-[#0a0f1e]" : "object-cover object-top"}
          priority={current === 0}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center bg-black/80 text-white border border-white/10 transition-colors hover:bg-black cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center bg-black/80 text-white border border-white/10 transition-colors hover:bg-black cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="size-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/80 border border-white/10 px-2.5 py-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all cursor-pointer ${
                  i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
          <div className="absolute top-2 right-2 bg-black/80 border border-white/10 px-2 py-1 text-xs font-medium text-white/80">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}
