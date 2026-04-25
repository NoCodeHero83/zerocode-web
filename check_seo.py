import re, sys, glob
sys.stdout.reconfigure(encoding='utf-8')
for path in sorted(glob.glob('**/*.html', recursive=True)):
    path = path.replace('\\', '/')
    try:
        html = open(path, encoding='utf-8').read()
    except:
        continue
    head_end = html.find('</head>')
    head = html[:head_end] if head_end > 0 else html[:5000]
    title_m = re.search(r'<title>(.*?)</title>', head, re.DOTALL)
    if title_m:
        t = title_m.group(1).strip()
        if len(t) > 70:
            print(f'TITLE {len(t):3d}: [{path}]')
            print(f'       {t}')
    desc_m = re.search(r"<meta name=[\"']description[\"'][^>]+content=[\"']([^\"']+)", head)
    if desc_m:
        d = desc_m.group(1)
        if len(d) > 160:
            print(f'DESC  {len(d):3d}: [{path}]')
            print(f'       {d[:120]}...')
