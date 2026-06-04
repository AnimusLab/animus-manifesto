'use client';

import React from 'react';

export default function AnchorManifestoPage() {
  return (
    <div className="space-y-24 animate-fadeIn">
      {/* HERO */}
      <section className="pb-16 border-b border-neutral-900">
        <p className="institution-label mb-6">
          Anchor Manifesto
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight max-w-4xl">
          Capability without governance is not progress.
        </h1>

        <p className="mt-8 text-lg text-neutral-400 max-w-3xl leading-relaxed">
          Anchor is founded on a simple premise: increasingly capable systems require increasingly reliable mechanisms of governance.
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="pb-16 border-b border-neutral-900">
        <h2 className="text-2xl font-semibold text-white mb-8">
          The Current Assumption
        </h2>

        <div className="space-y-6 text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl">
          <p>Much of modern AI safety relies on probabilistic compliance.</p>
          <p>Systems are trained to behave.</p>
          <p>Systems are encouraged to follow rules.</p>
          <p>Systems are evaluated against benchmarks.</p>
          <p>Yet the underlying assumption remains: the system chooses to comply.</p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="pb-16 border-b border-neutral-900">
        <h2 className="text-2xl font-semibold text-white mb-8">
          The Problem
        </h2>

        <div className="space-y-6 text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl">
          <p>Institutions do not operate on trust alone.</p>
          <p>Financial systems use controls.</p>
          <p>Operating systems use permissions.</p>
          <p>Aviation relies on procedures, verification, and containment.</p>
          <p>Yet many intelligent systems are expected to remain safe through instruction and behavioral optimization alone.</p>
          <p className="text-white font-medium">Anchor questions whether that approach can scale.</p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="pb-16 border-b border-neutral-900">
        <h2 className="text-2xl font-semibold text-white mb-8">
          The Anchor Thesis
        </h2>

        <div className="space-y-6 text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl">
          <p>Governance should not depend entirely on model behavior.</p>
          <p>Governance should exist as an independent layer.</p>
          <p>Constraints should be enforced.</p>
          <p>Capabilities should be isolated.</p>
          <p>Actions should be auditable.</p>
          <p>Policies should remain active during execution.</p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="pb-16 border-b border-neutral-900">
        <h2 className="text-2xl font-semibold text-white mb-8">
          What Anchor Explores
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="border border-neutral-900 p-8 bg-[#070707]/20 font-mono text-sm text-neutral-300 hover:border-neutral-800 transition-colors">
            Runtime Governance
          </div>
          <div className="border border-neutral-900 p-8 bg-[#070707]/20 font-mono text-sm text-neutral-300 hover:border-neutral-800 transition-colors">
            Constitutional Enforcement
          </div>
          <div className="border border-neutral-900 p-8 bg-[#070707]/20 font-mono text-sm text-neutral-300 hover:border-neutral-800 transition-colors">
            Capability Isolation
          </div>
          <div className="border border-neutral-900 p-8 bg-[#070707]/20 font-mono text-sm text-neutral-300 hover:border-neutral-800 transition-colors">
            Audit Infrastructure
          </div>
          <div className="border border-neutral-900 p-8 bg-[#070707]/20 font-mono text-sm text-neutral-300 hover:border-neutral-800 transition-colors">
            Policy Execution
          </div>
          <div className="border border-neutral-900 p-8 bg-[#070707]/20 font-mono text-sm text-neutral-300 hover:border-neutral-800 transition-colors">
            Deterministic Control
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="pb-16">
        <h2 className="text-3xl font-semibold text-white mb-8">
          Long-Term Vision
        </h2>

        <div className="space-y-6 text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl">
          <p>Anchor is not an attempt to build more capable systems.</p>
          <p>Anchor is an attempt to understand how capable systems can remain governable.</p>
          <p className="text-indigo-400 text-lg md:text-xl font-medium mt-6">
            The future of intelligence may depend as much on governance as capability.
          </p>
        </div>
      </section>
    </div>
  );
}
