import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Case Studies | AnimusLab",
  description: "A public archive of forensic incident analyses, runtime policy enforcement cases, and institutional governance frameworks.",
  alternates: {
    canonical: "https://case.animuslab.dev",
  },
};

export default function CasesIndexPage() {
  const cases = getContent("cases");
  
  // Sort cases by ID/slug (e.g., C-001, C-002, C-003)
  const sortedCases = [...cases].sort((a, b) => {
    const idA = a.id || "";
    const idB = b.id || "";
    return idA.localeCompare(idB);
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-grow max-w-[1600px] mx-auto w-full px-8 py-24">
        <div className="max-w-4xl space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-2 text-xs font-mono font-bold text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            EMPIRICAL EVIDENCE & GOVERNANCE ARCHIVE
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Case Studies &amp;<br />Governance Archive
          </h1>
          <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
            A public, reproducible record documenting practical approaches to runtime policy enforcement, auditability, decision provenance, and institutional trust for advanced AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-neutral-900">
          {sortedCases.map((item) => (
            <div 
              key={item.slug} 
              className="border border-neutral-900 bg-[#070707]/30 p-8 flex flex-col justify-between hover:border-neutral-800 transition-all duration-300 group rounded-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    {item.id || "CASE"}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-600">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {item.excerpt}
                </p>

                {item.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[9px] font-mono border border-neutral-850/60 px-2 py-0.5 rounded-sm bg-neutral-950 text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={`/cases/${item.slug}`}
                className="text-xs font-mono font-bold text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5 mt-8"
              >
                Read Case Study <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
