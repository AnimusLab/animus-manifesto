---
id: RULE-EU-013
title: "Article 14: Human Oversight & Dynamic Kill-Switch Control"
date: 2026-08-09
category: "Statutory Mandatory Control"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 14 (Recitals 74, 75 & Annex IV)"
severity: "BLOCKER"
mitigationAction: "HUMAN_OVERRIDE_MANDATE"
tags:
  - RULE-EU-013
  - European Union
  - Article 14
  - Machine Enforceable Gate
excerpt: "Enforces continuous human oversight interfaces allowing human operators to override, interrupt, or halt high-risk AI system execution at any microsecond."
---

# Article 14: Human Oversight & Dynamic Kill-Switch Control

**Statutory Framework:** EU AI Act Article 14 (Recitals 74, 75 & Annex IV)  
**Rule ID:** `RULE-EU-013` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `HUMAN_OVERRIDE_MANDATE`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Enforces continuous human oversight interfaces allowing human operators to override, interrupt, or halt high-risk AI system execution at any microsecond."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-013]
rule_id = "RULE-EU-013"
statute = "EU AI Act Article 14 (Recitals 74, 75 & Annex IV)"
severity = "BLOCKER"
action = "HUMAN_OVERRIDE_MANDATE"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-013")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-013 AST query bounds
    return compliance_engine.enforce(payload)
```
