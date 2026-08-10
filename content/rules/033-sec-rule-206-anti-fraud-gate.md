---
id: RULE-SEC-206
title: "SEC Rule 206(4)-1 — Anti-Fraud Market Manipulation Gate"
date: 2026-08-09
category: "Market Manipulation Control"
jurisdiction: "United States"
statuteRef: "Investment Advisers Act Rule 206(4)-1 (Marketing Rule)"
severity: "BLOCKER"
mitigationAction: "ANTI_FRAUD_VERIFICATION"
tags:
  - RULE-SEC-206
  - United States
  - SEC Rule 206(4)-1 — Anti-Fraud Market Manipulation Gate
  - Machine Enforceable Gate
excerpt: "Blocks autonomous trading triggers that attempt to initiate market execution orders based entirely on unverified, raw social media web scraping gossip."
---

# SEC Rule 206(4)-1 — Anti-Fraud Market Manipulation Gate

**Statutory Framework:** Investment Advisers Act Rule 206(4)-1 (Marketing Rule)  
**Rule ID:** `RULE-SEC-206` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `ANTI_FRAUD_VERIFICATION`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Blocks autonomous trading triggers that attempt to initiate market execution orders based entirely on unverified, raw social media web scraping gossip."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-SEC-206]
rule_id = "RULE-SEC-206"
statute = "Investment Advisers Act Rule 206(4)-1 (Marketing Rule)"
severity = "BLOCKER"
action = "ANTI_FRAUD_VERIFICATION"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-SEC-206")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-SEC-206 AST query bounds
    return compliance_engine.enforce(payload)
```
