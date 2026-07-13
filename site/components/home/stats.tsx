'use client'

import { Counter } from '@/components/ui/counter'
import type { StatItem } from '@/lib/content/home'

interface StatsProps {
  stats: StatItem[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-8 sm:py-10 relative">
      <div className="mx-auto max-w-[550px] px-4 sm:px-6 relative">
        <div className="flex flex-nowrap justify-center gap-4 sm:gap-6 rounded-2xl bg-[rgba(255,255,255,0.06)] px-6 py-5 sm:px-10 sm:py-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center flex-1"
            >
              <Counter
                value={stat.value}
                suffix="+"
                duration={2000}
                className="block text-3xl font-bold sm:text-[46px]"
                style={{
                  backgroundImage: 'linear-gradient(202deg, #fff, #1384bd 53%, #fff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              />
              <p className="mt-0.5 text-sm text-muted-foreground sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
