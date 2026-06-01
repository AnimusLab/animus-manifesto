# AnimusLab Implementation Roadmap

**Status: Ready for Code Implementation**

All strategic decisions are locked. Three architectural documents are finalized:

1. [CHARTER.md](d:\animus-manifesto\CHARTER.md) — Institutional identity
2. [HOMEPAGE_V1_REVISED.md](d:\animus-manifesto\HOMEPAGE_V1_REVISED.md) — Homepage structure
3. This document — Implementation sequence and rationale

---

## Three Strategic Decisions (Final)

### 1. Accessible Language in Hero CTAs
```
"Our Principles" → /constitution
NOT "Read Our Constitution"
```
Reason: Most visitors don't yet understand what "Constitution" means. The word becomes powerful after they learn who AnimusLab is.

### 2. Institutional Authority (No Defensive Language)
```
"Research Programs"
NOT "Has It Built Anything?"
```
Reason: Institutions present their work with authority, not justification. OpenAI and Anthropic don't defend their existence.

### 3. ANIMUS Elevated with Institutional Weight
```
"Research program exploring deterministic reasoning,
symbolic verification, and domain-agnostic cognition."

NOT "How systems reason."
```
Reason: Anchor and Shadow Watch are self-evidently important. ANIMUS needs explicit institutional positioning as the foundational research program.

---

## Implementation Sequence

This sequence establishes AnimusLab's institutional identity before adding supporting pages.

### Phase 2: Homepage
**File:** `app/page.tsx`

**Deliverables:**
- Seven-section homepage per HOMEPAGE_V1_REVISED.md
- Navigation updated (Research → Programs → Constitution → About)
- Responsive design, restrained typography
- No animations, no terminal aesthetic
- High-contrast, institutional aesthetic

**Success Criteria:**
- First-time visitors understand in 30 seconds
- All four core questions answered
- Clear path to `/constitution`

---

### Phase 3: Constitution Page
**Files:** 
- `app/constitution/page.tsx`
- `app/components/PrincipleCard.tsx` (or similar)

**This is the most important page.**

**Deliverables:**
- All six invariants with full text
- For each principle: Title + Full Text + Where It Appears
- Implementation examples from ANIMUS, Anchor, Shadow Watch
- Links to relevant GitHub repositories and documentation
- Visual hierarchy making principles equal prominence

**Content structure for each principle:**
```
PRINCIPLE 1: Truth Over Optics

[Full principle text from CHARTER.md]

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

**Why this is critical:**
- This page is impossible to copy
- Explains why every AnimusLab system exists
- Establishes doctrine, not just products
- Future employees, investors, collaborators will reference this

**Success Criteria:**
- Visitor understands why all systems exist
- Clear principle → implementation mapping
- Feels authoritative and institutional

---

### Phase 4: Programs Page
**File:** `app/programs/page.tsx`

**Deliverables:**
- Three primary programs (ANIMUS, Anchor, Shadow Watch)
- Three supporting systems (FORGE, QuantGrid, QuantForge)
- For each: purpose, status, principles implemented, links

**Structure:**
```
Foundational Research
├── ANIMUS

Governance Infrastructure
├── Anchor

Observability Infrastructure
├── Shadow Watch

Supporting Systems
├── FORGE
├── QuantGrid
└── QuantForge
```

**Success Criteria:**
- Ecosystem relationships are clear
- ANIMUS and Anchor are equal prominence
- Supporting systems don't overshadow primary work

---

### Phase 5: Research Page
**File:** `app/research/page.tsx`

**Deliverables:**
- Publications section with Zenodo links
- Research notes section with technical essays
- Lab activity timeline with metrics
- All credible, verifiable work only

**Success Criteria:**
- Feels like research institution, not blog
- All links verified
- Precise metrics (not rounded)

---

### Phase 6: About Page
**File:** `app/about/page.tsx`

**Deliverables:**
- Mission statement
- Core thesis
- Research areas
- Contact information

**Success Criteria:**
- Concise institutional narrative
- Links to other pages
- Contact methods clear

---

## Navigation Structure

```
animalslab.dev/

Header Navigation:
├── Research
├── Programs
├── Constitution
└── About

Horizontal Links (Footer):
├── GitHub
├── Zenodo
├── Email
└── Research Notes

Next.js Routes:
├── / (Home)
├── /constitution
├── /programs
├── /research
└── /about
```

---

## Critical Implementation Notes

### 1. Don't Let Anchor Dominate
**Test:** If Anchor disappeared tomorrow, would AnimusLab still make sense?

If the answer is "no," Anchor is overrepresented.

AnimusLab's identity is the six invariants, not any single product.

### 2. Visual Restraint
- No animations
- No glowing effects
- No terminal aesthetic
- High contrast (text/background)
- Generous whitespace
- Geist Sans everywhere
- Geist Mono only for code/schemas

### 3. Institutional Language
- "Research Programs" not "Products"
- "Institutional Progress" not "Timeline"
- "Our Principles" not "Read Our Constitution"
- "Governance Infrastructure" not "Constitutional Infrastructure"

### 4. Truth Over Optics
- Precise metrics (106 views, not "100+")
- Accurate publication status ("Published Preprint" not "Peer-Reviewed" unless formally peer-reviewed)
- Honest capability descriptions
- No marketing language

---

## Timeline

**Phase 2 (Homepage):** 1-2 days
**Phase 3 (Constitution):** 1-2 days
**Phase 4 (Programs):** 1 day
**Phase 5 (Research):** 1 day
**Phase 6 (About):** 0.5 days

**Total:** ~5-6 days of implementation

---

## Success Criteria for Entire Website

After all phases:

1. **Homepage** answers four questions in 30 seconds
2. **Constitution** page establishes institutional doctrine
3. **Programs** page clarifies ecosystem (ANIMUS ≠ Anchor, but related)
4. **Research** page builds credibility
5. **About** page provides context
6. **Navigation** feels institutional, not product-focused
7. **Anchor** is one artifact, not the identity
8. **No Anchor mentions** in main navigation (it's a product, not the institution)

---

## What NOT to Build

❌ Anchor playgrounds on animalslab.dev (that's for anchor.animalslab.dev)
❌ AST diagrams (belongs on Anchor site)
❌ Product dashboards (belongs on Anchor platform)
❌ "Get Started" CTAs (institutional site, not product site)
❌ Pricing, enterprise features, sales language
❌ Testimonials or case studies (yet)

---

## Ready to Begin?

All planning is complete. Architecture is locked. No more iterations needed.

Next step: Code implementation of Phase 2 (Homepage in Next.js).

Should I proceed?
