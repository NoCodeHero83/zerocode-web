import os, glob, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

OLD = '<script src="/js/chatbot.js" defer></script>'
NEW = '<script src="/js/chatbot.js?v=2" defer></script>'

root = r'D:\Zerocode\ALLCLAUDE\Web-Final'
files = glob.glob(os.path.join(root, '*.html'))

updated = 0
for path in sorted(files):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if OLD in content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content.replace(OLD, NEW))
        print(f'OK: {os.path.basename(path)}')
        updated += 1

print(f'\nDone: {updated} updated.')
