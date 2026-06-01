'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const focusAreas = [
    { name: 'Governance Architectures', desc: 'Sovereign multi-tier persistence topologies bridging on-premise security planes with federated metadata ledgers.' },
    { name: 'Agent Identity Systems', desc: 'Session fingerprinting and cryptographically Tossed Headers ensuring strict identity lineage resolution across executions.' },
    { name: 'Constitutional Authorization', desc: 'Declarative policy trees mapping caller context variables (clearance, jurisdiction) straight to dynamic capabilities.' },
    { name: 'Execution Control Frameworks', desc: 'Abstract Syntax Tree (AST) scanning engines halting dangerous Dynamic Import loops before compilations initialize.' },
    { name: 'AI Observability Systems', desc: 'Tamper-evident sequence logging detailing exact execution traces for downstream automated audit compliance.' },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-neutral-300 font-sans flex flex-col selection:bg-neutral-800 selection:text-white antialiased">
      {/* Shared Header */}
      <Header />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-neutral-900 bg-[#070707]/30">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider font-mono">// About the Institution</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            About AnimusLab
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-xl font-light">
            An independent software and research initiative exploring the systems boundaries of AI capability and constitutional control.
          </p>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-20 w-full flex-1">
        
        {/* ── SECTION: MISSION ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// Core_Directives</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900 pb-2">
            Why AnimusLab Exists
          </h3>
          <div className="space-y-4 text-sm md:text-base text-neutral-400 font-light leading-relaxed font-sans max-w-3xl">
            <p>
              As intelligent systems become embedded inside organizations, governance becomes a systems problem. 
              Traditional tools focus entirely on capability limits, API tokens, or post-inference text scanning. 
              These mechanisms cannot prevent an autonomous agent from bypassing standard routines or executing malicious payloads before logs are sealed.
            </p>
            <p>
              We focus on control. AnimusLab explores identity resolution, capability mapping, state observability, and compiler-level interception. 
              Our work combines formal research with open-source software (like the Anchor engine) to construct explainable, auditable, and replayable security frameworks.
            </p>
          </div>
        </section>

        {/* ── SECTION: FOCUS AREAS ────────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// Focus_Areas</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900 pb-2">
            Active Research Focus
          </h3>
          <div className="divide-y divide-neutral-900">
            {focusAreas.map((area, index) => (
              <div key={index} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-4 text-white font-bold text-sm tracking-wide font-sans">
                  {area.name}
                </div>
                <div className="md:col-span-8 text-neutral-400 font-light text-xs md:text-sm leading-relaxed">
                  {area.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: TEAM / CONTACT ─────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// Contact_Channels</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900 pb-2">
            Collaboration & Inquiries
          </h3>
          <div className="space-y-4 text-sm text-neutral-400 font-light leading-relaxed max-w-2xl font-sans">
            <p>
              Our research is fully open-source and built to foster industry and academic collaborations. If you are an academic researcher, AI developer, security auditor, or startup founder seeking to implement pre-inference governance, get in touch.
            </p>
            <p>
              We prioritize inquiries related to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
              <li>Academic peer reviews of the Anchor preprint</li>
              <li>Enterprise pilot testing for Layer 2 interceptors</li>
              <li>Collaborative whitepapers on constitutional AI safety</li>
            </ul>
          </div>
        </section>

      </div>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
