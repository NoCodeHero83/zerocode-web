import glob, sys, os
sys.stdout.reconfigure(encoding='utf-8')
for path in glob.glob('**/*.html', recursive=True):
    path = path.replace('\\', '/').lstrip('./')
    try:
        html = open(path, encoding='utf-8').read()
    except:
        continue
    if 'chatbot.js' not in html:
        parts = path.split('/')
        is_mirror = len(parts) == 2 and parts[1] == 'index.html' and os.path.exists(parts[0] + '.html')
        if not is_mirror:
            print(path)
