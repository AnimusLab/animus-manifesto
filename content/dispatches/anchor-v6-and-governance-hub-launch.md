---
id: DISPATCH-003
title: "Anchor v6.0.1 Released on PyPI & Complete Rework of Sovereign Governance Hub"
date: 2026-08-09
category: "Release & Infrastructure"
tags:
  - PyPI Release
  - anchor-audit
  - Governance Hub
  - Zero-Knowledge Replay
  - Rust PyO3 Engine
excerpt: "AnimusLab announces the official v6.0.1 release of the anchor-audit Python kernel on PyPI, alongside the complete multi-tenant rework of our sovereign governance portals (admin, hub, oversight)."
---

# Anchor v6.0.1 Released on PyPI & Complete Rework of Sovereign Governance Hub

**Date:** August 9, 2026  
**Category:** Release & Infrastructure  
**Kernel Release:** `anchor-audit v6.0.1` (PyPI)  
**Infrastructure Plane:** Sovereign Control Portals (`admin.animuslab.dev`, `hub.animuslab.dev`, `oversight.animuslab.dev`)  

---

## Executive Summary

AnimusLab has officially shipped **`anchor-audit v6.0.1`** live to the Python Package Index (PyPI), completing a foundational overhaul of both our deterministic auditing kernel and our multi-tenant sovereign control plane.

This release bridges the gap between static compilation analysis and zero-copy runtime interception. Developers can now install `anchor-audit` directly via `pip`, inspect execution paths using parallel Rust AST queries, and stream cryptographically signed decision logs into our three dedicated subdomain control portals.

---

## Key Highlights of the v6.0.1 Release

### 1. Production PyPI Distribution (`anchor-audit v6.0.1`)
- **PyO3 Rust Kernel:** Fast parallel AST scanner built on compiled Rust binaries (`lib.rs` / `walker.rs`), delivering sub-millisecond query performance over 1.8M lines/sec codebases.
- **Click CLI Toolkit:** Command suite including `anchor init`, `anchor check .`, `anchor verify-sync`, `anchor drift`, `anchor sync`, and `anchor heal`.
- **Runtime Interception:** `@anchor.guard` decorator and thread-level interceptor inspecting LLM tool invocations before execution hit external networks.

### 2. Multi-Tenant Sovereign Portals Rework
Our web control plane has been reorganized into three specialized, high-assurance subdomain environments:
- **`admin.animuslab.dev` (Node Whitelist Cockpit):** Sovereign keypair management reviewing pending Ed25519 node registrations and provisioning active telemetry streams.
- **`hub.animuslab.dev` (Real-Time Violation Feed):** Live compliance breach dashboard parsing real-time EU AI Act (Article 12/19) and SEC regulatory violations.
- **`oversight.animuslab.dev` (Gated Mission Replay Engine):** Zero-Knowledge proof verifier and forensic replay terminal that honors Article VII (Truth Over Optics) by sanitizing internal file paths and proprietary IP.

---

## Quick Links & Access Points

Access the release across our core distribution channels:

- 🛡️ **PyPI Package:** [`https://pypi.org/project/anchor-audit/`](https://pypi.org/project/anchor-audit/)  
- 🐙 **GitHub Repository:** [`https://github.com/AnimusLab/Anchor`](https://github.com/AnimusLab/Anchor)  
- 🌐 **Anchor Research Portal:** [`https://anchor.animuslab.dev`](https://anchor.animuslab.dev)  
- 🔒 **Zero-Knowledge Oversight Replay:** [`https://oversight.animuslab.dev`](https://oversight.animuslab.dev)  

---

## Installation Quick Start

To begin using the v6.0.1 governance kernel in Python:

```bash
pip install anchor-audit
```

Initialize your workspace constitution:

```bash
anchor init
anchor check .
```

Wrap tool calls in code:

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="POL-FIN-001")
def execute_wire_transfer(amount: float, recipient: str):
    return bank_api.transfer(amount, recipient)
```

---

## Governance & Compliance Attestation

This release enforces all 18 Articles of the AnimusLab Constitution, satisfying statutory log retention requirements for EU AI Act Article 12, RBI FREE-AI Recommendations 7 & 14, and SEC 2026 Examination Priorities.
