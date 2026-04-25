#!/usr/bin/env python3
"""
fix_js_paths.py — Fix broken JS script src paths in all root HTML files.

Root HTML files have short/wrong JS names from a prior conversion step:
  /js/page-transitions.min.js  (doesn't exist)
  → /js/elementor-pro-assets-js-page-transitions.min.js  (correct)

Also fixes remaining WordPress CDN jQuery URLs to local paths.
"""
import sys, os, re, glob
sys.stdout.reconfigure(encoding='utf-8')

# Simple src replacements (exact match on the src value)
SIMPLE_MAP = {
    '/js/page-transitions.min.js':   '/js/elementor-pro-assets-js-page-transitions.min.js',
    '/js/v4-shims.min.js':           '/js/elementor-assets-lib-font-awesome-js-v4-shims.min.js',
    '/js/jquery.bind-first-0.2.3.min.js': '/js/pixelyoursite-dist-scripts-jquery.bind-first-0.2.3.min.js',
    '/js/js.cookie-2.1.3.min.js':    '/js/pixelyoursite-dist-scripts-js.cookie-2.1.3.min.js',
    '/js/tld.min.js':                '/js/pixelyoursite-dist-scripts-tld.min.js',
    '/js/public.js':                 '/js/pixelyoursite-dist-scripts-public.js',
    '/js/instant-page.min.js':       '/js/elementor-pro-assets--lib-instant-page-instant-page.min.js',
    '/js/webpack.runtime.min.js':    '/js/elementor-assets-js-webpack.runtime.min.js',
    '/js/frontend-modules.min.js':   '/js/elementor-assets-js-frontend-modules.min.js',
    '/js/jquery.smartmenus.min.js':  '/js/elementor-pro-assets-lib-smartmenus-jquery.smartmenus.min.js',
    '/js/jquery.sticky.min.js':      '/js/elementor-pro-assets-lib-sticky-jquery.sticky.min.js',
    '/js/swiper.min.js':             '/js/elementor-assets-lib-swiper-v8-swiper.min.js',
    '/js/elements-handler.min.js':   '/js/premium-addons-for-elementor-assets-frontend-min-js-elements-handler.min.js',
    '/js/webpack-pro.runtime.min.js':'/js/elementor-pro-assets-js-webpack-pro.runtime.min.js',
    '/js/elements-handlers.min.js':  '/js/elementor-pro-assets-js-elements-handlers.min.js',
}

# WordPress CDN JS URL patterns → local paths
WP_CDN_MAP = [
    (r'https://zerocode\.la/wp-includes/js/jquery/jquery\.min\.js[^"\']*',
     '/js/wp-includes-js-jquery-jquery.min.js'),
    (r'https://zerocode\.la/wp-includes/js/jquery/jquery-migrate\.min\.js[^"\']*',
     '/js/wp-includes-js-jquery-jquery-migrate.min.js'),
    (r'https://zerocode\.la/wp-includes/js/jquery/ui/core\.min\.js[^"\']*',
     '/js/wp-includes-js-jquery-ui-core.min.js'),
    (r'https://zerocode\.la/wp-includes/js/dist/hooks\.min\.js[^"\']*',
     '/js/wp-includes-js-dist-hooks.min.js'),
    (r'https://zerocode\.la/wp-includes/js/dist/i18n\.min\.js[^"\']*',
     '/js/wp-includes-js-dist-i18n.min.js'),
    (r'https://zerocode\.la/wp-includes/js/imagesloaded\.min\.js[^"\']*',
     '/js/wp-includes-js-imagesloaded.min.js'),
]

def fix_frontend_js(html):
    """
    /js/frontend.min.js appears twice with different IDs:
      id="elementor-frontend-js"     → elementor-assets-js-frontend.min.js
      id="elementor-pro-frontend-js" → elementor-pro-assets-js-frontend.min.js
    """
    def _replace(m):
        tag = m.group(0)
        if 'id="elementor-pro-frontend-js"' in tag or "id='elementor-pro-frontend-js'" in tag:
            return tag.replace('/js/frontend.min.js', '/js/elementor-pro-assets-js-frontend.min.js')
        elif 'id="elementor-frontend-js"' in tag or "id='elementor-frontend-js'" in tag:
            return tag.replace('/js/frontend.min.js', '/js/elementor-assets-js-frontend.min.js')
        return tag  # fallback: don't change
    return re.sub(r'<script[^>]+/js/frontend\.min\.js[^>]*>', _replace, html)

def fix_file(path):
    try:
        html = open(path, encoding='utf-8').read()
    except Exception as e:
        print(f'  ERROR reading {path}: {e}')
        return False

    new_html = html

    # 1. Simple src replacements
    for old, new in SIMPLE_MAP.items():
        new_html = new_html.replace(old, new)

    # 2. frontend.min.js (context-sensitive)
    new_html = fix_frontend_js(new_html)

    # 3. WordPress CDN jQuery URLs
    for pattern, replacement in WP_CDN_MAP:
        new_html = re.sub(pattern, replacement, new_html)

    if new_html != html:
        open(path, 'w', encoding='utf-8').write(new_html)
        return True
    return False

# Target: all root HTML files (not subdirectories which are already correct)
root_html = glob.glob('*.html')

updated = 0
skipped = 0
for path in sorted(root_html):
    if fix_file(path):
        print(f'  Fixed: {path}')
        updated += 1
    else:
        skipped += 1

print(f'\nDone: {updated} files fixed, {skipped} already correct.')
