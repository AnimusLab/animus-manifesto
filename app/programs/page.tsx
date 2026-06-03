import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">

        {/* HERO */}

        <section className="px-6 md:px-12 py-32 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <p className="institution-label mb-6">
              Programs
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight max-w-5xl">
              Long-Term Research Programs
            </h1>

            <p className="mt-10 text-lg text-neutral-400 leading-relaxed max-w-3xl">
              Research at AnimusLab is organized through a collection
              of long-term programs. Each program investigates a
              distinct problem space while contributing to the broader
              mission of governable intelligent systems.
            </p>

          </div>
        </section>

        {/* ANCHOR */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-between mb-10">
              <span className="institution-label">
                PROGRAM 01
              </span>

              <span className="text-xs tracking-[0.2em] text-emerald-400 uppercase">
                Active
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Anchor
            </h2>

            <p className="text-xl text-neutral-300 mb-10">
              Deterministic Runtime Governance
            </p>

            <p className="text-neutral-400 leading-relaxed max-w-3xl mb-12">
              Anchor investigates constitutional enforcement,
              runtime constraints, capability isolation,
              auditability, and policy-driven execution.
              The program explores how intelligent systems
              can remain governable after deployment.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">

              <div className="border border-neutral-900 p-5">
                Constitutional Systems
              </div>

              <div className="border border-neutral-900 p-5">
                Runtime Governance
              </div>

              <div className="border border-neutral-900 p-5">
                Policy Enforcement
              </div>

              <div className="border border-neutral-900 p-5">
                Audit Infrastructure
              </div>

              <div className="border border-neutral-900 p-5">
                Capability Isolation
              </div>

              <div className="border border-neutral-900 p-5">
                Deterministic Control
              </div>

            </div>

            <div className="flex gap-6 mt-4">
              <Link
                href="/anchor"
                className="institution-link text-indigo-400 hover:text-indigo-300 font-mono text-sm"
              >
                Explore Anchor Suite →
              </Link>
              <span className="text-neutral-800 font-mono">|</span>
              <Link
                href="/research"
                className="institution-link text-neutral-400 hover:text-white font-mono text-sm"
              >
                View Publications →
              </Link>
            </div>

          </div>
        </section>

        {/* ANIMUS */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-between mb-10">
              <span className="institution-label">
                PROGRAM 02
              </span>

              <span className="text-xs tracking-[0.2em] text-yellow-400 uppercase">
                Research
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              ANIMUS
            </h2>

            <p className="text-xl text-neutral-300 mb-10">
              Reasoning Systems & Cognitive Infrastructure
            </p>

            <p className="text-neutral-400 leading-relaxed max-w-3xl mb-12">
              ANIMUS explores reasoning architectures,
              symbolic representations, memory systems,
              semantic computation, and domain-agnostic
              cognition. The objective is to understand
              how intelligence can be represented,
              constrained, and governed.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">

              <div className="border border-neutral-900 p-5">
                Reasoning Architectures
              </div>

              <div className="border border-neutral-900 p-5">
                Symbolic Systems
              </div>

              <div className="border border-neutral-900 p-5">
                Memory Models
              </div>

              <div className="border border-neutral-900 p-5">
                Semantic Computation
              </div>

              <div className="border border-neutral-900 p-5">
                Cognitive Infrastructure
              </div>

              <div className="border border-neutral-900 p-5">
                Domain-Agnostic Intelligence
              </div>

            </div>

            <Link
              href="/research"
              className="institution-link"
            >
              View Research →
            </Link>

          </div>
        </section>

        {/* SHADOW WATCH */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-between mb-10">
              <span className="institution-label">
                PROGRAM 03
              </span>

              <span className="text-xs tracking-[0.2em] text-neutral-400 uppercase">
                Exploratory
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Shadow Watch
            </h2>

            <p className="text-xl text-neutral-300 mb-10">
              Institutional Observability
            </p>

            <p className="text-neutral-400 leading-relaxed max-w-3xl mb-12">
              Shadow Watch researches oversight,
              accountability, transparency,
              monitoring infrastructure, and
              trust systems for intelligent
              institutions and autonomous systems.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">

              <div className="border border-neutral-900 p-5">
                Observability
              </div>

              <div className="border border-neutral-900 p-5">
                Monitoring
              </div>

              <div className="border border-neutral-900 p-5">
                Accountability
              </div>

              <div className="border border-neutral-900 p-5">
                Transparency
              </div>

              <div className="border border-neutral-900 p-5">
                Institutional Trust
              </div>

              <div className="border border-neutral-900 p-5">
                Oversight Systems
              </div>

            </div>

            <Link
              href="/research"
              className="institution-link"
            >
              View Research →
            </Link>

          </div>
        </section>

        {/* ROADMAP */}

        <section className="px-6 md:px-12 py-28">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl font-semibold text-white mb-16">
              Institutional Roadmap
            </h2>

            <div className="space-y-10">

              <div className="flex justify-between border-b border-neutral-900 pb-6">
                <span className="text-white">
                  2026
                </span>

                <span className="text-neutral-400">
                  Anchor v1 — Governance Infrastructure
                </span>
              </div>

              <div className="flex justify-between border-b border-neutral-900 pb-6">
                <span className="text-white">
                  2027
                </span>

                <span className="text-neutral-400">
                  ANIMUS Core — Reasoning Architecture Research
                </span>
              </div>

              <div className="flex justify-between border-b border-neutral-900 pb-6">
                <span className="text-white">
                  2028
                </span>

                <span className="text-neutral-400">
                  Shadow Watch — Institutional Oversight Systems
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white">
                  Long-Term
                </span>

                <span className="text-neutral-400">
                  Governable Intelligence
                </span>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}