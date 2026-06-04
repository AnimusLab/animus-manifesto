import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: 'Roadmap | AnimusLab',
  alternates: {
    canonical: '/research-roadmap',
  },
};

interface Milestone {
  year: string;
  program: string;
  subtitle: string;
  status: "active" | "planned" | "long-term";
  description: string;
  objectives: string[];
}

const ROADMAP_DATA: Milestone[] = [
  {
    year: "2026",
    program: "Anchor",
    subtitle: "Deterministic Runtime Governance",
    status: "active",
    description:
      "Developing the layer-1 security runtime for autonomous systems. Enforcing compile-time Abstract Syntax Tree (AST) scanning, virtualized WebAssembly containment, and tamper-evident local therapy logs.",
    objectives: [
      "WASM sandbox isolation engine (Diamond Cage)",
      "Multi-language AST scan adapters (Python, JS, Rust)",
      "Decoupled edge Spoke telemetry synchronization",
      "Drafting and publishing the Anchor Whitepaper"
    ]
  },
  {
    year: "2027",
    program: "ANIMUS",
    subtitle: "Deterministic Cognitive Reasoning",
    status: "planned",
    description:
      "Investigating symbolic reasoning architectures and neural-symbolic cognitive boundaries. Moving past probabilistic text predictions to build agents whose cognitive steps are mathematically verifiable.",
    objectives: [
      "Symbolic path resolution compilers",
      "State-transition cognitive limiters",
      "Rigid logical constraint solver integration",
      "Pre-compilation reasoning path audits"
    ]
  },
  {
    year: "2028",
    program: "Shadow Watch",
    subtitle: "Observability & Session Trust",
    status: "planned",
    description:
      "Building decentralised observability infrastructure for forensic audit trails. Researching session trust, behavior drift detection, and automated recovery loops inside highly distributed system clusters.",
    objectives: [
      "Cryptographically chained session logs (Therapy Ledger)",
      "Zero-Knowledge telemetry validation proofs",
      "Real-time drift mitigation triggers",
      "Regulator oversight portals with temporal proofs"
    ]
  },
  {
    year: "2030+",
    program: "Governable Intelligence",
    subtitle: "Mathematical Safety Boundaries",
    status: "long-term",
    description:
      "Integrating runtime boundaries, deterministic reasoning paths, and immutable audit logs into a unified framework for legally-compliant machine intelligence operating inside critical infrastructure.",
    objectives: [
      "Formal specification verification proofs",
      "Legal-computational compiler layers",
      "Autonomous institutional agent containment",
      "Global federated safety networks"
    ]
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
              Our research timeline defines the progressive development of safety infrastructure, starting with local runtime containment (Anchor) and concluding with verifiable, mathematically-governed machine intelligence.
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="relative border-l border-neutral-900 ml-4 md:ml-32 pl-8 md:pl-16 space-y-24">
              {ROADMAP_DATA.map((milestone) => (
                <div key={milestone.year} className="relative group">
                  {/* Year Tag on Left (md and up) */}
                  <div className="hidden md:block absolute -left-[208px] top-1.5 w-36 text-right font-mono">
                    <span className="text-3xl font-bold text-white tracking-wider block">
                      {milestone.year}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-widest px-2 py-0.5 border rounded-sm inline-block mt-2 font-bold ${
                        milestone.status === "active"
                          ? "border-indigo-900 bg-indigo-950/20 text-indigo-400"
                          : milestone.status === "planned"
                          ? "border-neutral-800 bg-neutral-900/10 text-neutral-400"
                          : "border-neutral-900 bg-neutral-950/50 text-neutral-600"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  {/* Bullet Symbol on Timeline Line */}
                  <div className="absolute -left-[37px] md:-left-[69px] top-2 h-4 w-4 bg-[#050505] border border-neutral-800 rounded-full flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                    {milestone.status === "active" && (
                      <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-pulse" />
                    )}
                  </div>

                  {/* Mobile Year & Status (below md) */}
                  <div className="md:hidden flex items-center gap-4 mb-4 font-mono">
                    <span className="text-3xl font-bold text-white">
                      {milestone.year}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-widest px-2 py-0.5 border rounded-sm font-bold ${
                        milestone.status === "active"
                          ? "border-indigo-900 bg-indigo-950/20 text-indigo-400"
                          : milestone.status === "planned"
                          ? "border-neutral-800 bg-neutral-900/10 text-neutral-400"
                          : "border-neutral-900 bg-neutral-950/50 text-neutral-600"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="border border-neutral-900 p-8 hover:border-neutral-800 transition-all duration-300 bg-[#070707]/10 group-hover:bg-[#070707]/40">
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono block mb-2">
                      Program: {milestone.program}
                    </span>
                    <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
                      {milestone.subtitle}
                    </h2>
                    <p className="text-neutral-400 leading-relaxed mb-8 max-w-3xl">
                      {milestone.description}
                    </p>

                    <div className="border-t border-neutral-900/60 pt-6">
                      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4 font-mono">
                        Key Milestones & Deliverables
                      </p>
                      <ul className="grid md:grid-cols-2 gap-4 text-sm text-neutral-400 font-mono">
                        {milestone.objectives.map((obj, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-neutral-600">//</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
