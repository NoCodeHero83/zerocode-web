#!/usr/bin/env python3
"""
fix_adminbar.py — Remove the WordPress admin bar div from static HTML files.

The admin bar was included when pages were exported while logged into WordPress
as admin. It contains wp-admin links and is not needed on the static site.
"""
import sys, re, glob
sys.stdout.reconfigure(encoding='utf-8')

def remove_adminbar(html):
    """Remove <div id="wpadminbar"...>...</div> including all nested divs."""
    marker = 'id="wpadminbar"'
    while marker in html:
        div_start = html.rfind('<div', 0, html.find(marker))
        if div_start < 0:
            break
        depth = 0
        end = div_start
        for i in range(div_start, len(html)):
            if html[i:i+4] == '<div':
                depth += 1
            elif html[i:i+6] == '</div>':
                depth -= 1
                if depth == 0:
                    end = i + 6
                    break
        html = html[:div_start] + html[end:]
    return html

updated = 0
for path in sorted(glob.glob('*.html')):
    try:
        html = open(path, encoding='utf-8').read()
    except Exception:
        continue
    if 'id="wpadminbar"' not in html:
        continue
    new_html = remove_adminbar(html)
    open(path, 'w', encoding='utf-8').write(new_html)
    print(f'  Removed admin bar from: {path}')
    updated += 1

print(f'\nDone: {updated} files cleaned.')
