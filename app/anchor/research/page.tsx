import type { Metadata } from "next";
import { getContent, ContentItem } from "@/lib/content";

export const metadata: Metadata = {
  title: 'Research | AnimusLab',
  alternates: {
    canonical: '/anchor/research',
  },
};

export default function AnchorResearch() {
  const papers = getContent("papers");
  const notes = getContent("notes");

  // Filter papers and notes specific to Anchor / Governance
  const anchorPapers = papers.filter(
    (p) => 
      p.tags.includes("Governance") || 
      p.tags.includes("WASM Sandbox") || 
      p.title.toLowerCase().includes("anchor")
  );

  const anchorNotes = notes.filter(
    (n) => 
      n.tags.includes("Governance") || 
      n.title.toLowerCase().includes("anchor") || 
      n.excerpt?.toLowerCase().includes("anchor")
  );

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* SECTION HEADER */}
      <div className="space-y-4">
        <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">// Anchor_Research_Archive</span>
        <h3 className="text-2xl text-white font-semibold tracking-tight border-b border-neutral-900 pb-2">
          Publications & Technical Notes
        </h3>
        <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-3xl">
          A curated collection of academic-grade preprints, implementation guidelines, and engineering logs specifically detailing the design, constraints, and operational telemetry of the Anchor engine.
        </p>
      </div>

      {/* PUBLICATIONS LIST */}
      <section className="space-y-8">
        <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">// 1. Preprints & Papers</h4>
        
        {anchorPapers.length === 0 ? (
          <p className="text-neutral-500 font-mono text-xs">No publications found.</p>
        ) : (
          <div className="space-y-6">
            {anchorPapers.map((paper: ContentItem) => (
              <article 
                key={paper.slug}
                className="border border-neutral-900 p-6 hover:border-neutral-800 transition-colors bg-[#070707]/10"
              >
                <div className="flex flex-wrap items-center gap-4 mb-2 text-xs font-mono">
                  <span className="text-indigo-400 uppercase tracking-wider">{paper.category}</span>
                  <span className="text-neutral-600">//</span>
                  <span className="text-neutral-500">{paper.date}</span>
                  <span className="text-neutral-600">//</span>
                  <span className="text-neutral-500">{paper.id}</span>
                </div>

                <h5 className="text-lg font-medium text-white mb-3">
                  {paper.title}
                </h5>

                {paper.excerpt && (
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-light">
                    {paper.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-6 text-xs font-mono">
                  <a 
                    href={`/anchor/whitepaper`} 
                    className="text-white hover:text-indigo-400 transition-colors"
                  >
                    Read Inline →
                  </a>
                  <a 
                    href={`/papers/${paper.slug}`} 
                    className="text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    View Academic Version
                  </a>
                  {paper.pdf && (
                    <a 
                      href={paper.pdf} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-300 transition-colors"
                    >
                      Download PDF
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* TECHNICAL NOTES LIST */}
      <section className="space-y-8 pt-8 border-t border-neutral-900">
        <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">// 2. Engineering & Research Notes</h4>
        
        {anchorNotes.length === 0 ? (
          <p className="text-neutral-500 font-mono text-xs">No technical logs found.</p>
        ) : (
          <div className="space-y-6">
            {anchorNotes.map((note: ContentItem) => (
              <article 
                key={note.slug}
                className="border border-neutral-900 p-6 hover:border-neutral-800 transition-colors bg-[#070707]/10"
              >
                <div className="flex flex-wrap items-center gap-4 mb-2 text-xs font-mono">
                  <span className="text-neutral-500">{note.date}</span>
                  <span className="text-neutral-600">//</span>
                  <span className="text-neutral-500">{note.id}</span>
                </div>

                <h5 className="text-lg font-medium text-white mb-2">
                  {note.title}
                </h5>

                {note.excerpt && (
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4 font-light">
                    {note.excerpt}
                  </p>
                )}

                <a 
                  href={`/research/${note.slug}`} 
                  className="text-xs font-mono text-white hover:text-indigo-400 transition-colors"
                >
                  Read Technical Note →
                </a>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
