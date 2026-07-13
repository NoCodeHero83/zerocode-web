export const organizationSchema = {
  '@type': 'Organization',
  '@id': 'https://zerocode.la/#organization',
  name: 'Zerocode',
  alternateName: 'Zerocode.la',
  url: 'https://zerocode.la',
  logo: {
    '@type': 'ImageObject',
    url: 'https://zerocode.la/images/ZEROCODE_Imagotipo-Horizontal-1.png',
    width: 400,
    height: 100,
  },
  description:
    'Zerocode is an AI-assisted software development agency that helps established businesses eliminate operational bottlenecks by building custom digital systems. Combining senior engineers with AI-accelerated development, Zerocode delivers production-grade web apps, mobile apps, and automation systems with full IP ownership, vendor-independent architecture, and a payback timeline typically within 4 to 6 months of launch.',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lima',
    addressCountry: 'PE',
  },
  areaServed: ['United States', 'Latin America', 'Europe', 'Global'],
  serviceType: [
    'AI-Assisted Software Development',
    'Custom Web Application Development',
    'Mobile App Development',
    'Business Process Automation',
    'AI Integration',
    'Team Augmentation',
    'Operational Bottleneck Elimination',
  ],
  knowsAbout: [
    'AI-assisted development',
    'No-code development',
    'Low-code development',
    'Business process automation',
    'Operational efficiency',
    'Custom software development',
    'Bubble.io',
    'Webflow',
    'n8n automation',
    'AI workflow automation',
    'Vendor lock-in elimination',
    'Digital transformation for SMBs',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'andres.diaz@zerocode.la',
    availableLanguage: ['English', 'Spanish'],
  },
  sameAs: [
    'https://www.linkedin.com/company/zerocode-la',
    'https://www.instagram.com/zerocode.la',
    'https://clutch.co/profile/zerocode',
  ],
}

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': 'https://zerocode.la/#website',
  url: 'https://zerocode.la',
  name: 'Zerocode',
  description:
    'AI-assisted software development agency eliminating operational bottlenecks for established businesses',
  inLanguage: ['en-US', 'es'],
  publisher: {
    '@id': 'https://zerocode.la/#organization',
  },
}

export const professionalServiceSchema = {
  '@type': 'ProfessionalService',
  '@id': 'https://zerocode.la/#service',
  name: 'Zerocode AI-Assisted Development',
  provider: {
    '@id': 'https://zerocode.la/#organization',
  },
  description:
    '90-day fixed-scope engagement to eliminate operational bottlenecks with custom AI-assisted software. Includes Week 1 discovery and payback projection, interface validation in Weeks 2-3, platform build in Weeks 4-10, and full handoff with 30-day support.',
  areaServed: 'Global',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Zerocode Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Operational Bottleneck Diagnosis',
          description:
            'Week 1 discovery call: identify root causes of operational bottlenecks, build payback projection, define scope and migration plan.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Application Development',
          description:
            'Scalable, vendor-independent web applications built with AI-assisted development. Full IP ownership from day 1.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Cross-platform mobile applications built with AI-assisted development tools.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Process Automation',
          description:
            'Replace manual workflows and SaaS tools with custom automation systems using AI and no-code platforms.',
        },
      },
    ],
  },
}

export const faqPageSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI-assisted development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI-assisted development is a software engineering approach where senior engineers use AI tools — such as Claude Code, GitHub Copilot, and Lovable — to accelerate interface generation, boilerplate code, and testing. At Zerocode, AI handles the repetitive scaffolding while senior engineers architect, validate, and deliver every decision. The result is production-grade software built 3x faster than traditional development, at a lower cost, without compromising quality or ownership.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an operational bottleneck and how does Zerocode fix it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An operational bottleneck is any recurring process — manual data entry, fragmented SaaS tools, slow client onboarding, dependency on a single person or vendor — that prevents your business from scaling. Zerocode fixes it by diagnosing the root cause in Week 1, then building a custom digital system that replaces the bottleneck with an automated, scalable solution you fully own. Most clients eliminate the bottleneck within 90 days and recover the full build cost within 4 to 6 months of launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a Zerocode engagement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard Zerocode engagement runs 90 days, structured as follows: Week 1 is diagnosis and architecture (clarity on bottlenecks, payback timeline, and scope). Weeks 2-3 are interface build and validation (scope and budget locked). Weeks 4-10 are platform build with weekly releases. Weeks 10-12 are launch with parallel client migration. Days 91-120 include 30-day post-launch support and a Phase 2 roadmap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the code and intellectual property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Zerocode transfers full IP ownership — including all code, documentation, and architecture — to the client from day 1 of the engagement, covered by NDA. There is no vendor lock-in. You own everything and can modify, extend, or hand it to another team at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Zerocode different from other software agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zerocode is different in four key ways: (1) Fixed-price milestones tied to deliverables — no scope creep or surprise invoices. (2) Full IP ownership from day 1 with NDA — you own everything, zero vendor lock-in. (3) AI-assisted development with senior engineer oversight — 3x faster than traditional agencies at a lower cost without sacrificing quality. (4) Payback projection in Week 1 — most clients recover the full build cost within 4–6 months of launch through eliminated SaaS fees and reduced manual labor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Zerocode replace our existing SaaS tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Replacing SaaS tools with owned custom software is one of Zerocode's core services. We design a parallel migration plan so your existing clients and workflows are not disrupted during the transition. Once the new system is validated, you eliminate recurring SaaS fees and gain a tool that does exactly what your business needs — nothing more, nothing less.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical return on investment (ROI) of a Zerocode project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Zerocode clients recover the full build cost within 4 to 6 months of launch through a combination of: eliminated SaaS subscriptions, reduced manual labor costs, increased operational capacity (serving more clients without adding headcount), and reduced dependency on fragile vendor relationships. A payback projection is calculated and shared at the end of Week 1.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies and platforms does Zerocode use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Zerocode uses a combination of AI-assisted development tools and proven platforms chosen for each project's specific needs. Common tools include Claude Code, GitHub Copilot, Lovable, and Google Antigravity for AI acceleration; Bubble.io and Webflow for no-code/low-code applications; n8n, Zapier, and Make for automation; and Supabase for backend infrastructure. All choices prioritize vendor independence — clients are never locked into any platform.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Zerocode work with businesses outside of Latin America?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Zerocode operates as a nearshore agency serving clients in the United States, Europe, and Latin America. The team is fully bilingual (English and Spanish), and all engagements are managed remotely with weekly delivery checkpoints, 24/7 direct communication, and a dedicated project manager as your single point of contact.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between no-code, low-code, and AI-assisted development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No-code development uses visual platforms like Bubble.io and Webflow to build software without writing code — fast and accessible, ideal for standard use cases. Low-code development combines visual builders with custom code — more flexible, handles complex logic. AI-assisted development is the newest approach: senior engineers use AI tools to generate and validate code at speed, enabling fully custom, production-grade software that no-code or low-code platforms cannot produce. Zerocode uses all three methods, selecting the right approach for each project's complexity, budget, and long-term ownership requirements.",
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of web apps does Zerocode build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zerocode builds custom web applications of all types: internal operations dashboards, client portals, SaaS platforms, service marketplaces, e-commerce systems, and business management tools. Every web app is built with AI-assisted development by senior engineers, with full IP ownership transferred to the client. Unlike template-based solutions or generic no-code web app builders, Zerocode web apps are fully custom, vendor-independent, and designed to scale with your business. Web app development typically completes within the 90-day engagement timeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Zerocode develop mobile apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Zerocode builds cross-platform mobile apps for iOS and Android using AI-assisted development. Mobile apps built by Zerocode include client-facing service apps, field operations apps, marketplaces, and companion apps for internal business systems. All mobile app development is delivered with full IP ownership and no vendor lock-in — you own the source code and can publish to the App Store and Google Play under your own developer accounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Zerocode approach digital transformation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zerocode approaches digital transformation as a measurable revenue and efficiency operation — not a vague multi-year technology project. Instead of broad initiatives, Zerocode identifies the single operational bottleneck that is most limiting your growth, builds the custom digital system that eliminates it within 90 days, and calculates the exact payback timeline before development begins. This makes digital transformation concrete, fast, and financially predictable. Most clients see a full return on investment within 4 to 6 months of launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Zerocode a software development agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Zerocode is a full-service software development agency specializing in AI-assisted development for established businesses. The team combines senior software engineers with AI development tools — including Claude Code, GitHub Copilot, and Lovable — to build custom web apps, mobile apps, and automation systems faster and at lower cost than traditional software agencies, while maintaining production-grade quality and full client IP ownership. Zerocode operates as a nearshore software development partner serving clients in the United States, Europe, and Latin America.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is no-code development and does Zerocode offer no-code solutions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No-code development refers to building software applications using visual drag-and-drop platforms — such as Bubble.io and Webflow — without writing traditional code. Zerocode has extensive expertise in no-code development and uses these platforms when they are the right fit for a project's requirements, timeline, and budget. For more complex requirements, Zerocode combines no-code platforms with custom code or full AI-assisted development, always choosing the approach that gives the client the best balance of speed, ownership, and long-term flexibility.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is low-code development and when does Zerocode use it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Low-code development combines visual development environments with custom code extensions, allowing developers to build applications faster than traditional software development while handling more complex business logic than pure no-code platforms allow. Zerocode uses low-code development when a project requires significant customization beyond what visual-only platforms can deliver, but where speed-to-market and cost efficiency are priorities. Common low-code tools in Zerocode\'s stack include Bubble.io with custom plugins, Webflow with custom code, and n8n for automation workflows.',
      },
    },
  ],
}
