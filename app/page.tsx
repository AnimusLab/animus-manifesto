'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { INVARIANTS, PUBLICATIONS, RESEARCH_NOTES, TIMELINE, APPLIED_SYSTEMS } from './components/notesData';

export default function Home() {
  const [expandedInvariants, setExpandedInvariants] = useState<Record<number, boolean>>({});

  const toggleInvariant = (index: number) => {
    setExpandedInvariants(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans flex flex-col selection:bg-neutral-800 selection:text-white antialiased">
      {/* Navigation Header */}
      <Header />

      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-36 border-b border-neutral-900/60 bg-[#070707]/30 flex flex-col items-center text-center">
        <div className="max-w-4xl space-y-6">
          <div className="mb-8 flex justify-center">
            <div className="bg-white p-4 border border-neutral-800 rounded-lg max-w-[130px] shadow-xl">
              <img 
                src="/logo.jpg" 
                alt="AnimusLab Logo" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <span className="text-xs text-neutral-500 font-mono tracking-widest block uppercase">// Animus_Research_Institution</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Building systems that remain truthful, <br className="hidden md:inline" />
            auditable, and governable under scrutiny.
          </h1>
          <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            Independent research and software systems architecture exploring the mathematical boundaries of AI alignment, control systems, and deterministic symbolic reasoning.
          </p>
          <div className="pt-8 flex justify-center gap-6">
            <a
              href="#constitution"
              className="text-xs md:text-sm font-semibold tracking-wider text-white border border-neutral-800 px-6 py-3 hover:bg-white hover:text-black transition-all"
            >
              Read Our Constitution
            </a>
            <Link
              href="/research"
              className="text-xs md:text-sm font-semibold tracking-wider text-neutral-400 border border-transparent px-6 py-3 hover:text-white transition-colors"
            >
              Explore Research &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. WHY ANIMUSLAB EXISTS (CAPABILITY VS CONTROL) ────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b border-neutral-900/60">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="text-xs text-neutral-500 font-mono tracking-widest block uppercase">// Core_Thesis</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              As intelligent systems become more capable, <br />
              the challenge shifts from capability to control.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-neutral-500 tracking-wider font-mono uppercase">// The_Modern_Paradox</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Modern architectures optimize for capability. They use probabilistic safety layers, prompt wraps, and post-inference text scanning to enforce alignment. These systems operate on confidence scores rather than deterministic constraints, making them fundamentally unverifiable.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-neutral-500 tracking-wider font-mono uppercase">// The_AnimusLab_Approach</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                We optimize for control. We research and build architectures grounded in symbolic logic, strict runtime enforcement, session auditability, and state observability. Our systems do not predict alignment - they enforce it at the compiler and WebAssembly isolation boundary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THE SIX INVARIANTS (THE CENTERPIECE) ────────────────────────── */}
      <section id="constitution" className="px-6 md:px-12 py-20 md:py-28 border-b border-neutral-900/60 bg-[#070707]/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-xs text-neutral-500 font-mono tracking-widest block uppercase">// The_Constitution</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              My Personal Invariants - The Non-Negotiables
            </h2>
            <p className="text-sm text-neutral-400 font-light max-w-3xl leading-relaxed">
              Before I explain what AnimusLab is, I need to explain who I am - because every architectural decision in this document traces back to six principles I have held since I started building systems. I call them invariants because they are non-negotiable. If a design decision violates them, I feel friction even if it works. These are not aspirational goals. They are the reason AnimusLab exists in the form it does.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 pt-4 items-start">
            {/* Left Column */}
            <div className="flex-1 space-y-6 w-full">
              {INVARIANTS.map((inv, index) => {
                if (index % 2 !== 0) return null;
                const isOpen = !!expandedInvariants[index];
                return (
                  <div
                    key={index}
                    onClick={() => toggleInvariant(index)}
                    className={`p-6 border border-neutral-900 bg-[#0a0a0a]/30 hover:border-neutral-800 transition-all cursor-pointer select-none space-y-4 ${
                      isOpen ? 'border-neutral-700 bg-[#0a0a0a]/60' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-[10px] text-neutral-500 font-mono tracking-wider block uppercase">
                        {inv.principle} - {inv.title}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono">
                        {isOpen ? '[-]' : '[+]'}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-tight leading-snug">
                      {inv.statement}
                    </h3>
                    
                    {isOpen && (
                      <div className="pt-4 border-t border-neutral-950 space-y-4 animate-fadeIn">
                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                          {inv.fullText}
                        </p>
                        
                        <div className="pt-4 border-t border-neutral-950 space-y-2">
                          <span className="text-[9px] text-neutral-500 font-mono block uppercase">
                            // Where it Appears in AnimusLab
                          </span>
                          <ul className="space-y-1.5 text-xs text-neutral-400 font-mono font-light leading-normal pl-2">
                            {inv.applications.map((app, appIdx) => (
                              <li key={appIdx} className="flex gap-2 items-start">
                                <span className="text-neutral-600 font-bold">&bull;</span>
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-6 w-full">
              {INVARIANTS.map((inv, index) => {
                if (index % 2 === 0) return null;
                const isOpen = !!expandedInvariants[index];
                return (
                  <div
                    key={index}
                    onClick={() => toggleInvariant(index)}
                    className={`p-6 border border-neutral-900 bg-[#0a0a0a]/30 hover:border-neutral-800 transition-all cursor-pointer select-none space-y-4 ${
                      isOpen ? 'border-neutral-700 bg-[#0a0a0a]/60' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-[10px] text-neutral-500 font-mono tracking-wider block uppercase">
                        {inv.principle} - {inv.title}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono">
                        {isOpen ? '[-]' : '[+]'}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-tight leading-snug">
                      {inv.statement}
                    </h3>
                    
                    {isOpen && (
                      <div className="pt-4 border-t border-neutral-950 space-y-4 animate-fadeIn">
                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                          {inv.fullText}
                        </p>
                        
                        <div className="pt-4 border-t border-neutral-950 space-y-2">
                          <span className="text-[9px] text-neutral-500 font-mono block uppercase">
                            // Where it Appears in AnimusLab
                          </span>
                          <ul className="space-y-1.5 text-xs text-neutral-400 font-mono font-light leading-normal pl-2">
                            {inv.applications.map((app, appIdx) => (
                              <li key={appIdx} className="flex gap-2 items-start">
                                <span className="text-neutral-600 font-bold">&bull;</span>
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6 text-center md:text-left">
            <p className="text-xs text-neutral-500 font-mono leading-relaxed max-w-3xl">
              and these are the foundations of AnimusLab org, every system that is built under this org&apos;s name is built because there alternatives system don&apos;t follow the principles of AnimusLab org, or violate them.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. PUBLICATIONS & RESEARCH ─────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b border-neutral-900/60">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-3">
            <span className="text-xs text-neutral-500 font-mono tracking-widest block uppercase">// Publications_And_Research</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Academic Preprints & Notes</h2>
          </div>

          {/* Primary Publication Card */}
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="p-8 border border-neutral-900 bg-[#0a0a0a]/20 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500">
                <span>{pub.date} // PEER-REVIEWED INDEX</span>
                <span>{pub.publisher}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
                {pub.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                {pub.abstract}
              </p>
              <div className="flex flex-wrap gap-6 pt-4 border-t border-neutral-900/50 text-[11px] font-mono">
                <a href={pub.doiLink} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                  [ Zenodo Deposit: DOI_10.5281 ]
                </a>
                <span className="text-neutral-800">|</span>
                <Link href="/research" className="text-neutral-500 hover:text-white transition-colors">
                  [ Read Research Details ]
                </Link>
              </div>
            </div>
          ))}

          {/* Technical Research Essays */}
          <div className="space-y-4 pt-4">
            <span className="text-[10px] text-neutral-500 font-mono block uppercase">// Deep_Dive_Technical_Notes</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RESEARCH_NOTES.map((note) => (
                <div key={note.slug} className="p-5 border border-neutral-900 bg-[#080808]/20 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-[9px] text-neutral-600 font-mono block uppercase">{note.category} // {note.date}</span>
                    <h4 className="text-xs font-bold text-white tracking-tight leading-snug">{note.title}</h4>
                    <p className="text-[11px] text-neutral-500 font-light leading-normal">{note.abstract}</p>
                  </div>
                  <Link href={`/research#${note.slug}`} className="text-[10px] text-neutral-400 font-mono hover:text-white transition-colors">
                    [ Read Note ]
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SYSTEMS ──────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b border-neutral-900/60 bg-[#070707]/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="text-xs text-neutral-500 font-mono tracking-widest block uppercase">// Active_Systems</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Active Systems</h2>
            <p className="text-xs text-neutral-500 font-light max-w-md">
              We translate our institutional invariants into working systems architectures.
            </p>
          </div>

          <div className="space-y-12 pt-4">
            
            {/* Category: Foundational Research */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-neutral-500 tracking-wider font-mono uppercase border-b border-neutral-950 pb-2">
                // Foundational_Research
              </h3>
              <div className="space-y-6">
                {/* ANIMUS Program */}
                <div className="p-6 border border-neutral-900 bg-[#0a0a0a]/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-bold text-white font-mono uppercase tracking-wider">ANIMUS</h4>
                      <span className="text-[9px] px-2 py-0.5 border border-neutral-800 text-neutral-500 font-mono rounded">RESEARCH</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Adaptive Neuro-Integrated Modular Unified System. A neuro-symbolic reasoning architecture isolating dynamic knowledge acquisition pathways from execution boundaries. Uses a modular emotional state registry mapped to deterministic reasoning thresholds.
                    </p>
                  </div>
                  <a href="https://github.com/AnimusLab/ANIMUS" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-white font-mono shrink-0">
                    [ Repository ]
                  </a>
                </div>

                {/* Shadow Watch Program */}
                <div className="p-6 border border-neutral-900 bg-[#0a0a0a]/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-bold text-white font-mono uppercase tracking-wider">Shadow Watch</h4>
                      <span className="text-[9px] px-2 py-0.5 border border-neutral-800 text-neutral-500 font-mono rounded">PROTOTYPE</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Zero-knowledge session trust observability and process telemetry. Captures dense cryptographic audit traces on-premise inside isolated database cells while reporting only sparse verification digests to centralized ledgers.
                    </p>
                  </div>
                  <a href="https://github.com/Tanishq1030/Shadow_Watch" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-white font-mono shrink-0">
                    [ Personal Migrating ]
                  </a>
                </div>
              </div>
            </div>

            {/* Category: Applied Infrastructure */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-neutral-500 tracking-wider font-mono uppercase border-b border-neutral-950 pb-2">
                // Applied_Infrastructure
              </h3>
              <div className="space-y-6">
                {/* Anchor Program */}
                <div className="p-6 border border-neutral-900 bg-[#0a0a0a]/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-bold text-white font-mono uppercase tracking-wider">Anchor Governance Engine</h4>
                      <span className="text-[9px] px-2 py-0.5 border border-neutral-800 text-neutral-500 font-mono rounded">ACTIVE DEVELOPMENT</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Deterministic runtime capability resolution and execution guardrails. Isolates caller security namespaces, scans Abstract Syntax Trees (AST) for violations, and operates a WebAssembly containment sandbox (Diamond Cage) under a SHA-256 sealed constitution.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-xs font-mono shrink-0 items-start md:items-end">
                    <Link href="/anchor" className="text-neutral-400 hover:text-white transition-colors">
                      Documentation &rarr;
                    </Link>
                    <a href="https://anchorgovernance.tech" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                      Platform &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. EVIDENCE & PROGRESS ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b border-neutral-900/60">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="text-xs text-neutral-500 font-mono tracking-widest block uppercase">// Evidence_Of_Execution</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Proof of Work Ledger</h2>
            <p className="text-xs text-neutral-500 font-light max-w-md">
              We do not publish hype or promotional metrics. Below is the objective verification log of our software artifacts and documentation.
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-900 bg-[#070707]/30">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#0a0a0a] text-neutral-400 border-b border-neutral-900">
                <tr>
                  <th className="px-6 py-4 font-bold tracking-wider">Artifact</th>
                  <th className="px-6 py-4 font-bold tracking-wider">Status / Deliverable</th>
                  <th className="px-6 py-4 font-bold tracking-wider">Verification Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900/50">
                <tr>
                  <td className="px-6 py-4 font-bold text-white">Anchor Core Engine</td>
                  <td className="px-6 py-4 text-neutral-400">v5.0.4 PyPI Release Active</td>
                  <td className="px-6 py-4 text-neutral-500">Auth-locked AST scanning & call-sequence validation in anchor/core/engine.py</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-white">Policy Gate System</td>
                  <td className="px-6 py-4 text-neutral-400">Active Production Deployment</td>
                  <td className="px-6 py-4 text-neutral-500">Three-file policy hierarchy (constitution.anchor) under GOVERNANCE.lock SHA-256 seal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-white">Diamond Cage Sandbox</td>
                  <td className="px-6 py-4 text-neutral-400">WASM Runtime Isolated</td>
                  <td className="px-6 py-4 text-neutral-500">Virtualized subprocess interception and OS-level namespace boundary isolation in anchor/core/sandbox.py</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-white">Forensic Spoke DB</td>
                  <td className="px-6 py-4 text-neutral-400">Local Telemetry Active</td>
                  <td className="px-6 py-4 text-neutral-500">AES-256-GCM encrypted local logs inside edge SQLite database (anchor.db) synchronized via POST /api/ledger</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Applied Systems Evidence Description */}
          <div className="space-y-4 pt-4 border-t border-neutral-900/30">
            <span className="text-[10px] text-neutral-500 font-mono block uppercase">// Downstream_Validation_Ecosystem</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed font-light text-neutral-400">
              {APPLIED_SYSTEMS.map((sys) => (
                <div key={sys.name} className="space-y-2 p-5 border border-neutral-900/40 bg-[#060606]/10">
                  <h4 className="font-bold text-white font-mono">{sys.name}</h4>
                  <span className="text-[9px] text-neutral-500 font-mono block uppercase">// {sys.type}</span>
                  <p className="text-neutral-500 font-light text-[11px] leading-normal">{sys.description}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-neutral-600 font-mono italic">
              * Note: These applied tools serve as validation planes for the laboratory\'s foundational research principles.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. INSTITUTIONAL TIMELINE ──────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b border-neutral-900/60 bg-[#070707]/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="text-xs text-neutral-500 font-mono tracking-widest block uppercase">// Institutional_Timeline</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Milestones and Progress</h2>
          </div>

          <div className="relative pl-6 md:pl-8 border-l border-neutral-900 space-y-12 max-w-xl pt-4">
            {TIMELINE.map((evt, idx) => (
              <div key={idx} className="relative space-y-2">
                {/* Timeline dot marker */}
                <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 bg-[#050505] border-2 border-neutral-700 rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></span>
                </span>
                <span className="text-xs text-white font-mono font-bold block">{evt.year} // {evt.title}</span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {evt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. SHARED FOOTER ──────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
