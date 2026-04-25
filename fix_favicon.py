import glob, re

files = list(set(glob.glob('**/*.html', recursive=True) + glob.glob('*.html')))
NEW = '<link rel="icon" type="image/x-icon" href="/favicon.ico" />\n<link rel="apple-touch-icon" href="/LOGO.png" />'

changed = 0
for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    orig = html
    html = re.sub(
        r'<link rel=["\']icon["\'][^>]*/>\s*\n\s*<link rel=["\']apple-touch-icon["\'][^>]*/>',
        NEW, html
    )
    if html != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)
        changed += 1
        print('Updated:', path)

print(f'\nDone: {changed} files updated')
