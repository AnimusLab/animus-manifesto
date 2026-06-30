import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: 'Roadmap | AnimusLab',
  alternates: {
    canonical: '/research-roadmap',
  },
};

interface ResearchSystem {
  name: string;
  subtitle: string;
  status: "active" | "planned";
  description: string;
  milestones: string[];
}

interface ResearchDirection {
  name: string;
  priority: string;
  description: string;
}

const SYSTEMS_DATA: ResearchSystem[] = [
  {
    name: "Anchor",
    subtitle: "Deterministic Runtime Governance",
    status: "active",
    description: "Developing the layer-1 security runtime for autonomous systems. Enforcing compile-time Abstract Syntax Tree (AST) scanning, virtualized WebAssembly containment, and tamper-evident local therapy logs.",
    milestones: [
      "WASM sandbox isolation engine (Diamond Cage)",
      "Multi-language AST scan adapters (Python, JS, Rust)",
      "Decoupled edge Spoke telemetry synchronization",
      "Drafting and publishing the Anchor Whitepaper"
    ]
  },
  {
    name: "Canon",
    subtitle: "Governance Knowledge Integrity Engine",
    status: "active",
    description: "Continuously monitoring, hashing, diffing, and verifying external regulatory and compliance directories to guarantee complete audit integrity of the AI policy supply chain before static compilation.",
    milestones: [
      "Deterministic source state hashing (SHA-256)",
      "Automated evidence packaging and rule diffing",
      "Tamper-evident append-only approval ledger",
      "CLI tooling (fetch, review, verify, status)"
    ]
  }
];

const DIRECTIONS_DATA: ResearchDirection[] = [
  {
    name: "Evidence Reasoner",
    priority: "Next Phase",
    description: "Constructing reasoning engines that dynamically trace why a runtime check was blocked or modified. Translating complex system logs into natural language explanations of compliant states."
  },
  {
    name: "Governance DSL",
    priority: "Active Research",
    description: "Drafting a high-level, human-readable Domain Specific Language that compiles down to strict WASM filters, mapping natural language regulatory policies directly to execution-level constraints."
  },
  {
    name: "AnchorJIT",
    priority: "Active Research",
    description: "Dynamic native compilation of policy verification paths into highly optimized machine instructions, ensuring sub-millisecond guardrail execution scales to thousands of concurrent rules."
  },
  {
    name: "Deterministic Replay",
    priority: "Planned",
    description: "Building debug and replay systems that reconstruct exact session execution states using historical ledger entries, allowing post-hoc auditing of complex agent decisions."
  },
  {
    name: "Formal Verification",
    priority: "Long-Term",
    description: "Developing automated proof checks to mathematically guarantee that compiled policy constraints are semantically conflict-free and cover all possible runtime state spaces."
  }
];

export default function ResearchRoadmapPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="px-6 md:px-12 py-32 border-b border-neutral-900 bg-[#070707]/20">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6 font-mono">
              Research Roadmap
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight">
              Institutional Roadmap
            </h1>
            <p className="mt-10 max-w-3xl text-lg text-neutral-400 leading-relaxed">
              Our research timeline maps the progressive development of safety infrastructure, separating core engineering research systems from theoretical research directions.
            </p>
          </div>
        </section>

        {/* SYSTEMS */}
        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto space-y-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">// Active &amp; Planned</p>
              <h2 className="text-3xl font-semibold text-white">Research Systems</h2>
            </div>

            <div className="space-y-12">
              {SYSTEMS_DATA.map((system) => (
                <div key={system.name} className="border border-neutral-900 p-8 bg-[#070707]/10 hover:border-neutral-800 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 font-mono">
                    <span className="text-xs text-indigo-400 font-bold uppercase tracking-widest">
                      SYSTEM // {system.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 border border-indigo-900 bg-indigo-950/20 text-indigo-400 font-bold rounded-sm">
                      {system.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{system.subtitle}</h3>
                  <p className="text-neutral-400 leading-relaxed mb-6 max-w-3xl">{system.description}</p>
                  
                  <div className="border-t border-neutral-900/60 pt-6">
                    <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-mono">Deliverables &amp; Milestones</p>
                    <ul className="grid md:grid-cols-2 gap-4 text-sm text-neutral-400 font-mono">
                      {system.milestones.map((ms, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-neutral-600">//</span>
                          <span>{ms}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIRECTIONS */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-5xl mx-auto space-y-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">// Horizon Planning</p>
              <h2 className="text-3xl font-semibold text-white">Research Directions</h2>
            </div>

            <div className="relative border-l border-neutral-900 ml-4 md:ml-32 pl-8 md:pl-16 space-y-16">
              {DIRECTIONS_DATA.map((dir, i) => (
                <div key={dir.name} className="relative group">
                  {/* Bullet */}
                  <div className="absolute -left-[37px] md:-left-[69px] top-2 h-4 w-4 bg-[#050505] border border-neutral-800 rounded-full flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                    {i === 0 && <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-pulse" />}
                  </div>

                  <div className="border border-neutral-900 p-8 bg-[#070707]/10 hover:border-neutral-800 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2 font-mono text-xs">
                      <span className="text-indigo-400 font-bold uppercase tracking-wider">{dir.name}</span>
                      <span className="text-neutral-500 font-bold uppercase tracking-wider">{dir.priority}</span>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">{dir.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
