---
id: RULE-EU-020
title: "Article 26(4): Input Data Representativeness & Context Boundary Gate"
date: 2026-08-09
category: "Data Representativeness Gate"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 26(4) (Recital 82)"
severity: "BLOCKER"
mitigationAction: "VERIFY_DATA_REPRESENTATIVENESS"
tags:
  - RULE-EU-020
  - European Union
  - Article 26(4)
  - Machine Enforceable Gate
excerpt: "Verifies input payload metadata matrix matches Annex IV declared distribution before allowing execution to proceed."
---

# Article 26(4): Input Data Representativeness & Context Boundary Gate

**Statutory Framework:** EU AI Act Article 26(4) (Recital 82)  
**Rule ID:** `RULE-EU-020` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `VERIFY_DATA_REPRESENTATIVENESS`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Verifies input payload metadata matrix matches Annex IV declared distribution before allowing execution to proceed."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-020]
rule_id = "RULE-EU-020"
statute = "EU AI Act Article 26(4) (Recital 82)"
severity = "BLOCKER"
action = "VERIFY_DATA_REPRESENTATIVENESS"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-020")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-020 AST query bounds
    return compliance_engine.enforce(payload)
```
