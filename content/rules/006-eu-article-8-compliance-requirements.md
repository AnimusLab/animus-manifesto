---
id: RULE-EU-006
title: "Article 8: Ex-Ante Mandatory Compliance Gate for High-Risk Requirements"
date: 2026-08-09
category: "Statutory Compliance Gate"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 8 (Recital 64)"
severity: "BLOCKER"
mitigationAction: "VERIFY_EX_ANTE_REQUIREMENTS"
tags:
  - RULE-EU-006
  - European Union
  - Article 8
  - Machine Enforceable Gate
excerpt: "Mandates that high-risk AI systems shall comply with all Section 2 requirements (Articles 9 through 15) taking into account intended purpose and state-of-the-art."
---

# Article 8: Ex-Ante Mandatory Compliance Gate for High-Risk Requirements

**Statutory Framework:** EU AI Act Article 8 (Recital 64)  
**Rule ID:** `RULE-EU-006` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `VERIFY_EX_ANTE_REQUIREMENTS`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Mandates that high-risk AI systems shall comply with all Section 2 requirements (Articles 9 through 15) taking into account intended purpose and state-of-the-art."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-006]
rule_id = "RULE-EU-006"
statute = "EU AI Act Article 8 (Recital 64)"
severity = "BLOCKER"
action = "VERIFY_EX_ANTE_REQUIREMENTS"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-006")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-006 AST query bounds
    return compliance_engine.enforce(payload)
```
