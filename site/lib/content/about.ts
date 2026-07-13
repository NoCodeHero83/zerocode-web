import type { Locale } from '@/lib/nav'

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
}

export interface CoreValue {
  icon: string
  title: string
  description: string
}

export interface AboutContent {
  hero: {
    label: string
    heading: string
    paragraphs: string[]
  }
  coreValues: {
    label: string
    heading: string
    subtitle: string
    values: CoreValue[]
  }
  team: {
    label: string
    heading: string
    subtitle: string
    members: TeamMember[]
  }
  video: {
    label: string
    heading: string
    description: string
    videoId: string
  }
  cta: {
    label: string
    heading: string
    description: string
    button: string
    href: string
  }
  contact: {
    label: string
    heading: string
    description: string
    button: string
    href: string
    clutchRating: string
    clutchReviews: string
    clutchUrl: string
  }
  achievements: {
    heading: string
    images: string[]
  }
}

export const aboutContent: Record<Locale, AboutContent> = {
  en: {
    hero: {
      label: 'About us',
      heading: 'Helping businesses succeed',
      paragraphs: [
        'Zerocode was founded on a simple belief: the businesses that change their industries shouldn\'t be held back by the tools running them.',
        'We work with established founders and operators who have built something real — and who deserve technology that matches their ambition, not generic platforms that cap their growth or vendors that disappear when things get hard.',
        'Our team is not a group of employees. They are partners who share a common mission: to make powerful, production-grade technology accessible to businesses that were previously priced out of it, underserved by it, or burned by it.',
        'We build digital platforms faster than the industry standard and at a fraction of the cost — not by cutting corners, but by combining senior engineering with the best AI development tools available. The result is enterprise-level quality for businesses that don\'t have enterprise budgets.',
        'We believe that the businesses democratizing access to healthcare, finance, real estate, and logistics across Latin America deserve the same technological foundation as the largest players in their sector. That is the world we are building toward — one platform at a time.',
      ],
    },
    coreValues: {
      label: 'Core Values',
      heading: 'How we work',
      subtitle: 'Guided by our core values, we strive to exceed expectations and create meaningful experiences',
      values: [
        {
          icon: 'Settings',
          title: 'Innovation',
          description: 'We are committed to constantly pushing boundaries and exploring new ideas, technologies, and solutions to drive innovation and progress',
        },
        {
          icon: 'HeartHandshake',
          title: 'You, our customers, first',
          description: 'You, our customers are at the center of everything we do, and we are dedicated to providing them with the best possible experience and support',
        },
        {
          icon: 'Users',
          title: 'Teamwork',
          description: 'We believe in the power of collaboration and teamwork, and we strive to foster a supportive and inclusive environment',
        },
        {
          icon: 'ShieldCheck',
          title: 'Accountability',
          description: 'We take responsibility for our actions and decisions, and we hold ourselves accountable to the highest standards',
        },
        {
          icon: 'BookOpen',
          title: 'Continuous learning',
          description: 'We believe in the importance of continuous learning and growth, and we encourage our team members to pursue development opportunities',
        },
        {
          icon: 'Zap',
          title: 'Agility',
          description: 'We are adaptable and nimble, and we embrace change as an opportunity to grow and improve',
        },
      ],
    },
    team: {
      label: 'PEOPLE FIRST',
      heading: 'Our team',
      subtitle: 'We are fortunate to work with amazing people all over the world',
      members: [
        {
          name: 'José Andrés Díaz',
          role: 'Founder',
          bio: 'Andrés has a solid 10 years of experience in technology and software development. He started as a developer and eventually rose to project manager roles, later program manager on major regional projects. In September 2022, he founded Zerocode with the aim of providing accelerated development solutions to companies and startups that wish to start their path in digital transformation.',
          image: '/images/Untitled-2.png',
          linkedin: 'https://www.linkedin.com/in/jose-andr%C3%A9s-d%C3%ADaz/',
        },
        {
          name: 'Jaime Solís',
          role: 'Project Manager',
          bio: 'Jaime brings a strong expertise in Product Management, supported by a solid technological and analytical foundation, and a consistent focus on customer satisfaction. His professional background spans a wide range of organizations—from early-stage startups to large corporations—with notable experience in sectors such as finance, consulting, telecommunications, tourism, and technology.',
          image: '/images/Jaime-Solis.jpeg',
          linkedin: 'https://www.linkedin.com/in/jaime-solis-gonzales/',
        },
        {
          name: 'Felix Mwita',
          role: 'Bubble Certified Developer',
          bio: 'Felix is a dedicated and transparent professional, committed to delivering the highest level of work and building robust, secure, beautiful, and scalable applications. With a background in Mechatronics Engineering, he has a strong foundation in programming and expertise in JavaScript and Python.',
          image: '/images/Felix-Mwita.jpg',
          linkedin: 'https://www.linkedin.com/in/felix-mwita-munchari/',
        },
        {
          name: 'Oscar Perez',
          role: 'Flutterflow & AI Senior Developer',
          bio: 'Mobile application developer with three years of experience, specialized in FlutterFlow, which allows him to create intuitive interfaces and innovative applications. Expert in AI-powered automation using n8n, integrating intelligent solutions that optimize processes and boost efficiency in his projects.',
          image: '/images/Oscar.jpg',
        },
        {
          name: 'David Alcantara',
          role: 'UX/UI Designer',
          bio: 'David is a UI/UX designer passionate about creating digital products that have a positive impact on users. With experience in redesigning and developing web and mobile interfaces, he has collaborated across various industries such as sports and e-commerce.',
          image: '/images/David-Alcantara.png',
          linkedin: 'https://www.linkedin.com/in/david-alc%C3%A1ntara-avalos-9936aa214/',
        },
        {
          name: 'Jonathan Montaño',
          role: 'Flutterflow Senior Developer',
          bio: 'FlutterFlow expert specialized in API integrations. Builds seamless, scalable apps with clean, maintainable structures. Recognized for his excellent communication skills, allowing him to collaborate effectively with teams and stakeholders.',
          image: '/images/Jonathan.jpg',
        },
        {
          name: 'Obed Castro',
          role: 'Web & Mobile Senior Developer',
          bio: 'Expert developer specializing in React and React Native, with strong experience in backend architecture and API-driven systems. Builds scalable, high-performance applications using clean, maintainable, and flexible codebases.',
          image: '/images/Obet.jpg',
        },
      ],
    },
    video: {
      label: 'How it work',
      heading: 'What is AI ASSISTED DEVELOPMENT?',
      description: 'Learn how we combine senior engineering with AI tools to deliver production-grade software faster.',
      videoId: 'dQw4w9WgXcQ',
    },
    cta: {
      label: 'Let\'s connect!',
      heading: 'See how it all works for you',
      description: 'Get a free 30-minute consultation to discuss your project and discover how we can help you scale.',
      button: 'Let\'s have a quick chat',
      href: 'https://zerocode.la/contact/',
    },
    contact: {
      label: 'Contact Us',
      heading: 'Let\'s Get In Touch!',
      description: 'Your Fractional CTO + Execution Team. Production-grade platforms delivered in weeks, not months.',
      button: 'Schedule a Call',
      href: 'https://zerocode.la/contact/',
      clutchRating: '4.8',
      clutchReviews: 'Based on 3 Clutch reviews',
      clutchUrl: 'https://clutch.co/profile/zerocode-0',
    },
    achievements: {
      heading: 'Our Achievements',
      images: [
        '/images/thumb_0x0_convert_f9ee12e7ef999eef2afedb2748a8b4de.png',
        '/images/thumb_0x0_convert_3df2b85a3f445e755da04aef6a4701d8.png',
        '/images/thumb_0x0_convert_925f908f0fc4237921cddbdb2814f314.png',
        '/images/top_clutch.co_it_services_company_peru_2025.svg',
      ],
    },
  },
  es: {
    hero: {
      label: 'Sobre nosotros',
      heading: 'Ayudando a las empresas a tener éxito',
      paragraphs: [
        'Zerocode fue fundado bajo una creencia simple: las empresas que transforman sus industrias no deberían estar limitadas por las herramientas que utilizan.',
        'Trabajamos con fundadores y operadores establecidos que han construido algo real, y que merecen tecnología a la altura de su ambición, no plataformas genéricas que limitan su crecimiento.',
        'Nuestro equipo no es un grupo de empleados. Son socios que comparten una misión común: hacer que la tecnología de grado de producción sea accesible para empresas que antes no podían acceder a ella.',
        'Construimos plataformas digitales más rápido que el estándar de la industria y a una fracción del costo, combinando ingeniería senior con las mejores herramientas de IA disponibles.',
        'Creemos que las empresas que democratizan el acceso a salud, finanzas, bienes raíces y logística en América Latina merecen la misma base tecnológica que los actores más grandes de su sector.',
      ],
    },
    coreValues: {
      label: 'Valores',
      heading: 'Cómo trabajamos',
      subtitle: 'Guiados por nuestros valores, nos esforzamos por superar expectativas y crear experiencias significativas',
      values: [
        {
          icon: 'Settings',
          title: 'Innovación',
          description: 'Estamos comprometidos a superar límites y explorar nuevas ideas, tecnologías y soluciones para impulsar la innovación',
        },
        {
          icon: 'HeartHandshake',
          title: 'Primero nuestros clientes',
          description: 'Nuestros clientes están en el centro de todo lo que hacemos, dedicados a brindar la mejor experiencia y soporte posible',
        },
        {
          icon: 'Users',
          title: 'Trabajo en equipo',
          description: 'Creemos en el poder de la colaboración y nos esforzamos por fomentar un ambiente inclusivo',
        },
        {
          icon: 'ShieldCheck',
          title: 'Responsabilidad',
          description: 'Asumimos la responsabilidad de nuestras acciones y decisiones, manteniéndonos en los más altos estándares',
        },
        {
          icon: 'BookOpen',
          title: 'Aprendizaje continuo',
          description: 'Creemos en la importancia del aprendizaje continuo y animamos a nuestro equipo a buscar oportunidades de desarrollo',
        },
        {
          icon: 'Zap',
          title: 'Agilidad',
          description: 'Somos adaptables y ágiles, y aceptamos el cambio como una oportunidad para crecer y mejorar',
        },
      ],
    },
    team: {
      label: 'PERSONAS PRIMERO',
      heading: 'Nuestro equipo',
      subtitle: 'Tenemos la fortuna de trabajar con personas increíbles en todo el mundo',
      members: [
        {
          name: 'José Andrés Díaz',
          role: 'Fundador',
          bio: 'Andrés tiene 10 años de experiencia en tecnología y desarrollo de software. Comenzó como desarrollador y llegó a ser gerente de proyectos y programas en grandes proyectos regionales. En septiembre de 2022 fundó Zerocode.',
          image: '/images/Untitled-2.png',
          linkedin: 'https://www.linkedin.com/in/jose-andr%C3%A9s-d%C3%ADaz/',
        },
        {
          name: 'Jaime Solís',
          role: 'Gerente de Proyectos',
          bio: 'Jaime aporta una sólida expertise en Gestión de Producto, respaldada por una base tecnológica y analítica sólida, con un enfoque constante en la satisfacción del cliente.',
          image: '/images/Jaime-Solis.jpeg',
          linkedin: 'https://www.linkedin.com/in/jaime-solis-gonzales/',
        },
        {
          name: 'Felix Mwita',
          role: 'Desarrollador Certificado Bubble',
          bio: 'Felix es un profesional dedicado y transparente, comprometido con ofrecer el más alto nivel de trabajo y construir aplicaciones robustas, seguras y escalables.',
          image: '/images/Felix-Mwita.jpg',
          linkedin: 'https://www.linkedin.com/in/felix-mwita-munchari/',
        },
        {
          name: 'Oscar Perez',
          role: 'Desarrollador Senior Flutterflow & IA',
          bio: 'Desarrollador de aplicaciones móviles con tres años de experiencia, especializado en FlutterFlow. Experto en automatización con IA usando n8n.',
          image: '/images/Oscar.jpg',
        },
        {
          name: 'David Alcantara',
          role: 'Diseñador UX/UI',
          bio: 'David es un diseñador UI/UX apasionado por crear productos digitales que impacten positivamente a los usuarios, con experiencia en diversos sectores.',
          image: '/images/David-Alcantara.png',
          linkedin: 'https://www.linkedin.com/in/david-alc%C3%A1ntara-avalos-9936aa214/',
        },
        {
          name: 'Jonathan Montaño',
          role: 'Desarrollador Senior Flutterflow',
          bio: 'Experto en FlutterFlow especializado en integraciones de API. Construye aplicaciones escalables con estructuras limpias y mantenibles.',
          image: '/images/Jonathan.jpg',
        },
        {
          name: 'Obed Castro',
          role: 'Desarrollador Senior Web & Mobile',
          bio: 'Desarrollador experto especializado en React y React Native, con amplia experiencia en arquitectura backend y sistemas basados en API.',
          image: '/images/Obet.jpg',
        },
      ],
    },
    video: {
      label: 'Cómo funciona',
      heading: '¿QUÉ ES EL DESARROLLO ASISTIDO POR IA?',
      description: 'Aprende cómo combinamos ingeniería senior con herramientas de IA para entregar software de producción más rápido.',
      videoId: 'dQw4w9WgXcQ',
    },
    cta: {
      label: '¡Conectemos!',
      heading: 'Vea cómo funciona para usted',
      description: 'Obtenga una consulta gratuita de 30 minutos para discutir su proyecto y descubrir cómo podemos ayudarle a escalar.',
      button: 'Programar una llamada',
      href: 'https://zerocode.la/contact/',
    },
    contact: {
      label: 'Contáctenos',
      heading: '¡Pongámonos en contacto!',
      description: 'Su CTO Fractional + Equipo de Ejecución. Plataformas de nivel de producción entregadas en semanas, no meses.',
      button: 'Programar una llamada',
      href: 'https://zerocode.la/contact/',
      clutchRating: '4.8',
      clutchReviews: 'Basado en 3 reseñas de Clutch',
      clutchUrl: 'https://clutch.co/profile/zerocode-0',
    },
    achievements: {
      heading: 'Nuestros logros',
      images: [
        '/images/thumb_0x0_convert_f9ee12e7ef999eef2afedb2748a8b4de.png',
        '/images/thumb_0x0_convert_3df2b85a3f445e755da04aef6a4701d8.png',
        '/images/thumb_0x0_convert_925f908f0fc4237921cddbdb2814f314.png',
        '/images/top_clutch.co_it_services_company_peru_2025.svg',
      ],
    },
  },
}
