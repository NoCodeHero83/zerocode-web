#!/usr/bin/env python3
import sys, os, re, glob
sys.stdout.reconfigure(encoding='utf-8')

REPLACEMENTS = [
    # Exact phrase variants — most specific first
    ('payback typically within 4 to 6 months of launch',     'payback typically within 4 to 6 months of launch'),
    ('payback typically in 4–6 months after launch',             'payback typically in 4–6 months after launch'),
    ('payback typically in 4–6 months after launch',             'payback typically in 4–6 months after launch'),
    ('Payback typically in 4–6 months after launch',             'Payback typically in 4–6 months after launch'),
    ('Payback in 4–6 months after launch',                       'Payback in 4–6 months after launch'),
    ('Payback in 4–6 months after launch',                       'Payback in 4–6 months after launch'),
    ('within 4 to 6 months of launch',                        'within 4 to 6 months of launch'),
    ('within 4–6 months of launch',                           'within 4–6 months of launch'),
    ('within 4–6 months of launch',                           'within 4–6 months of launch'),
    ('in 4–6 months after launch',                               'in 4–6 months after launch'),
    ('in 4–6 months after launch',                               'in 4–6 months after launch'),
    ('4 to 6 months after launch',                               '4 to 6 months after launch'),
    ('4–6 months after launch',                                  '4–6 months after launch'),
    ('4–6 months after launch',                                  '4–6 months after launch'),
]

files = (
    glob.glob('**/*.html', recursive=True) +
    glob.glob('**/*.py',   recursive=True) +
    glob.glob('llms.txt') +
    glob.glob('js/*.js')
)

updated = 0
for path in files:
    try:
        text = open(path, encoding='utf-8').read()
    except Exception:
        continue
    new_text = text
    for old, new in REPLACEMENTS:
        new_text = new_text.replace(old, new)
    if new_text != text:
        open(path, 'w', encoding='utf-8').write(new_text)
        print(f'  Updated: {path}')
        updated += 1

print(f'\nDone: {updated} files updated.')
