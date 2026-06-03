import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ConstitutionPage() {
  const foundationalInvariants = [
    {
      num: "I",
      name: "Truth Over Optics",
      invariant: "If it cannot survive scrutiny, it should not be displayed.",
      desc: "Reality takes precedence over narrative. A system that shows a confidence score of 0.83 for a hallucinated fact is not cautious; it is dishonest. We reject dashboards, charts, metrics, and narratives that feel informative but distort reality. We choose deterministic symbolic verification over probabilistic guessing.",
      evidence: "Every high-reliability engineering discipline privileges physical evidence over marketing. A bridge either stands or collapses; a load-bearing calculation cannot be optimized through reputation."
    },
    {
      num: "II",
      name: "Semantics Before Representation",
      invariant: "Representation is disposable. Meaning is not.",
      desc: "We do not start with the user interface; we start with meaning. Signal before renderer. Contract before convenience. Rules before aesthetics. Every field, state, and governance rule must be bounded and defined prior to writing visual components.",
      evidence: "In stable computational environments, data schemas and state machine definitions are codified first, rendering client interfaces downstream and replaceable."
    },
    {
      num: "III",
      name: "Constraints Create Clarity",
      invariant: "Freedom without constraints produces noise.",
      desc: "Constraints are defence mechanisms, not limitations. We add rules not to slow things down, but to prevent the kind of silent architectural rot that only becomes visible in production.",
      evidence: "Anchor's three-file governance hierarchy (constitution, mitigation, policy) is built on this principle. Hard priority ordering and resource drift caps enforce load-bearing walls that cannot be bypassed."
    },
    {
      num: "IV",
      name: "Failure Is a State Transition",
      invariant: "Failure is evidence of movement.",
      desc: "We do not hide failures, nor do we dramatize them. We treat them as versioned, structured states. When a system produces non-compliant output, it is captured in a structured Therapy Log entry, pre-authored mitigations are applied, and execution is securely re-routed.",
      evidence: "Treating exceptions as information rather than error conditions allows systems to self-correct and log transparently without raising fatal runtime crashes."
    },
    {
      num: "V",
      name: "Domain-Agnostic by Default",
      invariant: "If a concept only works in one domain, it is not fundamental enough.",
      desc: "Cognitive, reasoning, and containment architectures must be designed to work universally. Whether processing financial trades, codebase refactors, cybersecurity telemetry, or personal workspace automation, the underlying reasoning architecture remains unchanged.",
      evidence: "A truly fundamental reasoning block resolves states across varying domains using the exact same underlying symbolic rules, rather than relying on domain-specific fine-tuning."
    },
    {
      num: "VI",
      name: "Rebuild If the Foundation Is Wrong",
      invariant: "Adoption is optional. Integrity is not.",
      desc: "We prioritize structural integrity over path-dependency. If the core assumptions, protocols, or schemas of a system are proved flawed, we dismantle and rebuild from the ground up rather than patching over fundamental structural vulnerabilities.",
      evidence: "Durable computing systems and protocols survive because their base layers are structurally clean and uncompromising, even if it requires complete, clean-slate rewrites."
    }
  ];

  const institutionalInvariants = [
    {
      num: "1",
      name: "Truth Over Optics",
      principle: "Reality takes precedence over narrative. If the evidence contradicts the story, the story changes. Not the evidence.",
      reason: "Organizations eventually become trapped when they optimize for appearance instead of reality. In science, a theory survives only until evidence disproves it. In aviation, incident reports exist to expose reality, not protect reputation. High-reliability systems must privilege truth over optics."
    },
    {
      num: "2",
      name: "Governance Before Capability",
      principle: "Increasing power without increasing control is dangerous. Capability and governance must scale together.",
      reason: "History repeatedly shows that systems become unstable when power grows faster than oversight. Financial markets without regulation produce systemic crises; software systems without operational controls create catastrophic outages. Anchor asks: why wait until afterward?"
    },
    {
      num: "3",
      name: "Evidence Over Authority",
      principle: "Claims derive legitimacy from evidence. Not titles. Not status. Not hierarchy.",
      reason: "A correct argument remains correct regardless of who presents it; a false argument remains false regardless of prestige. Peer review, mathematical proofs, and open-source validation exist because authority alone is insufficient."
    },
    {
      num: "4",
      name: "Long-Term Thinking Over Short-Term Attention",
      principle: "Important questions often require years. Not weeks.",
      reason: "Many foundational ideas appear irrational or unprofitable in the short term. Internet infrastructure, operating systems, and public-key cryptography all required decades of research and development before widespread adoption. Civilizations are built by institutions willing to think beyond current cycles."
    },
    {
      num: "5",
      name: "Systems Over Personalities",
      principle: "Institutions should survive individual participants.",
      reason: "If an organization depends entirely on a founder, it is a personal project rather than a durable institution. We transfer knowledge, authority, and principles into structures, schemas, and public protocols rather than centering them on individuals."
    },
    {
      num: "6",
      name: "Publish What You Learn",
      principle: "Knowledge gains value when it becomes part of the commons.",
      reason: "Research that remains private cannot be challenged, improved, or extended. Publication creates criticism, replication, improvement, and civilizational progress. We share what we learn through papers, standards, and open-source implementations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1 max-w-[1600px] mx-auto w-full px-8 py-24">
        {/* HERO */}
        <section className="mb-20 border-b border-neutral-900 pb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">
            Institutional Charter
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Constitution of AnimusLab
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
            This document defines the core invariants, operational principles, and governance philosophy of AnimusLab. It serves as the foundational charter for the institution, its research, and its active programs.
          </p>
        </section>

        {/* PREAMBLE */}
        <section className="mb-24 border-b border-neutral-900 pb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6">
            // Preamble
          </p>

          <div className="space-y-6 text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-4xl">
            <p>
              We believe that increasingly capable intelligent systems will participate fundamentally in the operation of institutions, economies, and societies. As their capability grows, their governance becomes the primary challenge of our era.
            </p>
            <p>
              The challenge is not merely creating systems that can perform complex tasks, but creating systems whose execution trace remains understandable, verifiable, isolated, and auditable under strict institutional scrutiny.
            </p>
            <p className="text-white font-medium">
              AnimusLab exists to establish the theoretical foundations and engineering mechanisms required to make intelligent systems fundamentally governable.
            </p>
          </div>
        </section>

        {/* SECTION 1: FOUNDATIONAL INVARIANTS */}
        <section className="mb-24 border-b border-neutral-900 pb-16">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-400 mb-4">
              // Section I
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Foundational Invariants (System Design)
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light max-w-2xl">
              These six design invariants are non-negotiable. Every computational framework, code compiler, and sandbox boundary built by AnimusLab must conform to these properties.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl">
            {foundationalInvariants.map((inv) => (
              <div key={inv.num} className="border border-neutral-900 bg-[#07070a]/30 p-8 rounded-lg space-y-4">
                <div className="flex items-center gap-4 border-b border-neutral-900 pb-3">
                  <span className="text-xs font-mono text-indigo-500 font-bold">ARTICLE {inv.num}</span>
                  <span className="text-neutral-700 font-mono">|</span>
                  <h3 className="text-lg font-bold text-white tracking-tight">{inv.name}</h3>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-indigo-950/10 border border-indigo-950 text-indigo-400 font-mono text-xs rounded">
                    Invariant: "{inv.invariant}"
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {inv.desc}
                  </p>
                  <div className="text-xs text-neutral-500 leading-relaxed font-light border-t border-neutral-900/50 pt-2 mt-2">
                    <strong className="text-neutral-400">Verifiable Evidence:</strong> {inv.evidence}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: INSTITUTIONAL INVARIANTS */}
        <section className="mb-24 pb-16">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-400 mb-4">
              // Section II
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Institutional Invariants (Philosophy)
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light max-w-2xl">
              These six core principles govern AnimusLab as a research organization. They guide our research selection, peer evaluation, operational culture, and public commons commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl">
            {institutionalInvariants.map((princ) => (
              <div key={princ.num} className="border border-neutral-900 bg-[#07070a]/30 p-8 rounded-lg space-y-4">
                <div className="flex items-center gap-4 border-b border-neutral-900 pb-3">
                  <span className="text-xs font-mono text-indigo-500 font-bold">PRINCIPLE {princ.num}</span>
                  <span className="text-neutral-700 font-mono">|</span>
                  <h3 className="text-lg font-bold text-white tracking-tight">{princ.name}</h3>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-white font-medium leading-relaxed">
                    {princ.principle}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {princ.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE SUMMARY STATEMENTS */}
        <section className="p-8 border border-neutral-900 bg-[#07080c]/30 rounded-lg max-w-5xl text-center">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">// Invariant Core Thesis</p>
          <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed tracking-tight max-w-4xl mx-auto italic">
            "Seek truth, govern power, demand evidence, think long-term, build institutions, and publish what you learn."
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}