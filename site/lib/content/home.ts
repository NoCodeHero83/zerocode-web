import type { Locale } from '@/lib/nav'

export interface StatItem {
  value: number
  label: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  icon: string
  number: string
  title: string
  description: string
}

export interface PortfolioItem {
  title: string
  description: string
  image: string
  href: string
  imagePosition?: string
}

export interface TestimonialItem {
  quote: string
  name: string
  company: string
  image: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface HomeContent {
  hero: {
    seoTitle: string
    headline: string
    headlinePart1: string
    headlinePart2: string
    subheadline: string
    cta: string
    ctaHref: string
  }
  logoCarouselHeading: string
  stats: StatItem[]
  services: {
    label: string
    heading: string
    description: string
    items: ServiceItem[]
  }
  process: {
    label: string
    heading: string
    steps: ProcessStep[]
  }
  portfolio: {
    label: string
    heading: string
    items: PortfolioItem[]
  }
  testimonials: {
    label: string
    heading: string
    subtext: string
    items: TestimonialItem[]
  }
  faq: {
    label: string
    heading: string
    items: FaqItem[]
  }
  finalCta: {
    label: string
    heading: string
    button: string
    href: string
  }
}

const testimonialsEn: TestimonialItem[] = [
  {
    quote:
      'Zerocode provided a very efficient and reliable service. The team went above and beyond to deliver top-notch solutions. Impressed with their professionalism.',
    name: 'Alejandro García Soto',
    company: 'TOK&GO',
    image: '/images/Alejandro-Garcia.png',
  },
  {
    quote:
      'Zerocode provides exceptional software development services! Highly skilled team, timely delivery, and impressive quality. Highly recommended!',
    name: 'Manuel Montes de Oca',
    company: 'Supra Networks',
    image: '/images/Manuel-Montes-de-Oca-e1773759437142.jpeg',
  },
  {
    quote:
      "We're developing an app with banking-level scalability for all of Latin America, offering traditional financial services through a 100% digital onboarding experience. We've transformed the onboarding process into something simple, fast, and completely online.",
    name: 'Sebastian Saenz',
    company: 'Alianza Capital',
    image: '/images/Sebastian.png',
  },
  {
    quote:
      'Zerocode came in when our website was several months through development. Our previous developer had abandoned us. Zerocode completely transformed our website, and undertook work deemed impossible by our previous developer.',
    name: 'Pete Campbell',
    company: 'Later Life Training',
    image: '/images/Pete.jpeg',
  },
]

const testimonialsEs: TestimonialItem[] = [
  {
    quote:
      'Zerocode brindó un servicio muy eficiente y confiable. El equipo se esmeró al máximo para brindar soluciones de primera calidad. Impresionado con su profesionalismo.',
    name: 'Alejandro García Soto',
    company: 'TOK&GO',
    image: '/images/Alejandro-Garcia.png',
  },
  {
    quote:
      'Zerocode ofrece servicios de desarrollo de software excepcionales. Equipo altamente capacitado, entregas puntuales y una calidad impresionante. ¡Muy recomendable!',
    name: 'Manuel Montes de Oca',
    company: 'Supra Networks',
    image: '/images/Manuel-Montes-de-Oca-e1773759437142.jpeg',
  },
  {
    quote:
      'Estamos desarrollando una aplicación con escalabilidad a nivel bancario para toda Latinoamérica, ofreciendo servicios financieros tradicionales a través de una experiencia de incorporación 100% digital. Hemos transformado el proceso de incorporación en algo simple, rápido y completamente en línea.',
    name: 'Sebastian Saenz',
    company: 'Alianza Capital',
    image: '/images/Sebastian.png',
  },
  {
    quote:
      'Zerocode llegó cuando nuestro sitio web llevaba varios meses en desarrollo. Nuestro desarrollador anterior nos había abandonado. Zerocode transformó por completo nuestro sitio web y se encargó de tareas que nuestro desarrollador anterior consideraba imposibles.',
    name: 'Pete Campbell',
    company: 'Later Life Training',
    image: '/images/Pete.jpeg',
  },
]

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    hero: {
      seoTitle: 'AI-Assisted Software Development Agency — Zerocode',
      headline: 'WE BUILD THE TECHNOLOGY THAT MOVES YOUR BUSINESS FORWARD.',
      headlinePart1: 'WE BUILD THE TECHNOLOGY',
      headlinePart2: 'THAT MOVES YOUR BUSINESS FORWARD.',
      subheadline: "BUILT AROUND YOUR BUSINESS",
      cta: 'Know our work',
      ctaHref: '/portfolio/',
    },
    logoCarouselHeading: 'Our expertise includes the following technologies:',
    stats: [
      { value: 30, label: 'Projects' },
      { value: 15, label: 'Years' },
      { value: 10, label: 'Countries' },
      { value: 10, label: 'Teams' },
    ],
    services: {
      label: 'Our Tech Services',
      heading: 'Solutions For Your Every Need',
      description:
        'We combine specialized senior engineers across every discipline executing end-to-end projects with a structured process and the best AI development tools available.',
      items: [
        {
          icon: 'Globe',
          title: 'Web app development',
          description:
            'We develop scalable, custom web applications using low-code and no-code platforms. This allows faster launch times, reduced costs, and easier maintenance—without compromising performance, design, or future scalability.',
        },
        {
          icon: 'Smartphone',
          title: 'Mobile app development',
          description:
            'We create responsive, high-performing mobile apps for iOS and Android using no-code and low-code tools. Our approach accelerates development while ensuring great UX, smooth performance, and seamless integration with your existing systems.',
        },
        {
          icon: 'Sparkles',
          title: 'AI solutions development',
          description:
            'We build tailored AI solutions—chatbots, automations, predictive tools—leveraging low-code AI frameworks. This empowers your business to improve efficiency, customer experience, and decision-making with faster, smarter technology integration.',
        },
        {
          icon: 'PenTool',
          title: 'Design & Prototyping',
          description:
            'We design intuitive interfaces and clickable prototypes to validate your ideas before development. Our process ensures user-centric, visually compelling products that align with your business goals and brand identity.',
        },
        {
          icon: 'Users',
          title: 'Staff augmentation',
          description:
            'Quickly scale your team with our skilled low-code and no-code professionals. We help you fill talent gaps, meet tight deadlines, and boost project velocity—without the overhead of traditional hiring.',
        },
        {
          icon: 'ClipboardList',
          title: 'Project management',
          description:
            'Our experienced project managers oversee your tech initiatives from start to finish, ensuring deadlines are met, teams stay aligned, and deliverables match expectations. We use agile practices to drive real results.',
        },
      ],
    },
    process: {
      label: 'How It Works',
      heading: 'Build Applications at ⚡️speed',
      steps: [
        {
          icon: 'Search',
          number: '01',
          title: 'Discovery & Architecture',
          description:
            'We map your real requirements, existing data, and migration constraints and deliver a clear scope and budget before a single line of code is written.',
        },
        {
          icon: 'LayoutTemplate',
          number: '02',
          title: 'Frontend Build & Validation',
          description:
            'Your complete product interface built in actual code, validated by your team. Scope and budget locked before backend begins.',
        },
        {
          icon: 'Database',
          number: '03',
          title: 'Backend Development & Weekly Testing',
          description:
            'Full backend built by senior engineers with a working version released every week. Zero surprises at delivery.',
        },
        {
          icon: 'Rocket',
          number: '04',
          title: 'Launch & Migration',
          description:
            'Your platform stress tested at scale for security, robustness and performance, signed off by your team, and your existing clients migrated. They notice nothing except that things work better.',
        },
        {
          icon: 'LifeBuoy',
          number: '05',
          title: 'Soft Launch Support',
          description:
            '30 days present after launch. Issues resolved before they reach your clients, Phase 2 roadmap defined before we close.',
        },
      ],
    },
    portfolio: {
      label: 'Featured Projects',
      heading: 'Beautiful, functional and scalable digital solutions',
      items: [
        {
          title: 'Alianza Capital',
          description:
            'From 100% manual operations to a full fintech platform: two companies onboarded and automated, a mobile app live in both stores, and the ability to scale clients without growing headcount.',
          image: '/images/alianza-mock-1.png',
          href: '/portfolio/alianza-capital/',
        },
        {
          title: 'Ilirox',
          description:
            'A professional social network for real estate agents with intelligent matching between searches and properties, automatic alerts, polygon-based map search, community validation and social content — built to become Mexico’s largest real estate network.',
          image: '/images/ilirox-portada.png',
          href: '/portfolio/ilirox/',
        },
        {
          title: 'Racing KX',
          description:
            'A specialized social network for the professional motorsport community with vCard-style profiles, posts, followers and premium features — built with partner Creante for a French content creator community.',
          image: '/images/racingkx-mock-2.png',
          href: '/portfolio/racing-kx/',
        },
        {
          title: 'Later Life Training',
          description:
            'A platform on the verge of being scrapped became a stable, production-ready system that now activates USD 8,000/month through reliable bookings and payments. We rebuilt the backend and redesigned the UX so the team can finally trust and scale it.',
          image: '/images/llt-mock-1.png',
          href: '/portfolio/later-life-training/',
        },
        {
          title: 'True English',
          description:
            'An AI-assisted English learning platform with complete courses, automatic pronunciation evaluation, personalized feedback and specialized content for each organization — currently used in Hermosillo and Zacatecas.',
          image: '/images/trueenglish-mock-1.png',
          href: '/portfolio/true-english/',
        },
        {
          title: 'Increciendo FinTech',
          description:
            'A web platform for online loan management based on a subscription model, with preferential rates for subscribed users, standard rates for occasional users and corporate plans — a SaaS that benefits both the fintech and its clients.',
          image: '/images/increciendo-mock-1.png',
          href: '/portfolio/increciendo-fintech/',
        },
        {
          title: 'Hulp — Clients',
          description:
            'A manual operation turned into a live marketplace with 5,000+ downloads and recurring revenue. We built the full architecture, booking system and a simple app that clients actually enjoy using.',
          image: '/images/hulp-mock-1.png',
          href: '/portfolio/hulp-clients/',
        },
        {
          title: 'Daily Sparkle',
          description:
            'Daily Sparkle is a UK web application that helps care homes engage residents and connect families through care tools, activity planning, enriching content, and a secure family portal with personalized updates and schedules.',
          image: '/images/dailysparkle-mock-1.png',
          href: '/portfolio/daily-sparkle/',
        },
        {
          title: 'GM Parts',
          description:
            'GM Parts is the ultimate mobile and web solution for auto shops. Manage income, diagnoses, repair actions, spare parts and quotes. Its administrator web panel centralizes the entire process for efficient management. Perfect for shops looking to optimize their workflow.',
          image: '/images/gmparts-mock-1.png',
          imagePosition: 'object-center',
          href: '/portfolio/gm-parts-2/',
        },
        {
          title: 'Mentor GrowthRockstar',
          description:
            'Joining together mentors and mentees through a scheduling marketplace to ensure growth and success for the mentees.',
          image: '/images/mentor-mock-1.png',
          href: '/portfolio/mentor-growthrocsktar/',
        },
        {
          title: 'Beauty Connect',
          description:
            'Beauty Connect is a Mexican marketplace mobile application that connects beauty salons with clients, making it easy to discover, reserve, and pay for beauty services.',
          image: '/images/beautyconnect-mock-1.png',
          href: '/portfolio/beauty-connect/',
        },
        {
          title: 'The Decision Board',
          description:
            'The Decision Board helps high-performing leadership teams navigate uncertainty and decide how to decide, enabling structured discussions, decisions and pages to make team work more efficient, reliable and productive.',
          image: '/images/decisionboard-mock-1.png',
          href: '/portfolio/the-decision-board/',
        },
        {
          title: 'Supra Sales CRM',
          description:
            'Full sales process CRM tool that enables management of the entire sales process from client and project creation through business case, quotation and billing.',
          image: '/images/supra-mock-1.png',
          href: '/portfolio/supra-sales-crm/',
        },
        {
          title: 'Tok&Go',
          description:
            'Fintech digital assets tokenizator that enables investment in real projects through blockchain, providing end-to-end services for digital assets creation, management and distribution in both primary and secondary markets.',
          image: '/images/tokgo-mock-1.png',
          href: '/portfolio/tokgo/',
        },
        {
          title: 'Hulp — Providers',
          description:
            'Providers got their own app inside the same marketplace, with AI job matches and real-time coordination. The result: a scalable supply side sustaining the platform’s growth.',
          image: '/images/hulp-providers-mock-1.png',
          href: '/portfolio/hulp-providers/',
        },
        {
          title: 'Ecumerca',
          description:
            'Ecumerca is a marketplace platform made for the end consumer and the providers of products of diverse categories. This platform enables a shopping cart with the end consumer and manages several providers so a consumer can make a purchase from several providers at the same time. Ecumerca is composed of a shopping cart, order history, support chat, return policy and an administrator panel.',
          image: '/images/ecumerca-mock-1.png',
          href: '/portfolio/ecumerca/',
        },
      ],
    },
    testimonials: {
      label: 'Success Stories',
      heading: 'What Our Clients Say',
      subtext:
        "Get to know the true experiences and memorable stories behind the strong relationships we've built with our clients.",
      items: testimonialsEn,
    },
    faq: {
      label: 'FAQ',
      heading: 'Frequently asked questions',
      items: [
        {
          question: "We've tried this before and it didn't work. Why would this be different?",
          answer:
            'Because we build what your business actually needs, not what you think you need. Discovery maps your real requirements before a single line of code is written. You see the complete frontend and the full migration plan before the backend begins, scope, budget, and timeline locked before you commit to the full build.',
        },
        {
          question: "How do you make sure our existing clients don't notice the transition?",
          answer:
            'Migration is planned in Week 1, not after delivery. We define the parallel running protocol, data validation checkpoints, and client communication timeline before development begins. Your clients transition on a managed schedule. They notice nothing except that things work better.',
        },
        {
          question: 'Who owns the code?',
          answer:
            'You do. Fully. From day one we sign an NDA and IP ownership agreement. At handoff you receive the full codebase, documentation, and a team training session. You are never dependent on us unless you choose to be.',
        },
        {
          question: 'How much does it cost and how are payments structured?',
          answer:
            'Every project is scoped individually. We work with fixed-price proposals tied to clear milestones, no open-ended invoices, no surprise change requests. Payment is milestone-based. Most clients recover the full build cost within 4–6 months of launch through eliminated SaaS fees and reduced labor alone.',
        },
        {
          question: 'What happens after go-live?',
          answer:
            'We stay present for 30 days — resolving issues before they reach your clients. At Day 90 we define your Phase 2 roadmap so the engagement ends with clarity on what comes next. Most clients continue as long-term partners beyond the initial build.',
        },
        {
          question: 'How do you deliver faster than the industry standard keeping top-notch quality?',
          answer:
            'We combine senior engineers with AI-assisted development using the latest tools: Claude Code, Antigravity and GitHub Copilot. AI accelerates interface generation, boilerplate code, and repetitive logic. Senior engineers architect, supervise, and validate every decision. The result is production-grade code delivered faster than a traditional agency without compromising security, scalability, or performance.',
        },
      ],
    },
    finalCta: {
      label: "Let's connect!",
      heading: 'Get a free 30-minute consultation to discuss your project.',
      button: "Let's have a quick chat",
      href: 'https://zerocode.la/contact/',
    },
  },
  es: {
    hero: {
      seoTitle: 'Agencia de Desarrollo de Software Asistido por IA — Zerocode',
      headline: 'Las herramientas que utilizas están limitando tus ingresos.',
      headlinePart1: 'Las herramientas que utilizas',
      headlinePart2: 'están limitando tus ingresos.',
      subheadline: 'Tu negocio no es el problema',
      cta: 'Conozca nuestro trabajo',
      ctaHref: '/es/portfolio/',
    },
    logoCarouselHeading: 'Nuestra experiencia incluye las siguientes tecnologías:',
    stats: [
      { value: 30, label: 'Proyectos' },
      { value: 15, label: 'Años' },
      { value: 10, label: 'Países' },
      { value: 10, label: 'Equipos' },
    ],
    services: {
      label: 'Nuestros Servicios Tecnológicos',
      heading: 'Soluciones para todas sus necesidades',
      description:
        'Combinamos ingenieros senior especializados ejecutando proyectos de principio a fin con un proceso estructurado y las mejores herramientas de desarrollo con inteligencia artificial disponibles.',
      items: [
        {
          icon: 'Globe',
          title: 'Desarrollo de aplicaciones web',
          description:
            'Desarrollamos aplicaciones web escalables y personalizadas utilizando plataformas low-code y no-code. Esto permite tiempos de lanzamiento más rápidos, menores costos y un mantenimiento más sencillo, sin comprometer el rendimiento, el diseño ni la escalabilidad futura.',
        },
        {
          icon: 'Smartphone',
          title: 'Desarrollo de aplicaciones móviles',
          description:
            'Creamos aplicaciones móviles responsivas y de alto rendimiento para iOS y Android con herramientas sin código y de bajo código. Nuestro enfoque acelera el desarrollo, garantizando una excelente experiencia de usuario (UX), un rendimiento fluido y una integración perfecta con sus sistemas existentes.',
        },
        {
          icon: 'Sparkles',
          title: 'Desarrollo de soluciones de IA',
          description:
            'Desarrollamos soluciones de IA a medida (chatbots, automatizaciones, herramientas predictivas) que aprovechan marcos de IA de bajo código. Esto permite a su empresa mejorar la eficiencia, la experiencia del cliente y la toma de decisiones mediante una integración tecnológica más rápida e inteligente.',
        },
        {
          icon: 'PenTool',
          title: 'Diseño y creación de prototipos',
          description:
            'Diseñamos interfaces intuitivas y prototipos interactivos para validar sus ideas antes del desarrollo. Nuestro proceso garantiza productos visualmente atractivos y centrados en el usuario, alineados con sus objetivos comerciales e identidad de marca.',
        },
        {
          icon: 'Users',
          title: 'Aumento de personal',
          description:
            'Expande rápidamente tu equipo con nuestros profesionales expertos en low-code y no-code. Te ayudamos a cubrir las necesidades de talento, cumplir plazos ajustados y acelerar los proyectos, sin los gastos generales de la contratación tradicional.',
        },
        {
          icon: 'ClipboardList',
          title: 'Gestión de proyectos',
          description:
            'Nuestros experimentados gerentes de proyecto supervisan sus iniciativas tecnológicas de principio a fin, garantizando el cumplimiento de los plazos, la coordinación entre los equipos y la satisfacción de los resultados. Utilizamos prácticas ágiles para generar resultados reales.',
        },
      ],
    },
    process: {
      label: 'Cómo Funciona',
      heading: 'Desarrolle aplicaciones a la velocidad del ⚡️rayo',
      steps: [
        {
          icon: 'Search',
          number: '01',
          title: 'Discovery y Diseño de Arquitectura',
          description:
            'Mapeamos tus requerimientos reales, los datos existentes y las restricciones de migración y definimos un alcance y presupuesto claros antes de escribir una sola línea de código.',
        },
        {
          icon: 'LayoutTemplate',
          number: '02',
          title: 'Desarrollo de Frontend y Validación',
          description:
            'Construimos la interfaz completa de tu producto en código real, validada por tu equipo con alcance y presupuesto cerrados antes de iniciar el backend.',
        },
        {
          icon: 'Database',
          number: '03',
          title: 'Desarrollo de Backend y Testing Semanal',
          description:
            'Desarrollamos el backend completo con ingenieros senior, liberando una versión funcional cada semana. Cero sorpresas en la entrega.',
        },
        {
          icon: 'Rocket',
          number: '04',
          title: 'Lanzamiento y Migración',
          description:
            'Tu plataforma es sometida a pruebas de carga a escala para garantizar seguridad, robustez y rendimiento; validada por tu equipo, y con tus clientes actuales migrados. Ellos no notan nada, salvo que todo funciona mejor.',
        },
        {
          icon: 'LifeBuoy',
          number: '05',
          title: 'Soporte Post-Lanzamiento (Soft Launch)',
          description:
            '30 días de acompañamiento tras el lanzamiento resolvemos incidencias antes de que lleguen a tus clientes y definimos la hoja de ruta de la Fase 2 antes de cerrar.',
        },
      ],
    },
    portfolio: {
      label: 'Proyectos Destacados',
      heading: 'Soluciones digitales intuitivas, funcionales y escalables.',
      items: [
        {
          title: 'Alianza Capital',
          description:
            'De operaciones 100% manuales a una plataforma fintech completa: dos empresas incorporadas y automatizadas, una app móvil en ambas tiendas y la capacidad de escalar clientes sin aumentar la plantilla.',
          image: '/images/alianza-mock-1.png',
          href: '/es/portfolio/alianza-capital-es/',
        },
        {
          title: 'Ilirox',
          description:
            'Una red social profesional para agentes inmobiliarios con match inteligente entre búsquedas y propiedades, alertas automáticas, búsqueda por polígonos en el mapa, validación comunitaria y contenido social, construida para convertirse en la mayor red inmobiliaria de México.',
          image: '/images/ilirox-portada.png',
          href: '/es/portfolio/ilirox-es/',
        },
        {
          title: 'Racing KX',
          description:
            'Una red social especializada para la comunidad profesional del automovilismo con perfiles tipo vCard, publicaciones, seguidores y funcionalidades premium, desarrollada junto al partner Creante para una comunidad francesa de creadores de contenido.',
          image: '/images/racingkx-mock-2.png',
          href: '/es/portfolio/racing-kx-es/',
        },
        {
          title: 'Later Life Training',
          description:
            'Una plataforma a punto de ser descartada se convirtió en un sistema estable y listo para producción que hoy activa 8.000 USD/mes mediante reservas y pagos fiables. Reconstruimos el backend y rediseñamos la UX para que el equipo por fin pueda confiar y escalar.',
          image: '/images/llt-mock-1.png',
          href: '/es/portfolio/later-life-training-2/',
        },
        {
          title: 'True English',
          description:
            'Una plataforma de aprendizaje de inglés asistida por IA con cursos completos, evaluación automática de pronunciación, retroalimentación personalizada y contenido especializado para cada organización, utilizada actualmente en Hermosillo y Zacatecas.',
          image: '/images/trueenglish-mock-1.png',
          href: '/es/portfolio/true-english-es/',
        },
        {
          title: 'Increciendo FinTech',
          description:
            'Una plataforma web para la gestión de préstamos en línea basada en un modelo de suscripción, con tasas preferenciales para suscritos, tasas estándar para ocasionales y planes corporativos: un SaaS que beneficia tanto a la fintech como a sus clientes.',
          image: '/images/increciendo-mock-1.png',
          href: '/es/portfolio/increciendo-fintech-es/',
        },
        {
          title: 'Hulp — Clientes',
          description:
            'Una operación manual se transformó en un marketplace en producción con más de 5.000 descargas e ingresos recurrentes. Construimos la arquitectura completa, el sistema de reservas y una app sencilla que los clientes disfrutan usar.',
          image: '/images/hulp-mock-1.png',
          href: '/es/portfolio/hulp-clientes-es/',
        },
        {
          title: 'Daily Sparkle',
          description:
            'Daily Sparkle es una aplicación web del Reino Unido que ayuda a los hogares de cuidado a involucrar a sus residentes y conectar con sus familias. Ofrece gestión del cuidado, planificación de actividades y un portal seguro con actualizaciones e información.',
          image: '/images/dailysparkle-mock-1.png',
          href: '/es/portfolio/daily-sparkle-2/',
        },
        {
          title: 'GM Parts',
          description:
            'GM Parts es la solución móvil y web definitiva para talleres mecánicos. Gestione ingresos, diagnósticos, reparaciones, repuestos y presupuestos. Su panel web de administrador centraliza todo el proceso para una gestión eficiente. Ideal para talleres que buscan optimizar su flujo de trabajo.',
          image: '/images/gmparts-mock-1.png',
          imagePosition: 'object-center',
          href: '/es/portfolio/repuestos-gm-es/',
        },
        {
          title: 'Mentor GrowthRockstar',
          description:
            'Uniendo mentores y aprendices a través de una plataforma de programación para asegurar el crecimiento y el éxito de los aprendices.',
          image: '/images/mentor-mock-1.png',
          href: '/es/portfolio/mentor-growthrocsktar-es/',
        },
        {
          title: 'Beauty Connect',
          description:
            'Beauty Connect es una aplicación móvil de mercado mexicano que conecta salones de belleza con clientes, facilitando el descubrimiento, la reserva y el pago de servicios de belleza.',
          image: '/images/beautyconnect-mock-1.png',
          href: '/es/portfolio/beauty-connect-es/',
        },
        {
          title: 'El Tablero de Decisiones',
          description:
            'El Panel de Decisiones ayuda a los equipos de liderazgo de alto rendimiento a gestionar la incertidumbre y a decidir cómo tomar decisiones, facilitando debates, decisiones y páginas estructuradas para un trabajo en equipo más eficiente y productivo.',
          image: '/images/decisionboard-mock-1.png',
          href: '/es/portfolio/the-decision-board-es/',
        },
        {
          title: 'CRM de Ventas Supra',
          description:
            'Herramienta CRM integral que gestiona todo el proceso de ventas de SUPRA, desde la creación del cliente y el proyecto hasta la creación del caso de negocio, la cotización y la facturación.',
          image: '/images/supra-mock-1.png',
          href: '/es/portfolio/supra-sales-crm-es/',
        },
        {
          title: 'Tok&Go',
          description:
            'Fintech tokenizador de activos digitales que permite invertir en proyectos reales mediante blockchain, ofreciendo servicios integrales de creación, gestión y distribución de activos digitales.',
          image: '/images/tokgo-mock-1.png',
          href: '/es/portfolio/tokgo-es/',
        },
        {
          title: 'Hulp — Proveedores',
          description:
            'Los proveedores tienen su propia app dentro del mismo marketplace, con emparejamientos de trabajo por IA y coordinación en tiempo real. El resultado: un lado de la oferta escalable que sostiene el crecimiento.',
          image: '/images/hulp-providers-mock-1.png',
          href: '/es/portfolio/hulp-proveedores-es/',
        },
        {
          title: 'Ecumerca',
          description:
            'Ecumerca es una plataforma de mercado diseñada para el consumidor final y los proveedores de productos de diversas categorías. Esta plataforma permite al consumidor final crear un carrito de compras y gestionar varios proveedores para que un consumidor pueda realizar compras simultáneas. Ecumerca incluye un carrito de compras, historial de pedidos, chat de soporte, política de devoluciones y un panel de administrador.',
          image: '/images/ecumerca-mock-1.png',
          href: '/es/portfolio/ecumerca-es/',
        },
      ],
    },
    testimonials: {
      label: 'Historias de éxito',
      heading: 'Lo que dicen nuestros clientes',
      subtext:
        'Conozca las verdaderas experiencias e historias memorables detrás de las sólidas relaciones que hemos construido con nuestros clientes.',
      items: testimonialsEs,
    },
    faq: {
      label: 'FAQ',
      heading: 'Preguntas frecuentes',
      items: [
        {
          question: 'Ya lo intentamos antes con otro proveedor y no funcionó. ¿Por qué esta vez sería diferente?',
          answer:
            'Porque construimos lo que tu negocio realmente necesita, no lo que crees que necesitas. El discovery mapea tus requerimientos reales antes de escribir una sola línea de código. Ves el frontend completo y el plan de migración antes de que empiece el backend. Alcance, presupuesto y tiempos definidos antes de comprometerte con el desarrollo completo.',
        },
        {
          question: '¿Cómo garantizan que nuestros clientes actuales no noten la transición?',
          answer:
            'La migración se planifica en la Semana 1, no después de la entrega. Definimos el protocolo de ejecución paralela, los puntos de validación de datos y el cronograma de comunicación con clientes antes de que empiece el desarrollo. Tus clientes transicionan en un proceso administrado. No notarán nada excepto que todo funciona mejor.',
        },
        {
          question: '¿Quién es dueño del código?',
          answer:
            'Tú. Completamente. Desde el día uno firmamos un NDA y un acuerdo de propiedad intelectual. En la entrega recibes el código completo, la documentación y una sesión de capacitación para tu equipo. Nunca dependes de nosotros a menos que así lo elijas.',
        },
        {
          question: '¿Cuánto cuesta y cómo se estructuran los pagos?',
          answer:
            'Cada proyecto se cotiza de forma individual. Trabajamos con propuestas de precio fijo atadas a hitos claros. Sin facturas abiertas ni cambios sorpresa. Los pagos son por hito. La mayoría de nuestros clientes recuperan el costo total del desarrollo en 6 a 12 meses solo con los ahorros en SaaS y reducción de trabajo manual.',
        },
        {
          question: '¿Qué pasa después del lanzamiento?',
          answer:
            'Estamos presentes durante 30 días resolviendo problemas antes de que lleguen a tus clientes. En el Día 90 definimos el roadmap de la Fase 2 para que el proyecto cierre con claridad sobre lo que viene. La mayoría de nuestros clientes continúan como socios tecnológicos a largo plazo más allá del desarrollo inicial.',
        },
        {
          question: '¿Cómo entregan más rápido que el estándar de la industria manteniendo una calidad de primer nivel?',
          answer:
            'Combinamos ingenieros senior con desarrollo asistido por inteligencia artificial usando las últimas herramientas: Claude Code, Antigravity y GitHub Copilot. La IA acelera la generación de interfaces, el código base y la lógica repetitiva. Los ingenieros senior diseñan la arquitectura, supervisan y validan cada decisión. El resultado es código listo para producción entregado más rápido que una agencia tradicional sin comprometer seguridad, escalabilidad ni rendimiento.',
        },
      ],
    },
    finalCta: {
      label: '¡Pongámonos en contacto!',
      heading: 'Obtenga una consulta gratuita de 30 minutos para discutir su proyecto.',
      button: 'Vamos a tener una charla rápida',
      href: 'https://zerocode.la/contact/',
    },
  },
}