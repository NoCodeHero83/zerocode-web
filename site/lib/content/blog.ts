import type { Locale } from '@/lib/nav'

export interface BlogPost {
  category: string
  title: string
  excerpt: string
  href: string
}

export interface BlogContent {
  hero: {
    tag: string
    heading: string
    subtitle: string
  }
  intro: {
    heading: string
    text: string
  }
  posts: BlogPost[]
}

export const blogContent: Record<Locale, BlogContent> = {
  en: {
    hero: {
      tag: 'Insights & Resources',
      heading: 'The Zerocode Blog',
      subtitle:
        'Practical guides on AI assisted software development, operational efficiency, SaaS migration, and building digital systems that scale.',
    },
    intro: {
      heading: 'Latest Articles',
      text: 'Authored by the Zerocode engineering team based on real client engagements and project outcomes.',
    },
    posts: [
      {
        category: 'Operations & Software',
        title: 'How to Eliminate Operational Bottlenecks with Custom Software',
        excerpt:
          'Most businesses lose 20 to 30 percent of operational capacity to bottlenecks that generic software cannot fix. This guide explains how custom digital systems solve them permanently in 90 days.',
        href: '/blog/eliminate-operational-bottlenecks/',
      },
      {
        category: 'Development Approaches',
        title: 'No Code vs Low Code vs AI Assisted Development: Which Is Right for Your Business?',
        excerpt:
          'A practical comparison of the three main modern development approaches: speed, cost, ownership, scalability, and the decision framework for choosing correctly.',
        href: '/blog/no-code-vs-low-code-vs-ai-assisted-development/',
      },
      {
        category: 'Cost and Planning',
        title: 'Web App Development Cost Guide 2026',
        excerpt:
          'A complete breakdown of web app development costs by type, the seven factors that drive price, hidden costs to budget for, and how to calculate ROI before you commit.',
        href: '/blog/web-app-development-cost-guide/',
      },
      {
        category: 'SaaS Migration & Ownership',
        title: 'How to Replace SaaS Tools with Custom Software and Own Your Stack',
        excerpt:
          'When SaaS subscriptions cost more than a custom replacement, how to migrate safely without disrupting operations, and how to calculate the financial case for ownership.',
        href: '/blog/replace-saas-tools-custom-software/',
      },
    ],
  },
  es: {
    hero: {
      tag: 'Recursos e Insights',
      heading: 'El Blog de Zerocode',
      subtitle:
        'Guías prácticas sobre desarrollo de software asistido por IA, eficiencia operativa, migración de SaaS y sistemas digitales que escalan.',
    },
    intro: {
      heading: 'Artículos Recientes',
      text: 'Creado por el equipo de ingeniería de Zerocode basado en proyectos y clientes reales.',
    },
    posts: [
      {
        category: 'Operaciones & Software',
        title: 'Cómo Eliminar los Cuellos de Botella Operativos con Software Personalizado',
        excerpt:
          'Las empresas con ingresos entre $1M y $50M pierden hasta un 30% de capacidad operativa por procesos manuales y herramientas SaaS que no escalan. Aprende cómo eliminarlo en 90 días.',
        href: '/es/blog/cuellos-de-botella-operativos/',
      },
      {
        category: 'Enfoques de Desarrollo',
        title: 'No-Code vs Low-Code vs Desarrollo Asistido por IA',
        excerpt:
          'Comparativa completa: velocidad, costo, propiedad del código y escalabilidad. Con un marco de decisión para elegir el enfoque correcto para tu negocio.',
        href: '/es/blog/no-code-vs-low-code-vs-desarrollo-asistido-ia/',
      },
      {
        category: 'Costos y Planificación',
        title: 'Guía de Costos de Desarrollo de Aplicaciones Web 2026',
        excerpt:
          'Desglose completo de costos: rangos por tipo de aplicación, factores que afectan el precio, costos ocultos y cómo calcular el ROI antes de construir.',
        href: '/es/blog/guia-costos-desarrollo-aplicaciones-web/',
      },
      {
        category: 'Migración SaaS & Propiedad',
        title: 'Cómo Reemplazar Herramientas SaaS con Software Propio',
        excerpt:
          'Cuándo dejar de pagar por SaaS, cómo calcular el caso financiero y cómo migrar sin interrumpir las operaciones ni afectar a los clientes.',
        href: '/es/blog/reemplazar-saas-con-software-personalizado/',
      },
    ],
  },
}
