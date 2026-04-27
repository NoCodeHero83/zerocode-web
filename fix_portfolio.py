#!/usr/bin/env python3
"""Add 6 new cards to EN and ES portfolio grids and set PER_PAGE=6."""
import re

CHEVRON_SVG = '<svg aria-hidden="true" class="e-font-icon-svg e-fas-chevron-right" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>'

DATA_EN = [
    {
        'id': '1581',
        'link': '/portfolio-item-beautyconnect-en',
        'image': 'f3ff1d5b7be-12.png',
        'alt': 'BeautyConnect beauty services marketplace — built by Zerocode',
        'title': 'Beauty Connect',
        'desc': 'BeautyConnect is a services marketplace connecting beauty professionals with clients. It enables seamless appointment booking, provider discovery, and multi-provider purchasing in one streamlined platform.',
    },
    {
        'id': '390',
        'link': '/portfolio-item-decisionboard-en',
        'image': 'Portada.png',
        'alt': 'DecisionBoard business intelligence platform — built by Zerocode',
        'title': 'The Decision Board',
        'desc': 'DecisionBoard is a business intelligence platform that aggregates data and delivers actionable analytics through customizable dashboards, empowering teams to make faster, data-driven decisions.',
    },
    {
        'id': '2001',
        'link': '/portfolio-item-hulpclients-en',
        'image': 'login-scaled.png',
        'alt': 'Hulp client services marketplace app — built by Zerocode',
        'title': 'Hulp — Client App',
        'desc': 'Hulp is a service marketplace connecting clients with professional service providers. The client app enables intuitive search, booking, and service history tracking for home and business needs.',
    },
    {
        'id': '2002',
        'link': '/portfolio-item-hulpproviders-en',
        'image': 'login-1-scaled.png',
        'alt': 'Hulp provider services marketplace app — built by Zerocode',
        'title': 'Hulp — Provider App',
        'desc': 'The Hulp provider application enables service professionals to manage incoming requests, track their performance metrics, and grow their business through a powerful mobile-first platform.',
    },
    {
        'id': '2003',
        'link': '/portfolio-item-supra-en',
        'image': 'Proyectos.png',
        'alt': 'Supra project management and business intelligence platform — built by Zerocode',
        'title': 'Supra',
        'desc': 'Supra is a project management and business intelligence platform integrating dashboards, project tracking, and performance analytics into a unified system for enterprise teams.',
    },
    {
        'id': '2004',
        'link': '/portfolio-item-tok%26go-en',
        'image': 'TokGo_1.png',
        'alt': 'Tok&Go on-demand services platform — built by Zerocode',
        'title': 'Tok&amp;Go',
        'desc': 'Tok&amp;Go is a digital platform enabling on-demand service discovery and booking, connecting users with local providers through a streamlined mobile and web experience.',
    },
]

DATA_ES = [
    {
        'id': '8001',
        'link': '/portfolio-item-beautyconnect-es',
        'image': 'f3ff1d5b7be-12.png',
        'alt': 'BeautyConnect marketplace de servicios de belleza — Zerocode',
        'title': 'Beauty Connect',
        'desc': 'BeautyConnect es una plataforma marketplace que conecta profesionales de belleza con clientes, facilitando la reserva de citas, el descubrimiento de proveedores y las compras multi-proveedor.',
    },
    {
        'id': '8002',
        'link': '/portfolio-item-decisionboard-es',
        'image': 'Portada.png',
        'alt': 'DecisionBoard plataforma de inteligencia de negocios — Zerocode',
        'title': 'The Decision Board',
        'desc': 'DecisionBoard es una plataforma de inteligencia de negocios que centraliza datos y genera dashboards interactivos para tomar decisiones ágiles y basadas en datos para equipos de liderazgo.',
    },
    {
        'id': '8003',
        'link': '/portfolio-item-hulpclients-es',
        'image': 'login-scaled.png',
        'alt': 'Hulp app de clientes marketplace de servicios — Zerocode',
        'title': 'Hulp — App Clientes',
        'desc': 'Hulp es un marketplace de servicios que conecta clientes con proveedores profesionales. La app permite búsqueda, reserva y seguimiento de servicios para el hogar y empresas.',
    },
    {
        'id': '8004',
        'link': '/portfolio-item-hulpproviders-es',
        'image': 'login-1-scaled.png',
        'alt': 'Hulp app de proveedores marketplace de servicios — Zerocode',
        'title': 'Hulp — App Proveedores',
        'desc': 'La aplicación de proveedores de Hulp permite a los profesionales gestionar solicitudes entrantes, monitorear su desempeño y hacer crecer su negocio a través de una plataforma móvil.',
    },
    {
        'id': '8005',
        'link': '/portfolio-item-supra-es',
        'image': 'Proyectos.png',
        'alt': 'Supra plataforma de gestión de proyectos e inteligencia de negocios — Zerocode',
        'title': 'Supra',
        'desc': 'Supra es una plataforma de gestión de proyectos e inteligencia de negocios que integra dashboards, seguimiento de proyectos y análisis de desempeño para equipos empresariales.',
    },
    {
        'id': '8006',
        'link': '/portfolio-item-tok%26go-es',
        'image': 'TokGo_1.png',
        'alt': 'Tok&Go plataforma de servicios bajo demanda — Zerocode',
        'title': 'Tok&amp;Go',
        'desc': 'Tok&amp;Go es una plataforma digital para el descubrimiento y reserva de servicios bajo demanda, conectando usuarios con proveedores locales a través de una experiencia móvil y web simplificada.',
    },
]


def make_en_card(item):
    return (
        f'<div data-elementor-type="loop-item" data-elementor-id="398" class="elementor elementor-398 e-loop-item e-loop-item-{item["id"]} post-{item["id"]} portfolio type-portfolio status-publish has-post-thumbnail hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">\n'
        f'\t\t\t<div class="elementor-element elementor-element-a1878cc animated-slow e-con-full e-flex elementor-invisible e-con e-child" data-id="a1878cc" data-element_type="container" data-settings="{{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;}}">\n'
        f'\t\t<div class="elementor-element elementor-element-fda0c1a e-con-full e-flex e-con e-child" data-id="fda0c1a" data-element_type="container" data-settings="{{&quot;background_background&quot;:&quot;classic&quot;}}">\n'
        f'\t\t<div class="elementor-element elementor-element-dfaddb0 e-con-full e-flex e-con e-child" data-id="dfaddb0" data-element_type="container">\n'
        f'\t\t\t\t<div class="elementor-element elementor-element-35dcb02 elementor-widget elementor-widget-image" data-id="35dcb02" data-element_type="widget" data-widget_type="image.default">\n'
        f'\t\t\t\t<div class="elementor-widget-container">\n'
        f'\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="{item["link"]}">\n'
        f'\t\t\t\t\t\t\t\t\t\t<img loading="lazy" decoding="async" src="/images/{item["image"]}" class="attachment-full size-full" alt="{item["alt"]}" />\t\t\t\t\t\t\t\t\t</a>\n'
        f'\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t<div class="elementor-element elementor-element-06982da e-con-full e-flex e-con e-child" data-id="06982da" data-element_type="container">\n'
        f'\t\t\t\t<div class="elementor-element elementor-element-b28bccb elementor-widget elementor-widget-heading" data-id="b28bccb" data-element_type="widget" data-widget_type="heading.default">\n'
        f'\t\t\t\t<div class="elementor-widget-container">\n'
        f'\t\t\t\t\t<h4 class="elementor-heading-title elementor-size-default"><a href="{item["link"]}">{item["title"]}</a></h4>\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t<div class="elementor-element elementor-element-6780e9c elementor-widget elementor-widget-text-editor" data-id="6780e9c" data-element_type="widget" data-widget_type="text-editor.default">\n'
        f'\t\t\t\t<div class="elementor-widget-container">\n'
        f'\t\t\t\t\t\t\t\t\t\t{item["desc"]}\t\t\t\t\t\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t<div class="elementor-element elementor-element-ed9d7f1 elementor-align-center elementor-widget elementor-widget-button" data-id="ed9d7f1" data-element_type="widget" data-widget_type="button.default">\n'
        f'\t\t\t\t<div class="elementor-widget-container">\n'
        f'\t\t\t\t\t\t\t\t\t\t<div class="elementor-button-wrapper">\n'
        f'\t\t\t\t\t<a class="elementor-button elementor-button-link elementor-size-sm" href="{item["link"]}">\n'
        f'\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n'
        f'\t\t\t\t\t\t<span class="elementor-button-icon">\n'
        f'\t\t\t\t{CHEVRON_SVG}\t\t\t</span>\n'
        f'\t\t\t\t\t\t\t\t\t\t<span class="elementor-button-text">See more</span>\n'
        f'\t\t\t\t\t\t</span>\n'
        f'\t\t\t\t\t</a>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'</div>\n'
    )


def make_es_card(item):
    return (
        f'<div data-elementor-type="loop-item" data-elementor-id="7760" class="elementor elementor-7760 e-loop-item e-loop-item-{item["id"]} post-{item["id"]} portfolio type-portfolio status-publish has-post-thumbnail hentry" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">\n'
        f'\t\t\t<div class="elementor-element elementor-element-a1878cc e-con-full animated-slow e-flex elementor-invisible e-con e-child" data-id="a1878cc" data-element_type="container" data-settings="{{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;}}">\n'
        f'\t\t<div class="elementor-element elementor-element-fda0c1a e-con-full e-flex e-con e-child" data-id="fda0c1a" data-element_type="container" data-settings="{{&quot;background_background&quot;:&quot;classic&quot;}}">\n'
        f'\t\t<div class="elementor-element elementor-element-dfaddb0 e-con-full e-flex e-con e-child" data-id="dfaddb0" data-element_type="container">\n'
        f'\t\t\t\t<div class="elementor-element elementor-element-35dcb02 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-id="35dcb02" data-element_type="widget" data-widget_type="image.default">\n'
        f'\t\t\t\t<div class="elementor-widget-container">\n'
        f'\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="{item["link"]}">\n'
        f'\t\t\t\t\t\t\t\t\t\t<img loading="lazy" decoding="async" src="/images/{item["image"]}" class="attachment-full size-full" alt="{item["alt"]}" />\t\t\t\t\t\t\t\t\t</a>\n'
        f'\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t<div class="elementor-element elementor-element-06982da e-con-full e-flex e-con e-child" data-id="06982da" data-element_type="container">\n'
        f'\t\t\t\t<div class="elementor-element elementor-element-b28bccb elementor-widget elementor-widget-heading" data-id="b28bccb" data-element_type="widget" data-widget_type="heading.default">\n'
        f'\t\t\t\t<div class="elementor-widget-container">\n'
        f'\t\t\t\t\t<h4 class="elementor-heading-title elementor-size-default"><a href="{item["link"]}">{item["title"]}</a></h4>\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t<div class="elementor-element elementor-element-6780e9c elementor-widget elementor-widget-text-editor" data-id="6780e9c" data-element_type="widget" data-widget_type="text-editor.default">\n'
        f'\t\t\t\t<div class="elementor-widget-container">\n'
        f'\t\t\t\t\t\t\t\t\t\t{item["desc"]}\t\t\t\t\t\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t<div class="elementor-element elementor-element-ed9d7f1 elementor-align-center elementor-widget elementor-widget-button" data-id="ed9d7f1" data-element_type="widget" data-widget_type="button.default">\n'
        f'\t\t\t\t<div class="elementor-widget-container">\n'
        f'\t\t\t\t\t\t\t\t\t\t<div class="elementor-button-wrapper">\n'
        f'\t\t\t\t\t<a class="elementor-button elementor-button-link elementor-size-sm" href="{item["link"]}">\n'
        f'\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n'
        f'\t\t\t\t\t\t<span class="elementor-button-icon">\n'
        f'\t\t\t\t{CHEVRON_SVG}\t\t\t</span>\n'
        f'\t\t\t\t\t\t\t\t\t\t<span class="elementor-button-text">Ver más</span>\n'
        f'\t\t\t\t\t\t</span>\n'
        f'\t\t\t\t\t</a>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'\t\t\t\t</div>\n'
        f'</div>\n'
    )


def fix_portfolio(path, new_cards_html, per_page=6):
    with open(path, encoding='utf-8') as f:
        html = f.read()

    # Change PER_PAGE
    html = re.sub(r'var PER_PAGE\s*=\s*\d+', f'var PER_PAGE = {per_page}', html)

    # Insert new cards before the pagination nav
    PAGINATION_MARKER = '<nav class="elementor-pagination"'
    idx = html.find(PAGINATION_MARKER)
    if idx == -1:
        print(f'ERROR: pagination marker not found in {path}')
        return False
    html = html[:idx] + new_cards_html + html[idx:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'Updated: {path}')
    return True


# Build new EN cards block
en_cards = ''.join(make_en_card(item) for item in DATA_EN)

# Build new ES cards block
es_cards = ''.join(make_es_card(item) for item in DATA_ES)

fix_portfolio('portfolio/index.html', en_cards, per_page=6)
fix_portfolio('es/portfolio-es/index.html', es_cards, per_page=6)

# Fix vercel.json: add redirect from /portfolio-es to /es/portfolio-es
import json
with open('vercel.json') as f:
    cfg = json.load(f)

if 'redirects' not in cfg:
    cfg['redirects'] = []

# Only add if not already there
existing = [r.get('source') for r in cfg.get('redirects', [])]
if '/portfolio-es' not in existing:
    cfg['redirects'].append({
        'source': '/portfolio-es',
        'destination': '/es/portfolio-es',
        'permanent': False
    })
    with open('vercel.json', 'w') as f:
        json.dump(cfg, f, indent=2)
    print('Updated vercel.json with /portfolio-es redirect')

print('Done.')
