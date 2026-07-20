import Link from 'next/link'
import type { PortfolioBusinessCase } from '@/lib/content/portfolio-items'

interface PortfolioBusinessCaseProps {
  businessCase: PortfolioBusinessCase
  locale: 'en' | 'es'
}

const labels: Record<'en' | 'es', { problem: string; built: string; results: string; links: string }> = {
  en: { problem: 'The problem', built: 'What we built', results: 'The result', links: 'Links' },
  es: { problem: 'El problema', built: 'Lo que construimos', results: 'El resultado', links: 'Enlaces' },
}

export function PortfolioBusinessCase({ businessCase, locale }: PortfolioBusinessCaseProps) {
  const t = labels[locale]

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{t.problem}</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li className="text-foreground/80 text-base leading-relaxed">{businessCase.problem}</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{t.built}</h3>
        <ul className="list-disc pl-5 space-y-1">
          {businessCase.built.map((item, i) => (
            <li key={i} className="text-foreground/80 text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{t.results}</h3>
        <ul className="list-disc pl-5 space-y-1">
          {businessCase.results.map((item, i) => (
            <li key={i} className="text-foreground/80 text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {businessCase.quote && (
        <p className="text-foreground/90 text-base leading-relaxed italic border-l-2 border-[#00DCFC] pl-4">
          &ldquo;{businessCase.quote}&rdquo;
        </p>
      )}

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{t.links}</h3>
        <ul className="list-disc pl-5 space-y-1">
          {businessCase.links.map((link, i) => (
            <li key={i} className="text-base leading-relaxed">
              <Link
                href={link.url}
                target="_blank"
                className="text-[#00DCFC] hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
