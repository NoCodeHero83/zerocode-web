export interface PortfolioBusinessCaseLink {
  label: string
  url: string
}

export interface PortfolioBusinessCase {
  problem: string
  built: string[]
  results: string[]
  quote?: string
  links: PortfolioBusinessCaseLink[]
}

export interface PortfolioItemFull {
  title: string
  description: string
  thumbnail: string
  images: string[]
  techSpecs: Record<string, string>
  href: string
  relatedSlugs: string[]
  businessCase?: PortfolioBusinessCase
}

const portfolioItemsEn: PortfolioItemFull[] = [
  {
    title: 'Later Life Training',
    description:
      'Later Life Training is a web application from a Scotland company whose mission is to empower elderly people to combat age-related diseases and improve their quality of life. To achieve this, VivirBien provides personalized training programs and supportive services designed to promote wellness, independence, and healthy aging.',
    thumbnail: '/images/llt-mock-1.png',
    images: [
      '/images/llt-mock-1.png',
      '/images/llt-mock-2.png',
      '/images/llt-mock-3.png',
      '/images/llt-mock-4.png',
      '/images/llt-mock-5.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'Bubble',
      'Link': 'https://laterlifetraining.co.uk/',
    },
    href: '/portfolio/later-life-training/',
    relatedSlugs: ['alianza-capital', 'gm-parts-2'],
    businessCase: {
      problem:
        'After a major investment, the platform was close to being scrapped. Broken workflows, unreliable bookings and payments, and a system too unstable to run, let alone grow.',
      built: [
        'Rebuilt database and backend architecture.',
        'Stabilized the booking, events and payment systems.',
        'Redesigned the UX/UI for clarity and consistency.',
        'Admin panel for full operational control.',
      ],
      results: [
        'Stable, production-ready platform.',
        'USD 8,000/month activated through reliable booking and payment flows.',
        'Clear and consistent user experience.',
        'Platform ready to scale without constant fixes.',
      ],
      quote: 'Zerocode turned a failed project into a platform we can trust.',
      links: [
        { label: 'Clutch · Later Life Training testimonial', url: 'https://clutch.co/profile/zerocode-0#review-367019' },
        { label: 'Website · https://laterlifetraining.co.uk/', url: 'https://laterlifetraining.co.uk/' },
      ],
    },
  },
  {
    title: 'Alianza Capital',
    description:
      'Alianza is a Colombian financial company whose mission is to make financial products accessible to small investors. To achieve this, Alianza developed a mobile application alongside a web-based management platform to handle all financial contracts and assets. Alianza provides a user-friendly yet functional and highly effective interface, enabling investors to carry out their transactions with ease and confidence. The PSE payment gateway was integrated, and the application is set to be published on both Google and Apple stores soon.',
    thumbnail: '/images/alianza-mock-1.png',
    images: [
      '/images/alianza-mock-1.png',
      '/images/alianza-mock-2.png',
      '/images/alianza-mock-3.png',
      '/images/alianza-mock-4.png',
      '/images/alianza-mock-5.png',
      '/images/alianza-mock-6.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'Flutterflow & Firebase',
      'Google Play Store': 'https://play.google.com/store/apps/details?id=com.mycompany.alicard',
      'Apple Store': 'https://apps.apple.com/pe/app/alianza-capital/id6502927890',
    },
    href: '/portfolio/alianza-capital/',
    relatedSlugs: ['later-life-training', 'gm-parts-2'],
    businessCase: {
      problem:
        'Client onboarding, investment tracking and reporting were done completely by hand. With no platform, there was no trust from investors or clients, and no way to grow without hiring more people.',
      built: [
        'Client portal and admin panel.',
        'Mobile app for both App Store and Google Play.',
        'Financial management for payroll and employee loans.',
      ],
      results: [
        'Two companies onboarded and 100% operational, including employees, payroll and savings.',
        'Automated onboarding, tracking and reporting across the operation.',
        'Mobile app available in both stores.',
        'Ability to scale clients without growing headcount.',
      ],
      quote: 'The team delivered a platform we are proud to show our investors.',
      links: [
        { label: 'Clutch · Alianza Capital testimonial', url: 'https://clutch.co/go-to-review/5d1ffa4c-14be-49dd-a119-27464d90b6ea/365444' },
        { label: 'App Store', url: 'https://apps.apple.com/pe/app/alianza-capital/id6502927890' },
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mycompany.alicard' },
      ],
    },
  },
  {
    title: 'Hulp \u2014 Clients',
    description:
      'Hulp is a Colombian service platform whose mission is to connect clients with trusted handyman professionals. The Client App was specifically developed for users seeking services, offering a simple interface, an AI-powered matching system, and integration with an administrator panel that supervises all services, users, and issues.',
    thumbnail: '/images/hulp-mock-1.png',
    images: [
      '/images/hulp-mock-1.png',
      '/images/hulp-mock-2.png',
      '/images/hulp-mock-3.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'FlutterFlow, Supabase',
      'Google Play Store': 'https://play.google.com/store/apps/details?id=com.hulp.hulp',
      'Apple Store': 'https://apps.apple.com/pe/app/hulp-servicios-confiables/id6749599177',
    },
    href: '/portfolio/hulp-clients/',
    relatedSlugs: ['hulp-providers', 'beauty-connect'],
    businessCase: {
      problem:
        'The operation ran completely by hand, with no digital platform to handle the demand. Assigning services, providers and managing clients relied on informal processes that were hard to scale, draining efficiency and growth.',
      built: [
        'Full marketplace architecture designed and built from scratch.',
        'Centralized booking, service-assignment and provider-management system.',
        'Simple and fluid mobile app for users.',
        'Admin panel with real-time control of supply and demand.',
      ],
      results: [
        'Functional marketplace launched from scratch and live in production.',
        'Over 5,000 downloads on Google Play with steady adoption.',
        'Recurring revenue generated through in-platform services.',
        'Scalable tech base ready for expansion.',
      ],
      quote: 'Zerocode let us go from a manual operation to a platform that now sustains our growth.',
      links: [
        { label: 'Apple Store', url: 'https://apps.apple.com/pe/app/hulp-servicios-confiables/id6749599177' },
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.hulp.hulp' },
      ],
    },
  },
  {
    title: 'Hulp \u2014 Providers',
    description:
      'Hulp is a Colombian service platform whose mission is to connect trusted handyman professionals with potential clients. To achieve this, the Provider App was developed to let professionals showcase their skills, receive AI-powered job matches, and coordinate their work efficiently through an administrator panel that manages services, users, and issues.',
    thumbnail: '/images/hulp-mock-1.png',
    images: [
      '/images/hulp-mock-1.png',
      '/images/hulp-mock-2.png',
      '/images/hulp-mock-3.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'FlutterFlow, Supabase',
      'Google Play Store': 'https://play.google.com/store/apps/details?id=com.hulp.talentohulp',
      'Apple Store': 'https://apps.apple.com/pe/app/talento-hulp/id6748622356',
    },
    href: '/portfolio/hulp-providers/',
    relatedSlugs: ['hulp-clients', 'supra-sales-crm'],
    businessCase: {
      problem:
        'On the provider side, the business was just as manual: no way to reach clients efficiently, coordinate jobs, or grow the supply side of the marketplace.',
      built: [
        'Provider experience built within the same marketplace architecture.',
        'Mobile app for professionals to manage their work.',
        'AI-powered job matching.',
        'Admin panel overseeing the whole operation in real time.',
      ],
      results: [
        'Providers operating inside a live, production marketplace.',
        'Recurring revenue flowing through in-platform services.',
        'Scalable foundation for continued expansion.',
        'Supply side that sustains the platform’s growth.',
      ],
      quote: 'Zerocode let us go from a manual operation to a platform that now sustains our growth.',
      links: [
        { label: 'Google Play (Providers)', url: 'https://play.google.com/store/apps/details?id=com.hulp.talentohulp' },
        { label: 'Apple Store (Providers)', url: 'https://apps.apple.com/pe/app/talento-hulp/id6748622356' },
      ],
    },
  },
  {
    title: 'GM Parts',
    description:
      'GM Parts is the ultimate mobile and web solution for auto shops. Manage income, diagnoses, repair actions, spare parts and quotes. Its administrator web panel centralizes the entire process for efficient management. Perfect for shops looking to optimize their workflow.\n\nGM Parts is the definitive solution for mechanical workshops seeking to optimize their management process. With this mobile app and its web admin panel, managing your workflow has never been so efficient.\n\nFrom the moment a new car arrives at the shop, GM Parts makes it easy to record revenue and instantly generate diagnostics and fault reports. Users can enter the actions necessary to resolve these faults and manage the required spare parts, all from the convenience of their mobile device.\n\nOne of the standout features of GM Parts is its ability to generate detailed quotes, which can be approved by customers through the app. Once the quote is approved, the shop can proceed with the necessary arrangements quickly and efficiently.\n\nThe administrator web panel offers complete control over the entire process, allowing detailed supervision of each stage. From customer and vehicle management to task assignment and payment tracking, GM Parts centralizes all operations effectively.\n\nIn short, GM Parts is the ultimate tool for auto shops looking to optimize their workflow and provide exceptional service to their customers. With its intuitive interface, complete management functions and real-time tracking capabilities, GM Parts becomes the perfect ally for any modern mechanical workshop.',
    thumbnail: '/images/gmparts-mock-1.png',
    images: [
      '/images/gmparts-mock-1.png',
      '/images/gmparts-mock-2.png',
      '/images/gmparts-mock-3.png',
      '/images/gmparts-mock-4.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'FlutterFlow & Firebase',
      'Google Store': 'https://play.google.com/store/apps/details?id=com.mycompany.gmparts',
      'Apple Store': 'https://apps.apple.com/pe/app/gmparts/id6747365518',
    },
    href: '/portfolio/gm-parts-2/',
    relatedSlugs: ['alianza-capital', 'daily-sparkle'],
  },
  {
    title: 'Daily Sparkle',
    description:
      'Daily Sparkle is a web application from the UK designed to help care homes engage residents and connect with families. To achieve this, Daily Sparkle provides care management tools, activity planning, life-enriching content, and a secure family portal with updates, schedules, and personalized resident information.',
    thumbnail: '/images/dailysparkle-mock-1.png',
    images: [
      '/images/dailysparkle-mock-1.png',
      '/images/dailysparkle-mock-2.png',
      '/images/dailysparkle-mock-3.png',
      '/images/dailysparkle-mock-4.png',
      '/images/dailysparkle-mock-5.png',
      '/images/dailysparkle-mock-6.png',
    ],
    techSpecs: {
      'Design': 'Lovable',
      'Implementation': 'Bubble',
      'Link': 'https://dailysparkle.co.uk/',
    },
    href: '/portfolio/daily-sparkle/',
    relatedSlugs: ['later-life-training', 'ecumerca'],
  },
  {
    title: 'Ecumerca',
    description:
      'Ecumerca is a marketplace platform made for the end consumer and the the providers of products of diverse categories. This platform enables a shopping cart with the end consumer and manages several providers so a consumer can make a purchase from several providers at the same time. Ecumerca is composed by a shopping cart, order history, support chat, return policy and an administrator panel.',
    thumbnail: '/images/ecumerca-mock-1.png',
    images: [
      '/images/ecumerca-mock-1.png',
      '/images/ecumerca-mock-2.png',
      '/images/ecumerca-mock-3.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'FlutterFlow & Firebase',
      'Google Store': 'https://play.google.com/store/apps/details?id=com.mycompany.ecumerca',
      'Apple Store': 'https://apps.apple.com/us/app/ecumerca/id6738750466',
    },
    href: '/portfolio/ecumerca/',
    relatedSlugs: ['daily-sparkle', 'alianza-capital'],
  },
  {
    title: 'Mentor GrowthRockstar',
    description:
      'Joining together mentors and mentees through a scheduling marketplace to ensure growth and success for the mentees.',
    thumbnail: '/images/mentor-mock-thumb.png',
    images: [
      '/images/mentor-mock-thumb.png',
      '/images/mentor-mock-1.png',
      '/images/mentor-mock-2.png',
      '/images/mentor-mock-3.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'Flutterflow & Supabase',
    },
    href: '/portfolio/mentor-growthrocsktar/',
    relatedSlugs: ['ecumerca', 'beauty-connect'],
  },
  {
    title: 'Beauty Connect',
    description:
      'Beauty Connect is a Mexican marketplace mobile application that connects beauty salons with clients, making it easy to discover, reserve, and pay for beauty services.\n\nTo streamline the entire customer experience, Beauty Connect allows users to browse available services, select their preferred professional, schedule appointments, and complete payments—all within the app. Each service can be tracked for follow-up or repeat bookings, ensuring a seamless and personalized experience.\n\nAlongside the mobile platform, a robust web-based administration panel was developed to manage salons, professionals, services, users, and transactions in a centralized and efficient way.\n\nDesigned for scalability and ease of use, Beauty Connect is poised to transform the beauty service industry in Mexico. The app will soon be available on both the Google Play Store and Apple App Store.',
    thumbnail: '/images/beautyconnect-mock-1.png',
    images: [
      '/images/beautyconnect-mock-1.png',
      '/images/beautyconnect-mock-2.png',
      '/images/beautyconnect-mock-3.png',
      '/images/beautyconnect-mock-4.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'Flutterflow & Supabase',
      'Google Store': 'https://play.google.com/store/apps/details?id=com.mycompany.beautyconnect',
      'Apple Store': 'Pending to be published',
    },
    href: '/portfolio/beauty-connect/',
    relatedSlugs: ['the-decision-board', 'hulp-clients'],
  },
  {
    title: 'The Decision Board',
    description:
      'The Decision Board helps high-performing leadership teams navigate uncertainty and decide how to decide.\n\nThe Decision board is a SaaS created by a USA startup and is a tool that provides a unique solution to its customers by enabling structured discusssions, decisions and pages to make team work more efficient, reliable and productive.\n\nIt relies on the power of data structuring and management to reach to objectives that otherwise would take a longer time to achieve.\n\nIt has a already setup customer base and is looking forward to a rapid growth.',
    thumbnail: '/images/decisionboard-mock-1.png',
    images: [
      '/images/decisionboard-mock-1.png',
      '/images/decisionboard-mock-2.png',
      '/images/decisionboard-mock-3.png',
      '/images/decisionboard-mock-4.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'Bubble.io',
      'WebLink': 'https://www.thedecisionboard.com/',
    },
    href: '/portfolio/the-decision-board/',
    relatedSlugs: ['beauty-connect', 'supra-sales-crm'],
  },
  {
    title: 'Supra Sales CRM',
    description:
      'Full sales process CRM tool. This CRM enables the management of the entire sales process of SUPRA from the creation of the client and the project through the business case creation, quotation and billing.\n\nSUPRA is a Peruvian company that offers network security solutions to various clients nationwide. A tracking CRM from the creation of the opportunity to the billing of SUPRA\u00b4s services was implemented.\n\nThis CRM covered the whole sales process from the oportunity creation until business case structuration the billing and the invoice generation. It included a summary dashboard for goals tracking and review.',
    thumbnail: '/images/supra-mock-1.png',
    images: [
      '/images/supra-mock-1.png',
      '/images/supra-mock-2.png',
      '/images/supra-mock-3.png',
      '/images/supra-mock-4.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'Bubble.io',
      'Web Link': 'Internal tool, can\u00b4t be shared',
    },
    href: '/portfolio/supra-sales-crm/',
    relatedSlugs: ['the-decision-board', 'tokgo'],
  },
  {
    title: 'Tok&Go',
    description:
      'Fintech, digital assets tokenizator. Tok&Go gives you the possibility to invest in real projects through the power of Blockchain.\n\nTok&Go is a spanish Fintech that provides digital assets tokenization services. Their services includes an end to end service for digital assets creation, management and distribution within the blockchain in both the primary market(investor to asset issuer \u2013 company) and the secondary market (investor to investor).\n\nWe had a great collaboration together constructing their front end web platform for both desktop and mobile and managing all the required integrations including:\nKYC \u2013 Know your customer \u2013 NeoCheck\nBlockchain \u2013 Propietary Tok&Go platform\nPayment gateway \u2013 Inespay',
    thumbnail: '/images/tokgo-mock-1.png',
    images: [
      '/images/tokgo-mock-1.png',
      '/images/tokgo-mock-2.png',
      '/images/tokgo-mock-3.png',
      '/images/tokgo-mock-4.png',
    ],
    techSpecs: {
      'Design': 'Figma',
      'Implementation': 'Bubble.io',
      'Web Link': 'https://www.tokandgo.com/',
    },
    href: '/portfolio/tokgo/',
    relatedSlugs: ['supra-sales-crm', 'alianza-capital'],
  },
]

const portfolioItemsEs: PortfolioItemFull[] = [
  {
    title: 'Later Life Training',
    description:
      'Later Life Training es una aplicación web de una empresa escocesa cuya misión es empoderar a las personas mayores para combatir enfermedades relacionadas con la edad y mejorar su calidad de vida. Para lograrlo, VivirBien ofrece programas de entrenamiento personalizados y servicios de apoyo diseñados para promover el bienestar, la independencia y un envejecimiento saludable.',
    thumbnail: '/images/llt-mock-1.png',
    images: [
      '/images/llt-mock-1.png',
      '/images/llt-mock-2.png',
      '/images/llt-mock-3.png',
      '/images/llt-mock-4.png',
      '/images/llt-mock-5.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'Bubble',
      'Enlace': 'https://laterlifetraining.co.uk/',
    },
    href: '/es/portfolio/later-life-training-2/',
    relatedSlugs: ['alianza-capital-es', 'repuestos-gm-es'],
    businessCase: {
      problem:
        'Tras una importante inversión, la plataforma estuvo a punto de ser abandonada. Flujos de trabajo defectuosos, reservas y pagos poco fiables, y un sistema demasiado inestable para funcionar, y mucho menos para escalar.',
      built: [
        'Base de datos y arquitectura de backend reconstruidas.',
        'Sistemas de reserva, eventos y pago estabilizados.',
        'Interfaz de usuario (UX/UI) rediseñada para mayor claridad y coherencia.',
        'Panel de administración para un control operativo completo.',
      ],
      results: [
        'Plataforma estable y lista para producción.',
        'Activación de 8.000 USD al mes mediante flujos de reserva y pago fiables.',
        'Experiencia de usuario clara y consistente.',
        'Plataforma lista para escalar sin necesidad de correcciones constantes.',
      ],
      quote: 'Zerocode convirtió un proyecto fallido en una plataforma en la que podemos confiar.',
      links: [
        { label: 'Clutch · Testimonio en Clutch de Later Life Training', url: 'https://clutch.co/profile/zerocode-0#review-367019' },
        { label: 'Enlace web · https://laterlifetraining.co.uk/', url: 'https://laterlifetraining.co.uk/' },
      ],
    },
  },
  {
    title: 'Alianza Capital',
    description:
      'Alianza es una empresa financiera colombiana cuya misión es facilitar el acceso a productos financieros a pequeños inversionistas mediante una aplicación móvil y plataforma web para gestionar contratos y activos financieros. Alianza ofrece una interfaz funcional y altamente efectiva, permitiendo a los inversionistas realizar sus transacciones con facilidad y confianza. Se integró la pasarela de pago PSE y la aplicación está próxima a publicarse en las tiendas de Google y Apple.',
    thumbnail: '/images/alianza-mock-1.png',
    images: [
      '/images/alianza-mock-1.png',
      '/images/alianza-mock-2.png',
      '/images/alianza-mock-3.png',
      '/images/alianza-mock-4.png',
      '/images/alianza-mock-5.png',
      '/images/alianza-mock-6.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'Flutterflow & Firebase',
      'Google Play Store': 'https://play.google.com/store/apps/details?id=com.mycompany.alicard',
      'Apple Store': 'https://apps.apple.com/pe/app/alianza-capital/id6502927890',
    },
    href: '/es/portfolio/alianza-capital-es/',
    relatedSlugs: ['later-life-training-2', 'repuestos-gm-es'],
    businessCase: {
      problem:
        'El onboarding de los clientes, el seguimiento de las inversiones y los reportes se realizaban de forma totalmente manual. Sin plataforma, no había confianza de inversionistas ni clientes, y no había forma de crecer sin contratar personal.',
      built: [
        'Portal del cliente y panel de administración.',
        'Aplicación móvil (App Store y Google Play).',
        'Gestión financiera para nóminas y préstamos a empleados.',
      ],
      results: [
        'Onboarding de dos empresas y 100% operativas incluyendo empleados, nóminas y ahorros.',
        'Incorporación, seguimiento e informes automatizados en toda la operación.',
        'Aplicación móvil disponible en ambas tiendas.',
        'Capacidad para escalar clientes sin aumentar la plantilla.',
      ],
      quote: 'El equipo nos entregó una plataforma que nos enorgullece mostrar a los inversores.',
      links: [
        { label: 'Clutch · Testimonio en Clutch de Alianza Capital', url: 'https://clutch.co/go-to-review/5d1ffa4c-14be-49dd-a119-27464d90b6ea/365444' },
        { label: 'App Store', url: 'https://apps.apple.com/pe/app/alianza-capital/id6502927890' },
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mycompany.alicard' },
      ],
    },
  },
  {
    title: 'Hulp \u2014 Clientes',
    description:
      'Hulp es una plataforma colombiana cuya misión es conectar clientes con profesionales de confianza. La App para Clientes fue desarrollada específicamente para usuarios que buscan servicios, ofreciendo una interfaz sencilla, un sistema de matching impulsado por IA e integración con un panel de administración que supervisa todos los servicios, usuarios y problemas.',
    thumbnail: '/images/hulp-mock-1.png',
    images: [
      '/images/hulp-mock-1.png',
      '/images/hulp-mock-2.png',
      '/images/hulp-mock-3.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'FlutterFlow, Supabase',
      'Google Play Store': 'https://play.google.com/store/apps/details?id=com.hulp.hulp',
      'Apple Store': 'https://apps.apple.com/pe/app/hulp-servicios-confiables/id6749599177',
    },
    href: '/es/portfolio/hulp-clientes-es/',
    relatedSlugs: ['hulp-proveedores-es', 'beauty-connect-es'],
    businessCase: {
      problem:
        'La operación era completamente manual, sin una plataforma digital que soportara la demanda. La asignación de servicios, proveedores y gestión de clientes dependían de procesos informales y difíciles de escalar, generando pérdida de eficiencia y oportunidades de crecimiento.',
      built: [
        'Arquitectura completa del marketplace diseñada y desarrollada desde cero.',
        'Sistema centralizado de reservas, asignación de servicios y gestión de proveedores.',
        'Aplicación móvil para usuarios con una experiencia simple y fluida de contratación.',
        'Panel de administración para el control total de la oferta y la demanda en tiempo real.',
      ],
      results: [
        'Marketplace funcional lanzado desde cero y operativo en producción.',
        'Más de 5.000 descargas en Google Play con adopción sostenida.',
        'Ingresos recurrentes generados a través de servicios dentro de la plataforma.',
        'Base tecnológica escalable para expansión y crecimiento continuo.',
      ],
      quote: 'Zerocode nos permitió pasar de una operación manual a una plataforma que hoy sostiene nuestro crecimiento.',
      links: [
        { label: 'Apple Store', url: 'https://apps.apple.com/pe/app/hulp-servicios-confiables/id6749599177' },
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.hulp.hulp' },
      ],
    },
  },
  {
    title: 'Hulp \u2014 Proveedores',
    description:
      'Hulp es una plataforma colombiana cuya misión es conectar profesionales de confianza con clientes potenciales. Para lograrlo, se desarrolló la App para Proveedores que permite a los profesionales mostrar sus habilidades, recibir coincidencias laborales impulsadas por IA y coordinar su trabajo de manera eficiente a través de un panel de administración que gestiona servicios, usuarios y problemas.',
    thumbnail: '/images/hulp-mock-1.png',
    images: [
      '/images/hulp-mock-1.png',
      '/images/hulp-mock-2.png',
      '/images/hulp-mock-3.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'FlutterFlow, Supabase',
      'Google Play Store': 'https://play.google.com/store/apps/details?id=com.hulp.talentohulp',
      'Apple Store': 'https://apps.apple.com/pe/app/talento-hulp/id6748622356',
    },
    href: '/es/portfolio/hulp-proveedores-es/',
    relatedSlugs: ['hulp-clientes-es', 'supra-sales-crm-es'],
    businessCase: {
      problem:
        'Del lado de los proveedores, el negocio era igual de manual: no había forma de llegar a clientes con eficiencia, coordinar trabajos ni hacer crecer el lado de la oferta del marketplace.',
      built: [
        'Experiencia de proveedores construida dentro de la misma arquitectura del marketplace.',
        'Aplicación móvil para que los profesionales gestionen su trabajo.',
        'Emparejamiento de trabajos impulsado por IA.',
        'Panel de administración que supervisa toda la operación en tiempo real.',
      ],
      results: [
        'Proveedores operando dentro de un marketplace en producción.',
        'Ingresos recurrentes a través de servicios dentro de la plataforma.',
        'Base escalable para seguir creciendo.',
        'Lado de la oferta que sostiene el crecimiento del marketplace.',
      ],
      quote: 'Zerocode nos permitió pasar de una operación manual a una plataforma que hoy sostiene nuestro crecimiento.',
      links: [
        { label: 'Google Play (Proveedores)', url: 'https://play.google.com/store/apps/details?id=com.hulp.talentohulp' },
        { label: 'Apple Store (Proveedores)', url: 'https://apps.apple.com/pe/app/talento-hulp/id6748622356' },
      ],
    },
  },
  {
    title: 'GM Parts',
    description:
      'GM Parts es la solución móvil y web definitiva para talleres mecánicos. Gestione ingresos, diagnósticos, reparaciones, repuestos y presupuestos. Su panel de administración web centraliza todo el proceso.\n\nGM Parts es la solución definitiva para talleres mecánicos que buscan optimizar su proceso de gestión. Con esta aplicación móvil y su panel de administración web, gestionar el flujo de trabajo nunca ha sido tan eficiente.\n\nDesde el momento en que un nuevo automóvil llega al taller, GM Parts facilita el registro de ingresos y la generación instantánea de diagnósticos e informes de fallas. Los usuarios pueden ingresar las acciones necesarias para resolver estas fallas y gestionar los repuestos requeridos, todo desde la comodidad de su dispositivo móvil.\n\nUna de las características destacadas de GM Parts es su capacidad para generar presupuestos detallados, que pueden ser aprobados por los clientes a través de la aplicación. Una vez aprobado el presupuesto, el taller puede proceder con las gestiones necesarias de manera rápida y eficiente.\n\nEl panel de administración web ofrece control completo sobre todo el proceso, permitiendo una supervisión detallada de cada etapa. Desde la gestión de clientes y vehículos hasta la asignación de tareas y el seguimiento de pagos, GM Parts centraliza todas las operaciones de manera efectiva.\n\nEn resumen, GM Parts es la herramienta definitiva para talleres mecánicos que buscan optimizar su flujo de trabajo y brindar un servicio excepcional a sus clientes. Con su interfaz intuitiva, funciones de gestión completas y capacidades de seguimiento en tiempo real, GM Parts se convierte en el aliado perfecto para cualquier taller mecánico moderno.',
    thumbnail: '/images/gmparts-mock-1.png',
    images: [
      '/images/gmparts-mock-1.png',
      '/images/gmparts-mock-2.png',
      '/images/gmparts-mock-3.png',
      '/images/gmparts-mock-4.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'FlutterFlow & Firebase',
      'Google Store': 'https://play.google.com/store/apps/details?id=com.mycompany.gmparts',
      'Apple Store': 'https://apps.apple.com/pe/app/gmparts/id6747365518',
    },
    href: '/es/portfolio/repuestos-gm-es/',
    relatedSlugs: ['alianza-capital-es', 'daily-sparkle-2'],
  },
  {
    title: 'Daily Sparkle',
    description:
      'Daily Sparkle es una aplicación web del Reino Unido diseñada para ayudar a hogares de cuidado a involucrar a los residentes y conectar a las familias. Para lograrlo, Daily Sparkle proporciona herramientas de gestión de cuidado, planificación de actividades, contenido enriquecedor y un portal familiar seguro con actualizaciones, horarios e información personalizada de los residentes.',
    thumbnail: '/images/dailysparkle-mock-1.png',
    images: [
      '/images/dailysparkle-mock-1.png',
      '/images/dailysparkle-mock-2.png',
      '/images/dailysparkle-mock-3.png',
      '/images/dailysparkle-mock-4.png',
      '/images/dailysparkle-mock-5.png',
      '/images/dailysparkle-mock-6.png',
    ],
    techSpecs: {
      'Diseño': 'Lovable',
      'Implementación': 'Bubble',
      'Enlace': 'https://dailysparkle.co.uk/',
    },
    href: '/es/portfolio/daily-sparkle-2/',
    relatedSlugs: ['later-life-training-2', 'ecumerca-es'],
  },
  {
    title: 'Ecumerca',
    description:
      'Ecumerca es una plataforma de mercado para el consumidor final y los proveedores de productos de diversas categorías. Esta plataforma permite un carrito de compras con el consumidor final y gestiona varios proveedores para que un consumidor pueda realizar una compra de varios proveedores al mismo tiempo. Ecumerca está compuesta por un carrito de compras, historial de pedidos, chat de soporte, política de devoluciones y un panel de administración.',
    thumbnail: '/images/ecumerca-mock-1.png',
    images: [
      '/images/ecumerca-mock-1.png',
      '/images/ecumerca-mock-2.png',
      '/images/ecumerca-mock-3.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'FlutterFlow & Firebase',
      'Google Store': 'https://play.google.com/store/apps/details?id=com.mycompany.ecumerca',
      'Apple Store': 'https://apps.apple.com/us/app/ecumerca/id6738750466',
    },
    href: '/es/portfolio/ecumerca-es/',
    relatedSlugs: ['daily-sparkle-2', 'alianza-capital-es'],
  },
  {
    title: 'Mentor GrowthRockstar',
    description:
      'Uniendo mentores y aprendices a través de una plataforma de programación para asegurar el crecimiento y el éxito.',
    thumbnail: '/images/mentor-mock-thumb.png',
    images: [
      '/images/mentor-mock-thumb.png',
      '/images/mentor-mock-1.png',
      '/images/mentor-mock-2.png',
      '/images/mentor-mock-3.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'Flutterflow & Supabase',
    },
    href: '/es/portfolio/mentor-growthrocsktar-es/',
    relatedSlugs: ['ecumerca-es', 'beauty-connect-es'],
  },
  {
    title: 'Beauty Connect',
    description:
      'Beauty Connect es una aplicación móvil de marketplace mexicano que conecta salones de belleza con clientes, facilitando descubrir, reservar y pagar por servicios de belleza.\n\nPara optimizar toda la experiencia del cliente, Beauty Connect permite a los usuarios explorar servicios disponibles, seleccionar su profesional preferido, agendar citas y completar pagos, todo dentro de la aplicación. Cada servicio puede ser rastreado para seguimiento o reservas repetidas, garantizando una experiencia fluida y personalizada.\n\nJunto a la plataforma móvil, se desarrolló un robusto panel de administración web para gestionar salones, profesionales, servicios, usuarios y transacciones de manera centralizada y eficiente.\n\nDiseñado para escalabilidad y facilidad de uso, Beauty Connect está listo para transformar la industria de servicios de belleza en México. La aplicación estará pronto disponible tanto en Google Play Store como en Apple App Store.',
    thumbnail: '/images/beautyconnect-mock-1.png',
    images: [
      '/images/beautyconnect-mock-1.png',
      '/images/beautyconnect-mock-2.png',
      '/images/beautyconnect-mock-3.png',
      '/images/beautyconnect-mock-4.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'Flutterflow & Supabase',
      'Google Store': 'https://play.google.com/store/apps/details?id=com.mycompany.beautyconnect',
      'Apple Store': 'Pendiente de publicación',
    },
    href: '/es/portfolio/beauty-connect-es/',
    relatedSlugs: ['the-decision-board-es', 'hulp-clientes-es'],
  },
  {
    title: 'El Tablero de Decisiones',
    description:
      'El Panel de Decisiones ayuda a equipos de liderazgo de alto rendimiento a navegar la incertidumbre y decidir cómo tomar decisiones.\n\nEl Panel de Decisiones es un SaaS creado por una startup estadounidense que proporciona una solución única a sus clientes al permitir discusiones estructuradas, decisiones y páginas para hacer el trabajo en equipo más eficiente, confiable y productivo.\n\nSe basa en el poder de la estructuración y gestión de datos para alcanzar objetivos que de otra forma tomarían más tiempo.\n\nYa cuenta con una base de clientes establecida y espera un crecimiento rápido.',
    thumbnail: '/images/decisionboard-mock-1.png',
    images: [
      '/images/decisionboard-mock-1.png',
      '/images/decisionboard-mock-2.png',
      '/images/decisionboard-mock-3.png',
      '/images/decisionboard-mock-4.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'Bubble.io',
      'Enlace web': 'https://www.thedecisionboard.com/',
    },
    href: '/es/portfolio/the-decision-board-es/',
    relatedSlugs: ['beauty-connect-es', 'supra-sales-crm-es'],
  },
  {
    title: 'CRM de Ventas Supra',
    description:
      'Herramienta CRM de proceso de ventas completo. Este CRM permite la gestión de todo el proceso de ventas de SUPRA desde la creación del cliente y el proyecto hasta la creación del caso de negocio, cotización y facturación.\n\nSUPRA es una empresa peruana que ofrece soluciones de seguridad de red a diversos clientes a nivel nacional. Se implementó un CRM de seguimiento desde la creación de la oportunidad hasta la facturación de los servicios de SUPRA.\n\nEste CRM cubrió todo el proceso de ventas desde la creación de la oportunidad hasta la estructuración del caso de negocio, la facturación y la generación de la factura. Incluía un panel resumen para el seguimiento y revisión de objetivos.',
    thumbnail: '/images/supra-mock-1.png',
    images: [
      '/images/supra-mock-1.png',
      '/images/supra-mock-2.png',
      '/images/supra-mock-3.png',
      '/images/supra-mock-4.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'Bubble.io',
      'Enlace web': 'Herramienta interna, no puede compartirse',
    },
    href: '/es/portfolio/supra-sales-crm-es/',
    relatedSlugs: ['the-decision-board-es', 'tokgo-es'],
  },
  {
    title: 'Tok&Go',
    description:
      'Fintech tokenizador de activos digitales. Tok&Go te da la posibilidad de invertir en proyectos reales a través del poder de Blockchain.\n\nTok&Go es una Fintech española que proporciona servicios de tokenización de activos digitales. Sus servicios incluyen un servicio integral para la creación, gestión y distribución de activos digitales dentro de la blockchain tanto en el mercado primario (inversor a emisor de activos – empresa) como en el mercado secundario (inversor a inversor).\n\nTuvimos una gran colaboración construyendo su plataforma web frontend tanto para desktop como para móvil y gestionando todas las integraciones requeridas incluyendo:\nKYC – Know your customer – NeoCheck\nBlockchain – Plataforma propia Tok&Go\nPasarela de pago – Inespay',
    thumbnail: '/images/tokgo-mock-1.png',
    images: [
      '/images/tokgo-mock-1.png',
      '/images/tokgo-mock-2.png',
      '/images/tokgo-mock-3.png',
      '/images/tokgo-mock-4.png',
    ],
    techSpecs: {
      'Diseño': 'Figma',
      'Implementación': 'Bubble.io',
      'Enlace web': 'https://www.tokandgo.com/',
    },
    href: '/es/portfolio/tokgo-es/',
    relatedSlugs: ['supra-sales-crm-es', 'alianza-capital-es'],
  },
]

export const portfolioItemsData: Record<'en' | 'es', PortfolioItemFull[]> = {
  en: portfolioItemsEn,
  es: portfolioItemsEs,
}

export function getPortfolioItemBySlug(slug: string, locale: 'en' | 'es'): PortfolioItemFull | undefined {
  const items = portfolioItemsData[locale]
  return items.find((item) => {
    const itemSlug = item.href.split('/').filter(Boolean).pop()
    return itemSlug === slug
  })
}

export function getRelatedItems(item: PortfolioItemFull, locale: 'en' | 'es'): PortfolioItemFull[] {
  const items = portfolioItemsData[locale]
  return item.relatedSlugs
    .map((slug) => items.find((i) => i.href.split('/').filter(Boolean).pop() === slug))
    .filter((i): i is PortfolioItemFull => i !== undefined)
}
