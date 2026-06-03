---
id: N-003
title: "Three-Tier Forensic Telemetry & SQLite Spoke Databases"
date: 2026-04-19
author: "Tanishq Dasari"
category: "Technical Essay"
excerpt: "A deep dive into three decoupled logging zones that isolate sensitive user payloads from central databases to ensure strict privacy."
tags:
  - Privacy
  - Telemetry
  - SQLite
  - Forensic Logs
---

In our audit architecture, sensitive payload data must never be stored on centralized servers. AnimusLab implements a decoupled three-tier persistence topology. 

Tier 3 is a local SHA-256 JSONL append-only audit chain created at the execution point (`anchor/runtime/decision_auditor.py`). 

Tier 2 stores fully encrypted payloads inside isolated local SQLite Spoke databases (`anchor.db`). 

Tier 1 transmits only ~200-byte WebSocket headers (hub_id, timestamp, rule_id, status) to the relational Hub database at `app.anchorgovernance.tech`. This isolates raw developer files and sensitive client logs at the edge, exposing only metadata to centralized dashboards.
