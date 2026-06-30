import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Canon | AnimusLab',
  alternates: {
    canonical: '/canon',
  },
};

export default function CanonPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="px-6 md:px-12 py-32 border-b border-neutral-900 bg-[#070707]/20">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-6 text-xs font-mono font-bold text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              GOVERNANCE KNOWLEDGE INTEGRITY ENGINE
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight">
              Canon
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-neutral-400 leading-relaxed font-mono">
              Deterministic, cryptographically verifiable monitoring for AI governance frameworks.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/AnimusLab/Canon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-neutral-200 px-6 py-3 text-sm font-bold transition-all rounded-sm"
              >
                View on GitHub
              </a>
              <a
                href="https://github.com/AnimusLab/Canon/releases/tag/v0.1.0"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-800 text-neutral-300 hover:text-white px-6 py-3 text-sm font-bold transition-all rounded-sm"
              >
                Version v0.1.0 Release Notes
              </a>
            </div>
          </div>
        </section>

        {/* METRICS & BENCHMARKS */}
        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-white mb-6">Empirical Performance (ICAIF-2026 Benchmarks)</h2>
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-3xl">
              Canon is built for high-assurance applications. In benchmark evaluations executed under Python 3.14, Canon demonstrates sub-millisecond execution times, proving that governance verification introduces negligible overhead.
            </p>
            
            <div className="overflow-x-auto border border-neutral-900">
              <table className="min-w-full divide-y divide-neutral-900 text-sm font-mono">
                <thead className="bg-[#0a0a0a]">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-neutral-500">Operation</th>
                    <th className="px-6 py-4 text-right text-xs uppercase tracking-wider text-neutral-500">Mean Latency</th>
                    <th className="px-6 py-4 text-right text-xs uppercase tracking-wider text-neutral-500">P95 Latency</th>
                    <th className="px-6 py-4 text-right text-xs uppercase tracking-wider text-neutral-500">P99 Latency</th>
                    <th className="px-6 py-4 text-right text-xs uppercase tracking-wider text-neutral-500">Throughput</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900 bg-neutral-950/20">
                  <tr>
                    <td className="px-6 py-4 text-neutral-300 font-bold">Source State Hash (100 rules)</td>
                    <td className="px-6 py-4 text-right text-neutral-400">135.36 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">155.10 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">253.40 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">7,387.9 /s</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-neutral-300 font-bold">Diff Engine (100 rules, 5 changes)</td>
                    <td className="px-6 py-4 text-right text-neutral-400">88.12 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">104.10 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">176.00 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">11,347.8 /s</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-neutral-300 font-bold">Diff Engine (500 rules, 20 changes)</td>
                    <td className="px-6 py-4 text-right text-neutral-400">398.27 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">548.10 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">834.10 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">2,510.8 /s</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-neutral-300 font-bold">Evidence Hash Generation</td>
                    <td className="px-6 py-4 text-right text-neutral-400">12.27 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">11.50 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">18.70 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">81,496.9 /s</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-neutral-300 font-bold">Ledger Chain Hashing</td>
                    <td className="px-6 py-4 text-right text-neutral-400">1.34 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">1.20 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">1.40 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">744,990.0 /s</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-neutral-300 font-bold">Approval Record Hashing</td>
                    <td className="px-6 py-4 text-right text-neutral-400">3.34 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">3.40 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">3.70 µs</td>
                    <td className="px-6 py-4 text-right text-neutral-400">299,043.3 /s</td>
                  </tr>
                  <tr className="bg-neutral-900/10">
                    <td className="px-6 py-4 text-white font-bold">End-to-End Pipeline</td>
                    <td className="px-6 py-4 text-right text-indigo-400 font-bold">490.10 µs</td>
                    <td className="px-6 py-4 text-right text-indigo-400 font-bold">734.20 µs</td>
                    <td className="px-6 py-4 text-right text-indigo-400 font-bold">1,112.60 µs</td>
                    <td className="px-6 py-4 text-right text-indigo-400 font-bold">2,040.4 /s</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* REAL-WORLD APPLICATION EXAMPLE */}
        <section className="px-6 md:px-12 py-16 border-b border-neutral-900 bg-[#070707]/10">
          <div className="max-w-5xl mx-auto space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-indigo-400 font-mono">// Case Validation</h3>
            <h4 className="text-2xl font-semibold text-white">Real-World Application Example</h4>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl font-mono">
              During internal testing, Canon successfully tracked modifications to the EU AI Act between draft versions, identifying 14 new obligations and 3 modified requirements. It generated a cryptographically signed evidence package and pushed the updated policy compilation to connected Anchor instances within 490µs end-to-end latency.
            </p>
          </div>
        </section>

        {/* PROBLEMS & SOLUTIONS */}
        <section className="px-6 md:px-12 py-24 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl uppercase tracking-[0.2em] text-neutral-500 mb-6 font-mono">The Problem</h3>
              <h4 className="text-3xl font-semibold text-white tracking-tight leading-snug mb-6">
                Manual Policy Tracking is Non-Deterministic
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                Regulations, organizational policies, and industry security frameworks (e.g. NIST, OWASP, EU AI Act) change over time. Organizations cannot manually watch dozens of repositories and document sites. When frameworks evolve, there is no verification that the code runtime actually matches the updated compliance guidelines, introducing regulatory drift and systemic exposure.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl uppercase tracking-[0.2em] text-indigo-400 mb-6 font-mono">The Solution</h3>
              <h4 className="text-3xl font-semibold text-white tracking-tight leading-snug mb-6">
                Continuous Governance Integrity Verification
              </h4>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Canon monitors and fetches external policy definitions, generates evidence packages showing rules added/removed/modified, and logs all changes into a tamper-evident, hash-chained ledger.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                No policy moves to execution without structured evidence and explicit, cryptographically signed author approvals.
              </p>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM FLOW */}
        <section className="px-6 md:px-12 py-24 border-b border-neutral-900 bg-[#070707]/10">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono mb-4">
              Governance Supply Chain Flow
            </h3>
            <h4 className="text-3xl font-semibold text-white tracking-tight mb-12">
              How Canon Integrates Into the AnimusLab Stack
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center text-center font-mono text-xs">
              <Link href="/canon/ingest" className="group border border-neutral-900 p-6 bg-neutral-950/40 hover:border-indigo-950 hover:bg-[#07080c]/30 hover:border-neutral-700 transition-colors flex flex-col justify-between h-full min-h-[140px]">
                <div>
                  <span className="text-indigo-400 group-hover:text-white font-bold block mb-1">1. Ingest</span>
                  <p className="text-neutral-500 group-hover:text-neutral-400">Canon monitors and pulls external sources</p>
                </div>
                <span className="text-[10px] uppercase text-indigo-500 font-bold mt-4 tracking-wider block">Read More →</span>
              </Link>
              <div className="text-neutral-600 font-bold rotate-90 md:rotate-0">→</div>
              <Link href="/canon/approve" className="group border border-neutral-900 p-6 bg-neutral-950/40 hover:border-indigo-950 hover:bg-[#07080c]/30 hover:border-neutral-700 transition-colors flex flex-col justify-between h-full min-h-[140px]">
                <div>
                  <span className="text-indigo-400 group-hover:text-white font-bold block mb-1">2. Approve</span>
                  <p className="text-neutral-500 group-hover:text-neutral-400">Supervisor records signed ledger entry</p>
                </div>
                <span className="text-[10px] uppercase text-indigo-500 font-bold mt-4 tracking-wider block">Read More →</span>
              </Link>
              <div className="text-neutral-600 font-bold rotate-90 md:rotate-0">→</div>
              <Link href="/canon/compile" className="group border border-neutral-900 p-6 bg-neutral-950/40 hover:border-indigo-950 hover:bg-[#07080c]/30 hover:border-neutral-700 transition-colors flex flex-col justify-between h-full min-h-[140px]">
                <div>
                  <span className="text-indigo-400 group-hover:text-white font-bold block mb-1">3. Compile</span>
                  <p className="text-neutral-500 group-hover:text-neutral-400">Anchor Static lints and compiles policies</p>
                </div>
                <span className="text-[10px] uppercase text-indigo-500 font-bold mt-4 tracking-wider block">Read More →</span>
              </Link>
              <div className="text-neutral-600 font-bold rotate-90 md:rotate-0">→</div>
              <Link href="/canon/optimize" className="group border border-neutral-900 p-6 bg-neutral-950/40 hover:border-indigo-950 hover:bg-[#07080c]/30 hover:border-neutral-700 transition-colors flex flex-col justify-between h-full min-h-[140px]">
                <div>
                  <span className="text-indigo-400 group-hover:text-white font-bold block mb-1">4. Optimize</span>
                  <p className="text-neutral-500 group-hover:text-neutral-400">AnchorJIT compiles enforcement paths</p>
                </div>
                <span className="text-[10px] uppercase text-indigo-500 font-bold mt-4 tracking-wider block">Read More →</span>
              </Link>
              <div className="text-neutral-600 font-bold rotate-90 md:rotate-0">→</div>
              <Link href="/canon/enforce" className="group border border-neutral-900 p-6 bg-neutral-950/40 hover:border-indigo-950 hover:bg-[#07080c]/30 hover:border-neutral-700 transition-colors flex flex-col justify-between h-full min-h-[140px]">
                <div>
                  <span className="text-indigo-400 group-hover:text-white font-bold block mb-1">5. Enforce</span>
                  <p className="text-neutral-500 group-hover:text-neutral-400">Anchor Runtime isolates and blocks</p>
                </div>
                <span className="text-[10px] uppercase text-indigo-500 font-bold mt-4 tracking-wider block">Read More →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* DESIGN PRINCIPLES */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-white mb-12">Design Principles</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-bold font-mono mb-4">// Deterministic by Design</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Every run on a given repository tree state yields the exact same configuration state and cryptographic hash. There are no stochastic heuristics or probabilistic evaluations.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-bold font-mono mb-4">// Cryptographic Accountability</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Transitions in policy configurations require signed approvals and are locked into an append-only, chained ledger database. History is immutable.
                </p>
              </div>

              <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-bold font-mono mb-4">// Decoupled Execution</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Governance synchronization (Canon) runs entirely separate from execution compilation (Anchor Static) and runtime checking (Anchor Runtime), eliminating inline performance overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL ENGAGEMENT */}
        <section className="px-6 md:px-12 py-24 text-center border-t border-neutral-900 bg-neutral-950/20">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-neutral-400 text-sm font-mono leading-relaxed">
              Canon is currently in v0.1.0. We are actively seeking early institutional feedback and integration partners.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
