import type { Locale } from '@/lib/nav'

export interface FintechSolution {
  id: string
  label: string
  title: string
  subtitle: string
  description: string
  capabilities: { title: string; items: string[] }[]
  images: string[]
  badges: string[]
  highlight?: string
}

export interface FintechContent {
  hero: {
    label: string
    title: string
    titleAccent: string
    description: string
    bullets: string[]
    cta: string
    ctaHref: string
    secondaryNote: string
  }
  solutions: FintechSolution[]
  closing: {
    title: string
    description: string
    cta: string
    ctaHref: string
  }
}

const appBancariaImages = [
  '/fintech/app-bancaria/1.png',
  '/fintech/app-bancaria/2.png',
  '/fintech/app-bancaria/3.png',
  '/fintech/app-bancaria/4.png',
  '/fintech/app-bancaria/5.png',
  '/fintech/app-bancaria/6.png',
  '/fintech/app-bancaria/7.png',
  '/fintech/app-bancaria/8.png',
  '/fintech/app-bancaria/9.png',
  '/fintech/app-bancaria/f3ff1d5b7be (45).png',
  '/fintech/app-bancaria/f3ff1d5b7be (46).png',
  '/fintech/app-bancaria/f3ff1d5b7be (47).png',
  '/fintech/app-bancaria/f3ff1d5b7be (52).png',
]

const billeteraImages = [
  '/fintech/billetera/1.png',
  '/fintech/billetera/2.png',
  '/fintech/billetera/3.png',
  '/fintech/billetera/4.png',
  '/fintech/billetera/5.png',
  '/fintech/billetera/6.png',
  '/fintech/billetera/7.png',
  '/fintech/billetera/f3ff1d5b7be (38).png',
]

const coreImages = [
  '/fintech/core/1.png',
  '/fintech/core/2.png',
  '/fintech/core/3.png',
  '/fintech/core/4.png',
  '/fintech/core/5.png',
  '/fintech/core/6.png',
]

export const fintechContent: Record<Locale, FintechContent> = {
  en: {
    hero: {
      label: 'Fintech Solutions',
      title: 'Proven fintech foundations,',
      titleAccent: 'ready to scale as your own',
      description:
        'At Zerocode we design and deliver digital financial solutions for banks, fintechs and enterprises. Our three core platforms are already built, battle-tested and available as white-label / SaaS — so you launch faster, with less risk and full ability to customize and scale.',
      bullets: [],
      cta: 'Schedule a fintech consultation',
      ctaHref: '/contact/',
      secondaryNote: 'React • Supabase • AI-assisted delivery • KYC-ready',
    },
    solutions: [
      {
        id: 'app-bancaria',
        label: '',
        title: 'Banking App',
        subtitle: 'A full banking app, not just a wallet',
        description:
          'A deep, institution-grade banking application for banks and financial entities to manage products and operations from a unified digital experience. Unlike a basic wallet, this solution covers the full lifecycle of banking products and customer money movement.',
        badges: [],
        capabilities: [
          {
            title: 'Products & balances',
            items: [
              'Credit management and credit line pages',
              'Creation and management of savings lines',
              'Investment lines and, in Colombia, CDT products',
              'Deposit, withdrawal and balance management',
              'Balance evolution and tracking',
              'Application of interest on savings with daily or monthly configuration',
            ],
          },
          {
            title: 'Enterprise & operations',
            items: [
              'Multiple payment methods',
              'Enterprise portal with agreement management',
              'Payroll payment from the enterprise portal',
              'End-to-end management of financial products',
            ],
          },
        ],
        images: appBancariaImages,
      },
      {
        id: 'billetera',
        label: '',
        title: 'Virtual Wallet',
        subtitle: 'Launch your own branded wallet, fast',
        description:
          'A white-label wallet already built and ready to adapt to your brand and business model. Users can operate money end-to-end while you expose the wallet via API to integrate with external systems.',
        badges: [],
        highlight:
          'Already developed — adapt it to your brand instead of starting from zero. Includes web version and store-ready flows for Apple App Store and Google Play.',
        capabilities: [
          {
            title: 'User capabilities',
            items: [
              'Deposit and withdraw money',
              'Transfer money between users and via bank transfers',
              'Buy and hold crypto inside the wallet',
              'Check movement history, manage profile and balance',
              'In Argentina: CBU, CVU, Alias and other local transfer mechanisms per integration',
              'Expose the wallet via API for external management',
            ],
          },
          {
            title: 'Technology & delivery',
            items: [
              'Built with React Native and Supabase',
              'KYC integrated via Truora / Truework (as implemented)',
              'Web version available',
              'Publication-ready for Apple App Store and Google Play',
            ],
          },
        ],
        images: billeteraImages,
      },
      {
        id: 'core',
        label: '',
        title: 'Banking Core',
        subtitle: 'Infrastructure and operating platform for scale',
        description:
          'A broader financial infrastructure platform that combines a banking core with a multipurpose fintech operating layer — covering accounts, approvals, collections, and compliance in one place.',
        badges: [],
        capabilities: [
          {
            title: 'Core Bancario',
            items: [
              'Bank accounts with multiple accounts per user',
              'Savings and investment accounts, credits and financial products',
              'Financial operations and enterprise portal with payroll from companies',
              'Roles and authorization levels — users who view vs. approve operations',
              'OTP mechanisms, security controls and approval flows',
            ],
          },
          {
            title: 'Plataforma Fintech Multipropósito',
            items: [
              'Service payments, account management and multiple sub-accounts with independent balance control',
              'Mass generation of payment links and massive collections — e.g., consortia collecting from tenants, schools collecting from students',
              'Application of taxes and commissions, financial and operational reports',
              'Alerts, blocks and rules based on transactional behavior',
              'Detection of operations exceeding expected parameters and controls for potentially suspicious operations',
            ],
          },
          {
            title: 'Compliance & KYC',
            items: [
              'KYC, identity validation and user verification',
              'Compliance controls and verification associated with potentially sought or restricted persons',
              'Existing KYC mechanism presented as part of the solution capabilities, without inventing additional integrations',
            ],
          },
        ],
        images: coreImages,
      },
    ],
    closing: {
      title: 'Bring your fintech to market without starting from scratch',
      description:
        'Leverage proven infrastructure, reuse what is already built and customize the last mile to your brand, regulation and operating model. From wallet to full bank-grade platform, Zerocode accompanies you from adaptation to launch.',
      cta: 'Talk to our fintech team',
      ctaHref: '/contact/',
    },
  },
  es: {
    hero: {
      label: 'Soluciones Fintech',
      title: 'Infraestructura fintech probada,',
      titleAccent: 'lista para escalar como tuya',
      description:
        'En Zerocode diseñamos y entregamos soluciones financieras digitales para bancos, fintechs y empresas. Nuestras tres plataformas principales ya están construidas, probadas y disponibles como white-label / SaaS — para que lances más rápido, con menos riesgo y total capacidad de personalización y escala.',
      bullets: [],
      cta: 'Agenda una consulta fintech',
      ctaHref: '/es/contact-es/',
      secondaryNote: 'React • Supabase • Desarrollo asistido por IA • KYC listo',
    },
    solutions: [
      {
        id: 'app-bancaria',
        label: '',
        title: 'App Bancaria',
        subtitle: 'Una app bancaria completa, no solo una billetera',
        description:
          'Una aplicación bancaria profunda, a nivel de institución, para que bancos y entidades financieras gestionen productos y operaciones desde una experiencia digital unificada. A diferencia de una billetera básica, cubre el ciclo completo de productos bancarios y el movimiento del dinero del cliente.',
        badges: [],
        capabilities: [
          {
            title: 'Productos y saldos',
            items: [
              'Gestión de créditos y página de líneas de crédito',
              'Creación y gestión de líneas de ahorro',
              'Líneas de inversión y, en Colombia, productos CDT',
              'Gestión de depósitos, retiros y saldo',
              'Evolución y seguimiento del saldo',
              'Aplicación de intereses sobre ahorros con configuración diaria o mensual',
            ],
          },
          {
            title: 'Empresa y operación',
            items: [
              'Diferentes métodos de pago',
              'Portal empresarial con gestión de convenios',
              'Pago de nóminas desde el portal empresarial',
              'Gestión integral de productos financieros',
            ],
          },
        ],
        images: appBancariaImages,
      },
      {
        id: 'billetera',
        label: '',
        title: 'Billetera Virtual',
        subtitle: 'Lanza tu billetera con tu marca, rápido',
        description:
          'Una billetera white-label ya desarrollada y lista para adaptar a tu marca y modelo de negocio. El usuario opera dinero de punta a punta mientras tú expones la billetera vía API para integrarla con sistemas externos.',
        badges: [],
        highlight:
          'Ya está desarrollada — adáptala a tu marca en lugar de empezar de cero. Incluye versión web y flujos listos para publicación en Apple App Store y Google Play.',
        capabilities: [
          {
            title: 'Capacidades del usuario',
            items: [
              'Depositar y retirar dinero',
              'Transferir dinero entre usuarios y por transferencias bancarias',
              'Comprar y mantener criptomonedas dentro de la billetera',
              'Consultar historial de movimientos, gestionar perfil y saldo',
              'En Argentina: CBU, CVU, Alias y otros mecanismos locales según integración',
              'Exponer la billetera mediante API para gestión externa',
            ],
          },
          {
            title: 'Tecnología y entrega',
            items: [
              'Construida con React Native y Supabase',
              'KYC integrado vía Truora / Truework (según implementación existente)',
              'Versión web disponible',
              'Lista para publicación en Apple App Store y Google Play',
            ],
          },
        ],
        images: billeteraImages,
      },
      {
        id: 'core',
        label: '',
        title: 'Core Bancario y Fintech Multipropósito',
        subtitle: 'Plataforma de infraestructura y operación financiera',
        description:
          'Una plataforma más amplia de infraestructura y operación financiera que combina un core bancario con una capa operativa fintech multipropósito — cubriendo cuentas, aprobaciones, cobranzas y compliance en un solo lugar.',
        badges: [],
        capabilities: [
          {
            title: 'Core Bancario',
            items: [
              'Cuentas bancarias con múltiples cuentas por usuario',
              'Cuentas de inversión, ahorro, créditos y productos financieros',
              'Operaciones financieras y portal empresarial con pago de nóminas desde empresas',
              'Diferentes roles y niveles de autorización — usuarios que consultan y usuarios que aprueban',
              'Mecanismos OTP, controles de seguridad y flujos de aprobación',
            ],
          },
          {
            title: 'Plataforma Fintech Multipropósito',
            items: [
              'Pago de servicios, gestión de cuentas y múltiples subcuentas con gestión independiente del saldo por subcuenta',
              'Generación masiva de links de pago y cobros masivos — ej.: consorcios que cobran a múltiples inquilinos, colegios que cobran a múltiples estudiantes',
              'Aplicación de impuestos y comisiones, reportes financieros y operativos',
              'Generación de alertas, bloqueos y reglas basadas en comportamiento transaccional',
              'Detección de operaciones que superan parámetros esperados y controles para operaciones potencialmente sospechosas',
            ],
          },
          {
            title: 'Compliance y KYC',
            items: [
              'KYC, validación de identidad y verificación de usuarios',
              'Controles de compliance y verificación asociados a personas potencialmente buscadas o restringidas',
              'Mecanismo KYC existente presentado como parte de las capacidades, sin inventar integraciones adicionales',
            ],
          },
        ],
        images: coreImages,
      },
    ],
    closing: {
      title: 'Lleva tu fintech al mercado sin empezar de cero',
      description:
        'Aprovecha infraestructura probada, reutiliza lo ya construido y personaliza la última milla a tu marca, regulación y modelo operativo. Desde billetera hasta plataforma bancaria completa, Zerocode te acompaña de la adaptación al lanzamiento.',
      cta: 'Habla con nuestro equipo fintech',
      ctaHref: '/es/contact-es/',
    },
  },
}
