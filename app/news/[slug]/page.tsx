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
  const dispatches = getContent("dispatches");
  const dispatch = dispatches.find((d) => d.slug === slug);
  if (!dispatch) return {};

  return {
    title: `${dispatch.title} | AnimusLab Engineering Journal`,
    description: dispatch.excerpt,
    alternates: {
      canonical: `/news/${slug}`,
    },
  };
}

export default async function NewsDispatchPage({ params }: Props) {
  const { slug } = await params;
  const dispatches = getContent("dispatches");
  const dispatch = dispatches.find((d) => d.slug === slug);

  if (!dispatch) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1 max-w-[1600px] mx-auto px-8 py-24 w-full">
        <section className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] 2xl:grid-cols-[240px_1fr_120px] gap-8 lg:gap-16">
          
          <aside className="pr-2">
            <div className="border-t border-b border-neutral-800 py-4 space-y-4 sticky top-24">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">ID</p>
                <p className="text-white mt-1 text-sm font-mono">{dispatch.id}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">Published</p>
                <p className="text-white mt-1 text-sm font-mono">{dispatch.date}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">Category</p>
                <p className="text-white mt-1 text-sm font-mono text-indigo-400 font-bold">{dispatch.category || "Dispatch"}</p>
              </div>
              {dispatch.tags && dispatch.tags.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">Tags</p>
                  <div className="flex flex-wrap gap-1.5 mt-2 font-mono text-xs">
                    {dispatch.tags.map((tag) => (
                      <span key={tag} className="border border-neutral-800 px-2 py-0.5 text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          <div className="w-full min-w-0">
            <header className="mb-20 border-b border-neutral-900 pb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono font-bold block mb-4">
                Engineering Journal // Dispatch
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                {dispatch.title}
              </h1>
              <div className="h-1 w-20 bg-indigo-500 mt-6" />
              {dispatch.excerpt && (
                <p className="mt-8 text-neutral-400 text-lg leading-relaxed italic">
                  {dispatch.excerpt}
                </p>
              )}
            </header>

            <article className="prose prose-invert max-w-none text-neutral-300 leading-relaxed space-y-6">
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
                      <code className="bg-neutral-900 border border-neutral-850 px-1.5 py-0.5 rounded font-mono text-xs text-white" {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {dispatch.content}
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
