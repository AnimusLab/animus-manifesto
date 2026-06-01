'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ResearchPage() {

  const publications = [
    {
      id: 1,
      title: 'Truth Over Optics: A Preprint on Deterministic Evaluation and Auditability',
      authors: 'AnimusLab Research',
      date: 'April 2026',
      status: 'Published Preprint',
      doi: '10.5281/zenodo.anchor-preprint',
      zenodoUrl: 'https://zenodo.org/records/anchor-preprint',
      abstract: 'This preprint explores the architectural foundations of deterministic governance systems. We demonstrate that systems built on symbolic logic and constitutional constraints can achieve auditability without sacrificing performance, reaching sub-millisecond policy evaluation.',
      metrics: {
        views: 106,
        downloads: 76,
        citations: 3
      },
      keywords: ['Governance', 'Auditability', 'Determinism', 'Constitutional Systems']
    }
  ];

  const researchNotes = [
    {
      title: 'Neuro-Symbolic Reasoning Without Probabilistic Safety Layers',
      category: 'ANIMUS Research',
      date: 'March 2026',
      abstract: 'A deep dive into the architectural choices that allow ANIMUS to reason deterministically while maintaining semantic grounding across domains. We explore how neuro-modulated reasoning can be implemented without confidence scores.',
      slug: 'animus-reasoning'
    },
    {
      title: 'Deterministic Governance at Scale: Anchor v5.0 Architecture',
      category: 'Anchor Infrastructure',
      date: 'February 2026',
      abstract: 'Technical documentation of Anchor\'s AST scanning, policy evaluation, and WebAssembly sandbox architecture. How constitutional governance can be deployed with sub-millisecond latency.',
      slug: 'anchor-v5-architecture'
    },
    {
      title: 'Cryptographic Audit Trails for Behavioral Verification',
      category: 'Shadow Watch',
      date: 'January 2026',
      abstract: 'Explores zero-knowledge session trust and immutable telemetry. How Shadow Watch captures dense audit traces on-premise while reporting only sparse verification digests.',
      slug: 'shadow-watch-cryptography'
    },
    {
      title: 'Domain-Agnostic Reasoning: Why One Architecture Should Work Everywhere',
      category: 'Institutional Research',
      date: 'December 2025',
      abstract: 'A theoretical exploration of domain-agnostic reasoning principles. We argue that if a reasoning system requires domain specialization, it is not fundamental. ANIMUS case studies.',
      slug: 'domain-agnostic-reasoning'
    },
    {
      title: 'The Cost of Probabilistic Reasoning: An Institutional Perspective',
      category: 'Institutional Research',
      date: 'November 2025',
      abstract: 'Analysis of why probabilistic safety layers cannot survive institutional scrutiny. A comparative study of confidence scores, post-hoc explanations, and deterministic constraints.',
      slug: 'probabilistic-cost'
    },
    {
      title: 'Constitutional Constraints as a Governance Primitive',
      category: 'Anchor Research',
      date: 'October 2025',
      abstract: 'Explores the theoretical foundations of constitutional governance. How explicit constraints create clarity and prevent capability drift.',
      slug: 'constitutional-constraints'
    }
  ];

  const metrics = {
    totalPublications: 1,
    totalResearchNotes: 6,
    monthlyReaders: 186,
    totalDownloads: 76,
    activeResearchers: 1
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col selection:bg-neutral-800 selection:text-white">
      <Header />

      {/* HEADER SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Research & Publications
          </h1>

          <p className="text-base md:text-lg text-[#e5e5e5] font-light leading-relaxed">
            Rigorously published research on governance, reasoning, and observability.
          </p>

          <p className="text-sm md:text-base text-[#a3a3a3] leading-relaxed">
            All AnimusLab research is published openly. Papers, technical notes, and preprints. Transparency is non-negotiable.
          </p>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="px-6 md:px-12 py-16 md:py-20 border-b border-[#262626] bg-[#0a0a0a]/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">{metrics.totalPublications}</p>
              <p className="text-xs text-[#a3a3a3] uppercase tracking-wider">Published Papers</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">{metrics.totalResearchNotes}</p>
              <p className="text-xs text-[#a3a3a3] uppercase tracking-wider">Research Notes</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">{metrics.monthlyReaders}</p>
              <p className="text-xs text-[#a3a3a3] uppercase tracking-wider">Monthly Readers</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">{metrics.totalDownloads}</p>
              <p className="text-xs text-[#a3a3a3] uppercase tracking-wider">Total Downloads</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">{metrics.activeResearchers}</p>
              <p className="text-xs text-[#a3a3a3] uppercase tracking-wider">Active Researcher</p>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Published Preprints
          </h2>

          <div className="space-y-8">
            {publications.map((pub) => (
              <div key={pub.id} className="border border-[#262626] p-8 space-y-6">
                {/* Publication Header */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#a3a3a3] uppercase tracking-widest">
                    {pub.status} • {pub.date}
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-[#a3a3a3]">
                    {pub.authors}
                  </p>
                </div>

                {/* Abstract */}
                <p className="text-base text-[#e5e5e5] leading-relaxed font-light">
                  {pub.abstract}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-8 text-sm font-mono text-[#a3a3a3]">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold">{pub.metrics.views}</span>
                    <span>views</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold">{pub.metrics.downloads}</span>
                    <span>downloads</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold">{pub.metrics.citations}</span>
                    <span>citations</span>
                  </div>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#262626]/50">
                  {pub.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs px-2 py-1 bg-[#0a0a0a] border border-[#262626] text-[#a3a3a3] rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-[#262626]/50">
                  <a
                    href={pub.zenodoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:opacity-70 transition-opacity"
                  >
                    Zenodo Archive →
                  </a>
                  <span className="text-[#262626]">|</span>
                  <span className="text-xs text-[#a3a3a3] font-mono">
                    DOI: {pub.doi}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH NOTES SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] bg-[#0a0a0a]/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technical Research Notes
          </h2>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            Deep dives into specific technical domains, architectural decisions, and theoretical foundations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchNotes.map((note) => (
              <div
                key={note.slug}
                className="border border-[#262626] p-6 space-y-4 hover:border-[#a3a3a3]/30 transition-colors"
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-[#a3a3a3] uppercase tracking-widest">
                    {note.category} • {note.date}
                  </p>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {note.title}
                  </h3>
                </div>

                <p className="text-sm text-[#e5e5e5] leading-relaxed font-light">
                  {note.abstract}
                </p>

                <div className="pt-4 border-t border-[#262626]/50">
                  <a
                    href={`#${note.slug}`}
                    className="text-sm font-semibold text-[#a3a3a3] hover:text-white transition-colors"
                  >
                    Read Note →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH PHILOSOPHY SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Research as Institutional Practice
          </h2>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            At AnimusLab, research is not a marketing function. It is how we think. Every system we build, every decision we make, every principle we hold is documented, published, and open to scrutiny.
          </p>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            We publish preprints, not polished papers. We share technical notes, not press releases. We believe that transparency in research is how institutions earn credibility.
          </p>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            If our research is flawed, we want to know. If our principles are wrong, we want to hear it. That is the only way an institution learns.
          </p>

          <div className="pt-8 border-t border-[#262626]">
            <Link
              href="/"
              className="inline-block text-sm font-semibold text-white tracking-wider hover:opacity-70 transition-opacity"
            >
              Back to AnimusLab →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
