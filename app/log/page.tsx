import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Development Log | AnimusLab",
  description: "A transparent, chronological record of institutional progress, research releases, regulatory contributions, and infrastructure milestones.",
  alternates: {
    canonical: "/log",
  },
};

export default function LogPage() {
  const timeline = [
    {
      date: "August 9, 2026",
      title: "anchor-audit v6.0.1 Published to PyPI",
      desc: "Production release of the core deterministic governance kernel (PyPI package: anchor-audit). Includes Rust PyO3 AST scanner, Click CLI suite (init, check, verify-sync, drift, sync, heal), and @anchor.guard decorator runtime interception."
    },
    {
      date: "August 9, 2026",
      title: "Sovereign Control Plane Portals Deployed",
      desc: "Stood up multi-tenant subdomain portals: admin.animuslab.dev (Node Whitelist Cockpit), hub.animuslab.dev (Real-Time Violation Stream), and oversight.animuslab.dev (Gated Mission Replay Engine with Zero-Knowledge file path redaction)."
    },
    {
      date: "June 30, 2026",
      title: "Canon v0.1.0 Released",
      desc: "First production version of the governance knowledge integrity engine. Includes SHA-256 state tracking, evidence package generation, and append-only ledger functionality."
    },
    {
      date: "June 25, 2026",
      title: "Financial Stability Board Consultation Response Submitted",
      desc: "Formal submission regarding deterministic runtime governance requirements for AI systems in systemic financial infrastructure."
    },
    {
      date: "June 18, 2026",
      title: "Anchor Governance Mappings Expanded",
      desc: "Added comprehensive AST rule sets for OWASP Top 10, enabling stricter compile-time verification."
    },
    {
      date: "May 2026",
      title: "Knight Capital Case Study Published",
      desc: "Detailed forensic modeling of authority overreach using historical incident data to test runtime containment boundaries."
    },
    {
      date: "April 2026",
      title: "Anchor Preprint Published on Zenodo",
      desc: "Released the foundational paper: \"Anchor: A Federated Governance Engine for Agentic Systems.\""
    },
    {
      date: "March 2026",
      title: "AnimusLab Constitution v1.0 Finalized",
      desc: "Established the institutional charter defining principles of truth over optics, evidence supremacy, and long-term continuity."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-24">
        {/* HERO */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6 font-mono">
            Development Log
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            Transparent Record of Progress
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            AnimusLab maintains a public, chronological log of all major research releases, regulatory contributions, infrastructure milestones, and institutional decisions. We believe transparency builds trust.
          </p>
        </section>

        {/* TIMELINE */}
        <section className="relative border-l border-neutral-950 pl-8 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Bullet circle */}
              <div className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full border border-indigo-500 bg-[#050505] group-hover:bg-indigo-500 transition-colors" />
              
              <div className="space-y-2">
                <span className="text-xs font-mono text-indigo-400 font-bold block">
                  {item.date}
                </span>
                <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl font-mono">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-20 border-t border-neutral-900 pt-10 text-center">
          <p className="text-xs font-mono text-neutral-500">
            This log is updated in real time. Contributions and feedback welcome.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
