---
id: RULE-EU-024
title: "Article 50(2): Synthetic Media Cryptographic Watermark Egress Gate"
date: 2026-08-09
category: "Synthetic Egress Gate"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 50(2) (Recital 132)"
severity: "BLOCKER"
mitigationAction: "ENFORCE_C2PA_WATERMARK"
tags:
  - RULE-EU-024
  - European Union
  - Article 50(2)
  - Machine Enforceable Gate
excerpt: "Blocks network egress of generated image or audio assets unless a machine-readable C2PA metadata watermark signature is attached."
---

# Article 50(2): Synthetic Media Cryptographic Watermark Egress Gate

**Statutory Framework:** EU AI Act Article 50(2) (Recital 132)  
**Rule ID:** `RULE-EU-024` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `ENFORCE_C2PA_WATERMARK`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Blocks network egress of generated image or audio assets unless a machine-readable C2PA metadata watermark signature is attached."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-024]
rule_id = "RULE-EU-024"
statute = "EU AI Act Article 50(2) (Recital 132)"
severity = "BLOCKER"
action = "ENFORCE_C2PA_WATERMARK"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-024")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-024 AST query bounds
    return compliance_engine.enforce(payload)
```
