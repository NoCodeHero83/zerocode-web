'use client'

import React from 'react'

export interface AuroraBackgroundProps {
  /** Extra wrapper classes */
  className?: string
  /** ARIA label for the animated background */
  ariaLabel?: string
}

/**
 * Aurora / northern-lights background in brand colors (dependency-free,
 * pure CSS animation). Renders as an absolute, behind-content layer — drop
 * it in place of <HeroBackground /> inside a `relative` hero section.
 * Fades to black at the bottom so it flows into the rest of the page.
 */
export function AuroraBackground({
  className = '',
  ariaLabel = 'Animated aurora background',
}: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-black ${className}`}
    >
      {/* Pulsing + drifting radial gradients */}
      <div
        className="aurora-pulse absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,220,252,0.22) 0%, transparent 80%), radial-gradient(circle, rgba(33,92,199,0.20) 0%, transparent 80%)',
          backgroundSize: '100% 100%',
        }}
      />

      {/* Blurred, drifting color blobs (brand cyan / blue) */}
      <div className="absolute inset-0 mix-blend-screen">
        <div className="aurora-blob aurora-blob--1 absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[#00dcfc] blur-3xl opacity-40" />
        <div className="aurora-blob aurora-blob--2 absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#215cc7] blur-3xl opacity-40" />
        <div className="aurora-blob aurora-blob--3 absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full bg-[#0ea5e9] blur-3xl opacity-30" />
      </div>

      {/* Fade to black at the bottom so it flows into the page */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black" />
    </div>
  )
}

export default AuroraBackground
