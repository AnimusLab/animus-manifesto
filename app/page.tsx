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
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">

              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Independent Systems Research Institution
                </p>

                <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight">
                  Building systems that remain truthful,
                  auditable, governable, and understandable
                  under scrutiny.
                </h1>

                <p className="max-w-2xl text-lg text-neutral-400 leading-relaxed">
                  AnimusLab researches reasoning,
                  governance, and observability systems for
                  increasingly capable intelligent systems.
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
                  className="border border-neutral-900 px-6 py-3 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Research Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <div className="max-w-3xl space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Why AnimusLab Exists
              </h2>

              <p className="text-lg text-neutral-400 leading-relaxed">
                As intelligent systems become more capable,
                governance becomes the primary challenge.
              </p>

              <p className="text-neutral-400 leading-relaxed">
                Existing approaches rely heavily on
                probabilistic safety layers, confidence scores,
                and opaque decision boundaries. These systems
                can be useful, but they remain difficult to
                audit, justify, and govern under scrutiny.
              </p>

              <p className="text-neutral-400 leading-relaxed">
                AnimusLab explores architectural alternatives
                grounded in determinism, auditability,
                observability, and explicit control.
              </p>
            </div>

          </div>
        </section>

        {/* FLAGSHIP PROGRAM */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900 bg-[#07080c]/20">
          <div className="max-w-4xl mx-auto font-sans">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono font-semibold block">
                  Flagship Program
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Anchor
                </h2>
              </div>

              <p className="text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
                Deterministic Runtime Governance for Intelligent Systems
              </p>

              <p className="text-neutral-400 leading-relaxed max-w-3xl">
                Anchor is our primary active initiative. It investigates capability containment,
                pre-compilation syntax validation, and cryptographic auditability to ensure autonomous
                software complies with constitutional constraints at runtime.
              </p>

              <div className="pt-4">
                <Link
                  href="/anchor"
                  className="inline-flex items-center gap-2 border border-indigo-900 bg-[#07080c]/50 px-6 py-3 text-sm text-indigo-400 hover:text-indigo-300 hover:border-indigo-800 transition-colors font-mono"
                >
                  Explore Anchor →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto space-y-14">

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Three Foundational Principles
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-medium mb-4">
                  Truth Over Optics
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  If it cannot survive scrutiny,
                  it should not be displayed.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-medium mb-4">
                  Semantics Before Representation
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  Representation is disposable.
                  Meaning is not.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-medium mb-4">
                  Constraints Create Clarity
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  Freedom without constraints
                  produces noise.
                </p>
              </div>

            </div>

            <Link
              href="/constitution"
              className="inline-block text-white hover:text-neutral-400 transition-colors"
            >
              View all six principles →
            </Link>

          </div>
        </section>

        {/* PROGRAMS */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto space-y-14">

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Research Programs
            </h2>

            <div className="grid md:grid-cols-3 gap-6 space-y-0">

              <div className="border border-neutral-900 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    ANIMUS
                  </h3>

                  <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                    Foundational research program exploring
                    deterministic reasoning, symbolic
                    verification, and domain-agnostic cognition.
                  </p>
                </div>

                <Link
                  href="/programs"
                  className="text-xs font-mono text-neutral-400 hover:text-white transition-colors inline-block mt-auto"
                >
                  Explore Program →
                </Link>
              </div>

              <div className="border border-indigo-900 bg-[#07080c]/30 p-8 flex flex-col justify-between shadow-[0_0_15px_rgba(99,102,241,0.02)]">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Anchor
                  </h3>

                  <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                    Governance infrastructure for intelligent
                    systems focused on capability resolution,
                    auditability, and execution control.
                  </p>
                </div>

                <Link
                  href="/anchor"
                  className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors inline-block mt-auto"
                >
                  Explore Suite →
                </Link>
              </div>

              <div className="border border-neutral-900 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Shadow Watch
                  </h3>

                  <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                    Observability infrastructure researching
                    behavioral verification, session trust,
                    forensic telemetry, and institutional
                    accountability.
                  </p>
                </div>

                <Link
                  href="/programs"
                  className="text-xs font-mono text-neutral-400 hover:text-white transition-colors inline-block mt-auto"
                >
                  Explore Program →
                </Link>
              </div>

            </div>

            <Link
              href="/programs"
              className="inline-block text-white hover:text-neutral-400 transition-colors"
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

              <p className="text-sm uppercase tracking-wider text-neutral-500">
                Latest Publication
              </p>

              <h3 className="text-2xl text-white">
                Anchor: Governance Infrastructure
                for Intelligent Systems
              </h3>

              <p className="text-neutral-400">
                Published on Zenodo.
              </p>

              <p className="text-sm text-neutral-500">
                106 views · 76 downloads
              </p>

            </div>

            <Link
              href="/research"
              className="inline-block text-white hover:text-neutral-400 transition-colors"
            >
              View research archive →
            </Link>

          </div>
        </section>

        {/* PROGRESS */}
        <section className="px-6 md:px-12 py-28 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto space-y-12">

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Institutional Progress
            </h2>

            <div className="space-y-10">

              <div>
                <p className="text-sm text-neutral-500 mb-2">2025</p>
                <p className="text-white">AnimusLab Founded</p>
              </div>

              <div>
                <p className="text-sm text-neutral-500 mb-2">2025</p>
                <p className="text-white">ANIMUS Research Initiated</p>
              </div>

              <div>
                <p className="text-sm text-neutral-500 mb-2">2026</p>
                <p className="text-white">Anchor Preprint Published</p>
              </div>

              <div>
                <p className="text-sm text-neutral-500 mb-2">2026</p>
                <p className="text-white">Shadow Watch Prototype Completed</p>
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
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                tan@animuslab.dev
              </a>

              <a
                href="https://github.com/AnimusLab"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-400 hover:text-white transition-colors"
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