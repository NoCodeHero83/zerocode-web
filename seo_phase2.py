#!/usr/bin/env python3
"""
seo_phase2.py — Phase 2 SEO for zerocode.la
- Injects a visually-hidden H1 tag on every page (zero H1s found in audit)
- Rewrites empty/filename-only alt attributes with descriptive keyword-rich text
"""
import sys, re, os
sys.stdout.reconfigure(encoding='utf-8')

H1_MARKER_START = '<!-- #zc-h1-start -->'
H1_MARKER_END   = '<!-- #zc-h1-end -->'

# Hidden H1 style — visible to Google/LLMs, invisible to users
HIDDEN_H1_STYLE = (
    'position:absolute;width:1px;height:1px;overflow:hidden;'
    'clip:rect(0,0,0,0);white-space:nowrap;'
)

# ── H1 per page ─────────────────────────────────────────────────────────────
PAGE_H1 = {
    # EN core
    'index.html':                           'AI-Assisted Software Development Agency — Zerocode',
    'about.html':                           'About Zerocode | Senior Engineers & AI-Assisted Development Team',
    'about/index.html':                     'About Zerocode | Senior Engineers & AI-Assisted Development Team',
    'service.html':                         'Software Development Services | Custom Web Apps, Mobile Apps & AI Automation — Zerocode',
    'service/index.html':                   'Software Development Services | Custom Web Apps, Mobile Apps & AI Automation — Zerocode',
    'portfolio.html':                       'Portfolio | Custom Digital Systems That Eliminate Operational Bottlenecks — Zerocode',
    'portfolio/index.html':                 'Portfolio | Custom Digital Systems That Eliminate Operational Bottlenecks — Zerocode',
    'contact.html':                         'Book a Free Discovery Call | Fix Your Operational Bottleneck in 90 Days — Zerocode',
    'contact/index.html':                   'Book a Free Discovery Call | Fix Your Operational Bottleneck in 90 Days — Zerocode',
    'thank-you.html':                       'Thank You | Zerocode Will Be in Touch Within 24 Hours',
    'thank-you/index.html':                 'Thank You | Zerocode Will Be in Touch Within 24 Hours',
    "let´s-talk.html":                 "Let's Talk | Book a Free Discovery Call with Zerocode",
    # EN portfolio items
    'portfolio-item.html':                  'Case Study | AI-Assisted Digital Solution — Zerocode',
    'portfolio-item-alianza-en.html':       'Alianza Case Study | Custom Mobile Banking & Savings App — Zerocode',
    'portfolio-item-beautyconnect-en.html': 'BeautyConnect Case Study | Custom Beauty Services Marketplace — Zerocode',
    'portfolio-item-dailysparkle-en.html':  'Daily Sparkle Case Study | Scalable Digital Content Platform — Zerocode',
    'portfolio-item-decisionboard-en.html': 'DecisionBoard Case Study | Custom Business Intelligence Platform — Zerocode',
    'portfolio-item-ecumerca-en.html':      'Ecumerca Case Study | Custom Commerce & Operations System — Zerocode',
    'portfolio-item-gmparts-en.html':       'GM Parts Case Study | Automotive Operations & Inventory Platform — Zerocode',
    'portfolio-item-hulpclients-en.html':   'Hulp Client Portal Case Study | Custom CRM & Client Management — Zerocode',
    'portfolio-item-hulpproviders-en.html': 'Hulp Provider Portal Case Study | Custom Provider Operations System — Zerocode',
    'portfolio-item-mentor-en.html':        'Mentor Case Study | Scalable Learning Management Platform — Zerocode',
    'portfolio-item-supra-en.html':         'Supra Case Study | Custom Business Operations System — Zerocode',
    'portfolio-item-tok&go-en.html':        'Tok&GO Case Study | Custom Logistics & Operations Platform — Zerocode',
    'portfolio/later-life-training/index.html': 'Later Life Training Case Study | Digital Education Platform — Zerocode',
    # ES core
    'home-es.html':                         'Agencia de Desarrollo de Software Asistido por IA — Zerocode',
    'es/index.html':                        'Agencia de Desarrollo de Software Asistido por IA — Zerocode',
    'about-es.html':                        'Sobre Zerocode | Equipo de Ingenieros Senior y Desarrollo Asistido por IA',
    'es/about-es/index.html':               'Sobre Zerocode | Equipo de Ingenieros Senior y Desarrollo Asistido por IA',
    'service-es.html':                      'Servicios de Desarrollo de Software | Apps Web, Móviles e Inteligencia Artificial — Zerocode',
    'es/service-es/index.html':             'Servicios de Desarrollo de Software | Apps Web, Móviles e Inteligencia Artificial — Zerocode',
    'portfolio-es.html':                    'Portafolio | Sistemas Digitales que Eliminan Cuellos de Botella Operacionales — Zerocode',
    'es/portfolio-es/index.html':           'Portafolio | Sistemas Digitales que Eliminan Cuellos de Botella Operacionales — Zerocode',
    'contact-es.html':                      'Agenda tu Consulta Gratuita | Elimina tu Cuello de Botella en 90 Días — Zerocode',
    'es/contact-es/index.html':             'Agenda tu Consulta Gratuita | Elimina tu Cuello de Botella en 90 Días — Zerocode',
    'es/funnel-es/index.html':              'Consulta Gratuita | De Cero a Ingresos — Zerocode',
    # ES portfolio items
    'portfolio-item-es.html':                          'Caso de Éxito | Solución Digital Asistida por IA — Zerocode',
    'portfolio-item-alianza-es.html':                  'Caso Alianza | App Móvil de Banca y Ahorro Personalizada — Zerocode',
    'portfolio-item-beautyconnect-es.html':            'Caso BeautyConnect | Marketplace de Servicios de Belleza — Zerocode',
    'portfolio-item-dailysparkle-es.html':             'Caso Daily Sparkle | Plataforma de Contenido Digital Escalable — Zerocode',
    'portfolio-item-decisionboard-es.html':            'Caso DecisionBoard | Plataforma de Inteligencia de Negocio — Zerocode',
    'portfolio-item-ecumerca-es.html':                 'Caso Ecumerca | Sistema de Comercio y Operaciones Personalizado — Zerocode',
    'portfolio-item-gmparts-es.html':                  'Caso GM Parts | Plataforma de Gestión Automotriz y Autopartes — Zerocode',
    'portfolio-item-hulpclients-es.html':              'Caso Hulp Portal de Clientes | CRM y Gestión de Clientes — Zerocode',
    'portfolio-item-hulpproviders-es.html':            'Caso Hulp Portal de Proveedores | Gestión de Operaciones — Zerocode',
    'portfolio-item-laterlifetraining-es.html':        'Caso Later Life Training | Plataforma Educativa Digital — Zerocode',
    'portfolio-item-mentor-es.html':                   'Caso Mentor | Plataforma de Aprendizaje y Mentoría Escalable — Zerocode',
    'portfolio-item-supra-es.html':                    'Caso Supra | Sistema Empresarial Digital Personalizado — Zerocode',
    'portfolio-item-tok&go-es.html':                   'Caso Tok&GO | Plataforma de Logística y Operaciones — Zerocode',
    'es/portfolio-es/later-life-training/index.html':  'Caso Later Life Training | Plataforma de Educación Digital — Zerocode',
}

# ── Alt text map: keyed on filename fragment ─────────────────────────────────
# Matched against the src attribute value (partial match, most specific first)
ALT_MAP = [
    # Logo / brand
    ('Mesa-de-25@2x-8-1',               'Zerocode logo — AI-assisted software development agency'),
    ('ZEROCODE_Imagotipo',               'Zerocode logo — AI-assisted software development agency'),

    # Clutch badge
    ('top_clutch.co_it_services',        'Top IT Services Company Peru 2025 — Clutch'),

    # AI tool logos
    ('bolt_white_optimized',             'Bolt — AI-assisted development tool used by Zerocode'),
    ('claude_white_optimized',           'Claude AI by Anthropic — AI development tool used by Zerocode'),
    ('google_antigravity_white',         'Google Antigravity — AI development platform used by Zerocode'),
    ('lovable_white_optimized',          'Lovable — AI web app builder used by Zerocode'),
    ('supabase_white_optimized',         'Supabase — backend infrastructure platform used by Zerocode'),

    # Client logos
    ('Cupid-logo',                       'Cupid — Zerocode client logo'),
    ('LLT-Not-for-Profit',               'Later Life Training — Zerocode client logo'),
    ('logo-mentor',                      'Mentor — Zerocode client logo'),
    ('NOVAERlogo',                       'Novaer — Zerocode client logo'),
    ('rhnube',                           'RH Nube — Zerocode client logo'),
    ('Katax',                            'Katax — Zerocode client logo'),
    ('The-Decision-Board',               'The Decision Board — Zerocode client logo'),
    ('TIVER-LOGO',                       'Tiver — Zerocode client logo'),
    ('TokGO-Logotipo',                   'Tok&GO — Zerocode client logo'),
    ('Xtrategia-Group',                  'Xtrategia Group — Zerocode client logo'),
    ('Sin-titulo-2',                     'Zerocode client logo'),
    ('image-8-1-1',                      'Zerocode client logo'),

    # Team photos
    ('Alejandro-Garcia',                 'Alejandro Garcia — Zerocode team member'),
    ('Manuel-Montes-de-Oca',             'Manuel Montes de Oca — Zerocode team member'),
    ('Sebastian',                        'Sebastian — Zerocode team member'),
    ('Pete',                             'Pete — Zerocode client'),
    ('Jaime-Solis',                      'Jaime Solis — Zerocode team member'),
    ('Felix-Mwita',                      'Felix Mwita — Zerocode team member'),
    ('Oscar',                            'Oscar — Zerocode team member'),
    ('David-Alcantara',                  'David Alcantara — Zerocode team member'),
    ('Jonathan',                         'Jonathan — Zerocode team member'),
    ('Obet',                             'Obet — Zerocode team member'),
    ('Untitled-2',                       'Zerocode team working on AI-assisted software development'),

    # Testimonial profile photos (hashed filenames)
    ('thumb_0x0_convert',                'Zerocode client testimonial photo'),

    # Portfolio screenshots — Alianza (mobile banking app)
    ('onboarding_app_movil',             'Alianza mobile banking app — onboarding screen built by Zerocode'),
    ('Splash-1-1',                       'Alianza mobile app — splash screen built by Zerocode'),
    ('inversiones',                      'Alianza mobile banking app — investments module built by Zerocode'),
    ('ahorro_main_page',                 'Alianza mobile banking app — savings main page built by Zerocode'),
    ('ahorro_de_nominaedit',             'Alianza mobile banking app — payroll savings screen built by Zerocode'),
    ('home_new',                         'Alianza mobile banking app — home screen built by Zerocode'),
    ('cdat_02',                          'Alianza mobile banking app — certificates of deposit screen built by Zerocode'),

    # Portfolio screenshots — BeautyConnect
    ('f3ff1d5b7be-18',                   'BeautyConnect beauty services marketplace — built by Zerocode'),
    ('f3ff1d5b7be-12',                   'BeautyConnect beauty services marketplace — app interface built by Zerocode'),
    ('f3ff1d5b7be-1-1',                  'BeautyConnect platform — service booking interface built by Zerocode'),
    ('f3ff1d5b7be-2-1',                  'BeautyConnect platform — provider dashboard built by Zerocode'),
    ('f3ff1d5b7be-3-1',                  'BeautyConnect platform — client-facing interface built by Zerocode'),

    # Portfolio screenshots — DecisionBoard
    ('35116a0e826-6',                    'DecisionBoard business intelligence platform — analytics dashboard built by Zerocode'),
    ('35116a0e826-1',                    'DecisionBoard business intelligence platform — main dashboard built by Zerocode'),
    ('35116a0e826-4',                    'DecisionBoard platform — data visualization built by Zerocode'),
    ('35116a0e826-5',                    'DecisionBoard platform — reporting module built by Zerocode'),
    ('DotWork-3rd',                      'DecisionBoard DotWork view — built by Zerocode'),
    ('DotWork-4th',                      'DecisionBoard DotWork analytics view — built by Zerocode'),
    ('DotWork-5th',                      'DecisionBoard DotWork reporting view — built by Zerocode'),
    ('DotWork-6th',                      'DecisionBoard DotWork dashboard — built by Zerocode'),
    ('Portada2',                         'Zerocode portfolio — custom digital system case study'),
    ('Portada',                          'DecisionBoard business intelligence platform — built by Zerocode'),

    # Portfolio screenshots — other
    ('Literlife',                        'Later Life Training digital education platform — built by Zerocode'),
    ('Daily-Sparkle',                    'Daily Sparkle digital content platform — built by Zerocode'),
    ('Mentor',                           'Mentor learning management platform — built by Zerocode'),
    ('f3ff1d5b7be-18',                   'Zerocode custom software development portfolio screenshot'),

    # General / misc
    ('image.png',                        'Zerocode AI-assisted software development'),
    ('banner-bg-01',                     ''),   # decorative background — keep empty
    ('sensmessage',                      ''),   # UI icon — decorative
]


def get_alt(src: str) -> str | None:
    """Return the appropriate alt text for a given src, or None to leave unchanged."""
    for fragment, alt in ALT_MAP:
        if fragment in src:
            return alt
    return None


def fix_img_alts(html: str) -> str:
    """Rewrite img tags: fill empty alt and replace filename-style alt values."""
    def replace_img(m):
        attrs = m.group(1)
        src_m = re.search(r'src=["\']([^"\']+)', attrs)
        if not src_m:
            return m.group(0)
        src = src_m.group(1)
        new_alt = get_alt(src)
        if new_alt is None:
            return m.group(0)  # no rule — leave unchanged

        alt_m = re.search(r'alt=["\'][^"\']*["\']', attrs)
        if alt_m:
            new_attrs = attrs[:alt_m.start()] + f'alt="{new_alt}"' + attrs[alt_m.end():]
        else:
            new_attrs = attrs + f' alt="{new_alt}"'
        return f'<img{new_attrs}>'

    return re.sub(r'<img([^>]*)>', replace_img, html)


def inject_h1(html: str, h1_text: str) -> str:
    """Inject a hidden H1 after <body> (idempotent)."""
    # Remove existing injection
    html = re.sub(
        r'<!-- #zc-h1-start -->.*?<!-- #zc-h1-end -->',
        '', html, flags=re.DOTALL
    )
    block = (
        f'{H1_MARKER_START}'
        f'<h1 style="{HIDDEN_H1_STYLE}">{h1_text}</h1>'
        f'{H1_MARKER_END}'
    )
    # Inject right after <body ...>
    html = re.sub(r'(<body[^>]*>)', r'\1\n' + block, html, count=1)
    return html


def process(path: str, h1: str):
    html = open(path, encoding='utf-8').read()
    html = inject_h1(html, h1)
    html = fix_img_alts(html)
    open(path, 'w', encoding='utf-8').write(html)


def main():
    updated = 0
    skipped = 0
    for rel_path, h1 in PAGE_H1.items():
        abs_path = rel_path.replace('/', os.sep)
        if not os.path.exists(abs_path):
            print(f'  SKIP (not found): {rel_path}')
            skipped += 1
            continue
        process(abs_path, h1)
        print(f'  OK: {rel_path}')
        updated += 1
    print(f'\nDone: {updated} pages updated, {skipped} skipped.')


if __name__ == '__main__':
    main()
