---
id: RULE-EU-023
title: "Article 50: Synthetic Content Marking & Watermarking Obligations"
date: 2026-08-09
category: "Transparency Obligation"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 50 (Recital 132)"
severity: "BLOCKER"
mitigationAction: "INJECT_DIGITAL_WATERMARK"
tags:
  - RULE-EU-023
  - European Union
  - Article 50
  - Machine Enforceable Gate
excerpt: "Mandates machine-readable digital watermarking and provenance headers on all AI-generated text, audio, and image outputs."
---

# Article 50: Synthetic Content Marking & Watermarking Obligations

**Statutory Framework:** EU AI Act Article 50 (Recital 132)  
**Rule ID:** `RULE-EU-023` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `INJECT_DIGITAL_WATERMARK`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Mandates machine-readable digital watermarking and provenance headers on all AI-generated text, audio, and image outputs."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-023]
rule_id = "RULE-EU-023"
statute = "EU AI Act Article 50 (Recital 132)"
severity = "BLOCKER"
action = "INJECT_DIGITAL_WATERMARK"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-023")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-023 AST query bounds
    return compliance_engine.enforce(payload)
```
