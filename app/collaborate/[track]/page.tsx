import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import MermaidDiagram from "../../components/MermaidDiagram";

interface Props {
  params: Promise<{
    track: string;
  }>;
}

interface TrackDetail {
  title: string;
  subtitle: string;
  desc: string;
  overview: string;
  builtByLab: string;
  mermaidChart: string;
  codeSnippet: string;
  bullets: string[];
  workstreams: { title: string; detail: string; action: string }[];
  gettingStarted: string[];
}

const TRACKS_DETAIL: Record<string, TrackDetail> = {
  academic: {
    title: "Academic Research",
    subtitle: "Formalizing cognitive boundaries, neuro-symbolic reasoning, and zero-knowledge verification frameworks.",
    desc: "We partner with university research departments, cryptography labs, and symbolic computing groups to explore the mathematical boundaries of AI safety. Our focus spans neuro-symbolic reasoning, compiler design, formal AST verification, and zero-knowledge proof generation.",
    overview: "Academic safety research often suffers from a gap between high-level alignment theory and low-level runtime execution. AnimusLab provides researchers with formal execution models, open-source AST parsers, and zero-copy interception benchmarks to validate cognitive boundary proofs in real-world systems.",
    builtByLab: "AnimusLab engineered the PyO3 Rust AST scanner kernel, Diamond Cage WASM sandbox, and Ed25519 Decision Audit Chain (DAC) formal proof specification (SSRN preprint / Zenodo DOI 10.5281/zenodo.19734724).",
    mermaidChart: `graph TD
    classDef theory fill:#0f0f15,stroke:#2e2e3f,stroke-width:1px,color:#818cf8;
    classDef lab fill:#1e1b4b,stroke:#6366f1,stroke-width:1.5px,color:#c7d2fe;
    classDef proof fill:#064e3b,stroke:#34d399,stroke-width:1px,color:#a7f3d0;

    T1["Neuro-Symbolic Cognitive Proofs"] --> L1["AnimusLab Research Engine"]
    T2["Zero-Knowledge Replay Schemas"] --> L1
    T3["WASM Memory Ring Isolation"] --> L1
    L1 -->|Compile Formal Rules| P1["Verified Policy AST Matcher"]
    L1 -->|Emit SHA-256 State Hashes| P2["Tamper-Evident Ledger"]
    P1 --> Proof["Sub-Millisecond Verification Overhead"]
    P2 --> Proof

    class T1,T2,T3 theory;
    class L1 lab;
    class P1,P2,Proof proof;`,
    codeSnippet: `# Academic Proof Verification Test
from anchor import AnchorGuard

# Initialize formal invariant checker
guard = AnchorGuard(constitution="constitution.anchor", mode="STRICT_PROOF")

# Verify neuro-symbolic output assertion against policy AST
with guard.isolate(namespace="academic-lab") as env:
    verdict = env.verify_cognitive_boundary(prompt="transfer_funds", payload=data)
    assert verdict.is_proved_safe() == True`,
    bullets: [
      "Verifiable Reasoning: Developing proof models to verify that cognitive reasoning steps match specifications.",
      "Optimized Compilation: Researching AnchorJIT patterns to compile rules into native assembly with sub-millisecond overhead.",
      "Formal Proofs: Creating verification pipelines to mathematically guarantee constraint completeness.",
      "AST Parser Benchmarking: Evaluating parallel Tree-sitter query performance against 1.8M lines/sec codebases."
    ],
    workstreams: [
      {
        title: "Neuro-Symbolic Constraint Completeness",
        detail: "Proving that a neural output cannot violate a compiled symbolic policy contract regardless of temperature or prompt drift.",
        action: "Co-author preprints & joint research papers"
      },
      {
        title: "Zero-Knowledge Audit Replay",
        detail: "Generating zk-SNARK attestation proofs for agent execution logs without exposing internal source code or private payload state.",
        action: "Access research datasets & cryptographic testbeds"
      },
      {
        title: "WASM Ring Isolation Latency",
        detail: "Benchmarking microsecond-level capability switching in multi-tenant agent runtime sandboxes.",
        action: "Run joint benchmarking benchmarks"
      }
    ],
    gettingStarted: [
      "Review the AnimusLab Constitution (18 Articles) on animuslab.dev/constitution.",
      "Download the academic preprint: 'Anchor: A Federated Governance Engine for Secure and Compliant Agentic AI Systems'.",
      "Clone the Anchor kernel repository (github.com/AnimusLab/Anchor) and run cargo test --lib.",
      "Submit joint grant proposals or request research lab access tokens via tan@animuslab.dev."
    ]
  },
  regulatory: {
    title: "Regulatory Discussions",
    subtitle: "Translating natural language statutory frameworks into strict, executable code compliance.",
    desc: "AnimusLab interacts with central banks, financial stability committees, and policy working groups to advise on AI audit standards. We contribute empirical data on system latency, tamper-evident logs, and sovereign controls.",
    overview: "Regulatory frameworks such as the EU AI Act (Regulation EU 2024/1689), SEC Rule 15c3, and RBI Model Risk guidelines demand verifiable auditability. We build domain-specific .anchor policy compilers that turn statutory language directly into deterministic machine-enforced invariants.",
    builtByLab: "AnimusLab published 20+ production-grade .anchor policy catalogs covering EU AI Act (Articles 5, 12, 14, 19, 50, 99), SEC SCI/15c3, FINRA 3110, OWASP LLM Top 10, and NIST AI RMF.",
    mermaidChart: `graph TD
    classDef law fill:#1f190d,stroke:#f59e0b,stroke-width:1px,color:#fde68a;
    classDef dsl fill:#111827,stroke:#6366f1,stroke-width:1.5px,color:#e5e5e5;
    classDef audit fill:#14532d,stroke:#22c55e,stroke-width:1px,color:#86efac;

    L1["EU AI Act Article 12 Log Rules"] --> D1["Anchor Statutory Compiler"]
    L2["SEC Rule 15c3 Pre-Trade Gate"] --> D1
    L3["RBI CIMS Reporting Spec"] --> D1
    D1 -->|Emit Deterministic AST Rules| A1["constitution.anchor Invariants"]
    A1 -->|Stream Telemetry| A2["oversight.animuslab.dev ZK Replay"]

    class L1,L2,L3 law;
    class D1 dsl;
    class A1,A2 audit;`,
    codeSnippet: `# Statutory Rule Definition (EU AI Act Article 12)
[POLICIES]
rule_id = "EU-AI-ACT-ART-12"
target = "telemetry.log_retention"
action = "enforce"
retention_days = 180
audit_trail = "hash_chained"
mitigation = "hard_block"`,
    bullets: [
      "Structured Submissions: Publishing technical responses to global regulatory consultations (e.g. FSB, RBI).",
      "Policy Translation: Researching high-level DSL compilers that bridge legislative text and WASM guardrails.",
      "Audit Trail Accountability: Designing immutable evidence pipelines for supervisory review.",
      "Article VII Enforcement: Establishing zero-knowledge redaction veils for external regulatory audits."
    ],
    workstreams: [
      {
        title: "EU AI Act Article 12 Log Retention",
        detail: "Implementing automated tamper-evident logging for high-risk AI deployment compliance verification.",
        action: "Review statutory .anchor mapping specs"
      },
      {
        title: "Central Bank Model Risk Standards",
        detail: "Providing quantitative latency and safety benchmarks to monetary authorities evaluating AI in core settlement networks.",
        action: "Request policy briefings & sandbox demos"
      },
      {
        title: "SEC Automated Compliance Audits",
        detail: "Configuring real-time execution gates for algorithmic trading agents and financial advisory tools.",
        action: "Explore hub.animuslab.dev live feed"
      }
    ],
    gettingStarted: [
      "Explore the live violation stream on hub.animuslab.dev.",
      "Inspect the regulatory rule catalog in github.com/AnimusLab/Anchor/tree/main/governance.",
      "Read our formal FSB & RBI consultation responses in content/consultations/.",
      "Schedule an institutional briefing with Founding Steward Tanishq Dasari via tan@animuslab.dev."
    ]
  },
  pilots: {
    title: "Enterprise Pilots",
    subtitle: "Deploying high-assurance governance systems at enterprise scale with <1ms overhead.",
    desc: "We collaborate with companies in finance, healthcare, and critical infrastructure to pilot Anchor and Canon. We verify performance overhead, telemetry isolation, and policy enforcement under production workloads.",
    overview: "Enterprise adoption requires zero friction. The anchor-audit PyPI package integrates directly into Python and Rust environments using single-line decorators (@anchor.guard), enforcing zero-copy PyO3 stream interception before actions hit production networks.",
    builtByLab: "AnimusLab shipped anchor-audit v6.0.1 to PyPI, complete with live FastAPI gate routers, WebSocket telemetry streaming, Prisma persistence, and multi-tenant control portals.",
    mermaidChart: `graph TD
    classDef ent fill:#0f0f15,stroke:#2e2e3f,stroke-width:1px,color:#818cf8;
    classDef guard fill:#7f1d1d,stroke:#ef4444,stroke-width:1.5px,color:#fca5a5;
    classDef safe fill:#14532d,stroke:#22c55e,stroke-width:1px,color:#86efac;

    E1["Enterprise LLM Tool Call"] --> G1["Anchor Guard Interceptor"]
    G1 -->|Check Invariant Matrix| G2["Diamond Cage WASM Sandbox"]
    G2 -->|COMPLIANT| S1["Execute Action < 0.8ms Overhead"]
    G2 -->|VIOLATION| S2["Coerce Response & Seal Log"]
    S1 --> Hub["Stream Telemetry to hub.animuslab.dev"]
    S2 --> Hub

    class E1 ent;
    class G1,G2,S2 guard;
    class S1,Hub safe;`,
    codeSnippet: `# Enterprise Production Guard
from anchor import AnchorGuard

@AnchorGuard.guard(policy="POL-FIN-001")
def execute_wire_transfer(amount: float, recipient: str):
    # Intercepted before execution in <0.8ms
    return bank_api.transfer(amount, recipient)`,
    bullets: [
      "Financial Guardrails: Implementing transaction verification gates, credit checks, and limit validations.",
      "Secure Sandboxing: Containing autonomous agents inside isolated WASM execution rings.",
      "Localized Telemetry: Restricting database writes to edge hubs, preserving data privacy.",
      "Sub-Millisecond Interception: Guaranteeing <0.8ms overhead for production LLM tool calls."
    ],
    workstreams: [
      {
        title: "Production Runtime Guarding",
        detail: "Wrapping existing LangChain, LlamaIndex, or AutoGen tool calls with @anchor.guard decorators.",
        action: "Deploy pip install anchor-audit"
      },
      {
        title: "Private Node Whitelisting",
        detail: "Registering enterprise keypairs on admin.animuslab.dev for secure, encrypted telemetry streams.",
        action: "Provision node keypair"
      },
      {
        title: "Zero-Knowledge Forensic Replay",
        detail: "Enabling internal legal and compliance teams to replay agent failures without leaking corporate IP.",
        action: "Launch oversight.animuslab.dev portal"
      }
    ],
    gettingStarted: [
      "Install the kernel: pip install anchor-audit.",
      "Initialize your codebase policy: anchor init.",
      "Run static AST validation: anchor check .",
      "Request an enterprise pilot sandbox environment at tan@animuslab.dev."
    ]
  },
  contributors: {
    title: "Open Source Contributors",
    subtitle: "Building the standard open stack for deterministic AI safety and runtime governance.",
    desc: "Our core systems are Apache-2.0 licensed, public, and built in the open. We welcome software engineers, security researchers, and policy analysts to collaborate on our core repositories.",
    overview: "The AnimusLab ecosystem relies on open infrastructure. Contributors work across high-performance Rust scanning engines, PyO3 bindings, Tree-sitter AST queries, Next.js sovereign portals, and .anchor policy rule DSLs.",
    builtByLab: "AnimusLab open-sourced the Anchor kernel, animus-manifesto frontend, and the animuslab-case-studies forensic archive containing 5 deep real-world incident models.",
    mermaidChart: `graph TD
    classDef dev fill:#0f0f15,stroke:#2e2e3f,stroke-width:1px,color:#818cf8;
    classDef core fill:#1e1b4b,stroke:#6366f1,stroke-width:1.5px,color:#c7d2fe;
    classDef ship fill:#064e3b,stroke:#34d399,stroke-width:1px,color:#a7f3d0;

    D1["Open Source Contributor PR"] --> C1["Rust / Python CI Suite"]
    C1 -->|1. Tree-sitter Query Test| C2["Diamond Cage WASM Build"]
    C2 -->|2. PyO3 C-Extension Build| C3["PyPI Package Release"]
    C3 --> Ship["anchor-audit v6.0.1 Shipped"]

    class D1 dev;
    class C1,C2,C3 core;
    class Ship ship;`,
    codeSnippet: `# Contributor Build Workflow
$ git clone https://github.com/AnimusLab/Anchor.git
$ cd Anchor
$ maturin develop  # Build PyO3 Rust bindings locally
$ pytest tests/    # Run core governance test suite`,
    bullets: [
      "Source Adapters: Writing custom AST pattern matchers and crawlers for Canon monitoring.",
      "Compiler Speed: Improving WASM sandbox runtime overhead and PyO3 zero-copy memory boundaries.",
      "Policy DSL: Expanding statutory rule definitions for new regional regulatory frameworks.",
      "Documentation: Refining tutorials, CLI references, and architecture guides."
    ],
    workstreams: [
      {
        title: "Rust Engine Optimization",
        detail: "Refining parallel directory walking and SIMD regex matching in src/scanner/walker.rs.",
        action: "Contribute to github.com/AnimusLab/Anchor"
      },
      {
        title: "Forensic Case Study Modeling",
        detail: "Documenting major real-world systemic failures (e.g. Citi Revlon $893M wire, TSB £600M outage) in .anchor policy formats.",
        action: "Submit PR to animuslab-case-studies"
      },
      {
        title: "Control Plane UI & Telemetry",
        detail: "Enhancing Next.js glassmorphism control plane applications and WebSocket stream visualizations.",
        action: "Join manifesto & portal development"
      }
    ],
    gettingStarted: [
      "Star and fork our primary repository: github.com/AnimusLab/Anchor.",
      "Explore open issues on GitHub tagged 'good first issue' or 'help wanted'.",
      "Read our Contributor License Agreement & Developer Certificate of Origin (DCO).",
      "Connect with maintainers via GitHub Discussions or email tan@animuslab.dev."
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { track } = await params;
  const detail = TRACKS_DETAIL[track];
  if (!detail) return {};

  return {
    title: `${detail.title} Collaboration | AnimusLab`,
    description: detail.subtitle,
    alternates: {
      canonical: `/collaborate/${track}`,
    },
  };
}

export default async function CollaborateTrackPage({ params }: Props) {
  const { track } = await params;
  const detail = TRACKS_DETAIL[track];

  if (!detail) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-24 w-full">
        <Link
          href="/collaborate"
          className="text-xs uppercase tracking-widest text-neutral-500 hover:text-indigo-400 font-mono font-bold block mb-8 transition-colors"
        >
          ← Back to Collaboration Overview
        </Link>

        <section className="space-y-12">
          {/* HEADER */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/30 px-3 py-1 rounded-full text-[11px] font-mono font-bold text-indigo-400">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              COLLABORATION TRACK // {detail.title.toUpperCase()}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
              {detail.subtitle}
            </h1>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl font-sans font-light">
            {detail.desc}
          </p>

          {/* OVERVIEW & WHAT WE BUILT */}
          <div className="grid md:grid-cols-2 gap-8 font-mono text-xs">
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 space-y-3 rounded-sm">
              <span className="text-indigo-400 font-bold uppercase tracking-wider block">// Program Scope &amp; Methodology</span>
              <p className="text-neutral-400 leading-relaxed font-sans text-sm">
                {detail.overview}
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
              // Collaboration Framework &amp; Technical Execution Diagram
            </h2>
            <div className="border border-neutral-900 bg-[#080808]/40 p-6 rounded-sm">
              <MermaidDiagram chart={detail.mermaidChart} label={`COLLAB_${detail.title.toUpperCase()}_DIAGRAM`} />
            </div>
          </div>

          {/* CODE / IMPLEMENTATION EXAMPLE */}
          <div className="border-t border-neutral-900 pt-10 space-y-4">
            <h2 className="text-xs uppercase tracking-wider text-amber-400 font-mono font-bold">
              // Reference Implementation &amp; Execution Snippet
            </h2>
            <pre className="p-6 border border-neutral-900 bg-black text-xs font-mono text-indigo-300/90 rounded-sm overflow-x-auto leading-relaxed">
              <code>{detail.codeSnippet}</code>
            </pre>
          </div>

          {/* OBJECTIVES */}
          <div className="border-t border-neutral-900 pt-10 space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-bold">// Key Operational Deliverables &amp; Workstreams</h2>
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

          {/* ACTIVE WORKSTREAMS */}
          <div className="border-t border-neutral-900 pt-10 space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-bold">// Active Collaboration Targets</h2>
            <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
              {detail.workstreams.map((ws, idx) => (
                <div key={idx} className="border border-neutral-900 p-6 bg-[#070707]/30 flex flex-col justify-between space-y-4 rounded-sm">
                  <div className="space-y-2">
                    <span className="text-[10px] text-neutral-500 font-bold">TARGET 0{idx + 1}</span>
                    <h3 className="text-sm font-bold text-white">{ws.title}</h3>
                    <p className="text-neutral-400 text-[11px] leading-relaxed font-sans">{ws.detail}</p>
                  </div>
                  <span className="text-[10px] text-indigo-400 font-bold border-t border-neutral-900 pt-3 block">{ws.action} →</span>
                </div>
              ))}
            </div>
          </div>

          {/* GETTING STARTED */}
          <div className="border-t border-neutral-900 pt-10 space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-bold">// Step-by-Step Participation Guide</h2>
            <div className="space-y-3 font-mono text-xs">
              {detail.gettingStarted.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border border-neutral-900 bg-neutral-950/40 rounded-sm">
                  <span className="h-6 w-6 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-neutral-300 pt-0.5 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-10 flex flex-wrap gap-4 font-mono text-xs">
            <a
              href={`mailto:tan@animuslab.dev?subject=AnimusLab%20-%20Collaboration%20Inquiry%20(${encodeURIComponent(detail.title)})`}
              className="bg-white text-black hover:bg-neutral-200 px-8 py-4 text-sm font-bold transition-all rounded-sm shadow-md"
            >
              Inquire About {detail.title} →
            </a>
            <a
              href="https://github.com/AnimusLab/Anchor"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-8 py-4 text-sm font-bold transition-all rounded-sm"
            >
              Explore Repositories on GitHub
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
