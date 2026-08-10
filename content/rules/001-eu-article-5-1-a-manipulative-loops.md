---
id: RULE-EU-001
title: "Article 5(1)(a): Prohibited Manipulative & Subliminal Loops"
date: 2026-08-09
category: "Prohibited Practice"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 5(1)(a) (Recitals 27, 28, 29 & Annex III)"
severity: "BLOCKER"
mitigationAction: "BLOCK_COGNITIVE_MANIPULATION"
tags:
  - RULE-EU-001
  - European Union
  - Article 5(1)(a)
  - Machine Enforceable Gate
excerpt: "Intercepts and blocks neuro-symbolic execution loops designed to deploy subliminal techniques or exploit human vulnerabilities."
---

# Article 5(1)(a): Prohibited Manipulative & Subliminal Loops

**Statutory Framework:** EU AI Act Article 5(1)(a) (Recitals 27, 28, 29 & Annex III)  
**Rule ID:** `RULE-EU-001` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `BLOCK_COGNITIVE_MANIPULATION`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Intercepts and blocks neuro-symbolic execution loops designed to deploy subliminal techniques or exploit human vulnerabilities."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-001]
rule_id = "RULE-EU-001"
statute = "EU AI Act Article 5(1)(a) (Recitals 27, 28, 29 & Annex III)"
severity = "BLOCKER"
action = "BLOCK_COGNITIVE_MANIPULATION"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-001")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-001 AST query bounds
    return compliance_engine.enforce(payload)
```
