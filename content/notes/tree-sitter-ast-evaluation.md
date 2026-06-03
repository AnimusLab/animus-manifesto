---
id: N-002
title: "Tree-Sitter AST & Multi-Language Adapters in PolicyEngine"
date: 2026-05-12
author: "Tanishq Dasari"
category: "Design Note"
excerpt: "How the PolicyEngine in anchor/core/engine.py leverages language-specific adapters and tree-sitter queries to mathematically enforce safety checks at compile time."
tags:
  - Governance
  - AST Scanning
  - Tree-sitter
  - PolicyEngine
---

Rather than scanning prompts after they are generated, the AnimusLab PolicyEngine intercepts structural intent at the AST level before compilation. By utilizing tree-sitter s-expression queries (mapped in `anchor/adapters/base.py`) across Python, Rust, TypeScript, and Go, we detect structural anomalies—such as public LLM API calls (`SEC-006`) or broad environment variable harvesting (`SEC-004`)—instantly. 

The PolicyEngine parses and verifies source text prior to execution. If any AST node violates an active rule in the SHA-256 sealed `constitution.anchor`, the engine generates an in-line suppression warning (traceable via `git blame -L --porcelain`) or halts execution immediately.
