---
id: RULE-EU-017
title: "Article 17: Quality Management System & Risk Auditing"
date: 2026-08-09
category: "Quality Management System"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 17 (Recitals 63, 64)"
severity: "BLOCKER"
mitigationAction: "QUALITY_SYSTEM_VERIFY"
tags:
  - RULE-EU-017
  - European Union
  - Article 17
  - Machine Enforceable Gate
excerpt: "Requires providers to maintain a documented quality management system covering design controls, testing, and post-market surveillance."
---

# Article 17: Quality Management System & Risk Auditing

**Statutory Framework:** EU AI Act Article 17 (Recitals 63, 64)  
**Rule ID:** `RULE-EU-017` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `QUALITY_SYSTEM_VERIFY`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Requires providers to maintain a documented quality management system covering design controls, testing, and post-market surveillance."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-017]
rule_id = "RULE-EU-017"
statute = "EU AI Act Article 17 (Recitals 63, 64)"
severity = "BLOCKER"
action = "QUALITY_SYSTEM_VERIFY"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-017")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-017 AST query bounds
    return compliance_engine.enforce(payload)
```
