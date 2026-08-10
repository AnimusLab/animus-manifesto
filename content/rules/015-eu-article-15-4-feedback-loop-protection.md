---
id: RULE-EU-015
title: "Article 15(4): Feedback Loop Contamination Protection Gate"
date: 2026-08-09
category: "Feedback Loop Protection"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 15(4) (Recital 78)"
severity: "BLOCKER"
mitigationAction: "BLOCK_UNVETTED_FEEDBACK_LOOP"
tags:
  - RULE-EU-015
  - European Union
  - Article 15(4)
  - Machine Enforceable Gate
excerpt: "Prevents un-vetted agent outputs or synthetic generation streams from routing directly back into training or weight-update arrays without intermediate validation."
---

# Article 15(4): Feedback Loop Contamination Protection Gate

**Statutory Framework:** EU AI Act Article 15(4) (Recital 78)  
**Rule ID:** `RULE-EU-015` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `BLOCK_UNVETTED_FEEDBACK_LOOP`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Prevents un-vetted agent outputs or synthetic generation streams from routing directly back into training or weight-update arrays without intermediate validation."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-015]
rule_id = "RULE-EU-015"
statute = "EU AI Act Article 15(4) (Recital 78)"
severity = "BLOCKER"
action = "BLOCK_UNVETTED_FEEDBACK_LOOP"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-015")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-015 AST query bounds
    return compliance_engine.enforce(payload)
```
