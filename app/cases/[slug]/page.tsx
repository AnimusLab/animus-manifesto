import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import YouTubePlayer from "../../components/YouTubePlayer";
import MermaidDiagram from "../../components/MermaidDiagram";
import ExportPDFButton from "../../components/ExportPDFButton";

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

      <main className="flex-grow max-w-[1600px] mx-auto w-full px-8 py-24 print:py-8">
        <div className="mb-10 print:hidden">
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

              <div className="pt-6 border-t border-neutral-900 space-y-4 print:hidden">
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  These analyses demonstrate why runtime policy verification is a foundational requirement for high-reliability systems.
                </p>
                <a
                  href="mailto:tan@animuslab.dev?subject=Institutional%20Review%20Inquiry"
                  className="block text-center bg-white/5 border border-neutral-850 hover:bg-white/10 hover:border-neutral-700 text-white px-4 py-2.5 text-xs font-mono font-bold transition-all rounded-sm mb-2"
                >
                  Request Institutional Review
                </a>
                <ExportPDFButton />
              </div>
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
                    const matchMermaid = /language-mermaid/.exec(className || '');
                    if (matchMermaid) {
                      return (
                        <div className="my-8 print:break-inside-avoid">
                          <MermaidDiagram chart={String(children).trim()} label="GOVERNANCE_FLOW" />
                        </div>
                      );
                    }
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
                  blockquote({ children }) {
                    const childrenArray = React.Children.toArray(children);
                    let alertType: 'note' | 'important' | 'warning' | 'tip' | 'caution' | null = null;
                    let cleanChildren = children;

                    const firstChild = childrenArray[0];
                    if (React.isValidElement(firstChild)) {
                      const grandChildren = React.Children.toArray((firstChild.props as any).children);
                      const firstGrandChild = grandChildren[0];
                      
                      if (typeof firstGrandChild === 'string') {
                        const match = firstGrandChild.trim().match(/^\[!(IMPORTANT|NOTE|WARNING|TIP|CAUTION)\]/i);
                        if (match) {
                          alertType = match[1].toLowerCase() as any;
                          const cleanText = firstGrandChild.replace(/^\[!(IMPORTANT|NOTE|WARNING|TIP|CAUTION)\]\s*/i, '');
                          const updatedGrandChildren = [cleanText, ...grandChildren.slice(1)];
                          
                          cleanChildren = React.Children.map(children, (child, idx) => {
                            if (idx === 0 && React.isValidElement(child)) {
                              return React.cloneElement(child, child.props as any, updatedGrandChildren);
                            }
                            return child;
                          });
                        }
                      }
                    } else if (typeof firstChild === 'string') {
                      const match = firstChild.trim().match(/^\[!(IMPORTANT|NOTE|WARNING|TIP|CAUTION)\]/i);
                      if (match) {
                        alertType = match[1].toLowerCase() as any;
                        cleanChildren = firstChild.replace(/^\[!(IMPORTANT|NOTE|WARNING|TIP|CAUTION)\]\s*/i, '');
                      }
                    }

                    if (alertType) {
                      let borderClass = 'border-l-4 border-indigo-500 bg-indigo-950/10 text-neutral-200';
                      let label = 'IMPORTANT';
                      let iconColor = 'text-indigo-400';
                      
                      if (alertType === 'note') {
                        borderClass = 'border-l-4 border-neutral-700 bg-neutral-900/20 text-neutral-300';
                        label = 'NOTE';
                        iconColor = 'text-neutral-400';
                      } else if (alertType === 'warning') {
                        borderClass = 'border-l-4 border-amber-500 bg-amber-950/10 text-neutral-200';
                        label = 'WARNING';
                        iconColor = 'text-amber-400';
                      } else if (alertType === 'caution') {
                        borderClass = 'border-l-4 border-red-500 bg-red-950/10 text-neutral-200';
                        label = 'CAUTION';
                        iconColor = 'text-red-400';
                      } else if (alertType === 'tip') {
                        borderClass = 'border-l-4 border-emerald-500 bg-emerald-950/10 text-neutral-200';
                        label = 'TIP';
                        iconColor = 'text-emerald-400';
                      }

                      return (
                        <div className={`my-6 p-5 rounded-r border-t border-r border-b border-neutral-900/40 ${borderClass} font-light leading-relaxed print:break-inside-avoid`}>
                          <div className={`text-[10px] font-mono font-bold tracking-wider mb-2 ${iconColor}`}>
                            // {label}
                          </div>
                          <div className="text-sm md:text-base leading-relaxed italic">{cleanChildren}</div>
                        </div>
                      );
                    }

                    return (
                      <blockquote className="border-l-2 border-neutral-800 pl-4 italic my-6 text-neutral-400 print:break-inside-avoid">
                        {children}
                      </blockquote>
                    );
                  },
                  p({ children }) {
                    const childrenArray = React.Children.toArray(children);
                    
                    // Check if it contains any video links
                    const hasLinks = childrenArray.some(child => {
                      if (React.isValidElement(child) && child.props && (child.props as any).href) {
                        const href = (child.props as any).href || '';
                        return href.includes('channel=') || href.includes('title=');
                      }
                      return false;
                    });

                    // Check if all non-empty children are video links
                    const isVideoGrid = hasLinks && childrenArray.every(child => {
                      if (typeof child === 'string') {
                        return !child.trim();
                      }
                      if (React.isValidElement(child)) {
                        const href = (child.props as any)?.href || '';
                        return href.includes('channel=') || href.includes('title=');
                      }
                      return false;
                    });

                    if (isVideoGrid) {
                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                          {childrenArray.filter(child => {
                            if (typeof child === 'string' && !child.trim()) return false;
                            return true;
                          })}
                        </div>
                      );
                    }

                    return <p className="mb-6 leading-relaxed font-light text-neutral-300">{children}</p>;
                  },
                  a({ node, href, children, ...props }) {
                    if (!href) {
                      return <a {...props}>{children}</a>;
                    }

                    const isVideo = href.includes('channel=') || href.includes('title=');
                    if (isVideo) {
                      try {
                        const url = new URL(href);
                        const channel = url.searchParams.get('channel') || '';
                        const title = url.searchParams.get('title') || '';
                        const notes = url.searchParams.get('notes') || '';
                        
                        let videoId = '';
                        if (href.includes('youtube.com') || href.includes('youtu.be')) {
                          if (url.hostname.includes('youtu.be')) {
                            videoId = url.pathname.slice(1);
                          } else if (href.includes('/shorts/')) {
                            const parts = url.pathname.split('/');
                            videoId = parts[parts.length - 1];
                          } else {
                            videoId = url.searchParams.get('v') || '';
                          }
                        }

                        return (
                          <YouTubePlayer
                            url={href}
                            videoId={videoId || undefined}
                            channel={channel}
                            title={title}
                            notes={notes}
                          />
                        );
                      } catch (e) {
                        console.error('Error parsing video URL in custom renderer:', e);
                      }
                    }

                    return (
                      <a href={href} className="text-indigo-400 hover:text-indigo-300 underline" target="_blank" rel="noopener noreferrer" {...props}>
                        {children}
                      </a>
                    );
                  }
                }}
              >
                {item.content}
              </ReactMarkdown>
            </article>

            {/* Primary CTA at the bottom */}
            <div className="mt-16 p-8 border border-neutral-900 bg-[#07080c]/30 rounded-sm space-y-5 print:hidden">
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                Interested in an institutional governance assessment?
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                Schedule a technical review to evaluate your system's runtime invariants, policy compliance requirements, and audit verification trees.
              </p>
              <a 
                href={`mailto:tan@animuslab.dev?subject=Case%20${item.id}%20-%20Governance%20Assessment`} 
                className="inline-block bg-white text-black hover:bg-neutral-200 px-6 py-3 text-xs font-mono font-bold transition-colors rounded-sm"
              >
                Request Governance Assessment →
              </a>
            </div>
          </div>

          <div className="hidden 2xl:block" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
