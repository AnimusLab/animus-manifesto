---
id: RULE-OWASP-001
title: "OWASP LLM-01: Direct & Indirect Prompt Injection Boundary"
date: 2026-08-09
category: "Open Source Security Standard"
jurisdiction: "Global Security Standard"
statuteRef: "OWASP Top 10 for LLM Applications (LLM01:2025)"
severity: "BLOCKER"
mitigationAction: "SANCTIFY_INPUT_STREAM"
tags:
  - RULE-OWASP-001
  - Global Security Standard
  - OWASP LLM-01
  - Machine Enforceable Gate
excerpt: "Intercepts direct user prompt overrides and indirect RAG retrieval payload poisoning before model context window assembly."
---

# OWASP LLM-01: Direct & Indirect Prompt Injection Boundary

**Statutory Framework:** OWASP Top 10 for LLM Applications (LLM01:2025)  
**Rule ID:** `RULE-OWASP-001` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `SANCTIFY_INPUT_STREAM`  

---

## 1. Statutory Mandate & Legal Boundary

> *"Intercepts direct user prompt overrides and indirect RAG retrieval payload poisoning before model context window assembly."*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.RULE-OWASP-001]
rule_id = "RULE-OWASP-001"
statute = "OWASP Top 10 for LLM Applications (LLM01:2025)"
severity = "BLOCKER"
action = "SANCTIFY_INPUT_STREAM"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="RULE-OWASP-001")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against RULE-OWASP-001 AST query bounds
    return compliance_engine.enforce(payload)
```
