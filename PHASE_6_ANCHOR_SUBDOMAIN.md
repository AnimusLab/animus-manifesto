# Phase 6: Anchor Subdomain Separation

## Status: Ready for Deployment

The institutional site (animuslab.dev) and product site (anchor.animuslab.dev) require separate deployments.

---

## Current Architecture

**animuslab.dev** (This Workspace)
- Institutional identity and doctrine
- Constitution page (six invariants)
- Programs page (all four research areas)
- Research page (publications and theory)
- About page (institutional positioning)
- Anchor presented as ONE of three research programs

**anchor.animuslab.dev** (Separate Deployment Needed)
- Anchor-specific product documentation
- API reference and implementation guides
- Technical tutorials and deployment guides
- Anchor platform instance/demo

---

## Implementation Pattern

### Deployment Strategy

1. **Production: animuslab.dev**
   - Current Next.js app deployed to Vercel
   - Institutional messaging and research focus
   - Navigation: Research → Programs → Constitution → About

2. **Production: anchor.animuslab.dev**
   - Separate Next.js app or static site
   - Product-focused documentation
   - Contains: API docs, deployment guides, platform access
   - Can link back to animuslab.dev for institutional context

### DNS Configuration

```
animuslab.dev          → Vercel (institutional site)
anchor.animuslab.dev   → Separate Vercel project (product docs)
www.animuslab.dev      → animuslab.dev
```

---

## Why Separate?

**Institutional Clarity:**
- animuslab.dev speaks with institutional voice
- Anchor is one artifact of institutional work
- Separating URLs prevents Anchor product dominating institutional message

**Technical Separation:**
- Anchor product docs can evolve independently
- Institutional site remains stable and principles-focused
- Clear information architecture for visitors

**Institutional Integrity:**
- If Anchor disappeared tomorrow, animuslab.dev still makes complete sense
- Anchor is not the institution, it's evidence of it

---

## Transition Plan

### Current State (Phase 2-5 Complete)
- animuslab.dev fully institutional
- Anchor linked from `/programs` page
- All navigation institutional

### Next State (Phase 6)
- Create separate anchor.animuslab.dev deployment
- Move Anchor platform/technical docs to subdomain
- Update links from animuslab.dev to point to anchor.animuslab.dev for product details

### No Changes to Current Site
The animuslab.dev site does not require modification. It is architecture-complete.

---

## Files for Anchor Subdomain

When building anchor.animuslab.dev, include:

1. **API Reference**
   - Endpoint documentation
   - Authentication flows
   - Policy evaluation examples

2. **Deployment Guides**
   - Installation instructions
   - Configuration options
   - Security considerations

3. **Technical Specifications**
   - Architecture diagrams
   - AST scanning rules
   - Policy language reference

4. **Platform Instance**
   - Live Anchor governance engine
   - Policy playground
   - Audit trail viewer

---

## Current Navigation

**animuslab.dev Navigation:**
```
Research (institutional research archive)
Programs (all four research areas)
Constitution (six invariants)
About (institutional positioning)
```

**Anchor Details Link:**
In `/programs` page, Anchor has a repository link to:
https://github.com/AnimusLab/Anchor

**Future: anchor.animuslab.dev Navigation:**
```
Documentation
API Reference
Deployment Guide
Platform Instance
```

---

## Status: Complete

Phase 6 is primarily a deployment/DNS configuration task. The institutional site (animuslab.dev) requires no further development to support Anchor subdomain separation.

**Next Step:** Deploy separate Anchor subdomain when product documentation is ready.
