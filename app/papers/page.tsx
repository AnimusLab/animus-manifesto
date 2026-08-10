import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Papers & Preprints | AnimusLab",
  description: "Published research papers, SSRN preprints, and working drafts from AnimusLab's governance infrastructure research program.",
  alternates: {
    canonical: "/papers",
  },
};

export default function PapersIndexPage() {
  const papers = getContent("papers");

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-grow max-w-[1600px] mx-auto w-full px-8 py-24">
        <div className="max-w-4xl space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-2 text-xs font-mono font-bold text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            RESEARCH PUBLICATIONS
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Papers &amp; Preprints
          </h1>
          <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
            Peer-reviewed publications, SSRN preprints, and working drafts from AnimusLab&apos;s research into deterministic governance, runtime policy enforcement, and trust observability infrastructure.
          </p>
        </div>

        <div className="space-y-6 border-t border-neutral-900 pt-12">
          {papers.map((paper) => (
            <Link
              key={paper.slug}
              href={`/papers/${paper.slug}`}
              className="block border border-neutral-900 bg-[#070707]/30 p-8 hover:border-neutral-800 transition-all duration-300 group rounded-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-indigo-400">
                  {paper.category || "PAPER"}
                </span>
                <span className="text-[10px] font-mono text-neutral-600">
                  {paper.date}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 mb-3">
                {paper.title}
              </h2>

              <p className="text-sm text-neutral-400 leading-relaxed font-light max-w-3xl">
                {paper.excerpt}
              </p>

              <span className="text-xs font-mono font-bold text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5 mt-6">
                Read Paper <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>

        {/* External Publications */}
        <div className="mt-20 border-t border-neutral-900 pt-12 space-y-8">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono">// External Publications</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://zenodo.org/records/19734724"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-neutral-900 bg-[#070707]/30 p-8 hover:border-neutral-800 transition-all duration-300 rounded-sm group"
            >
              <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-3">SSRN / ZENODO</span>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                Anchor: Deterministic Runtime Governance for Autonomous AI Systems
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Full academic preprint detailing the formal verification framework, AST-level enforcement architecture, and zero-copy performance benchmarks.
              </p>
              <span className="text-xs font-mono text-neutral-400 mt-4 block">View on Zenodo →</span>
            </a>

            <a
              href="https://pypi.org/project/anchor-audit/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-neutral-900 bg-[#070707]/30 p-8 hover:border-neutral-800 transition-all duration-300 rounded-sm group"
            >
              <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-3">PyPI PACKAGE</span>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                anchor-audit v6.0.1
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Production release of the deterministic governance kernel. Rust/PyO3 static scanner, CLI toolkit, and runtime guard decorator.
              </p>
              <span className="text-xs font-mono text-neutral-400 mt-4 block">View on PyPI →</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
