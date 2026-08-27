'use client'

export function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #0a1120 0%, #070b14 45%, #04070d 100%), linear-gradient(120deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 30%)' }} />
      <div className="pointer-events-none absolute inset-0 -z-10" style={{
        background: `
          radial-gradient(60% 50% at 62% 38%, rgba(33, 92, 199, 0.16) 0%, rgba(33, 92, 199, 0) 70%),
          radial-gradient(40% 35% at 20% 70%, rgba(33, 92, 199, 0.07) 0%, rgba(33, 92, 199, 0) 70%),
          radial-gradient(50% 45% at 85% 80%, rgba(33, 92, 199, 0.06) 0%, rgba(33, 92, 199, 0) 70%)
        `
      }} />
      <svg className="pointer-events-none absolute inset-0 -z-10 w-full h-full opacity-50" viewBox="0 0 1600 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path className="c1" d="M -100,180 C 350,60 700,320 1000,220 C 1250,140 1450,-40 1800,90" fill="none" stroke="rgba(140, 165, 200, 0.16)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path className="c2" d="M -100,480 C 300,360 650,600 950,480 C 1250,360 1500,180 1800,340" fill="none" stroke="rgba(140, 165, 200, 0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path className="c3" d="M -100,700 C 280,600 620,780 950,700 C 1280,620 1500,500 1800,580" fill="none" stroke="rgba(140, 165, 200, 0.09)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="pointer-events-none absolute left-[-25%] right-[-25%] bottom-0 h-[38%] -z-10 overflow-hidden" style={{
        maskImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0) 100%)',
      }}>
        <div className="absolute left-0 right-0 bottom-[-20%] h-[150%]" style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(120, 145, 180, 0.30) 0 1px, transparent 1px calc(100%/28)),
            repeating-linear-gradient(to top, rgba(120, 145, 180, 0.26) 0 1px, transparent 1px 46px)
          `,
          backgroundSize: 'calc(100%/28) 100%, 100% 46px',
          transform: 'perspective(480px) rotateX(58deg)',
          transformOrigin: 'bottom center',
          opacity: 0.8,
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, #070b14 0%, rgba(7,11,20,0) 18%, rgba(7,11,20,0) 82%, #070b14 100%)'
        }} />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10" style={{
        background: `
          radial-gradient(120% 90% at 50% 40%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%),
          linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 14%, rgba(0,0,0,0) 78%, rgba(0,0,0,0.55) 100%)
        `
      }} />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-[22%] -z-10" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(2,3,6,0.85) 55%, #000000 100%)'
      }} />
    </>
  )
}
