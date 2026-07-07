---
id: C-002
title: "Reserve Bank of India (RBI) Consultation Comments"
date: 2026-03-08
status: Submitted
publisher: Reserve Bank of India
category: Consultation Response
tags:
  - Model Risk Management
  - AI Governance
  - Commercial Banking
  - Central Banking
pdf: "/docs/policy/rbi_comments.pdf"
excerpt: "AnimusLab's formal comments on the RBI's draft guidelines for AI model risk management, highlighting AST constraints and decoupled enforcement mechanisms in commercial banking."
---

# AnimusLab Comments on the RBI Draft AI Governance Guidelines

We submitted our technical comments on the Reserve Bank of India's (RBI) draft guidelines for artificial intelligence model risk management. Our comments focus on how financial institutions can transition to automated, machine-readable validation systems.

## Key Recommendations

1. **Static AST Enforcement**: Central bank guidelines should require institutions using large language models to block unauthorized imports and dynamic code blocks via static AST checks.
2. **Decoupling Compliance Checkers**: The compliance verification layer must exist outside the core inference host. Standardizing on independent check environments prevents policy tampering.
3. **Sealed Audit Trails**: All policy decisions, compliance logs, and model inputs must be logged in a tamper-evident audit ledger using cryptographic keys.
