import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold mb-6">
                  Independent Systems Research Institution
                </p>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight max-w-5xl">
                  Building systems that remain truthful,<br className="hidden lg:inline" />
                  auditable, governable, and understandable<br className="hidden lg:inline" />
                  under scrutiny.
                </h1>

                <p className="max-w-3xl text-lg text-neutral-200 font-bold leading-relaxed">
                  AnimusLab researches reasoning, governance, and observability systems for increasingly capable intelligent systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/constitution"
                  className="border border-neutral-800 px-6 py-3 text-sm text-white hover:bg-neutral-950 transition-colors"
                >
                  Our Principles
                </Link>

                <Link
                  href="/programs"
                  className="border border-neutral-800 px-6 py-3 text-sm text-neutral-200 hover:text-white transition-colors font-bold"
                >
                  Research Programs
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
                  <h3 className="text-2xl font-bold text-white mb-4">
                    ANIMUS
                  </h3>

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
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Anchor
                  </h3>

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
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Shadow Watch
                  </h3>

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

            <div className="border border-neutral-900 p-8 space-y-5">

              <p className="text-sm uppercase tracking-wider text-neutral-400 font-bold">
                Latest Publication
              </p>

              <h3 className="text-2xl text-white font-bold">
                Anchor: Constitutional Governance Infrastructure for Intelligent Systems
              </h3>

              <p className="text-neutral-200 font-bold">
                Published on Zenodo.
              </p>

              <p className="text-sm text-neutral-300 font-bold">
                106 views · 76 downloads
              </p>

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

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Institutional Progress & Git Ledger
            </h2>

            <p className="text-neutral-200 font-bold leading-relaxed max-w-3xl">
              This timeline tracks the evolution of AnimusLab, combining our organizational founding milestones with our dynamic Git repository ledger.
            </p>

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
          <div className="max-w-4xl mx-auto space-y-10">

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Contact
            </h2>

            <div className="space-y-4">

              <a
                href="mailto:tan@animuslab.dev"
                className="block text-neutral-200 hover:text-white transition-colors font-bold"
              >
                tan@animuslab.dev
              </a>

              <a
                href="https://github.com/AnimusLab"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-200 hover:text-white transition-colors font-bold"
              >
                github.com/AnimusLab
              </a>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}