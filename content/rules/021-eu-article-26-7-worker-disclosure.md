---
id: RULE-EU-021
title: "Article 26(7): Workplace Tracking Onboarding Clearance Flag"
date: 2026-08-09
category: "Workplace Compliance Flag"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 26(7) (Recital 84)"
severity: "BLOCKER"
mitigationAction: "CHECK_WORKER_DISCLOSURE_TOKEN"
tags:
  - RULE-EU-021
  - European Union
  - Article 26(7)
  - Machine Enforceable Gate
excerpt: "Verifies worker representative notification flag is legally cleared before firing employee evaluation or HR tracking agent scripts."
---

# Article 26(7): Workplace Tracking Onboarding Clearance Flag

**Statutory Framework:** EU AI Act Article 26(7) (Recital 84)  
**Rule ID:** `RULE-EU-021` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `CHECK_WORKER_DISCLOSURE_TOKEN`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Verifies worker representative notification flag is legally cleared before firing employee evaluation or HR tracking agent scripts."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-021]
rule_id = "RULE-EU-021"
statute = "EU AI Act Article 26(7) (Recital 84)"
severity = "BLOCKER"
action = "CHECK_WORKER_DISCLOSURE_TOKEN"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-021")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-021 AST query bounds
    return compliance_engine.enforce(payload)
```
