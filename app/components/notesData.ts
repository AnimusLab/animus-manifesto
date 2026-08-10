export interface Publication {
  id: string;
  title: string;
  abstract: string;
  date: string;
  publisher: string;
  doiLink: string;
  pdfLink: string;
}

export interface ResearchNote {
  slug: string;
  title: string;
  abstract: string;
  date: string;
  category: 'Design Note' | 'Technical Essay' | 'Lab Log';
  content: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface SystemEvidence {
  name: string;
  type: string;
  description: string;
}

export interface Invariant {
  principle: string;
  title: string;
  statement: string;
  fullText: string;
  applications: string[];
}

export const INVARIANTS: Invariant[] = [
  {
    principle: 'PRINCIPLE 1 of 6',
    title: 'Truth Over Optics',
    statement: 'If it cannot survive scrutiny, it should not be displayed.',
    fullText: 'If a system looks good but lies, it is broken. I reject dashboards, charts, metrics, and narratives that feel informative but distort reality. I would rather show less and be correct than show more and mislead. This is why AnimusLab uses deterministic symbolic verification rather than probabilistic confidence scores. Invariant: If it cannot survive scrutiny, it should not be displayed. Every choice I made that selected symbolic logic over probabilistic scoring, deterministic AST analysis over LLM-based safety review, sourced knowledge nodes over generated text - all of it comes from this principle. A system that shows a confidence score of 0.83 for a hallucinated fact is not cautious. It is dishonest. I built AnimusLab to never be in that position.',
    applications: [
      'Implemented compiler-level AST parsing in anchor/core/engine.py (scan_file method) using tree-sitter to mathematically evaluate code structure prior to execution.',
      'Enforced immediate thread termination via raising AnchorViolationError within anchor/runtime/guard.py when an unauthorized AST namespace is accessed.'
    ]
  },
  {
    principle: 'PRINCIPLE 2 of 6',
    title: 'Semantics Before Representation',
    statement: 'Representation is disposable. Meaning is not.',
    fullText: 'I do not start with the user interface. I start with meaning. Signal before renderer. Contract before convenience. Rules before aesthetics. I began AnimusLab by defining what each state means, what each Emotion Registry entry means, and what each governance rule means - before a single line of UI was written. Invariant: Representation is disposable. Meaning is not. This is why I specified the full AnimusLabPackage schema before MARCUS was architected. The structured data contract - every field typed, bounded, and defined - came first. I designed MARCUS around the meaning of what AnimusLab produces, not the reverse. The interface is always downstream of the semantics. I have never violated that order and I do not intend to.',
    applications: [
      'Mapped and sealed universal governance rules inside anchor/schema.py to represent structural schemas before developing visual dashboard renderers.',
      'Isolated state telemetry fields inside anchor/core/models.py to govern raw data structures prior to deploying relational visualization components.'
    ]
  },
  {
    principle: 'PRINCIPLE 3 of 6',
    title: 'Constraints Create Clarity',
    statement: 'Freedom without constraints produces noise.',
    fullText: 'I do not see constraints as limitations - I see them as defence mechanisms. The Global Hard Floors in AnimusLab are not restrictions on what AnimusLab can know. They are restrictions on what it can do. I add rules not to slow things down, but to prevent the kind of silent architectural rot that only becomes visible in production. Invariant: Freedom without constraints produces noise. Anchor\'s three-file governance hierarchy - constitution.anchor sealed with SHA-256, policy.anchor that can only strengthen rules, never weaken them - is this principle made concrete. The Interrupt Stack\'s hard priority ordering. The tensor drift caps. The CLINICAL state\'s unconditional override of everything else. These are the load-bearing walls. I do not remove loadbearing walls because someone finds them inconvenient.',
    applications: [
      'Deployed a three-file policy gate (constitution.anchor, policy.anchor, mitigation.anchor) at anchor/governance/ to force rigid, immutable runtime boundaries.',
      'Validated policy file signatures dynamically using GOVERNANCE.lock hash verification inside anchor/core/constitution.py to prevent uncommitted rule drift.'
    ]
  },
  {
    principle: 'PRINCIPLE 4 of 6',
    title: 'Failure Is a State Transition',
    statement: 'Failure is evidence of movement.',
    fullText: 'I do not hide failures. I do not dramatise them either. I treat them as versioned states. This is why my loss function is called a Therapy Log, not an error log. A wrong state classification is not a crash - it is new training data, logged with a violation ID and a pre-authored mitigation directive. Invariant: Failure is evidence of movement. The Directive Tone Loop in Anchor exists because of this principle. When AnimusLab produces noncompliant output, nothing halts, nobody is alerted, no exception is raised. A structured Therapy Log entry is written, the pre-authored mitigation is applied, the output is regenerated, and reaudited. The failure is treated as information. It is how AnimusLab improves, not evidence that it is broken. I refuse to build systems that treat learning as an error condition.',
    applications: [
      'Developed the Hybrid Healer program in anchor/core/healer.py (suggest_fix & apply_fix methods) to propose precise, local source code diff refactors on policy failures.',
      'Integrated git blame parsing using --porcelain in anchor/core/engine.py (_get_suppression_author) to automatically log accountability traces inside the violation ledger.'
    ]
  },
  {
    principle: 'PRINCIPLE 5 of 6',
    title: 'Domain-Agnostic by Default',
    statement: 'If it only works in one domain, it is not fundamental enough.',
    fullText: 'Finance, infrastructure, AI, security, personal growth - I do not care what the data is. I care about direction, momentum, regime, and confidence. I designed AnimusLab to be a Political Grandmaster on Monday and a code architect on Tuesday, using the same underlying reasoning architecture. Invariant: If a concept only works in one domain, it is not fundamental enough. The six neuromodulated states, the PRIMUS tensor, the Knowledge Acquisition Protocol, the Therapy Log - none of these are finance-specific, AI-specific, or domain-specific in any way. A DISSENTING state that argues a wrong assumption in a geopolitical intelligence report runs on the same code as one that argues a wrong assumption in a trading thesis. I built it this way deliberately. Domain-specific frameworks are, by definition, not fundamental enough.',
    applications: [
      'Architected general-purpose query matching adapters (anchor/adapters/base.py) that parse structural syntax traits regardless of application domains.',
      'Decoupled general syntax flow analysis (anchor/core/contexts.py) from target business applications to execute identical AST scanning rules across different industries.'
    ]
  },
  {
    principle: 'PRINCIPLE 6 of 6',
    title: 'Rebuild If The Foundation Is Wrong',
    statement: 'Adoption is optional. Integrity is not.',
    fullText: 'I will re-create things others say already exist if the existing versions violate my principles. AnimusLab exists because every existing AI governance framework I evaluated was: - Probabilistic - therefore unjustifiable to a regulator - Sycophantic - therefore useless as a peer I did not patch them. I designed from scratch. Invariant: Adoption is optional. Integrity is not. Shadow Watch did not exist, so I built it. Anchor did not have a runtime output gate, so I designed v3. The six neuromodulated states had no prior equivalent that matched my requirements, so I did the NEST translation from scratch. This is not a preference for novelty. It is a refusal to build on foundations I know are wrong. Every component in this architecture exists because the alternative I evaluated first was not good enough - and I accepted the cost of building correctly over the convenience of adopting something broken.',
    applications: [
      'Constructed a custom, virtualized WebAssembly sandbox runtime (Diamond Cage inside anchor/core/sandbox.py) to intercept native OS calls and isolate execution.',
      'Engineered an edge-isolated SQLite local Spoke model (anchor.db) to keep developer code and audit payloads completely private from central databases.'
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-anchor-2026',
    title: 'Anchor: Constitutional Governance Infrastructure for Intelligent Systems',
    abstract: 'We present the architectural design and formal specification of the Anchor governance engine. By isolating capabilities into runtime-verifiable namespaces and executing deterministic Abstract Syntax Tree (AST) scanning before context compilation, Anchor provides verifiable containment borders for autonomous agent systems. The runtime execution layer enforces invariants in 2.1ms, establishing a zero-trust model for distributed agent networks.',
    date: 'April 2026',
    publisher: 'Zenodo Registry',
    doiLink: 'https://doi.org/10.5281/zenodo.anchor-preprint',
    pdfLink: '#pdf'
  }
];

export const RESEARCH_NOTES: ResearchNote[] = [
  {
    slug: 'tree-sitter-ast-evaluation',
    title: 'Tree-Sitter AST & Multi-Language Adapters in PolicyEngine',
    abstract: 'How the PolicyEngine in anchor/core/engine.py leverages language-specific adapters and tree-sitter queries to mathematically enforce safety checks at compile time.',
    date: 'May 12, 2026',
    category: 'Design Note',
    content: 'Rather than scanning prompts after they are generated, the AnimusLab PolicyEngine intercepts structural intent at the AST level before compilation. By utilizing tree-sitter s-expression queries (mapped in anchor/adapters/base.py) across Python, Rust, TypeScript, and Go, we detect structural anomalies - such as public LLM API calls (SEC-006) or broad environment variable harvesting (SEC-004) - instantly. The PolicyEngine parses and verifies source text prior to execution. If any AST node violates an active rule in the SHA-256 sealed constitution.anchor, the engine generates an in-line suppression warning (traceable via git blame -L --porcelain) or halts execution immediately.'
  },
  {
    slug: 'three-tier-forensic-persistence',
    title: 'Three-Tier Forensic Telemetry & SQLite Spoke Databases',
    abstract: 'A deep dive into three decoupled logging zones that isolate sensitive user payloads from central databases to ensure strict privacy.',
    date: 'April 19, 2026',
    category: 'Technical Essay',
    content: 'In our audit architecture, sensitive payload data must never be stored on centralized servers. AnimusLab implements a decoupled three-tier persistence topology. Tier 3 is a local SHA-256 JSONL append-only audit chain created at the execution point (anchor/runtime/decision_auditor.py). Tier 2 stores fully encrypted payloads inside isolated local SQLite Spoke databases (anchor.db). Tier 1 transmits only ~200-byte WebSocket headers (hub_id, timestamp, rule_id, status) to the relational Hub database at app.anchor.animuslab.dev. This isolates raw developer files and sensitive client logs at the edge, exposing only metadata to centralized dashboards.'
  },
  {
    slug: 'sovereign-relay-protocol',
    title: 'Sovereign Relay Protocol & Temporal Ledger Entry Sync',
    abstract: 'How regulators request and audit secure, encrypted historical records directly from localized spoke nodes on demand using signature syncs.',
    date: 'March 28, 2026',
    category: 'Technical Essay',
    content: 'The Sovereign Relay Protocol allows regulators on oversight.anchor.animuslab.dev to request specific historical payload logs directly from edge Spoke nodes through authenticated WebSocket channels. In version 6.2, we formalized institutional identity scopes, signature columns on LedgerEntry, and a POST /api/ledger gateway to receive cryptographically signed telemetry digests. Local Spoke nodes compile ZK-proofs of policy compliance and push them to the Hub, ensuring strict temporal authority and audit integrity without leaking confidential code.'
  }
];

export const APPLIED_SYSTEMS: SystemEvidence[] = [
  {
    name: 'FORGE',
    type: 'Semantic Compilation Framework',
    description: 'A compiler converting raw input data blocks into typed, structurally complete AnimusLabPackage schemas under Principle 2 (Semantics Before Representation).'
  },
  {
    name: 'QuantForge',
    type: 'Deterministic Reasoning Boundaries',
    description: 'An execution gate isolating multi-asset financial calculations behind strict symbolic policy layers to eliminate hallucinated quantitative models.'
  },
  {
    name: 'QuantGrid',
    type: 'Distributed Analytical Execution Engine',
    description: 'A distributed array processor mapping calculations into decoupled runtime containers to prevent architectural drift across scalable calculations.'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2025',
    title: 'AnimusLab Founded',
    description: 'Establishment of the independent research lab to explore deterministic security, control mechanisms, and trust architectures for intelligent systems.'
  },
  {
    year: '2025',
    title: 'Anchor Engine Initiated',
    description: 'Beginning of the Anchor governance engine codebase, focusing on AST-level security scanning and zero-trust capability resolution.'
  },
  {
    year: '2026',
    title: 'AnimusLab Architecture Published',
    description: 'Release of the core reasoning model specifications across three formal volumes, detailing semantic state layers, neuromodulation, and the Interrupt Stack.'
  },
  {
    year: '2026',
    title: 'Shadow Watch Prototype Completed',
    description: 'Implementation of the zero-knowledge session trust telemetry system, isolating prompt and forensic database payloads inside edge SQLite nodes.'
  },
  {
    year: '2026',
    title: 'Anchor Engine Preprint Released',
    description: 'Scientific publication outlining layer-1 execution guardrails and deterministic capability boundaries on the Zenodo open registry.'
  }
];
