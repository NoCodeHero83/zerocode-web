import glob, sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

CHATBOT_TAG = '<script src="/js/chatbot.js?v=10" defer></script>'
OLD_CHATBOT = re.compile(r'<script[^>]+nocodeveloper\.com/chat\.js[^>]*>\s*</script>')

targets = [
    'es/index.html',
    'es/about-es/index.html',
    'es/contact-es/index.html',
    'es/funnel-es/index.html',
    'es/portfolio-es/index.html',
    'es/portfolio-es/later-life-training/index.html',
    'es/service-es/index.html',
    'portfolio/later-life-training/index.html',
]

for path in targets:
    try:
        html = open(path, encoding='utf-8').read()
    except Exception as e:
        print(f'  ERROR: {path}: {e}')
        continue
    new_html = html
    # Replace old chatbot if present
    new_html = OLD_CHATBOT.sub(CHATBOT_TAG, new_html)
    # If chatbot still not present, insert before </body>
    if 'chatbot.js' not in new_html:
        new_html = new_html.replace('</body>', CHATBOT_TAG + '\n</body>', 1)
    if new_html != html:
        open(path, 'w', encoding='utf-8').write(new_html)
        print(f'  Added chatbot: {path}')
    else:
        print(f'  Already had chatbot: {path}')
