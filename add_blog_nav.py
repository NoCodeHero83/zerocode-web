import sys, glob
sys.stdout.reconfigure(encoding='utf-8')

PORTFOLIO_LI     = '<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5396"><a href="/portfolio/" class="elementor-item">Portfolio</a></li>'
PORTFOLIO_LI_TAB = '<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5396"><a href="/portfolio/" class="elementor-item" tabindex="-1">Portfolio</a></li>'
BLOG_LI          = '<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-blog"><a href="/blog/" class="elementor-item">Blog</a></li>'
BLOG_LI_TAB      = '<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-blog"><a href="/blog/" class="elementor-item" tabindex="-1">Blog</a></li>'

updated = 0
skipped = 0
for path in glob.glob('**/*.html', recursive=True):
    path = path.replace('\\', '/')
    try:
        html = open(path, encoding='utf-8').read()
        if PORTFOLIO_LI not in html and PORTFOLIO_LI_TAB not in html:
            skipped += 1
            continue
        if BLOG_LI in html:
            skipped += 1
            continue
        html = html.replace(PORTFOLIO_LI, PORTFOLIO_LI + BLOG_LI)
        html = html.replace(PORTFOLIO_LI_TAB, PORTFOLIO_LI_TAB + BLOG_LI_TAB)
        open(path, 'w', encoding='utf-8').write(html)
        print(f'  Updated: {path}')
        updated += 1
    except Exception as e:
        print(f'  ERROR {path}: {e}')

print(f'Done: {updated} files updated, {skipped} skipped')
