'use client';

import React, { useEffect, useState } from 'react';

export default function SovereignBoundary() {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative border border-gray-800 rounded-xl overflow-hidden bg-[#050505] p-1 md:p-8 mt-12 mb-20 animate-fadeIn">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Diagram Column */}
        <div className="flex flex-col gap-6">
          {/* Visual Diagram */}
          <div className="relative w-full aspect-square max-w-xs border border-gray-900 rounded-lg bg-[#080808] shadow-inner overflow-hidden">
            {/* Diagonal line with animated packet */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
              <path 
                d="M 50 250 L 250 50" 
                stroke="rgba(59, 130, 246, 0.25)" 
                strokeWidth="2.5" 
                strokeDasharray="6 4"
              />
              <circle cx="250" cy="50" r="6" fill="#3b82f6" fillOpacity="0.5" />
              <circle cx="50" cy="250" r="6" fill="#22c55e" fillOpacity="0.5" />
              <circle 
                r="5" 
                fill="#60a5fa"
                cx={50 + (200 * animationPhase / 100)}
                cy={250 - (200 * animationPhase / 100)}
              />
            </svg>
          </div>

          {/* Endpoint Labels Below Diagram */}
          <div className="grid grid-cols-2 gap-4 text-center">
            {/* Spoke (Bottom-Left Endpoint) */}
            <div className="border border-green-900/40 bg-green-950/10 rounded p-3">
              <div className="text-[10px] text-green-400 font-mono font-bold tracking-widest">SPOKE</div>
              <div className="text-[9px] text-green-300/60 font-mono mt-1">Local SQLite</div>
              <div className="text-[8px] text-green-500/50 font-mono italic mt-2">Forensic Data</div>
            </div>

            {/* Hub (Top-Right Endpoint) */}
            <div className="border border-blue-900/40 bg-blue-950/10 rounded p-3">
              <div className="text-[10px] text-blue-400 font-mono font-bold tracking-widest">HUB</div>
              <div className="text-[9px] text-blue-300/60 font-mono mt-1">Neon Postgres</div>
              <div className="text-[8px] text-blue-500/50 font-mono italic mt-2">Metadata Only</div>
            </div>
          </div>

          {/* Legend */}
          <div className="text-[9px] font-mono text-gray-500 bg-black/40 p-3 rounded border border-gray-900/50 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Sovereign Relay Protocol (v2)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Intra-Org Vault (Local)</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 leading-tight">Data Sovereignty by Design</h2>
            <p className="text-sm text-gray-400 font-mono leading-relaxed">
              Anchor utilizes a <span className="text-blue-400">Decentralized Governance Topology</span> where high-sensitivity forensic data never leaves your infrastructure boundaries via REST or standard telemetry paths.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 border border-gray-900 rounded bg-[#080808]/50">
              <div className="text-blue-500 text-xl font-bold font-mono">01</div>
              <div>
                <div className="text-xs font-bold text-gray-200 tracking-widest uppercase mb-1">Cryptographic Header Tossing</div>
                <p className="text-[11px] text-gray-500 font-mono leading-normal">
                  Spoke nodes transmit only ~200 bytes of metadata (chain hashes and compliance flags) to the central Hub.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-gray-900 rounded bg-[#080808]/50">
              <div className="text-green-500 text-xl font-bold font-mono">02</div>
              <div>
                <div className="text-xs font-bold text-gray-200 tracking-widest uppercase mb-1">Local Spoke Storage</div>
                <p className="text-[11px] text-gray-500 font-mono leading-normal">
                  Raw prompts, RAG hits, and tool outputs are stored in a project-local SQLite database. Your data is isolated per-entity.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-gray-900 rounded bg-[#080808]/50">
              <div className="text-cyan-500 text-xl font-bold font-mono">03</div>
              <div>
                <div className="text-xs font-bold text-gray-200 tracking-widest uppercase mb-1">On-Demand Forensic Relay</div>
                <p className="text-[11px] text-gray-500 font-mono leading-normal">
                  Auditors request forensic access via the Sovereign Relay Protocol. Data is AES-256-GCM encrypted at the edge before transit.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}