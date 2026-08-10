---
id: SEC-FINRA-3110
title: "FINRA Rule 3110/4511 — Tamper-Evident 6-Year Records Journal"
date: 2026-08-09
category: "Record Keeping Control"
jurisdiction: "United States"
statuteRef: "FINRA Rule 4511 / Exchange Act Rule 17a-4 (WORM)"
severity: "BLOCKER"
mitigationAction: "TAMPER_EVIDENT_JOURNAL"
tags:
  - SEC-FINRA-3110
  - United States
  - FINRA Rule 3110/4511 — Tamper-Evident 6-Year Records Journal
  - Machine Enforceable Gate
excerpt: "Enforces immutable, Ed25519-signed cryptographic ledger archiving for all model prompts and trading choices to pass statutory inspection baselines."
---

# FINRA Rule 3110/4511 — Tamper-Evident 6-Year Records Journal

**Statutory Framework:** FINRA Rule 4511 / Exchange Act Rule 17a-4 (WORM)  
**Rule ID:** `SEC-FINRA-3110` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `TAMPER_EVIDENT_JOURNAL`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Enforces immutable, Ed25519-signed cryptographic ledger archiving for all model prompts and trading choices to pass statutory inspection baselines."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.SEC-FINRA-3110]
rule_id = "SEC-FINRA-3110"
statute = "FINRA Rule 4511 / Exchange Act Rule 17a-4 (WORM)"
severity = "BLOCKER"
action = "TAMPER_EVIDENT_JOURNAL"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="SEC-FINRA-3110")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against SEC-FINRA-3110 AST query bounds
    return compliance_engine.enforce(payload)
```
