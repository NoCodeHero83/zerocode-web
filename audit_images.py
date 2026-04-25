import sys, re, os
sys.stdout.reconfigure(encoding='utf-8')

pages = [
    'index.html', 'about/index.html', 'service/index.html',
    'portfolio/index.html', 'contact/index.html',
    'es/index.html', 'es/about-es/index.html', 'es/service-es/index.html',
    'portfolio-item-alianza-en.html', 'portfolio-item-beautyconnect-en.html',
    'portfolio-item-decisionboard-en.html',
]

for p in pages:
    if not os.path.exists(p): continue
    html = open(p, encoding='utf-8').read()
    imgs = re.findall(r'<img([^>]*)>', html)
    print(f'\n=== {p} ===')
    for attrs in imgs:
        src = re.search(r'src=["\']([^"\']+)', attrs)
        alt = re.search(r'alt=["\']([^"\']*)', attrs)
        src_val = src.group(1) if src else 'NO-SRC'
        alt_val = alt.group(1) if alt else 'NO-ALT'
        if 'wp-content' in src_val or 'images/' in src_val or any(ext in src_val for ext in ['.jpg','.png','.webp','.svg','.gif']):
            print(f'  src: {src_val[-60:]:60s} | alt: "{alt_val}"')
