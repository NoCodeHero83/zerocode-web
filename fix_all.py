import os, re, glob

html_files = glob.glob('**/*.html', recursive=True) + glob.glob('*.html')
html_files = list(set(html_files))

NEW_FAVICON = '<link rel="icon" href="/LOGO.png" />\n<link rel="apple-touch-icon" href="/LOGO.png" />'

TITLE_MAP = {
    '<title>zerocode &#8211; zerocode</title>': '<title>Zerocode</title>',
    '<title>Zerocode &#8211; Home</title>':     '<title>Zerocode</title>',
    '<title>About ES &#8211; Zerocode</title>': '<title>About &#8211; Zerocode</title>',
    '<title>Portfolio ES &#8211; Zerocode</title>': '<title>Portfolio &#8211; Zerocode</title>',
    '<title>Service ES &#8211; Zerocode</title>':   '<title>Services &#8211; Zerocode</title>',
    '<title>Funnel ES &#8211; Zerocode</title>':    "<title>Let's Talk &#8211; Zerocode</title>",
}

CONTACT_ES = {'contact-es.html', 'es/contact-es/index.html'}
LATER_LIFE_CONTACT = '<title>Later Life Training &#8211; Zerocode</title>'
HOME_PAGES = {'index.html', 'es/index.html', 'home-es.html'}

for path in sorted(html_files):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    orig = html
    norm = path.replace('\\', '/')

    # 1. Favicon
    fav_pattern = re.compile(
        r'<link rel=[\'"]icon[\'"]\s+href=["\'][^"\']*32x32[^"\']*["\'][^/]*/>\s*\n'
        r'\s*<link rel=[\'"]icon[\'"]\s+href=["\'][^"\']*192x192[^"\']*["\'][^/]*/>\s*\n'
        r'\s*<link rel=[\'"]apple-touch-icon[\'"]\s+href=["\'][^"\']*["\'][^/]*/>'
    )
    html = fav_pattern.sub(NEW_FAVICON, html)

    # 2. Titles - generic lowercase fix
    html = html.replace('&#8211; zerocode</title>', '&#8211; Zerocode</title>')

    # 2b. Specific title fixes
    for old, new in TITLE_MAP.items():
        if old in html:
            html = html.replace(old, new)

    # 2c. Contact ES wrong title
    if norm in CONTACT_ES:
        html = html.replace(LATER_LIFE_CONTACT, '<title>Contacto &#8211; Zerocode</title>')

    # 3. Manuel image (home pages only)
    if norm in HOME_PAGES:
        html = html.replace(
            'Manuel-Montes-de-Oca-e1773759437142-120x120.jpeg',
            'Manuel-Montes-de-Oca-e1773759437142.jpeg'
        )

    if html != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)
        print('Updated: ' + path)
    else:
        print('No change: ' + path)

print('\nDone.')
