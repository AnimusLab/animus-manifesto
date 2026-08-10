import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Case Studies | AnimusLab",
  description: "A public archive of forensic incident analyses, runtime policy enforcement cases, and institutional governance frameworks.",
  alternates: {
    canonical: "https://case.animuslab.dev",
  },
};

const CASE_DETAILS: Record<string, { summary: string; responseLabel: string; response: string; statusText: string }> = {
  "C-001": {
    summary: "In 2012, a trading firm lost $440 million in 45 minutes due to unintended reactivation of deprecated code.",
    responseLabel: "How Anchor Responds",
    response: "AST scanning detects unauthorized execution path reactivation; the runtime sandbox (Diamond Cage) isolates and blocks anomalous behavior; the Decision Audit Chain logs approval history.",
    statusText: "Modeled | Lessons Applied in Anchor v5.x"
  },
  "C-002": {
    summary: "In 2024, Air Canada was held legally liable after its customer support chatbot drifted from official bereavement fare policy and fabricated a retroactive refund procedure (Moffatt v. Air Canada, 2024 BCCRT 149).",
    responseLabel: "How Anchor Responds",
    response: "Anchor's semantic interceptor validates LLM output assertions against the active policy contract before client delivery. Drifted claims are coerced to pre-approved compliant responses and logged in the Decision Audit Chain.",
    statusText: "Completed Reference Case | Anchor v5.x"
  },
  "C-003": {
    summary: "Malicious or security-compromised embeddings introduced into a vector store lead to incorrect but policy-compliant agent decisions.",
    responseLabel: "Combined Solution",
    response: "Canon ensures source material freshness and authenticity, while Anchor enforces runtime validation of LLM output against the current active policy manifest.",
    statusText: "Active Research | Canon + Anchor"
  },
  "C-004": {
    summary: "In 2018, TSB Bank's IT migration failure caused a £600M outage affecting 1.9 million customers, resulting in a joint FCA/PRA fine of £48.65M.",
    responseLabel: "How Anchor Responds",
    response: "CI/CD defect limit gates (POL-DEPLOY-004) enforce active-active datacenter configuration drift detection before production cutover. The runtime sandbox blocks deployment when unresolved defect counts exceed constitutional thresholds.",
    statusText: "Completed Reference Case | Anchor v5.x"
  },
  "C-005": {
    summary: "In 2020, Citibank accidentally wired $893M to Revlon lenders due to an Oracle Flexcube UI checkbox failure, resulting in a $500M net loss and OCC Consent Order.",
    responseLabel: "How Anchor Responds",
    response: "Structured Mode payment rules (POL-FIN-005) enforce multi-party approval gates and amount-threshold verification before high-value wire execution. The Decision Audit Chain captures the full authorization lineage.",
    statusText: "Completed Reference Case | Anchor v5.x"
  }
};

export default function CasesIndexPage() {
  const cases = getContent("cases");
  
  // Sort cases by ID/slug (e.g., C-001, C-002, C-003)
  const sortedCases = [...cases].sort((a, b) => {
    const idA = a.id || "";
    const idB = b.id || "";
    return idA.localeCompare(idB);
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-grow max-w-[1600px] mx-auto w-full px-8 py-24">
        <div className="max-w-4xl space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-2 text-xs font-mono font-bold text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            EMPIRICAL EVIDENCE & GOVERNANCE ARCHIVE
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Case Studies &amp;<br />Governance Archive
          </h1>
          <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
            A public, reproducible record documenting practical approaches to runtime policy enforcement, auditability, decision provenance, and institutional trust for advanced AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-neutral-900">
          {sortedCases.map((item) => {
            const details = CASE_DETAILS[item.id || ""];
            return (
              <div 
                key={item.slug} 
                className="border border-neutral-900 bg-[#070707]/30 p-8 flex flex-col justify-between hover:border-neutral-800 transition-all duration-300 group rounded-sm"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      {item.id || "CASE"}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-600">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {details ? (
                    <div className="space-y-4 text-xs font-mono text-neutral-400">
                      <div>
                        <strong className="text-white block mb-1">Summary:</strong>
                        <p className="leading-relaxed">{details.summary}</p>
                      </div>
                      <div>
                        <strong className="text-indigo-400 block mb-1">{details.responseLabel}:</strong>
                        <p className="leading-relaxed">{details.response}</p>
                      </div>
                      <div className="pt-2">
                        <span className="inline-block border border-indigo-950 bg-indigo-950/20 text-indigo-400 px-2 py-0.5 rounded-sm font-bold text-[10px]">
                          {details.statusText}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {item.excerpt}
                    </p>
                  )}

                  {item.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9px] font-mono border border-neutral-850/60 px-2 py-0.5 rounded-sm bg-neutral-950 text-neutral-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href={`/cases/${item.slug}`}
                  className="text-xs font-mono font-bold text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5 mt-8"
                >
                  Read Case Study <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* SECTION: MULTI-FRAMEWORK EVALUATION PIPELINE */}
        <div className="mt-32 space-y-10 border-t border-neutral-900 pt-20">
          <div className="space-y-4">
            <span className="text-xs text-indigo-400 font-mono tracking-widest block uppercase">
              // Multi_Framework_Evaluation_Pipeline
            </span>
            <h2 className="text-3xl font-semibold text-white">
              Upcoming Assessments &amp; Active Audits
            </h2>
            <p className="text-sm text-neutral-400 font-light max-w-xl">
              We regularly run Anchor's frozen engine checks against mainstream autonomous frameworks to audit governance boundaries, capability leakage, and unsandboxed execution limits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* OpenHands */}
            <div className="border border-neutral-900/60 bg-[#070707]/10 p-8 flex flex-col justify-between rounded-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-900 pb-3 text-xs font-mono">
                  <span className="font-bold text-neutral-500">AUDIT // COMPLETED</span>
                  <span className="text-neutral-600">June 2026</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-200">
                  OpenHands Runtime Governance Audit
                </h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Analysis of process-level Docker boundaries, AST parsing triggers, and the semantic coupling of core message contracts in production integrations.
                </p>
              </div>
              <span className="text-xs font-mono text-indigo-400/60 mt-8 block">
                Report pending final review
              </span>
            </div>

            {/* crewAI */}
            <div className="border border-neutral-900/60 bg-[#070707]/10 p-8 flex flex-col justify-between rounded-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-900 pb-3 text-xs font-mono">
                  <span className="font-bold text-neutral-500">AUDIT // UNDER REVIEW</span>
                  <span className="text-neutral-600">June 2026</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-200">
                  crewAI Boundary &amp; SDK Resolution Audit
                </h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Static capability check evaluating direct public API initializations, execution delegation tradeoffs, and local CLI subprocess sandboxing.
                </p>
              </div>
              <span className="text-xs font-mono text-indigo-400/60 mt-8 block">
                Review in progress
              </span>
            </div>

            {/* LangGraph */}
            <div className="border border-neutral-900/60 bg-[#070707]/10 p-8 flex flex-col justify-between rounded-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-900 pb-3 text-xs font-mono">
                  <span className="font-bold text-neutral-500">AUDIT // QUEUED</span>
                  <span className="text-neutral-600">Queue Active</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-200">
                  LangGraph Cyclic State Checkpointing Audit
                </h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Auditing of state transitions, local execution parameters, and simulation environment governance boundaries in graph configurations.
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-600 mt-8 block">
                Scheduled
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
