import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { getContent, ContentItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "Engineering Journal & News | AnimusLab",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsIndexPage() {
  const dispatches = getContent("dispatches");

  // Sort chronologically (newest first)
  dispatches.sort(
    (a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="px-6 md:px-12 py-28 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6 font-mono">
              Engineering Journal &amp; News
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-8">
              Dispatches &amp; Lab Notebook
            </h1>
            <p className="max-w-3xl text-lg text-neutral-400 leading-relaxed">
              Updates, release notes, research progress, and development dispatches from the AnimusLab team.
            </p>
          </div>
        </section>

        {/* POSTS LIST */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-5xl mx-auto space-y-12">
            {dispatches.length === 0 ? (
              <p className="text-neutral-500 font-mono">No dispatches found.</p>
            ) : (
              <div className="space-y-12">
                {dispatches.map((item: ContentItem) => (
                  <article
                    key={item.slug}
                    className="border border-neutral-900 p-8 hover:border-neutral-800 transition-colors bg-neutral-950/20"
                  >
                    <div className="flex flex-wrap items-center gap-4 mb-4 font-mono text-xs">
                      {item.category && (
                        <span className="text-indigo-400 font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                      )}
                      {item.date && (
                        <span className="text-neutral-500">
                          {item.date}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                      {item.title}
                    </h2>

                    {item.excerpt && (
                      <p className="text-neutral-400 leading-relaxed mb-6 text-sm">
                        {item.excerpt}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                      {item.tags.map((tag) => (
                        <span key={tag} className="border border-neutral-800 px-2.5 py-0.5 text-neutral-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/news/${item.slug}`}
                      className="text-white hover:text-indigo-400 font-mono text-sm font-bold"
                    >
                      Read Dispatch →
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
