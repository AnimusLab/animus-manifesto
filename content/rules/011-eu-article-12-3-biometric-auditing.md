---
id: RULE-EU-011
title: "Article 12(3): Remote Biometric Identification Log Array & Dual-Person Verification Gate"
date: 2026-08-09
category: "Biometric Audit Control"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 12(3) (Recitals 71, 72)"
severity: "BLOCKER"
mitigationAction: "BIOMETRIC_DUAL_VERIFY_LOG"
tags:
  - RULE-EU-011
  - European Union
  - Article 12(3)
  - Machine Enforceable Gate
excerpt: "Forces 2-person verification metadata arrays and automatic start/end timestamp logging on remote biometric identification calls."
---

# Article 12(3): Remote Biometric Identification Log Array & Dual-Person Verification Gate

**Statutory Framework:** EU AI Act Article 12(3) (Recitals 71, 72)  
**Rule ID:** `RULE-EU-011` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `BIOMETRIC_DUAL_VERIFY_LOG`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Forces 2-person verification metadata arrays and automatic start/end timestamp logging on remote biometric identification calls."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-011]
rule_id = "RULE-EU-011"
statute = "EU AI Act Article 12(3) (Recitals 71, 72)"
severity = "BLOCKER"
action = "BIOMETRIC_DUAL_VERIFY_LOG"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-011")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-011 AST query bounds
    return compliance_engine.enforce(payload)
```
