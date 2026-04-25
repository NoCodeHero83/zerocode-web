#!/usr/bin/env python3
"""fix_seo_lengths.py — Trim over-length titles and meta descriptions."""
import sys, re, glob
sys.stdout.reconfigure(encoding='utf-8')

# (file, old_title, new_title)  — new must be <= 70 chars
TITLE_FIXES = [
    # Blog pages
    ('blog/eliminate-operational-bottlenecks/index.html',
     'How to Eliminate Operational Bottlenecks with Custom Software — Zerocode',
     'Fix Operational Bottlenecks with Custom Software — Zerocode'),

    ('blog/index.html',
     'Blog | AI Assisted Development, Operations & Software Guides — Zerocode',
     'Blog | AI Dev, Ops & Software Guides — Zerocode'),

    ('blog/no-code-vs-low-code-vs-ai-assisted-development/index.html',
     'No Code vs Low Code vs AI Assisted Development: Which Is Right for You? — Zerocode',
     'No-Code vs Low-Code vs AI Dev: Which Is Right? — Zerocode'),

    ('blog/replace-saas-tools-custom-software/index.html',
     'How to Replace SaaS Tools with Custom Software and Own Your Stack — Zerocode',
     'Replace SaaS Tools with Custom Software — Zerocode'),

    # English pages
    ('index.html',
     'AI-Assisted Development Agency | Fix Operational Bottlenecks — Zerocode',
     'AI-Assisted Development Agency | Zerocode'),

    ('service.html',
     'Services | AI-Assisted Development, Automation & Custom Software — Zerocode',
     'Services | AI Dev, Automation & Custom Software — Zerocode'),

    ('service/index.html',
     'Services | AI-Assisted Development, Automation & Custom Software — Zerocode',
     'Services | AI Dev, Automation & Custom Software — Zerocode'),

    # Spanish pages
    ('es/index.html',
     'Agencia de Desarrollo Asistido por IA | Elimina Cuellos de Botella — Zerocode',
     'Agencia de Desarrollo Asistido por IA | Zerocode'),

    ('home-es.html',
     'Agencia de Desarrollo Asistido por IA | Elimina Cuellos de Botella — Zerocode',
     'Agencia de Desarrollo Asistido por IA | Zerocode'),

    ('es/portfolio-es/index.html',
     'Casos de Éxito | Sistemas Digitales que Impulsan el Crecimiento y la Escalabilidad — Zerocode',
     'Casos de Éxito | Sistemas Digitales que Impulsan el Crecimiento'),

    ('portfolio-es.html',
     'Casos de Éxito | Sistemas Digitales que Impulsan el Crecimiento y la Escalabilidad — Zerocode',
     'Casos de Éxito | Sistemas Digitales que Impulsan el Crecimiento'),

    ('es/service-es/index.html',
     'Servicios | Desarrollo Asistido por IA, Automatización y Software Personalizado — Zerocode',
     'Servicios | Desarrollo Asistido por IA y Automatización'),

    ('service-es.html',
     'Servicios | Desarrollo Asistido por IA, Automatización y Software Personalizado — Zerocode',
     'Servicios | Desarrollo Asistido por IA y Automatización'),
]

# (file, old_desc, new_desc)  — new must be <= 160 chars
DESC_FIXES = [
    ('about.html',
     'Meet the Zerocode team. Senior engineers and AI-accelerated development delivering custom digital systems that eliminate operational bottlenecks for established businesses worldwide.',
     'Meet the Zerocode team. Senior engineers and AI-accelerated development delivering custom systems that eliminate operational bottlenecks worldwide.'),

    ('about/index.html',
     'Meet the Zerocode team. Senior engineers and AI-accelerated development delivering custom digital systems that eliminate operational bottlenecks for established businesses worldwide.',
     'Meet the Zerocode team. Senior engineers and AI-accelerated development delivering custom systems that eliminate operational bottlenecks worldwide.'),

    ('about-es.html',
     'Conoce al equipo de Zerocode. Ingenieros senior y desarrollo acelerado por IA para eliminar cuellos de botella operacionales en empresas establecidas de todo el mundo.',
     'Conoce al equipo de Zerocode. Ingenieros senior y desarrollo acelerado por IA para eliminar cuellos de botella operacionales en empresas establecidas.'),

    ('es/about-es/index.html',
     'Conoce al equipo de Zerocode. Ingenieros senior y desarrollo acelerado por IA para eliminar cuellos de botella operacionales en empresas establecidas de todo el mundo.',
     'Conoce al equipo de Zerocode. Ingenieros senior y desarrollo acelerado por IA para eliminar cuellos de botella operacionales en empresas establecidas.'),

    ('service.html',
     'Custom web apps, mobile apps, AI automations, and team augmentation. Fixed-price milestones, full IP ownership, no vendor lock-in. Payback typically in 4–6 months after launch.',
     'Custom web apps, mobile apps, AI automations, and team augmentation. Fixed-price milestones, full IP ownership, no vendor lock-in.'),

    ('service/index.html',
     'Custom web apps, mobile apps, AI automations, and team augmentation. Fixed-price milestones, full IP ownership, no vendor lock-in. Payback typically in 4–6 months after launch.',
     'Custom web apps, mobile apps, AI automations, and team augmentation. Fixed-price milestones, full IP ownership, no vendor lock-in.'),

    ('index.html',
     'We help established businesses eliminate operational bottlenecks with custom AI-assisted software. Full IP ownership. No vendor lock-in. Book a free discovery call.',
     'We help established businesses eliminate operational bottlenecks with custom AI-assisted software. Full IP ownership. No vendor lock-in.'),

    ('home-es.html',
     'Ayudamos a empresas establecidas a eliminar cuellos de botella operacionales con software personalizado asistido por IA. Propiedad total del código. Sin dependencia de proveedores.',
     'Ayudamos a empresas establecidas a eliminar cuellos de botella con software personalizado asistido por IA. Propiedad total del código. Sin lock-in.'),

    ('es/index.html',
     'Ayudamos a empresas establecidas a eliminar cuellos de botella operacionales con software personalizado asistido por IA. Propiedad total del código. Sin dependencia de proveedores.',
     'Ayudamos a empresas establecidas a eliminar cuellos de botella con software personalizado asistido por IA. Propiedad total del código. Sin lock-in.'),

    ('portfolio.html',
     'See how Zerocode has eliminated operational bottlenecks for established businesses using AI-assisted development. Real results, real IP ownership, zero vendor lock-in.',
     'See how Zerocode eliminated operational bottlenecks for established businesses using AI-assisted development. Real results, full IP ownership.'),

    ('portfolio/index.html',
     'See how Zerocode has eliminated operational bottlenecks for established businesses using AI-assisted development. Real results, real IP ownership, zero vendor lock-in.',
     'See how Zerocode eliminated operational bottlenecks for established businesses using AI-assisted development. Real results, full IP ownership.'),

    ('portfolio-es.html',
     'Descubre cómo Zerocode ha eliminado cuellos de botella operacionales para empresas establecidas usando desarrollo asistido por IA. Resultados reales, propiedad total del código.',
     'Descubre cómo Zerocode eliminó cuellos de botella para empresas establecidas con desarrollo asistido por IA. Resultados reales, propiedad del código.'),

    ('es/portfolio-es/index.html',
     'Descubre cómo Zerocode ha eliminado cuellos de botella operacionales para empresas establecidas usando desarrollo asistido por IA. Resultados reales, propiedad total del código.',
     'Descubre cómo Zerocode eliminó cuellos de botella para empresas establecidas con desarrollo asistido por IA. Resultados reales, propiedad del código.'),

    ('contact-es.html',
     'Agenda tu llamada de descubrimiento gratuita. Claridad total sobre tu cuello de botella operacional, cómo resolverlo y el tiempo exacto de retorno — todo en la Semana 1.',
     'Agenda tu llamada de descubrimiento gratuita. Claridad sobre tu cuello de botella operacional, cómo resolverlo y el tiempo de retorno — en Semana 1.'),

    ('es/contact-es/index.html',
     'Agenda tu llamada de descubrimiento gratuita. Claridad total sobre tu cuello de botella operacional, cómo resolverlo y el tiempo exacto de retorno — todo en la Semana 1.',
     'Agenda tu llamada de descubrimiento gratuita. Claridad sobre tu cuello de botella operacional, cómo resolverlo y el tiempo de retorno — en Semana 1.'),

    # Blog pages
    ('blog/eliminate-operational-bottlenecks/index.html',
     'Most businesses lose 20 to 30 percent of operational capacity to bottlenecks SaaS tools cannot fix. This guide explains how custom software eliminates them for good.',
     'Most businesses lose 20–30% of operational capacity to bottlenecks SaaS tools cannot fix. This guide explains how custom software eliminates them for good.'),

    ('blog/index.html',
     'Practical guides on AI assisted software development, operational bottlenecks, SaaS migration, web app development costs, and custom software strategy for growing businesses.',
     'Practical guides on AI-assisted development, operational bottlenecks, SaaS migration, web app costs, and custom software strategy for growing businesses.'),

    ('blog/no-code-vs-low-code-vs-ai-assisted-development/index.html',
     'A complete comparison of no code, low code, and AI assisted development: speed, cost, IP ownership, scalability, and a decision framework for established businesses.',
     'Compare no-code, low-code, and AI-assisted development: speed, cost, IP ownership, scalability, and a decision framework for established businesses.'),

    ('blog/replace-saas-tools-custom-software/index.html',
     'Learn when to replace SaaS subscriptions with custom software, how to calculate ROI, avoid common migration mistakes, and own your stack with full IP ownership.',
     'Learn when to replace SaaS with custom software, how to calculate ROI, avoid migration mistakes, and own your stack with full IP ownership.'),
]

def fix_title(html, old, new):
    return html.replace(f'<title>{old}</title>', f'<title>{new}</title>')

def fix_desc(html, old, new):
    # Handle both attribute orders
    for quote in ['"', "'"]:
        html = html.replace(
            f'<meta name={quote}description{quote} content={quote}{old}{quote}',
            f'<meta name={quote}description{quote} content={quote}{new}{quote}'
        )
        html = html.replace(
            f'content={quote}{old}{quote} name={quote}description{quote}',
            f'content={quote}{new}{quote} name={quote}description{quote}'
        )
    return html

updated = 0
for path, old, new in TITLE_FIXES:
    try:
        html = open(path, encoding='utf-8').read()
        new_html = fix_title(html, old, new)
        if new_html != html:
            open(path, 'w', encoding='utf-8').write(new_html)
            print(f'  Title fixed ({len(new):2d} chars): {path}')
            updated += 1
    except FileNotFoundError:
        pass

for path, old, new in DESC_FIXES:
    try:
        html = open(path, encoding='utf-8').read()
        new_html = fix_desc(html, old, new)
        if new_html != html:
            open(path, 'w', encoding='utf-8').write(new_html)
            print(f'  Desc  fixed ({len(new):3d} chars): {path}')
            updated += 1
    except FileNotFoundError:
        pass

print(f'\nDone: {updated} changes applied.')
