import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const notes = getContent("notes");
  const note = notes.find((n) => n.slug === slug);
  if (!note) return {};

  return {
    title: `${note.title} | AnimusLab Research`,
    description: note.excerpt,
    alternates: {
      canonical: `/research/${slug}`,
    },
  };
}

export default async function ResearchNotePage({
  params,
}: Props) {
  const { slug } = await params;

  const notes = getContent("notes");

  const note = notes.find(
    (n) => n.slug === slug
  );

  if (!note) {
    notFound();
  }

  return (
    <main className="max-w-[1600px] mx-auto px-8 py-24">

      <section className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] 2xl:grid-cols-[240px_1fr_120px] gap-8 lg:gap-16">

        <aside className="pr-2">

          <div className="border-t border-b border-neutral-800 py-4 space-y-4 sticky top-24">
            <div>
              <p className="institution-meta-label">
                Note ID
              </p>

              <p className="text-white mt-1 text-sm font-mono">
                {note.id}
              </p>
            </div>
            <div>
              <p className="institution-meta-label">
                Published
              </p>

              <p className="text-white mt-1 text-sm font-mono">
                {note.date}
              </p>
            </div>

            <div>
              <p className="institution-meta-label">
                Author
              </p>

              <p className="text-white mt-1 text-sm">
                {note.author || "AnimusLab"}
              </p>
            </div>

            <div>
              <p className="institution-meta-label">
                Division
              </p>

              <p className="text-white mt-1 text-sm">
                Research Division
              </p>
            </div>

            {(note.slug.includes("anchor") || note.tags?.some(tag => tag.toLowerCase().includes("anchor") || tag.toLowerCase().includes("governance"))) && (
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

            {note.tags?.length > 0 && (
              <div>
                <p className="institution-meta-label">
                  Tags
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {note.tags.map((tag) => (
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

          </div>

        </aside>

        <div className="w-full min-w-0">

          <header className="mb-20 border-b border-neutral-900 pb-12">

            <p className="institution-label">
              Research Note
            </p>

            <h1 className="institution-title">
              {note.title}
            </h1>

            <div className="institution-accent" />

            <div className="mt-10">
              <p className="text-white text-xl font-medium">
                {note.author || "AnimusLab"}
              </p>

              <p className="text-neutral-500 mt-1">
                Research Division
              </p>
            </div>

            {note.excerpt && (
              <p className="institution-abstract mt-12">
                {note.excerpt}
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
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {note.content}
            </ReactMarkdown>
          </article>

        </div>

        {/* Right offset column for perfect centering on desktop */}
        <div className="hidden 2xl:block" />

      </section>

    </main>
  );
}