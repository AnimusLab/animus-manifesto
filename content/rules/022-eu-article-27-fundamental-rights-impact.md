---
id: RULE-EU-022
title: "Article 27: Fundamental Rights Impact Assessment (FRIA) Gate"
date: 2026-08-09
category: "Statutory Impact Assessment"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 27 (Recital 85)"
severity: "BLOCKER"
mitigationAction: "FRIA_ASSESSMENT_HALT"
tags:
  - RULE-EU-022
  - European Union
  - Article 27
  - Machine Enforceable Gate
excerpt: "Mandates deployers of high-risk AI in public or financial services to conduct a Fundamental Rights Impact Assessment prior to deployment."
---

# Article 27: Fundamental Rights Impact Assessment (FRIA) Gate

**Statutory Framework:** EU AI Act Article 27 (Recital 85)  
**Rule ID:** `RULE-EU-022` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `FRIA_ASSESSMENT_HALT`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Mandates deployers of high-risk AI in public or financial services to conduct a Fundamental Rights Impact Assessment prior to deployment."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-022]
rule_id = "RULE-EU-022"
statute = "EU AI Act Article 27 (Recital 85)"
severity = "BLOCKER"
action = "FRIA_ASSESSMENT_HALT"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-022")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-022 AST query bounds
    return compliance_engine.enforce(payload)
```
