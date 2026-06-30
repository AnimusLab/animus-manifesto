import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

interface Props {
  params: Promise<{
    track: string;
  }>;
}

const TRACKS_DETAIL: Record<string, { title: string; subtitle: string; desc: string; bullets: string[] }> = {
  academic: {
    title: "Academic Research",
    subtitle: "Formalizing cognitive boundaries and verification frameworks.",
    desc: "We partner with university research departments, cryptography labs, and symbolic computing groups to explore the math boundaries of AI safety. We focus on neuro-symbolic reasoning, compiler design, and proof generation.",
    bullets: [
      "Verifiable Reasoning: Developing proof models to verify that cognitive reasoning steps match specifications.",
      "Optimized Compilation: Researching AnchorJIT patterns to compile rules into native assembly.",
      "Formal Proofs: Creating verification pipelines to mathematically guarantee constraint completeness."
    ]
  },
  regulatory: {
    title: "Regulatory Discussions",
    subtitle: "Translating natural language policies into strict code compliance.",
    desc: "AnimusLab interacts with central banks, financial stability committees, and policy working groups to advise on AI audit standards. We contribute empirical data on system latency, tamper-evident logs, and sovereign controls.",
    bullets: [
      "Structured Submissions: Publishing technical responses to global regulatory consultations (e.g. FSB).",
      "Policy Translation: Researching high-level DSL compilers that bridge legislative text and WASM guardrails.",
      "Audit Trail Accountability: Designing immutable evidence pipelines for supervisory review."
    ]
  },
  pilots: {
    title: "Enterprise Pilots",
    subtitle: "Deploying high-assurance governance systems at scale.",
    desc: "We collaborate with companies in finance, healthcare, and critical infrastructure to pilot Anchor and Canon. We verify performance overhead, telemetry isolation, and policy enforcement under production workloads.",
    bullets: [
      "Financial Guardrails: Implementing transaction verification gates, credit checks, and limit validations.",
      "Secure Sandboxing: Containing autonomous agents inside isolated WASM execution rings.",
      "Localized Telemetry: Restricting database writes to edge hubs, preserving data privacy."
    ]
  },
  contributors: {
    title: "Open Source Contributors",
    subtitle: "Building the standard stack for deterministic AI safety.",
    desc: "Our core systems are Apache-2.0 licensed, public, and built in the open. We welcome software engineers, security researchers, and policy analysts to collaborate on our core repositories.",
    bullets: [
      "Source Adapters: Writing custom web crawlers and parsers for Canon monitoring.",
      "Compiler Speed: Improving WASM sandbox runtime overhead in Anchor.",
      "Documentation: Refining tutorials, CLI references, and architecture guides."
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { track } = await params;
  const detail = TRACKS_DETAIL[track];
  if (!detail) return {};

  return {
    title: `${detail.title} Collaboration | AnimusLab`,
    description: detail.subtitle,
    alternates: {
      canonical: `/collaborate/${track}`,
    },
  };
}

export default async function CollaborateTrackPage({ params }: Props) {
  const { track } = await params;
  const detail = TRACKS_DETAIL[track];

  if (!detail) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-24 w-full">
        <Link
          href="/collaborate"
          className="text-xs uppercase tracking-widest text-neutral-500 hover:text-indigo-400 font-mono font-bold block mb-8 transition-colors"
        >
          ← Back to Collaboration Overview
        </Link>

        <section className="space-y-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-mono font-bold block">
              Collaboration Track // {detail.title}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
              {detail.subtitle}
            </h1>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
            {detail.desc}
          </p>

          <div className="border-t border-neutral-900 pt-10 space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-neutral-500 font-mono">Key Objectives &amp; Work Streams</h2>
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

          <div className="pt-10">
            <a
              href="mailto:tan@animuslab.dev?subject=AnimusLab%20-%20Collaboration%20Inquiry"
              className="bg-white text-black hover:bg-neutral-200 px-6 py-3.5 text-sm font-bold transition-all rounded-sm shadow-md"
            >
              Inquire About this Track
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
