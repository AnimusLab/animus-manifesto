'use client';

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-neutral-300 font-sans flex flex-col selection:bg-neutral-800 selection:text-white antialiased">
      {/* Shared Nav Header */}
      <Header />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-neutral-900 bg-[#070707]/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-3xl">
            Building Governance Infrastructure <br />
            <span className="text-neutral-500">for Intelligent Systems</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl font-light">
            AnimusLab is an independent research and software initiative focused on identity, observability, governance, and constitutional control systems for AI systems.
          </p>

          {/* Credibility Strip: 5 tags */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-[10px] text-indigo-400 font-mono tracking-wider font-bold">
            <span>[ IDENTITY SYSTEMS ]</span>
            <span>[ CAPABILITY RESOLUTION ]</span>
            <span>[ GOVERNANCE INFRASTRUCTURE ]</span>
            <span>[ OBSERVABILITY ]</span>
            <span>[ CONSTITUTIONAL AI ]</span>
          </div>

          <div className="pt-6 flex flex-wrap gap-4 text-xs font-mono font-bold">
            <Link
              href="/anchor"
              className="bg-indigo-600 border border-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-700 hover:border-indigo-600 transition-all shadow-lg shadow-indigo-900/10 flex items-center gap-2"
            >
              EXPLORE ANCHOR ⚓
            </Link>
            <Link
              href="/research"
              className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-6 py-3 rounded hover:bg-neutral-800 hover:border-neutral-700 transition-all"
            >
              READ RESEARCH
            </Link>
          </div>
        </div>
      </section>

      {/* ── CORE HOMEPAGE CONTENT ─────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 space-y-28 w-full flex-1">
        
        {/* ── WHY ANIMUSLAB ────────────────────────────────────────────────── */}
        <section id="about" className="space-y-6 scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="text-2xl text-white font-bold tracking-tight leading-snug">
                Why AnimusLab
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              <p>
                As intelligent systems become embedded inside organizations, governance becomes a systems problem.
              </p>
              <p>
                Existing infrastructure focuses on capability. We focus on control.
              </p>
              <p>
                AnimusLab develops infrastructure for identity, capability resolution, observability, auditability, and constitutional control of autonomous systems.
              </p>
            </div>
          </div>
        </section>

        {/* ── PRODUCT TEASER ──────────────────────────────────────────────── */}
        <section id="anchor" className="space-y-6 scroll-mt-24">
          <div className="border border-neutral-800 bg-[#070707]/30 rounded-xl p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">// Flagship Systems</span>
                <span className="text-[10px] bg-indigo-950/40 text-indigo-400 border border-indigo-900/40 px-2.5 py-0.5 rounded font-mono uppercase font-bold tracking-wider">
                  Active
                </span>
              </div>
              <h3 className="text-xl text-white font-bold tracking-tight font-sans">
                Anchor Governance Engine
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xl font-sans">
                Constitutional governance infrastructure for intelligent systems. Resolves capabilities at the AST compilation boundary and maps execution logs securely across regional boundaries.
              </p>
            </div>

            <div className="pt-2 text-xs font-mono font-bold">
              <Link href="/anchor" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                [ EXPLORE ANCHOR PLATFORM → ]
              </Link>
            </div>
          </div>
        </section>

        {/* ── LATEST RESEARCH TEASER ──────────────────────────────────────── */}
        <section id="research" className="space-y-6 scroll-mt-24">
          <div className="border border-neutral-800 bg-[#070707]/30 rounded-xl p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">// Latest Publication</span>
                <span className="text-[10px] text-indigo-400 font-mono uppercase font-bold tracking-wider">
                  April 2026
                </span>
              </div>
              <h3 className="text-xl text-white font-bold tracking-tight font-sans">
                Anchor v1 Preprint
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xl font-sans">
                "Anchor: Constitutional Governance Infrastructure for Intelligent Systems" published on Zenodo. Introduces dynamic pre-inference threat containment loops.
              </p>
            </div>

            <div className="pt-2 text-xs font-mono font-bold">
              <Link href="/research" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                [ READ FULL PREPRINT & RESEARCH NOTES → ]
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}