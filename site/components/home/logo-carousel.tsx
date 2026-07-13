const logos = [
  { src: '/images/bolt_white_optimized-1.png', alt: 'Bolt' },
  { src: '/images/claude_white_optimized.png', alt: 'Claude AI by Anthropic' },
  { src: '/images/google_antigravity_white_optimized.png', alt: 'Google Antigravity' },
  { src: '/images/lovable_white_optimized-1.png', alt: 'Lovable' },
  { src: '/images/supabase_white_optimized-1.png', alt: 'Supabase' },
]

interface LogoCarouselProps {
  heading: string
}

export function LogoCarousel({ heading }: LogoCarouselProps) {
  return (
    <section className="overflow-hidden py-12">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground">
          {heading}
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-scroll gap-16 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex h-16 w-32 flex-shrink-0 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
