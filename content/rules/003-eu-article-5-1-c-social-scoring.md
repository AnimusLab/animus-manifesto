---
id: RULE-EU-003
title: "Article 5(1)(c): Prohibited Social Scoring & Behavioral Profiling"
date: 2026-08-09
category: "Prohibited Practice"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 5(1)(c) (Recitals 32, 33)"
severity: "BLOCKER"
mitigationAction: "BLOCK_SOCIAL_SCORING"
tags:
  - RULE-EU-003
  - European Union
  - Article 5(1)(c)
  - Machine Enforceable Gate
excerpt: "Bans systematic evaluation or classification of natural persons based on social behavior leading to detrimental or unfavorable treatment."
---

# Article 5(1)(c): Prohibited Social Scoring & Behavioral Profiling

**Statutory Framework:** EU AI Act Article 5(1)(c) (Recitals 32, 33)  
**Rule ID:** `RULE-EU-003` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `BLOCK_SOCIAL_SCORING`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Bans systematic evaluation or classification of natural persons based on social behavior leading to detrimental or unfavorable treatment."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-003]
rule_id = "RULE-EU-003"
statute = "EU AI Act Article 5(1)(c) (Recitals 32, 33)"
severity = "BLOCKER"
action = "BLOCK_SOCIAL_SCORING"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-003")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-003 AST query bounds
    return compliance_engine.enforce(payload)
```
