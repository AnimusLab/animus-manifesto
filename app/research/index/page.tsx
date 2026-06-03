import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import { getContent } from "@/lib/content";

export default function ResearchIndexPage() {
  const papers = getContent("papers");
  const notes = getContent("notes");

  const entries = [
    ...papers.map((paper) => ({
      ...paper,
      type: "Paper",
      href: `/papers/${paper.slug}`,
    })),

    ...notes.map((note) => ({
      ...note,
      type: "Note",
      href: `/research/${note.slug}`,
    })),
  ];

  entries.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">

        {/* Hero */}

        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">

          <div className="max-w-6xl mx-auto">

            <p className="institution-label mb-6">
              Research Index
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-8">
              Publication Catalog
            </h1>

            <p className="max-w-3xl text-lg text-neutral-400">
              Canonical index of all papers,
              research notes, and institutional
              publications released by AnimusLab.
            </p>

          </div>

        </section>

        {/* Table */}

        <section className="px-6 md:px-12 py-20">

          <div className="max-w-6xl mx-auto">

            <div className="border border-neutral-900">

              <div className="hidden md:grid grid-cols-[140px_120px_1fr_140px] gap-6 px-8 py-5 border-b border-neutral-900 text-xs uppercase tracking-[0.2em] text-neutral-500">

                <div>ID</div>
                <div>Type</div>
                <div>Title</div>
                <div>Date</div>

              </div>

              {entries.map((entry) => (
                <a
                  key={`${entry.type}-${entry.slug}`}
                  href={entry.href}
                  className="flex flex-col md:grid md:grid-cols-[140px_120px_1fr_140px] gap-4 md:gap-6 px-6 md:px-8 py-6 border-b border-neutral-900 hover:bg-neutral-950 transition-colors"
                >

                  <div className="flex justify-between md:block">
                    <span className="text-[10px] text-neutral-600 font-mono md:hidden">// ID</span>
                    <span className="text-neutral-400 font-mono text-xs md:text-sm">{entry.id}</span>
                  </div>

                  <div className="flex justify-between md:block">
                    <span className="text-[10px] text-neutral-600 font-mono md:hidden">// TYPE</span>
                    <span className="text-neutral-500 font-mono text-xs md:text-sm">{entry.type}</span>
                  </div>

                  <div>
                    <p className="text-white font-medium text-sm md:text-base">
                      {entry.title}
                    </p>

                    {entry.excerpt && (
                      <p className="text-neutral-500 text-xs md:text-sm mt-2 line-clamp-2 font-light leading-relaxed">
                        {entry.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between md:block pt-2 md:pt-0 border-t border-neutral-900/60 md:border-t-0">
                    <span className="text-[10px] text-neutral-600 font-mono md:hidden">// DATE</span>
                    <span className="text-neutral-500 font-mono text-xs md:text-sm">{entry.date}</span>
                  </div>

                </a>
              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}