import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import Link from "next/link";
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

export default async function PaperPage({
  params,
}: Props) {
  const { slug } = await params;

  const papers = getContent("papers");

  const paper = papers.find(
    (p) => p.slug === slug
  );

  if (!paper) {
    notFound();
  }

  return (
    <main className="max-w-[1600px] mx-auto px-8 py-24">

      <section className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] 2xl:grid-cols-[240px_1fr_120px] gap-8 lg:gap-16">

        <aside className="pr-2">

          <div className="border-t border-b border-neutral-800 py-4 space-y-4 sticky top-24">

            <div>
              <p className="institution-meta-label">
                Publication ID
              </p>

              <p className="text-white mt-1 text-sm font-mono">
                {paper.id}
              </p>
            </div>

            <div>
              <p className="institution-meta-label">
                Published
              </p>

              <p className="text-white mt-1 text-sm font-mono">
                {paper.date}
              </p>
            </div>

            {paper.updated && (
              <div>
                <p className="institution-meta-label">
                  Updated
                </p>

                <p className="text-white mt-1 text-sm font-mono">
                  {paper.updated}
                </p>
              </div>
            )}

            {paper.version && (
              <div>
                <p className="institution-meta-label">
                  Version
                </p>

                <p className="text-white mt-1 text-sm font-mono">
                  v{paper.version}
                </p>
              </div>
            )}

            {(paper.slug.includes("anchor") || paper.tags.some(tag => tag.toLowerCase().includes("anchor") || tag.toLowerCase().includes("governance"))) && (
              <div>
                <p className="institution-meta-label">
                  Program
                </p>

                <Link
                  href="/anchor"
                  className="text-indigo-400 hover:text-indigo-300 font-mono text-sm block mt-1 transition-colors"
                >
                  Anchor
                </Link>
              </div>
            )}

            <div>
              <p className="institution-meta-label">
                Reading Time
              </p>

              <p className="text-white mt-1 text-sm">
                {paper.readingTime} min
              </p>
            </div>

            <div>
              <p className="institution-meta-label">
                Author
              </p>

              <p className="text-white mt-1 text-sm">
                {paper.author}
              </p>
            </div>

            <div>
              <p className="institution-meta-label">
                Category
              </p>

              <p className="text-white mt-1 text-sm">
                {paper.category}
              </p>
            </div>

            {paper.doi && (
              <div>
                <p className="institution-meta-label">
                  DOI
                </p>

                <a
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors break-all text-xs font-mono mt-1 block"
                >
                  {paper.doi}
                </a>
              </div>
            )}

            {paper.tags.length > 0 && (
              <div>
                <p className="institution-meta-label">
                  Topics
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-neutral-800 px-2 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="institution-meta-label">
                Resources
              </p>

              <div className="flex flex-col gap-2 mt-2">

                {paper.pdf && (
                  <a
                    href={paper.pdf}
                    target="_blank"
                    className="institution-link text-xs font-mono"
                  >
                    Download PDF
                  </a>
                )}

                {paper.github && (
                  <a
                    href={paper.github}
                    target="_blank"
                    className="institution-link text-xs font-mono"
                  >
                    Source Repository
                  </a>
                )}

              </div>
            </div>

          </div>

        </aside>

        <div className="w-full min-w-0">

          <header className="mb-20 border-b border-neutral-900 pb-12">

            <p className="institution-label">
              {paper.category || "Research Paper"}
            </p>

            <h1 className="institution-title">
              {paper.title}
            </h1>

            <div className="institution-accent" />

            <div className="mt-10">
              <p className="text-white text-xl font-medium">
                {paper.author}
              </p>

              <p className="text-neutral-500 mt-1">
                Founder · AnimusLab Research
              </p>
            </div>

            {paper.excerpt && (
              <p className="institution-abstract mt-12">
                {paper.excerpt}
              </p>
            )}
          </header>

          <article className="institution-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                pre({ children }) {
                  return <>{children}</>;
                },
                p({ node, children, ...props }) {
                  const firstChild = Array.isArray(children) ? children[0] : children;
                  const isMath = typeof firstChild === 'string' && firstChild.trim().startsWith('$$');
                  if (isMath) {
                    return (
                      <div className="w-full overflow-x-auto no-scrollbar my-8 py-4 px-6 text-center bg-[#070707]/60 border border-neutral-900/60 rounded font-mono text-xs md:text-sm text-indigo-300/90 whitespace-nowrap">
                        {children}
                      </div>
                    );
                  }
                  return <p {...props}>{children}</p>;
                },
                code({ node, className, children, ...props }) {
                  const matchArchitecture = /language-diagram-architecture/.exec(className || '');
                  const matchRelay = /language-diagram-relay/.exec(className || '');
                  const matchSandbox = /language-diagram-sandbox/.exec(className || '');
                  const matchChain = /language-diagram-chain/.exec(className || '');
                  const matchMermaid = /language-mermaid/.exec(className || '');

                  if (matchArchitecture) return <ArchitectureDiagram />;
                  if (matchRelay) return <SovereignRelayDiagram />;
                  if (matchSandbox) return <DiamondCageDiagram />;
                  if (matchChain) return <DecisionAuditChainDiagram />;

                  if (matchMermaid) {
                    return (
                      <div className="border border-neutral-900 bg-[#080808]/20 rounded-lg p-6 my-8">
                        <MermaidDiagram
                          chart={String(children).replace(/\n$/, '')}
                          label="MERMAID_CHART"
                        />
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
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {paper.content}
            </ReactMarkdown>
          </article>

          <section className="mt-24 pt-12 border-t border-neutral-800">

            <p className="institution-meta-label mb-6">
              Citation
            </p>

            <div className="text-neutral-300 leading-8 text-sm font-mono">
              {paper.author}. ({paper.date}).<br />
              <span className="italic text-white">
                {paper.title}
              </span>.<br />
              AnimusLab Research.
              <br />
              DOI: {paper.doi}
            </div>

          </section>

        </div>

        {/* Right offset column for perfect centering on desktop */}
        <div className="hidden 2xl:block" />

      </section>

    </main>
  );
}

