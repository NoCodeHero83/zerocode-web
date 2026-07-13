'use client'

import { useEffect, useRef } from 'react'

interface Props {
  locale: string
}

export function ContactCalendly({ locale }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const loadedRef = useRef(false)

  useEffect(() => {
    if (loadedRef.current) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    loadedRef.current = true
  }, [])

  const base = 'https://calendly.com/andres-diaz-/discoverycall'
  const params = new URLSearchParams({
    hide_gdpr_banner: '1',
    background_color: '1a1a2e',
    text_color: 'ffffff',
    primary_color: '7c3aed',
  })
  if (locale === 'es') params.set('locale', 'es')
  const url = `${base}?${params.toString()}`

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-card shadow-2xl shadow-primary/10 animate-fadeIn">
      <div
        ref={containerRef}
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}
