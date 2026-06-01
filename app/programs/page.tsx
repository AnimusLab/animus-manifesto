'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProgramsPage() {
  const researchAreas = [
    {
      id: 'reasoning',
      name: 'Reasoning Systems',
      description: 'How intelligent systems reason deterministically and transparently',
      implementations: [
        {
          name: 'ANIMUS',
          status: 'Active Research',
          description: 'Neuro-symbolic reasoning architecture exploring deterministic cognition, semantic verification, and domain-agnostic logic.',
          principles: ['Truth Over Optics', 'Semantics Before Representation', 'Domain-Agnostic by Default'],
          link: 'https://github.com/AnimusLab/ANIMUS'
        }
      ]
    },
    {
      id: 'governance',
      name: 'Governance Systems',
      description: 'How intelligent systems are governed and controlled',
      implementations: [
        {
          name: 'Anchor',
          status: 'Production',
          description: 'Deterministic governance infrastructure for capability resolution, constitutional policies, and runtime verification. Currently deployed at 2.1ms latency.',
          principles: ['Constraints Create Clarity', 'Failure Is a State Transition', 'Rebuild If the Foundation Is Wrong'],
          link: 'https://github.com/AnimusLab/Anchor'
        },
        {
          name: 'FORGE',
          status: 'In Development',
          description: 'Sovereign storage and data ownership infrastructure ensuring data integrity and user control.',
          principles: ['Truth Over Optics', 'Semantics Before Representation'],
          link: null
        }
      ]
    },
    {
      id: 'observability',
      name: 'Observability Systems',
      description: 'How intelligent systems are observed, audited, and verified',
      implementations: [
        {
          name: 'Shadow Watch',
          status: 'Prototype',
          description: 'Behavioral verification and observability architecture. Zero-knowledge session trust with cryptographic audit trails and verifiable telemetry.',
          principles: ['Truth Over Optics', 'Constraints Create Clarity', 'Failure Is a State Transition'],
          link: 'https://github.com/AnimusLab/Shadow-Watch'
        },
        {
          name: 'QuantGrid',
          status: 'Research',
          description: 'Institutional intelligence platform for systems analysis and behavioral verification across organizational boundaries.',
          principles: ['Domain-Agnostic by Default', 'Semantics Before Representation'],
          link: null
        }
      ]
    },
    {
      id: 'execution',
      name: 'Execution Infrastructure',
      description: 'How systems are executed with determinism and auditability',
      implementations: [
        {
          name: 'QuantForge',
          status: 'Research',
          description: 'Deterministic execution environment for guaranteed reproducibility and auditability across all system operations.',
          principles: ['Constraints Create Clarity', 'Domain-Agnostic by Default'],
          link: null
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col selection:bg-neutral-800 selection:text-white">
      <Header />

      {/* HEADER SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Research Programs
          </h1>

          <p className="text-base md:text-lg text-[#e5e5e5] font-light leading-relaxed">
            Four research areas. Eight active systems. One institutional foundation.
          </p>

          <p className="text-sm md:text-base text-[#a3a3a3] leading-relaxed">
            Each program is derived from the six invariants. Each system is a demonstration that the principles work in practice.
          </p>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-32">
          {researchAreas.map((area, areaIndex) => (
            <div key={area.id} className="space-y-12">
              {/* Area Header */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {area.name}
                </h2>
                <p className="text-base text-[#a3a3a3] font-light">
                  {area.description}
                </p>
              </div>

              {/* Implementations */}
              <div className="space-y-8">
                {area.implementations.map((impl, implIndex) => (
                  <div key={impl.name} className="border border-[#262626] p-8 space-y-6">
                    {/* Implementation Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">
                          {impl.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#a3a3a3] uppercase tracking-widest">
                          {impl.status}
                        </p>
                      </div>
                      {impl.link && (
                        <a
                          href={impl.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#a3a3a3] hover:text-white transition-colors whitespace-nowrap"
                        >
                          Repository →
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-base text-[#e5e5e5] leading-relaxed font-light">
                      {impl.description}
                    </p>

                    {/* Principles */}
                    <div className="pt-4 border-t border-[#262626]/50">
                      <p className="text-xs font-semibold text-[#a3a3a3] uppercase tracking-widest mb-3">
                        Founded on
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {impl.principles.map((principle) => (
                          <span
                            key={principle}
                            className="text-xs px-3 py-1 border border-[#a3a3a3]/30 text-[#a3a3a3] rounded"
                          >
                            {principle}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Area Divider */}
              {areaIndex < researchAreas.length - 1 && (
                <div className="pt-12 border-t border-[#262626]/30"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CONTEXT */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] bg-[#0a0a0a]/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Coherent Research Ecosystem
          </h2>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            These programs are not disconnected projects. ANIMUS informs Anchor's reasoning boundaries. Anchor's verification requirements shape QuantGrid's architecture. Shadow Watch's observability principles influence all four areas.
          </p>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            The ecosystem is coherent because every program stands on the same six invariants. Remove one principle and the entire structure changes. That is institutional integrity.
          </p>

          <div className="pt-8 border-t border-[#262626] space-y-4">
            <Link
              href="/constitution"
              className="inline-block text-sm font-semibold text-white tracking-wider hover:opacity-70 transition-opacity"
            >
              See the Foundational Principles →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
