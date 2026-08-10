---
id: RULE-EU-025
title: "Article 50(4): Public AI Text Generation Disclosure Gate"
date: 2026-08-09
category: "Text Disclosure Gate"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 50(4) (Recital 133)"
severity: "BLOCKER"
mitigationAction: "ENFORCE_TEXT_DISCLOSURE_TAG"
tags:
  - RULE-EU-025
  - European Union
  - Article 50(4)
  - Machine Enforceable Gate
excerpt: "Monitors streaming text outputs; requires an ai_disclosure_tag or human_reviewer_token before allowing public distribution egress."
---

# Article 50(4): Public AI Text Generation Disclosure Gate

**Statutory Framework:** EU AI Act Article 50(4) (Recital 133)  
**Rule ID:** `RULE-EU-025` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `ENFORCE_TEXT_DISCLOSURE_TAG`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Monitors streaming text outputs; requires an ai_disclosure_tag or human_reviewer_token before allowing public distribution egress."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-025]
rule_id = "RULE-EU-025"
statute = "EU AI Act Article 50(4) (Recital 133)"
severity = "BLOCKER"
action = "ENFORCE_TEXT_DISCLOSURE_TAG"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-025")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-025 AST query bounds
    return compliance_engine.enforce(payload)
```
