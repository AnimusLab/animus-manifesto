import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Engineering Design Principles | AnimusLab",
  alternates: {
    canonical: "/constitution",
  },
};

export default function ConstitutionPage() {
  const originalArticles = [
    {
      num: "I",
      name: "Mission",
      desc: "The mission of AnimusLab is to conduct research into governance, reasoning, and institutional infrastructure for intelligent systems. The institution exists to investigate mechanisms that improve reliability, accountability, and trust in increasingly capable systems."
    },
    {
      num: "II",
      name: "Research Independence",
      desc: "Research questions shall not be selected solely on the basis of popularity, commercial demand, or prevailing trends. The institution reserves the right to investigate problems that may be neglected, unpopular, or long-term in nature. Intellectual independence is considered essential to meaningful inquiry."
    },
    {
      num: "III",
      name: "Transparency",
      desc: "Research should be published whenever possible. Assumptions should be documented. Limitations should be acknowledged. Claims should be distinguishable from evidence."
    },
    {
      num: "IV",
      name: "Governance First",
      desc: "Capability and governance should develop together. Systems that cannot be governed cannot be reliably integrated into institutions. Governance is therefore treated as a foundational component rather than a secondary consideration."
    },
    {
      num: "V",
      name: "Program Formation",
      desc: "Research programs may be established when a problem domain requires sustained investigation. Programs should contribute to the broader mission of governable intelligent systems. Anchor, ANIMUS, and Shadow Watch are examples of such programs."
    },
    {
      num: "VI",
      name: "Long-Term Objective",
      desc: "The long-term objective of AnimusLab is to contribute to the development of systems that are not only capable, but governable. Reliability, accountability, and enforceable constraints are considered essential properties of future intelligent systems."
    }
  ];

  const foundationalInvariants = [
    {
      num: "VII",
      name: "Truth Over Optics",
      invariant: "If it cannot survive scrutiny, it should not be displayed.",
      desc: "Reality takes precedence over narrative. A system that shows a confidence score of 0.83 for a hallucinated fact is not cautious; it is dishonest. We reject dashboards, charts, metrics, and narratives that feel informative but distort reality. We choose deterministic symbolic verification over probabilistic guessing.",
      evidence: "Every high-reliability engineering discipline privileges physical evidence over marketing. A bridge either stands or collapses; a load-bearing calculation cannot be optimized through reputation."
    },
    {
      num: "VIII",
      name: "Semantics Before Representation",
      invariant: "Representation is disposable. Meaning is not.",
      desc: "We do not start with the user interface; we start with meaning. Signal before renderer. Contract before convenience. Rules before aesthetics. Every field, state, and governance rule must be bounded and defined prior to writing visual components.",
      evidence: "In stable computational environments, data schemas and state machine definitions are codified first, rendering client interfaces downstream and replaceable."
    },
    {
      num: "IX",
      name: "Constraints Create Clarity",
      invariant: "Freedom without constraints produces noise.",
      desc: "Constraints are defence mechanisms, not limitations. We add rules not to slow things down, but to prevent the kind of silent architectural rot that only becomes visible in production.",
      evidence: "Anchor's three-file governance hierarchy (constitution, mitigation, policy) is built on this principle. Hard priority ordering and resource drift caps enforce load-bearing walls that cannot be bypassed."
    },
    {
      num: "X",
      name: "Failure Is a State Transition",
      invariant: "Failure is evidence of movement.",
      desc: "We do not hide failures, nor do we dramatize them. We treat them as versioned, structured states. When a system produces non-compliant output, it is captured in a structured Therapy Log entry, pre-authored mitigations are applied, and execution is securely re-routed.",
      evidence: "Treating exceptions as information rather than error conditions allows systems to self-correct and log transparently without raising fatal runtime crashes."
    },
    {
      num: "XI",
      name: "Domain-Agnostic by Default",
      invariant: "If a concept only works in one domain, it is not fundamental enough.",
      desc: "Cognitive, reasoning, and containment architectures must be designed to work universally. Whether processing financial trades, codebase refactors, cybersecurity telemetry, or personal workspace automation, the underlying reasoning architecture remains unchanged.",
      evidence: "A truly fundamental reasoning block resolves states across varying domains using the exact same underlying symbolic rules, rather than relying on domain-specific fine-tuning."
    },
    {
      num: "XII",
      name: "Rebuild If the Foundation Is Wrong",
      invariant: "Adoption is optional. Integrity is not.",
      desc: "We prioritize structural integrity over path-dependency. If the core assumptions, protocols, or schemas of a system are proved flawed, we dismantle and rebuild from the ground up rather than patching over fundamental structural vulnerabilities.",
      evidence: "Durable computing systems and protocols survive because their base layers are structurally clean and uncompromising, even if it requires complete, clean-slate rewrites."
    }
  ];

  const institutionalInvariants = [
    {
      num: "XIII",
      name: "Constitutional Supremacy",
      principle: "No action may bypass the governing policy layer.",
      reason: "Every stable governance system introduces a supreme authority layer. Without one, execution directly maps to action, bypassing policy. This creates a state of direct exposure where capability cannot be audited or constrained.",
      diagram: "Agent\n  ↓\nConstitution Engine\n  ↓\nCapability Layer\n  ↓\nExecution",
      examples: [
        {
          title: "Anchor",
          text: "The execution runtime intercepts all context compilations and queries the SHA-256 sealed constitution.anchor before authorization."
        },
        {
          title: "Operating Systems",
          text: "Kernel mode vs user mode. Applications cannot bypass the kernel to access hardware directly; they must make system calls governed by ring boundaries."
        },
        {
          title: "Governments",
          text: "A minister cannot simply ignore a constitutional clause. The legal hierarchy (Constitution > Legislature > Executive) ensures rule of law."
        }
      ]
    },
    {
      num: "XIV",
      name: "Capability Isolation",
      principle: "Possessing one capability must not imply possession of all capabilities.",
      reason: "Broad privilege scopes guarantee that a single vulnerability compromises the entire system. Containment requires strict ring boundaries, isolated namespaces, and separate permission vectors.",
      diagram: "Read   ───[ Isolated ]\nWrite  ───[ Isolated ]\nExec   ───[ Isolated ]\nNet    ───[ Isolated ]\nFile   ───[ Isolated ]",
      examples: [
        {
          title: "Anchor",
          text: "Read, Write, Execute, Network, and Filesystem accesses are decoupled, individual capabilities resolved and authorized independently."
        },
        {
          title: "AWS IAM",
          text: "Least-privilege permission sets: an IAM role authorized to read S3 cannot write to databases or alter IAM policies unless explicitly granted."
        },
        {
          title: "Operating Systems",
          text: "User processes run in separate virtual memory spaces. A memory corruption or crash in one app cannot affect other applications or kernel memory."
        }
      ]
    },
    {
      num: "XV",
      name: "Evidence Over Authority",
      principle: "Claims derive legitimacy from evidence. Not titles. Not status. Not hierarchy.",
      reason: "A correct argument remains correct regardless of who presents it; a false argument remains false regardless of prestige. Peer review, mathematical proofs, and open-source validation exist because authority alone is insufficient."
    },
    {
      num: "XVI",
      name: "Long-Term Thinking Over Short-Term Attention",
      principle: "Important questions often require years. Not weeks.",
      reason: "Many foundational ideas appear irrational or unprofitable in the short term. Internet infrastructure, operating systems, and public-key cryptography all required decades of research and development before widespread adoption. Civilizations are built by institutions willing to think beyond current cycles."
    },
    {
      num: "XVII",
      name: "Systems Over Personalities",
      principle: "Institutions should survive individual participants.",
      reason: "If an organization depends entirely on a founder, it is a personal project rather than a durable institution. We transfer knowledge, authority, and principles into structures, schemas, and public protocols rather than centering them on individuals."
    },
    {
      num: "XVIII",
      name: "Publish What You Learn",
      principle: "Knowledge gains value when it becomes part of the commons.",
      reason: "Research that remains private cannot be challenged, improved, or extended. Publication creates criticism, replication, improvement, and civilizational progress. We share what we learn through papers, standards, and open-source implementations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1 max-w-[1600px] mx-auto w-full px-8 py-24 flex flex-col items-center">
        {/* HERO */}
        <section className="mb-20 border-b border-neutral-900 pb-16 text-center flex flex-col items-center w-full">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold mb-6">
            Engineering & Governance Principles
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Core Design Principles of AnimusLab
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-neutral-200 font-bold leading-relaxed mx-auto">
            This document outlines the core engineering principles, system invariants, and technical standards that guide our research and software architecture.
          </p>
        </section>

        {/* PREAMBLE */}
        <section className="mb-24 border-b border-neutral-900 pb-16 text-center flex flex-col items-center w-full">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">
            // Preamble
          </p>

          <div className="space-y-6 text-base md:text-lg text-neutral-200 font-bold leading-relaxed max-w-4xl mx-auto">
            <p>
              We believe that increasingly capable intelligent systems will participate fundamentally in the operation of institutions, economies, and societies. As their capability grows, their governance becomes the primary challenge of our era. The dominant paradigm relies on probabilistic alignment, which cannot survive strict institutional scrutiny.
            </p>
            <p>
              The challenge is not merely creating systems that can perform complex tasks, but creating systems whose execution trace remains understandable, verifiable, isolated, and auditable. I started AnimusLab to establish the theoretical foundations and engineering mechanisms required to make intelligent systems fundamentally governable.
            </p>
            <p>
              These principles are a non-negotiable set of engineering design rules and technical invariants I hold myself and our systems to. Every codebase, compiler, sandbox boundary, and research direction pursued at AnimusLab must conform to these design rules. If an implementation violates these rules, the implementation must change. The principles do not.
            </p>
            <p className="text-white font-extrabold">
              Tanishq Dasari, Founder of AnimusLab
            </p>
          </div>
        </section>

        {/* SECTION 1: ORIGINAL ARTICLES */}
        <section className="mb-24 border-b border-neutral-900 pb-16 w-full flex flex-col items-center">
          <div className="mb-12 text-center flex flex-col items-center">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-400 mb-4 font-bold">
              // Section I
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Institutional Framework
            </h2>
            <p className="text-neutral-200 text-sm mt-3 font-bold max-w-2xl mx-auto">
              The original charter establishing AnimusLab's mission, transparency requirements, and long-term objective.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl w-full mx-auto">
            {originalArticles.map((art) => (
              <div key={art.num} className="border border-neutral-900 bg-[#07070a]/30 p-8 rounded-lg space-y-4 text-center flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-2 border-b border-neutral-900 pb-3 w-full">
                  <span className="text-xs font-mono text-indigo-500 font-bold">ARTICLE {art.num}</span>
                  <h3 className="text-lg font-bold text-white tracking-tight">{art.name}</h3>
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed font-bold">
                  {art.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: FOUNDATIONAL INVARIANTS */}
        <section className="mb-24 border-b border-neutral-900 pb-16 w-full flex flex-col items-center">
          <div className="mb-12 text-center flex flex-col items-center">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-400 mb-4 font-bold">
              // Section II
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Foundational Invariants (System Design)
            </h2>
            <p className="text-neutral-200 text-sm mt-3 font-bold max-w-2xl mx-auto">
              Core design invariants that remain non-negotiable across all active AnimusLab research codebases and compilers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl w-full mx-auto">
            {foundationalInvariants.map((inv) => (
              <div key={inv.num} className="border border-neutral-900 bg-[#07070a]/30 p-8 rounded-lg space-y-4 text-center flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-2 border-b border-neutral-900 pb-3 w-full">
                  <span className="text-xs font-mono text-indigo-500 font-bold">ARTICLE {inv.num}</span>
                  <h3 className="text-lg font-bold text-white tracking-tight">{inv.name}</h3>
                </div>

                <div className="space-y-3 w-full flex flex-col items-center">
                  <div className="p-3 bg-indigo-950/10 border border-indigo-950 text-indigo-400 font-mono text-xs rounded text-center w-full max-w-md font-bold">
                    Invariant: "{inv.invariant}"
                  </div>
                  <p className="text-sm text-neutral-200 leading-relaxed font-bold">
                    {inv.desc}
                  </p>
                  <div className="text-xs text-neutral-300 leading-relaxed font-bold border-t border-neutral-900/50 pt-2 mt-2 w-full text-center">
                    <strong className="text-neutral-100 font-extrabold">Verifiable Evidence:</strong> {inv.evidence}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: ARCHITECTURAL & OPERATIONAL INVARIANTS */}
        <section className="mb-24 pb-16 w-full flex flex-col items-center">
          <div className="mb-12 text-center flex flex-col items-center">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-400 mb-4 font-bold">
              // Section III
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Architectural & Operational Invariants
            </h2>
            <p className="text-neutral-200 text-sm mt-3 font-bold max-w-2xl mx-auto">
              Foundational principles and constraints governing structural topology, capability scopes, and institutional operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl w-full mx-auto">
            {institutionalInvariants.map((princ) => (
              <div key={princ.num} className="border border-neutral-900 bg-[#07070a]/30 p-8 rounded-lg space-y-4 text-center flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-2 border-b border-neutral-900 pb-3 w-full">
                  <span className="text-xs font-mono text-indigo-500 font-bold">ARTICLE {princ.num}</span>
                  <h3 className="text-lg font-bold text-white tracking-tight">{princ.name}</h3>
                </div>

                <div className="space-y-4 w-full flex flex-col items-center">
                  <p className="text-sm text-white font-bold leading-relaxed">
                    {princ.principle}
                  </p>
                  <p className="text-sm text-neutral-200 leading-relaxed font-bold">
                    {princ.reason}
                  </p>
                  
                  {princ.diagram && (
                    <div className="pt-2 w-full flex flex-col items-center">
                      <span className="text-[10px] text-neutral-400 font-mono font-bold uppercase block mb-2">// Architectural Execution Topology</span>
                      <pre className="p-4 bg-[#030305] text-indigo-400 font-mono text-[11px] rounded border border-neutral-900/60 overflow-x-auto whitespace-pre leading-relaxed max-w-md w-full text-center mx-auto">
                        {princ.diagram}
                      </pre>
                    </div>
                  )}

                  {princ.examples && princ.examples.length > 0 && (
                    <div className="pt-4 border-t border-neutral-900/50 space-y-3 w-full">
                      <span className="text-[10px] text-indigo-400 font-mono font-bold uppercase tracking-wider block">// Verified Domain Implementations</span>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        {princ.examples.map((ex, idx) => (
                          <div key={idx} className="border border-neutral-900 bg-[#050508]/50 p-4 rounded space-y-2 flex flex-col items-center text-center justify-center">
                            <h4 className="text-xs font-bold text-white tracking-tight">{ex.title}</h4>
                            <p className="text-xs text-neutral-200 leading-relaxed font-bold">{ex.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE SUMMARY */}
        <section className="p-8 border border-neutral-900 bg-[#07080c]/30 rounded-lg max-w-5xl w-full text-center flex flex-col items-center justify-center mx-auto">
          <p className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-widest mb-4">// Invariant Core Thesis</p>
          <p className="text-xl md:text-2xl text-white font-bold leading-relaxed tracking-tight max-w-4xl mx-auto italic">
            "Seek truth, govern power, demand evidence, think long-term, build institutions, and publish what you learn."
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}