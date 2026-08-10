import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import MermaidDiagram from "../../components/MermaidDiagram";

interface Props {
  params: Promise<{
    step: string;
  }>;
}

interface CanonStepDetail {
  title: string;
  stepNum: string;
  subtitle: string;
  desc: string;
  technicalOverview: string;
  builtByLab: string;
  mermaidChart: string;
  cliExample: string;
  bullets: string[];
  invariants: string[];
}

const STEPS_DETAIL: Record<string, CanonStepDetail> = {
  ingest: {
    title: "Ingest",
    stepNum: "01",
    subtitle: "Continuous monitoring, git crawling, and SHA-256 state tracking of external governance sources.",
    desc: "Canon continuously tracks changes to external repositories, statutory registries, and security framework portals (including OWASP LLM Top 10, NIST AI RMF, EU AI Act amendments, and SEC regulatory releases). It pulls raw source files, excludes localized noise, and computes deterministic SHA-256 state hashes.",
    technicalOverview: "The Ingest worker operates as an automated web-crawler and AST pre-parser. It listens to git webhooks and regulatory RSS feeds, normalizing non-standard document formats into structured AST node schemas for downstream compilation.",
    builtByLab: "Engineered Canon Ingest crawler, tracking 20+ statutory framework repositories with SHA-256 state matching and zero-copy diff calculation.",
    mermaidChart: `graph TD
    classDef src fill:#0f0f15,stroke:#2e2e3f,stroke-width:1px,color:#818cf8,font-family:monospace;
    classDef proc fill:#0b0b14,stroke:#3b82f6,stroke-width:1.5px,color:#e5e5e5;
    classDef out fill:#14532d,stroke:#22c55e,stroke-width:1px,color:#86efac;

    S1["OWASP LLM Top 10 Repo"] --> P1["Canon Ingest Worker"]
    S2["NIST AI RMF Portal"] --> P1
    S3["EU AI Act Registry"] --> P1
    P1 -->|1. Parse Syntax Tree| P2["Compute SHA-256 State Hash"]
    P2 -->|2. Strip Non-Canonical Locales| P3["Normalize AST Node Schema"]
    P3 --> O1["Canonical Ingestion Draft"]

    class S1,S2,S3 src;
    class P1,P2,P3 proc;
    class O1 out;`,
    cliExample: `# Canon CLI Ingestion Command
$ canon ingest --source="https://github.com/OWASP/www-project-top-10-for-large-language-model-applications" \\
  --target-domain="OWASP_LLM" \\
  --compute-hash \\
  --out=".canon/drafts/owasp_llm_v2.json"

[OK] Fetched 10 rules. SHA-256: 4f8a91b2c... State: DRAFT_READY`,
    bullets: [
      "Repository Tracking: Automatically crawling main branches and git trees of official governance registries.",
      "SHA-256 State Checking: Computing deterministic hashes of rule states to detect unauthorized upstream drift.",
      "Translation Filtering: Excluding localized folders to focus on canonical English statutory source materials.",
      "AST Node Normalization: Converting raw markdown/HTML into standardized AST AST_NODE structures."
    ],
    invariants: [
      "Deterministic Source Matching: Every ingested rule carries a cryptographic SHA-256 origin hash.",
      "Zero-Copy Parsing: Source text is parsed in memory using Tree-sitter native AST queries.",
      "Append-Only Draft Log: Ingested rule states cannot overwrite existing active production manifests without approval."
    ]
  },
  approve: {
    title: "Approve",
    stepNum: "02",
    subtitle: "Securing governance transitions behind human compliance supervisors and Ed25519 cryptographic signatures.",
    desc: "When modifications or new statutory rules are ingested, Canon generates an immutable evidence package. A qualified compliance officer or safety maintainer inspects the diffs, verifies legal obligations, and signs off using an Ed25519 hardware keypair.",
    technicalOverview: "The Approval step enforces human-in-the-loop governance for all critical invariant transitions. The generated evidence package contains full before-and-after diffs, regulatory citations, and risk scores, sealing the approved state inside an append-only ledger.",
    builtByLab: "Built Canon Evidence Package Generator and Ed25519 signing interface powering admin.animuslab.dev sovereign node whitelist cockpit.",
    mermaidChart: `graph TD
    classDef draft fill:#0f0f15,stroke:#2e2e3f,stroke-width:1px,color:#818cf8;
    classDef human fill:#1f190d,stroke:#f59e0b,stroke-width:1.5px,color:#fde68a;
    classDef ledger fill:#14532d,stroke:#22c55e,stroke-width:1px,color:#86efac;

    D1["Canonical Ingestion Draft"] --> E1["Generate Evidence Package"]
    E1 --> H1["Human Compliance Reviewer"]
    H1 -->|Inspect Diffs & Statutory Mappings| H2["Sign with Ed25519 Keypair"]
    H2 --> L1["Append to Ledger: GOVERNANCE.lock"]
    L1 --> L2["Approved Immutable Manifest"]

    class D1 draft;
    class H1,H2 human;
    class L1,L2 ledger;`,
    cliExample: `# Canon Approval & Signing Command
$ canon approve --draft=".canon/drafts/owasp_llm_v2.json" \\
  --signer="compliance-officer-01@bank.internal" \\
  --keypair="~/.ssh/id_ed25519_gov" \\
  --reason="Satisfies EU AI Act Article 12 v2 Log Mandates"

[OK] Evidence Package #EV-9801 Sealed. Signature: ed25519:8f9a2b...`,
    bullets: [
      "Evidence Packages: Generating comprehensive diff reports detailing rules modified, added, or deleted.",
      "Attributed Audit Records: Binding supervisor keypair signatures to approved governance state changes.",
      "Hash-Chained Ledger: Preventing history rewriting by chaining approval records sequentially in GOVERNANCE.lock.",
      "Regulatory Attestation: Attaching legal justification metadata to every approved invariant update."
    ],
    invariants: [
      "Article IV Governance First: No machine code execution rule can be modified without explicit signed human authorization.",
      "Non-Repudiation: Every approval is tied to a verified cryptographic Ed25519 keypair.",
      "Governance Floor: Approval can only raise security severity levels, never silently lower them."
    ]
  },
  compile: {
    title: "Compile",
    stepNum: "03",
    subtitle: "Compiling approved rule manifests into machine-executable .anchor policy matrices and Tree-sitter AST queries.",
    desc: "Anchor Static compiles approved human-readable rule configurations into a binary-ready policy manifest (\`constitution.anchor\`). It validates syntax grammar, resolves rule conflicts across statutory jurisdictions, and builds Tree-sitter AST query matchers.",
    technicalOverview: "The Compiler translates abstract legal invariants into low-level AST query pattern matchers. It runs static verification passes across target application source trees, detecting code-level vulnerability patterns before CI/CD deployment.",
    builtByLab: "Authored the .anchor Domain Specific Language (DSL) compiler and Tree-sitter query generator evaluating Python, Rust, and TypeScript AST nodes.",
    mermaidChart: `graph TD
    classDef in fill:#0f0f15,stroke:#2e2e3f,stroke-width:1px,color:#818cf8;
    classDef comp fill:#111827,stroke:#6366f1,stroke-width:1.5px,color:#e5e5e5;
    classDef out fill:#14532d,stroke:#22c55e,stroke-width:1px,color:#86efac;

    A1["Approved Immutable Manifest"] --> C1["Anchor DSL Compiler"]
    C1 -->|1. Parse Rules DSL| C2["Resolve Cross-Jurisdiction Conflicts"]
    C2 -->|2. Generate AST Queries| C3["Emit constitution.anchor Binary Manifest"]
    C3 --> O1["Production-Ready AST Matcher"]

    class A1 in;
    class C1,C2,C3 comp;
    class O1 out;`,
    cliExample: `# Anchor Compiler Verification Command
$ anchor compile --manifest=".canon/approved/manifest_v6.json" \\
  --target="python,rust" \\
  --out="constitution.anchor" \\
  --strict

[OK] Compiled 18 Constitutional Invariants. 0 Conflicts. Binary size: 42 KB.`,
    bullets: [
      "AST Query Generation: Translating compliance checks to exact programming language syntax trees.",
      "Conflict Resolution: Detecting contradicting constraints across EU, SEC, and RBI rulesets before deployment.",
      "Static CI/CD Verification: Enforcing lint checks and blocking non-compliant pull requests in GitHub Actions.",
      "Polyglot Rule Emitting: Producing single policy manifests that enforce across Python, Rust, and Node.js."
    ],
    invariants: [
      "Article XIII Supremacy: Compiled constitution.anchor rules take precedence over all local code configurations.",
      "Syntax Boundary Integrity: Invalid DSL syntax halts compilation immediately.",
      "Deterministic Matching: Identical AST input nodes guarantee 100% reproducible query verdicts."
    ]
  },
  optimize: {
    title: "Optimize",
    stepNum: "04",
    subtitle: "Dynamic JIT compilation of hot validation paths into native assembly for sub-millisecond overhead.",
    desc: "AnchorJIT compiles high-frequency policy constraints and AST evaluation loops directly into native machine instructions (x86_64 / AArch64 assembly), eliminating runtime execution bottlenecks on heavy financial workloads.",
    technicalOverview: "Under ultra-low-latency financial or medical workloads (e.g. algorithmic market making or real-time patient data streams), standard interpreted rule checks add latency. AnchorJIT uses LLVM/Cranelift backends to compile hot policy evaluation trees into zero-overhead machine instructions.",
    builtByLab: "Engineered sub-millisecond PyO3 Rust AST evaluation kernel achieving <0.8ms inspection overhead over 1.8M lines/sec codebases.",
    mermaidChart: `graph TD
    classDef in fill:#0f0f15,stroke:#2e2e3f,stroke-width:1px,color:#818cf8;
    classDef jit fill:#1e1b4b,stroke:#818cf8,stroke-width:1.5px,color:#c7d2fe;
    classDef fast fill:#064e3b,stroke:#34d399,stroke-width:1px,color:#a7f3d0;

    P1["constitution.anchor Rules"] --> J1["AnchorJIT Optimizer"]
    J1 -->|Analyze Hot Execution Paths| J2["LLVM / Cranelift IR CodeGen"]
    J2 -->|Emit Native Assembly| J3["Sub-Millisecond Inline Gate"]
    J3 --> F1["Execution Latency < 0.8ms"]

    class P1 in;
    class J1,J2,J3 jit;
    class F1 fast;`,
    cliExample: `# AnchorJIT Benchmark Output
$ anchor-jit bench --policy="constitution.anchor" --workload="100k_transactions"

[BENCHMARK] Executed 100,000 tool evaluations in 74ms.
[PERFORMANCE] Average Inspection Overhead: 0.74 μs / eval.
[STATUS] ZERO-COPY MEMORY BOUNDARY VERIFIED.`,
    bullets: [
      "Dynamic JIT Compilation: Compiling hot policy validation loops into native machine instructions.",
      "Memory Safety Bounds: Validating code compilation inside native WebAssembly sandbox borders.",
      "Microsecond Latency: Pushing check latency down to sub-millisecond scales (<0.8ms).",
      "SIMD Vectorization: Parallelizing multi-attribute regex scans using AVX-512 / NEON instructions."
    ],
    invariants: [
      "Zero Allocation in Hot Paths: Interception memory overhead is bounded to constant O(1) stack space.",
      "Thread Isolation: JIT-compiled rule blocks execute in isolated thread memory regions.",
      "Guaranteed Execution Caps: JIT code terminates deterministically after fixed CPU tick bounds."
    ]
  },
  enforce: {
    title: "Enforce",
    stepNum: "05",
    subtitle: "Inline runtime interception, Diamond Cage WASM capability sandboxing, and Decision Audit Chains.",
    desc: "Anchor Runtime intercepts AI agent execution in real-time. It validates prompt assertions, isolates untrusted tool capabilities inside Diamond Cage WebAssembly sandboxes, and writes HMAC-signed Decision Audit Chain (DAC) logs for regulatory compliance.",
    technicalOverview: "The Enforce layer is the final line of defense. Utilizing the @anchor.guard decorator and PyO3 C-extension bindings, it intercepts model invocations before actions reach host operating systems, databases, or external network APIs.",
    builtByLab: "Shipped anchor-audit v6.0.1 on PyPI, complete with Diamond Cage WASM sandbox, FastAPI gate endpoints, and oversight.animuslab.dev zero-knowledge mission replay.",
    mermaidChart: `graph TD
    classDef req fill:#0f0f15,stroke:#2e2e3f,stroke-width:1px,color:#818cf8;
    classDef gate fill:#7f1d1d,stroke:#ef4444,stroke-width:1.5px,color:#fca5a5;
    classDef pass fill:#14532d,stroke:#22c55e,stroke-width:1px,color:#86efac;

    R1["Agent Tool Call Request"] --> G1["Anchor Runtime Interceptor"]
    G1 -->|1. Check Invariants| G2["Diamond Cage WASM Sandbox"]
    G2 -->|COMPLIANT| P1["Allow Execution & Record Hash"]
    G2 -->|VIOLATION| F1["Coerce Response & Seal Audit Chain"]
    P1 --> DAC["Append to Decision Audit Chain"]
    F1 --> DAC

    class R1 req;
    class G1,G2,F1 gate;
    class P1,DAC pass;`,

    cliExample: `# Runtime Decorator Integration Code
from anchor import AnchorGuard

@AnchorGuard.guard(policy="POL-SUPPORT-002")
def process_agent_response(prompt: str) -> str:
    # Output assertions verified against active refund invariants
    return llm.generate(prompt)

# Result: Violations automatically coerced to pre-approved legal fallback text.`,
    bullets: [
      "Diamond Cage Sandbox: Isolating untrusted third-party tool code in WebAssembly (WASM) execution rings.",
      "Inline Stream Interception: Scanning inputs and blocking violations before execution hits production networks.",
      "Edge Telemetry Isolation: Writing local cryptographically linked logs without exposing raw client data.",
      "Zero-Knowledge Replay: Sanitizing internal file paths before regulatory inspection on oversight.animuslab.dev."
    ],
    invariants: [
      "Article VII Truth Over Optics: Audit logs provide un-tampered forensic transparency.",
      "Fail-Closed Guarantee: Interceptor failure or timeout immediately blocks execution.",
      "Cryptographic Non-Repudiation: Every execution verdict is signed with an Ed25519 keypair."
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { step } = await params;
  const detail = STEPS_DETAIL[step];
  if (!detail) return {};

  return {
    title: `${detail.title} Step | Canon Governance Pipeline`,
    description: detail.subtitle,
    alternates: {
      canonical: `/canon/${step}`,
    },
  };
}

export default async function CanonStepPage({ params }: Props) {
  const { step } = await params;
  const detail = STEPS_DETAIL[step];

  if (!detail) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-24 w-full">
        <Link
          href="/canon"
          className="text-xs uppercase tracking-widest text-neutral-500 hover:text-indigo-400 font-mono font-bold block mb-8 transition-colors"
        >
          ← Back to Canon Overview
        </Link>

        <section className="space-y-12">
          {/* HEADER */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/30 px-3 py-1 rounded-full text-[11px] font-mono font-bold text-indigo-400">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              CANON PIPELINE // STEP {detail.stepNum}: {detail.title.toUpperCase()}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
              {detail.subtitle}
            </h1>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl font-sans font-light">
            {detail.desc}
          </p>

          {/* TECHNICAL OVERVIEW & LAB IMPLEMENTATION */}
          <div className="grid md:grid-cols-2 gap-8 font-mono text-xs">
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 space-y-3 rounded-sm">
              <span className="text-indigo-400 font-bold uppercase tracking-wider block">// Technical Architecture</span>
              <p className="text-neutral-400 leading-relaxed font-sans text-sm">
                {detail.technicalOverview}
              </p>
            </div>
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 space-y-3 rounded-sm">
              <span className="text-emerald-400 font-bold uppercase tracking-wider block">// Implemented by AnimusLab</span>
              <p className="text-neutral-400 leading-relaxed font-sans text-sm">
                {detail.builtByLab}
              </p>
            </div>
          </div>

          {/* MERMAID ARCHITECTURE DIAGRAM */}
          <div className="border-t border-neutral-900 pt-10 space-y-4">
            <h2 className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-bold">
              // Data Flow &amp; Process Execution Diagram
            </h2>
            <div className="border border-neutral-900 bg-[#080808]/40 p-6 rounded-sm">
              <MermaidDiagram chart={detail.mermaidChart} label={`CANON_${detail.title.toUpperCase()}_DIAGRAM`} />
            </div>
          </div>

          {/* CLI / CODE EXAMPLE */}
          <div className="border-t border-neutral-900 pt-10 space-y-4">
            <h2 className="text-xs uppercase tracking-wider text-amber-400 font-mono font-bold">
              // Live CLI &amp; Code Execution Example
            </h2>
            <pre className="p-6 border border-neutral-900 bg-black text-xs font-mono text-indigo-300/90 rounded-sm overflow-x-auto leading-relaxed">
              <code>{detail.cliExample}</code>
            </pre>
          </div>

          {/* DELIVERABLES */}
          <div className="border-t border-neutral-900 pt-10 space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-bold">// Key Operational Deliverables</h2>
            <ul className="space-y-4 font-mono text-sm text-neutral-400">
              {detail.bullets.map((bullet, i) => {
                const [title, desc] = bullet.split(": ");
                return (
                  <li key={i} className="flex gap-3 bg-neutral-950/20 border border-neutral-900/60 p-4 rounded-sm">
                    <span className="text-indigo-400 font-bold">//</span>
                    <span>
                      <strong className="text-white">{title}:</strong> {desc}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* OPERATIONAL INVARIANTS */}
          <div className="border-t border-neutral-900 pt-10 space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-bold">// Binding Operational Invariants</h2>
            <div className="space-y-3 font-mono text-xs">
              {detail.invariants.map((inv, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border border-neutral-900 bg-neutral-950/40 rounded-sm">
                  <span className="h-6 w-6 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-neutral-300 pt-0.5 leading-relaxed">{inv}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-10 flex flex-wrap gap-4 font-mono text-xs">
            <Link
              href="/canon"
              className="bg-white text-black hover:bg-neutral-200 px-8 py-4 text-sm font-bold transition-all rounded-sm shadow-md"
            >
              Explore Full Canon Pipeline →
            </Link>
            <a
              href="https://github.com/AnimusLab/Anchor"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-8 py-4 text-sm font-bold transition-all rounded-sm"
            >
              Inspect Source on GitHub
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
