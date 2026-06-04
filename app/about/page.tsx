import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About | AnimusLab",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">

        {/* HERO */}

        <section className="px-6 md:px-12 py-32 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
              About AnimusLab
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white max-w-5xl leading-tight">
              Most AI research focuses on capability.
              <br />
              We focus on what happens after capability.
            </h1>

            <p className="mt-10 max-w-3xl text-lg text-neutral-400 leading-relaxed">
              AnimusLab is an independent research organization
              exploring governance, reasoning, and institutional
              infrastructure for intelligent systems.
            </p>

          </div>
        </section>

        {/* WHY WE EXIST */}

        <section className="px-6 md:px-12 py-28 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-semibold text-white mb-12">
              Why We Exist
            </h2>

            <div className="space-y-8 text-lg text-neutral-400 leading-relaxed">

              <p>
                Artificial intelligence has entered a phase where
                capability is no longer the only question.
              </p>

              <p>
                Models are becoming larger. Systems are becoming
                more autonomous. Decision making is increasingly
                delegated to software.
              </p>

              <p>
                Yet capability alone does not answer the questions
                that emerge once these systems become useful.
              </p>

              <p>
                How are decisions governed?
              </p>

              <p>
                How are actions constrained?
              </p>

              <p>
                How are failures audited?
              </p>

              <p>
                How do institutions maintain trust in systems
                whose internal behavior grows increasingly complex?
              </p>

              <p className="text-white">
                AnimusLab exists to explore those questions.
              </p>

            </div>

          </div>
        </section>

        {/* OUR VIEW */}

        <section className="px-6 md:px-12 py-28 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-semibold text-white mb-12">
              Our View
            </h2>

            <div className="space-y-8 text-lg text-neutral-400 leading-relaxed">

              <p>
                We believe the next decade of computing will not
                be defined solely by more capable systems.
              </p>

              <p className="text-white text-xl">
                It will be defined by governable systems.
              </p>

              <p>
                The challenge is no longer whether machines can
                perform tasks.
              </p>

              <p>
                The challenge is whether their behavior can be
                understood, constrained, audited, and aligned
                with institutional requirements.
              </p>

              <p>
                Many existing approaches rely primarily on
                probabilistic safeguards.
              </p>

              <p>
                We are interested in exploring deterministic
                alternatives.
              </p>

            </div>

          </div>
        </section>

        {/* RESEARCH AREAS */}

        <section className="px-6 md:px-12 py-28 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl font-semibold text-white mb-12">
              Research Areas
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white mb-4">
                  Governance Systems
                </h3>

                <p className="text-neutral-400">
                  Mechanisms that define, enforce,
                  and audit intelligent behavior.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white mb-4">
                  Constitutional Architectures
                </h3>

                <p className="text-neutral-400">
                  Systems where principles remain active
                  participants in execution.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white mb-4">
                  Reasoning Infrastructure
                </h3>

                <p className="text-neutral-400">
                  Representations and architectures
                  supporting reliable reasoning.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white mb-4">
                  Institutional AI
                </h3>

                <p className="text-neutral-400">
                  Research into accountability,
                  trust, and governance requirements.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* PROGRAMS */}

        <section className="px-6 md:px-12 py-28 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl font-semibold text-white mb-12">
              Research Programs
            </h2>

            <div className="space-y-10">

              <div className="border border-neutral-900 p-8">
                <h3 className="text-2xl text-white mb-4">
                  ANIMUS
                </h3>

                <p className="text-neutral-400">
                  Research into reasoning systems,
                  symbolic representations, and
                  domain-agnostic cognition.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-2xl text-white mb-4">
                  Anchor
                </h3>

                <p className="text-neutral-400">
                  Research into deterministic runtime
                  governance and constitutional enforcement.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-2xl text-white mb-4">
                  Shadow Watch
                </h3>

                <p className="text-neutral-400">
                  Research into observability,
                  oversight, and institutional trust.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* LONG TERM */}

        <section className="px-6 md:px-12 py-28 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-semibold text-white mb-12">
              Long-Term Goal
            </h2>

            <div className="space-y-8 text-lg text-neutral-400 leading-relaxed">

              <p>
                We believe reliability,
                accountability, and enforceable
                constraints will become as important
                to future intelligent systems as
                capability itself.
              </p>

              <p className="text-white">
                AnimusLab exists to explore that future.
              </p>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
