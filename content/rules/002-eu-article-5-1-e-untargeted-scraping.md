---
id: RULE-EU-002
title: "Article 5(1)(e): Prohibited Untargeted Facial Image Scraping"
date: 2026-08-09
category: "Prohibited Practice"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 5(1)(e) (Recitals 30, 31 & Annex III)"
severity: "BLOCKER"
mitigationAction: "BLOCK_FACIAL_SCRAPING"
tags:
  - RULE-EU-002
  - European Union
  - Article 5(1)(e)
  - Machine Enforceable Gate
excerpt: "Blocks unauthorized compilation of facial recognition databases via un-targeted web scraping or CCTV footage extraction."
---

# Article 5(1)(e): Prohibited Untargeted Facial Image Scraping

**Statutory Framework:** EU AI Act Article 5(1)(e) (Recitals 30, 31 & Annex III)  
**Rule ID:** `RULE-EU-002` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `BLOCK_FACIAL_SCRAPING`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Blocks unauthorized compilation of facial recognition databases via un-targeted web scraping or CCTV footage extraction."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-002]
rule_id = "RULE-EU-002"
statute = "EU AI Act Article 5(1)(e) (Recitals 30, 31 & Annex III)"
severity = "BLOCKER"
action = "BLOCK_FACIAL_SCRAPING"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-002")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-002 AST query bounds
    return compliance_engine.enforce(payload)
```
