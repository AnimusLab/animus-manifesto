'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PUBLICATIONS, RESEARCH_NOTES, TIMELINE } from '../components/notesData';

export default function ResearchPage() {
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  const toggleNote = (slug: string) => {
    setSelectedNote(selectedNote === slug ? null : slug);
  };

  const labLogs = [
    {
      date: 'May 2026',
      title: 'Diamond Cage WASM Sandboxing Validation',
      desc: 'Validated runtime isolation under WebAssembly scopes. Verified that AST-scanned dynamic imports prevent namespace leakage with 0.0% false-positive halts.'
    },
    {
      date: 'April 2026',
      title: 'Zenodo Preprint Registration Completed',
      desc: 'Uploaded and registered the primary Anchor design preprint under Zenodo DOI indexing, validating the layer-1 capability resolution models.'
    },
    {
      date: 'March 2026',
      title: 'Cryptographic Head-Tossing Implementation',
      desc: 'Finished zero-knowledge telemetry routing for Spoke nodes, successfully decoupling metadata registers from local database forensics.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans flex flex-col selection:bg-neutral-800 selection:text-white antialiased">
      {/* Navigation Header */}
      <Header />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-neutral-900/60 bg-[#070707]/30">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs text-neutral-500 font-mono tracking-widest block uppercase">// Publications_And_Theory</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Research & Publications
          </h1>
          <p className="text-sm text-neutral-400 max-w-xl font-light leading-relaxed">
            Academic preprints, conceptual architecture specifications, and lab logs detailing deterministic governance.
          </p>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-20 flex-1 w-full">
        
        {/* ── SECTION: PUBLICATIONS ────────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// Peer_Reviewed_Registry</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900/60 pb-2">
            Academic Preprints
          </h3>

          <div className="space-y-8">
            {PUBLICATIONS.map((pub) => (
              <div key={pub.id} className="p-6 md:p-8 border border-neutral-900 bg-[#070707]/40 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500">
                  <span>{pub.date} // REGISTERED PREPRINT</span>
                  <span>{pub.publisher}</span>
                </div>
                <h4 className="text-base md:text-lg font-bold text-white tracking-tight">
                  {pub.title}
                </h4>
                <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-900/50 text-[10px] font-mono">
                  <a href={pub.doiLink} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                    [ Read DOI Preprint ]
                  </a>
                  <span className="text-neutral-800">|</span>
                  <a href={pub.pdfLink} className="text-neutral-400 hover:text-white transition-colors">
                    [ Download PDF Index ]
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: ESSAYS & NOTES ─────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// Technical_Deep_Dives</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900/60 pb-2">
            Research Notes & Specifications
          </h3>

          <div className="space-y-4">
            {RESEARCH_NOTES.map((note) => {
              const isOpen = selectedNote === note.slug;
              return (
                <div
                  key={note.slug}
                  id={note.slug}
                  className={`p-6 border border-neutral-900 bg-[#080808]/20 hover:border-neutral-800 transition-all space-y-3 cursor-pointer ${
                    isOpen ? 'border-neutral-700 bg-[#0a0a0a]/50' : ''
                  }`}
                  onClick={() => toggleNote(note.slug)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-[10px] text-neutral-600 font-mono tracking-wider uppercase block">
                      {note.category} // {note.date}
                    </span>
                    <span className="text-xs text-neutral-600 font-mono">
                      {isOpen ? '[-]' : '[+]'}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    {note.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {note.abstract}
                  </p>

                  {isOpen && (
                    <div className="pt-6 border-t border-neutral-900 space-y-4 animate-fadeIn text-xs md:text-sm text-neutral-300 font-light leading-relaxed pl-2">
                      <p className="whitespace-pre-wrap">{note.content}</p>
                      <span className="text-[9px] text-neutral-600 font-mono block">
                        // END_NOTE_SEGMENT
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION: LAB LOGS ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// Progress_Stream</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900/60 pb-2">
            Lab Notes
          </h3>

          <div className="space-y-6 relative pl-6 border-l border-neutral-900 pt-2">
            {labLogs.map((log, idx) => (
              <div key={idx} className="relative space-y-2">
                <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-[#050505] border border-neutral-700 rounded-full flex items-center justify-center">
                  <span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
                </span>
                <span className="text-[10px] text-white font-mono font-bold block">
                  {log.date} // {log.title}
                </span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {log.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
