---
id: RULE-EU-005
title: "Article 6(1) & Annex I: Integrated Product Safety Component Intercept Gate"
date: 2026-08-09
category: "Statutory Safety Control"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 6(1) & Annex I (Recitals 42, 43)"
severity: "BLOCKER"
mitigationAction: "SAFETY_COMPONENT_INTERCEPT"
tags:
  - RULE-EU-005
  - European Union
  - Article 6(1) & Annex I
  - Machine Enforceable Gate
excerpt: "Intercepts AI modules serving as safety components in products subject to third-party conformity assessment under Union harmonisation legislation."
---

# Article 6(1) & Annex I: Integrated Product Safety Component Intercept Gate

**Statutory Framework:** EU AI Act Article 6(1) & Annex I (Recitals 42, 43)  
**Rule ID:** `RULE-EU-005` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `SAFETY_COMPONENT_INTERCEPT`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Intercepts AI modules serving as safety components in products subject to third-party conformity assessment under Union harmonisation legislation."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-005]
rule_id = "RULE-EU-005"
statute = "EU AI Act Article 6(1) & Annex I (Recitals 42, 43)"
severity = "BLOCKER"
action = "SAFETY_COMPONENT_INTERCEPT"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-005")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-005 AST query bounds
    return compliance_engine.enforce(payload)
```
