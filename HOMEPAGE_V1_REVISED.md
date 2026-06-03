# AnimusLab Homepage v1 — Final Structure (Simplified)

**Status:** Ready for Implementation

Based on CHARTER.md

**Core Principle:** After 30 seconds, a visitor should understand:
1. What is AnimusLab? (An independent systems research institution)
2. Why does it exist? (Systems are hard to govern and audit)
3. What makes it different? (Six non-negotiable principles)
4. Has it built anything? (Yes: ANIMUS, Anchor, Shadow Watch)

Everything else is a second click.

---

## Section 1: Hero

### Content
```
AnimusLab

Building systems that remain truthful,
auditable, governable, and understandable
under scrutiny.

Built upon six non-negotiable principles.

Independent systems research and engineering institution
focused on reasoning, governance, and observability
for intelligent systems.
```

### CTA
```
Our Principles
Research Programs
```

### Design Notes
- Mission + principle foundation
- What is AnimusLab? (Establishes identity in 10 seconds)
- "Our Principles" → leads to `/constitution` (accessible language)
- No product language, no jargon
- Restrained, high-contrast typography

---yes

## Section 2: Why AnimusLab Exists

### Content
```
The Problem

Existing intelligent systems are becoming
more capable, but remain difficult to audit,
govern, and justify.

The dominant approach uses probabilistic safety
layers and confidence scores—techniques that
cannot survive institutional scrutiny.

Our Position

AnimusLab exists to explore architectural
alternatives grounded in determinism,
auditability, and control.

We believe systems can be built differently.
```

### Design Notes
- Why does it exist? (The problem it solves)
- Should be prominent, not buried
- No technical jargon
- Visitor should understand the thesis clearly

---

## Section 3: Three Foundational Principles

### Content
Display three key principles:

```
Three Foundational Principles

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
"View All Six Principles →" links to `/constitution`.

### Design Notes
- Three principles (not six)
- Reduces cognitive load
- Each links to `/constitution` for full depth
- Establishes that principles are foundational
- What makes it different? (Answers in 30 seconds)

---

## Section 4: Research Areas

### Content
```
Research Areas

Reasoning Systems

Deterministic reasoning, symbolic verification,
and domain-agnostic cognition.

Governance Systems

Capability resolution and institutional auditability
for intelligent systems.

Observability Systems

Behavioral verification and observability architecture
for autonomous systems.

View All Programs →
```

### Design Notes
- Three research areas with multiple implementations each
- "Areas" conveys ongoing inquiry, not finished projects
- Equal prominence across all three
- Link to `/programs` shows ANIMUS, Anchor, Shadow Watch, FORGE, QuantGrid, QuantForge as implementations
- Presented with authority, not justification

---

## Section 5: Publications & Research

### Content
```
Publications & Research

Truth Over Optics
A Preprint on Deterministic Evaluation and Auditability

Published April 2026
Zenodo Archive →
```

### Design Notes
- Link to publication without download metrics (those belong on /research page)
- Show one recent publication by title
- Date establishes active research
- Link to full research archive
- Metrics moved to /research page (researchers care, homepage visitors don't)
- No marketing language ("breakthrough", "latest", etc)

---

## Section 6: Institutional Progress

### Content
```
Active Research Organization

2025
AnimusLab Founded
Independent research and systems engineering initiative launched

2025
ANIMUS Research Begins
Foundational work on deterministic reasoning architectures

2026 Q1
Anchor Preprint Published
Constitutional Governance Infrastructure for Intelligent Systems

2026 Q2
Anchor v5.0 Released
Deterministic governance at 2.1ms

2026 Q2
Shadow Watch Prototype Completed
Behavioral verification and trust architecture

Current
Three Research Programs
ANIMUS | Anchor | Shadow Watch actively developed
```

### Design Notes
- Shows momentum and active development
- Demonstrates research scope
- Uses metrics where available
- Builds credibility through documented progress
- "Progress" not "Timeline" (institutional, not corporate history)

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
- Direct contact, no forms
- Link to repositories

---

## Navigation

```
AnimusLab

Research
Programs
Constitution
About
```

### Design Notes
- "Research" first (institutional credibility)
- "Programs" not "Systems" (sounds institutional)
- "Constitution" leads to full six principles + implementation
- All pages institutional focus

---

## Complete Information Hierarchy

```
animalslab.dev/

├── / (Home)
│   └── Hero (What is AnimusLab? - with Constitution intro)
│   └── Why AnimusLab Exists (Why?)
│   └── Three Foundational Principles (What makes it different?)
│   └── Research Programs (Has it built anything?)
│   └── Publications & Research (Proof)
│   └── Institutional Progress (Momentum)
│   └── Contact

├── /constitution
│   └── All Six Invariants (Full Text)
│   └── Implementation Evidence
│   └── How Principles Become Software
│   └── Examples from ANIMUS, Anchor, Shadow Watch

├── /programs
│   └── ANIMUS (Foundational Research)
│   └── Anchor (Governance Infrastructure)
│   └── Shadow Watch (Observability)
│   └── FORGE, QuantGrid, QuantForge (Supporting)

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

## The 30-Second Understanding

When a visitor lands:

**Seconds 0-5:**
```
AnimusLab

Building systems that remain truthful,
auditable, governable, and understandable
under scrutiny.

Built upon six non-negotiable principles.
```
→ "It's institutional. It's principled."

**Seconds 5-10:**
```
Truth Over Optics
Semantics Before Representation
Constraints Create Clarity
```
→ "There's a real philosophy here."

**Seconds 10-20:**
```
ANIMUS | Anchor | Shadow Watch
```
→ "And they've built things."

**Seconds 20-30:**
```
Published Preprint
106 views | 76 downloads
```
→ "It's credible."

**Visitor decision:** "Tell me more" → `/constitution` or `/programs`

---

## What This Homepage Does NOT Show

❌ AST diagrams
❌ Capability resolution details
❌ Observability architecture
❌ Identity systems research
❌ Playgrounds
❌ Dashboards
❌ Technical traces
❌ "Get Started" CTAs

Those belong on deeper pages.

---

## Critical Point: The Constitution Page

The `/constitution` page is now the unique asset.

It should show:

```
PRINCIPLE 1: Truth Over Optics

Where It Appears:

Anchor
- Deterministic policy evaluation
- [Link to Anchor docs]

ANIMUS
- Symbolic verification
- [Link to ANIMUS research]

Shadow Watch
- Verifiable telemetry
- [Link to Shadow Watch docs]
```

That page is impossible to copy.

Anyone can build a product.

Very few can articulate principles and show exactly how they become software.

---

## Status

✓ Charter finalized (CHARTER.md)
✓ Homepage finalized for implementation (this document)
✓ Six strategic refinements applied:
  - "Our Principles" CTA instead of "Read Constitution" (accessible language)
  - Removed "Has It Built Anything?" heading (institutional authority)
  - ANIMUS elevated with institutional weight (foundational research)
  - "Research Areas" instead of "Research Programs" (inquiry vs. projects)
  - Metrics moved to /research page (researchers care, not homepage visitors)
  - Enhanced institution tagline with scope descriptor (reasoning, governance, observability)
✓ Ready for Phase 2 implementation (Homepage Code)

Next: Begin Phase 2 (Homepage Implementation in Next.js) OR Phase 3 (/constitution - recommended)
