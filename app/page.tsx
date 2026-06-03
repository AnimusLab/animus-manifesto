import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">

        {/* HERO */}
        <section className="min-h-[80vh] flex items-center border-b border-neutral-900/50">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-2 bg-neutral-900/60 border border-neutral-850 px-4 py-2 rounded-full mb-2 text-xs font-mono font-bold text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE IN FINOS AI RISK & CONTROLS
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                Sovereign Intelligence<br />Infrastructure
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-200 font-bold leading-relaxed max-w-3xl">
                Anchor is a federated runtime governance engine that mathematically enforces intent and provides 
                cryptographic auditability for agentic AI systems, without ever exposing raw data.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="mailto:tan@anchorgovernance.tech?subject=Anchor%20Institutional%20Deep-Dive"
                  className="bg-white text-black hover:bg-neutral-200 px-8 py-4 text-sm font-bold transition-all rounded-sm shadow-lg shadow-black/30"
                >
                  Request Private Demo / Deep-Dive
                </a>
                
                <a 
                  href="https://zenodo.org/records/19734724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-neutral-800 text-neutral-200 hover:text-white px-8 py-4 text-sm font-bold hover:bg-white/5 transition-all rounded-sm"
                >
                  Read Preprint
                </a>
                
                <Link 
                  href="/institutions"
                  className="border border-neutral-800 text-neutral-200 hover:text-white px-8 py-4 text-sm font-bold hover:bg-white/5 transition-all rounded-sm"
                >
                  For Institutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto">

            <div className="max-w-4xl space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Why AnimusLab Exists
              </h2>

              <p className="text-xl text-neutral-300 font-bold leading-relaxed border-l-2 border-indigo-500 pl-6 my-8">
                We exist because current agentic systems cannot be trusted with capital allocation, 
                regulatory compliance, or sovereign autonomy.
              </p>

              <p className="text-lg text-neutral-200 font-bold leading-relaxed max-w-3xl">
                As intelligent systems become more capable, governance becomes the primary challenge. We cannot afford to treat it as a secondary consideration.
              </p>

              <p className="text-neutral-200 font-bold leading-relaxed">
                We are at a critical juncture where the systems we build are starting to outpace the structures we use to govern them. The industry has accepted a dangerous compromise: building systems that are highly capable but fundamentally unpredictable, and then trying to patch them after the fact with probabilistic safety layers. Under scrutiny, these post-hoc alignment techniques fail because they are built on the same shaky foundations as the models themselves.
              </p>

              <p className="text-neutral-200 font-bold leading-relaxed">
                I did not start AnimusLab to build another wrapper or add to the noise of post-hoc classifiers that guess whether an output is safe. I started this institution because I believe that if a system cannot be governed at the compile level, it cannot be trusted at runtime. 
              </p>

              <p className="text-neutral-200 font-bold leading-relaxed">
                AnimusLab explores architectural alternatives grounded in determinism, auditability, observability, and explicit control. We believe safety must be built into the grammar of system operations, enforcing hard limits and mathematical verifiability.
              </p>
            </div>

          </div>
        </section>

        {/* FLAGSHIP PROGRAM */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900 bg-[#07080c]/20">
          <div className="max-w-6xl mx-auto font-sans">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono font-bold block">
                  Flagship Program
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Anchor
                </h2>
              </div>

              <p className="text-xl text-neutral-300 font-bold leading-relaxed max-w-3xl">
                Deterministic Runtime Governance for Intelligent Systems
              </p>

              <p className="text-neutral-200 font-bold leading-relaxed max-w-3xl">
                Anchor is our primary active initiative. It investigates capability containment, pre-compilation syntax validation, and cryptographic auditability to ensure autonomous software complies with constitutional constraints at runtime.
              </p>

              <div className="pt-4">
                <Link
                  href="/anchor"
                  className="inline-flex items-center gap-2 border border-indigo-900 bg-[#07080c]/50 px-6 py-3 text-sm text-indigo-400 hover:text-indigo-300 hover:border-indigo-800 transition-colors font-mono font-bold"
                >
                  Explore Anchor →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto space-y-14">

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Three Foundational Invariants
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-bold mb-4">
                  Truth Over Optics
                </h3>

                <p className="text-neutral-200 text-sm leading-relaxed font-bold">
                  If it cannot survive scrutiny, it should not be displayed.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-bold mb-4">
                  Semantics Before Representation
                </h3>

                <p className="text-neutral-200 text-sm leading-relaxed font-bold">
                  Representation is disposable. Meaning is not.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-bold mb-4">
                  Constraints Create Clarity
                </h3>

                <p className="text-neutral-200 text-sm leading-relaxed font-bold">
                  Freedom without constraints produces noise.
                </p>
              </div>

            </div>

            <Link
              href="/constitution"
              className="inline-block text-white hover:text-indigo-400 transition-colors font-mono text-sm font-bold"
            >
              View the full Constitution →
            </Link>

          </div>
        </section>

        {/* PROGRAMS */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto space-y-14">

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Research Programs
            </h2>

            <div className="grid md:grid-cols-3 gap-6 space-y-0">

              <div className="border border-neutral-900 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    ANIMUS
                  </h3>
                  <p className="text-[10px] font-mono text-indigo-400 font-bold mb-4 uppercase tracking-wider">
                    Neuro-symbolic reasoning kernel with anti-hallucination states
                  </p>

                  <p className="text-neutral-200 leading-relaxed text-sm mb-6 font-bold">
                    Foundational research program exploring deterministic reasoning, symbolic verification, and domain-agnostic cognition.
                  </p>
                </div>

                <Link
                  href="/programs"
                  className="text-xs font-mono text-neutral-200 hover:text-white transition-colors inline-block mt-auto font-bold"
                >
                  Explore Program →
                </Link>
              </div>

              <div className="border border-indigo-900 bg-[#07080c]/30 p-8 flex flex-col justify-between shadow-[0_0_15px_rgba(99,102,241,0.02)]">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Anchor
                  </h3>
                  <p className="text-[10px] font-mono text-indigo-400 font-bold mb-4 uppercase tracking-wider">
                    Deterministic governance + regulatory polyglottism
                  </p>

                  <p className="text-neutral-200 leading-relaxed text-sm mb-6 font-bold">
                    Governance infrastructure for intelligent systems focused on capability resolution, auditability, and execution control.
                  </p>
                </div>

                <Link
                  href="/anchor"
                  className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors inline-block mt-auto font-bold"
                >
                  Explore Suite →
                </Link>
              </div>

              <div className="border border-neutral-900 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Shadow Watch
                  </h3>
                  <p className="text-[10px] font-mono text-indigo-400 font-bold mb-4 uppercase tracking-wider">
                    Forensic execution telemetry + behavioral verification
                  </p>

                  <p className="text-neutral-200 leading-relaxed text-sm mb-6 font-bold">
                    Observability infrastructure researching behavioral verification, session trust, forensic telemetry, and institutional accountability.
                  </p>
                </div>

                <Link
                  href="/programs"
                  className="text-xs font-mono text-neutral-200 hover:text-white transition-colors inline-block mt-auto font-bold"
                >
                  Explore Program →
                </Link>
              </div>

            </div>

            <Link
              href="/programs"
              className="inline-block text-white hover:text-neutral-200 transition-colors font-bold"
            >
              View all programs →
            </Link>

          </div>
        </section>

        {/* PUBLICATIONS */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto space-y-12">

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Publications & Research
            </h2>

            <div className="border border-indigo-900/60 bg-[#07080c]/30 p-10 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-indigo-900/50 border-l border-b border-indigo-850 text-indigo-400 font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 font-bold">
                Published April 2026
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono font-bold block">
                  Latest Research Preprint
                </span>
                <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight">
                  Anchor: Constitutional Governance Infrastructure for Intelligent Systems
                </h3>
              </div>

              <p className="text-neutral-300 leading-relaxed text-sm font-bold max-w-3xl">
                This paper defines the specifications for Anchor, a deterministic governance layer operating at runtime. It details the compile-time AST verification routines, cryptographic decision chains, and high-security runtime sandboxing protocols.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex gap-4 text-xs font-mono text-neutral-400 font-bold">
                  <span>Zenodo Registry</span>
                  <span>•</span>
                  <span>106 views</span>
                  <span>•</span>
                  <span>76 downloads</span>
                </div>
                <div className="h-4 w-px bg-neutral-800 hidden sm:block" />
                <a
                  href="https://zenodo.org/records/19734724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
                >
                  Access Paper on Zenodo →
                </a>
              </div>
            </div>

            <Link
              href="/research"
              className="inline-block text-white hover:text-neutral-200 transition-colors font-bold"
            >
              View research archive →
            </Link>

          </div>
        </section>

        {/* PROGRESS */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto space-y-12">

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Institutional Progress & Git Ledger
              </h2>

              <p className="text-neutral-200 font-bold leading-relaxed max-w-3xl">
                This timeline tracks the evolution of AnimusLab, combining our organizational founding milestones with our dynamic Git repository ledger.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-mono text-neutral-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                  Zenodo Preprint — 100+ views
                </span>
                <span className="hidden md:inline text-neutral-800">|</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                  Active FINOS Contributor
                </span>
                <span className="hidden md:inline text-neutral-800">|</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                  PyPI Package Released
                </span>
              </div>
            </div>

            <div className="space-y-10">

              <div className="border-l border-neutral-950 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">November 20, 2025</p>
                <h4 className="text-white font-bold text-lg">AnimusLab Organization Founded</h4>
                <p className="text-sm text-neutral-200 font-bold leading-relaxed">
                  Launched AnimusLab as an independent research institution to design deterministic alternatives to probabilistic AI control models. Initiated the foundational ANIMUS neuro-symbolic reasoning project.
                </p>
              </div>

              <div className="border-l border-neutral-950 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">December 15, 2025</p>
                <h4 className="text-white font-bold text-lg">Anchor Governance Initiated</h4>
                <p className="text-sm text-neutral-200 font-bold leading-relaxed">
                  Began drafting the initial design specifications and compile-time AST matching queries for what would become the Anchor runtime governance engine.
                </p>
              </div>

              <div className="border-l border-neutral-950 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">April 12, 2026</p>
                <h4 className="text-white font-bold text-lg">Anchor Whitepaper Published</h4>
                <p className="text-sm text-neutral-200 font-bold leading-relaxed">
                  Released the formal preprint for "Anchor: Constitutional Governance Infrastructure for Intelligent Systems" on the Zenodo registry.
                </p>
              </div>

              <div className="border-l border-neutral-950 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">May 19, 2026</p>
                <h4 className="text-white font-bold text-lg">Manifesto Platform Launch</h4>
                <p className="text-sm text-neutral-200 font-bold leading-relaxed">
                  Committed the initial code for the `animus-manifesto` portal to Git, establishing our web presence, core thesis definitions, and research indices.
                </p>
              </div>

              <div className="border-l border-neutral-950 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">May 20, 2026</p>
                <h4 className="text-white font-bold text-lg">Interactive Simulator & AST Telemetry</h4>
                <p className="text-sm text-neutral-200 font-bold leading-relaxed">
                  Deployed interactive execution replays and sandbox simulation controls. Integrated multi-language Tree-Sitter query mapping to enforce capability isolation.
                </p>
              </div>

              <div className="border-l border-neutral-950 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">June 1, 2026</p>
                <h4 className="text-white font-bold text-lg">Multi-Page Portal Restructuring</h4>
                <p className="text-sm text-neutral-200 font-bold leading-relaxed">
                  Expanded the homepage index into a multi-page setup, implementing the sitemap router, the first official Constitution draft, and dynamic research notes.
                </p>
              </div>

              <div className="border-l border-neutral-950 pl-6 space-y-2">
                <p className="text-xs font-mono text-indigo-400 font-bold">June 3, 2026</p>
                <h4 className="text-white font-bold text-lg">18-Article Constitution & Centering</h4>
                <p className="text-sm text-neutral-200 font-bold leading-relaxed">
                  Expanded the Constitution to 18 articles merging framework articles, invariants, and ChatGPT's institutional principles. Centered all layouts and verified the build.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-6xl mx-auto space-y-12">

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Contact & Channels
              </h2>
              <p className="text-neutral-400 font-bold max-w-2xl text-sm">
                Connect with our team or follow the developments of the AnimusLab independent systems research initiative.
              </p>
            </div>

            <div className="bg-[#07080c]/30 border border-indigo-950 p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono font-bold block">
                  Institutional Partnerships
                </span>
                <h3 className="text-lg md:text-xl text-white font-bold">
                  For pilot requests, technical deep-dives, or institutional inquiries:
                </h3>
                <p className="text-sm text-neutral-400 font-bold">
                  Reach out directly to arrange a private technical reference walkthrough.
                </p>
              </div>
              <a
                href="mailto:tan@anchorgovernance.tech?subject=Anchor%20Institutional%20Deep-Dive"
                className="bg-white text-black hover:bg-neutral-200 px-6 py-3.5 text-sm font-bold transition-colors whitespace-nowrap rounded-sm shadow-lg shadow-black/20"
              >
                Contact Institutional Desk
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Email */}
              <a
                href="mailto:tan@anchorgovernance.tech?subject=Anchor%20General%20Inquiry"
                className="group relative block p-6 bg-gradient-to-br from-[#0a0a0c] to-[#050505] border border-neutral-900 hover:border-neutral-800 transition-all duration-300 rounded-sm"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mb-2 font-bold">Direct Inquiry</span>
                <span className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors block">tan@anchorgovernance.tech</span>
                <span className="text-xs text-neutral-400 mt-2 block font-bold">Inquiries regarding institutional research, collaborations, and projects.</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AnimusLab"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-6 bg-gradient-to-br from-[#0a0a0c] to-[#050505] border border-neutral-900 hover:border-neutral-800 transition-all duration-300 rounded-sm"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mb-2 font-bold">Source Ledger</span>
                <span className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors block">github.com/AnimusLab</span>
                <span className="text-xs text-neutral-400 mt-2 block font-bold">Public repositories, open-source governance specs, and releases.</span>
              </a>

              {/* Personal LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tanishq-dasari10/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-6 bg-gradient-to-br from-[#0a0a0c] to-[#050505] border border-neutral-900 hover:border-neutral-800 transition-all duration-300 rounded-sm"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mb-2 font-bold">Director Profile</span>
                <span className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors block">LinkedIn // Tanishq Dasari</span>
                <span className="text-xs text-neutral-400 mt-2 block font-bold">Professional background, updates, and research networks.</span>
              </a>

              {/* Company LinkedIn */}
              <a
                href="https://www.linkedin.com/company/animuslab-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-6 bg-gradient-to-br from-[#0a0a0c] to-[#050505] border border-neutral-900 hover:border-neutral-800 transition-all duration-300 rounded-sm"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mb-2 font-bold">Institutional Page</span>
                <span className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors block">LinkedIn // AnimusLab</span>
                <span className="text-xs text-neutral-400 mt-2 block font-bold">Official organization updates, announcements, and news.</span>
              </a>

              {/* X.com */}
              <a
                href="https://x.com/TanishqDasari1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-6 bg-gradient-to-br from-[#0a0a0c] to-[#050505] border border-neutral-900 hover:border-neutral-800 transition-all duration-300 rounded-sm"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono block mb-2 font-bold">Shortform Feed</span>
                <span className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors block">x.com/TanishqDasari1</span>
                <span className="text-xs text-neutral-400 mt-2 block font-bold">Real-time developer logs, research progress, and observations.</span>
              </a>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}