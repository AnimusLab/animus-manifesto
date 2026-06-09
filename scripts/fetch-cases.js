const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const tempDir = path.join(process.cwd(), 'temp-cases');
const destDir = path.join(process.cwd(), 'content', 'cases');

// Ensure destination exists
if (fs.existsSync(destDir)) {
  fs.rmSync(destDir, { recursive: true, force: true });
}
fs.mkdirSync(destDir, { recursive: true });

try {
  const localRepo = 'D:\\animuslab-case-studies';
  if (fs.existsSync(localRepo)) {
    console.log('Using local case studies repository:', localRepo);
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    fs.cpSync(localRepo, tempDir, { recursive: true });
  } else {
    console.log('Cloning case studies repository...');
    execSync('git clone --depth 1 https://github.com/AnimusLab/animuslab-case-studies.git temp-cases', { stdio: 'inherit' });
  }

  // Map case studies from the cloned repository
  const casesMap = [
    {
      src: 'anchor/001-authority-overreach/README.md',
      dest: '001-authority-overreach.md',
      frontmatter: {
        id: 'C-001',
        title: 'Case Study 001: Authority Overreach Prevention',
        date: '2026-06-08',
        category: 'Case Study',
        tags: ['Runtime Enforcement', 'Incident Analysis', 'Privilege Isolation', 'Financial Systems'],
        excerpt: 'A detailed forensic and architectural incident analysis of the Knight Capital Group (2012) software deployment failure, illustrating how Anchor\'s runtime policy interception blocks unauthorized module execution before action occurs.'
      }
    },
    {
      src: 'anchor/002-policy-drift/README.md',
      dest: '002-policy-drift.md',
      frontmatter: {
        id: 'C-002',
        title: 'Case Study 002: Policy Drift Management',
        date: '2026-06-08',
        category: 'Case Study',
        tags: ['Policy Drift', 'Model Validation', 'Runtime Containment', 'Version Control'],
        excerpt: 'An analysis of how system behaviors drift over time due to model fine-tuning or underlying context window shifts, and how Anchor\'s multi-lingual policy definitions maintain constant regulatory guardrails.'
      }
    },
    {
      src: 'anchor/003-audit-reconstruction/README.md',
      dest: '003-audit-reconstruction.md',
      frontmatter: {
        id: 'C-003',
        title: 'Case Study 003: Audit Reconstruction',
        date: '2026-06-08',
        category: 'Case Study',
        tags: ['Forensic Auditing', 'Cryptographic Ledgers', 'Decision Trace', 'Telemetry'],
        excerpt: 'A deep dive into reconstructing historical decision paths and auditing system state changes using Anchor\'s immutable Decision Audit Chain and forensic telemetry.'
      }
    }
  ];

  for (const item of casesMap) {
    const srcPath = path.join(tempDir, item.src);
    if (fs.existsSync(srcPath)) {
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // Inject frontmatter
      const fmString = `---\nid: ${item.frontmatter.id}\ntitle: "${item.frontmatter.title}"\ndate: ${item.frontmatter.date}\ncategory: "${item.frontmatter.category}"\ntags:\n${item.frontmatter.tags.map(t => `  - ${t}`).join('\n')}\nexcerpt: "${item.frontmatter.excerpt}"\n---\n\n`;
      
      // If the file already has frontmatter (starts with ---), strip it first
      if (content.startsWith('---')) {
        const parts = content.split('---');
        if (parts.length >= 3) {
          content = parts.slice(2).join('---').trim();
        }
      }

      fs.writeFileSync(path.join(destDir, item.dest), fmString + content, 'utf8');
      console.log(`Synchronized: ${item.dest}`);
    } else {
      console.warn(`File not found: ${srcPath}`);
    }
  }
} catch (error) {
  console.error('Error synchronizing case studies:', error);
} finally {
  // Clean up temp directory
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}
