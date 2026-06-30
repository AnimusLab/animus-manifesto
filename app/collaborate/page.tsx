import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Collaborate | AnimusLab',
  alternates: {
    canonical: '/collaborate',
  },
};

export default function CollaboratePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="px-6 md:px-12 py-32 border-b border-neutral-900 bg-[#070707]/20">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 mb-6 font-mono">
              Engagements &amp; Research Partnerships
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight">
              Collaborate with AnimusLab
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-neutral-400 leading-relaxed">
              We are an independent AI research lab. We actively collaborate with academic labs, regulatory committees, industry pilot programs, and open-source contributors to build verifiable, deterministic safety infrastructure.
            </p>
          </div>
        </section>

        {/* COLLABORATION TRACKS */}
        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-3xl font-semibold text-white">Collaboration Tracks</h2>

            <div className="grid md:grid-cols-2 gap-12 font-mono text-sm">
              <Link 
                href="/collaborate/academic" 
                className="group border border-neutral-900 p-8 hover:border-neutral-700 transition-all duration-300 bg-neutral-950/20 block"
              >
                <span className="text-xs text-indigo-400 font-bold tracking-widest block mb-4 uppercase">
                  Track 01 // Academic Research
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">Academic Collaborations</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  We partner with computer science, cryptography, and artificial intelligence departments to explore neuro-symbolic reasoning boundaries, formal verification of runtime guardrails, and compiler optimizations.
                </p>
                <span className="text-white font-bold group-hover:text-indigo-400 transition-colors text-xs">Read More →</span>
              </Link>

              <Link 
                href="/collaborate/regulatory" 
                className="group border border-neutral-900 p-8 hover:border-neutral-700 transition-all duration-300 bg-neutral-950/20 block"
              >
                <span className="text-xs text-indigo-400 font-bold tracking-widest block mb-4 uppercase">
                  Track 02 // Policy &amp; Regulatory
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">Regulatory Discussions</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  We contribute structured feedback to central banking, financial stability, and sovereign AI consultation bodies (like the Financial Stability Board) regarding deterministic policy enforcement and cryptographic auditing.
                </p>
                <span className="text-white font-bold group-hover:text-indigo-400 transition-colors text-xs">Read More →</span>
              </Link>

              <Link 
                href="/collaborate/pilots" 
                className="group border border-neutral-900 p-8 hover:border-neutral-700 transition-all duration-300 bg-neutral-950/20 block"
              >
                <span className="text-xs text-indigo-400 font-bold tracking-widest block mb-4 uppercase">
                  Track 03 // Industry Pilots
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">Enterprise Pilots</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  We deploy Anchor and Canon in high-assurance financial, security, and medical agentic pipelines to validate empirical latency, security bounds, and audit trail resilience.
                </p>
                <span className="text-white font-bold group-hover:text-indigo-400 transition-colors text-xs">Read More →</span>
              </Link>

              <Link 
                href="/collaborate/contributors" 
                className="group border border-neutral-900 p-8 hover:border-neutral-700 transition-all duration-300 bg-neutral-950/20 block"
              >
                <span className="text-xs text-indigo-400 font-bold tracking-widest block mb-4 uppercase">
                  Track 04 // Open Source
                </span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">Contributors</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  AnimusLab infrastructure systems are Apache-2.0 licensed. We welcome pull requests, new source adapters, compiler improvements, and policy definitions from the engineering community.
                </p>
                <span className="text-white font-bold group-hover:text-indigo-400 transition-colors text-xs">Read More →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="px-6 md:px-12 py-24 bg-[#070707]/10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
            <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto">
              If you are interested in researching, testing, or integrating deterministic governance systems, contact us directly.
            </p>
            <div>
              <a
                href="mailto:tan@animuslab.dev?subject=AnimusLab%20-%20Collaboration%20Inquiry"
                className="bg-white text-black hover:bg-neutral-200 px-8 py-4 text-sm font-bold transition-all rounded-sm inline-block shadow-md"
              >
                Inquire via Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
