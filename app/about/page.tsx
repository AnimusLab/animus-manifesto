'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col selection:bg-neutral-800 selection:text-white">
      <Header />

      {/* HEADER SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            About AnimusLab
          </h1>

          <p className="text-base md:text-lg text-[#e5e5e5] font-light leading-relaxed">
            An independent systems research and engineering institution.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Our Mission
            </h2>

            <p className="text-lg text-[#a3a3a3] leading-relaxed font-light italic">
              Build systems that remain truthful, auditable, governable, and understandable under scrutiny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                Our Thesis
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                As intelligent systems become more capable, the primary challenge shifts from capability to governance. We explore architectural alternatives grounded in determinism, auditability, and control.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                Our Approach
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                We do not optimize for speed or scale. We optimize for clarity and truth. We build systems whose behavior is mathematically verifiable, not merely probable. We believe systems can be built differently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL IDENTITY SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] bg-[#0a0a0a]/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            What We Are
          </h2>

          <div className="grid grid-cols-1 gap-8">
            <div className="border border-[#262626] p-8 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Research Institution
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                We publish rigorously. Papers, preprints, technical essays. Transparency is non-negotiable. Our research stands on the six invariants that define us.
              </p>
            </div>

            <div className="border border-[#262626] p-8 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Engineering Institution
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                We build working systems. ANIMUS, Anchor, and Shadow Watch are not proofs-of-concept. They are infrastructure. Every system is derived from the six invariants.
              </p>
            </div>

            <div className="border border-[#262626] p-8 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Principle-Driven
              </h3>
              <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
                The systems do not define the principles. The principles define the systems. If the foundation is wrong, we rebuild. Adoption without integrity is not success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE'RE NOT SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            What We Are Not
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">
                Not a Company
              </h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed font-light">
                We do not optimize for venture funding, user adoption, or market share. We optimize for research credibility and institutional integrity.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">
                Not a Lab with Disconnected Projects
              </h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed font-light">
                Every system we build stands on the same six invariants. The programs are coherent. Remove one principle and the entire structure changes.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">
                Not a Consulting Firm
              </h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed font-light">
                We do not build custom solutions on demand. We build foundational infrastructure that demonstrates our principles work in practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS METRICS SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626] bg-[#0a0a0a]/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            What Success Looks Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-[#262626] pb-3">
                Not
              </h3>
              <ul className="space-y-3 text-base text-[#a3a3a3] font-light">
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Venture funding</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>User adoption metrics</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Market share</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Short-term growth</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-[#262626] pb-3">
                Instead
              </h3>
              <ul className="space-y-3 text-base text-[#a3a3a3] font-light">
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Published research that influences how systems are built</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Open-source infrastructure demonstrating principles work</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Institutional credibility as thinking partner on governance</span>
                </li>
                <li className="flex gap-3">
                  <span>•</span>
                  <span>Long-term research impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b border-[#262626]">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>

          <p className="text-base text-[#a3a3a3] leading-relaxed font-light">
            Research inquiries, collaboration discussions, or institutional feedback.
          </p>

          <div className="space-y-6 pt-6">
            <div>
              <p className="text-sm text-[#a3a3a3] uppercase tracking-wider font-semibold mb-2">
                Email
              </p>
              <a
                href="mailto:contact@animuslab.dev"
                className="text-base text-white hover:opacity-70 transition-opacity"
              >
                contact@animuslab.dev
              </a>
            </div>

            <div>
              <p className="text-sm text-[#a3a3a3] uppercase tracking-wider font-semibold mb-2">
                GitHub
              </p>
              <a
                href="https://github.com/AnimusLab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white hover:opacity-70 transition-opacity"
              >
                github.com/AnimusLab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAVIGATION */}
      <section className="px-6 md:px-12 py-12 border-t border-[#262626]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-block text-sm font-semibold text-white tracking-wider hover:opacity-70 transition-opacity"
          >
            Back to AnimusLab →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
