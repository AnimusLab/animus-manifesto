import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

interface Props {
  params: Promise<{
    step: string;
  }>;
}

const STEPS_DETAIL: Record<string, { title: string; subtitle: string; desc: string; bullets: string[] }> = {
  ingest: {
    title: "Ingest",
    subtitle: "Continuous monitoring of external governance sources.",
    desc: "Canon continuously tracks changes to external repositories, wikis, and document portals containing regulatory rulesets (like OWASP LLM Top 10 or NIST AI RMF). It pulls raw files and generates local structured representations.",
    bullets: [
      "Repository Tracking: Automatically crawling main branches and git trees.",
      "SHA-256 State Checking: Computing deterministic hashes of rule states.",
      "Translation Filtering: Excluding localized folders to focus on canonical English sources."
    ]
  },
  approve: {
    title: "Approve",
    subtitle: "Securing transitions behind human supervisors.",
    desc: "When changes are detected, Canon generates a structured evidence package. A compliance officer reviews the additions or updates and signs off, generating a cryptographic approval record stored in an append-only ledger.",
    bullets: [
      "Evidence Packages: Explicitly mapping rules modified, added, or deleted.",
      "Attributed Audit Records: Creating cryptographically verifiable signatures for supervisor decisions.",
      "Hash-Chained Ledger: Preventing history rewriting by chaining entries sequentially."
    ]
  },
  compile: {
    title: "Compile",
    subtitle: "Compiling rulesets into machine-executable formats.",
    desc: "Anchor Static compiles the human-approved rule configurations into a centralized policy manifest. It validates syntax rules, resolves compliance conflicts, and runs linting rules before deployment.",
    bullets: [
      "AST Mapping: Translating compliance checks to programming language grammar trees.",
      "Conflict Resolution: Detecting contradicting constraints before deployment.",
      "Static Verification: Enforcing lint checks inside CI/CD pipelines."
    ]
  },
  optimize: {
    title: "Optimize",
    subtitle: "Dynamic compilation of hot validation paths.",
    desc: "AnchorJIT (future research program) compiles high-frequency policy constraints directly into native machine instructions to eliminate runtime execution bottlenecks on heavy workloads.",
    bullets: [
      "Dynamic JIT: Compiling hot validation loops on the fly.",
      "Memory Safety: Validating code compilation inside native sandbox borders.",
      "Microsecond Scale: Pushing check latency down to sub-millisecond scales."
    ]
  },
  enforce: {
    title: "Enforce",
    subtitle: "Isolating agent capabilities at runtime.",
    desc: "Anchor Runtime intercepts AI agent execution, scanning requests and responses in real-time, sandbox-isolating capabilities, and generating tamper-evident local logs.",
    bullets: [
      "Diamond Cage Sandbox: Isolating untrusted third-party code in WASM rings.",
      "Inline Interception: Scanning inputs and blocking violations before execution.",
      "Edge Telemetry: Writing local logs without exposing raw client data."
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { step } = await params;
  const detail = STEPS_DETAIL[step];
  if (!detail) return {};

  return {
    title: `${detail.title} Step | Canon Pipeline`,
    description: detail.subtitle,
    alternates: {
      canonical: `/canon/${step}`,
    },
  };
}

export default async function CanonStepPage({ params }: Props) {
  const { step } = await params;
  const detail = STEPS_DETAIL[step];

  if (!detail) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-24 w-full">
        <Link
          href="/canon"
          className="text-xs uppercase tracking-widest text-neutral-500 hover:text-indigo-400 font-mono font-bold block mb-8 transition-colors"
        >
          ← Back to Canon Overview
        </Link>

        <section className="space-y-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono font-bold block">
              Governance Pipeline // Step: {detail.title}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
              {detail.subtitle}
            </h1>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
            {detail.desc}
          </p>

          <div className="border-t border-neutral-900 pt-10 space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-neutral-500 font-mono">Key Operational Deliverables</h2>
            <ul className="space-y-4 font-mono text-sm text-neutral-400">
              {detail.bullets.map((bullet, i) => {
                const [title, desc] = bullet.split(": ");
                return (
                  <li key={i} className="flex gap-3">
                    <span className="text-indigo-400 font-bold">//</span>
                    <span>
                      <strong className="text-white">{title}:</strong> {desc}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
