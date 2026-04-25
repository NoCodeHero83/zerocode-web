import re, sys, glob
sys.stdout.reconfigure(encoding='utf-8')
target = 'Caso Later Life Training'
for path in glob.glob('**/*.html', recursive=True):
    path = path.replace('\\', '/')
    try:
        html = open(path, encoding='utf-8').read()
        m = re.search(r'<title>(.*?)</title>', html, re.DOTALL)
        if m and target in m.group(1):
            print(f'{path}: {m.group(1)[:80]}')
    except: pass
