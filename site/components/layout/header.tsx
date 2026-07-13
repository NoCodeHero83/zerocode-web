'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { navItems, headerCta, homeHref, getLocaleEquivalent, type Locale } from '@/lib/nav'

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const items = navItems[locale]
  const cta = headerCta[locale]
  const otherLocale = locale === 'en' ? 'es' : 'en'
  const otherHref = getLocaleEquivalent(pathname, locale, otherLocale)

  function isActive(href: string): boolean {
    const normalizePath = (p: string) => {
      const cleaned = p.replace(/\/+$/, '')
      return cleaned || '/'
    }
    const homePaths = ['/', '/es/']
    if (homePaths.includes(href)) {
      return homePaths.includes(pathname)
    }
    return normalizePath(pathname) === normalizePath(href)
  }

  return (
    <>
      <div className="bg-gradient-to-r from-[#26277A] via-[#00DCFC] to-[#26277A] bg-[length:200%_100%] animate-[gradientShift_6s_ease_infinite] text-center py-2.5 px-4">
        <p className="text-xs sm:text-sm font-medium text-white truncate">
          Would you like to get in touch with us?{' '}
          <Link href={locale === 'en' ? '/contact/' : '/es/contact-es/'} className="underline font-semibold hover:no-underline">
            Contact Us
          </Link>{' '}
          Now!
        </p>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#000000] shadow-lg shadow-black/30'
            : 'bg-[#000000cc]'
        }`}
      >
        <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={homeHref[locale]} className="flex items-center shrink-0">
            <Image
              src="/images/Mesa-de-25@2x-8-1.png"
              alt="Zerocode logo"
              width={174}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-12 lg:flex lg:ml-auto lg:mr-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#38bdf8] ${
                  isActive(item.href) ? 'text-[#38bdf8]' : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                onBlur={() => setTimeout(() => setLangOpen(false), 150)}
                className="flex items-center gap-1.5 text-sm font-medium uppercase text-white/80 hover:text-white transition-colors px-2 py-1"
              >
                {locale === 'en' ? (
                  <svg width="21" height="15" viewBox="0 0 21 15" className="inline-block">
                    <rect width="21" height="15" fill="#fff" />
                    {[0,2,4,6,8,10,12,14].map(y => <rect key={y} y={y} width="21" height="1" fill="#D02F44" />)}
                    <rect width="9" height="7" fill="#46467F" />
                  </svg>
                ) : (
                  <svg width="21" height="15" viewBox="0 0 21 15" className="inline-block">
                    <rect width="21" height="15" fill="#C60B1E" />
                    <rect y="4" width="21" height="7" fill="#FFC400" />
                  </svg>
                )}
                <span>{locale === 'en' ? 'EN' : 'ES'}</span>
                <ChevronDown className="size-3" />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 bg-[#1a1a2e] border border-white/10 rounded-lg overflow-hidden min-w-[120px] shadow-xl z-50">
                  <Link
                    href={otherHref}
                    className="flex items-center gap-2 px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {locale === 'en' ? (
                      <svg width="21" height="15" viewBox="0 0 21 15" className="inline-block shrink-0">
                        <rect width="21" height="15" fill="#C60B1E" />
                        <rect y="4" width="21" height="7" fill="#FFC400" />
                      </svg>
                    ) : (
                      <svg width="21" height="15" viewBox="0 0 21 15" className="inline-block shrink-0">
                        <rect width="21" height="15" fill="#fff" />
                        {[0,2,4,6,8,10,12,14].map(y => <rect key={y} y={y} width="21" height="1" fill="#D02F44" />)}
                        <rect width="9" height="7" fill="#46467F" />
                      </svg>
                    )}
                    <span>{locale === 'en' ? 'ES' : 'EN'}</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 rounded-full border border-[#0A4A7A]/50 bg-[#0A4A7A]/30 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {cta.label}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-black/95 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-white/5 hover:text-[#38bdf8] ${
                    isActive(item.href) ? 'text-[#38bdf8]' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-3 px-3 py-2">
                <Link
                  href={otherHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium uppercase text-white/60 hover:text-white transition-colors"
                >
                  {locale === 'en' ? 'ES' : 'EN'}
                </Link>
              </div>
              <Link
                href={cta.href}
                onClick={() => setIsMenuOpen(false)}
                className="mt-2"
              >
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0A4A7A]/50 bg-[#0A4A7A]/30 px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-white cursor-pointer">
                  {cta.label}
                </span>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}