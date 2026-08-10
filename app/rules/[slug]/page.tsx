import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { getContent } from "@/lib/content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MermaidDiagram from "../../components/MermaidDiagram";
import {
  ArchitectureDiagram,
  SovereignRelayDiagram,
  DiamondCageDiagram,
  DecisionAuditChainDiagram,
} from "../../components/DocDiagrams";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const rules = getContent("rules");
  const rule = rules.find((r) => r.slug === slug);
  if (!rule) return {};

  return {
    title: `${rule.id}: ${rule.title} | AnimusLab Rules`,
    description: rule.excerpt || rule.title,
    alternates: {
      canonical: `/rules/${slug}`,
    },
  };
}

export default async function RuleDetailPage({ params }: Props) {
  const { slug } = await params;
  const rules = getContent("rules");
  const rule = rules.find((r) => r.slug === slug);

  if (!rule) {
    notFound();
  }

  const isProhibited = rule.category === "Prohibited Practice";
  const themeColor = isProhibited ? "rose" : "indigo";

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-24 w-full">
        <Link
          href="/rules"
          className="text-xs uppercase tracking-widest text-neutral-500 hover:text-indigo-400 font-mono font-bold block mb-8 transition-colors"
        >
          ← Back to Statutory Rules Catalog
        </Link>

        {/* HEADER METADATA */}
        <header className="border-b border-neutral-900 pb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span
              className={`px-3 py-1 border rounded-sm font-bold uppercase tracking-wider ${
                isProhibited
                  ? "border-rose-500/40 bg-rose-950/40 text-rose-400"
                  : "border-indigo-500/40 bg-indigo-950/40 text-indigo-400"
              }`}
            >
              {rule.category}
            </span>
            <span className="text-neutral-600">//</span>
            <span className="text-neutral-400 font-bold">{rule.id}</span>
            <span className="text-neutral-600">//</span>
            <span className="text-neutral-500">{rule.jurisdiction}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {rule.title}
          </h1>

          <div className="grid md:grid-cols-3 gap-4 pt-4 font-mono text-xs">
            <div className="border border-neutral-900 bg-neutral-950/40 p-4 space-y-1">
              <span className="text-neutral-500 block uppercase">// Statutory Reference</span>
              <span className="text-white font-bold text-xs">{rule.statuteRef}</span>
            </div>
            <div className="border border-neutral-900 bg-neutral-950/40 p-4 space-y-1">
              <span className="text-neutral-500 block uppercase">// Enforcement Severity</span>
              <span className={isProhibited ? "text-rose-400 font-bold" : "text-indigo-400 font-bold"}>
                {rule.severity}
              </span>
            </div>
            <div className="border border-neutral-900 bg-neutral-950/40 p-4 space-y-1">
              <span className="text-neutral-500 block uppercase">// Mitigation Action</span>
              <span className="text-emerald-400 font-bold">{rule.mitigationAction}</span>
            </div>
          </div>
        </header>

        {/* MARKDOWN CONTENT READER */}
        <section className="py-12">
          <article className="institution-content font-light max-w-none w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                pre({ children }) {
                  return <>{children}</>;
                },
                code({ node, className, children, ...props }) {
                  const matchArchitecture = /language-diagram-architecture/.exec(className || "");
                  const matchRelay = /language-diagram-relay/.exec(className || "");
                  const matchSandbox = /language-diagram-sandbox/.exec(className || "");
                  const matchChain = /language-diagram-chain/.exec(className || "");
                  const matchMermaid = /language-mermaid/.exec(className || "");

                  if (matchArchitecture) return <ArchitectureDiagram />;
                  if (matchRelay) return <SovereignRelayDiagram />;
                  if (matchSandbox) return <DiamondCageDiagram />;
                  if (matchChain) return <DecisionAuditChainDiagram />;

                  if (matchMermaid) {
                    return (
                      <div className="border border-neutral-900 bg-[#080808]/20 rounded-lg p-6 my-8">
                        <MermaidDiagram
                          chart={String(children).replace(/\n$/, "")}
                          label="MERMAID_RULE_DIAGRAM"
                        />
                      </div>
                    );
                  }

                  const isBlock = className || String(children).includes("\n");
                  if (isBlock) {
                    return (
                      <pre className="no-scrollbar overflow-x-auto my-8 p-6 bg-black border border-neutral-900 rounded font-mono text-xs md:text-sm text-indigo-300">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    );
                  }

                  return (
                    <code className="bg-neutral-900 text-indigo-300 px-1.5 py-0.5 rounded text-xs font-mono" {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {rule.content}
            </ReactMarkdown>
          </article>
        </section>

        {/* BOTTOM NAVIGATION CTA */}
        <footer className="pt-12 border-t border-neutral-900 flex flex-wrap gap-4 font-mono text-xs">
          <Link
            href="/rules"
            className="bg-white text-black hover:bg-neutral-200 px-6 py-3 font-bold transition-all rounded-sm shadow-md"
          >
            ← Back to Rules Catalog
          </Link>
          <a
            href="https://github.com/AnimusLab/Anchor/tree/main/governance"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-6 py-3 font-bold transition-all rounded-sm"
          >
            View .anchor Rule DSL Repository →
          </a>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
