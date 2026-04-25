import os, glob, sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

root = r'D:\Zerocode\ALLCLAUDE\Web-Final'
files = glob.glob(os.path.join(root, '*.html'))

pattern = re.compile(r'<script[^>]*nocodeveloper\.com/chat\.js[^>]*>\s*</script>|<script[^>]*nocodeveloper\.com/chat\.js[^>]*>')

updated = 0
for path in sorted(files):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'nocodeveloper.com' in content:
        new_content = pattern.sub('', content)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'OK: {os.path.basename(path)}')
        updated += 1

print(f'\nDone: {updated} files updated.')
