'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RESEARCH_NOTES, LAB_NOTES, BlogPost } from '../components/notesData';

export default function ResearchPage() {
  const [activeNote, setActiveNote] = useState<BlogPost | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] text-neutral-300 font-sans flex flex-col selection:bg-neutral-800 selection:text-white antialiased">
      {/* Shared Header */}
      <Header />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-neutral-900 bg-[#070707]/30">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider font-mono">// AnimusLab Research</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Research & Publications
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-xl font-light">
            Formal papers, technical essays, and active logging of the developmental milestones of AI governance systems.
          </p>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-24 w-full flex-1">
        
        {/* ── SECTION: PUBLICATIONS ────────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// 01_Formal_Publications</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900 pb-2">
            Publications
          </h3>
          
          <div className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-3 text-[10px] text-neutral-500 font-mono font-medium">
                <span>PREPRINT v1.0.2</span>
                <span>•</span>
                <span>APRIL 2026</span>
              </div>
              <h4 className="text-base text-white font-bold tracking-tight">
                Anchor: Constitutional Governance Infrastructure for Intelligent Systems
              </h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Autonomous agentic frameworks bypass dynamic filters via code execution cycles. We present Anchor, a Layer 1 governance engine executing capability checking and AST validation in-memory to preempt runtime thread violations.
              </p>
            </div>
            <div className="flex gap-4 text-xs font-mono font-bold shrink-0 pt-2">
              <a
                href="https://zenodo.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                [ VIEW ON ZENODO ]
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION: RESEARCH NOTES (ESSAYS) ────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// 02_Technical_Essays</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900 pb-2">
            Research Notes
          </h3>
          <div className="divide-y divide-neutral-900">
            {RESEARCH_NOTES.map(note => (
              <div
                key={note.slug}
                className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-3 text-[10px] text-neutral-500 font-mono font-medium">
                    <span>{note.category}</span>
                    <span>•</span>
                    <span>{note.publishedAt}</span>
                  </div>
                  <h4 className="text-base text-white font-bold tracking-tight group-hover:text-indigo-400 transition-colors">
                    {note.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {note.summary}
                  </p>
                </div>
                
                <div className="shrink-0 font-mono text-xs font-bold pt-2">
                  {note.externalUrl ? (
                    <a
                      href={note.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      [ READ ON HASHNODE ]
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveNote(note)}
                      className="text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      [ READ NOTE ]
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: LAB NOTES (PROGRESS UPDATES) ────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// 03_Progress_Logs</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900 pb-2">
            Lab Notes
          </h3>
          <div className="relative border-l border-neutral-900 ml-3 pl-6 space-y-8 py-2">
            {LAB_NOTES.map((note, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 border-4 border-[#050505] box-content" />
                <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-2 font-mono">{note.date}</div>
                <ul className="space-y-2 text-xs text-neutral-400 font-light list-disc list-inside">
                  {note.updates.map((update, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {update}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Shared Footer */}
      <Footer />

      {/* ── ESSAY DRAWER ────────────────────────────────────────────────── */}
      {activeNote && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex justify-end transition-opacity duration-300 animate-fadeIn"
          onClick={() => setActiveNote(null)}
        >
          <div
            className="w-full max-w-3xl bg-[#070707] border-l border-neutral-900 h-full flex flex-col shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-900 bg-[#070707] sticky top-0 z-10">
              <span className="text-[10px] text-indigo-400 font-bold tracking-widest uppercase font-mono">
                // {activeNote.category}
              </span>
              <button
                onClick={() => setActiveNote(null)}
                className="text-neutral-500 hover:text-white text-xs tracking-wider font-mono cursor-pointer"
              >
                [ CLOSE ✕ ]
              </button>
            </div>

            {/* Modal content */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs text-neutral-500 font-mono">{activeNote.publishedAt} • {activeNote.readTime}</span>
                <h1 className="text-2xl md:text-3xl text-white font-bold tracking-tight">
                  {activeNote.title}
                </h1>
              </div>

              {/* Markdown Render Area */}
              <div className="prose prose-invert prose-neutral text-sm leading-relaxed text-neutral-300 font-light max-w-none space-y-6
                [&>h2]:text-white [&>h2]:text-lg [&>h2]:font-bold [&>h2]:pt-4 [&>h2]:border-b [&>h2]:border-neutral-900 [&>h2]:pb-1
                [&>h3]:text-white [&>h3]:text-base [&>h3]:font-bold [&>h3]:pt-2
                [&>p]:leading-relaxed [&>p]:text-neutral-400
                [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-1.5 [&>ul]:text-neutral-400
                [&>pre]:bg-[#050505] [&>pre]:border [&>pre]:border-neutral-900 [&>pre]:p-4 [&>pre]:rounded [&>pre]:overflow-x-auto [&>pre]:text-xs [&>pre]:font-mono [&>pre]:leading-normal
                [&>code]:text-indigo-400 [&>code]:bg-indigo-950/20 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-xs [&>code]:font-mono
                [&>table]:w-full [&>table]:text-left [&>table]:border-collapse [&>table]:my-4
                [&>table_th]:border-b [&>table_th]:border-neutral-800 [&>table_th]:pb-2 [&>table_th]:text-white [&>table_th]:text-xs [&>table_th]:font-bold
                [&>table_td]:py-2 [&>table_td]:border-b [&>table_td]:border-neutral-900/60 [&>table_td]:text-xs [&>table_td]:text-neutral-400"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {activeNote.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
