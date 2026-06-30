import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { getContent, ContentItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "Publications & Research | AnimusLab",
  alternates: {
    canonical: "/research",
  },
};

export default function ResearchPage() {
  const notes = getContent("notes");
  const papers = getContent("papers");
  const consultations = getContent("consultations");

  // Merge papers and consultations for the main outputs list
  const allOutputs = [...papers, ...consultations];
  allOutputs.sort(
    (a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
  );

  notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const statusRows = [
    { name: "Anchor", status: "Active Development", type: "Research System" },
    { name: "Canon", status: "Released v0.1.0", type: "Research System" },
    { name: "FSB Consultation Response", status: "Submitted", type: "Regulatory Submission" },
    { name: "ICAIF Paper", status: "Under Preparation", type: "Research Paper" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="px-6 md:px-12 py-28 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6 font-mono">
              Research Archive
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-8">
              Publications, Submissions, and System Status
            </h1>
            <p className="max-w-3xl text-lg text-neutral-400 leading-relaxed">
              Academic papers, regulatory consultation responses, implementation notes, and system status tracking from AnimusLab.
            </p>
          </div>
        </section>

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
                {allOutputs.length} Dynamic Outputs
              </span>
            </div>

            <div className="space-y-8">
              {allOutputs.map((item: ContentItem) => {
                const isPaper = item.slug.includes("paper") || item.slug.includes("governance");
                return (
                  <article
                    key={item.slug}
                    className="border border-neutral-900 p-8 hover:border-neutral-800 transition-colors bg-neutral-950/20"
                  >
                    <div className="flex flex-wrap items-center gap-4 mb-4">
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

                    <div className="flex items-start gap-4 mb-4">
                      {item.id && (
                        <span className="text-xs text-neutral-500 font-mono tracking-[0.2em] pt-1">
                          {item.id}
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {item.excerpt && (
                      <p className="text-neutral-400 leading-relaxed mb-6">
                        {item.excerpt}
                      </p>
                    )}

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
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
                      {item.github && (
                        <span className="border border-neutral-800 px-3 py-1 rounded-sm text-neutral-400 bg-neutral-900/30">
                          GitHub Repo
                        </span>
                      )}
                      <span className="border border-neutral-800 px-3 py-1 rounded-sm text-neutral-400">
                        Open Source
                      </span>
                      <span className="border border-neutral-800 px-3 py-1 rounded-sm text-neutral-400">
                        Apache 2.0
                      </span>
                    </div>

                    <div className="flex gap-6 font-mono text-sm">
                      {item.doi && (
                        <a
                          href={`https://doi.org/${item.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:text-indigo-300"
                        >
                          [DOI Citation]
                        </a>
                      )}
                      {isPaper ? (
                        <a
                          href={`/papers/${item.slug}`}
                          className="text-white hover:text-neutral-300 font-bold"
                        >
                          Read Document →
                        </a>
                      ) : (
                        <span className="text-neutral-600 font-bold">Document Online</span>
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
                {notes.length} Notes
              </span>
            </div>

            <div className="space-y-8">
              {notes.map((note: ContentItem) => (
                <article
                  key={note.slug}
                  className="border border-neutral-900 p-8 hover:border-neutral-800 transition-colors bg-neutral-950/20"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    {note.date && (
                      <span className="text-sm text-neutral-500 font-mono">
                        {note.date}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    {note.id && (
                      <span className="text-xs text-neutral-500 font-mono tracking-[0.2em]">
                        {note.id}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {note.title}
                    </h3>
                  </div>

                  {note.excerpt && (
                    <p className="text-neutral-400 leading-relaxed mb-6">
                      {note.excerpt}
                    </p>
                  )}

                  {note.tags && note.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {note.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-neutral-800 px-3 py-1 text-neutral-400 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={`/research/${note.slug}`}
                    className="text-white hover:text-neutral-300 font-mono text-sm"
                  >
                    Read Note →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}