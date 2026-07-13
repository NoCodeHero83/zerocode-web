'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Send, Phone } from 'lucide-react'
import { navItems, homeHref, type Locale } from '@/lib/nav'

interface FooterProps {
  locale: Locale
}

const copyright: Record<Locale, string> = {
  en: '© Copyright Zerocode – All right reserved',
  es: '© Copyright Zerocode – Todos los derechos reservados',
}

const socialLinks = [
  {
    href: 'https://www.facebook.com/people/Zerocode/100078361325735/',
    label: 'Facebook',
    Icon: Facebook,
  },
  {
    href: 'https://www.instagram.com/zerocode.la/',
    label: 'Instagram',
    Icon: Instagram,
  },
  {
    href: 'https://www.linkedin.com/company/91081387',
    label: 'LinkedIn',
    Icon: Linkedin,
  },
]

export function Footer({ locale }: FooterProps) {
  const [email, setEmail] = useState('')
  const items = navItems[locale]

  return (
    <footer className="border-t border-border/50">
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href={homeHref[locale]} className="inline-flex items-center">
                <Image
                  src="/images/Mesa-de-25@2x-8-1.png"
                  alt="Zerocode logo"
                  width={142}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <div className="mt-6 text-sm text-white leading-relaxed space-y-2">
                <p>Jirón Juan Fanning 109, departamento 402, Barranco, Lima, Perú.</p>
                <p>R.U.C.: 20609428377</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-3">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-white">
                <p>
                  <span className="text-white font-medium">Email:</span>{' '}
                  <a href="mailto:andres@zerocode.la" className="hover:text-primary transition-colors">andres@zerocode.la</a>
                </p>
                <p>
                  <span className="text-white font-medium">Location:</span> Miraflores, Lima, Perú
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-white">DUNS: 751503449</span>
                  <a
                    href="https://www.dnb.com/de-de/upik-en.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium uppercase tracking-wider text-[#38bdf8] underline hover:no-underline"
                  >
                    Verify
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">Newsletter</h3>
              <p className="text-sm text-white mb-4">Subscribe to receive updates and news.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setEmail('')
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-full border border-border/50 bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <button
                  type="submit"
                  className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <Send className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white">{copyright[locale]}</p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white transition-colors hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
