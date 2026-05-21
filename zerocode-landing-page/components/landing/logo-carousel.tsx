"use client"

const logos = [
  { src: "/logos/Alianza.png", alt: "Alianza" },
  { src: "/logos/cupid.png", alt: "Cupid" },
  { src: "/logos/Hulp.webp", alt: "Hulp" },
  { src: "/logos/kreante.png", alt: "Kreante" },
  { src: "/logos/LLT.png", alt: "LLT" },
  { src: "/logos/mentor.png", alt: "Mentor" },
  { src: "/logos/Novaer.png", alt: "Novaer" },
  { src: "/logos/rhnube.png", alt: "RHNube" },
  { src: "/logos/skysur.svg", alt: "Skysur" },
  { src: "/logos/supra.png", alt: "Supra" },
  { src: "/logos/The-Decision-Board.png", alt: "The-Decision-Board" },
  { src: "/logos/Tiver.png", alt: "The-Decision-Board" },
  { src: "/logos/Tok&Go.png", alt: "Tok&Go" },
  { src: "/logos/Xtrategia.png", alt: "Xtrategia" },
]

export function LogoCarousel() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xl text-foreground tracking-widest">
          Empresas que confían en nosotros
        </p>
      </div>

      <div className="relative flex overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
<div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
        <div className="flex animate-scroll gap-10 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center h-16 w-32">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}