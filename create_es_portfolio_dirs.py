#!/usr/bin/env python3
"""
Create directory-based Spanish portfolio item pages for Vercel routing.
Maps flat-file sources to the directory URLs expected by the portfolio index.
"""
import sys, os, shutil, re
sys.stdout.reconfigure(encoding='utf-8')

MAPPING = [
    ('portfolio-item-alianza-es.html',          'es/portfolio/alianza-capital-es',
     'https://zerocode.la/portfolio-item-alianza-es/',  'https://zerocode.la/es/portfolio/alianza-capital-es/'),
    ('portfolio-item-dailysparkle-es.html',      'es/portfolio/daily-sparkle-2',
     'https://zerocode.la/portfolio-item-dailysparkle-es/', 'https://zerocode.la/es/portfolio/daily-sparkle-2/'),
    ('portfolio-item-ecumerca-es.html',          'es/portfolio/ecumerca-es',
     'https://zerocode.la/portfolio-item-ecumerca-es/', 'https://zerocode.la/es/portfolio/ecumerca-es/'),
    ('portfolio-item-laterlifetraining-es.html', 'es/portfolio/later-life-training-2',
     'https://zerocode.la/portfolio-item-laterlifetraining-es/', 'https://zerocode.la/es/portfolio/later-life-training-2/'),
    ('portfolio-item-mentor-es.html',            'es/portfolio/mentor-growthrocsktar-es',
     'https://zerocode.la/portfolio-item-mentor-es/', 'https://zerocode.la/es/portfolio/mentor-growthrocsktar-es/'),
    ('portfolio-item-gmparts-es.html',           'es/portfolio/repuestos-gm-es',
     'https://zerocode.la/portfolio-item-gmparts-es/', 'https://zerocode.la/es/portfolio/repuestos-gm-es/'),
]

for src, dest_dir, old_url, new_url in MAPPING:
    if not os.path.exists(src):
        print(f'  SKIP (not found): {src}')
        continue

    html = open(src, encoding='utf-8').read()

    # Update canonical and hreflang es to the new directory URL
    html = html.replace(f'href="{old_url}"', f'href="{new_url}"')
    # Update og:url and twitter:url
    html = html.replace(f'content="{old_url}"', f'content="{new_url}"')

    os.makedirs(dest_dir, exist_ok=True)
    out_path = os.path.join(dest_dir, 'index.html')
    open(out_path, 'w', encoding='utf-8').write(html)
    print(f'  Created: {out_path}')

print('Done.')
