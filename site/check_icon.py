with open(r'D:\Zerocode\PROYECTOS\Web-Final\site\public\images\section-icon.png', 'rb') as f:
    header = f.read(8)
    print(f'Header bytes: {header.hex()}')
    print(f'First 4 bytes: {header[:4]}')
    print(f'Is valid PNG: {header[:4] == b"\x89PNG"}')
    f.seek(0)
    data = f.read()
    print(f'File size: {len(data)} bytes')
