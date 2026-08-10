'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface PillarInfo {
  title: string;
  category: string;
  desc: string;
  builtByLab: string;
  codeSnippet: string;
}

const PILLAR_DETAILS: Record<string, PillarInfo> = {
  "Constitutional Systems": {
    title: "Constitutional Systems",
    category: "ANCHOR // LAW & COMPILER",
    desc: "Translates high-level legal charter text into deterministic, machine-verifiable invariant rulesets that govern software runtime behavior.",
    builtByLab: "Authored the 18-Article AnimusLab Constitution and built the .anchor DSL parser mapping EU AI Act & SEC regulations.",
    codeSnippet: `[POLICIES]\nrule_id = "POL-CONSTITUTION-001"\ntarget = "system.execution_ring"\naction = "enforce"`
  },
  "Runtime Governance": {
    title: "Runtime Governance",
    category: "ANCHOR // INTERCEPTION",
    desc: "Intercepts autonomous agent actions and tool calls at execution boundaries using zero-copy PyO3 stream bindings.",
    builtByLab: "Engineered @anchor.guard decorator and PyO3 Rust AST scanner kernel shipped in anchor-audit v6.0.1 on PyPI.",
    codeSnippet: `@anchor.guard(policy="POL-FIN-001")\ndef process_transaction(payload):\n    return execute(payload)`
  },
  "Policy Enforcement": {
    title: "Policy Enforcement",
    category: "ANCHOR // COERCION ENGINE",
    desc: "Evaluates LLM output assertions against active policy manifests, coercing or rewriting drifted outputs before user delivery.",
    builtByLab: "Built real-time assertion interceptor resolving Air Canada Chatbot liability (C-002) and Knight Capital drift (C-001).",
    codeSnippet: `[REMEDIATION]\naction = "coerce_to_fallback"\nfallback = "Policy violation detected. Operation coerced to pre-approved legal response."`
  },
  "Audit Infrastructure": {
    title: "Audit Infrastructure",
    category: "ANCHOR // CRYPTOGRAPHY",
    desc: "Produces Ed25519-signed append-only Decision Audit Chains (DAC) for forensic reconstruction and supervisory review.",
    builtByLab: "Built oversight.animuslab.dev for gated zero-knowledge mission replay with sanitized payload views (Article VII).",
    codeSnippet: `{\n  "block_id": "DAC-893041",\n  "verdict": "DENIED",\n  "signature": "ed25519:7f8a91..."\n}`
  },
  "Capability Isolation": {
    title: "Capability Isolation",
    category: "ANCHOR // WASM SANDBOX",
    desc: "Traps untrusted agent tool executions inside Diamond Cage WebAssembly execution rings with zero shared mutable state.",
    builtByLab: "Designed Diamond Cage WASM sandbox kernel with POSIX syscall whitelisting and hard memory limits.",
    codeSnippet: `[SANDBOX]\nmax_memory_mb = 64\nallow_syscalls = ["read", "write"]`
  },
  "Deterministic Control": {
    title: "Deterministic Control",
    category: "ANCHOR // SAFETY GUARANTEES",
    desc: "Replaces probabilistic system prompts with hard fail-closed binary state machine evaluation.",
    builtByLab: "Implemented deterministic matrix evaluation in Rust, guaranteeing <0.8ms inspection latency.",
    codeSnippet: `fn evaluate(state: &State) -> Verdict {\n    if state.is_valid() { Verdict::Allow } else { Verdict::Deny }\n}`
  },
  "Reasoning Architectures": {
    title: "Reasoning Architectures",
    category: "ANIMUS // NEURO-SYMBOLIC",
    desc: "Combines probabilistic neural generation with formal symbolic logic solvers to achieve structured cognitive reasoning.",
    builtByLab: "Researching hybrid neuro-symbolic cognitive pipeline models combining transformer tokens with symbolic proof graphs.",
    codeSnippet: `GraphSolver.verify_proof(proof_tree=tree, context=schema)`
  },
  "Symbolic Systems": {
    title: "Symbolic Systems",
    category: "ANIMUS // FORMAL LOGIC",
    desc: "Represents knowledge and rules as immutable first-order logic assertions suitable for automated theorem proving.",
    builtByLab: "Developing SMT solver interfaces for automated verification of complex agent workflow conditions.",
    codeSnippet: `solver.add(Assert(And(x > 0, y < 100)))`
  },
  "Memory Models": {
    title: "Memory Models",
    category: "ANIMUS // PERSISTENCE",
    desc: "Structured, tamper-evident long-term memory architectures that prevent context poisoning and vector store hallucination.",
    builtByLab: "Architected three-tier forensic persistence model combining SQLite state logs and SHA-256 integrity trees.",
    codeSnippet: `MemoryStore.commit_fact(fact_hash, signature)`
  },
  "Semantic Computation": {
    title: "Semantic Computation",
    category: "ANIMUS // COMPUTATION",
    desc: "Evaluating the meaning and intent of computational operations rather than just string syntax matching.",
    builtByLab: "Building semantic equivalence checkers that compare natural language intent against code AST contracts.",
    codeSnippet: `SemanticChecker.compare(intent="transfer_funds", ast_node=Node)`
  },
  "Cognitive Infrastructure": {
    title: "Cognitive Infrastructure",
    category: "ANIMUS // ARCHITECTURE",
    desc: "Base layer operating system primitives for multi-agent reasoning, state synchronization, and capability delegation.",
    builtByLab: "Designing distributed cognitive bus specifications for high-frequency intelligent networks.",
    codeSnippet: `CognitiveBus.publish_event(topic="state_change", payload=data)`
  },
  "Domain-Agnostic Intelligence": {
    title: "Domain-Agnostic Intelligence",
    category: "ANIMUS // GENERALIZATION",
    desc: "Formulating governance invariants that apply universally across finance, healthcare, defense, and autonomous transport.",
    builtByLab: "Proven across 5 distinct incident domains in animuslab-case-studies.",
    codeSnippet: `Invariant.assert_universal(state)`
  },
  "Observability": {
    title: "Observability",
    category: "SHADOW WATCH // TELEMETRY",
    desc: "High-throughput edge telemetry collection monitoring agent behavior across distributed multi-tenant clusters.",
    builtByLab: "Built WebSocket telemetry broadcaster in anchor/server/telemetry.py supporting real-time streaming.",
    codeSnippet: `TelemetryBroadcaster.emit(event_type="VIOLATION", payload=data)`
  },
  "Monitoring": {
    title: "Monitoring",
    category: "SHADOW WATCH // STREAMING",
    desc: "Continuous automated monitoring parsing live compliance breaches against SEC and EU AI Act regulations.",
    builtByLab: "Stood up hub.animuslab.dev parsing live risk multipliers and statutory breach streams.",
    codeSnippet: `StreamMonitor.subscribe(filter="EU_AI_ACT_ART_12")`
  },
  "Accountability": {
    title: "Accountability",
    category: "SHADOW WATCH // EVIDENCE",
    desc: "Generating cryptographically verifiable evidence packages for institutional compliance audits.",
    builtByLab: "Engineered Canon evidence package generator with SHA-256 state tracking.",
    codeSnippet: `EvidencePackage.sign(private_key=key)`
  },
  "Transparency": {
    title: "Transparency",
    category: "SHADOW WATCH // ZERO-KNOWLEDGE",
    desc: "Zero-knowledge disclosure veils allowing public verification without revealing proprietary corporate source code.",
    builtByLab: "Honored Article VII on oversight.animuslab.dev with sanitized internal file paths.",
    codeSnippet: `Sanitizer.veil_paths(log_payload)`
  },
  "Institutional Trust": {
    title: "Institutional Trust",
    category: "SHADOW WATCH // GOVERNANCE",
    desc: "Establishing mathematical trust boundaries between sovereign institutions and third-party autonomous AI vendors.",
    builtByLab: "Deployed admin.animuslab.dev Ed25519 node keypair registration cockpit.",
    codeSnippet: `TrustBoundary.verify_keypair(public_key)`
  },
  "Oversight Systems": {
    title: "Oversight Systems",
    category: "SHADOW WATCH // REPLAY",
    desc: "Forensic mission replay engines allowing regulatory investigators to inspect agent step-by-step failure paths.",
    builtByLab: "Built Next.js gated mission replay terminal with zero-knowledge audit trail playback.",
    codeSnippet: `ReplayEngine.load_mission(mission_id)`
  }
};

export default function ProgramsClient() {
  const [selectedPillar, setSelectedPillar] = useState<PillarInfo | null>(null);

  const renderCard = (title: string) => {
    const detail = PILLAR_DETAILS[title];
    return (
      <button
        key={title}
        onClick={() => setSelectedPillar(detail || {
          title,
          category: "PROGRAM PILLAR",
          desc: `Technical specification and implementation details for ${title}.`,
          builtByLab: "Implemented in AnimusLab core infrastructure.",
          codeSnippet: `// ${title}\nstatus = "active"`
        })}
        className="border border-neutral-900 p-5 bg-[#070707]/30 text-left hover:border-indigo-500/60 hover:bg-neutral-950/60 transition-all font-mono text-xs text-neutral-300 flex items-center justify-between group rounded-sm"
      >
        <span>{title}</span>
        <span className="text-[10px] text-neutral-600 group-hover:text-indigo-400 transition-colors font-bold">Inspect →</span>
      </button>
    );
  };

  return (
    <>
      <section className="px-6 md:px-12 py-32 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <p className="institution-label mb-6">Programs</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight max-w-5xl">
            Long-Term Research Programs
          </h1>
          <p className="mt-10 text-lg text-neutral-400 leading-relaxed max-w-3xl">
            Research at AnimusLab is organized through a collection of long-term programs. Each program investigates a distinct problem space while contributing to the broader mission of governable intelligent systems.
          </p>
        </div>
      </section>

      {/* ANCHOR */}
      <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <span className="institution-label">PROGRAM 01</span>
            <span className="text-xs tracking-[0.2em] text-emerald-400 uppercase font-mono font-bold">Active // PyPI: anchor-audit v6.0.1</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">Anchor</h2>
          <p className="text-xl text-neutral-300 mb-10 font-mono">Deterministic Runtime Governance</p>
          <p className="text-neutral-400 leading-relaxed max-w-3xl mb-12">
            Anchor investigates constitutional enforcement, runtime constraints, capability isolation, auditability, and policy-driven execution. The program explores how intelligent systems can remain governable after deployment.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {["Constitutional Systems", "Runtime Governance", "Policy Enforcement", "Audit Infrastructure", "Capability Isolation", "Deterministic Control"].map(renderCard)}
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-4 font-mono text-xs">
            <Link href="/anchor" className="text-indigo-400 hover:text-indigo-300 font-bold">Explore Anchor Suite →</Link>
            <span className="text-neutral-800">|</span>
            <Link href="/research" className="text-neutral-400 hover:text-white font-bold">View Publications →</Link>
            <span className="text-neutral-800">|</span>
            <a href="https://github.com/AnimusLab/Anchor" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white font-bold">GitHub →</a>
          </div>
        </div>
      </section>

      {/* ANIMUS */}
      <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <span className="institution-label">PROGRAM 02</span>
            <span className="text-xs tracking-[0.2em] text-amber-400 uppercase font-mono font-bold">Research</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">ANIMUS</h2>
          <p className="text-xl text-neutral-300 mb-10 font-mono">Reasoning Systems &amp; Cognitive Infrastructure</p>
          <p className="text-neutral-400 leading-relaxed max-w-3xl mb-12">
            ANIMUS explores reasoning architectures, symbolic representations, memory systems, semantic computation, and domain-agnostic cognition. The objective is to understand how intelligence can be represented, constrained, and governed.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {["Reasoning Architectures", "Symbolic Systems", "Memory Models", "Semantic Computation", "Cognitive Infrastructure", "Domain-Agnostic Intelligence"].map(renderCard)}
          </div>

          <Link href="/research" className="text-indigo-400 hover:text-indigo-300 font-mono text-xs font-bold">View Research →</Link>
        </div>
      </section>

      {/* SHADOW WATCH */}
      <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <span className="institution-label">PROGRAM 03</span>
            <span className="text-xs tracking-[0.2em] text-sky-400 uppercase font-mono font-bold">Observability &amp; Telemetry</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">Shadow Watch</h2>
          <p className="text-xl text-neutral-300 mb-10 font-mono">Institutional Observability &amp; Zero-Knowledge Replay</p>
          <p className="text-neutral-400 leading-relaxed max-w-3xl mb-12">
            Shadow Watch researches oversight, accountability, transparency, monitoring infrastructure, and trust systems for intelligent institutions and autonomous systems.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {["Observability", "Monitoring", "Accountability", "Transparency", "Institutional Trust", "Oversight Systems"].map(renderCard)}
          </div>

          <Link href="/research" className="text-indigo-400 hover:text-indigo-300 font-mono text-xs font-bold">View Research →</Link>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-6 md:px-12 py-28">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl font-semibold text-white font-mono">Institutional Roadmap</h2>
          <div className="space-y-8 font-mono text-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-900 pb-6 gap-2">
              <span className="text-indigo-400 font-bold text-sm">2026 // SHIPPED</span>
              <span className="text-neutral-300 font-bold">Anchor v6.0.1 — PyPI Release &amp; Multi-Tenant Control Portals</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-900 pb-6 gap-2">
              <span className="text-amber-400 font-bold text-sm">2027</span>
              <span className="text-neutral-400">ANIMUS Core — Reasoning Architecture Research</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-900 pb-6 gap-2">
              <span className="text-sky-400 font-bold text-sm">2028</span>
              <span className="text-neutral-400">Shadow Watch — Institutional Oversight &amp; ZK Proof Systems</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
              <span className="text-emerald-400 font-bold text-sm">Long-Term</span>
              <span className="text-neutral-400">Governable Intelligence Standard Framework</span>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DRAWER */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeIn">
          <div className="bg-[#08090c] border border-neutral-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 rounded-md shadow-2xl relative">
            <div className="flex items-start justify-between border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-400 tracking-wider block mb-1">// {selectedPillar.category}</span>
                <h2 className="text-2xl font-bold text-white">{selectedPillar.title}</h2>
              </div>
              <button
                onClick={() => setSelectedPillar(null)}
                className="text-neutral-500 hover:text-white font-mono text-xs border border-neutral-800 px-3 py-1 rounded-sm"
              >
                Close ESC ✕
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-neutral-500 font-bold block mb-1">// Description</span>
                <p className="text-neutral-300 font-sans text-sm leading-relaxed">{selectedPillar.desc}</p>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-sm">
                <span className="text-emerald-400 font-bold block mb-1">// Implemented by AnimusLab</span>
                <p className="text-neutral-300 font-sans text-xs leading-relaxed">{selectedPillar.builtByLab}</p>
              </div>

              <div>
                <span className="text-amber-400 font-bold block mb-1">// Code Specification</span>
                <pre className="text-xs text-neutral-200 bg-black p-4 border border-neutral-850 rounded-sm overflow-x-auto">
                  <code>{selectedPillar.codeSnippet}</code>
                </pre>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setSelectedPillar(null)}
                className="bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold px-6 py-2 rounded-sm"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
