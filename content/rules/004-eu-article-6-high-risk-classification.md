---
id: RULE-EU-004
title: "Article 6: Classification Rules for High-Risk AI Systems"
date: 2026-08-09
category: "Statutory Classification"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 6 (Recitals 40-55, Annex I & III)"
severity: "BLOCKER"
mitigationAction: "CLASSIFY_HIGH_RISK"
tags:
  - RULE-EU-004
  - European Union
  - Article 6
  - Machine Enforceable Gate
excerpt: "Classifies AI systems intended for critical infrastructure, biometric identification, employment, or credit scoring as high-risk subject to strict ex-ante compliance."
---

# Article 6: Classification Rules for High-Risk AI Systems

**Statutory Framework:** EU AI Act Article 6 (Recitals 40-55, Annex I & III)  
**Rule ID:** `RULE-EU-004` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `CLASSIFY_HIGH_RISK`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Classifies AI systems intended for critical infrastructure, biometric identification, employment, or credit scoring as high-risk subject to strict ex-ante compliance."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-004]
rule_id = "RULE-EU-004"
statute = "EU AI Act Article 6 (Recitals 40-55, Annex I & III)"
severity = "BLOCKER"
action = "CLASSIFY_HIGH_RISK"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-004")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-004 AST query bounds
    return compliance_engine.enforce(payload)
```
