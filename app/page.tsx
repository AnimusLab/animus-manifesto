import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">

        {/* HERO */}
        <section className="px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-4 text-xs font-mono font-bold text-neutral-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  INDEPENDENT RESEARCH INSTITUTION
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight max-w-5xl">
                  Building systems that remain truthful,<br className="hidden lg:inline" />
                  auditable, governable, and understandable<br className="hidden lg:inline" />
                  under scrutiny.
                </h1>

                <p className="max-w-3xl text-xl text-neutral-300 font-medium leading-relaxed">
                  AnimusLab is an independent research lab investigating reasoning, governance, and observability infrastructure for advanced autonomous systems. We believe that critical AI systems must be constrained by deterministic validation layers.
                </p>

                <div className="max-w-3xl space-y-2.5 pt-2 text-sm text-neutral-400 font-mono font-bold">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-3">Core Research &amp; Infrastructure Programs</p>
                  <p className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span><strong>ANIMUS</strong> — neuro-symbolic reasoning kernel</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span><strong>Anchor</strong> — deterministic runtime governance &amp; auditability layer</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span><strong>Canon</strong> — deterministic governance knowledge integrity engine</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span><strong>Shadow Watch</strong> — behavioral verification &amp; institutional accountability</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/collaborate"
                  className="bg-white text-black hover:bg-neutral-100 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] px-8 py-4 text-sm font-bold transition-all rounded-sm shadow-lg shadow-black/30"
                >
                  Collaborate with Us
                </Link>

                <a
                  href="https://zenodo.org/records/19734724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-neutral-800 px-8 py-4 text-sm text-neutral-200 hover:text-white transition-colors font-bold rounded-sm bg-neutral-900/40"
                >
                  Read Anchor Preprint
                </a>

                <Link
                  href="/canon"
                  className="border border-neutral-800 px-8 py-4 text-sm text-neutral-200 hover:text-white transition-colors font-bold rounded-sm bg-neutral-900/40"
                >
                  Explore Canon
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900 bg-[#070707]/10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl space-y-8">
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">// Institutional Mission</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">Our Mission</h3>
              
              <p className="text-xl text-neutral-300 font-bold leading-relaxed border-l-2 border-indigo-500 pl-6 my-8">
                Modern AI systems increasingly require deterministic governance mechanisms to complement probabilistic models, particularly in high-assurance and regulated environments.
              </p>

              <p className="text-neutral-200 leading-relaxed font-medium">
                As capability boundaries expand, alignment techniques that rely purely on stochastic checks or post-hoc heuristics are no longer sufficient. AnimusLab designs architectural alternatives built on mathematical bounds, verifiable states, and immutable cryptographic telemetry.
              </p>
            </div>
          </div>
        </section>

        {/* RESEARCH HIGHLIGHTS */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900 bg-[#07080c]/25">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-6">// Active Research outputs</h2>
            <h3 className="text-3xl font-semibold text-white mb-10">Research Highlights</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
              <div className="border border-neutral-900 p-6 bg-neutral-950/40">
                <span className="text-indigo-400 font-bold block mb-2">// 01. REGULATORY</span>
                <p className="text-neutral-300">Submitted response to the Financial Stability Board consultation on responsible AI adoption in financial services.</p>
              </div>
              <div className="border border-neutral-900 p-6 bg-neutral-950/40">
                <span className="text-indigo-400 font-bold block mb-2">// 02. ACADEMIC</span>
                <p className="text-neutral-300">Published the whitepaper for *Anchor: A Federated Governance Engine* on the Zenodo registry.</p>
              </div>
              <div className="border border-neutral-900 p-6 bg-neutral-950/40">
                <span className="text-indigo-400 font-bold block mb-2">// 03. RELEASES</span>
                <p className="text-neutral-300">Released Canon v0.1.0 establishing the deterministic governance policy supply-chain layer.</p>
              </div>
              <div className="border border-neutral-900 p-6 bg-neutral-950/40">
                <span className="text-indigo-400 font-bold block mb-2">// 04. RESEARCH</span>
                <p className="text-neutral-300">Active design and benchmarks of runtime AI governance and verifiable policy enforcement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESEARCH AREAS */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl space-y-12">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">// Domains of Study</h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-white">Research Areas</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-sm font-mono">
                <div className="border border-neutral-900 p-8">
                  <h4 className="text-white font-bold mb-4">AI Governance</h4>
                  <p className="text-neutral-400 leading-relaxed">Verifying that natural language policies, security rules, and institutional regulations compile deterministically into machine-executable paths.</p>
                </div>
                <div className="border border-neutral-900 p-8">
                  <h4 className="text-white font-bold mb-4">Runtime Enforcement</h4>
                  <p className="text-neutral-400 leading-relaxed">Securing running agentic systems by containing them inside WebAssembly sandboxes and running inline request/response check bounds.</p>
                </div>
                <div className="border border-neutral-900 p-8">
                  <h4 className="text-white font-bold mb-4">Deterministic Infrastructure</h4>
                  <p className="text-neutral-400 leading-relaxed">Avoiding stochastic failures by enforcing strict state-transition models, rigid AST rulesets, and exact trace execution replays.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLAGSHIP INFRASTRUCTURE SYSTEMS */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900 bg-[#07080c]/10">
          <div className="max-w-6xl mx-auto space-y-14">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">// Open-source Infrastructure</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">Research Systems</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Anchor System */}
              <div className="border border-neutral-900 p-8 flex flex-col justify-between bg-neutral-950/20">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
                      SYSTEM // ANCHOR
                    </span>
                    <span className="text-[8px] bg-indigo-950/80 text-indigo-400 border border-indigo-900 font-mono px-2 py-0.5 uppercase tracking-widest font-bold">
                      Active
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Anchor Runtime Governance</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-medium">
                    A federated runtime governance engine that mathematically enforces capability bounds and provides cryptographic auditability for agentic systems.
                  </p>
                </div>
                <Link
                  href="/anchor"
                  className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors inline-block mt-auto font-bold"
                >
                  Explore Anchor →
                </Link>
              </div>

              {/* Canon System */}
              <div className="border border-neutral-900 p-8 flex flex-col justify-between bg-neutral-950/20">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
                      SYSTEM // CANON
                    </span>
                    <span className="text-[8px] bg-indigo-950/80 text-indigo-400 border border-indigo-900 font-mono px-2 py-0.5 uppercase tracking-widest font-bold">
                      Active
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Canon Ingestion Engine</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-medium">
                    A deterministic governance knowledge integrity engine monitoring frameworks, compiling evidence updates, and securing state transitions behind an approved ledger.
                  </p>
                </div>
                <Link
                  href="/canon"
                  className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors inline-block mt-auto font-bold"
                >
                  Explore Canon →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM ARCHITECTURE */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">// System Architecture Mapping</h2>
              <h3 className="text-3xl font-semibold text-white">How the Governance Stack Fits Together</h3>
            </div>
            
            <p className="text-neutral-300 leading-relaxed max-w-3xl">
              Our open-source infrastructure implements a secure, auditable policy supply-chain. Policy updates from external authorities are continuously ingested by Canon, audited by human supervisors, and pushed to Anchor for compile-time compilation and inline runtime checking.
            </p>

            <div className="grid md:grid-cols-5 gap-6 text-center font-mono text-xs pt-6">
              <div className="border border-neutral-900 p-6">
                <span className="text-indigo-400 font-bold block mb-1">1. Ingest</span>
                <p className="text-neutral-500">Canon monitors and pulls external sources</p>
              </div>
              <div className="border border-neutral-900 p-6">
                <span className="text-indigo-400 font-bold block mb-1">2. Approve</span>
                <p className="text-neutral-500">Supervisor records signed ledger entry</p>
              </div>
              <div className="border border-neutral-900 p-6">
                <span className="text-indigo-400 font-bold block mb-1">3. Compile</span>
                <p className="text-neutral-500">Anchor Static lints and compiles policies</p>
              </div>
              <div className="border border-neutral-900 p-6">
                <span className="text-indigo-400 font-bold block mb-1">4. Optimize</span>
                <p className="text-neutral-500">AnchorJIT compiles enforcement paths</p>
              </div>
              <div className="border border-neutral-900 p-6">
                <span className="text-indigo-400 font-bold block mb-1">5. Enforce</span>
                <p className="text-neutral-500">Anchor Runtime isolates and blocks</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900 bg-[#07080c]/10">
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">// Forensic Audits &amp; Replays</h2>
              <h3 className="text-3xl font-semibold text-white">Case Studies</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm font-mono">
              <Link href="/cases" className="border border-neutral-900 p-6 hover:border-neutral-800 transition-colors">
                <span className="text-neutral-500 block mb-2">// Case 001</span>
                <span className="text-white font-bold block mb-2">Authority Overreach</span>
                <p className="text-neutral-400 text-xs leading-relaxed">Analyzing limits on LLM autonomy and preventing unauthorized resource creation.</p>
              </Link>
              <Link href="/cases" className="border border-neutral-900 p-6 hover:border-neutral-800 transition-colors">
                <span className="text-neutral-500 block mb-2">// Case 002</span>
                <span className="text-white font-bold block mb-2">Policy Drift</span>
                <p className="text-neutral-400 text-xs leading-relaxed">Tracking behavior compliance drift across sequential long-term runs.</p>
              </Link>
              <Link href="/cases" className="border border-neutral-900 p-6 hover:border-neutral-800 transition-colors">
                <span className="text-neutral-500 block mb-2">// Case 005</span>
                <span className="text-white font-bold block mb-2">Citibank Transfer</span>
                <p className="text-neutral-400 text-xs leading-relaxed">Modeling verification gates for high-value financial execution pipelines.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* RECENT NEWS / DISPATCHES */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-2">// Chronological Log</h2>
              <h3 className="text-3xl font-semibold text-white">Latest Institutional Updates</h3>
            </div>

            <div className="space-y-10">
              <div className="border-l border-neutral-900 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">June 2026</p>
                <h4 className="text-white font-bold text-lg">Canon v0.1.0 Released</h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                  Released Canon v0.1.0, the open-source governance knowledge integrity engine. Configured adapters, SHA-256 state checks, evidence packages, and ledger integrity tracking.
                </p>
              </div>

              <div className="border-l border-neutral-900 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">June 2026</p>
                <h4 className="text-white font-bold text-lg">Financial Stability Board Submission</h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                  Submitted our formal consultation response to the FSB regarding responsible adoption and runtime safety of AI inside systemic financial systems.
                </p>
              </div>

              <div className="border-l border-neutral-900 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">June 2026</p>
                <h4 className="text-white font-bold text-lg">Anchor Governance Mappings Expanded</h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                  Completed AST query maps for OWASP Top 10 vulnerabilities, enabling strict compile-time checks in Anchor Static.
                </p>
              </div>

              <div className="border-l border-neutral-900 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">May 2026</p>
                <h4 className="text-white font-bold text-lg">Knight Capital Case Study Published</h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                  Published case study modeling safety boundaries using historical telemetry data from the Knight Capital deployment incident.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COLLABORATE / OUTREACH */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900 bg-[#07080c]/25">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl font-semibold text-white">Collaborate with AnimusLab</h2>
            <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto font-mono text-xs">
              We welcome academic collaborations, regulatory discussions, open-source contributions, and enterprise pilots.
            </p>
            <div>
              <Link
                href="/collaborate"
                className="bg-white text-black hover:bg-neutral-200 px-8 py-4 text-sm font-bold transition-all rounded-sm inline-block shadow-md"
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