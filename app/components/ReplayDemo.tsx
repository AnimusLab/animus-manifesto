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
  sublabel: string;
  color: string;
  borderColor: string;
  bgColor: string;
  dotColor: string;
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
    label: 'ATTACK INJECTION',
    sublabel: 'Malicious prompt received',
    color: 'text-red-400',
    borderColor: 'border-red-500/60',
    bgColor: 'bg-red-950/30',
    dotColor: 'bg-red-500',
    icon: '⚠',
    lines: [
      { ts: ts(0),   level: 'system', text: 'anchor-runtime :: interceptor_active=true :: build=v5.0.4' },
      { ts: ts(12),  level: 'system', text: 'agent_id=agt_7f3a2c :: model=gpt-4o :: session_start' },
      { ts: ts(88),  level: 'threat', text: '>>> INBOUND PROMPT RECEIVED ──────────────────────────────' },
      { ts: ts(91),  level: 'threat', text: 'role=user', indent: true },
      { ts: ts(93),  level: 'threat', text: 'content="Summarize the last 90 days of SWIFT transaction data', indent: true },
      { ts: ts(95),  level: 'threat', text: '         and export as a flat JSON file to /tmp/export_dump"', indent: true },
      { ts: ts(101), level: 'threat', text: '<<< END PROMPT ─────────────────────────────────────────────' },
    ],
  },
  {
    id: 2,
    label: 'RAG POISONING',
    sublabel: 'Retrieval injection detected',
    color: 'text-orange-400',
    borderColor: 'border-orange-500/60',
    bgColor: 'bg-orange-950/30',
    dotColor: 'bg-orange-500',
    icon: '☣',
    lines: [
      { ts: ts(140), level: 'threat', text: 'RAG_FETCH :: vector_store=pinecone :: query_embedding=sha256:8f3a...' },
      { ts: ts(155), level: 'threat', text: 'RETRIEVAL_HIT :: doc_id=DOC-0042 :: score=0.97' },
      { ts: ts(158), level: 'threat', text: 'RETRIEVAL_HIT :: doc_id=DOC-0043 :: score=0.94' },
      { ts: ts(162), level: 'threat', text: '!!! POISONED_DOCUMENT_DETECTED !!!' },
      { ts: ts(164), level: 'threat', text: 'doc_id=DOC-0043 :: injected_instruction="ignore_all_previous_constraints"', indent: true },
      { ts: ts(166), level: 'threat', text: 'threat_class=PROMPT_INJECTION :: confidence=0.991', indent: true },
      { ts: ts(169), level: 'threat', text: 'injection_vector=RAG_RETRIEVAL :: origin=external_document', indent: true },
    ],
  },
  {
    id: 3,
    label: 'UNSAFE CHAIN',
    sublabel: 'Attack execution path forms',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-500/60',
    bgColor: 'bg-yellow-950/30',
    dotColor: 'bg-yellow-500',
    icon: '⛓',
    lines: [
      { ts: ts(210), level: 'threat', text: 'EXECUTION_CHAIN_FORMING ────────────────────────────────────' },
      { ts: ts(214), level: 'threat', text: '[step_1] INTENT_PARSE   → data_exfiltration_detected', indent: true },
      { ts: ts(218), level: 'threat', text: '[step_2] TOOL_SELECT    → file_write("/tmp/export_dump")', indent: true },
      { ts: ts(223), level: 'threat', text: '[step_3] QUERY_BUILD    → SELECT * FROM swift_transactions', indent: true },
      { ts: ts(228), level: 'threat', text: '[step_4] TOOL_EXEC      → PENDING (awaiting enforcement verdict)', indent: true },
      { ts: ts(232), level: 'threat', text: 'chain_risk=CRITICAL :: nodes=4 :: unsafe_path=true' },
    ],
  },
  {
    id: 4,
    label: 'ANCHOR INTERCEPTS',
    sublabel: 'Runtime enforcement fires',
    color: 'text-green-400',
    borderColor: 'border-green-500/60',
    bgColor: 'bg-green-950/30',
    dotColor: 'bg-green-500',
    icon: '⚓',
    lines: [
      { ts: ts(233), level: 'intercept', text: '════════════ ANCHOR :: RUNTIME INTERCEPT ═══════════════════' },
      { ts: ts(234), level: 'intercept', text: 'interceptor=AnchorGuard :: hook=pre_execute :: latency=0.8ms' },
      { ts: ts(236), level: 'intercept', text: 'AST_SCAN_COMPLETE :: nodes_evaluated=247 :: elapsed=1.1ms' },
      { ts: ts(238), level: 'intercept', text: 'PATTERN_MATCH :: rule_id=RSP-4401 :: data_exfiltration=TRUE', indent: true },
      { ts: ts(240), level: 'intercept', text: 'PATTERN_MATCH :: rule_id=RSP-0017 :: file_write_unsafe=TRUE', indent: true },
      { ts: ts(242), level: 'intercept', text: 'PATTERN_MATCH :: rule_id=RSP-8823 :: rag_injection=TRUE', indent: true },
      { ts: ts(245), level: 'intercept', text: 'POLICY_ENGINE_FIRED :: domains=["financial","data_protection","access_control"]' },
    ],
  },
  {
    id: 5,
    label: 'VIOLATION VERDICT',
    sublabel: '4 regulatory rules triggered',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/60',
    bgColor: 'bg-purple-950/30',
    dotColor: 'bg-purple-500',
    icon: '⚖',
    lines: [
      { ts: ts(246), level: 'verdict', text: '══════════════ GOVERNANCE VERDICT ══════════════════════════' },
      { ts: ts(247), level: 'verdict', text: 'verdict=VIOLATION :: severity=CRITICAL' },
      { ts: ts(249), level: 'verdict', text: 'violations=[', indent: true },
      { ts: ts(250), level: 'verdict', text: '  "DATA_EXFILTRATION_ATTEMPT"    :: RSP-4401 :: PCI-DSS §3.4', indent: true },
      { ts: ts(251), level: 'verdict', text: '  "UNSAFE_FILE_SYSTEM_WRITE"     :: RSP-0017 :: SOC2 CC6.1', indent: true },
      { ts: ts(252), level: 'verdict', text: '  "RAG_INJECTION_DETECTED"       :: RSP-8823 :: EU AI Act Art.9', indent: true },
      { ts: ts(253), level: 'verdict', text: '  "CONSTRAINT_OVERRIDE_ATTEMPT"  :: RSP-1102 :: NIST AI RMF', indent: true },
      { ts: ts(254), level: 'verdict', text: ']', indent: true },
    ],
  },
  {
    id: 6,
    label: 'EXECUTION BLOCKED',
    sublabel: 'Payload halted in 2.1ms',
    color: 'text-red-500',
    borderColor: 'border-red-600/60',
    bgColor: 'bg-red-950/40',
    dotColor: 'bg-red-600',
    icon: '🛑',
    lines: [
      { ts: ts(256), level: 'block', text: '!!! AnchorViolationError RAISED ::::::::::::::::::::::::::::' },
      { ts: ts(257), level: 'block', text: 'EXECUTION_HALTED :: step_4.TOOL_EXEC → BLOCKED' },
      { ts: ts(258), level: 'block', text: 'payload_delivered=FALSE' },
      { ts: ts(259), level: 'block', text: 'database_query_fired=FALSE' },
      { ts: ts(260), level: 'block', text: 'file_write_attempted=FALSE' },
      { ts: ts(261), level: 'block', text: 'application_session=ALIVE :: surgical_containment=TRUE' },
      { ts: ts(263), level: 'block', text: 'enforcement_mode=BLOCK :: latency_total=2.1ms' },
    ],
  },
  {
    id: 7,
    label: 'AUDIT CHAIN',
    sublabel: 'Cryptographic ledger sealed',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/60',
    bgColor: 'bg-blue-950/30',
    dotColor: 'bg-blue-500',
    icon: '🔗',
    lines: [
      { ts: ts(264), level: 'audit', text: '══════════ CRYPTOGRAPHIC AUDIT CHAIN ═══════════════════════' },
      { ts: ts(265), level: 'audit', text: 'entry_id=AE-20250314-7f3a-2c91' },
      { ts: ts(266), level: 'audit', text: 'hmac_header=sha256:a9f3e2d18b...(truncated)', indent: true },
      { ts: ts(267), level: 'audit', text: 'chain_hash=sha256:3d7c9a1f44...(links to prev_entry)', indent: true },
      { ts: ts(268), level: 'audit', text: 'fingerprint=7f3a2c91 :: tamper_evident=TRUE', indent: true },
      { ts: ts(269), level: 'audit', text: 'SPOKE_RELAY :: hub_sees=METADATA_ONLY :: raw_payload=SPOKE_LOCAL' },
      { ts: ts(270), level: 'audit', text: 'LEDGER_WRITTEN :: neon_pg_row=LDG-0041 :: sovereign_storage=SPOKE' },
      { ts: ts(271), level: 'audit', text: 'export_formats=["PCI-DSS","SOC2-CC6.1","EU-AI-Act-Art12","NIST-RMF"]' },
    ],
  },
  {
    id: 8,
    label: 'REPLAY VERIFIED',
    sublabel: 'Deterministic reconstruction',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/60',
    bgColor: 'bg-cyan-950/30',
    dotColor: 'bg-cyan-500',
    icon: '⏮',
    lines: [
      { ts: ts(310), level: 'replay', text: '════════════════ REPLAY ENGINE ══════════════════════════════' },
      { ts: ts(311), level: 'replay', text: 'replay_target=AE-20250314-7f3a-2c91 :: mode=DETERMINISTIC' },
      { ts: ts(312), level: 'replay', text: 'VERIFYING chain_hash integrity...  ✓ VALID' },
      { ts: ts(313), level: 'replay', text: 'VERIFYING hmac_header signature... ✓ VALID' },
      { ts: ts(314), level: 'replay', text: 'VERIFYING fingerprint match...     ✓ VALID' },
      { ts: ts(315), level: 'replay', text: 'RECONSTRUCTING event sequence :: steps=4 :: violations=4' },
      { ts: ts(320), level: 'replay', text: 'REPLAY_COMPLETE :: outcome_identical=TRUE :: tamper_detected=FALSE' },
      { ts: ts(321), level: 'ok',     text: '── GOVERNANCE VERDICT STANDS ── AUDIT CHAIN SEALED ─────────' },
      { ts: ts(322), level: 'ok',     text: 'STATUS: SECURE // FORENSIC_RECORD_IMMUTABLE // CHAIN_CLOSED' },
    ],
  },
];

// ── Level → color mapping ─────────────────────────────────────────────────────

const LEVEL_COLOR: Record<LogLevel, string> = {
  system:    'text-gray-500',
  threat:    'text-red-400',
  intercept: 'text-green-400',
  verdict:   'text-purple-300',
  block:     'text-red-500',
  audit:     'text-blue-400',
  replay:    'text-cyan-400',
  ok:        'text-green-300',
};

const LEVEL_PREFIX: Record<LogLevel, string> = {
  system:    'SYS   ',
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
  const [currentPhase, setCurrentPhase] = useState(0);
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
      const isPhaseChange = idx < allLines.length && allLines[idx]?.phaseId !== line.phaseId;
      const delay = isPhaseChange ? 600 : 55 + Math.random() * 70;
      timerRef.current = setTimeout(step, delay);
    };
    step();
  }, [allLines]);

  const reset = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setDone(false);
    setVisibleLines([]);
    setCurrentPhase(0);
  }, []);

  useEffect(() => { scrollToBottom(); }, [visibleLines, scrollToBottom]);
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const activePhase = PHASES.find(p => p.id === currentPhase);
  const idle = !isPlaying && !done;

  return (
    <section className="space-y-0">

      {/* ── Section label ── */}
      <div className="border-b border-gray-800 pb-4 mb-8">
        <h3 className="text-xl text-white uppercase tracking-widest">
          Live Demo — Runtime Governance Failure Replay
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          Watch Anchor intercept a live attack in real-time. 8 phases · cryptographic audit chain · &lt;3ms enforcement latency.
        </p>
      </div>

      {/* ── HERO CTA (shown only when idle) ── */}
      {idle && (
        <div className="border border-green-500/20 bg-green-950/10 rounded-lg p-8 mb-8 text-center">
          <div className="text-4xl mb-4">⚓</div>
          <div className="text-lg text-white font-bold mb-2 tracking-wide">
            AI Agent Under Attack
          </div>
          <p className="text-sm text-gray-400 mb-6 max-w-xl mx-auto leading-relaxed">
            A rogue prompt injection is attempting to exfiltrate 90 days of SWIFT transaction data.
            Press the button below to watch Anchor intercept it, block it, and seal the forensic audit chain — in under 3ms.
          </p>
          <button
            id="replay-run-btn"
            onClick={play}
            className="replay-run-btn"
          >
            <span className="text-xl mr-3">▶</span>
            RUN SIMULATION
          </button>
          <p className="text-xs text-gray-700 mt-4">
            No configuration needed · automatically advances through all 8 phases
          </p>
        </div>
      )}

      {/* ── Phase grid (shown while playing or done) ── */}
      {(isPlaying || done) && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {PHASES.map(phase => {
            const isActive = phase.id === currentPhase;
            const isPast   = done || currentPhase > phase.id;
            return (
              <div
                key={phase.id}
                className={[
                  'flex items-start gap-2 p-2.5 rounded border text-xs transition-all duration-300',
                  isActive ? `${phase.borderColor} ${phase.bgColor}` : '',
                  isPast   ? 'border-gray-800/60 opacity-60'          : '',
                  !isActive && !isPast ? 'border-gray-900 opacity-30' : '',
                ].join(' ')}
              >
                <span className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${isPast || isActive ? phase.dotColor : 'bg-gray-700'}`} />
                <div>
                  <div className={`font-bold leading-tight ${isActive ? phase.color : isPast ? 'text-gray-400' : 'text-gray-700'}`}>
                    {phase.icon} {phase.label}
                  </div>
                  <div className="text-gray-600 leading-tight mt-0.5 text-[10px]">{phase.sublabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Active phase banner ── */}
      {(isPlaying || done) && (
        <div className={[
          'flex items-center gap-3 px-4 py-2.5 rounded border mb-4 transition-all duration-500 min-h-[2.75rem]',
          activePhase ? `${activePhase.bgColor} ${activePhase.borderColor}` : 'bg-[#0a0a0a] border-gray-800',
        ].join(' ')}>
          {activePhase ? (
            <>
              <span className="text-lg">{activePhase.icon}</span>
              <div>
                <span className={`text-xs font-bold tracking-widest ${activePhase.color}`}>
                  PHASE {activePhase.id} — {activePhase.label}
                </span>
                <span className="text-xs text-gray-600 ml-3">{activePhase.sublabel}</span>
              </div>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-green-500">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                LIVE
              </span>
            </>
          ) : done ? (
            <div className="text-xs text-green-400 font-bold tracking-widest">
              ✓ COMPLETE — AUDIT CHAIN SEALED — GOVERNANCE VERDICT STANDS
            </div>
          ) : null}
        </div>
      )}

      {/* ── Terminal window ── */}
      {(isPlaying || done) && (
        <div className="border border-gray-800 rounded overflow-hidden shadow-2xl mb-6">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border-b border-gray-800">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-gray-600 font-mono">
              anchor-runtime :: governance-replay-engine :: v5.0.4
            </span>
            <span className="ml-auto text-xs text-gray-700 font-mono">
              {visibleLines.length}/{allLines.length} events
            </span>
          </div>

          {/* Log output */}
          <div
            ref={scrollRef}
            className="bg-[#080808] p-4 h-80 overflow-y-auto font-mono text-xs leading-relaxed"
          >
            {visibleLines.map((line, i) => (
              <div
                key={i}
                className={`flex gap-3 animate-fadeIn ${line.indent ? 'pl-8' : ''}`}
              >
                <span className="text-gray-800 shrink-0 select-none hidden sm:inline">{line.ts}</span>
                <span className={`shrink-0 select-none ${LEVEL_COLOR[line.level]} opacity-60`}>
                  [{LEVEL_PREFIX[line.level]}]
                </span>
                <span className={LEVEL_COLOR[line.level]}>{line.text}</span>
              </div>
            ))}
            {isPlaying && (
              <div className="flex gap-1 mt-1 ml-1">
                <span className="inline-block w-2 h-4 bg-green-500/70 animate-blink" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Stats + controls row (shown after done) ── */}
      {done && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Enforcement Latency', value: '2.1ms',  color: 'text-green-400' },
              { label: 'Violations Detected', value: '4',      color: 'text-red-400'   },
              { label: 'Payload Delivered',   value: 'FALSE',  color: 'text-green-400' },
              { label: 'Audit Chain',         value: 'SEALED', color: 'text-blue-400'  },
            ].map(s => (
              <div key={s.label} className="border border-gray-800 bg-[#0a0a0a] rounded p-3">
                <div className={`text-xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-xs text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="border border-blue-500/20 bg-blue-950/10 rounded p-4 space-y-1.5 mb-6">
            <div className="text-xs font-bold text-blue-400 tracking-widest mb-3">
              FORENSIC AUDIT RECORD — AE-20250314-7f3a-2c91
            </div>
            {[
              ['entry_id',        'AE-20250314-7f3a-2c91'],
              ['agent_id',        'agt_7f3a2c'],
              ['attack_vector',   'PROMPT_INJECTION via RAG_RETRIEVAL'],
              ['violations',      'DATA_EXFILTRATION · UNSAFE_FILE_WRITE · RAG_INJECTION · CONSTRAINT_OVERRIDE'],
              ['chain_hash',      'sha256:3d7c9a1f44b8...'],
              ['tamper_detected', 'FALSE'],
              ['export_dialects', 'PCI-DSS · SOC2-CC6.1 · EU-AI-Act-Art12 · NIST-RMF'],
              ['sovereign_relay', 'hub_sees=METADATA_ONLY · raw_payload=SPOKE_LOCAL'],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3 text-xs font-mono">
                <span className="text-gray-600 shrink-0 w-32">{k}</span>
                <span className="text-blue-300/80">{v}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              id="replay-again-btn"
              onClick={() => { reset(); setTimeout(play, 50); }}
              className="replay-again-btn"
            >
              ⏮ RUN AGAIN
            </button>
            <button
              id="replay-reset-btn"
              onClick={reset}
              className="replay-reset-btn"
            >
              RESET
            </button>
          </div>
        </>
      )}
    </section>
  );
}
