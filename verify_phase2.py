import sys, re
sys.stdout.reconfigure(encoding='utf-8')

for page in ['index.html', 'about/index.html', 'es/index.html', 'portfolio-item-alianza-en.html']:
    html = open(page, encoding='utf-8').read()
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', html)
    print(f'\n=== {page} ===')
    print(f'  H1: {h1.group(1) if h1 else "NOT FOUND"}')
    imgs = re.findall(r'<img([^>]*)>', html)
    print(f'  Images ({len(imgs)} total):')
    for a in imgs[:6]:
        src = re.search(r'src=["\']([^"\']+)', a)
        alt = re.search(r'alt=["\']([^"\']*)', a)
        if src:
            print(f'    src:{src.group(1)[-38:]:38s} alt="{alt.group(1) if alt else "MISSING"}"')
