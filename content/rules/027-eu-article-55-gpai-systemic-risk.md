---
id: RULE-EU-027
title: "Article 55: Systemic Risk GPAI Model High-Assurance Controls"
date: 2026-08-09
category: "Systemic Risk Control"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 55 (Recitals 112-118)"
severity: "BLOCKER"
mitigationAction: "SYSTEMIC_RISK_SHUTDOWN"
tags:
  - RULE-EU-027
  - European Union
  - Article 55
  - Machine Enforceable Gate
excerpt: "Imposes model evaluation, adversarial testing, systemic risk assessment, and incident tracking on high-impact GPAI models."
---

# Article 55: Systemic Risk GPAI Model High-Assurance Controls

**Statutory Framework:** EU AI Act Article 55 (Recitals 112-118)  
**Rule ID:** `RULE-EU-027` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `SYSTEMIC_RISK_SHUTDOWN`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Imposes model evaluation, adversarial testing, systemic risk assessment, and incident tracking on high-impact GPAI models."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-027]
rule_id = "RULE-EU-027"
statute = "EU AI Act Article 55 (Recitals 112-118)"
severity = "BLOCKER"
action = "SYSTEMIC_RISK_SHUTDOWN"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-027")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-027 AST query bounds
    return compliance_engine.enforce(payload)
```
