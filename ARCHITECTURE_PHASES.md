# AnimusLab Information Architecture — Six Phases

## Overview
This document defines the information architecture hierarchy before any UI implementation.

The principle: **Clarity First, Design Second**

---

## PHASE 1: Define The Institution

### Objective
When a visitor lands on `animalslab.dev`, they understand what AnimusLab is before they understand what any single product is.

### Homepage Structure

```
Section 1: Hero
Section 2: Core Thesis (Why AnimusLab Exists)
Section 3: The Six Invariants (Centerpiece)
Section 4: Systems Ecosystem
Section 5: Publications & Research
Section 6: Timeline & Authority
Section 7: Contact
```

### Homepage Content Requirements

#### Hero
```
Headline:
Building Constitutional Infrastructure
for Intelligent Systems

Subtext:
AnimusLab is an independent research and engineering institution
focused on identity, governance, observability, and control systems
for autonomous software.

CTAs:
- Read the Constitution
- Explore Systems
- Research Archive
```

#### Core Thesis
Left Column:
```
Modern systems optimize for capability.

They rely on:
- Confidence scores
- Probabilistic safety
- Post-execution monitoring
- Unverifiable reasoning
```

Right Column:
```
AnimusLab optimizes for control.

We research:
- Deterministic reasoning
- Capability governance
- Constitutional enforcement
- Observability systems
```

#### The Six Invariants
Display all six as expandable/visible cards:
- Truth Over Optics
- Semantics Before Representation
- Constraints Create Clarity
- Failure Is a State Transition
- Domain-Agnostic by Default
- Rebuild If the Foundation Is Wrong

Each card must link to `/constitution` for full explanation.

#### Systems Ecosystem
Brief mention of three tiers:

Foundational Systems:
- ANIMUS
- Shadow Watch

Applied Infrastructure:
- Anchor
- FORGE
- QuantGrid
- QuantForge

Button: "View All Systems →" links to `/systems`

#### Publications & Research
Show latest publication:
```
Anchor:
Constitutional Governance Infrastructure
for Intelligent Systems

April 2026
Zenodo | PDF
```

Button: "View All Research →" links to `/research`

#### Timeline
Chronological milestones:
```
2025: AnimusLab Founded
2025: ANIMUS Research Begins
2026: Anchor Preprint Published
2026: Anchor v5 Released
2026: Shadow Watch Migration
```

#### Contact
Simple footer:
- Research Inquiries
- GitHub
- Email

---

## PHASE 2: Define The Constitution

### Objective
The `/constitution` page becomes the institutional law document.

Every system's existence traces back to these six invariants.

### Page Structure

```
/constitution

Introduction (Why this page exists)

Principle 1: Truth Over Optics
├── Full principle text (verbatim from your document)
├── Invariant statement
├── Examples and context
├── Where it appears (Anchor, ANIMUS, Shadow Watch)
└── Implementation details

Principle 2: Semantics Before Representation
├── Full principle text
├── Invariant statement
├── Examples and context
├── Where it appears
└── Implementation details

[Continue for Principles 3-6]

Closing Section:
"How These Principles Shape All Systems"
└── Shows principle → research → architecture → implementation flow
```

### Content Requirements for Each Principle

#### Section A: The Principle (Full Text)
Use your original document text verbatim.
- Replace em-dashes (—) with hyphens (-) if needed for consistency
- Replace "ANIMUS" with "AnimusLab" only when referring to the institution
- Keep all ANIMUS references when referring to the actual system

#### Section B: The Invariant (One-line rule)
Example:
```
If it cannot survive scrutiny, it should not be displayed.
```

#### Section C: Why This Matters
Context paragraph explaining the principle's significance.

#### Section D: Evidence - Where It Appears

**Format: Implementation Table**

```
System          | Where It Appears                    | Evidence
─────────────────────────────────────────────────────
Anchor          | AST-based verification              | [GitHub Link]
                | Deterministic policy resolution     |
                | Immutable audit traces              |
                |                                     |
ANIMUS          | Symbolic reasoning                  | [GitHub Link]
                | Sourced knowledge nodes             |
                | Neuro-modulated states              |
                |                                     |
Shadow Watch    | Cryptographic audit traces          | [GitHub Link]
                | Immutable ledger verification       |
                | Behavioral verification             |
```

#### Section E: Technical Deep-Dive
3-5 paragraphs explaining:
- Why this invariant is non-negotiable
- What problems it prevents
- How it shaped decisions
- Concrete examples from your work

---

## PHASE 3: Define The Systems

### Objective
The `/systems` page explains the ecosystem hierarchy, not as repositories, but as a coherent architecture.

### Page Structure

```
/systems

Introduction
"How Principles Become Systems"

Part A: Foundational Systems
├── ANIMUS
└── Shadow Watch

Part B: Applied Infrastructure
├── Anchor
├── FORGE
├── QuantGrid
└── QuantForge
```

### Content for Each System

#### System Card
```
System Name

Purpose:
One-sentence description

Status:
Research / Prototype / Active Development / Production

Principles It Implements:
- Principle X
- Principle Y
- Principle Z

What It Does:
2-3 paragraph explanation (not technical architecture)

Repository:
[GitHub Link]

Documentation:
[Link]

Research Papers:
[Link]
```

### Systems Details

#### Tier 1: Foundational Systems

**ANIMUS**
```
Purpose:
Neuro-symbolic reasoning architecture for deterministic cognition.

Status:
Research Program

Principles:
- Semantics Before Representation
- Domain-Agnostic by Default
- Constraints Create Clarity

Description:
[Full explanation of ANIMUS role in the ecosystem]

Where to Learn More:
GitHub | Research | Architecture
```

**Shadow Watch**
```
Purpose:
Trust observability and behavioral verification for autonomous systems.

Status:
Prototype

Principles:
- Truth Over Optics
- Failure Is a State Transition

Description:
[Full explanation]

Where to Learn More:
GitHub | Research | Prototype
```

#### Tier 2: Applied Infrastructure

**Anchor**
```
Purpose:
Deterministic governance and capability resolution infrastructure.

Status:
Active Development

Principles:
- Truth Over Optics
- Constraints Create Clarity
- Failure Is a State Transition

Description:
[Full explanation]

Where to Learn More:
Documentation | Architecture | Playground | GitHub
```

**FORGE**
```
Purpose:
Sovereign storage and data ownership infrastructure.

Status:
Research

Principles:
- Rebuild If the Foundation Is Wrong
- Domain-Agnostic by Default

Description:
[Full explanation]

Where to Learn More:
GitHub | Research
```

**QuantGrid**
```
Purpose:
Institutional intelligence platform for deterministic analysis.

Status:
Research

Principles:
- Semantics Before Representation
- Domain-Agnostic by Default

Description:
[Full explanation]

Where to Learn More:
GitHub | Research
```

**QuantForge**
```
Purpose:
Execution environment for deterministic computation.

Status:
Prototype

Principles:
- Constraints Create Clarity
- Failure Is a State Transition

Description:
[Full explanation]

Where to Learn More:
GitHub | Research
```

---

## PHASE 4: Define The Research

### Objective
Create an academic-grade research archive (think OpenAI Research, not blog).

### Page Structure

```
/research

Section A: Publications
├── Peer-reviewed preprints
├── Formal papers
└── Zenodo deposits

Section B: Research Notes
├── Technical essays
├── Architecture explorations
└── Deep dives

Section C: Lab Activity
├── Monthly milestones
├── Release notes
└── Development timeline
```

### Content Requirements

#### Publications Section
For each publication:
```
Title

Abstract:
[Full abstract]

Publication Date:
Month Year

Published In:
Zenodo / Venue

Links:
PDF | Citation | Full Text

Principles Addressed:
- Principle X
- Principle Y
```

#### Research Notes Section
Actual technical essays on:
```
- AST-Based Execution Guardrails
- Constitutional Visibility Resolution
- Diamond Cage Runtime Isolation
- Three-Tier Forensic Telemetry
- Entity Fingerprinting Architecture
- Session Trust Models
- Capability Boundary Enforcement
```

Each note:
```
Title

Date Published:

Author:

Systems This Informs:
- Anchor
- ANIMUS
- etc.

Content:
[Essay content or link to full essay]
```

#### Lab Activity Section
Monthly chronological updates:
```
May 2026
- Anchor v5.0.4 Released
- Capability Resolution Engine Initiated
- Shadow Watch Prototype Migration
- 25/25 Constitutional Tests Passing

April 2026
- Anchor Preprint Published to Zenodo
- Constitutional Visibility Refactoring Complete
- Session Fingerprinting Architecture Introduced

[Continuing backwards in time]
```

---

## PHASE 5: Separate Anchor

### Objective
Create clear boundaries between institution and product.

### Three Separate Domains

#### animalslab.dev
```
Purpose: Institution & Research
Contains:
- Constitution
- Systems
- Research
- About
- Timeline
- Philosophy

Does NOT contain:
- Playgrounds
- Dashboards
- Admin UIs
- Product features
- Operational systems
```

#### anchor.animalslab.dev
```
Purpose: Product Documentation & Playground
Contains:
- Overview of Anchor
- Documentation
- Architecture Diagrams
- Playground
- Demo
- Research (Anchor-specific)
- GitHub Link

Does NOT contain:
- AnimusLab philosophy
- Pricing
- Enterprise info
- Operational dashboards
- Team management UIs
```

#### anchorgovernance.tech (Existing/Future)
```
Purpose: Production Platform
Contains:
- Login
- Dashboard
- Violations Feed
- Policy Manager
- Team Management
- Audit Trail
- Operations

Does NOT contain:
- Philosophy
- Research
- Documentation (links out to anchor.animalslab.dev)
- Institution narrative
```

---

## PHASE 6: Authority Signals

### Objective
Establish credibility through verifiable evidence.

### Homepage Integration

#### Publications Section
```
✓ Zenodo Registry
✓ DOI (persistent identifier)
✓ Publication Date
✓ Abstract
✓ Citation Format
✓ PDF Link
```

#### Open Source Section
```
✓ GitHub Organization Link
✓ Repository Count
✓ Contributor Information
✓ Latest Releases
✓ PyPI/Package Registry Links
✓ License Information
```

#### Timeline Section
```
✓ Founding Date
✓ Major Milestones
✓ Research Initiations
✓ Publications
✓ Releases
✓ Partnerships (if any)
```

#### External Validation
```
✓ Links to Zenodo
✓ Links to Papers on Scholar
✓ Links to GitHub Repositories
✓ Links to Documentation
✓ Links to Public Research
```

---

## Implementation Sequence

### Phase 1 Complete When:
- Homepage clearly communicates institution purpose
- Six invariants visible and linked to constitution
- No Anchor product details on homepage

### Phase 2 Complete When:
- `/constitution` page exists
- All six principles fully documented
- Each principle shows implementation evidence
- Links to relevant systems and research

### Phase 3 Complete When:
- `/systems` page shows hierarchy (Foundational vs Applied)
- Each system has purpose, status, principles, description
- All systems link to their resources (GitHub, docs, etc.)

### Phase 4 Complete When:
- `/research` page has real publications
- Research notes are actual technical content (not placeholder)
- Lab activity timeline is accurate and up-to-date

### Phase 5 Complete When:
- anchor.animalslab.dev separated from animalslab.dev
- Clear user journey distinction
- Navigation disambiguates

### Phase 6 Complete When:
- All authority signals visible and functional
- Publications linked to Zenodo with DOIs
- Timeline accurate and comprehensive

---

## Success Criteria

When a visitor lands on animalslab.dev:

1. **They understand AnimusLab is an institution** (not a company)
2. **They see the six invariants** (before any product)
3. **They understand each invariant has implementations** (principle → evidence)
4. **They know the ecosystem** (ANIMUS → Anchor → etc.)
5. **They can access research** (real publications, real timeline)
6. **They understand Anchor is one output** (not the whole story)

When they decide to explore Anchor:
- They navigate to anchor.animalslab.dev
- They see only Anchor-specific content
- No institution narrative pollution

When they need the operational platform:
- They go to anchorgovernance.tech
- Completely separate experience
- No philosophy, no research

---

## Next Steps

Start with **PHASE 2 (Constitution Page)** because:
1. It's the keystone for everything else
2. It defines the institutional identity
3. All other pages reference it
4. It's independent of other changes

Once Constitution exists and is credible, all other pages fall into place naturally.
