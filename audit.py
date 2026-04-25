#!/usr/bin/env python3
"""
audit.py — Complete site audit for zerocode.la
Run from the project root: python audit.py

Checks every HTML file for:
  1.  WordPress CDN URLs (broken on Vercel)
  2.  Absolute internal URLs that should be root-relative
  3.  Missing local CSS / JS / image files (404 in prod)
  4.  Missing chatbot.js
  5.  SEO completeness (title, description, canonical, og:*, twitter:*)
  6.  H1 tag presence
  7.  Images missing alt attributes
  8.  Images with empty alt attributes (non-decorative)
  9.  Duplicate page titles across the site
  10. Missing hreflang tags
  11. Inline WordPress API / admin-ajax URLs in JS (won't work on Vercel)
  12. Large inline base64 blobs (flag for review)
  13. Broken internal href links (points to non-existent page)
"""
import sys, os, re, glob
sys.stdout.reconfigure(encoding='utf-8')

# ── Colours ───────────────────────────────────────────────────────────────────
RED    = '\033[91m'
YELLOW = '\033[93m'
GREEN  = '\033[92m'
CYAN   = '\033[96m'
BOLD   = '\033[1m'
RESET  = '\033[0m'

# ── Asset inventories ─────────────────────────────────────────────────────────
def build_inventory():
    images   = set()
    css_set  = set()
    js_set   = set()
    fonts    = set()
    pages    = set()   # all HTML pages (root-relative path)

    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']
        for f in files:
            full = os.path.join(root, f)
            rel  = full.replace('\\', '/').lstrip('./')
            if f.endswith('.html'):
                pages.add('/' + rel.rstrip('/index.html').lstrip('/') or '/')
                pages.add('/' + rel)   # also accept /path/index.html
            elif rel.startswith('images/'):
                images.add('/' + rel)
                images.add('/images/' + f)   # by basename too
            elif rel.startswith('css/'):
                css_set.add('/' + rel)
                css_set.add('/css/' + f)
            elif rel.startswith('js/'):
                js_set.add('/' + rel)
                js_set.add('/js/' + f)
            elif rel.startswith('fonts/'):
                fonts.add('/' + rel)
                fonts.add('/fonts/' + f)

    # Add clean-URL equivalents
    extra = set()
    for p in pages:
        if p.endswith('/index.html'):
            extra.add(p[:-len('index.html')])
            extra.add(p[:-len('/index.html')])
    pages |= extra

    return images, css_set, js_set, fonts, pages


IMAGES, CSS_FILES, JS_FILES, FONT_FILES, PAGES = build_inventory()

# ── Helpers ───────────────────────────────────────────────────────────────────
def find_all_html():
    files = []
    for root, dirs, fs in os.walk('.'):
        dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']
        for f in fs:
            if f.endswith('.html'):
                full = os.path.join(root, f).replace('\\', '/')
                files.append(full.lstrip('./'))
    return sorted(files)

def asset_exists(path, images, css_set, js_set, fonts):
    """Return True if a local asset path exists in the inventory."""
    # Strip query string
    clean = path.split('?')[0]
    if '/images/' in clean:
        return clean in images
    if '/css/' in clean:
        return clean in css_set
    if '/js/' in clean:
        return clean in js_set
    if '/fonts/' in clean:
        return clean in fonts
    return True   # unknown type — don't flag

# ── Issue collector ───────────────────────────────────────────────────────────
class Issue:
    def __init__(self, level, code, file, detail):
        self.level  = level   # 'ERROR' | 'WARN' | 'INFO'
        self.code   = code
        self.file   = file
        self.detail = detail

issues = []

def err(code, f, detail):   issues.append(Issue('ERROR', code, f, detail))
def warn(code, f, detail):  issues.append(Issue('WARN',  code, f, detail))
def info(code, f, detail):  issues.append(Issue('INFO',  code, f, detail))

# ── Per-file checks ───────────────────────────────────────────────────────────
all_titles = {}   # title → [files] for duplicate detection

def audit_file(path):
    try:
        html = open(path, encoding='utf-8').read()
    except Exception as e:
        err('READ_ERROR', path, str(e))
        return

    head_end   = html.find('</head>')
    head       = html[:head_end] if head_end > 0 else html[:5000]
    body_start = html.find('<body')
    body       = html[body_start:] if body_start > 0 else html

    # 1. WordPress CDN URLs (should all be local by now)
    wp_images = re.findall(r'https://zerocode\.la/wp-content/uploads/[^\s"\'<>]+', html)
    wp_css    = re.findall(r'href=["\']https://zerocode\.la/wp-content/[^"\']+\.css[^"\']*["\']', html)
    wp_js     = re.findall(r'src=["\']https://zerocode\.la/wp-content/[^"\']+\.js[^"\']*["\']', html)
    if wp_images: err('WP_IMAGE_URL',  path, f'{len(wp_images)} WordPress CDN image URL(s) — e.g. {wp_images[0][:70]}')
    if wp_css:    err('WP_CSS_URL',    path, f'{len(wp_css)} WordPress CDN CSS link(s)')
    if wp_js:     err('WP_JS_URL',     path, f'{len(wp_js)} WordPress CDN JS script(s)')

    # 2. Absolute internal URLs in <a href> (should be root-relative)
    abs_hrefs = re.findall(r'<a[^>]+href=["\']https://zerocode\.la(/[^"\']*)["\']', html)
    # Exclude wp-admin (normal WP export artifact) and empty paths
    abs_hrefs = [h for h in abs_hrefs if h and not h.startswith('/wp-admin')]
    if abs_hrefs:
        warn('ABS_INTERNAL_HREF', path,
             f'{len(abs_hrefs)} internal <a href> still absolute — e.g. https://zerocode.la{abs_hrefs[0]}')

    # 3. Missing local assets (CSS / JS / images referenced but not found)
    css_hrefs = re.findall(r"href=['\"](/css/[^'\"?]+)['\"]", html)
    for href in css_hrefs:
        if not asset_exists(href, IMAGES, CSS_FILES, JS_FILES, FONT_FILES):
            err('MISSING_CSS', path, f'CSS file not found: {href}')

    js_srcs = re.findall(r"src=['\"](/js/[^'\"?]+)['\"]", html)
    for src in js_srcs:
        if not asset_exists(src, IMAGES, CSS_FILES, JS_FILES, FONT_FILES):
            err('MISSING_JS', path, f'JS file not found: {src}')

    img_srcs = re.findall(r"src=['\"](/images/[^'\"?]+)['\"]", html)
    for src in img_srcs:
        if not asset_exists(src, IMAGES, CSS_FILES, JS_FILES, FONT_FILES):
            err('MISSING_IMAGE', path, f'Image not found: {src}')

    font_srcs = re.findall(r"(?:href|src)=['\"](/fonts/[^'\"?]+)['\"]", html)
    for src in font_srcs:
        if not asset_exists(src, IMAGES, CSS_FILES, JS_FILES, FONT_FILES):
            err('MISSING_FONT', path, f'Font file not found: {src}')

    # 4. Chatbot script — skip for 1-level subdir mirrors (root file takes priority in Vercel)
    # e.g. about/index.html is a mirror when about.html exists at root
    _parts = path.split('/')
    _is_mirror = (len(_parts) == 2 and _parts[1] == 'index.html'
                  and os.path.exists(_parts[0] + '.html'))
    if 'chatbot.js' not in html and not _is_mirror:
        warn('NO_CHATBOT', path, 'chatbot.js not loaded on this page')
    elif 'chatbot.js' in html:
        # Check it's the latest version
        ver_match = re.search(r'chatbot\.js\?v=(\d+)', html)
        if ver_match and int(ver_match.group(1)) < 10:
            warn('OLD_CHATBOT', path, f'chatbot.js is v{ver_match.group(1)} — latest is v10')

    # 5. SEO completeness
    title_m = re.search(r'<title>(.*?)</title>', head, re.DOTALL)
    if not title_m:
        err('NO_TITLE', path, 'Missing <title> tag')
    else:
        title = title_m.group(1).strip()
        if len(title) < 10:
            warn('SHORT_TITLE', path, f'Title too short ({len(title)} chars): "{title}"')
        if len(title) > 70:
            warn('LONG_TITLE', path, f'Title over 70 chars ({len(title)}): "{title[:60]}..."')
        # Duplicate detection
        all_titles.setdefault(title, []).append(path)

    if not re.search(r'<meta name=["\']description["\']', head):
        err('NO_META_DESC', path, 'Missing meta description')
    else:
        desc_m = re.search(r'<meta name=["\']description["\'][^>]+content=["\']([^"\']+)', head)
        if desc_m:
            desc = desc_m.group(1)
            if len(desc) < 50:
                warn('SHORT_DESC', path, f'Meta description too short ({len(desc)} chars)')
            if len(desc) > 160:
                warn('LONG_DESC', path, f'Meta description over 160 chars ({len(desc)})')

    if not re.search(r'<link[^>]+rel=["\']canonical["\']', head):
        warn('NO_CANONICAL', path, 'Missing canonical link')

    if not re.search(r'property=["\']og:title["\']', head):
        warn('NO_OG_TITLE', path, 'Missing og:title')

    if not re.search(r'property=["\']og:description["\']', head):
        warn('NO_OG_DESC', path, 'Missing og:description')

    if not re.search(r'property=["\']og:image["\']', head):
        warn('NO_OG_IMAGE', path, 'Missing og:image')

    if not re.search(r'name=["\']twitter:card["\']', head):
        warn('NO_TWITTER_CARD', path, 'Missing twitter:card')

    # 6. H1 presence
    h1_in_head_marker = 'zc-h1-start' in html
    h1_in_body = bool(re.search(r'<h1[^>]*>', body))
    if not h1_in_head_marker and not h1_in_body:
        warn('NO_H1', path, 'No H1 tag found (neither injected nor inline)')

    # 7 & 8. Image alt attributes
    img_tags = re.findall(r'<img[^>]+>', body)
    missing_alt = 0
    empty_alt   = 0
    for tag in img_tags:
        if 'alt=' not in tag:
            missing_alt += 1
        else:
            alt_m = re.search(r'alt=["\']([^"\']*)["\']', tag)
            if alt_m and alt_m.group(1).strip() == '':
                # Check if it's truly decorative (tiny size / icon)
                is_icon = bool(re.search(r'width=["\'](\d+)["\']', tag) and
                               int((re.search(r'width=["\'](\d+)["\']', tag) or type('',(),{'group':lambda s,i:50})).group(1) or 50) < 20)
                if not is_icon:
                    empty_alt += 1
    if missing_alt:
        warn('IMG_NO_ALT',    path, f'{missing_alt} <img> tag(s) missing alt attribute')
    if empty_alt:
        info('IMG_EMPTY_ALT', path, f'{empty_alt} non-icon <img> tag(s) have empty alt=""')

    # 9. Hreflang
    if 'hreflang' not in head:
        warn('NO_HREFLANG', path, 'No hreflang link tags found')

    # 10. WordPress admin-ajax or wp-json in inline JS (fail silently on Vercel — INFO not WARN)
    ajax_refs = re.findall(r'(?:admin-ajax\.php|wp-json)[^\s"\'<>]{0,60}', html)
    if ajax_refs:
        info('WP_AJAX_REF', path,
             f'{len(ajax_refs)} WP plugin API call(s) — fail silently on static site (expected)')

    # 11. Broken internal href links (relative paths)
    internal_hrefs = re.findall(r'<a[^>]+href=["\'](/[^"\'#?][^"\']*)["\']', html)
    for href in internal_hrefs:
        clean = href.split('?')[0].split('#')[0]
        # Skip known external-ish patterns
        if clean.startswith('/wp-') or clean.startswith('/feed') or clean.startswith('/api'):
            continue
        # Normalise trailing slash
        check = clean.rstrip('/')
        if check and check not in PAGES and (check + '/') not in PAGES and (check + '/index.html') not in PAGES:
            # Might be a clean URL — do a looser check
            basename = clean.strip('/')
            if not any(basename in p for p in PAGES):
                info('BROKEN_HREF', path, f'Internal link may not resolve: {href}')

    # 12. Large inline base64 blobs (anything > 5 KB inline)
    b64_blobs = re.findall(r'base64,[A-Za-z0-9+/]{5000,}', html)
    if b64_blobs:
        info('LARGE_B64', path,
             f'{len(b64_blobs)} large inline base64 blob(s) — consider moving to /images/')


# ── Run audit ─────────────────────────────────────────────────────────────────
print(f'\n{BOLD}{CYAN}=== ZEROCODE.LA SITE AUDIT ==={RESET}')
html_files = find_all_html()
print(f'Scanning {len(html_files)} HTML files...\n')

for f in html_files:
    audit_file(f)

# 9b. Duplicate titles — skip pairs where all duplicates share the same canonical URL
def _get_canonical(path):
    try:
        html = open(path, encoding='utf-8').read()
        m = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)', html)
        if not m:
            m = re.search(r'<link[^>]+href=["\']([^"\']+)["\'][^>]+rel=["\']canonical["\']', html)
        return m.group(1).rstrip('/') if m else None
    except Exception:
        return None

def _is_1level_mirror(path):
    parts = path.split('/')
    return (len(parts) == 2 and parts[1] == 'index.html'
            and os.path.exists(parts[0] + '.html'))

for title, files in all_titles.items():
    non_mirror = [f for f in files if not _is_1level_mirror(f)]
    if len(non_mirror) > 1:
        # Skip if all files share the same canonical (bilingual route mirrors)
        canonicals = set(_get_canonical(f) for f in non_mirror if _get_canonical(f))
        if len(canonicals) <= 1 and canonicals:
            continue
        warn('DUP_TITLE', non_mirror[0], f'Title used on {len(non_mirror)} pages: "{title[:60]}"')

# ── Report ────────────────────────────────────────────────────────────────────
errors   = [i for i in issues if i.level == 'ERROR']
warnings = [i for i in issues if i.level == 'WARN']
infos    = [i for i in issues if i.level == 'INFO']

LEVEL_COLOUR = {'ERROR': RED, 'WARN': YELLOW, 'INFO': CYAN}

def print_group(label, items, colour):
    if not items:
        return
    print(f'{BOLD}{colour}── {label} ({len(items)}) ──{RESET}')
    # Group by code
    by_code = {}
    for i in items:
        by_code.setdefault(i.code, []).append(i)

    for code, group in sorted(by_code.items()):
        print(f'  {colour}{code}{RESET} ({len(group)} occurrence{"s" if len(group)>1 else ""})')
        for issue in group[:6]:    # show up to 6 examples per code
            fname = issue.file[:60]
            detail = issue.detail[:100]
            print(f'    {fname}')
            print(f'      → {detail}')
        if len(group) > 6:
            print(f'    ... and {len(group)-6} more')
    print()

print_group('ERRORS',   errors,   RED)
print_group('WARNINGS', warnings, YELLOW)
print_group('INFO',     infos,    CYAN)

# ── Summary ───────────────────────────────────────────────────────────────────
print(f'{BOLD}=== SUMMARY ==={RESET}')
print(f'  Files scanned : {len(html_files)}')
print(f'  {RED}Errors  : {len(errors)}{RESET}')
print(f'  {YELLOW}Warnings: {len(warnings)}{RESET}')
print(f'  {CYAN}Info    : {len(infos)}{RESET}')
print()

if not errors and not warnings:
    print(f'{GREEN}{BOLD}✓  Site is clean — no errors or warnings.{RESET}\n')
elif not errors:
    print(f'{YELLOW}No errors, but {len(warnings)} warning(s) to review.{RESET}\n')
else:
    print(f'{RED}Fix {len(errors)} error(s) before deploying.{RESET}\n')
