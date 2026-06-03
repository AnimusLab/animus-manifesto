interface InstitutionSidebarProps {
  id: string;
  author?: string;
  date?: string;
  doi?: string;
  pdf?: string;
  github?: string;
  tags?: string[];
}

export default function InstitutionSidebar({
  id,
  author,
  date,
  doi,
  pdf,
  github,
  tags,
}: InstitutionSidebarProps) {
  return (
    <aside className="w-full lg:w-[260px] shrink-0">

      <div className="sticky top-32">

        <p className="text-xs tracking-[0.25em] text-neutral-600 uppercase mb-8">
          {id}
        </p>

        <div className="space-y-8">

          {author && (
            <div>
              <p className="institution-meta-label">
                Author
              </p>

              <p className="text-white">
                {author}
              </p>
            </div>
          )}

          {date && (
            <div>
              <p className="institution-meta-label">
                Published
              </p>

              <p className="text-white">
                {date}
              </p>
            </div>
          )}

          {doi && (
            <div>
              <p className="institution-meta-label">
                DOI
              </p>

              <p className="text-sm break-all text-neutral-300">
                {doi}
              </p>
            </div>
          )}

          {tags && tags.length > 0 && (
            <div>
              <p className="institution-meta-label">
                Topics
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-neutral-800 px-2 py-1 text-xs text-neutral-400"
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

            <div className="flex flex-col gap-3 mt-3">

              {pdf && (
                <a
                  href={pdf}
                  target="_blank"
                  className="institution-link"
                >
                  PDF
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  className="institution-link"
                >
                  GitHub
                </a>
              )}

            </div>
          </div>

        </div>

      </div>

    </aside>
  );
}