import Header from '../components/Header';
import Footer from '../components/Footer';

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
            <p className="text-xl md:text-2xl text-neutral-400 font-bold max-w-2xl leading-relaxed">
              Deterministic governance for agentic AI systems in high-stakes environments.
            </p>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Core Capability</h2>
              <p className="text-neutral-200 font-bold leading-relaxed">
                <strong>Anchor</strong> is a federated runtime governance engine that mathematically enforces intent, 
                provides cryptographic audit trails, and satisfies multiple regulatory frameworks from a single decision record.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Key Architectural Guarantees</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-200 font-bold">
                <li>Raw prompt/response data never leaves your infrastructure (Sovereign Relay model)</li>
                <li>Deterministic intent enforcement instead of probabilistic guardrails</li>
                <li>Sub-second governance overhead suitable for high-frequency environments</li>
                <li>Full support for on-premise / air-gapped deployments</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Who This Is For</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-200 font-bold">
                <li>High-frequency trading firms and quant funds</li>
                <li>Investment banks and asset managers modernizing with agentic systems</li>
                <li>Fintech platforms scaling autonomous agents under regulatory scrutiny</li>
                <li>Sovereign wealth funds and large institutions building private AI infrastructure</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Current Status</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-200 font-bold">
                <li>Technical preprint published on Zenodo (April 2026)</li>
                <li>Active contributor in FINOS AI Risk & Controls Working Group</li>
                <li>Production-grade Python package with runtime interceptors</li>
                <li>Early enterprise pilots in progress</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <a 
              href="mailto:tan@animuslab.dev?subject=Anchor%20Institutional%20Deep-Dive"
              className="inline-block bg-white text-black px-8 py-4 font-bold hover:bg-neutral-200 transition-colors rounded-sm"
            >
              Request Private Demo / Technical Deep-Dive
            </a>
            <a 
              href="https://zenodo.org/records/19734724"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-800 px-8 py-4 font-bold text-white hover:bg-white/5 transition-colors rounded-sm"
            >
              Read the Preprint
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
