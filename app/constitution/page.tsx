'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ConstitutionPage() {
  const principles = [
    {
      number: 1,
      title: 'Truth Over Optics',
      statement: 'If it cannot survive scrutiny, it should not be displayed.',
      description:
        'Every system we build must withstand institutional scrutiny. We optimize for transparency and verifiability over aesthetics, performance metrics, or marketing claims. Confidence scores, probabilistic guarantees, and post-hoc explanations are the enemy of truth. We build systems whose behavior is mathematically verifiable, not merely probable.',
      implementations: {
        animus: 'Semantic grounding and symbolic verification ensure reasoning is transparent and auditable',
        anchor: 'Deterministic policy evaluation and constitutional verification guarantee auditable governance',
        shadowwatch: 'Cryptographic audit traces provide verifiable evidence of all system decisions'
      }
    },
    {
      number: 2,
      title: 'Semantics Before Representation',
      statement: 'Representation is disposable. Meaning is not.',
      description:
        'We prioritize meaning (schemas, invariants, semantic models) before choosing representations (APIs, data formats, interfaces). A system with correct semantics but poor API design can be refactored. A system with beautiful APIs but broken semantics cannot be fixed. We design schemas first, then optimize the representation around them.',
      implementations: {
        animus: 'Neuro-symbolic architecture separates semantic reasoning from representational choices',
        anchor: 'Constitutional policies are semantically defined before API implementation',
        shadowwatch: 'Telemetry schema is defined before visualization or transport'
      }
    },
    {
      number: 3,
      title: 'Constraints Create Clarity',
      statement: 'Freedom without constraints produces noise.',
      description:
        'The most powerful systems are the most constrained. We design strict boundaries, deterministic execution paths, and explicit permission models. These constraints eliminate ambiguity, reduce attack surface, and create systems whose behavior is predictable and governable. Flexibility is the enemy of clarity.',
      implementations: {
        animus: 'Deterministic reasoning boundaries eliminate probabilistic uncertainty',
        anchor: 'Runtime guardrails and capability enforcement constrain execution to policy-compliant paths',
        shadowwatch: 'Immutable telemetry schema constrains what can and cannot be observed'
      }
    },
    {
      number: 4,
      title: 'Failure Is a State Transition',
      statement: 'Failure is evidence of movement.',
      description:
        'We do not hide failures. We log them, audit them, and learn from them. Failure detection is not an error condition—it is a state transition that provides evidence of system behavior. Every failure is a data point. Systems that hide or obscure failures are systems that cannot be governed.',
      implementations: {
        animus: 'Reasoning failures are explicit state transitions, not suppressed exceptions',
        anchor: 'Policy violations are auditable events, not silent rejections',
        shadowwatch: 'Failure telemetry is cryptographically sealed, not aggregated or averaged'
      }
    },
    {
      number: 5,
      title: 'Domain-Agnostic by Default',
      statement: 'If it only works in one domain, it is not fundamental enough.',
      description:
        'We build systems that work across domains: finance, infrastructure, security, analysis. A governance system that only works for AI is not general governance. A reasoning architecture that only works in security is not fundamental reasoning. We prove generality by building across multiple domains.',
      implementations: {
        animus: 'Symbolic reasoning architecture works in financial analysis, infrastructure policy, and security',
        anchor: 'Constitutional governance applies to any system requiring capability control',
        shadowwatch: 'Behavioral verification works for any intelligent system that needs to be audited'
      }
    },
    {
      number: 6,
      title: 'Rebuild If the Foundation Is Wrong',
      statement: 'Adoption is optional. Integrity is not.',
      description:
        'We will not compromise on foundational integrity to achieve adoption or scale. If we discover the foundation is flawed, we rebuild. If the market wants something that violates the principles, we do not build it. Adoption without integrity is not success.',
      implementations: {
        animus: 'We rebuild reasoning architectures if fundamental assumptions are violated',
        anchor: 'Constitutional changes are rare and explicit, never compromised for backward compatibility',
        shadowwatch: 'Telemetry schema is rebuilt if observability principles are violated'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col selection:bg-neutral-800 selection:text-white">
      <Header />

      {/* HEADER SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            The Six Invariants
          </h1>

          <p className="text-base md:text-lg text-[#e5e5e5] font-light leading-relaxed">
            Non-negotiable principles that define all AnimusLab work.
          </p>

          <p className="text-sm md:text-base text-[#a3a3a3] leading-relaxed">
            These invariants are the constitutional foundation of AnimusLab. They define how we think, what we build, and why we exist. Every system we build is derived from these principles. The systems do not define the principles. The principles define the systems.
          </p>
        </div>
      </section>

      {/* PRINCIPLES SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-20">
          {principles.map((principle, index) => (
            <div key={principle.number} className="space-y-8">
              {/* Principle Header */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl md:text-6xl font-bold text-[#a3a3a3] opacity-50">
                    {principle.number}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {principle.title}
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-[#a3a3a3] font-light italic">
                  "{principle.statement}"
                </p>
              </div>

              {/* Principle Description */}
              <p className="text-base text-[#e5e5e5] leading-relaxed font-light">
                {principle.description}
              </p>

              {/* Where It Appears */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {/* ANIMUS */}
                <div className="border border-[#262626] p-6 space-y-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">ANIMUS</h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed font-light">
                    {principle.implementations.animus}
                  </p>
                </div>

                {/* Anchor */}
                <div className="border border-[#262626] p-6 space-y-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Anchor</h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed font-light">
                    {principle.implementations.anchor}
                  </p>
                </div>

                {/* Shadow Watch */}
                <div className="border border-[#262626] p-6 space-y-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Shadow Watch</h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed font-light">
                    {principle.implementations.shadowwatch}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index < principles.length - 1 && (
                <div className="pt-6 border-t border-[#262626]/50"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* INSTITUTIONAL DOCTRINE SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] bg-[#0a0a0a]/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            The Institution Stands on These Principles
          </h2>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            AnimusLab is not a company with products that happen to follow principles. We are an institution defined by principles that happen to build products. The difference is fundamental.
          </p>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            Every system we build exists because existing alternatives violate one or more of these invariants. ANIMUS exists because probabilistic reasoning systems cannot survive scrutiny. Anchor exists because existing governance systems prioritize optics over truth. Shadow Watch exists because most telemetry systems hide the data that matters most.
          </p>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            If these principles change, AnimusLab changes. If they are violated, the institution fails. That is not a bug. That is the point.
          </p>

          <div className="pt-8 border-t border-[#262626]">
            <Link
              href="/"
              className="inline-block text-sm font-semibold text-white tracking-wider hover:opacity-70 transition-opacity"
            >
              Back to AnimusLab →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
