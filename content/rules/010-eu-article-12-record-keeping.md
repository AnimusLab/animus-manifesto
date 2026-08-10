---
id: RULE-EU-010
title: "Article 12: Automated Log Retention & Tamper-Evident Records"
date: 2026-08-09
category: "Statutory Audit Control"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 12 (Recitals 70, 71)"
severity: "BLOCKER"
mitigationAction: "SEAL_COMPLIANCE_LOG"
tags:
  - RULE-EU-010
  - European Union
  - Article 12
  - Machine Enforceable Gate
excerpt: "Mandates high-risk AI systems to include logging capabilities ensuring traceability of system operation throughout its lifecycle."
---

# Article 12: Automated Log Retention & Tamper-Evident Records

**Statutory Framework:** EU AI Act Article 12 (Recitals 70, 71)  
**Rule ID:** `RULE-EU-010` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `SEAL_COMPLIANCE_LOG`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Mandates high-risk AI systems to include logging capabilities ensuring traceability of system operation throughout its lifecycle."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-010]
rule_id = "RULE-EU-010"
statute = "EU AI Act Article 12 (Recitals 70, 71)"
severity = "BLOCKER"
action = "SEAL_COMPLIANCE_LOG"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-010")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-010 AST query bounds
    return compliance_engine.enforce(payload)
```
