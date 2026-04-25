#!/usr/bin/env python3
"""
fix_admin_scripts.py — Remove WordPress admin/editor scripts from static pages,
and fix the remaining missing JS path mappings.

Portfolio items were exported while logged into WordPress as admin,
so they contain Elementor editor and WordPress admin-bar scripts
that 404 on the static site and serve no purpose.
"""
import sys, os, re, glob
sys.stdout.reconfigure(encoding='utf-8')

# Additional short-name → full-name mappings missed in the first pass
EXTRA_JS_MAP = {
    '/js/jquery-numerator.min.js':
        '/js/elementor-assets-lib-jquery-numerator-jquery-numerator.min.js',
    '/js/sp-scripts.min.js':
        '/js/testimonial-free-src-Frontend-assets-js-sp-scripts.min.js',
}

# Script IDs to remove entirely (WordPress admin/editor scripts, not frontend-needed)
ADMIN_SCRIPT_IDS = {
    'elementor-web-cli-js',
    'react-js',
    'react-dom-js',
    'elementor-pro-notes-js',
    'elementor-pro-notes-app-initiator-js',
    'jquery-ui-mouse-js',
    'jquery-ui-draggable-js',
    'underscore-js',
    'backbone-js',
    'backbone-marionette-js',
    'backbone-radio-js',
    'elementor-common-modules-js',
    'elementor-dialog-js',
    'wp-api-request-js',
    'elementor-dev-tools-js',
    'elementor-common-js',
    'elementor-app-loader-js',
    'pa-admin-bar-js',
    'elementor-admin-bar-js',
    'hoverintent-js-js',
    'admin-bar-js',
}

# Remaining WordPress CDN absolute script URLs to remove entirely
WP_CDN_SCRIPT_PATTERNS = [
    r'<script[^>]+https://zerocode\.la/wp-includes/js/dist/vendor/react[^>]*>\s*</script>',
    r'<script[^>]+https://zerocode\.la/wp-includes/js/dist/vendor/react-dom[^>]*>\s*</script>',
    r'<script[^>]+https://zerocode\.la/wp-includes/js/jquery/ui/mouse[^>]*>\s*</script>',
    r'<script[^>]+https://zerocode\.la/wp-includes/js/jquery/ui/draggable[^>]*>\s*</script>',
    r'<script[^>]+https://zerocode\.la/wp-includes/js/underscore[^>]*>\s*</script>',
    r'<script[^>]+https://zerocode\.la/wp-includes/js/backbone[^>]*>\s*</script>',
    r'<script[^>]+https://zerocode\.la/wp-includes/js/api-request[^>]*>\s*</script>',
    r'<script[^>]+https://zerocode\.la/wp-includes/js/hoverintent[^>]*>\s*</script>',
    r'<script[^>]+https://zerocode\.la/wp-includes/js/admin-bar[^>]*>\s*</script>',
]

def remove_admin_scripts(html):
    for script_id in ADMIN_SCRIPT_IDS:
        # Match <script ... id="SCRIPT_ID" ...></script>  (single or double quotes)
        pattern = rf'<script[^>]+id=["\']{re.escape(script_id)}["\'][^>]*>\s*</script>\n?'
        html = re.sub(pattern, '', html)
    return html

def remove_cdn_scripts(html):
    for pattern in WP_CDN_SCRIPT_PATTERNS:
        html = re.sub(pattern, '', html)
    return html

def fix_file(path):
    try:
        html = open(path, encoding='utf-8').read()
    except Exception as e:
        print(f'  ERROR reading {path}: {e}')
        return False

    new_html = html

    # Apply extra JS path mappings
    for old, new in EXTRA_JS_MAP.items():
        new_html = new_html.replace(old, new)

    # Remove admin/editor script tags
    new_html = remove_admin_scripts(new_html)

    # Remove remaining WordPress CDN script URLs
    new_html = remove_cdn_scripts(new_html)

    if new_html != html:
        open(path, 'w', encoding='utf-8').write(new_html)
        return True
    return False

# Apply to all root HTML files
root_html = glob.glob('*.html')

updated = 0
for path in sorted(root_html):
    if fix_file(path):
        print(f'  Fixed: {path}')
        updated += 1

print(f'\nDone: {updated} files updated.')
