---
id: RULE-EU-029
title: "Article 99: Statutory Penalties, Fines & Global Turnover Invariants"
date: 2026-08-09
category: "Statutory Enforcement Penalty"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 99 (Recital 167)"
severity: "BLOCKER"
mitigationAction: "ZERO_LEAKAGE_CONTAINMENT"
tags:
  - RULE-EU-029
  - European Union
  - Article 99
  - Machine Enforceable Gate
excerpt: "Enforces zero-compliance-leakage runtime bounds to eliminate exposure to Article 99 turnover fines up to €35,000,000 or 7% of global turnover."
---

# Article 99: Statutory Penalties, Fines & Global Turnover Invariants

**Statutory Framework:** EU AI Act Article 99 (Recital 167)  
**Rule ID:** `RULE-EU-029` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `ZERO_LEAKAGE_CONTAINMENT`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Enforces zero-compliance-leakage runtime bounds to eliminate exposure to Article 99 turnover fines up to €35,000,000 or 7% of global turnover."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-029]
rule_id = "RULE-EU-029"
statute = "EU AI Act Article 99 (Recital 167)"
severity = "BLOCKER"
action = "ZERO_LEAKAGE_CONTAINMENT"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-029")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-029 AST query bounds
    return compliance_engine.enforce(payload)
```
