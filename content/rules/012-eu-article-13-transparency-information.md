---
id: RULE-EU-012
title: "Article 13: Deployer Transparency & System Architecture Cards"
date: 2026-08-09
category: "Statutory Transparency"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 13 (Recitals 72, 73)"
severity: "BLOCKER"
mitigationAction: "EMBED_SYSTEM_CARD"
tags:
  - RULE-EU-012
  - European Union
  - Article 13
  - Machine Enforceable Gate
excerpt: "Requires high-risk AI systems to be designed in such a way as to ensure that their operation is sufficiently transparent to enable deployers to interpret output."
---

# Article 13: Deployer Transparency & System Architecture Cards

**Statutory Framework:** EU AI Act Article 13 (Recitals 72, 73)  
**Rule ID:** `RULE-EU-012` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `EMBED_SYSTEM_CARD`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Requires high-risk AI systems to be designed in such a way as to ensure that their operation is sufficiently transparent to enable deployers to interpret output."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-012]
rule_id = "RULE-EU-012"
statute = "EU AI Act Article 13 (Recitals 72, 73)"
severity = "BLOCKER"
action = "EMBED_SYSTEM_CARD"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-012")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-012 AST query bounds
    return compliance_engine.enforce(payload)
```
