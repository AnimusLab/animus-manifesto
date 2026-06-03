import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ConstitutionPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">

        {/* HERO */}

        <section className="px-6 md:px-12 py-32 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
              Constitution
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight">
              Constitution of AnimusLab
            </h1>

            <p className="mt-10 max-w-3xl text-lg text-neutral-400 leading-relaxed">
              This document defines the mission,
              principles, and governance philosophy
              of AnimusLab. It serves as the foundational
              charter for the institution and its programs.
            </p>

          </div>
        </section>

        {/* PREAMBLE */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <p className="institution-label mb-8">
              PREAMBLE
            </p>

            <div className="space-y-8 text-lg text-neutral-400 leading-relaxed">

              <p>
                We believe that intelligent systems
                will increasingly participate in the
                operation of institutions, economies,
                and societies.
              </p>

              <p>
                As capability grows, governance becomes
                a first-order problem.
              </p>

              <p>
                The challenge is not merely creating
                systems that can act.
              </p>

              <p>
                The challenge is creating systems whose
                actions remain understandable, auditable,
                constrained, and accountable.
              </p>

              <p className="text-white">
                AnimusLab exists to explore that challenge.
              </p>

            </div>

          </div>
        </section>

        {/* ARTICLE I */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <p className="institution-label mb-6">
              ARTICLE I
            </p>

            <h2 className="text-3xl font-semibold text-white mb-10">
              Mission
            </h2>

            <div className="space-y-6 text-neutral-400 leading-relaxed">

              <p>
                The mission of AnimusLab is to conduct
                research into governance, reasoning,
                and institutional infrastructure for
                intelligent systems.
              </p>

              <p>
                The institution exists to investigate
                mechanisms that improve reliability,
                accountability, and trust in increasingly
                capable systems.
              </p>

            </div>

          </div>
        </section>

        {/* ARTICLE II */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <p className="institution-label mb-6">
              ARTICLE II
            </p>

            <h2 className="text-3xl font-semibold text-white mb-10">
              Research Independence
            </h2>

            <div className="space-y-6 text-neutral-400 leading-relaxed">

              <p>
                Research questions shall not be selected
                solely on the basis of popularity,
                commercial demand, or prevailing trends.
              </p>

              <p>
                The institution reserves the right to
                investigate problems that may be neglected,
                unpopular, or long-term in nature.
              </p>

              <p>
                Intellectual independence is considered
                essential to meaningful inquiry.
              </p>

            </div>

          </div>
        </section>

        {/* ARTICLE III */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <p className="institution-label mb-6">
              ARTICLE III
            </p>

            <h2 className="text-3xl font-semibold text-white mb-10">
              Transparency
            </h2>

            <div className="space-y-6 text-neutral-400 leading-relaxed">

              <p>
                Research should be published whenever
                possible.
              </p>

              <p>
                Assumptions should be documented.
              </p>

              <p>
                Limitations should be acknowledged.
              </p>

              <p>
                Claims should be distinguishable from
                evidence.
              </p>

            </div>

          </div>
        </section>

        {/* ARTICLE IV */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <p className="institution-label mb-6">
              ARTICLE IV
            </p>

            <h2 className="text-3xl font-semibold text-white mb-10">
              Governance First
            </h2>

            <div className="space-y-6 text-neutral-400 leading-relaxed">

              <p>
                Capability and governance should develop
                together.
              </p>

              <p>
                Systems that cannot be governed cannot be
                reliably integrated into institutions.
              </p>

              <p>
                Governance is therefore treated as a
                foundational component rather than a
                secondary consideration.
              </p>

            </div>

          </div>
        </section>

        {/* ARTICLE V */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <p className="institution-label mb-6">
              ARTICLE V
            </p>

            <h2 className="text-3xl font-semibold text-white mb-10">
              Program Formation
            </h2>

            <div className="space-y-6 text-neutral-400 leading-relaxed">

              <p>
                Research programs may be established
                when a problem domain requires sustained
                investigation.
              </p>

              <p>
                Programs should contribute to the broader
                mission of governable intelligent systems.
              </p>

              <p>
                Anchor, ANIMUS, and Shadow Watch are
                examples of such programs.
              </p>

            </div>

          </div>
        </section>

        {/* ARTICLE VI */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-4xl mx-auto">

            <p className="institution-label mb-6">
              ARTICLE VI
            </p>

            <h2 className="text-3xl font-semibold text-white mb-10">
              Long-Term Objective
            </h2>

            <div className="space-y-6 text-neutral-400 leading-relaxed">

              <p>
                The long-term objective of AnimusLab is
                to contribute to the development of
                systems that are not only capable,
                but governable.
              </p>

              <p>
                Reliability, accountability, and
                enforceable constraints are considered
                essential properties of future intelligent
                systems.
              </p>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}