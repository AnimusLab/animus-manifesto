'use client';

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col selection:bg-neutral-800 selection:text-white">
      <Header />

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* SECTION 1: HERO */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            AnimusLab
          </h1>

          <p className="text-base md:text-lg text-[#e5e5e5] font-light leading-relaxed max-w-2xl mx-auto">
            Building systems that remain truthful, auditable, governable, and understandable under scrutiny.
          </p>

          <p className="text-sm text-[#a3a3a3]">
            Built upon six non-negotiable principles.
          </p>

          <p className="text-sm md:text-base text-[#a3a3a3] leading-relaxed">
            Independent systems research and engineering institution focused on reasoning, governance, and observability for intelligent systems.
          </p>

          <div className="pt-8 flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/constitution"
              className="px-8 py-3 border border-[#262626] text-white font-semibold text-sm tracking-wider hover:bg-[#0a0a0a] transition-colors"
            >
              Our Principles
            </Link>
            <Link
              href="/programs"
              className="px-8 py-3 border border-transparent text-[#a3a3a3] font-semibold text-sm tracking-wider hover:text-white transition-colors"
            >
              Research Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2: WHY ANIMUSLAB EXISTS */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Why AnimusLab Exists
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                The Problem
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                Existing intelligent systems are becoming more capable, but remain difficult to audit, govern, and justify.
              </p>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                The dominant approach uses probabilistic safety layers and confidence scores—techniques that cannot survive institutional scrutiny.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Our Position
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                AnimusLab exists to explore architectural alternatives grounded in determinism, auditability, and control.
              </p>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                We believe systems can be built differently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* SECTION 3: THREE FOUNDATIONAL PRINCIPLES */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] bg-[#0a0a0a]/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Three Foundational Principles
          </h2>

          <div className="grid grid-cols-1 gap-8">
            <div className="border border-[#262626] p-8 hover:border-[#a3a3a3]/30 transition-colors">
              <h3 className="text-lg font-bold text-white mb-3">
                Truth Over Optics
              </h3>
              <p className="text-[#a3a3a3] font-light leading-relaxed">
                If it cannot survive scrutiny, it should not be displayed.
              </p>
            </div>

            <div className="border border-[#262626] p-8 hover:border-[#a3a3a3]/30 transition-colors">
              <h3 className="text-lg font-bold text-white mb-3">
                Semantics Before Representation
              </h3>
              <p className="text-[#a3a3a3] font-light leading-relaxed">
                Representation is disposable. Meaning is not.
              </p>
            </div>

            <div className="border border-[#262626] p-8 hover:border-[#a3a3a3]/30 transition-colors">
              <h3 className="text-lg font-bold text-white mb-3">
                Constraints Create Clarity
              </h3>
              <p className="text-[#a3a3a3] font-light leading-relaxed">
                Freedom without constraints produces noise.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/constitution"
              className="inline-block text-sm font-semibold text-white tracking-wider hover:opacity-70 transition-opacity"
            >
              View All Six Principles →
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* SECTION 4: RESEARCH AREAS */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Research Areas
          </h2>

          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Reasoning Systems
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                Deterministic reasoning, symbolic verification, and domain-agnostic cognition.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Governance Systems
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                Capability resolution and institutional auditability for intelligent systems.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Observability Systems
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                Behavioral verification and observability architecture for autonomous systems.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/programs"
              className="inline-block text-sm font-semibold text-white tracking-wider hover:opacity-70 transition-opacity"
            >
              View All Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* SECTION 5: PUBLICATIONS & RESEARCH */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] bg-[#0a0a0a]/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Publications & Research
          </h2>

          <div className="border border-[#262626] p-8 space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Truth Over Optics
            </h3>
            <p className="text-sm text-[#a3a3a3] font-light">
              A Preprint on Deterministic Evaluation and Auditability
            </p>
            <p className="text-sm text-[#a3a3a3] font-light">
              Published April 2026
            </p>
            <Link
              href="/research"
              className="inline-block text-sm font-semibold text-white tracking-wider hover:opacity-70 transition-opacity"
            >
              Zenodo Archive →
            </Link>
          </div>

          <div>
            <Link
              href="/research"
              className="inline-block text-sm font-semibold text-white tracking-wider hover:opacity-70 transition-opacity"
            >
              View All Research →
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* SECTION 6: INSTITUTIONAL PROGRESS */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Active Research Organization
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-[#262626] pl-6 space-y-2">
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                2025
              </p>
              <p className="text-base text-[#a3a3a3] font-light">
                AnimusLab Founded
              </p>
              <p className="text-sm text-[#a3a3a3] font-light">
                Independent research and systems engineering initiative launched
              </p>
            </div>

            <div className="border-l-2 border-[#262626] pl-6 space-y-2">
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                2025
              </p>
              <p className="text-base text-[#a3a3a3] font-light">
                ANIMUS Research Begins
              </p>
              <p className="text-sm text-[#a3a3a3] font-light">
                Foundational work on deterministic reasoning architectures
              </p>
            </div>

            <div className="border-l-2 border-[#262626] pl-6 space-y-2">
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                2026 Q1
              </p>
              <p className="text-base text-[#a3a3a3] font-light">
                Anchor Preprint Published
              </p>
              <p className="text-sm text-[#a3a3a3] font-light">
                Constitutional Governance Infrastructure for Intelligent Systems
              </p>
            </div>

            <div className="border-l-2 border-[#262626] pl-6 space-y-2">
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                2026 Q2
              </p>
              <p className="text-base text-[#a3a3a3] font-light">
                Anchor v5.0 Released
              </p>
              <p className="text-sm text-[#a3a3a3] font-light">
                Deterministic governance at 2.1ms
              </p>
            </div>

            <div className="border-l-2 border-[#262626] pl-6 space-y-2">
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                2026 Q2
              </p>
              <p className="text-base text-[#a3a3a3] font-light">
                Shadow Watch Prototype Completed
              </p>
              <p className="text-sm text-[#a3a3a3] font-light">
                Behavioral verification and trust architecture
              </p>
            </div>

            <div className="border-l-2 border-[#a3a3a3]/50 pl-6 space-y-2 pt-4">
              <p className="text-sm font-bold text-white uppercase tracking-wider">
                Current
              </p>
              <p className="text-base text-[#a3a3a3] font-light">
                Three Research Programs
              </p>
              <p className="text-sm text-[#a3a3a3] font-light">
                ANIMUS | Anchor | Shadow Watch actively developed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* SECTION 7: CONTACT */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Research Inquiries
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-[#a3a3a3] uppercase tracking-wider font-semibold mb-2">
                Email
              </p>
              <a
                href="mailto:contact@animuslab.dev"
                className="text-base text-white hover:opacity-70 transition-opacity"
              >
                contact@animuslab.dev
              </a>
            </div>

            <div>
              <p className="text-sm text-[#a3a3a3] uppercase tracking-wider font-semibold mb-2">
                GitHub
              </p>
              <a
                href="https://github.com/AnimusLab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white hover:opacity-70 transition-opacity"
              >
                github.com/AnimusLab
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
