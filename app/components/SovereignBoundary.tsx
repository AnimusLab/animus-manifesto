'use client';

import React from 'react';

export default function SovereignBoundary() {
  return (
    <div className="relative border border-gray-800 rounded-xl overflow-hidden bg-[#050505] p-1 md:p-8 mt-12 mb-20 animate-fadeIn">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Visual Map */}
        <div className="relative aspect-square max-w-md mx-auto w-full border border-gray-900 rounded-lg p-6 bg-[#080808]">
          
          {/* External Hub */}
          <div className="absolute top-8 right-8 w-40 p-4 border border-blue-900 bg-blue-950/20 rounded-lg text-center">
            <div className="text-[10px] text-blue-400 font-mono tracking-widest mb-1">CLOUD HUB</div>
            <div className="text-[9px] text-gray-500 font-mono">Neon Postgres</div>
            <div className="mt-3 flex flex-col gap-1">
              <div className="h-1 bg-blue-500/30 rounded w-full" />
              <div className="h-1 bg-blue-500/10 rounded w-2/3" />
            </div>
            <div className="absolute -bottom-12 right-0 text-[10px] text-blue-500 font-mono italic">
              Metadata & Hashes Only
            </div>
          </div>

          {/* Connection Line */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none" viewBox="0 0 400 400">
            <path 
              d="M 120 280 L 280 120" 
              stroke="rgba(59, 130, 246, 0.2)" 
              strokeWidth="2" 
              strokeDasharray="4 4"
            />
            <circle cx="280" cy="120" r="4" fill="#3b82f6" fillOpacity="0.5" />
            <circle cx="120" cy="280" r="4" fill="#22c55e" fillOpacity="0.5" />
            
            {/* Moving Packet (Animated) */}
            <circle r="3" fill="#3b82f6">
              <animateMotion
                path="M 120 280 L 280 120"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* Enterprise Boundary */}
          <div className="absolute bottom-8 left-8 w-48 h-48 border-2 border-dashed border-green-900/40 rounded-2xl flex flex-col items-center justify-center bg-green-950/5">
            <div className="absolute -top-3 left-4 bg-[#080808] px-2 text-[10px] font-bold text-green-500 tracking-widest uppercase">
              Enterprise Boundary
            </div>
            
            <div className="p-3 border border-green-500/30 bg-green-500/10 rounded text-center mb-2">
              <div className="text-[10px] text-green-400 font-mono mb-1">SPOKE NODE</div>
              <div className="text-[9px] text-gray-400 font-mono italic">SQLite (Local)</div>
            </div>

            <div className="flex flex-col gap-1.5 w-full px-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded bg-green-500" />
                <div className="h-1 bg-green-900 rounded w-full" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded bg-green-500" />
                <div className="h-1 bg-green-900 rounded w-full" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded bg-green-500" />
                <div className="h-1 bg-green-900 rounded w-full" />
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <span className="text-[8px] text-green-600 font-mono uppercase tracking-tighter">Raw Forensic Data</span>
              <span className="text-[8px] text-green-800 font-mono tracking-widest">ENCRYPTED AT REST</span>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 right-4 text-[9px] font-mono text-gray-600 space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full border border-blue-500" />
              <span>Sovereign Relay Protocol</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full border border-green-500" />
              <span>Intra-Org Vault</span>
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