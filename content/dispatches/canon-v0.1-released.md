---
id: D-001
title: "Canon v0.1.0 Released"
date: 2026-06-29
category: Release Announcement
tags:
  - Canon
  - Release
  - Hashing
  - Governance Integrity
excerpt: "We are pleased to announce the initial release of Canon (v0.1.0), our deterministic governance knowledge integrity engine. This release implements source monitors, diff engines, and a tamper-evident audit ledger."
---

# Canon v0.1.0 — Initial Public Release

Today, AnimusLab has released Canon v0.1.0, establishing the deterministic governance policy supply-chain layer that precedes Anchor Static, AnchorJIT, and Anchor Runtime.

## Highlights

- **Deterministic Ingestion**: Monitors, crawls, and pulls rulesets from external directories (NIST, OWASP, internal policies).
- **Cryptographic State Checks**: Hashing rulesets to immediately identify and record modifications.
- **Evidence Packages**: Creating structured diff records detailing added, modified, deprecated, or removed rules.
- **Tamper-Evident Ledger**: Commits approval signatures to a hash-chained ledger database to prevent rewriting governance history.

## Performance Benchmarks

Canon processes rule sets at microsecond latency:
- **E2E Pipeline (Diff + Hash + Ledger)**: 490.10 µs mean latency.
- **Throughput**: ~2,040 pipeline runs per second under benchmark conditions.
