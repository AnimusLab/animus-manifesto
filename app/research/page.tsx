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

  papers.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  notes.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">

        {/* HERO */}

        <section className="px-6 md:px-12 py-28 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-6">
              Research Archive
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-8">
              Publications, Notes, and Institutional Research
            </h1>

            <p className="max-w-3xl text-lg text-neutral-400 leading-relaxed">
              Research papers, technical essays,
              implementation notes, and ongoing work
              from AnimusLab.
            </p>

          </div>
        </section>

        {/* STATS */}

        <section className="px-6 md:px-12 py-16 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

            <div>
              <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">
                Papers
              </p>

              <p className="text-4xl font-semibold">
                {papers.length}
              </p>
            </div>

            <div>
              <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">
                Research Notes
              </p>

              <p className="text-4xl font-semibold">
                {notes.length}
              </p>
            </div>

            <div>
              <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">
                Institution
              </p>

              <p className="text-xl">
                AnimusLab
              </p>
            </div>

          </div>
        </section>

        {/* PAPERS */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-semibold text-white">
                Papers
              </h2>

              <span className="text-sm text-neutral-500">
                {papers.length} Publications
              </span>
            </div>

            <div className="space-y-8">

              {papers.map((paper: ContentItem) => (
                <article
                  key={paper.slug}
                  className="border border-neutral-900 p-8 hover:border-neutral-700 transition-colors"
                >

                  <div className="flex flex-wrap items-center gap-4 mb-4">

                    {paper.category && (
                      <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {paper.category}
                      </span>
                    )}

                    {paper.date && (
                      <span className="text-sm text-neutral-500">
                        {paper.date}
                      </span>
                    )}

                  </div>

                  <div className="flex items-center gap-4 mb-4">

                    <span className="text-xs text-neutral-500 tracking-[0.2em]">
                      {paper.id}
                    </span>

                    <h3 className="text-2xl font-medium text-white">
                      {paper.title}
                    </h3>

                  </div>

                  {paper.excerpt && (
                    <p className="text-neutral-400 leading-relaxed mb-6">
                      {paper.excerpt}
                    </p>
                  )}

                  {paper.tags && paper.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-neutral-800 px-3 py-1 text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={`/papers/${paper.slug}`}
                    className="text-white hover:text-neutral-300"
                  >
                    Read Paper →
                  </a>

                </article>
              ))}

            </div>
          </div>
        </section>

        {/* RESEARCH NOTES */}

        <section className="px-6 md:px-12 py-24">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-semibold text-white">
                Research Notes
              </h2>

              <span className="text-sm text-neutral-500">
                {notes.length} Notes
              </span>
            </div>

            <div className="space-y-8">

              {notes.map((note: ContentItem) => (
                <article
                  key={note.slug}
                  className="border border-neutral-900 p-8 hover:border-neutral-700 transition-colors"
                >

                  <div className="flex flex-wrap items-center gap-4 mb-4">

                    {note.date && (
                      <span className="text-sm text-neutral-500">
                        {note.date}
                      </span>
                    )}

                  </div>

                  <div className="flex items-center gap-4 mb-4">

                    <span className="text-xs text-neutral-500 tracking-[0.2em]">
                      {note.id}
                    </span>

                    <h3 className="text-2xl font-medium text-white">
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
                          className="text-xs border border-neutral-800 px-3 py-1 text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={`/research/${note.slug}`}
                    className="text-white hover:text-neutral-300"
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