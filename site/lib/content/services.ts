import type { Locale } from '@/lib/nav'

export interface ProcessStep {
  icon: string
  title: string
  description: string
}

export interface ServicesContent {
  hero: {
    label: string
    heading: string
    description: string
  }
  designProcess: {
    heading: string
    subtitle: string
    steps: ProcessStep[]
  }
  devProcess: {
    heading: string
    subtitle: string
    steps: ProcessStep[]
  }
}

export const servicesContent: Record<Locale, ServicesContent> = {
  en: {
    hero: {
      label: 'OUR TECH SERVICES',
      heading: 'Solutions For Your Every Need',
      description: 'We offer specialized expertise in various functions to execute comprehensive projects with our bullet-proof method using the best low-code and AI tools of the market.',
    },
    designProcess: {
      heading: 'Design, Analysis & Prototyping Process',
      subtitle: 'We ensure your vision ~3 weeks',
      steps: [
        {
          icon: 'CalendarCheck',
          title: 'Initial Meeting',
          description: 'Initial requirement creation using our CODA template. Definition of high-level requirements.',
        },
        {
          icon: 'Newspaper',
          title: 'Product Plan & UI Interface',
          description: 'Product backlog creation using our CODA template. Interface design in Figma for full customization or via our AI.',
        },
        {
          icon: 'ListChecks',
          title: 'Backlog & Schedule',
          description: 'Requirements prioritization and schedule definition. Full branding adjustments and user flow tuning.',
        },
        {
          icon: 'Rocket',
          title: 'Iteration & Final Prototype',
          description: 'Design revisions. Final UI adjustments. Interactive prototype with defined workflows. Final approval before development.',
        },
      ],
    },
    devProcess: {
      heading: 'DEVELOPMENT, QUALITY ASSURANCE, AND PRODUCTION',
      subtitle: 'We create a robust, scalable, and efficient product.',
      steps: [
        {
          icon: 'ListChecks',
          title: 'Backlog & Schedule',
          description: 'Final estimations and prioritization of tasks in our CODA tool template.',
        },
        {
          icon: 'Newspaper',
          title: 'Development & Quality Monitoring',
          description: 'Daily and weekly task tracking in Coda. Daily and weekly follow-up meetings to track progress.',
        },
        {
          icon: 'SlidersHorizontal',
          title: 'Adjustments & Prioritization',
          description: 'Management of Adjustments, Bug Fixes & Task Prioritization. Flexible task prioritization based on business needs.',
        },
        {
          icon: 'Atom',
          title: 'Final Quality Control & Deployment',
          description: 'User acceptance testing (UAT) period. Validation to ensure expected quality standards. Soft launch to validate performance and objectives.',
        },
      ],
    },
  },
  es: {
    hero: {
      label: 'NUESTROS SERVICIOS TECNOLÓGICOS',
      heading: 'Soluciones para todas sus necesidades',
      description: 'Ofrecemos experiencia especializada en varias funciones para ejecutar proyectos integrales con nuestro método a prueba de balas utilizando las mejores herramientas low-code y de IA del mercado.',
    },
    designProcess: {
      heading: 'Proceso de Diseño, Análisis y Prototipado',
      subtitle: 'Aseguramos su visión en ~3 semanas',
      steps: [
        {
          icon: 'CalendarCheck',
          title: 'Reunión Inicial',
          description: 'Creación inicial de requisitos usando nuestra plantilla CODA. Definición de requisitos de alto nivel.',
        },
        {
          icon: 'Newspaper',
          title: 'Plan de Producto e Interfaz UI',
          description: 'Creación del backlog del producto usando CODA. Diseño de interfaz en Figma para personalización total o mediante IA.',
        },
        {
          icon: 'ListChecks',
          title: 'Backlog y Cronograma',
          description: 'Priorización de requisitos y definición del cronograma. Ajustes de marca y afinación del flujo de usuario.',
        },
        {
          icon: 'Rocket',
          title: 'Iteración y Prototipo Final',
          description: 'Revisiones de diseño. Ajustes finales de UI. Prototipo interactivo con flujos definidos. Aprobación final antes del desarrollo.',
        },
      ],
    },
    devProcess: {
      heading: 'DESARROLLO, ASEGURAMIENTO DE CALIDAD Y PRODUCCIÓN',
      subtitle: 'Creamos un producto robusto, escalable y eficiente.',
      steps: [
        {
          icon: 'ListChecks',
          title: 'Backlog y Cronograma',
          description: 'Estimaciones finales y priorización de tareas en nuestra plantilla CODA.',
        },
        {
          icon: 'Newspaper',
          title: 'Desarrollo y Monitoreo de Calidad',
          description: 'Seguimiento diario y semanal de tareas en Coda. Reuniones de seguimiento para tracking del progreso.',
        },
        {
          icon: 'SlidersHorizontal',
          title: 'Ajustes y Priorización',
          description: 'Gestión de ajustes, corrección de errores y priorización flexible basada en necesidades del negocio.',
        },
        {
          icon: 'Atom',
          title: 'Control de Calidad Final y Despliegue',
          description: 'Período de pruebas de aceptación (UAT). Validación para asegurar estándares de calidad. Lanzamiento suave para validar rendimiento.',
        },
      ],
    },
  },
}
