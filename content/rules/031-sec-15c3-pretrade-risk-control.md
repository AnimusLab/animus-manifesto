---
id: SEC-RULE-15C3
title: "SEC Rule 15c3-5 — Pre-Trade Financial Limit Risk Control"
date: 2026-08-09
category: "Market Access Control"
jurisdiction: "United States"
statuteRef: "17 CFR § 240.15c3-5 (Market Access Rule)"
severity: "BLOCKER"
mitigationAction: "LOCKFREE_CAPITAL_ALLOCATOR"
tags:
  - SEC-RULE-15C3
  - United States
  - SEC Rule 15c3-5 — Pre-Trade Financial Limit Risk Control
  - Machine Enforceable Gate
excerpt: "Enforces mandatory pre-trade credit verification and financial exposure limits, programmatically halting un-gated automated order routing scripts."
---

# SEC Rule 15c3-5 — Pre-Trade Financial Limit Risk Control

**Statutory Framework:** 17 CFR § 240.15c3-5 (Market Access Rule)  
**Rule ID:** `SEC-RULE-15C3` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `LOCKFREE_CAPITAL_ALLOCATOR`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Enforces mandatory pre-trade credit verification and financial exposure limits, programmatically halting un-gated automated order routing scripts."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.SEC-RULE-15C3]
rule_id = "SEC-RULE-15C3"
statute = "17 CFR § 240.15c3-5 (Market Access Rule)"
severity = "BLOCKER"
action = "LOCKFREE_CAPITAL_ALLOCATOR"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="SEC-RULE-15C3")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against SEC-RULE-15C3 AST query bounds
    return compliance_engine.enforce(payload)
```
