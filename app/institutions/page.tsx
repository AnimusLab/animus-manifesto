import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'For Institutions | AnimusLab',
  alternates: {
    canonical: '/institutions',
  },
};

export default function InstitutionsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 bg-indigo-950/50 border border-indigo-900/50 text-indigo-400 text-sm font-mono tracking-widest mb-6 font-bold">
              FOR INSTITUTIONAL PARTNERS
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8">
              Sovereign Intelligence<br />Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
              Deterministic governance for agentic AI in high-stakes environments.
            </p>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Verification Over Probabilistic Trust</h2>
              <p className="text-neutral-300 leading-relaxed max-w-3xl">
                As financial institutions, sovereign funds, and regulated enterprises increasingly deploy autonomous agents, the need for verifiable, auditable, and cryptographically enforceable governance has become critical. Anchor provides a production-ready runtime governance layer that gives institutions mathematical guarantees instead of probabilistic trust.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Key Capabilities</h3>
              <ul className="space-y-4 font-mono text-sm text-neutral-400">
                <li className="flex gap-3">
                  <span className="text-indigo-400 font-bold">//</span>
                  <span><strong className="text-white">Sovereign Relay Architecture</strong> — Raw prompts, responses, and agent actions never leave your infrastructure.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 font-bold">//</span>
                  <span><strong className="text-white">Cryptographic Decision Audit Chain</strong> — Tamper-evident, hash-chained record of every decision and approval.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 font-bold">//</span>
                  <span><strong className="text-white">Regulatory Polyglottism</strong> — One unified record satisfies EU AI Act, RBI, SEC, CFPA, FINOS, and other frameworks.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 font-bold">//</span>
                  <span><strong className="text-white">On-Prem / Air-Gapped Support</strong> — Full deployment flexibility for the most sensitive environments.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400 font-bold">//</span>
                  <span><strong className="text-white">Sub-second Enforcement</strong> — Suitable for high-frequency trading and real-time systems.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 border-t border-neutral-900 pt-10">
              <h3 className="text-xl font-semibold text-white">Who This Is For</h3>
              <ul className="space-y-3 font-mono text-sm text-neutral-400">
                <li className="flex gap-3">
                  <span className="text-neutral-600 font-bold">-</span>
                  <span>Tier-1 Investment Banks and Asset Managers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600 font-bold">-</span>
                  <span>Quantitative Trading Funds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600 font-bold">-</span>
                  <span>Central Banks and Sovereign Wealth Funds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600 font-bold">-</span>
                  <span>Regulated Fintech Platforms scaling agentic workflows</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 border-t border-neutral-900 pt-10">
              <h3 className="text-xl font-semibold text-white">Current Status (June 2026)</h3>
              <ul className="space-y-3 font-mono text-sm text-neutral-400">
                <li className="flex gap-3">
                  <span className="text-neutral-600 font-bold">-</span>
                  <span>Technical preprint published on Zenodo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600 font-bold">-</span>
                  <span>Open-source Python package available (pip install anchor-governance)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600 font-bold">-</span>
                  <span>Active institutional outreach and technical evaluation program</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 p-8 md:p-10 border border-indigo-950 bg-[#07080c]/30 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_20px_rgba(99,102,241,0.02)]">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono font-bold block">
                Direct Engagement
              </span>
              <h3 className="text-xl md:text-2xl text-white font-bold max-w-xl">
                Interested in a governance assessment or research collaboration?
              </h3>
              <p className="text-sm text-neutral-400 max-w-xl">
                Reach out directly to arrange a private technical reference walkthrough, governance review, or pilot.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href="mailto:tan@animuslab.dev?subject=Anchor%20Institutional%20Review"
                className="inline-block bg-white text-black hover:bg-neutral-100 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] px-6 py-3.5 text-sm font-bold transition-all rounded-sm shadow-lg shadow-black/20 text-center whitespace-nowrap"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
