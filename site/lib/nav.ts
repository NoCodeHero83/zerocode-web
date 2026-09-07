export type Locale = 'en' | 'es'

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const navItems: Record<Locale, NavItem[]> = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    {
      label: 'Services',
      href: '/service/',
      children: [
        { label: 'General Services', href: '/service/' },
        { label: 'Fintech Solutions', href: '/fintech/' },
      ],
    },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Blog', href: '/blog/' },
  ],
  es: [
    { label: 'Inicio', href: '/es/' },
    { label: 'Acerca de', href: '/es/about/' },
    {
      label: 'Servicios',
      href: '/es/service-es/',
      children: [
        { label: 'Servicios Generales', href: '/es/service-es/' },
        { label: 'Soluciones Fintech', href: '/es/fintech/' },
      ],
    },
    { label: 'Portafolio', href: '/es/portfolio/' },
    { label: 'Blog', href: '/es/blog/' },
  ],
}

export const headerCta: Record<Locale, NavItem> = {
  en: { label: 'Schedule a Call', href: '/contact/' },
  es: { label: 'Programar una llamada', href: '/es/contact-es/' },
}

export const homeHref: Record<Locale, string> = {
  en: '/',
  es: '/es/',
}

const staticRouteMapEnToEs: Record<string, string> = {
  '/': '/es/',
  '/about': '/es/about',
  '/service': '/es/service-es',
  '/services': '/es/services',
  '/fintech': '/es/fintech',
  '/portfolio': '/es/portfolio',
  '/blog': '/es/blog',
  '/contact': '/es/contact-es',
}

const staticRouteMapEsToEn: Record<string, string> = {
  '/es': '/',
  '/es/about': '/about',
  '/es/service-es': '/service',
  '/es/services': '/services',
  '/es/fintech': '/fintech',
  '/es/portfolio': '/portfolio',
  '/es/blog': '/blog',
  '/es/contact-es': '/contact',
}

const portfolioSlugEnToEs: Record<string, string> = {
  'later-life-training': 'later-life-training-2',
  'alianza-capital': 'alianza-capital-es',
  'gm-parts-2': 'repuestos-gm-es',
  'daily-sparkle': 'daily-sparkle-2',
  'ecumerca': 'ecumerca-es',
  'mentor-growthrocsktar': 'mentor-growthrocsktar-es',
  'beauty-connect': 'beauty-connect-es',
  'the-decision-board': 'the-decision-board-es',
  'hulp-clients': 'hulp-clientes-es',
  'hulp-providers': 'hulp-proveedores-es',
  'supra-sales-crm': 'supra-sales-crm-es',
  'tokgo': 'tokgo-es',
}

const portfolioSlugEsToEn: Record<string, string> = {
  'later-life-training-2': 'later-life-training',
  'alianza-capital-es': 'alianza-capital',
  'repuestos-gm-es': 'gm-parts-2',
  'daily-sparkle-2': 'daily-sparkle',
  'ecumerca-es': 'ecumerca',
  'mentor-growthrocsktar-es': 'mentor-growthrocsktar',
  'beauty-connect-es': 'beauty-connect',
  'the-decision-board-es': 'the-decision-board',
  'hulp-clientes-es': 'hulp-clients',
  'hulp-proveedores-es': 'hulp-providers',
  'supra-sales-crm-es': 'supra-sales-crm',
  'tokgo-es': 'tokgo',
}

export function getLocaleEquivalent(pathname: string, from: Locale, to: Locale): string {
  if (from === to) return pathname

  const p = pathname.replace(/\/+$/, '') || '/'

  if (from === 'en' && to === 'es') {
    if (staticRouteMapEnToEs[p]) return staticRouteMapEnToEs[p] + '/'

    const match = p.match(/^\/portfolio\/(.+)$/)
    if (match) {
      const esSlug = portfolioSlugEnToEs[match[1]]
      if (esSlug) return '/es/portfolio/' + esSlug + '/'
    }

    return '/es/'
  }

  if (from === 'es' && to === 'en') {
    if (staticRouteMapEsToEn[p]) return staticRouteMapEsToEn[p] + '/'

    const match = p.match(/^\/es\/portfolio\/(.+)$/)
    if (match) {
      const enSlug = portfolioSlugEsToEn[match[1]]
      if (enSlug) return '/portfolio/' + enSlug + '/'
    }

    return '/'
  }

  return pathname
}
