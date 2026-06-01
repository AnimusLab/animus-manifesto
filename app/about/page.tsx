'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const focusAreas = [
    { name: 'Governance Architectures', desc: 'Sovereign multi-tier systems bridging edge nodes with federated metadata logs.' },
    { name: 'Agent Identity Systems', desc: 'Secure capability credentials ensuring strict authorization lineage across dynamic execution cycles.' },
    { name: 'Constitutional Authorization', desc: 'Declarative policy structures mapping execution context directly to authorized APIs.' },
    { name: 'Execution Interception', desc: 'Abstract Syntax Tree (AST) scanning engines halting dangerous imports before compilers initialize.' },
    { name: 'AI Observability Frameworks', desc: 'Tamper-evident, zero-knowledge telemetry databases detailing precise reasoning logs for audit processes.' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans flex flex-col selection:bg-neutral-800 selection:text-white antialiased">
      {/* Shared Header */}
      <Header />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-neutral-900/60 bg-[#070707]/30">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs text-neutral-500 font-mono tracking-widest block uppercase">// About_The_Institution</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            About AnimusLab
          </h1>
          <p className="text-sm text-neutral-400 max-w-xl font-light leading-relaxed">
            An independent research and systems-engineering initiative exploring the boundaries of AI capability, control architectures, and explainable safety frameworks.
          </p>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-20 flex-1 w-full">
        
        {/* ── SECTION: DIRECTIVES ─────────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// Core_Directives</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900/60 pb-2">
            Why We Exist
          </h3>
          <div className="space-y-4 text-xs md:text-sm text-neutral-400 font-light leading-relaxed max-w-3xl">
            <p>
              As intelligent systems are integrated into production networks, securing them becomes an engineering challenge. 
              Existing guardrails operate almost entirely at the post-inference surface, relying on probabilistic wrappers to scan text outputs or detect bad inputs. 
              These probabilistic wrappers are easily bypassed and fail to prevent an autonomous system from executing damaging code before logs are registered.
            </p>
            <p>
              AnimusLab focuses entirely on control. We research and build baseline architectural building blocks that enforce governance deterministically at the compiler and WebAssembly execution boundary. 
              Our work merges theoretical computer science with systems code to design explainable, auditable, and replayable security frameworks.
            </p>
          </div>
        </section>

        {/* ── SECTION: FOCUS AREAS ────────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// active_focus</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900/60 pb-2">
            Focus Areas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="p-5 border border-neutral-900 bg-[#070707]/20 space-y-2">
                <h4 className="text-xs font-bold text-white tracking-wider font-mono uppercase">
                  // {area.name}
                </h4>
                <p className="text-xs text-neutral-500 font-light leading-normal">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION: CONTACT ────────────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-neutral-500 text-xs font-mono uppercase tracking-widest">// Peer_Review_Channels</h2>
          <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900/60 pb-2">
            Institutional Contact
          </h3>
          <div className="space-y-4 text-xs md:text-sm text-neutral-400 font-light leading-relaxed max-w-xl">
            <p>
              We prioritize academic peer-review and secure, zero-trust collaborations with researchers, developers, and compliance regulators.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-6 font-mono text-[11px]">
              <a href="mailto:research@animuslab.dev" className="text-neutral-400 hover:text-white transition-colors">
                [ research@animuslab.dev ]
              </a>
              <span className="hidden sm:inline text-neutral-800">|</span>
              <a href="https://github.com/AnimusLab" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                [ GitHub Organization ]
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
