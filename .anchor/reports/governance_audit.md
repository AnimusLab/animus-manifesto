# Anchor Governance Audit

**Status:** FAILED  
**Timestamp:** 2026-06-09 05:21:33  
**Source:** `D:\animus-manifesto`  

## Summary

| Category | Count |
|---|---|
| Blockers / Errors | 2 |
| Warnings | 0 |
| Info | 0 |
| Suppressed | 0 |
| Files Scanned | 44 |

## Active Violations

| ID | Severity | File | Message |
|---|---|---|---|
| `FINOS-014, OWASP-002, RBI-018, SEC-007` | **BLOCKER** | `.\scripts\check_test.py:6` | Native subprocess execution detected. Use Diamond Cage (WASM) sandboxing for agent tools. |
| `FINOS-014, OWASP-002, RBI-018, SEC-007` | **BLOCKER** | `.\scripts\check_test.py:12` | Native subprocess execution detected. Use Diamond Cage (WASM) sandboxing for agent tools. |

> *Suppressed exceptions are authorized security bypasses â€” verify authors are correct.*
