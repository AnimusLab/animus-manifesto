import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cases = getContent("cases");
  const item = cases.find((c) => c.slug === slug);
  if (!item) return {};

  return {
    title: `${item.title} | AnimusLab Case Studies`,
    description: item.excerpt,
    alternates: {
      canonical: `/cases/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const cases = getContent("cases");
  return cases.map((item) => ({
    slug: item.slug,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cases = getContent("cases");
  const item = cases.find((c) => c.slug === slug);

  if (!item) {
    notFound();
  }

  // Determine metadata values
  const systemLayer = item.slug.includes("authority") ? "Anchor (Runtime Enforcement)" : "Anchor Engine";
  const analysisType = item.slug.includes("authority") ? "Historical Incident Analysis" : "Technical Overview";
  const domain = item.slug.includes("authority") ? "Financial Markets" : "System Safety";

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-grow max-w-[1600px] mx-auto w-full px-8 py-24">
        <div className="mb-10">
          <Link
            href="/cases"
            className="text-xs font-mono font-bold text-neutral-500 hover:text-white transition-colors"
          >
            ← Back to Governance Archive
          </Link>
        </div>

        <section className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] 2xl:grid-cols-[240px_1fr_120px] gap-8 lg:gap-16">
          {/* SIDEBAR METADATA */}
          <aside className="pr-2">
            <div className="border-t border-b border-neutral-900 py-6 space-y-5 sticky top-24">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-600 font-mono font-bold">Case ID</p>
                <p className="text-white mt-1 text-sm font-mono font-bold">{item.id}</p>
              </div>
              
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-600 font-mono font-bold">Published</p>
                <p className="text-white mt-1 text-sm font-mono font-bold">{item.date}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-600 font-mono font-bold">System Layer</p>
                <p className="text-white mt-1 text-sm font-bold">{systemLayer}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-600 font-mono font-bold">Analysis Type</p>
                <p className="text-white mt-1 text-sm font-bold">{analysisType}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-600 font-mono font-bold">Domain Scope</p>
                <p className="text-white mt-1 text-sm font-bold">{domain}</p>
              </div>

              {item.tags?.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-600 font-mono font-bold">Keywords</p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-neutral-900 bg-neutral-950 px-2 py-0.5 text-[10px] text-neutral-400 font-mono rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* MAIN ARTICLE */}
          <div className="w-full min-w-0">
            <header className="mb-16 border-b border-neutral-900 pb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono font-bold mb-3">
                AnimusLab Case Analysis // {item.id}
              </p>
              
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {item.title}
              </h1>

              <div className="h-0.5 w-16 bg-indigo-500 mt-6" />

              {item.excerpt && (
                <p className="text-base text-neutral-400 font-light leading-relaxed mt-8 border-l border-neutral-800 pl-6 italic">
                  {item.excerpt}
                </p>
              )}
            </header>

            <article className="prose prose-invert max-w-none text-neutral-300 font-light leading-relaxed space-y-6 text-sm md:text-base">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  pre({ children }) {
                    return <>{children}</>;
                  },
                  code({ node, className, children, ...props }) {
                    const isBlock = className || String(children).includes('\n');
                    if (isBlock) {
                      return (
                        <pre className="no-scrollbar overflow-x-auto my-8 p-6 bg-[#080808]/40 border border-neutral-900 rounded font-mono text-xs md:text-sm">
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </pre>
                      );
                    }
                    return (
                      <code className="bg-[#0f0f12] text-indigo-300 px-1.5 py-0.5 rounded text-xs font-mono font-semibold" {...props}>
                        {children}
                      </code>
                    );
                  },
                  h1: ({ children }) => <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-neutral-900 pb-2">{children}</h2>,
                  h2: ({ children }) => <h3 className="text-xl font-bold text-white mt-8 mb-4">{children}</h3>,
                  h3: ({ children }) => <h4 className="text-base font-bold text-white mt-6 mb-3">{children}</h4>,
                  hr: () => <hr className="border-neutral-900 my-10" />,
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-8 border border-neutral-900">
                      <table className="w-full text-left border-collapse text-xs md:text-sm font-mono">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-[#0a0a0d] border-b border-neutral-900">{children}</thead>,
                  th: ({ children }) => <th className="p-4 text-white font-bold">{children}</th>,
                  tr: ({ children }) => <tr className="border-b border-neutral-900 hover:bg-neutral-900/10">{children}</tr>,
                  td: ({ children }) => <td className="p-4 text-neutral-400 font-light leading-relaxed">{children}</td>,
                  ul: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-neutral-300 leading-relaxed font-light">{children}</li>,
                }}
              >
                {item.content}
              </ReactMarkdown>
            </article>
          </div>

          <div className="hidden 2xl:block" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
