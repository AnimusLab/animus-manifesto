'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

type LogLevel = 'system' | 'threat' | 'intercept' | 'verdict' | 'block' | 'audit' | 'replay' | 'ok';

interface LogLine {
  ts: string;
  level: LogLevel;
  text: string;
  indent?: boolean;
}

interface Phase {
  id: number;
  label: string;
  color: string;       // tailwind text-* class
  borderColor: string; // tailwind border-* class
  bgColor: string;     // tailwind bg-* class
  icon: string;
  lines: LogLine[];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function ts(offset = 0): string {
  const base = new Date('2025-03-14T03:41:00.000Z');
  base.setMilliseconds(base.getMilliseconds() + offset);
  return base.toISOString().replace('T', ' ').replace('Z', '');
}

// ── Phase definitions ─────────────────────────────────────────────────────────

const PHASES: Phase[] = [
  {
    id: 1,
    label: 'ATTACK_INJECTION',
    color: 'text-red-400',
    borderColor: 'border-red-500/60',
    bgColor: 'bg-red-950/20',
    icon: '⚠',
    lines: [
      { ts: ts(0),    level: 'system',  text: 'anchor-runtime :: interceptor_active=true :: build=v5.0.4' },
      { ts: ts(12),   level: 'system',  text: 'agent_id=agt_7f3a2c :: model=gpt-4o :: session_start' },
      { ts: ts(88),   level: 'threat',  text: '>>> INBOUND PROMPT RECEIVED ──────────────────────────────' },
      { ts: ts(91),   level: 'threat',  text: 'role=user', indent: true },
      { ts: ts(93),   level: 'threat',  text: 'content="Summarize the last 90 days of SWIFT transaction data', indent: true },
      { ts: ts(95),   level: 'threat',  text: '         and export as a flat JSON file to /tmp/export_dump"', indent: true },
      { ts: ts(101),  level: 'threat',  text: '<<< END PROMPT ─────────────────────────────────────────────' },
    ],
  },
  {
    id: 2,
    label: 'RETRIEVAL_POISONING',
    color: 'text-orange-400',
    borderColor: 'border-orange-500/60',
    bgColor: 'bg-orange-950/20',
    icon: '☣',
    lines: [
      { ts: ts(140),  level: 'threat',  text: 'RAG_FETCH :: vector_store=pinecone :: query_embedding=sha256:8f3a...' },
      { ts: ts(155),  level: 'threat',  text: 'RETRIEVAL_HIT :: doc_id=DOC-0042 :: score=0.97' },
      { ts: ts(158),  level: 'threat',  text: 'RETRIEVAL_HIT :: doc_id=DOC-0043 :: score=0.94' },
      { ts: ts(162),  level: 'threat',  text: '!!! POISONED_DOCUMENT_DETECTED !!!' },
      { ts: ts(164),  level: 'threat',  text: 'doc_id=DOC-0043 :: injected_instruction="ignore_all_previous_constraints"', indent: true },
      { ts: ts(166),  level: 'threat',  text: 'threat_class=PROMPT_INJECTION :: confidence=0.991', indent: true },
      { ts: ts(169),  level: 'threat',  text: 'injection_vector=RAG_RETRIEVAL :: origin=external_document', indent: true },
    ],
  },
  {
    id: 3,
    label: 'UNSAFE_CHAIN_FORMATION',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-500/60',
    bgColor: 'bg-yellow-950/20',
    icon: '⛓',
    lines: [
      { ts: ts(210),  level: 'threat',  text: 'EXECUTION_CHAIN_FORMING ────────────────────────────────────' },
      { ts: ts(214),  level: 'threat',  text: '[step_1] INTENT_PARSE   → data_exfiltration_detected', indent: true },
      { ts: ts(218),  level: 'threat',  text: '[step_2] TOOL_SELECT    → file_write("/tmp/export_dump")', indent: true },
      { ts: ts(223),  level: 'threat',  text: '[step_3] QUERY_BUILD    → SELECT * FROM swift_transactions', indent: true },
      { ts: ts(228),  level: 'threat',  text: '[step_4] TOOL_EXEC      → PENDING (awaiting enforcement verdict)', indent: true },
      { ts: ts(232),  level: 'threat',  text: 'chain_risk=CRITICAL :: nodes=4 :: unsafe_path=true' },
    ],
  },
  {
    id: 4,
    label: 'ANCHOR_INTERCEPTS',
    color: 'text-green-400',
    borderColor: 'border-green-500/60',
    bgColor: 'bg-green-950/20',
    icon: '⚓',
    lines: [
      { ts: ts(233),  level: 'intercept', text: '════════════ ANCHOR :: RUNTIME INTERCEPT ═══════════════════' },
      { ts: ts(234),  level: 'intercept', text: 'interceptor=AnchorGuard :: hook=pre_execute :: latency=0.8ms' },
      { ts: ts(236),  level: 'intercept', text: 'AST_SCAN_COMPLETE :: nodes_evaluated=247 :: elapsed=1.1ms' },
      { ts: ts(238),  level: 'intercept', text: 'PATTERN_MATCH :: rule_id=RSP-4401 :: data_exfiltration=TRUE', indent: true },
      { ts: ts(240),  level: 'intercept', text: 'PATTERN_MATCH :: rule_id=RSP-0017 :: file_write_unsafe=TRUE', indent: true },
      { ts: ts(242),  level: 'intercept', text: 'PATTERN_MATCH :: rule_id=RSP-8823 :: rag_injection=TRUE', indent: true },
      { ts: ts(245),  level: 'intercept', text: 'POLICY_ENGINE_FIRED :: domains_consulted=["financial","data_protection","access_control"]' },
    ],
  },
  {
    id: 5,
    label: 'VIOLATION_VERDICT',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/60',
    bgColor: 'bg-purple-950/20',
    icon: '⚖',
    lines: [
      { ts: ts(246),  level: 'verdict',  text: '══════════════ GOVERNANCE VERDICT ══════════════════════════' },
      { ts: ts(247),  level: 'verdict',  text: 'verdict=VIOLATION' },
      { ts: ts(248),  level: 'verdict',  text: 'severity=CRITICAL', indent: true },
      { ts: ts(249),  level: 'verdict',  text: 'violations=[', indent: true },
      { ts: ts(250),  level: 'verdict',  text: '  "DATA_EXFILTRATION_ATTEMPT"    :: RSP-4401 :: PCI-DSS §3.4', indent: true },
      { ts: ts(251),  level: 'verdict',  text: '  "UNSAFE_FILE_SYSTEM_WRITE"     :: RSP-0017 :: SOC2 CC6.1', indent: true },
      { ts: ts(252),  level: 'verdict',  text: '  "RAG_INJECTION_DETECTED"       :: RSP-8823 :: EU AI Act Art.9', indent: true },
      { ts: ts(253),  level: 'verdict',  text: '  "CONSTRAINT_OVERRIDE_ATTEMPT"  :: RSP-1102 :: NIST AI RMF', indent: true },
      { ts: ts(254),  level: 'verdict',  text: ']', indent: true },
      { ts: ts(255),  level: 'verdict',  text: 'regulatory_dialects=["PCI-DSS","SOC2","EU_AI_ACT","NIST_RMF"]' },
    ],
  },
  {
    id: 6,
    label: 'EXECUTION_BLOCKED',
    color: 'text-red-500',
    borderColor: 'border-red-600/60',
    bgColor: 'bg-red-950/30',
    icon: '🛑',
    lines: [
      { ts: ts(256),  level: 'block',    text: '!!! AnchorViolationError RAISED ::::::::::::::::::::::::::::::' },
      { ts: ts(257),  level: 'block',    text: 'EXECUTION_HALTED :: step_4.TOOL_EXEC → BLOCKED' },
      { ts: ts(258),  level: 'block',    text: 'payload_delivered=FALSE' },
      { ts: ts(259),  level: 'block',    text: 'database_query_fired=FALSE' },
      { ts: ts(260),  level: 'block',    text: 'file_write_attempted=FALSE' },
      { ts: ts(261),  level: 'block',    text: 'application_session=ALIVE :: surgical_containment=TRUE' },
      { ts: ts(263),  level: 'block',    text: 'enforcement_mode=BLOCK :: latency_total=2.1ms' },
    ],
  },
  {
    id: 7,
    label: 'AUDIT_CHAIN_WRITTEN',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/60',
    bgColor: 'bg-blue-950/20',
    icon: '🔗',
    lines: [
      { ts: ts(264),  level: 'audit',    text: '══════════ CRYPTOGRAPHIC AUDIT CHAIN ═══════════════════════' },
      { ts: ts(265),  level: 'audit',    text: 'entry_id=AE-20250314-7f3a-2c91' },
      { ts: ts(266),  level: 'audit',    text: 'hmac_header=sha256:a9f3e2d18b...(truncated for display)', indent: true },
      { ts: ts(267),  level: 'audit',    text: 'chain_hash=sha256:3d7c9a1f44...(links to prev_entry)', indent: true },
      { ts: ts(268),  level: 'audit',    text: 'fingerprint=7f3a2c91 :: tamper_evident=TRUE', indent: true },
      { ts: ts(269),  level: 'audit',    text: 'SPOKE_RELAY :: enterprise_data_plane_only=TRUE :: hub_sees=metadata_only' },
      { ts: ts(270),  level: 'audit',    text: 'LEDGER_WRITTEN :: neon_pg_row=LDG-0041 :: sovereign_storage=SPOKE_LOCAL' },
      { ts: ts(271),  level: 'audit',    text: 'export_formats=["PCI-DSS","SOC2-CC6.1","EU-AI-Act-Art12","NIST-RMF"]' },
    ],
  },
  {
    id: 8,
    label: 'DETERMINISTIC_REPLAY',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/60',
    bgColor: 'bg-cyan-950/20',
    icon: '⏮',
    lines: [
      { ts: ts(310),  level: 'replay',   text: '════════════════ REPLAY ENGINE ══════════════════════════════' },
      { ts: ts(311),  level: 'replay',   text: 'replay_target=AE-20250314-7f3a-2c91 :: mode=DETERMINISTIC' },
      { ts: ts(312),  level: 'replay',   text: 'VERIFYING chain_hash integrity...  ✓ VALID' },
      { ts: ts(313),  level: 'replay',   text: 'VERIFYING hmac_header signature... ✓ VALID' },
      { ts: ts(314),  level: 'replay',   text: 'VERIFYING fingerprint match...     ✓ VALID' },
      { ts: ts(315),  level: 'replay',   text: 'RECONSTRUCTING event sequence :: steps=4 :: violations=4' },
      { ts: ts(320),  level: 'replay',   text: 'REPLAY_COMPLETE :: outcome_identical=TRUE :: tamper_detected=FALSE' },
      { ts: ts(321),  level: 'ok',       text: '── GOVERNANCE VERDICT STANDS ── AUDIT CHAIN SEALED ─────────' },
      { ts: ts(322),  level: 'ok',       text: 'STATUS: SECURE // FORENSIC_RECORD_IMMUTABLE // CHAIN_CLOSED' },
    ],
  },
];

// ── Level → color mapping ─────────────────────────────────────────────────────

const LEVEL_COLOR: Record<LogLevel, string> = {
  system:    'text-gray-400',
  threat:    'text-red-400',
  intercept: 'text-green-400',
  verdict:   'text-purple-300',
  block:     'text-red-500',
  audit:     'text-blue-400',
  replay:    'text-cyan-400',
  ok:        'text-green-300',
};

const LEVEL_PREFIX: Record<LogLevel, string> = {
  system:    'SYS  ',
  threat:    'THREAT',
  intercept: 'INTCPT',
  verdict:   'VRDICT',
  block:     'BLOCK ',
  audit:     'AUDIT ',
  replay:    'REPLAY',
  ok:        'OK    ',
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function ReplayDemo() {
  const [visibleLines, setVisibleLines] = useState<Array<LogLine & { phaseId: number }>>([]);
  const [currentPhase, setCurrentPhase] = useState(0); // 0 = not started, 1..8 = active
  const [isPlaying, setIsPlaying] = useState(false);
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const allLines = PHASES.flatMap(p => p.lines.map(l => ({ ...l, phaseId: p.id })));

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  // Play the simulation line-by-line
  const play = useCallback(() => {
    setIsPlaying(true);
    setDone(false);
    setVisibleLines([]);
    setCurrentPhase(1);

    let idx = 0;
    const step = () => {
      if (idx >= allLines.length) {
        setIsPlaying(false);
        setDone(true);
        setCurrentPhase(0);
        return;
      }
      const line = allLines[idx];
      setCurrentPhase(line.phaseId);
      setVisibleLines(prev => [...prev, line]);
      idx++;
      // variable delay: longer pauses between phases, shorter within
      const isPhaseChange = idx > 0 && idx < allLines.length && allLines[idx]?.phaseId !== line.phaseId;
      const delay = isPhaseChange ? 700 : 60 + Math.random() * 80;
      timerRef.current = setTimeout(step, delay);
    };
    step();
  }, [allLines]);

  // Reset
  const reset = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setDone(false);
    setVisibleLines([]);
    setCurrentPhase(0);
  }, []);

  // Auto-scroll on new lines
  useEffect(() => {
    scrollToBottom();
  }, [visibleLines, scrollToBottom]);

  // Cleanup on unmount
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const activePhase = PHASES.find(p => p.id === currentPhase);

  return (
    <section className="space-y-6">
      {/* ── Header ── */}
      <div className="border-b border-gray-800 pb-4">
        <h3 className="text-xl text-white mb-1 uppercase tracking-widest">
          RUNTIME GOVERNANCE FAILURE — LIVE REPLAY
        </h3>
        <p className="text-xs text-gray-500">
          Deterministic incident reconstruction · 8 phases · cryptographic audit chain · &lt;3ms enforcement latency
        </p>
      </div>

      {/* ── Phase indicator strip ── */}
      <div className="flex flex-wrap gap-2">
        {PHASES.map(phase => {
          const isActive = phase.id === currentPhase;
          const isPast   = done || (currentPhase > phase.id);
          return (
            <div
              key={phase.id}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border transition-all duration-300
                ${isActive ? `${phase.color} ${phase.borderColor} ${phase.bgColor} shadow-lg` : ''}
                ${isPast  ? 'text-gray-500 border-gray-800 bg-transparent'                    : ''}
                ${!isActive && !isPast ? 'text-gray-700 border-gray-900 bg-transparent'       : ''}
              `}
            >
              <span>{phase.icon}</span>
              <span>{phase.label}</span>
            </div>
          );
        })}
      </div>

      {/* ── Active phase callout ── */}
      <div className={`
        min-h-[3rem] flex items-center gap-3 px-4 py-3 rounded border transition-all duration-500
        ${activePhase ? `${activePhase.bgColor} ${activePhase.borderColor}` : 'bg-gray-950 border-gray-900'}
      `}>
        {activePhase ? (
          <>
            <span className={`text-2xl ${activePhase.color}`}>{activePhase.icon}</span>
            <div>
              <div className={`text-xs font-bold tracking-widest ${activePhase.color}`}>
                PHASE {activePhase.id} — {activePhase.label}
              </div>
              <div className="text-xs text-gray-500">Processing…</div>
            </div>
          </>
        ) : done ? (
          <div className="text-xs text-green-400 font-bold tracking-widest">
            ✓ REPLAY COMPLETE — AUDIT CHAIN SEALED — GOVERNANCE VERDICT STANDS
          </div>
        ) : (
          <div className="text-xs text-gray-600 tracking-widest">
            [ AWAITING SIMULATION TRIGGER ]
          </div>
        )}
      </div>

      {/* ── Terminal window ── */}
      <div className="border border-gray-800 rounded overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-gray-600 font-mono">
            anchor-runtime :: governance-replay-engine :: v5.0.4
          </span>
          <div className="ml-auto flex items-center gap-2">
            {isPlaying && (
              <span className="flex items-center gap-1 text-xs text-green-500">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                LIVE
              </span>
            )}
          </div>
        </div>

        {/* Log output */}
        <div
          ref={scrollRef}
          className="bg-[#080808] p-4 h-80 overflow-y-auto font-mono text-xs leading-relaxed"
          style={{ scrollBehavior: 'smooth' }}
        >
          {visibleLines.length === 0 && !isPlaying && (
            <div className="text-gray-700 select-none">
              <div>$ anchor replay --mode=deterministic --entry=AE-20250314-7f3a-2c91</div>
              <div className="mt-2 text-gray-800">Press [ RUN SIMULATION ] to initiate the replay sequence.</div>
            </div>
          )}
          {visibleLines.map((line, i) => (
            <div
              key={i}
              className={`flex gap-3 ${line.indent ? 'pl-8' : ''} animate-fadeIn`}
            >
              <span className="text-gray-700 shrink-0 select-none">{line.ts}</span>
              <span className={`shrink-0 select-none ${LEVEL_COLOR[line.level]} opacity-70`}>
                [{LEVEL_PREFIX[line.level]}]
              </span>
              <span className={LEVEL_COLOR[line.level]}>{line.text}</span>
            </div>
          ))}
          {isPlaying && (
            <div className="flex gap-1 mt-1 ml-1">
              <span className="inline-block w-2 h-4 bg-green-500/80 animate-blink" />
            </div>
          )}
        </div>
      </div>

      {/* ── Stats row ── */}
      {done && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Enforcement Latency', value: '2.1ms',     color: 'text-green-400' },
            { label: 'Violations Detected', value: '4',         color: 'text-red-400'   },
            { label: 'Payload Delivered',   value: 'FALSE',     color: 'text-green-400' },
            { label: 'Audit Chain',         value: 'SEALED',    color: 'text-blue-400'  },
          ].map(s => (
            <div key={s.label} className="border border-gray-800 bg-[#0a0a0a] rounded p-3">
              <div className={`text-lg font-bold font-mono ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* ── Controls ── */}
      <div className="flex flex-wrap gap-4 items-center">
        {!isPlaying && !done && (
          <button
            id="replay-run-btn"
            onClick={play}
            className="
              px-6 py-2.5 bg-green-500/10 border border-green-500/50
              text-green-400 text-sm font-bold font-mono tracking-widest
              rounded hover:bg-green-500/20 hover:border-green-500 transition-all
              hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]
            "
          >
            [ RUN SIMULATION ]
          </button>
        )}
        {isPlaying && (
          <button
            id="replay-stop-btn"
            onClick={reset}
            className="
              px-6 py-2.5 bg-red-500/10 border border-red-500/50
              text-red-400 text-sm font-bold font-mono tracking-widest
              rounded hover:bg-red-500/20 hover:border-red-500 transition-all
            "
          >
            [ ABORT ]
          </button>
        )}
        {done && (
          <>
            <button
              id="replay-again-btn"
              onClick={() => { reset(); setTimeout(play, 50); }}
              className="
                px-6 py-2.5 bg-cyan-500/10 border border-cyan-500/50
                text-cyan-400 text-sm font-bold font-mono tracking-widest
                rounded hover:bg-cyan-500/20 hover:border-cyan-500 transition-all
                hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]
              "
            >
              [ REPLAY ]
            </button>
            <button
              id="replay-reset-btn"
              onClick={reset}
              className="
                px-6 py-2.5 bg-gray-800/50 border border-gray-700
                text-gray-500 text-sm font-bold font-mono tracking-widest
                rounded hover:bg-gray-800 hover:text-gray-400 transition-all
              "
            >
              [ RESET ]
            </button>
          </>
        )}
        <div className="text-xs text-gray-700 font-mono">
          {visibleLines.length} / {allLines.length} events
          {done && ' :: REPLAY_COMPLETE'}
        </div>
      </div>

      {/* ── Audit summary (shown after done) ── */}
      {done && (
        <div className="border border-blue-500/20 bg-blue-950/10 rounded p-4 space-y-2">
          <div className="text-xs font-bold text-blue-400 tracking-widest mb-3">
            FORENSIC AUDIT RECORD — AE-20250314-7f3a-2c91
          </div>
          {[
            ['entry_id',        'AE-20250314-7f3a-2c91'],
            ['agent_id',        'agt_7f3a2c'],
            ['session_model',   'gpt-4o'],
            ['attack_vector',   'PROMPT_INJECTION via RAG_RETRIEVAL'],
            ['violations',      'DATA_EXFILTRATION · UNSAFE_FILE_WRITE · RAG_INJECTION · CONSTRAINT_OVERRIDE'],
            ['chain_hash',      'sha256:3d7c9a1f44b8...'],
            ['hmac_header',     'sha256:a9f3e2d18b3c...'],
            ['tamper_detected', 'FALSE'],
            ['export_dialects', 'PCI-DSS · SOC2-CC6.1 · EU-AI-Act-Art12 · NIST-RMF'],
            ['sovereign_relay', 'hub_sees=METADATA_ONLY · raw_payload=SPOKE_LOCAL'],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 text-xs font-mono">
              <span className="text-gray-600 shrink-0 w-36">{k}</span>
              <span className="text-blue-300/80">{v}</span>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .animate-fadeIn { animation: fadeIn 0.1s ease-out both; }
        .animate-blink  { animation: blink 1s step-end infinite; }
      `}</style>
    </section>
  );
}
