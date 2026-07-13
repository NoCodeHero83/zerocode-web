'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export function Counter({ value, suffix = '', duration = 1500, className, style }: CounterProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLSpanElement>({ threshold: 0.4 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setDisplayValue(Math.floor(progress * value))

      if (progress < 1) {
        frame = requestAnimationFrame(step)
      } else {
        setDisplayValue(value)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isVisible, value, duration])

  return (
    <span ref={ref} className={cn('tabular-nums', className)} style={style}>
      {displayValue}
      {suffix}
    </span>
  )
}
