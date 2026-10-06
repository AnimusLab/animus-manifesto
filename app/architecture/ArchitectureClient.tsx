'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProductInfo {
  id: string;
  name: string;
  category: string;
  badge: string;
  tagline: string;
  status: string;
  repoUrl: string;
  liveUrl?: string;
  originStory: string;
  technicalCore: string[];
  whatItIs: string[];
  whatItIsNot: string[];
  internalUsage: string;
}

const PRODUCTS: ProductInfo[] = [
  {
    id: 'anchor',
    name: 'Anchor Engine',
    category: 'AI Governance & Verification',
    badge: 'Open Source Engine (v6.0.2)',
    tagline: 'Deterministic static analysis and sub-millisecond runtime statutory enforcement.',
    status: 'Production / Open Source Core',
    repoUrl: 'https://github.com/AnimusLab/Anchor',
    liveUrl: 'https://landing.animuslab.dev',
    originStory: 'When developing the federated training workflows in AnchorGrid-Hub, participating institutions could fine-tune base models on proprietary data and submit adapter weight merge requests back to the network. This raised two critical questions: How do we mathematically verify that incoming weights improve capabilities rather than degrading performance, injecting backdoor triggers, or causing alignment drift? And how do we deterministically govern runtime AI tool execution and model outputs against statutory requirements (EU AI Act, RBI FREE-AI, SEC Reg SCI) with zero-latency overhead? Anchor was built to answer both.',
    technicalCore: [
      'Zero-copy Rust static analysis AST engine parsing code and prompt definitions against formal .anchor dialect rules.',
      'Sub-millisecond (< 0.4ms) synchronous intercept runtime gate enforcing hard statutory constraints before LLM calls execute.',
      'Decision Audit Chain (DAC) generating SHA-256 Merkle-linked, Ed25519-signed immutable compliance records.',
      'Open-core architecture: local engine is 100% free and open-source; anchor-web provides enterprise SaaS governance.'
    ],
    whatItIs: [
      'An open-source CLI and Rust/Python SDK for AI governance.',
      'A static scanner that blocks compliance violations in CI/CD pipelines.',
      'A runtime guard enforcing legal and safety boundaries before execution.'
    ],
    whatItIsNot: [
      'A post-hoc monitoring dashboard (that is anchor-web).',
      'A model training framework.',
      'A cloud service (the engine runs completely local and air-gapped).'
    ],
    internalUsage: 'Used as the formal verification gate in AnchorGrid-Hub weight merges, and as the audit engine for QuantForge-AI execution boundaries.'
  },
  {
    id: 'anchorgrid',
    name: 'AnchorGrid-Hub',
    category: 'Federated Model Marketplace',
    badge: 'P2P Intelligence Network',
    tagline: 'BitTorrent-style decentralized model distribution with federated fine-tuning.',
    status: 'Active Development',
    repoUrl: 'https://github.com/AnimusLab/AnchorGrid-hub',
    originStory: 'Centralized AI hosting requires organizations to transmit sensitive proprietary data to external cloud providers. AnchorGrid-Hub was built to enable decentralized, federated intelligence without data leakage: clients download base models via P2P, fine-tune lightweight LoRA adapters locally on private data, and optionally submit adapter weights to improve the collective hive mind.',
    technicalCore: [
      'High-efficiency P2P distribution network for base model weights and modular LoRA adapters.',
      'Standardized local training pipeline (Mistral-7B 4-bit, Rank 16 LoRA) producing ~50MB portable adapters.',
      'Proof-of-Loss automated evaluation benchmark testing submissions against curated multi-domain datasets.',
      'Weekly automated merge schedule (CalVer YYYY.WW) updating global collective intelligence checkpoints.'
    ],
    whatItIs: [
      'A P2P distribution layer for open model weights.',
      'A contribution and merge-request protocol for federated fine-tuning.',
      'A zero-data-leakage architecture where training data never leaves client premises.'
    ],
    whatItIsNot: [
      'A centralized cloud training cluster.',
      'A proprietary model lock-in platform.',
      'Architecturally dependent on Anchor (Anchor is used by AnimusLab as the validation step, not hardwired into the P2P protocol).'
    ],
    internalUsage: 'Distributes QuantForge-AI models and accepts domain-specific financial fine-tuning adapters from quantitative research teams.'
  },
  {
    id: 'quantforge',
    name: 'QuantForge',
    category: 'Financial AI & Developer Terminal',
    badge: 'Financial Ecosystem',
    tagline: 'Developer-first TUI financial workstation coupled with quantitative reasoning AI.',
    status: 'Active Development',
    repoUrl: 'https://github.com/AnimusLab',
    originStory: 'Traditional financial analytics terminals (e.g., Bloomberg Terminal) are multi-thousand-dollar, proprietary GUI-locked silos that cannot be programmatically driven by AI agents or modern developer scripts. QuantForge was engineered to deliver a terminal-native, keyboard-driven, scriptable workstation that works symbiotically with financial AI agents.',
    technicalCore: [
      'QuantForge Terminal: High-performance TUI (Terminal User Interface) workstation built for quantitative researchers and developers.',
      'QuantForge-AI: Specialized financial reasoning agent fine-tuned on SEC EDGAR filings, central bank disclosures, and market microstructure.',
      'Bi-directional Tooling: QuantForge Terminal exposes live connectors (SEC, FRED, MarketWatch) to QuantForge-AI as tool calls, while the terminal surfaces AI reasoning natively.'
    ],
    whatItIs: [
      'A scriptable, composable developer alternative to legacy financial workstations.',
      'A domain-expert financial AI agent.',
      'A modular workstation operable by humans, scripts, or autonomous agents.'
    ],
    whatItIsNot: [
      'A closed-source proprietary data silo.',
      'A direct order routing broker (analytics and reasoning layer only).',
      'Dependent on Anchor or AnchorGrid to operate.'
    ],
    internalUsage: 'QuantForge-AI runs inside AnchorGrid as a distributed intelligence adapter, and runs subject to Anchor statutory governance in live execution.'
  },
  {
    id: 'shadow_watch',
    name: 'Shadow_Watch',
    category: 'Continuous Behavioral Security',
    badge: 'Zero-Friction Identity',
    tagline: 'Frictionless multi-signal behavioral anomaly detection replacing repetitive 2FA.',
    status: 'Standalone Python Library',
    repoUrl: 'https://github.com/AnimusLab/Shadow_Watch',
    originStory: 'Traditional multi-factor authentication (TOTP codes, SMS OTPs, repetitive hardware prompts) introduces high operational friction in developer and quantitative trading workflows. Shadow_Watch was created to establish frictionless, continuous behavioral security: silently scoring interaction continuity and issuing step-up challenges only when anomaly thresholds are breached.',
    technicalCore: [
      'Continuous Ensemble Scoring: IP/Location (30%), Device Fingerprint (25%), Behavioral Interaction (20%), Time Heatmap (15%), API Jitter/Regularity (10%).',
      'Localized Behavioral Anomaly Scorer: Computes Laplace-smoothed Kullback-Leibler (KL) divergence on action-type distributions, velocity z-scores, and entity novelty rates.',
      'Jaccard Entity Fingerprinting: Analyzes symbol and asset access continuity to immediately flag account takeover (ATO) or scraping attempts.',
      'Dynamic Enforcement: Trust score >= 0.80 permits silent access; < 0.40 triggers hard block or MFA challenge.'
    ],
    whatItIs: [
      'A continuous behavioral trust engine for APIs and user sessions.',
      'A silent security layer that eliminates repetitive 2FA prompts.',
      'A localized per-user statistical baseline model.'
    ],
    whatItIsNot: [
      'A replacement for enterprise SSO or password vaults.',
      'A centralized tracking service (models and embeddings live in your database).',
      'Dependent on any other AnimusLab product.'
    ],
    internalUsage: 'Protects anchor-web session portals and secures AnchorGrid-Hub trading and model contribution API routes.'
  },
  {
    id: 'forge',
    name: 'FORGE',
    category: 'File-Oriented Storage Engine',
    badge: 'Cloud Storage -> DB',
    tagline: 'Turns arbitrary cloud file storage (Google Drive, R2, S3) into an authenticated database.',
    status: 'Rust Core Engine',
    repoUrl: 'https://github.com/AnimusLab/FORGE',
    originStory: 'Prototyping modern applications typically incurs the overhead and recurring cost of provisioning dedicated cloud database instances (PostgreSQL, Supabase, Neon). FORGE was engineered to turn existing, unmetered cloud file storage into an authenticated, queryable relational/document database using custom binary storage specs.',
    technicalCore: [
      'Custom .forge Binary Specification: 64-byte structured header (FORGE001 magic bytes, schema hash, row counts), schema definition block, indexing offset tables, and binary-encoded record blocks.',
      'High-Performance Rust Engine: Async runtime built with Axum, Tokio, and Hyper.',
      'Write-Ahead Logging (WAL): Crash-resilient write pipeline with idempotency guarantees.',
      'Universal Storage Adapter: Persists .forge binary files to Google Drive, Cloudflare R2, AWS S3, or generic HTTP storage via REST endpoints (/v1/data/:collection).'
    ],
    whatItIs: [
      'A database engine for developers who already pay for cloud storage.',
      'A lightweight, zero-maintenance persistence layer for prototypes and edge tools.',
      'A clean REST-accessible database with API-key authentication.'
    ],
    whatItIsNot: [
      'A multi-terabyte high-concurrency transactional OLTP replacement for PostgreSQL.',
      'A proprietary locked-in cloud service.',
      'Dependent on any other AnimusLab product.'
    ],
    internalUsage: 'Used across AnimusLab internal tooling and prototyping pipelines for zero-cost authenticated state storage.'
  }
];

const DOGFOODING_MATRIX = [
  { host: 'AnchorGrid-Hub', tool: 'Anchor Engine', purpose: 'Validates incoming LoRA weight merge requests against statutory rules and performance bounds before merging.', independent: 'Yes — Hub can merge weights using standard loss checks without Anchor.' },
  { host: 'AnchorGrid-Hub', tool: 'Shadow_Watch', purpose: 'Protects API endpoints and model submission routes with continuous behavioral trust scoring.', independent: 'Yes — Hub functions with standard API key / bearer token auth.' },
  { host: 'QuantForge Terminal', tool: 'QuantForge-AI', purpose: 'Embeds quantitative reasoning and natural language financial analysis into the TUI.', independent: 'Yes — Terminal operates as a standalone scriptable financial workstation.' },
  { host: 'QuantForge-AI', tool: 'QuantForge Terminal', purpose: 'Uses the terminal\'s financial connectors (SEC, FRED, MarketWatch) as live execution tools.', independent: 'Yes — AI agent can connect to external Python or HTTP data feeds.' },
  { host: 'anchor-web', tool: 'Shadow_Watch', purpose: 'Provides zero-friction continuous session security across compliance and auditor portals.', independent: 'Yes — anchor-web operates with standard TOTP clearance tokens.' },
  { host: 'AnimusLab Tooling', tool: 'FORGE', purpose: 'Provides rapid zero-cost persistent state storage during active prototyping sprints.', independent: 'Yes — Systems can connect directly to PostgreSQL, SQLite, or Redis.' }
];

export default function ArchitectureClient() {
  const [selectedProduct, setSelectedProduct] = useState<string>('anchor');
  const activeProduct = PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0];

  return (
    <div className="space-y-24 py-20 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="space-y-6 pt-10 border-b border-neutral-900 pb-16">
        <div className="inline-flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/30 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-indigo-300 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span>STUDIO ARCHITECTURE &amp; SYSTEM TOPOLOGY</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
          A Product Studio, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
            Not a Monolithic Platform.
          </span>
        </h1>

        <p className="max-w-4xl text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
          AnimusLab builds focused, independent infrastructure engines. Every product is standalone, independently deployable, and solves a first-principles problem. They interoperate through clear contracts and dogfooding—not forced platform dependencies.
        </p>
      </section>

      {/* ── PRODUCT TOPOLOGY SELECTOR ─────────────────────────────────── */}
      <section className="space-y-10">
        <div className="space-y-3">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-indigo-400">
            // Select Product to Inspect Topology
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PRODUCTS.map((prod, idx) => {
              const isSelected = selectedProduct === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod.id)}
                  className={`p-5 text-left rounded-sm transition-all border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-950/50 border-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.25)]'
                      : 'bg-[#060810]/70 border-white/10 hover:border-white/20 hover:bg-[#0a0d18]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-indigo-400">0{idx + 1}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300 font-semibold">
                        {prod.badge.split(' ')[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{prod.name}</h3>
                      <p className="text-xs text-neutral-400 font-sans mt-0.5">{prod.category}</p>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-mono font-semibold text-indigo-400">
                    <span>Inspect</span>
                    <span className="ml-1">→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE PRODUCT DEEP DIVE */}
        <div className="p-8 md:p-12 rounded-sm glass-panel glass-panel-glow-indigo border border-white/10 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-indigo-600 text-white font-mono text-xs font-bold">
                  {activeProduct.category}
                </span>
                <span className="text-xs font-mono font-semibold text-emerald-400">
                  {activeProduct.status}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {activeProduct.name}
              </h2>
              <p className="text-base text-neutral-300">
                {activeProduct.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={activeProduct.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-sm transition-all"
              >
                GitHub Repository ↗
              </a>
              {activeProduct.liveUrl && (
                <a
                  href={activeProduct.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-mono font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-sm transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                >
                  Product Portal ↗
                </a>
              )}
            </div>
          </div>

          {/* Genesis Narrative */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              // Genesis Narrative &amp; Technical Motivation
            </h3>
            <div className="p-6 rounded-sm bg-amber-950/20 border border-amber-500/30 text-neutral-200 text-sm md:text-base leading-relaxed font-sans">
              {activeProduct.originStory}
            </div>
          </div>

          {/* Technical Core & Scope Boundaries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Technical Core */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
                // Technical Core Mechanics
              </h3>
              <div className="space-y-3">
                {activeProduct.technicalCore.map((spec, idx) => (
                  <div key={idx} className="p-4 rounded-sm bg-white/[0.02] border border-white/10 flex items-start gap-3">
                    <span className="text-indigo-400 font-mono font-bold text-xs mt-0.5">[{idx + 1}]</span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{spec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope Boundaries */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  // What It Is
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {activeProduct.whatItIs.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                  // What It Is Not (Scope Boundary)
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {activeProduct.whatItIsNot.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  // Dogfooding Role
                </div>
                <p className="text-xs text-neutral-300 font-mono">
                  {activeProduct.internalUsage}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── DOGFOODING & INDEPENDENCE MATRIX ─────────────────────────── */}
      <section className="space-y-8 border-t border-neutral-900 pt-16">
        <div className="space-y-3 max-w-3xl">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-indigo-400">
            // Operational Contracts
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            The Dogfooding &amp; Independence Matrix
          </h2>
          <p className="text-neutral-400 text-sm">
            Every integration across the studio is an optional consumer contract. Systems run standalone and do not require monolithic omnibus runtimes.
          </p>
        </div>

        <div className="overflow-x-auto rounded-sm border border-white/10 bg-[#060810]/70">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] font-mono text-neutral-400">
                <th className="py-4 px-6 font-bold">Host System</th>
                <th className="py-4 px-6 font-bold">Integrated Tool</th>
                <th className="py-4 px-6 font-bold">Nature of Integration</th>
                <th className="py-4 px-6 font-bold">Operational Without Tool?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 font-mono">
              {DOGFOODING_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-bold text-white">{row.host}</td>
                  <td className="py-4 px-6 font-bold text-indigo-400">{row.tool}</td>
                  <td className="py-4 px-6 text-neutral-300 font-sans">{row.purpose}</td>
                  <td className="py-4 px-6 font-medium text-emerald-400">{row.independent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── INSTITUTIONAL AUDIT GUIDANCE ─────────────────────────────── */}
      <section className="p-8 md:p-12 rounded-sm bg-indigo-950/20 border border-indigo-500/30 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">
            Guidance for Institutional &amp; Regulatory Evaluators
          </h3>
          <p className="text-sm text-neutral-300">
            If you are evaluating AnimusLab technologies for regulatory compliance or institutional deployment:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-sm bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase">1. Governance Audit</span>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Inspect <strong>Anchor Core &amp; anchor-web</strong> for statutory AST compilation, zero-copy Rust runtime hooks, and Decision Audit Chain cryptographic proofs.
            </p>
          </div>
          <div className="p-5 rounded-sm bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase">2. Security Audit</span>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Inspect <strong>Shadow_Watch</strong> for continuous ensemble scoring, KL-divergence behavioral modeling, and Jaccard entity continuity.
            </p>
          </div>
          <div className="p-5 rounded-sm bg-black/40 border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase">3. Storage Audit</span>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Inspect <strong>FORGE</strong> for .forge binary format parsing safety, in-memory query isolation, and Write-Ahead Logging integrity.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-indigo-500/20">
          <span className="text-xs font-mono text-neutral-400">
            Official specifications &amp; test suites are available in each respective repository.
          </span>
          <Link
            href="/constitution"
            className="text-xs font-mono font-bold px-6 py-3 bg-white text-black hover:bg-neutral-200 transition-colors rounded-sm"
          >
            Read AnimusLab Constitution →
          </Link>
        </div>
      </section>

    </div>
  );
}
