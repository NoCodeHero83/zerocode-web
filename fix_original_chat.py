import os, glob, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

OLD = 'class="elementor-element elementor-element-5030b56'
NEW = 'style="display:none!important" class="elementor-element elementor-element-5030b56'

root = r'D:\Zerocode\ALLCLAUDE\Web-Final'
files = glob.glob(os.path.join(root, '*.html'))

updated = 0
for path in sorted(files):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if OLD in content and 'display:none!important" class="elementor-element elementor-element-5030b56' not in content:
        new_content = content.replace(OLD, NEW, 1)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'OK: {os.path.basename(path)}')
        updated += 1

print(f'\nDone: {updated} files updated.')
