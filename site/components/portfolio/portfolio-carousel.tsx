'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PortfolioCarouselProps {
  images: string[]
  title: string
}

export function PortfolioCarousel({ images, title }: PortfolioCarouselProps) {
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
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, images.length, hovering])

  if (!images.length) return null

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative w-full h-[250px] lg:h-[500px]">
        <Image
          src={images[current]}
          alt={`${title} - Image ${current + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4"
          priority={current === 0}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`cursor-pointer size-2.5 rounded-full transition-all ${
                  i === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
