const clientLogos = [
  { src: '/images/Cupid-logo-copy_rectangle-1.png', alt: 'Cupid — Zerocode client logo' },
  { src: '/images/NOVAERlogo-1.png', alt: 'Novaer — Zerocode client logo' },
  { src: '/images/rhnube-2.png', alt: 'RH Nube — Zerocode client logo' },
  { src: '/images/LLT-Not-for-Profit-Small-Logo-1.png', alt: 'Later Life Training' },
  { src: '/images/logo-mentor.png', alt: 'Mentor — Zerocode client logo' },
  { src: '/images/image-8-1-1.png', alt: 'Zerocode client logo' },
  { src: '/images/Sin-titulo-2.png', alt: 'Zerocode client logo' },
]

export function ClientLogoCarousel() {
  return (
    <section className="overflow-hidden bg-black py-3 relative">
      <div className="infinite-scroll-wrapper w-full">
        <div className="flex w-max items-center gap-8 px-5" style={{ animation: 'scroll 40s linear infinite', display: 'flex', width: 'max-content' }}>
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex h-[60px] w-[160px] flex-shrink-0 items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
          <div className="flex h-[60px] w-[160px] flex-shrink-0 items-center justify-center">
            <img
              src="/images/top_clutch.co_it_services_company_peru_2025.svg"
              alt="Top Clutch IT Services Company Peru 2025"
              className="max-h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}