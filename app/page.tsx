import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReplayDemo from "./components/ReplayDemo";
import AnchorPlayground from "./components/AnchorPlayground";

export const metadata: Metadata = {
  title: "AnimusLab | Systems Research & Governance Infrastructure",
  description: "Independent research lab investigating neuro-symbolic reasoning, deterministic governance, and trust observability infrastructure for autonomous AI systems.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030408] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">

        {/* HERO */}
        <section className="px-6 md:px-12 py-32 md:py-40 relative">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-indigo-950/40 border border-indigo-500/30 px-4 py-2 rounded-full mb-4 text-xs font-mono font-bold text-neutral-200 backdrop-blur-xl shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]"></span>
                  <span className="tracking-wider">INDEPENDENT SYSTEMS RESEARCH INSTITUTION</span>
                  <span className="text-neutral-600">|</span>
                  <span className="text-indigo-400 font-bold text-glow-indigo">PyPI: anchor-audit v6.0.1</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-5xl">
                  Building systems that remain <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">truthful, auditable, governable</span> under scrutiny.
                </h1>

                <p className="max-w-3xl text-xl text-neutral-300 font-light leading-relaxed">
                  AnimusLab is an independent systems research institution exploring neuro-symbolic reasoning architectures, deterministic governance kernels, and zero-knowledge trust observability for autonomous AI systems.
                </p>

                <div className="max-w-3xl space-y-3 pt-4 text-sm text-neutral-300 font-mono">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-indigo-400 font-bold mb-4 text-glow-indigo">// Foundational Stack &amp; Active Programs</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-sm glass-panel glass-panel-glow-indigo flex items-start gap-3">
                      <span className="text-indigo-400 font-bold text-base">01</span>
                      <div>
                        <strong className="text-white block font-sans font-bold">ANIMUS</strong>
                        <span className="text-xs text-neutral-400">Neuro-symbolic reasoning architecture</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-sm glass-panel glass-panel-glow-emerald flex items-start gap-3">
                      <span className="text-emerald-400 font-bold text-base">02</span>
                      <div>
                        <strong className="text-white block font-sans font-bold">Anchor (v6.0.1)</strong>
                        <span className="text-xs text-neutral-400">Deterministic runtime governance &amp; AST compiler</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-sm glass-panel glass-panel-glow-amber flex items-start gap-3">
                      <span className="text-amber-400 font-bold text-base">03</span>
                      <div>
                        <strong className="text-white block font-sans font-bold">Shadow Watch</strong>
                        <span className="text-xs text-neutral-400">Cryptographic trust verification &amp; telemetry</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-sm glass-panel glass-panel-glow-rose flex items-start gap-3">
                      <span className="text-rose-400 font-bold text-base">04</span>
                      <div>
                        <strong className="text-white block font-sans font-bold">FORGE</strong>
                        <span className="text-xs text-neutral-400">Sovereign storage &amp; data ownership engine</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 font-mono text-xs">
                <Link
                  href="/constitution"
                  className="bg-gradient-to-r from-white to-neutral-200 text-black hover:from-indigo-100 hover:to-white px-8 py-4 text-sm font-bold transition-all rounded-sm shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                >
                  Read The Constitution (18 Articles) →
                </Link>

                <a
                  href="https://hub.animuslab.dev/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-rose-500/50 bg-rose-950/40 text-rose-300 hover:bg-rose-900/60 px-8 py-4 text-sm font-bold transition-all rounded-sm flex items-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
                >
                  <span>📊 Enterprise Hub Portal</span>
                </a>

                <a
                  href="https://oversight.animuslab.dev/oversight/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-indigo-500/50 bg-indigo-950/40 text-indigo-300 hover:bg-indigo-900/60 px-8 py-4 text-sm font-bold transition-all rounded-sm flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                >
                  <span>🛡️ ZK Oversight Portal</span>
                </a>

                <a
                  href="https://admin.animuslab.dev/admin/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-amber-500/50 bg-amber-950/40 text-amber-300 hover:bg-amber-900/60 px-8 py-4 text-sm font-bold transition-all rounded-sm flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                >
                  <span>⚡ Root Admin Gateway</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2ND SECTION: INSTITUTIONAL PREAMBLE & MISSION */}
        <section className="px-6 md:px-12 py-28 border-t border-white/10 bg-[#07080f]/40 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl space-y-8">
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2 text-glow-indigo">// Preamble &amp; Core Thesis</h2>
              <h3 className="text-3xl md:text-5xl font-semibold text-white">Why AnimusLab Exists</h3>
              
              <p className="text-xl text-indigo-200 font-medium leading-relaxed border-l-2 border-indigo-500 pl-6 my-8 glass-panel p-6 rounded-r-sm">
                As intelligent systems become more capable, the primary challenge shifts from capability to governance.
              </p>

              <p className="text-neutral-300 leading-relaxed font-light text-lg">
                The dominant industry approach relies on probabilistic safety layers, soft prompts, and confidence scores—techniques that cannot survive strict central bank or regulatory scrutiny. AnimusLab explores architectural alternatives grounded in determinism, zero-copy performance, and mathematical proof boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* 3RD SECTION: THE 18 CONSTITUTIONAL ARTICLES OVERVIEW */}
        <section className="px-6 md:px-12 py-28 border-t border-white/10 relative">
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2 text-glow-indigo">// Binding Design Framework</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">The Constitution of AnimusLab</h3>
              <p className="text-sm text-neutral-400 font-mono mt-2">
                18 Articles across 3 Sections governing all active research codebases, WASM sandboxes, and AST compilers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 font-mono text-xs">
              {/* Section I */}
              <div className="glass-panel glass-panel-glow-indigo p-8 rounded-sm space-y-4">
                <span className="text-indigo-400 font-bold block text-glow-indigo">// SECTION I</span>
                <h4 className="text-lg font-bold text-white">Institutional Framework</h4>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans font-light">
                  Articles I–VI establishing research independence, governance-first co-development, and long-term objective alignment.
                </p>
                <div className="text-[11px] text-neutral-400 pt-3 border-t border-white/10 font-mono">
                  Articles: I (Mission), II (Independence), III (Transparency), IV (Governance First), V (Programs), VI (Objectives)
                </div>
              </div>

              {/* Section II */}
              <div className="glass-panel glass-panel-glow-emerald p-8 rounded-sm space-y-4">
                <span className="text-emerald-400 font-bold block text-glow-emerald">// SECTION II</span>
                <h4 className="text-lg font-bold text-white">System Design Invariants</h4>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans font-light">
                  Articles VII–XII enforcing Truth Over Optics, Semantics Before Representation, Constraints Create Clarity, and Failure State Transitions.
                </p>
                <div className="text-[11px] text-neutral-400 pt-3 border-t border-white/10 font-mono">
                  Articles: VII (Truth Over Optics), VIII (Semantics), IX (Constraints), X (Failure States), XI (Domain-Agnostic), XII (Integrity)
                </div>
              </div>

              {/* Section III */}
              <div className="glass-panel glass-panel-glow-amber p-8 rounded-sm space-y-4">
                <span className="text-amber-400 font-bold block text-glow-amber">// SECTION III</span>
                <h4 className="text-lg font-bold text-white">Architectural Invariants</h4>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans font-light">
                  Articles XIII–XVIII mandating Constitutional Supremacy (Ring Boundaries), Capability Ring Isolation, and Evidence Over Authority.
                </p>
                <div className="text-[11px] text-neutral-400 pt-3 border-t border-white/10 font-mono">
                  Articles: XIII (Supremacy), XIV (Capability Isolation), XV (Evidence), XVI (Long-Term), XVII (Systems), XVIII (Publishing)
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/constitution"
                className="inline-block text-white hover:text-indigo-400 transition-colors font-mono text-sm font-bold"
              >
                Explore Full 18-Article Constitution Text →
              </Link>
            </div>
          </div>
        </section>

        {/* 4TH SECTION: INTERACTIVE MISSION REPLAY SIMULATION TERMINAL */}
        <section className="px-6 md:px-12 py-20 border-t border-white/10 bg-[#04050a]/80 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-rose-400 block mb-2 text-glow-rose">// LIVE GOVERNANCE TERMINAL &amp; THREAT REPLAY</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Interactive Attack &amp; Interception Replay</h2>
              </div>
              <p className="text-xs text-neutral-400 font-mono">
                Click &quot;RUN SIMULATION&quot; to test real-time prompt injection interception &amp; DAC audit logging in action.
              </p>
            </div>

            <div className="glass-panel glass-panel-glow-rose p-6 md:p-8 rounded-sm shadow-2xl">
              <ReplayDemo />
            </div>
          </div>
        </section>

        {/* 5TH SECTION: INTERACTIVE ANCHOR COMPLIANCE PLAYGROUND */}
        <section className="px-6 md:px-12 py-20 border-t border-white/10 bg-[#05060b]/60 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-indigo-400 block mb-2 text-glow-indigo">// REAL-TIME AST COMPILER &amp; RULE EVALUATOR (anchor-audit v6.0.1)</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Live Compliance Playground</h2>
              </div>
              <p className="text-xs text-neutral-400 font-mono">
                Select case presets (Knight Capital, Air Canada, Citibank) and execute live PyO3 kernel checks via /api/v1/anchor/eval.
              </p>
            </div>

            <div className="glass-panel glass-panel-glow-indigo p-6 md:p-8 rounded-sm shadow-2xl">
              <AnchorPlayground />
            </div>
          </div>
        </section>


        {/* MULTI-TENANT ECOSYSTEM & PORTAL LINKS */}
        <section className="px-6 md:px-12 py-28 border-t border-white/10 bg-[#04050a]/60 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto space-y-14">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2 text-glow-indigo">// Multi-Tenant Control Plane</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">Sovereign Control Portals</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 font-mono text-xs">
              {/* Admin Portal Card -> Directly links to /admin/login */}
              <div className="glass-panel glass-panel-glow-amber p-8 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-2 text-glow-amber">
                    SUBDOMAIN // ADMIN
                  </span>
                  <h4 className="text-xl font-bold text-white mb-3">admin.animuslab.dev</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed mb-6 font-sans font-light">
                    Sovereign Node Whitelist Cockpit. Reviews pending Ed25519 keypair registrations and provisions active telemetry streams.
                  </p>
                </div>
                <a href="https://admin.animuslab.dev/admin/login" target="_blank" rel="noopener noreferrer" className="text-[11px] text-amber-400 font-bold hover:underline transition-colors flex items-center gap-1">
                  Gated Whitelist Control →
                </a>
              </div>

              {/* Hub Portal Card -> Directly links to /login */}
              <div className="glass-panel glass-panel-glow-rose p-8 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider block mb-2 text-glow-rose">
                    SUBDOMAIN // HUB
                  </span>
                  <h4 className="text-xl font-bold text-white mb-3">hub.animuslab.dev</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed mb-6 font-sans font-light">
                    Real-Time Violation Stream &amp; Risk Multiplier Feed. Parses live EU AI Act and SEC compliance breaches.
                  </p>
                </div>
                <a href="https://hub.animuslab.dev/login" target="_blank" rel="noopener noreferrer" className="text-[11px] text-rose-400 font-bold hover:underline transition-colors flex items-center gap-1">
                  Live Telemetry Stream →
                </a>
              </div>

              {/* Oversight Portal Card -> Directly links to /oversight/login */}
              <div className="glass-panel glass-panel-glow-indigo p-8 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block mb-2">
                    SUBDOMAIN // OVERSIGHT
                  </span>
                  <h4 className="text-xl font-bold text-white mb-3">oversight.animuslab.dev</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed mb-6 font-sans font-light">
                    Zero-Knowledge Auditor Proof Verifier &amp; Gated Mission Replay Engine. Honors Article VII with sanitized file paths.
                  </p>
                </div>
                <a href="https://oversight.animuslab.dev/oversight/login" target="_blank" rel="noopener noreferrer" className="text-[11px] text-sky-400 font-bold hover:underline transition-colors flex items-center gap-1">
                  Zero-Knowledge Replay →
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* LIVE ACTIVITY FEED & LAB TIMELINE */}
        <section className="px-6 md:px-12 py-28 border-t border-white/10 bg-[#040509]/80 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold text-emerald-400 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping shadow-[0_0_8px_#10b981]" />
                  INSTITUTIONAL RESEARCH MILESTONES // 2025–2026 SEQUENCE
                </div>
                <h3 className="text-3xl md:text-5xl font-semibold text-white">Engineering Timeline &amp; Active Programs</h3>
              </div>
              <div className="flex items-center gap-4 font-mono text-xs">
                <Link href="/log" className="text-indigo-400 hover:text-indigo-300 font-bold text-glow-indigo">
                  View Full Dev Log →
                </Link>
                <span className="text-neutral-700">|</span>
                <Link href="/news" className="text-neutral-400 hover:text-white font-bold">
                  All Dispatches →
                </Link>
              </div>
            </div>

            {/* DEEP PROGRAM SPECIFICATIONS */}
            <div className="grid md:grid-cols-2 gap-8 font-mono text-xs">
              {/* Program 01: ANCHOR */}
              <div className="glass-panel glass-panel-glow-emerald p-8 rounded-sm space-y-4 relative overflow-hidden group">
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                  <span className="text-emerald-400 font-bold text-sm text-glow-emerald">// PROGRAM 01: ANCHOR (v6.0.1)</span>
                  <span className="border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 px-2 py-0.5 text-[10px] rounded-sm">
                    PYPI: anchor-audit
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Deterministic Runtime Governance Kernel &amp; AST Compiler
                </h4>
                <p className="text-neutral-300 text-xs font-sans font-light leading-relaxed">
                  Anchor is a high-performance zero-copy PyO3/Rust kernel that evaluates AST execution trees and intercepts prompt payloads in sub-millisecond bounds (&lt;0.8ms). It compiles statutory mandates (EU AI Act Articles 5–99, SEC Rule 15c3-5, RBI guidelines) into immutable policy matrices.
                </p>
                <div className="space-y-2 pt-2 text-[11px] text-neutral-400 font-mono">
                  <div className="flex items-center justify-between border-t border-white/5 pt-2">
                    <span>Rust Execution Speed:</span>
                    <strong className="text-emerald-300">1,840,000 lines/sec</strong>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-2">
                    <span>Statutory Rule Coverage:</span>
                    <strong className="text-emerald-300">32 Programmatic Gates</strong>
                  </div>
                </div>
                <div className="flex gap-4 pt-3 text-[11px]">
                  <a href="https://pypi.org/project/anchor-audit/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-bold">PyPI Package →</a>
                  <a href="https://github.com/AnimusLab/Anchor" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:underline">GitHub Repository →</a>
                </div>
              </div>

              {/* Program 02: ANIMUS */}
              <div className="glass-panel glass-panel-glow-indigo p-8 rounded-sm space-y-4 relative overflow-hidden group">
                <div className="flex items-center justify-between border-b border-indigo-500/20 pb-4">
                  <span className="text-indigo-400 font-bold text-sm text-glow-indigo">// PROGRAM 02: ANIMUS</span>
                  <span className="border border-indigo-500/40 bg-indigo-950/60 text-indigo-300 px-2 py-0.5 text-[10px] rounded-sm">
                    NEURO-SYMBOLIC CORE
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Neuro-Symbolic Reasoning Architecture &amp; Formal Verification
                </h4>
                <p className="text-neutral-300 text-xs font-sans font-light leading-relaxed">
                  ANIMUS bridges probabilistic neural generation with deterministic symbolic logic. It projects LLM decision candidates onto formal First-Order Logic (FOL) constraint graphs before allowing state transitions to modify production databases.
                </p>
                <div className="space-y-2 pt-2 text-[11px] text-neutral-400 font-mono">
                  <div className="flex items-center justify-between border-t border-white/5 pt-2">
                    <span>Formal Proof Boundary:</span>
                    <strong className="text-indigo-300">First-Order Logic (FOL)</strong>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-2">
                    <span>Failure Mode Resolution:</span>
                    <strong className="text-indigo-300">Sub-Symbolic Coercion</strong>
                  </div>
                </div>
                <div className="flex gap-4 pt-3 text-[11px]">
                  <Link href="/anchor/architecture" className="text-indigo-400 hover:underline font-bold">Architecture Docs →</Link>
                  <Link href="/canon" className="text-neutral-400 hover:underline">Canon Ingestion →</Link>
                </div>
              </div>
            </div>

            {/* TIMELINE MILESTONES */}
            <div className="space-y-6 pt-6">
              <h4 className="text-xs uppercase tracking-widest text-indigo-400 font-mono text-glow-indigo">// 2025–2026 Engineering Sequence Chronology</h4>
              <div className="grid md:grid-cols-2 gap-8 font-mono text-xs">
                {/* Item 1 */}
                <div className="glass-panel glass-panel-glow-emerald p-6 space-y-3 rounded-sm relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold text-glow-emerald">// AUGUST 2026 // v6.0.1</span>
                    <span className="text-neutral-500">2026-08-09</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    anchor-audit v6.0.1 Released &amp; Live Telemetry Sync Loop Deployed
                  </h4>
                  <p className="text-neutral-300 text-xs font-sans font-light leading-relaxed">
                    Published anchor-audit v6.0.1 to PyPI with high-velocity PyO3 AST scanner bindings, Click CLI runner, and non-blocking background telemetry sync client pushing breach frames directly to hub.animuslab.dev.
                  </p>
                  <div className="flex gap-4 pt-2 text-[11px]">
                    <a href="https://pypi.org/project/anchor-audit/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-bold">PyPI Package →</a>
                    <a href="https://github.com/AnimusLab/Anchor" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:underline">GitHub Repo →</a>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="glass-panel glass-panel-glow-indigo p-6 space-y-3 rounded-sm relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-400 font-bold text-glow-indigo">// AUGUST 2026 // CONTROL PLANE</span>
                    <span className="text-neutral-500">2026-08-07</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Multi-Tenant Control Portals &amp; 32 Statutory Rules Matrix
                  </h4>
                  <p className="text-neutral-300 text-xs font-sans font-light leading-relaxed">
                    Deploys admin.animuslab.dev, hub.animuslab.dev, and oversight.animuslab.dev alongside the complete 32-rule statutory matrix (EU AI Act Articles 5–99, SEC 15c3-5, Reg SCI, OWASP LLM Top 10).
                  </p>
                  <div className="flex gap-4 pt-2 text-[11px]">
                    <a href="https://oversight.animuslab.dev/oversight/login" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline font-bold">Oversight Replay →</a>
                    <Link href="/rules" className="text-neutral-400 hover:underline">Rules Matrix →</Link>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="glass-panel glass-panel-glow-amber p-6 space-y-3 rounded-sm relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-bold text-glow-amber">// JULY 2026 // PREPRINT</span>
                    <span className="text-neutral-500">2026-07-15</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    Anchor Academic Whitepaper Published to SSRN &amp; Zenodo
                  </h4>
                  <p className="text-neutral-300 text-xs font-sans font-light leading-relaxed">
                    Published formal mathematical proofs detailing sub-millisecond execution boundaries, zero-copy stream interception, and Diamond Cage WASM sandboxing.
                  </p>
                  <div className="flex gap-4 pt-2 text-[11px]">
                    <a href="https://zenodo.org/records/19734724" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-bold">Zenodo DOI →</a>
                    <Link href="/anchor/whitepaper" className="text-neutral-400 hover:underline">Read Whitepaper →</Link>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="glass-panel glass-panel-glow-rose p-6 space-y-3 rounded-sm relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <span className="text-rose-400 font-bold text-glow-rose">// JUNE 2026 // FORENSICS</span>
                    <span className="text-neutral-500">2026-06-20</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                    5 Forensic Corporate Failure Case Studies Completed
                  </h4>
                  <p className="text-neutral-300 text-xs font-sans font-light leading-relaxed">
                    Published empirical post-mortems analysing Knight Capital ($440M), Air Canada Chatbot liability, TSB Bank (£600M outage), and Citibank Revlon ($893M wire error).
                  </p>
                  <div className="flex gap-4 pt-2 text-[11px]">
                    <Link href="/cases" className="text-rose-400 hover:underline font-bold">Explore Cases →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* COLLABORATE / OUTREACH */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900 bg-[#07080c]/25">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl font-semibold text-white">Collaborate with AnimusLab</h2>
            <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto font-mono text-xs">
              We welcome academic collaborations, central bank regulatory discussions, open-source contributions, and enterprise pilots.
            </p>
            <div>
              <Link
                href="/collaborate"
                className="bg-white text-black hover:bg-neutral-200 px-8 py-4 text-sm font-bold transition-all rounded-sm inline-block shadow-md font-mono"
              >
                Inquire &amp; Partner
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}