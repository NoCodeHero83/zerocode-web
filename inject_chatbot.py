import os, re, glob, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

SCRIPT_TAG = '<script src="/js/chatbot.js" defer></script>'
root = r'D:\Zerocode\ALLCLAUDE\Web-Final'
files = glob.glob(os.path.join(root, '*.html'))

updated = 0
skipped = 0
for path in sorted(files):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if SCRIPT_TAG in content:
        skipped += 1
        continue
    if '</body>' not in content:
        print(f'SKIP (no </body>): {os.path.basename(path)}')
        skipped += 1
        continue
    new_content = content.replace('</body>', SCRIPT_TAG + '\n</body>', 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'OK: {os.path.basename(path)}')
    updated += 1

print(f'\nDone: {updated} updated, {skipped} skipped.')
