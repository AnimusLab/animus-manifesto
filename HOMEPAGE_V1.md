# AnimusLab Homepage v1 — Final Structure

**Status:** Ready for Implementation

Based on CHARTER.md

---

## Section 1: Hero

### Content
```
AnimusLab

Building systems that remain truthful,
auditable, governable, and understandable
under scrutiny.

Independent research and engineering for
governance infrastructure.
```

### CTA
```
Read Our Research
View Systems
```

### Design Notes
- Mission only
- No product language
- No dashboards, no playgrounds
- Restrained, high-contrast typography

---

## Section 2: Why AnimusLab Exists

### Content
```
The Problem

Existing intelligent systems are becoming
more capable, but remain difficult to audit,
govern, and justify.

The dominant approach uses probabilistic safety
layers, confidence scores, and post-execution
monitoring—techniques that cannot survive
institutional scrutiny.

Our Position

AnimusLab exists to explore architectural
alternatives grounded in determinism,
auditability, and constitutional control.

We believe systems can be built differently.

This institution exists to prove it.
```

### Design Notes
- This is the thesis section
- Should be prominent, not buried
- No technical details
- Visitor should understand the problem before seeing solutions

---

## Section 3: Research

### Content
```
Latest Publication

Anchor:
Constitutional Governance Infrastructure
for Intelligent Systems

April 2026 | Zenodo | DOI: 10.5281/zenodo.anchor-preprint

100+ views | 70+ downloads | Published

View All Research →
```

### Design Notes
- Show the most recent publication with metrics
- Include publication date, venue, DOI
- Add download/view counts to show momentum
- Link to `/research` for complete archive
- Should feel academic, not marketing-focused

---

## Section 4: Core Principles

### Content
Display three key principles:

```
Truth Over Optics

If it cannot survive scrutiny,
it should not be displayed.

Semantics Before Representation

Representation is disposable.
Meaning is not.

Constraints Create Clarity

Freedom without constraints
produces noise.

View All Six Principles →
```

### Interaction
"View All Six Principles →" links to `/constitution` for full explanation.

### Design Notes
- Three principles preview on homepage (not all six)
- Each links to `/constitution` for deep dive
- Presented with authority but not overwhelming
- Simple layout with clear typography
- Establishes that principles are foundational

---

## Section 5: The Ecosystem

### Content
```
Foundational Research

ANIMUS
Explores how intelligent systems can reason
deterministically, transparently, and across domains.

Governance Infrastructure

Anchor
Deterministic governance and capability enforcement
for intelligent systems.

Observability Infrastructure

Shadow Watch
Trust verification and behavioral auditing
for autonomous systems.

View All Systems →
```

### Design Notes
- Three primary systems only
- Describe what each does (one sentence)
- Link to `/systems` for full ecosystem
- Everything else (FORGE, QuantGrid, QuantForge) lives on `/systems` page

---

## Section 6: Institutional Timeline

### Content
```
2025
AnimusLab Founded
Research and governance infrastructure initiative launched

2025
ANIMUS Research Begins
Foundational work on deterministic reasoning architectures

2026 Q1
Anchor Preprint Published
Constitutional Governance Infrastructure for Intelligent Systems
Zenodo | 100+ downloads

2026 Q2
Anchor v5.0 Released
Deterministic policy evaluation at 2.1ms

2026 Q2
Shadow Watch Prototype Completed
Behavioral verification and trust observability

2026 Q3
AnimusLab Web Presence
Institutional documentation and research archive

Current
Six Research Areas
Identity Systems | Governance | Capability Resolution | Control | Observability
```

### Design Notes
- Chronological institutional timeline (not git history)
- Shows momentum through 2025-2026
- Includes metrics where available (downloads, timing)
- Demonstrates research activity, not just releases
- Builds credibility through documented progress
- Shows breadth of work (not just Anchor)

---

## Section 7: Contact

### Content
```
Research Inquiries
contact@animuslab.dev

GitHub
github.com/AnimusLab

Follow
```

### Design Notes
- Minimal footer
- No forms, no popups
- Direct contact email
- GitHub link to repositories

---

## Navigation

```
AnimusLab

Research
Systems
Constitution
About
```

### Design Notes
- Top-level navigation is institutional, not product-focused
- No "Anchor" in main navigation (it's a product, not the institution)
- All pages are institution-focused
- "Constitution" is now visible in nav (leads to full six principles)

---

## Complete Information Hierarchy

```
animalslab.dev/

├── / (Home)
│   └── Hero
│   └── Why AnimusLab Exists
│   └── Research (Latest Publication)
│   └── Three Core Principles (Preview)
│   └── The Ecosystem
│   └── Timeline
│   └── Contact

├── /constitution
│   └── All Six Invariants (Full Text)
│   └── Implementation Evidence
│   └── How Principles Become Systems
│   └── (See ARCHITECTURE_PHASES.md for detail)

├── /systems
│   └── ANIMUS (Foundational Research)
│   └── Anchor (Governance Infrastructure)
│   └── Shadow Watch (Observability)
│   └── FORGE (Supporting Systems)
│   └── QuantGrid (Supporting Systems)
│   └── QuantForge (Supporting Systems)

├── /research
│   └── Publications
│   └── Research Notes
│   └── Lab Activity

└── /about
    └── Mission
    └── Thesis
    └── Research Areas
    └── Contact
```

---

## What This Homepage Accomplishes

When a visitor lands:

1. **They understand the mission** (Hero)
2. **They understand the problem** (Why AnimusLab Exists)
3. **They see credibility through research** (Latest Publication)
4. **They see core principles** (Three-principle preview)
5. **They understand the ecosystem** (Three primary systems)
6. **They see momentum** (Timeline with metrics)
7. **They can get in touch** (Contact)

At no point do they see:
- Product landing page language
- AST diagrams
- Playgrounds
- Dashboards
- "Get Started" CTAs
- Pricing

The homepage's job is to communicate institutional identity and credibility, not to sell a product.

---

## Key Changes From Original Structure

### Section Reordering
```
OLD: Hero → Why → Principles → Ecosystem → Research → Timeline
NEW: Hero → Why → Research → Principles → Ecosystem → Timeline
```
Research moved earlier because publications create authority.

### Principles Section
```
OLD: All six principles prominently displayed
NEW: Three principles as preview, with link to /constitution for full six
```
Reduces cognitive load, preserves depth.

### Timeline Enhancement
```
OLD: Simple chronological list
NEW: Rich timeline with metrics, descriptions, and breadth
```
Demonstrates momentum and institutional scope.

### Navigation Update
```
OLD: Constitution, Research, Systems, About
NEW: Research, Systems, Constitution, About
```
Emphasizes Research first (our credibility).

---

## Status

✓ Charter refined (CHARTER.md)
✓ Homepage structure revised (this document)
✓ Ready for implementation

Next: Begin Phase 2 (Homepage Implementation)
