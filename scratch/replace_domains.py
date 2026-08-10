import os

folders = [
    r'd:\animus-manifesto',
    r'd:\Anchor',
    r'd:\anchor-web'
]

replacements = {
    'anchor.animuslab.dev': 'anchor.animuslab.dev',
    'tan@anchor.animuslab.dev': 'tan@animuslab.dev',
    'animuslab.dev': 'animuslab.dev',
}

extensions = ('.py', '.tsx', '.ts', '.css', '.md', '.json', '.html', '.anchor', '.toml')

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        original = content
        replaced_any = False
        
        for search, replace in replacements.items():
            if search in content:
                content = content.replace(search, replace)
                replaced_any = True
        
        # General catch for any leftover .tech domains
        if 'anchor.animuslab.dev' in content or 'animuslab.dev' in content:
            # Done in specific replacements above
            pass
            
        if replaced_any and content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {filepath}")
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

for folder in folders:
    print(f"Scanning folder: {folder}")
    for root, dirs, files in os.walk(folder):
        # Skip node_modules, .git, .next, build, dist, venv, target
        if any(x in root for x in ['node_modules', '.git', '.next', 'build', 'dist', '.venv', 'target', '.pytest_cache']):
            continue
        for file in files:
            if file.endswith(extensions):
                process_file(os.path.join(root, file))

print("Domain replacement complete.")
