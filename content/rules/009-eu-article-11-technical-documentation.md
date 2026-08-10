---
id: RULE-EU-009
title: "Article 11: Technical Documentation & Spec Lock Invariants"
date: 2026-08-09
category: "Statutory Compliance Control"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 11 (Recital 69 & Annex IV)"
severity: "BLOCKER"
mitigationAction: "ENFORCE_SPEC_LOCK"
tags:
  - RULE-EU-009
  - European Union
  - Article 11
  - Machine Enforceable Gate
excerpt: "Requires technical documentation to be drawn up before a high-risk AI system is placed on the market and kept up-to-date."
---

# Article 11: Technical Documentation & Spec Lock Invariants

**Statutory Framework:** EU AI Act Article 11 (Recital 69 & Annex IV)  
**Rule ID:** `RULE-EU-009` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `ENFORCE_SPEC_LOCK`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Requires technical documentation to be drawn up before a high-risk AI system is placed on the market and kept up-to-date."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-009]
rule_id = "RULE-EU-009"
statute = "EU AI Act Article 11 (Recital 69 & Annex IV)"
severity = "BLOCKER"
action = "ENFORCE_SPEC_LOCK"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-009")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-009 AST query bounds
    return compliance_engine.enforce(payload)
```
