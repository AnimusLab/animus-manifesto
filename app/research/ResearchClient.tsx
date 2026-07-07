"use client";

import React, { useState } from "react";
import { ContentItem } from "@/lib/content";

interface ResearchClientProps {
  initialOutputs: ContentItem[];
  initialNotes: ContentItem[];
  statusRows: Array<{ name: string; status: string; type: string }>;
}

export default function ResearchClient({
  initialOutputs,
  initialNotes,
  statusRows,
}: ResearchClientProps) {
  const [expandedSlugs, setExpandedSlugs] = useState<Record<string, boolean>>({});

  const toggleExpand = (slug: string) => {
    setExpandedSlugs((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <>
      {/* STATUS TABLE */}
      <section className="px-6 md:px-12 py-16 border-b border-neutral-900 bg-[#070707]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-6">// Active Momentum</h2>
          <h3 className="text-2xl font-semibold text-white mb-6">Research &amp; Systems Status</h3>
          <div className="border border-neutral-900 overflow-hidden font-mono text-sm">
            <table className="min-w-full divide-y divide-neutral-900">
              <thead className="bg-[#0a0a0a]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-neutral-500">Project / Paper</th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-neutral-500">Type</th>
                  <th className="px-6 py-4 text-right text-xs uppercase tracking-wider text-neutral-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 bg-neutral-950/20">
                {statusRows.map((row) => (
                  <tr key={row.name}>
                    <td className="px-6 py-4 text-white font-bold">{row.name}</td>
                    <td className="px-6 py-4 text-neutral-400">{row.type}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-block px-2 py-0.5 border text-xs font-bold rounded-sm ${
                        row.status.includes("Released") || row.status === "Submitted"
                          ? "border-emerald-950 bg-emerald-950/20 text-emerald-400"
                          : "border-indigo-950 bg-indigo-950/20 text-indigo-400"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS & OUTPUTS */}
      <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-semibold text-white">Publications &amp; Submissions</h2>
            <span className="text-sm text-neutral-500 font-mono">
              {initialOutputs.length} Dynamic Outputs
            </span>
          </div>

          <div className="space-y-8">
            {initialOutputs.map((item: ContentItem) => {
              const isExpanded = !!expandedSlugs[item.slug];
              return (
                <article
                  key={item.slug}
                  className="border border-neutral-900 p-8 transition-colors bg-neutral-950/20 space-y-6"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      {item.category && (
                        <span className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-mono font-bold">
                          {item.category}
                        </span>
                      )}
                      {item.date && (
                        <span className="text-sm text-neutral-500 font-mono">
                          {item.date}
                        </span>
                      )}
                    </div>

                    <div className="flex items-start gap-4">
                      {item.id && (
                        <span className="text-xs text-neutral-500 font-mono tracking-[0.2em] pt-1.5">
                          {item.id}
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {item.excerpt && !isExpanded && (
                    <p className="text-neutral-400 leading-relaxed">
                      {item.excerpt}
                    </p>
                  )}

                  {isExpanded && (
                    <div className="border-t border-neutral-900 pt-6 text-sm text-neutral-300 space-y-4 leading-relaxed font-mono whitespace-pre-wrap bg-neutral-950/40 p-5 border rounded">
                      {item.content}
                    </div>
                  )}

                  {/* Metadata Badges */}
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {item.status && (
                      <span className={`px-3 py-1 rounded-sm border ${
                        item.status === "Published" || item.status === "Submitted"
                          ? "border-emerald-950 bg-emerald-950/20 text-emerald-400"
                          : item.status.toLowerCase().includes("preparation")
                          ? "border-amber-900/60 bg-amber-950/10 text-amber-400"
                          : "border-indigo-900/60 bg-indigo-950/20 text-indigo-400"
                      }`}>
                        Status: {item.status}
                      </span>
                    )}
                    {item.venue && (
                      <span className="border border-neutral-800 px-3 py-1 rounded-sm text-neutral-300">
                        Venue: {item.venue}
                      </span>
                    )}
                    {item.publisher && (
                      <span className="border border-neutral-800 px-3 py-1 rounded-sm text-neutral-300">
                        Publisher: {item.publisher}
                      </span>
                    )}
                    {item.doi && (
                      <span className="border border-emerald-900/60 bg-emerald-950/10 text-emerald-400 px-3 py-1 rounded-sm">
                        DOI: {item.doi}
                      </span>
                    )}
                    <span className="border border-neutral-800 px-3 py-1 rounded-sm text-neutral-400">
                      Open Source
                    </span>
                    <span className="border border-neutral-800 px-3 py-1 rounded-sm text-neutral-400">
                      Apache 2.0
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-6 font-mono text-sm pt-2">
                    <button
                      onClick={() => toggleExpand(item.slug)}
                      className="text-white hover:text-neutral-300 font-bold cursor-pointer"
                    >
                      {isExpanded ? "[Collapse Brief]" : "[Read Content/Brief →]"}
                    </button>
                    {item.pdf && (
                      <a
                        href={item.pdf}
                        download
                        className="text-indigo-400 hover:text-indigo-300 font-bold"
                      >
                        [Download PDF]
                      </a>
                    )}
                    {item.doi && (
                      <a
                        href={`https://doi.org/${item.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-neutral-300"
                      >
                        [DOI Citation]
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESEARCH NOTES */}
      <section className="px-6 md:px-12 py-24 bg-[#070707]/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-semibold text-white">Research Notes</h2>
            <span className="text-sm text-neutral-500 font-mono">
              {initialNotes.length} Notes
            </span>
          </div>

          <div className="space-y-8">
            {initialNotes.map((note: ContentItem) => {
              const isExpanded = !!expandedSlugs[note.slug];
              return (
                <article
                  key={note.slug}
                  className="border border-neutral-900 p-8 transition-colors bg-neutral-950/20 space-y-6"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      {note.date && (
                        <span className="text-sm text-neutral-500 font-mono">
                          {note.date}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      {note.id && (
                        <span className="text-xs text-neutral-500 font-mono tracking-[0.2em]">
                          {note.id}
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {note.title}
                      </h3>
                    </div>
                  </div>

                  {note.excerpt && !isExpanded && (
                    <p className="text-neutral-400 leading-relaxed">
                      {note.excerpt}
                    </p>
                  )}

                  {isExpanded && (
                    <div className="border-t border-neutral-900 pt-6 text-sm text-neutral-300 space-y-4 leading-relaxed font-mono whitespace-pre-wrap bg-neutral-950/40 p-5 border rounded">
                      {note.content}
                    </div>
                  )}

                  <div className="flex gap-6 font-mono text-sm pt-2">
                    <button
                      onClick={() => toggleExpand(note.slug)}
                      className="text-white hover:text-neutral-300 font-bold cursor-pointer"
                    >
                      {isExpanded ? "[Collapse Log]" : "[Read Content →]"}
                    </button>
                    {note.pdf && (
                      <a
                        href={note.pdf}
                        download
                        className="text-indigo-400 hover:text-indigo-300 font-bold"
                      >
                        [Download PDF]
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
