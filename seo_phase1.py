#!/usr/bin/env python3
"""
seo_phase1.py — Phase 1 SEO/GEO implementation for zerocode.la
Creates: robots.txt, sitemap.xml, llms.txt
Injects: title, meta description, canonical, hreflang, Open Graph,
         Twitter Card, and schema markup across all HTML pages.
"""
import sys, re, glob, json, os
sys.stdout.reconfigure(encoding='utf-8')

BASE   = 'https://zerocode.la'
LOGO   = f'{BASE}/images/ZEROCODE_Imagotipo-Horizontal-1.png'
MARKER = '<!-- #zc-seo-phase1 -->'

# ── Per-page metadata ────────────────────────────────────────────────────────
# key = file path (relative, forward slashes), values: title, desc, canonical,
#       lang (og locale), alt_en, alt_es
PAGES = {
    # ── EN core ──────────────────────────────────────────────────────────────
    'index.html': {
        'canonical': f'{BASE}/',
        'title': 'AI-Assisted Development Agency | Fix Operational Bottlenecks — Zerocode',
        'desc':  'We help established businesses eliminate operational bottlenecks with custom AI-assisted software. Full IP ownership. No vendor lock-in. Book a free discovery call.',
        'lang': 'en_US', 'alt_en': f'{BASE}/', 'alt_es': f'{BASE}/es/',
    },
    'about.html': {
        'canonical': f'{BASE}/about/',
        'title': 'About Zerocode | Senior Engineers + AI-Assisted Development Agency',
        'desc':  'Meet the Zerocode team. Senior engineers and AI-accelerated development delivering custom digital systems that eliminate operational bottlenecks for established businesses worldwide.',
        'lang': 'en_US', 'alt_en': f'{BASE}/about/', 'alt_es': f'{BASE}/es/about-es/',
    },
    'about/index.html': {
        'canonical': f'{BASE}/about/',
        'title': 'About Zerocode | Senior Engineers + AI-Assisted Development Agency',
        'desc':  'Meet the Zerocode team. Senior engineers and AI-accelerated development delivering custom digital systems that eliminate operational bottlenecks for established businesses worldwide.',
        'lang': 'en_US', 'alt_en': f'{BASE}/about/', 'alt_es': f'{BASE}/es/about-es/',
    },
    'service.html': {
        'canonical': f'{BASE}/service/',
        'title': 'Services | AI-Assisted Development, Automation & Custom Software — Zerocode',
        'desc':  'Custom web apps, mobile apps, AI automations, and team augmentation. Fixed-price milestones, full IP ownership, no vendor lock-in. Payback typically in 6–12 months.',
        'lang': 'en_US', 'alt_en': f'{BASE}/service/', 'alt_es': f'{BASE}/es/service-es/',
    },
    'service/index.html': {
        'canonical': f'{BASE}/service/',
        'title': 'Services | AI-Assisted Development, Automation & Custom Software — Zerocode',
        'desc':  'Custom web apps, mobile apps, AI automations, and team augmentation. Fixed-price milestones, full IP ownership, no vendor lock-in. Payback typically in 6–12 months.',
        'lang': 'en_US', 'alt_en': f'{BASE}/service/', 'alt_es': f'{BASE}/es/service-es/',
    },
    'portfolio.html': {
        'canonical': f'{BASE}/portfolio/',
        'title': 'Case Studies | Digital Systems That Drive Revenue Growth — Zerocode',
        'desc':  'See how Zerocode has eliminated operational bottlenecks for established businesses using AI-assisted development. Real results, real IP ownership, zero vendor lock-in.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio/', 'alt_es': f'{BASE}/es/portfolio-es/',
    },
    'portfolio/index.html': {
        'canonical': f'{BASE}/portfolio/',
        'title': 'Case Studies | Digital Systems That Drive Revenue Growth — Zerocode',
        'desc':  'See how Zerocode has eliminated operational bottlenecks for established businesses using AI-assisted development. Real results, real IP ownership, zero vendor lock-in.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio/', 'alt_es': f'{BASE}/es/portfolio-es/',
    },
    'contact.html': {
        'canonical': f'{BASE}/contact/',
        'title': 'Book a Free Discovery Call | Zerocode — Operational Bottleneck Fix',
        'desc':  'Schedule your free discovery call. Get full clarity on your operational bottleneck, how to fix it, and your exact payback timeline — all in Week 1.',
        'lang': 'en_US', 'alt_en': f'{BASE}/contact/', 'alt_es': f'{BASE}/es/contact-es/',
    },
    'contact/index.html': {
        'canonical': f'{BASE}/contact/',
        'title': 'Book a Free Discovery Call | Zerocode — Operational Bottleneck Fix',
        'desc':  'Schedule your free discovery call. Get full clarity on your operational bottleneck, how to fix it, and your exact payback timeline — all in Week 1.',
        'lang': 'en_US', 'alt_en': f'{BASE}/contact/', 'alt_es': f'{BASE}/es/contact-es/',
    },
    'thank-you.html': {
        'canonical': f'{BASE}/thank-you/',
        'title': 'Thank You | Zerocode — We Will Be in Touch Shortly',
        'desc':  'Thank you for reaching out to Zerocode. A senior advisor will contact you within 24 hours to confirm your free discovery call.',
        'lang': 'en_US', 'alt_en': f'{BASE}/thank-you/', 'alt_es': f'{BASE}/thank-you/',
    },
    'thank-you/index.html': {
        'canonical': f'{BASE}/thank-you/',
        'title': 'Thank You | Zerocode — We Will Be in Touch Shortly',
        'desc':  'Thank you for reaching out to Zerocode. A senior advisor will contact you within 24 hours to confirm your free discovery call.',
        'lang': 'en_US', 'alt_en': f'{BASE}/thank-you/', 'alt_es': f'{BASE}/thank-you/',
    },
    "let´s-talk.html": {
        'canonical': f'{BASE}/contact/',
        'title': "Let's Talk | Book a Free Discovery Call — Zerocode",
        'desc':  'Book your free discovery call with Zerocode. Get clarity on your operational bottleneck and exact payback timeline in Week 1.',
        'lang': 'en_US', 'alt_en': f'{BASE}/contact/', 'alt_es': f'{BASE}/es/contact-es/',
    },
    # ── EN portfolio items ────────────────────────────────────────────────────
    'portfolio-item.html': {
        'canonical': f'{BASE}/portfolio-item/',
        'title': 'Portfolio | AI-Assisted Digital Solution — Zerocode',
        'desc':  'Discover how Zerocode delivered a custom AI-assisted digital solution to eliminate operational bottlenecks and drive measurable business results.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item/', 'alt_es': f'{BASE}/portfolio-item-es/',
    },
    'portfolio-item-alianza-en.html': {
        'canonical': f'{BASE}/portfolio-item-alianza-en/',
        'title': 'Alianza Case Study | Custom Digital Operations System — Zerocode',
        'desc':  'How Zerocode built a custom operations system for Alianza, eliminating manual workflows and delivering full IP ownership.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-alianza-en/', 'alt_es': f'{BASE}/portfolio-item-alianza-es/',
    },
    'portfolio-item-beautyconnect-en.html': {
        'canonical': f'{BASE}/portfolio-item-beautyconnect-en/',
        'title': 'BeautyConnect Case Study | AI-Assisted Service Platform — Zerocode',
        'desc':  'How Zerocode built a custom beauty services marketplace for BeautyConnect using AI-assisted development.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-beautyconnect-en/', 'alt_es': f'{BASE}/portfolio-item-beautyconnect-es/',
    },
    'portfolio-item-dailysparkle-en.html': {
        'canonical': f'{BASE}/portfolio-item-dailysparkle-en/',
        'title': 'Daily Sparkle Case Study | Scalable Digital Platform — Zerocode',
        'desc':  'How Zerocode delivered a scalable digital content platform for Daily Sparkle using AI-assisted development, replacing fragmented SaaS tools.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-dailysparkle-en/', 'alt_es': f'{BASE}/portfolio-item-dailysparkle-es/',
    },
    'portfolio-item-decisionboard-en.html': {
        'canonical': f'{BASE}/portfolio-item-decisionboard-en/',
        'title': 'DecisionBoard Case Study | Business Intelligence Platform — Zerocode',
        'desc':  'How Zerocode built a custom business intelligence and decision-making platform for DecisionBoard using AI-assisted development.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-decisionboard-en/', 'alt_es': f'{BASE}/portfolio-item-decisionboard-es/',
    },
    'portfolio-item-ecumerca-en.html': {
        'canonical': f'{BASE}/portfolio-item-ecumerca-en/',
        'title': 'Ecumerca Case Study | Custom Commerce & Operations System — Zerocode',
        'desc':  'How Zerocode delivered a custom digital commerce system for Ecumerca, eliminating manual workflows and reducing operational costs.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-ecumerca-en/', 'alt_es': f'{BASE}/portfolio-item-ecumerca-es/',
    },
    'portfolio-item-gmparts-en.html': {
        'canonical': f'{BASE}/portfolio-item-gmparts-en/',
        'title': 'GM Parts Case Study | Automotive Operations Platform — Zerocode',
        'desc':  'How Zerocode built a custom automotive parts management system for GM Parts, replacing legacy tools with a vendor-independent solution.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-gmparts-en/', 'alt_es': f'{BASE}/portfolio-item-gmparts-es/',
    },
    'portfolio-item-hulpclients-en.html': {
        'canonical': f'{BASE}/portfolio-item-hulpclients-en/',
        'title': 'Hulp Client Portal Case Study | Custom CRM System — Zerocode',
        'desc':  'How Zerocode built a custom client management portal for Hulp using AI-assisted development, eliminating manual coordination.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-hulpclients-en/', 'alt_es': f'{BASE}/portfolio-item-hulpclients-es/',
    },
    'portfolio-item-hulpproviders-en.html': {
        'canonical': f'{BASE}/portfolio-item-hulpproviders-en/',
        'title': 'Hulp Provider Portal Case Study | Operations Management — Zerocode',
        'desc':  'How Zerocode built a custom provider management system for Hulp, replacing fragmented tools with a single owned platform.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-hulpproviders-en/', 'alt_es': f'{BASE}/portfolio-item-hulpproviders-es/',
    },
    'portfolio-item-mentor-en.html': {
        'canonical': f'{BASE}/portfolio-item-mentor-en/',
        'title': 'Mentor Case Study | Learning Management Platform — Zerocode',
        'desc':  'How Zerocode built a scalable mentorship and learning platform using AI-assisted development, owned entirely by the client.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-mentor-en/', 'alt_es': f'{BASE}/portfolio-item-mentor-es/',
    },
    'portfolio-item-supra-en.html': {
        'canonical': f'{BASE}/portfolio-item-supra-en/',
        'title': 'Supra Case Study | Custom Business Operations System — Zerocode',
        'desc':  'How Zerocode built a custom digital system for Supra, eliminating operational inefficiencies and delivering full IP ownership.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-supra-en/', 'alt_es': f'{BASE}/portfolio-item-supra-es/',
    },
    'portfolio-item-tok&go-en.html': {
        'canonical': f'{BASE}/portfolio-item-tok-go-en/',
        'title': 'Tok&GO Case Study | Logistics Operations Platform — Zerocode',
        'desc':  'How Zerocode built a custom logistics and operations platform for Tok&GO using AI-assisted development, replacing SaaS subscriptions.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio-item-tok-go-en/', 'alt_es': f'{BASE}/portfolio-item-tok-go-es/',
    },
    'portfolio/later-life-training/index.html': {
        'canonical': f'{BASE}/portfolio/later-life-training/',
        'title': 'Later Life Training Case Study | Digital Education Platform — Zerocode',
        'desc':  'How Zerocode built a custom digital education platform for Later Life Training using AI-assisted development.',
        'lang': 'en_US', 'alt_en': f'{BASE}/portfolio/later-life-training/', 'alt_es': f'{BASE}/portfolio-item-laterlifetraining-es/',
    },
    # ── ES core ───────────────────────────────────────────────────────────────
    'home-es.html': {
        'canonical': f'{BASE}/es/',
        'title': 'Agencia de Desarrollo Asistido por IA | Elimina Cuellos de Botella — Zerocode',
        'desc':  'Ayudamos a empresas establecidas a eliminar cuellos de botella operacionales con software personalizado asistido por IA. Propiedad total del código. Sin dependencia de proveedores.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/', 'alt_es': f'{BASE}/es/',
    },
    'es/index.html': {
        'canonical': f'{BASE}/es/',
        'title': 'Agencia de Desarrollo Asistido por IA | Elimina Cuellos de Botella — Zerocode',
        'desc':  'Ayudamos a empresas establecidas a eliminar cuellos de botella operacionales con software personalizado asistido por IA. Propiedad total del código. Sin dependencia de proveedores.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/', 'alt_es': f'{BASE}/es/',
    },
    'about-es.html': {
        'canonical': f'{BASE}/es/about-es/',
        'title': 'Sobre Zerocode | Agencia de Desarrollo de Software Asistido por IA',
        'desc':  'Conoce al equipo de Zerocode. Ingenieros senior y desarrollo acelerado por IA para eliminar cuellos de botella operacionales en empresas establecidas de todo el mundo.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/about/', 'alt_es': f'{BASE}/es/about-es/',
    },
    'es/about-es/index.html': {
        'canonical': f'{BASE}/es/about-es/',
        'title': 'Sobre Zerocode | Agencia de Desarrollo de Software Asistido por IA',
        'desc':  'Conoce al equipo de Zerocode. Ingenieros senior y desarrollo acelerado por IA para eliminar cuellos de botella operacionales en empresas establecidas de todo el mundo.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/about/', 'alt_es': f'{BASE}/es/about-es/',
    },
    'service-es.html': {
        'canonical': f'{BASE}/es/service-es/',
        'title': 'Servicios | Desarrollo Asistido por IA, Automatización y Software Personalizado — Zerocode',
        'desc':  'Aplicaciones web, móviles, automatizaciones con IA y aumento de equipo. Precios fijos por hitos, propiedad total del código, sin dependencia de proveedores.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/service/', 'alt_es': f'{BASE}/es/service-es/',
    },
    'es/service-es/index.html': {
        'canonical': f'{BASE}/es/service-es/',
        'title': 'Servicios | Desarrollo Asistido por IA, Automatización y Software Personalizado — Zerocode',
        'desc':  'Aplicaciones web, móviles, automatizaciones con IA y aumento de equipo. Precios fijos por hitos, propiedad total del código, sin dependencia de proveedores.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/service/', 'alt_es': f'{BASE}/es/service-es/',
    },
    'portfolio-es.html': {
        'canonical': f'{BASE}/es/portfolio-es/',
        'title': 'Casos de Éxito | Sistemas Digitales que Impulsan el Crecimiento y la Escalabilidad — Zerocode',
        'desc':  'Descubre cómo Zerocode ha eliminado cuellos de botella operacionales para empresas establecidas usando desarrollo asistido por IA. Resultados reales, propiedad total del código.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio/', 'alt_es': f'{BASE}/es/portfolio-es/',
    },
    'es/portfolio-es/index.html': {
        'canonical': f'{BASE}/es/portfolio-es/',
        'title': 'Casos de Éxito | Sistemas Digitales que Impulsan el Crecimiento y la Escalabilidad — Zerocode',
        'desc':  'Descubre cómo Zerocode ha eliminado cuellos de botella operacionales para empresas establecidas usando desarrollo asistido por IA. Resultados reales, propiedad total del código.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio/', 'alt_es': f'{BASE}/es/portfolio-es/',
    },
    'contact-es.html': {
        'canonical': f'{BASE}/es/contact-es/',
        'title': 'Agenda tu Consulta Gratuita | Zerocode — Solución al Cuello de Botella',
        'desc':  'Agenda tu llamada de descubrimiento gratuita. Claridad total sobre tu cuello de botella operacional, cómo resolverlo y el tiempo exacto de retorno — todo en la Semana 1.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/contact/', 'alt_es': f'{BASE}/es/contact-es/',
    },
    'es/contact-es/index.html': {
        'canonical': f'{BASE}/es/contact-es/',
        'title': 'Agenda tu Consulta Gratuita | Zerocode — Solución al Cuello de Botella',
        'desc':  'Agenda tu llamada de descubrimiento gratuita. Claridad total sobre tu cuello de botella operacional, cómo resolverlo y el tiempo exacto de retorno — todo en la Semana 1.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/contact/', 'alt_es': f'{BASE}/es/contact-es/',
    },
    'es/funnel-es/index.html': {
        'canonical': f'{BASE}/es/funnel-es/',
        'title': 'Consulta Gratuita | De Cero a Ingresos — Zerocode',
        'desc':  'Agenda tu consulta gratuita y descubre cómo Zerocode puede eliminar el cuello de botella que está limitando tu crecimiento.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/contact/', 'alt_es': f'{BASE}/es/funnel-es/',
    },
    # ── ES portfolio items ────────────────────────────────────────────────────
    'portfolio-item-es.html': {
        'canonical': f'{BASE}/portfolio-item-es/',
        'title': 'Caso de Éxito | Solución Digital Asistida por IA — Zerocode',
        'desc':  'Descubre cómo Zerocode entregó una solución digital personalizada para eliminar cuellos de botella operacionales y generar resultados medibles.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item/', 'alt_es': f'{BASE}/portfolio-item-es/',
    },
    'portfolio-item-alianza-es.html': {
        'canonical': f'{BASE}/portfolio-item-alianza-es/',
        'title': 'Caso Alianza | Sistema de Operaciones Digital Personalizado — Zerocode',
        'desc':  'Cómo Zerocode construyó un sistema de operaciones personalizado para Alianza, eliminando flujos manuales y entregando propiedad total del código.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-alianza-en/', 'alt_es': f'{BASE}/portfolio-item-alianza-es/',
    },
    'portfolio-item-beautyconnect-es.html': {
        'canonical': f'{BASE}/portfolio-item-beautyconnect-es/',
        'title': 'Caso BeautyConnect | Plataforma de Servicios de Belleza — Zerocode',
        'desc':  'Cómo Zerocode construyó una plataforma de servicios de belleza personalizada para BeautyConnect usando desarrollo asistido por IA.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-beautyconnect-en/', 'alt_es': f'{BASE}/portfolio-item-beautyconnect-es/',
    },
    'portfolio-item-dailysparkle-es.html': {
        'canonical': f'{BASE}/portfolio-item-dailysparkle-es/',
        'title': 'Caso Daily Sparkle | Plataforma Digital Escalable — Zerocode',
        'desc':  'Cómo Zerocode entregó una plataforma de contenido digital escalable para Daily Sparkle, reemplazando herramientas SaaS fragmentadas.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-dailysparkle-en/', 'alt_es': f'{BASE}/portfolio-item-dailysparkle-es/',
    },
    'portfolio-item-decisionboard-es.html': {
        'canonical': f'{BASE}/portfolio-item-decisionboard-es/',
        'title': 'Caso DecisionBoard | Plataforma de Inteligencia de Negocio — Zerocode',
        'desc':  'Cómo Zerocode construyó una plataforma de inteligencia de negocio personalizada para DecisionBoard usando desarrollo asistido por IA.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-decisionboard-en/', 'alt_es': f'{BASE}/portfolio-item-decisionboard-es/',
    },
    'portfolio-item-ecumerca-es.html': {
        'canonical': f'{BASE}/portfolio-item-ecumerca-es/',
        'title': 'Caso Ecumerca | Sistema de Comercio y Operaciones — Zerocode',
        'desc':  'Cómo Zerocode entregó un sistema de comercio digital personalizado para Ecumerca, eliminando flujos manuales y reduciendo costos operacionales.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-ecumerca-en/', 'alt_es': f'{BASE}/portfolio-item-ecumerca-es/',
    },
    'portfolio-item-gmparts-es.html': {
        'canonical': f'{BASE}/portfolio-item-gmparts-es/',
        'title': 'Caso GM Parts | Plataforma de Gestión Automotriz — Zerocode',
        'desc':  'Cómo Zerocode construyó un sistema de gestión de autopartes para GM Parts, reemplazando herramientas heredadas con una solución independiente de proveedores.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-gmparts-en/', 'alt_es': f'{BASE}/portfolio-item-gmparts-es/',
    },
    'portfolio-item-hulpclients-es.html': {
        'canonical': f'{BASE}/portfolio-item-hulpclients-es/',
        'title': 'Caso Hulp Portal de Clientes | Sistema CRM Personalizado — Zerocode',
        'desc':  'Cómo Zerocode construyó un portal de gestión de clientes personalizado para Hulp usando desarrollo asistido por IA.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-hulpclients-en/', 'alt_es': f'{BASE}/portfolio-item-hulpclients-es/',
    },
    'portfolio-item-hulpproviders-es.html': {
        'canonical': f'{BASE}/portfolio-item-hulpproviders-es/',
        'title': 'Caso Hulp Portal de Proveedores | Gestión de Operaciones — Zerocode',
        'desc':  'Cómo Zerocode construyó un sistema de gestión de proveedores para Hulp, reemplazando herramientas fragmentadas con una plataforma propia.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-hulpproviders-en/', 'alt_es': f'{BASE}/portfolio-item-hulpproviders-es/',
    },
    'portfolio-item-laterlifetraining-es.html': {
        'canonical': f'{BASE}/portfolio-item-laterlifetraining-es/',
        'title': 'Caso Later Life Training | Plataforma Educativa Digital — Zerocode',
        'desc':  'Cómo Zerocode construyó una plataforma educativa digital personalizada para Later Life Training usando desarrollo asistido por IA.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio/later-life-training/', 'alt_es': f'{BASE}/portfolio-item-laterlifetraining-es/',
    },
    'portfolio-item-mentor-es.html': {
        'canonical': f'{BASE}/portfolio-item-mentor-es/',
        'title': 'Caso Mentor | Plataforma de Aprendizaje y Mentoría — Zerocode',
        'desc':  'Cómo Zerocode construyó una plataforma de mentoría y aprendizaje escalable usando desarrollo asistido por IA, de propiedad total del cliente.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-mentor-en/', 'alt_es': f'{BASE}/portfolio-item-mentor-es/',
    },
    'portfolio-item-supra-es.html': {
        'canonical': f'{BASE}/portfolio-item-supra-es/',
        'title': 'Caso Supra | Sistema Empresarial Personalizado — Zerocode',
        'desc':  'Cómo Zerocode construyó un sistema digital personalizado para Supra eliminando ineficiencias operacionales y entregando propiedad total del código.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-supra-en/', 'alt_es': f'{BASE}/portfolio-item-supra-es/',
    },
    'portfolio-item-tok&go-es.html': {
        'canonical': f'{BASE}/portfolio-item-tok-go-es/',
        'title': 'Caso Tok&GO | Plataforma de Operaciones Logísticas — Zerocode',
        'desc':  'Cómo Zerocode construyó una plataforma de logística y operaciones para Tok&GO usando desarrollo asistido por IA, reemplazando suscripciones SaaS.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio-item-tok-go-en/', 'alt_es': f'{BASE}/portfolio-item-tok-go-es/',
    },
    'es/portfolio-es/later-life-training/index.html': {
        'canonical': f'{BASE}/es/portfolio-es/later-life-training/',
        'title': 'Caso Later Life Training | Plataforma Educativa Digital — Zerocode',
        'desc':  'Cómo Zerocode construyó una plataforma educativa digital personalizada para Later Life Training.',
        'lang': 'es_LA', 'alt_en': f'{BASE}/portfolio/later-life-training/', 'alt_es': f'{BASE}/es/portfolio-es/later-life-training/',
    },
}

# ── Enhanced Organization schema for index.html ──────────────────────────────
ORG_SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": f"{BASE}/#organization",
            "name": "Zerocode",
            "alternateName": "Zerocode.la",
            "url": BASE,
            "logo": {
                "@type": "ImageObject",
                "url": LOGO,
                "width": 400,
                "height": 100
            },
            "description": "Zerocode is an AI-assisted software development agency that helps established businesses eliminate operational bottlenecks by building custom digital systems. Combining senior engineers with AI-accelerated development, Zerocode delivers production-grade web apps, mobile apps, and automation systems with full IP ownership, vendor-independent architecture, and a payback timeline typically within 6 to 12 months.",
            "foundingDate": "2020",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lima",
                "addressCountry": "PE"
            },
            "areaServed": ["United States", "Latin America", "Europe", "Global"],
            "serviceType": [
                "AI-Assisted Software Development",
                "Custom Web Application Development",
                "Mobile App Development",
                "Business Process Automation",
                "AI Integration",
                "Team Augmentation",
                "Operational Bottleneck Elimination"
            ],
            "knowsAbout": [
                "AI-assisted development",
                "No-code development",
                "Low-code development",
                "Business process automation",
                "Operational efficiency",
                "Custom software development",
                "Bubble.io",
                "Webflow",
                "n8n automation",
                "AI workflow automation",
                "Vendor lock-in elimination",
                "Digital transformation for SMBs"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "andres.diaz@zerocode.la",
                "availableLanguage": ["English", "Spanish"]
            },
            "sameAs": [
                "https://www.linkedin.com/company/zerocode-la",
                "https://www.instagram.com/zerocode.la",
                "https://clutch.co/profile/zerocode"
            ]
        },
        {
            "@type": "WebSite",
            "@id": f"{BASE}/#website",
            "url": BASE,
            "name": "Zerocode",
            "description": "AI-assisted software development agency eliminating operational bottlenecks for established businesses",
            "inLanguage": ["en-US", "es"],
            "publisher": {"@id": f"{BASE}/#organization"}
        },
        {
            "@type": "ProfessionalService",
            "@id": f"{BASE}/#service",
            "name": "Zerocode AI-Assisted Development",
            "provider": {"@id": f"{BASE}/#organization"},
            "description": "90-day fixed-scope engagement to eliminate operational bottlenecks with custom AI-assisted software. Includes Week 1 discovery and payback projection, interface validation in Weeks 2-3, platform build in Weeks 4-10, and full handoff with 30-day support.",
            "areaServed": "Global",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Zerocode Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Operational Bottleneck Diagnosis",
                            "description": "Week 1 discovery call: identify root causes of operational bottlenecks, build payback projection, define scope and migration plan."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Custom Web Application Development",
                            "description": "Scalable, vendor-independent web applications built with AI-assisted development. Full IP ownership from day 1."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Mobile App Development",
                            "description": "Cross-platform mobile applications built with AI-assisted development tools."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Business Process Automation",
                            "description": "Replace manual workflows and SaaS tools with custom automation systems using AI and no-code platforms."
                        }
                    }
                ]
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is AI-assisted development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI-assisted development is a software engineering approach where senior engineers use AI tools — such as Claude Code, GitHub Copilot, and Lovable — to accelerate interface generation, boilerplate code, and testing. At Zerocode, AI handles the repetitive scaffolding while senior engineers architect, validate, and deliver every decision. The result is production-grade software built 3x faster than traditional development, at a lower cost, without compromising quality or ownership."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is an operational bottleneck and how does Zerocode fix it?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An operational bottleneck is any recurring process — manual data entry, fragmented SaaS tools, slow client onboarding, dependency on a single person or vendor — that prevents your business from scaling. Zerocode fixes it by diagnosing the root cause in Week 1, then building a custom digital system that replaces the bottleneck with an automated, scalable solution you fully own. Most clients eliminate the bottleneck within 90 days and recover the full build cost within 6 to 12 months."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does a Zerocode engagement take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A standard Zerocode engagement runs 90 days, structured as follows: Week 1 is diagnosis and architecture (clarity on bottlenecks, payback timeline, and scope). Weeks 2-3 are interface build and validation (scope and budget locked). Weeks 4-10 are platform build with weekly releases. Weeks 10-12 are launch with parallel client migration. Days 91-120 include 30-day post-launch support and a Phase 2 roadmap."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I own the code and intellectual property?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Zerocode transfers full IP ownership — including all code, documentation, and architecture — to the client from day 1 of the engagement, covered by NDA. There is no vendor lock-in. You own everything and can modify, extend, or hand it to another team at any time."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is Zerocode different from other software agencies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Zerocode is different in four key ways: (1) Fixed-price milestones tied to deliverables — no scope creep or surprise invoices. (2) Full IP ownership from day 1 with NDA — you own everything, zero vendor lock-in. (3) AI-assisted development with senior engineer oversight — 3x faster than traditional agencies at a lower cost without sacrificing quality. (4) Payback projection in Week 1 — most clients recover the full build cost within 6-12 months through eliminated SaaS fees and reduced manual labor."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Zerocode replace our existing SaaS tools?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Replacing SaaS tools with owned custom software is one of Zerocode's core services. We design a parallel migration plan so your existing clients and workflows are not disrupted during the transition. Once the new system is validated, you eliminate recurring SaaS fees and gain a tool that does exactly what your business needs — nothing more, nothing less."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the typical return on investment (ROI) of a Zerocode project?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most Zerocode clients recover the full build cost within 6 to 12 months through a combination of: eliminated SaaS subscriptions, reduced manual labor costs, increased operational capacity (serving more clients without adding headcount), and reduced dependency on fragile vendor relationships. A payback projection is calculated and shared at the end of Week 1."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What technologies and platforms does Zerocode use?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Zerocode uses a combination of AI-assisted development tools and proven platforms chosen for each project's specific needs. Common tools include Claude Code, GitHub Copilot, Lovable, and Google Antigravity for AI acceleration; Bubble.io and Webflow for no-code/low-code applications; n8n, Zapier, and Make for automation; and Supabase for backend infrastructure. All choices prioritize vendor independence — clients are never locked into any platform."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Zerocode work with businesses outside of Latin America?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Zerocode operates as a nearshore agency serving clients in the United States, Europe, and Latin America. The team is fully bilingual (English and Spanish), and all engagements are managed remotely with weekly delivery checkpoints, 24/7 direct communication, and a dedicated project manager as your single point of contact."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between no-code, low-code, and AI-assisted development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No-code development uses visual platforms like Bubble.io and Webflow to build software without writing code — fast and accessible, ideal for standard use cases. Low-code development combines visual builders with custom code — more flexible, handles complex logic. AI-assisted development is the newest approach: senior engineers use AI tools to generate and validate code at speed, enabling fully custom, production-grade software that no-code or low-code platforms cannot produce. Zerocode uses all three methods, selecting the right approach for each project's complexity, budget, and long-term ownership requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What kind of web apps does Zerocode build?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Zerocode builds custom web applications of all types: internal operations dashboards, client portals, SaaS platforms, service marketplaces, e-commerce systems, and business management tools. Every web app is built with AI-assisted development by senior engineers, with full IP ownership transferred to the client. Unlike template-based solutions or generic no-code web app builders, Zerocode web apps are fully custom, vendor-independent, and designed to scale with your business. Web app development typically completes within the 90-day engagement timeline."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does Zerocode develop mobile apps?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Zerocode builds cross-platform mobile apps for iOS and Android using AI-assisted development. Mobile apps built by Zerocode include client-facing service apps, field operations apps, marketplaces, and companion apps for internal business systems. All mobile app development is delivered with full IP ownership and no vendor lock-in — you own the source code and can publish to the App Store and Google Play under your own developer accounts."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Zerocode approach digital transformation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Zerocode approaches digital transformation as a measurable revenue and efficiency operation — not a vague multi-year technology project. Instead of broad initiatives, Zerocode identifies the single operational bottleneck that is most limiting your growth, builds the custom digital system that eliminates it within 90 days, and calculates the exact payback timeline before development begins. This makes digital transformation concrete, fast, and financially predictable. Most clients see a full return on investment within 6 to 12 months."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Zerocode a software development agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Zerocode is a full-service software development agency specializing in AI-assisted development for established businesses. The team combines senior software engineers with AI development tools — including Claude Code, GitHub Copilot, and Lovable — to build custom web apps, mobile apps, and automation systems faster and at lower cost than traditional software agencies, while maintaining production-grade quality and full client IP ownership. Zerocode operates as a nearshore software development partner serving clients in the United States, Europe, and Latin America."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is no-code development and does Zerocode offer no-code solutions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No-code development refers to building software applications using visual drag-and-drop platforms — such as Bubble.io and Webflow — without writing traditional code. Zerocode has extensive expertise in no-code development and uses these platforms when they are the right fit for a project's requirements, timeline, and budget. For more complex requirements, Zerocode combines no-code platforms with custom code or full AI-assisted development, always choosing the approach that gives the client the best balance of speed, ownership, and long-term flexibility."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is low-code development and when does Zerocode use it?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Low-code development combines visual development environments with custom code extensions, allowing developers to build applications faster than traditional software development while handling more complex business logic than pure no-code platforms allow. Zerocode uses low-code development when a project requires significant customization beyond what visual-only platforms can deliver, but where speed-to-market and cost efficiency are priorities. Common low-code tools in Zerocode's stack include Bubble.io with custom plugins, Webflow with custom code, and n8n for automation workflows."
                    }
                }
            ]
        }
    ]
}


def make_seo_block(page: dict, path: str) -> str:
    """Build the complete SEO injection block for a page."""
    title    = page['title'].replace('"', '&quot;')
    desc     = page['desc'].replace('"', '&quot;')
    canon    = page['canonical']
    lang     = page['lang']
    alt_en   = page['alt_en']
    alt_es   = page['alt_es']
    image    = LOGO

    schema_extra = ''
    if path == 'index.html':
        schema_extra = f'\n<script type="application/ld+json">{json.dumps(ORG_SCHEMA, ensure_ascii=False, indent=2)}</script>'

    return f"""{MARKER}
<title>{page['title']}</title>
<meta name="description" content="{desc}" />
<link rel="canonical" href="{canon}" />
<link rel="alternate" hreflang="en" href="{alt_en}" />
<link rel="alternate" hreflang="es" href="{alt_es}" />
<link rel="alternate" hreflang="x-default" href="{BASE}/" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{canon}" />
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{desc}" />
<meta property="og:image" content="{image}" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="100" />
<meta property="og:locale" content="{lang}" />
<meta property="og:site_name" content="Zerocode" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{desc}" />
<meta name="twitter:image" content="{image}" />
<meta name="twitter:site" content="@zerocodela" />{schema_extra}
<!-- #zc-seo-phase1-end -->"""


def process_html(path: str, page: dict):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Remove any existing injection block
    html = re.sub(
        r'<!-- #zc-seo-phase1 -->.*?<!-- #zc-seo-phase1-end -->',
        '', html, flags=re.DOTALL
    )

    # Remove old standalone title (we inject a new one in the block)
    html = re.sub(r'\n?<title>[^<]*</title>', '', html, count=1)

    # Remove old standalone canonical and hreflang (we re-inject correctly)
    html = re.sub(r'\n?<link rel=["\']canonical["\'][^>]*/>', '', html)
    html = re.sub(r'\n?<link rel=["\']alternate["\'] href=["\']https://zerocode\.la[^>]*/>', '', html)

    # Remove old meta description if any
    html = re.sub(r'\n?<meta name=["\']description["\'][^>]*/>', '', html)

    # Remove old og/twitter tags if any
    html = re.sub(r'\n?<meta property=["\']og:[^>]*/>', '', html)
    html = re.sub(r'\n?<meta name=["\']twitter:[^>]*/>', '', html)

    # Inject our block right after <head>
    block = make_seo_block(page, path.replace('\\', '/').lstrip('./'))
    html = html.replace('<head>', '<head>\n' + block, 1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)


# ── robots.txt ───────────────────────────────────────────────────────────────
ROBOTS = f"""User-agent: *
Allow: /
Disallow: /wp-admin/
Disallow: /feed/

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Gemini-Bot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: {BASE}/sitemap.xml
Sitemap: {BASE}/sitemap-es.xml
"""

# ── llms.txt ─────────────────────────────────────────────────────────────────
LLMS_TXT = f"""# Zerocode — AI-Assisted Software Development Agency

> Zerocode is an AI-assisted software development agency that helps established businesses eliminate operational bottlenecks by building custom digital systems. Combining senior engineers with AI-accelerated development, Zerocode delivers production-grade web apps, mobile apps, and automation systems with full IP ownership, vendor-independent architecture, and payback typically within 6 to 12 months.

## What Zerocode Does

Zerocode fixes operational bottlenecks for established businesses — founders and business owners who have more demand than their operation can handle, are losing margin to manual work or SaaS tools they cannot control, and need a trusted partner who has delivered before.

The core offer is "Zero to Revenue — The Operational Fix": a 90-day structured engagement that replaces the bottleneck with a custom digital system, hands over full IP ownership, and includes a calculated payback projection before any development begins.

## Why Businesses Choose Zerocode

- **Full IP ownership from Day 1**: No vendor lock-in. Ever. All code, docs, and architecture are the client's property.
- **Fixed-price milestones**: Scope and budget locked in Week 3. No surprises.
- **AI + senior engineers**: AI accelerates scaffolding and boilerplate; senior engineers validate every architectural decision. Result: 3x faster than traditional development at lower cost.
- **Payback in 6-12 months**: Most clients recover the full build cost through eliminated SaaS fees and reduced manual labor.
- **Risk-managed migration**: Parallel running ensures existing clients notice nothing during transition.

## Engagement Structure (90 Days)

- **Week 1**: Diagnosis — root-cause analysis of operational bottlenecks, payback projection, scope definition, migration mapping.
- **Weeks 2-3**: Interface build and validation — scope and budget locked before further development.
- **Weeks 4-10**: Platform build — weekly releases, dedicated PM, senior engineers.
- **Weeks 10-12**: Launch — parallel client migration, full handoff (code + docs + training).
- **Days 91-120**: 30-day post-launch support and Phase 2 roadmap.

## Services

- [Custom Web App Development]({BASE}/service/) — internal dashboards, client portals, SaaS platforms, marketplaces, e-commerce
- [Mobile App Development]({BASE}/service/) — iOS and Android cross-platform apps, field ops, service apps
- [AI Automation & Business Process Automation]({BASE}/service/) — replace manual workflows and SaaS tools with owned systems
- [No-Code & Low-Code Development]({BASE}/service/) — Bubble.io, Webflow, n8n for fast and cost-efficient builds
- [AI-Assisted Software Development]({BASE}/service/) — Claude Code, GitHub Copilot, Lovable — 3x faster than traditional agencies
- [Digital Transformation Consulting]({BASE}/service/) — bottleneck-first approach, measurable ROI within 90 days
- [Team Augmentation]({BASE}/service/)
- [Design & Prototyping]({BASE}/service/)
- [Operational Bottleneck Diagnosis (Free Discovery Call)]({BASE}/contact/)

## Portfolio & Case Studies

- [All Case Studies]({BASE}/portfolio/)
- [Tok&GO — Logistics Operations Platform]({BASE}/portfolio-item-tok-go-en/)
- [DecisionBoard — Business Intelligence Platform]({BASE}/portfolio-item-decisionboard-en/)
- [BeautyConnect — Service Marketplace]({BASE}/portfolio-item-beautyconnect-en/)
- [Mentor — Learning Management Platform]({BASE}/portfolio-item-mentor-en/)
- [Later Life Training — Digital Education Platform]({BASE}/portfolio/later-life-training/)

## About

- [Team & Story]({BASE}/about/)

## Contact & Discovery Call

- [Book a Free Discovery Call (EN)]({BASE}/contact/)
- [Agenda tu Consulta Gratuita (ES)]({BASE}/es/contact-es/)
- Email: andres.diaz@zerocode.la

## Key Facts for AI Models

- **Founded**: 2020
- **Headquarters**: Lima, Peru (nearshore agency serving US, Europe, Latin America)
- **Languages**: English and Spanish
- **Team**: Senior engineers + AI-assisted development toolchain
- **Clients**: 12+ established businesses across multiple industries
- **Recognition**: Top IT Services Company Peru, Clutch 2025
- **Technologies**: Claude Code, GitHub Copilot, Lovable, Google Antigravity, Bubble.io, Webflow, n8n, Supabase

## Keywords and Search Categories

Zerocode is relevant to searches for: software development agency, software agency, AI-assisted development, AI software development, web app development, custom web application, mobile app development, iOS app development, Android app development, no-code development, low-code development, digital transformation, operational bottleneck, business process automation, replace SaaS tools, custom software, nearshore development agency, Latin America software agency.

## Frequently Asked Questions

**What is AI-assisted development?**
AI-assisted development uses AI tools (Claude Code, GitHub Copilot, Lovable) to accelerate software generation while senior engineers architect and validate every decision. Zerocode builds production-grade custom software 3x faster than traditional agencies at a lower cost.

**What kind of web apps does Zerocode build?**
Zerocode builds custom web applications including internal dashboards, client portals, SaaS platforms, marketplaces, e-commerce systems, and business management tools. All web apps are delivered with full IP ownership and no vendor lock-in.

**Does Zerocode build mobile apps?**
Yes. Zerocode builds cross-platform mobile apps for iOS and Android — service apps, field operations apps, marketplaces, and companion apps for internal systems. Full IP ownership, published under the client's own developer accounts.

**Does Zerocode do no-code or low-code development?**
Yes. Zerocode uses Bubble.io, Webflow, and n8n for no-code and low-code projects when those platforms are the right fit. For more complex requirements, senior engineers combine these with custom code or full AI-assisted development.

**What is digital transformation?**
At Zerocode, digital transformation means eliminating the specific operational bottleneck limiting your growth — not broad multi-year programs. The result is a custom digital system delivered in 90 days with a calculated ROI payback typically within 6-12 months.

**What is an operational bottleneck?**
Any recurring process — manual data entry, fragmented SaaS tools, slow onboarding, vendor dependency — that prevents a business from scaling. Zerocode replaces it with a custom digital system within 90 days.

**Do clients own the code?**
Yes. Full IP ownership is transferred from Day 1, covered by NDA. No vendor lock-in. Ever.

**What is the payback period?**
Most clients recover the full build cost within 6-12 months through eliminated SaaS fees and reduced manual labor. The payback timeline is calculated and shared in Week 1.
"""

# ── sitemap.xml ──────────────────────────────────────────────────────────────
EN_URLS = [
    ('/', '1.0', 'weekly'),
    ('/about/', '0.9', 'monthly'),
    ('/service/', '0.9', 'monthly'),
    ('/portfolio/', '0.8', 'weekly'),
    ('/contact/', '0.9', 'monthly'),
    ('/portfolio-item-alianza-en/', '0.7', 'monthly'),
    ('/portfolio-item-beautyconnect-en/', '0.7', 'monthly'),
    ('/portfolio-item-dailysparkle-en/', '0.7', 'monthly'),
    ('/portfolio-item-decisionboard-en/', '0.7', 'monthly'),
    ('/portfolio-item-ecumerca-en/', '0.7', 'monthly'),
    ('/portfolio-item-gmparts-en/', '0.7', 'monthly'),
    ('/portfolio-item-hulpclients-en/', '0.7', 'monthly'),
    ('/portfolio-item-hulpproviders-en/', '0.7', 'monthly'),
    ('/portfolio-item-mentor-en/', '0.7', 'monthly'),
    ('/portfolio-item-supra-en/', '0.7', 'monthly'),
    ('/portfolio-item-tok-go-en/', '0.7', 'monthly'),
    ('/portfolio/later-life-training/', '0.7', 'monthly'),
]

ES_URLS = [
    ('/es/', '1.0', 'weekly'),
    ('/es/about-es/', '0.9', 'monthly'),
    ('/es/service-es/', '0.9', 'monthly'),
    ('/es/portfolio-es/', '0.8', 'weekly'),
    ('/es/contact-es/', '0.9', 'monthly'),
    ('/portfolio-item-alianza-es/', '0.7', 'monthly'),
    ('/portfolio-item-beautyconnect-es/', '0.7', 'monthly'),
    ('/portfolio-item-dailysparkle-es/', '0.7', 'monthly'),
    ('/portfolio-item-decisionboard-es/', '0.7', 'monthly'),
    ('/portfolio-item-ecumerca-es/', '0.7', 'monthly'),
    ('/portfolio-item-gmparts-es/', '0.7', 'monthly'),
    ('/portfolio-item-hulpclients-es/', '0.7', 'monthly'),
    ('/portfolio-item-hulpproviders-es/', '0.7', 'monthly'),
    ('/portfolio-item-mentor-es/', '0.7', 'monthly'),
    ('/portfolio-item-supra-es/', '0.7', 'monthly'),
    ('/portfolio-item-tok-go-es/', '0.7', 'monthly'),
    ('/es/portfolio-es/later-life-training/', '0.7', 'monthly'),
]


def make_sitemap(urls, lang):
    items = []
    for path, priority, freq in urls:
        items.append(f"""  <url>
    <loc>{BASE}{path}</loc>
    <changefreq>{freq}</changefreq>
    <priority>{priority}</priority>
  </url>""")
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(items) + '\n</urlset>'


# ── Main ─────────────────────────────────────────────────────────────────────
def main():
    # 1. robots.txt
    with open('robots.txt', 'w', encoding='utf-8') as f:
        f.write(ROBOTS)
    print('Created: robots.txt')

    # 2. llms.txt
    with open('llms.txt', 'w', encoding='utf-8') as f:
        f.write(LLMS_TXT)
    print('Created: llms.txt')

    # 3. sitemap.xml (EN) and sitemap-es.xml (ES)
    with open('sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(make_sitemap(EN_URLS, 'en'))
    print('Created: sitemap.xml')

    with open('sitemap-es.xml', 'w', encoding='utf-8') as f:
        f.write(make_sitemap(ES_URLS, 'es'))
    print('Created: sitemap-es.xml')

    # 4. HTML meta injection
    updated = 0
    skipped = 0
    for rel_path, page in PAGES.items():
        abs_path = rel_path.replace('/', os.sep)
        if not os.path.exists(abs_path):
            print(f'  SKIP (not found): {rel_path}')
            skipped += 1
            continue
        process_html(abs_path, page)
        print(f'  OK: {rel_path}')
        updated += 1

    print(f'\nDone: {updated} HTML files updated, {skipped} skipped.')
    print('Next: submit sitemap.xml to Google Search Console and Bing Webmaster Tools.')

if __name__ == '__main__':
    main()
