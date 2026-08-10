---
id: RULE-EU-028
title: "Article 72: Continuous Post-Market Monitoring System"
date: 2026-08-09
category: "Post-Market Observability"
jurisdiction: "European Union"
statuteRef: "EU AI Act Article 72 (Recital 145)"
severity: "BLOCKER"
mitigationAction: "POST_MARKET_MONITOR_LOG"
tags:
  - RULE-EU-028
  - European Union
  - Article 72
  - Machine Enforceable Gate
excerpt: "Requires providers to establish a proactive post-market monitoring system to evaluate real-world system performance and safety."
---

# Article 72: Continuous Post-Market Monitoring System

**Statutory Framework:** EU AI Act Article 72 (Recital 145)  
**Rule ID:** `RULE-EU-028` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `POST_MARKET_MONITOR_LOG`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Requires providers to establish a proactive post-market monitoring system to evaluate real-world system performance and safety."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-EU-028]
rule_id = "RULE-EU-028"
statute = "EU AI Act Article 72 (Recital 145)"
severity = "BLOCKER"
action = "POST_MARKET_MONITOR_LOG"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-EU-028")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-EU-028 AST query bounds
    return compliance_engine.enforce(payload)
```
