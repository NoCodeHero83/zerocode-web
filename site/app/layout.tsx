import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zerocode.la'),
  title: 'AI-Assisted Development Agency | Zerocode',
  description:
    'We help established businesses eliminate operational bottlenecks with custom AI-assisted software. Full IP ownership. No vendor lock-in.',
  openGraph: {
    type: 'website',
    url: 'https://zerocode.la/',
    siteName: 'Zerocode',
    locale: 'en_US',
    title: 'AI-Assisted Development Agency | Fix Operational Bottlenecks — Zerocode',
    description:
      'We help established businesses eliminate operational bottlenecks with custom AI-assisted software. Full IP ownership. No vendor lock-in. Book a free discovery call.',
    images: [
      {
        url: '/images/ZEROCODE_Imagotipo-Horizontal-1.png',
        width: 400,
        height: 100,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} dark`}>
      <body className="min-h-screen antialiased">
        {children}
        <script src="/js/chatbot.js?v=10" defer />
      </body>
    </html>
  )
}
