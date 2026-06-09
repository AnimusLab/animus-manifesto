'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Preset {
  name: string;
  description: string;
  policy: string;
  code: string;
}

const PLAYGROUND_PRESETS: Preset[] = [
  {
    name: '1. Knight Capital PowerPeg',
    description: 'Accidental reactivation of a legacy deprecated component (PowerPeg) leading to authority overreach.',
    policy: `[META]
policy_id = "POL-FIN-001"
version = "3.2.0"

[POLICIES]
rule_id = "RULE-COMPONENT-002"
name = "Legacy Blocklist"
severity = "BLOCKER"
blocked_modules = ["PowerPeg", "LegacyRouterV1"]
allow = false
mitigation = "halting_with_therapy"`,
    code: `// Trading Router Initialization
import { MarketMakerV3 } from './routing/market_maker';
import { PowerPeg } from './legacy/power_peg'; // Deprecated 2012 module

function routeOrder(order: any) {
  if (order.isPegged) {
    // Maldeployed trigger executing legacy code
    PowerPeg.execute(order);
  } else {
    MarketMakerV3.execute(order);
  }
}`
  },
  {
    name: '2. AI Runtime Interceptor',
    description: 'Enforcing the presence of anchor.runtime when AI libraries are imported in the codebase.',
    policy: `[META]
policy_id = "POL-AI-002"
version = "1.0.0"

[POLICIES]
rule_id = "EU-ART12"
name = "Tamper-Evident Records"
severity = "BLOCKER"
obligation_type = "provenance"
description = "Requires runtime logging for all AI-powered actions."
mitigation = "Import anchor.runtime at entrypoint."`,
    code: `// LLM-powered Decision Engine\nimport openai from 'openai';\n\nconst ai = new openai.OpenAI();\n\nasync function decideCredit(userProfile: any) {\n  const response = await ai.chat.` + `completions` + `.create({\n    model: 'gpt-4',\n    messages: [{ role: 'user', content: 'Evaluate risk' }]\n  });\n  return response;\n}`
  },
  {
    name: '3. Shell Injection Prevention',
    description: 'Blocking unsandboxed shell execution calls (SEC-007) outside the Diamond Cage sandbox.',
    policy: `[META]
policy_id = "POL-SEC-007"
version = "2.1.0"

[POLICIES]
rule_id = "SEC-007"
name = "Shell Execution"
severity = "BLOCKER"
pattern = "os\\.system\\(|subprocess\\.|exec\\("
mitigation = "Isolate command execution inside Diamond Cage sandbox."`,
    code: `import os\nimport sys\n\ndef execute_user_command(cmd):\n    # DANGEROUS: Unsandboxed shell injection point\n    os.` + `system(cmd)\n    \nexecute_user_command(sys.argv[1])`
  },
  {
    name: '4. Dynamic Code Execution',
    description: 'Intercepting JavaScript eval() actions to prevent execution drift.',
    policy: `[META]
policy_id = "POL-JS-001"
version = "1.1.0"

[POLICIES]
rule_id = "POL-001"
name = "Dynamic Eval Block"
severity = "BLOCKER"
target = "execution"
action = "eval"
allow = false
mitigation = "Refactor code to use static object lookups instead of dynamic evaluation."`,
    code: `// Dynamic config loader\nfunction getNestedConfig(path: string) {\n  // DANGEROUS: Using eval to retrieve variable states\n  return ` + `eval(\`window.config.\${path}\`);\n}`
  }
];

interface Violation {
  id: string;
  name: string;
  severity: 'BLOCKER' | 'ERROR' | 'WARNING';
  line: number;
  message: string;
  mitigation: string;
  codeSnippet: string;
}

export default function AnchorPlayground() {
  const [selectedPresetIdx, setSelectedPresetIdx] = useState<number>(0);
  const [policyText, setPolicyText] = useState<string>('');
  const [codeText, setCodeText] = useState<string>('');
  
  const [violations, setViolations] = useState<Violation[]>([]);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [hasRun, setHasRun] = useState<boolean>(false);
  
  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Load preset on mount or index change
  useEffect(() => {
    const preset = PLAYGROUND_PRESETS[selectedPresetIdx];
    setPolicyText(preset.policy);
    setCodeText(preset.code);
    setViolations([]);
    setConsoleLogs([]);
    setHasRun(false);
  }, [selectedPresetIdx]);

  // Scroll console to bottom
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [consoleLogs]);

  // Real-time compliance engine
  const runEvaluation = () => {
    setIsEvaluating(true);
    setConsoleLogs([]);
    setHasRun(true);

    const logs: string[] = [];
    const timestamp = () => `[${new Date().toISOString().replace('T', ' ').substring(0, 19)}]`;
    
    logs.push(`${timestamp()} [ANCHOR] Initializing Policy Engine...`);
    logs.push(`${timestamp()} [ANCHOR] Parsing active constitution from editor...`);

    // 1. Parsing Policy Rules
    const rules: Array<{
      id: string;
      name: string;
      severity: string;
      blockedModules?: string[];
      pattern?: string;
      action?: string;
      obligationType?: string;
      mitigation?: string;
    }> = [];

    let currentRule: any = null;
    const policyLines = policyText.split('\n');
    
    policyLines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('rule_id =')) {
        if (currentRule) rules.push(currentRule);
        currentRule = { id: trimmed.split('=')[1].replace(/"/g, '').trim() };
      } else if (currentRule) {
        if (trimmed.startsWith('name =')) {
          currentRule.name = trimmed.split('=')[1].replace(/"/g, '').trim();
        } else if (trimmed.startsWith('severity =')) {
          currentRule.severity = trimmed.split('=')[1].replace(/"/g, '').trim();
        } else if (trimmed.startsWith('blocked_modules =')) {
          const rawModules = trimmed.split('=')[1].trim();
          try {
            currentRule.blockedModules = JSON.parse(rawModules);
          } catch {
            // Fallback parsing
            currentRule.blockedModules = rawModules.replace(/[\[\]"]/g, '').split(',').map(s => s.trim());
          }
        } else if (trimmed.startsWith('pattern =')) {
          currentRule.pattern = trimmed.split('=')[1].replace(/"/g, '').trim();
        } else if (trimmed.startsWith('action =')) {
          currentRule.action = trimmed.split('=')[1].replace(/"/g, '').trim();
        } else if (trimmed.startsWith('obligation_type =')) {
          currentRule.obligationType = trimmed.split('=')[1].replace(/"/g, '').trim();
        } else if (trimmed.startsWith('mitigation =')) {
          currentRule.mitigation = trimmed.split('=')[1].replace(/"/g, '').trim();
        }
      }
    });
    if (currentRule) rules.push(currentRule);

    logs.push(`${timestamp()} [ANCHOR] Loaded ${rules.length} active policy rules successfully.`);
    logs.push(`${timestamp()} [ANCHOR] Scanning execution code...`);

    const codeLines = codeText.split('\n');
    const detectedViolations: Violation[] = [];

    // Check for AI integrations
    let hasAIImport = false;
    let hasRuntimeImport = false;

    const aiLibraries = ['openai', 'anthropic', 'cohere', 'langchain', 'llama_index', 'google.generativeai'];
    codeLines.forEach(line => {
      const lower = line.toLowerCase();
      if (lower.includes('import') || lower.includes('require')) {
        if (aiLibraries.some(lib => lower.includes(lib))) {
          hasAIImport = true;
        }
        if (lower.includes('anchor.runtime') || lower.includes('anchor-runtime') || lower.includes('@anchor.enforce')) {
          hasRuntimeImport = true;
        }
      }
    });

    // 2. Scan each line for rules
    codeLines.forEach((line, idx) => {
      const lineNum = idx + 1;
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('#')) return;

      rules.forEach(rule => {
        // A. Blocked Modules check
        if (rule.blockedModules && rule.blockedModules.length > 0) {
          rule.blockedModules.forEach(mod => {
            if (line.includes(mod)) {
              detectedViolations.push({
                id: rule.id,
                name: rule.name || 'Deprecated Module Execution',
                severity: (rule.severity as any) || 'BLOCKER',
                line: lineNum,
                message: `Execution of deprecated module '${mod}' is strictly forbidden.`,
                mitigation: rule.mitigation || `Remove or replace imports and calls referencing the deprecated '${mod}' module.`,
                codeSnippet: trimmed
              });
              logs.push(`${timestamp()} [ANCHOR] [VIOLATION] Line ${lineNum}: Deprecated module '${mod}' detected (Blocked by ${rule.id}).`);
            }
          });
        }

        // B. Regex Pattern check
        if (rule.pattern) {
          try {
            const regex = new RegExp(rule.pattern);
            if (regex.test(line)) {
              detectedViolations.push({
                id: rule.id,
                name: rule.name || 'Unsafe Execution Pattern',
                severity: (rule.severity as any) || 'BLOCKER',
                line: lineNum,
                message: `Unsafe execution trace pattern matched rule criteria.`,
                mitigation: rule.mitigation || 'Sanitize input parameters or route execution through an isolated sandboxed scope.',
                codeSnippet: trimmed
              });
              logs.push(`${timestamp()} [ANCHOR] [VIOLATION] Line ${lineNum}: Pattern matches forbidden rule criteria (Blocked by ${rule.id}).`);
            }
          } catch (e) {
            logs.push(`${timestamp()} [ANCHOR] [ERROR] Invalid regular expression pattern in rule ${rule.id}: ${rule.pattern}`);
          }
        }

        // C. Action check (eval/exec)
        if (rule.action === 'eval') {
          if (line.includes('eval(') || line.includes('eval ')) {
            detectedViolations.push({
              id: rule.id,
              name: rule.name || 'Dynamic Code Execution Banned',
              severity: (rule.severity as any) || 'BLOCKER',
              line: lineNum,
              message: `Dynamic eval() execution intercepted inside local context scope.`,
              mitigation: rule.mitigation || 'Refactor code to avoid compiling strings at runtime.',
              codeSnippet: trimmed
            });
            logs.push(`${timestamp()} [ANCHOR] [VIOLATION] Line ${lineNum}: Dynamic eval() block caught (Blocked by ${rule.id}).`);
          }
        }
      });
    });

    // D. Check for AI Integration failure (provenance rule EU-ART12)
    if (hasAIImport && !hasRuntimeImport) {
      const provenanceRule = rules.find(r => r.obligationType === 'provenance' || r.id === 'EU-ART12');
      if (provenanceRule) {
        detectedViolations.push({
          id: provenanceRule.id,
          name: provenanceRule.name || 'Runtime Integration Missing',
          severity: (provenanceRule.severity as any) || 'BLOCKER',
          line: 1,
          message: 'Runtime integration missing. To enforce this rule and satisfy compliance, you must import anchor.runtime at your application entrypoint.',
          mitigation: provenanceRule.mitigation || "Add 'import anchor.runtime' at the entrypoint of your application.",
          codeSnippet: 'import openai'
        });
        logs.push(`${timestamp()} [ANCHOR] [VIOLATION] AI imports detected, but 'anchor.runtime' is missing. Flagging integration failure (Blocked by ${provenanceRule.id}).`);
      }
    }

    // Simulate typewriting latency for logs
    let currentLogIndex = 0;
    const typeLogs = () => {
      if (currentLogIndex < logs.length) {
        setConsoleLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
        setTimeout(typeLogs, 80);
      } else {
        setIsEvaluating(false);
        setViolations(detectedViolations);
        if (detectedViolations.length === 0) {
          setConsoleLogs(prev => [...prev, `${timestamp()} [SYS] Verification clean. 0 violations. Process ALLOWED.`]);
        } else {
          setConsoleLogs(prev => [...prev, `${timestamp()} [SYS] [HALT] Process terminated by Anchor Engine. Total violations: ${detectedViolations.length}`]);
        }
      }
    };
    
    // Start trace printing
    setTimeout(typeLogs, 150);
  };

  return (
    <div className="border border-neutral-900 bg-[#070708]/80 backdrop-blur-md p-6 rounded-lg my-8 font-sans space-y-6 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-900 pb-4">
        <div>
          <h4 className="text-white text-base font-bold font-mono tracking-tight uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse inline-block" />
            Anchor Compliance Playground
          </h4>
          <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed max-w-2xl font-light">
            Edit the policy configuration and code execution payload in real-time. The compliance engine parses AST imports and patterns to enforce rules and halts violations dynamically.
          </p>
        </div>
        
        {/* Preset Selector */}
        <div className="flex flex-wrap gap-2">
          {PLAYGROUND_PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPresetIdx(idx)}
              className={`px-3 py-1.5 border text-[10px] font-mono transition-all duration-200 uppercase rounded-sm ${
                selectedPresetIdx === idx
                  ? 'border-indigo-500/80 bg-indigo-950/35 text-indigo-300 font-bold'
                  : 'border-neutral-900 bg-neutral-950 text-neutral-500 hover:text-neutral-300 hover:border-neutral-800'
              }`}
            >
              {p.name.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-neutral-400 font-mono italic bg-neutral-950/40 p-3 rounded border border-neutral-900/60 leading-relaxed font-light">
        <strong>Preset Context:</strong> {PLAYGROUND_PRESETS[selectedPresetIdx].description}
      </div>

      {/* Editor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Policy Editor */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block">// Policy Config (constitution.anchor)</span>
            <span className="text-[9px] text-indigo-400/70 font-mono">// Edit values below</span>
          </div>
          <div className="relative border border-neutral-900 bg-neutral-950/90 rounded p-1">
            <textarea
              value={policyText}
              onChange={(e) => setPolicyText(e.target.value)}
              className="w-full h-64 bg-transparent text-indigo-300/90 font-mono text-[11px] p-3 focus:outline-none resize-none no-scrollbar leading-relaxed"
              spellCheck="false"
            />
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block">// Execution Trace (action_payload.ts)</span>
            <span className="text-[9px] text-amber-500/70 font-mono">// Introduce violations here</span>
          </div>
          <div className="relative border border-neutral-900 bg-neutral-950/90 rounded p-1">
            <textarea
              value={codeText}
              onChange={(e) => setCodeText(e.target.value)}
              className="w-full h-64 bg-transparent text-neutral-300 font-mono text-[11px] p-3 focus:outline-none resize-none no-scrollbar leading-relaxed"
              spellCheck="false"
            />
          </div>
        </div>
      </div>

      {/* Control Actions */}
      <div className="flex items-center justify-between border-t border-neutral-900 pt-4">
        <button
          onClick={runEvaluation}
          disabled={isEvaluating}
          className={`px-6 py-3 border text-xs font-mono font-bold tracking-wider rounded-sm transition-all duration-300 flex items-center gap-3 ${
            isEvaluating
              ? 'border-neutral-850 bg-neutral-900 text-neutral-600 cursor-not-allowed'
              : 'border-indigo-500/40 bg-indigo-950/15 text-indigo-400 hover:bg-indigo-950/40 hover:border-indigo-400/80 hover:shadow-lg hover:shadow-indigo-950/20 active:scale-[0.98]'
          }`}
        >
          {isEvaluating ? (
            <>
              <svg className="animate-spin h-3.5 w-3.5 text-neutral-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              EVALUATING IN PROGRESS...
            </>
          ) : (
            'Execute Verification Gate'
          )}
        </button>
        
        {hasRun && !isEvaluating && (
          <span className={`text-[10px] font-mono px-3 py-1 border rounded-sm ${
            violations.length === 0 
              ? 'border-emerald-900 text-emerald-400 bg-emerald-950/10'
              : 'border-rose-900 text-rose-400 bg-rose-950/10'
          }`}>
            Status: {violations.length === 0 ? 'GATE ALLOWED' : 'GATE BLOCKED'}
          </span>
        )}
      </div>

      {/* Console output */}
      {hasRun && (
        <div className="space-y-3 font-mono animate-fadeIn">
          <span className="text-[10px] text-neutral-500 uppercase block tracking-wider">// Simulated Anchor CLI stdout</span>
          <div className="bg-[#040405] border border-neutral-900 rounded p-4 h-44 overflow-y-auto no-scrollbar font-mono text-[10px] text-neutral-300 leading-normal space-y-1.5 shadow-inner">
            {consoleLogs.map((log, index) => {
              let color = 'text-neutral-400';
              if (log.includes('[VIOLATION]')) color = 'text-rose-400 font-semibold';
              else if (log.includes('[HALT]')) color = 'text-red-500 font-bold';
              else if (log.includes('[SYS] Verification clean') || log.includes('0 violations')) color = 'text-emerald-400 font-semibold';
              else if (log.includes('[ANCHOR]')) color = 'text-indigo-400';
              return (
                <div key={index} className={color}>
                  {log}
                </div>
              );
            })}
            {isEvaluating && (
              <div className="text-neutral-600 animate-pulse">Running checks...</div>
            )}
            <div ref={consoleEndRef} />
          </div>
        </div>
      )}

      {/* Violations report */}
      {hasRun && !isEvaluating && violations.length > 0 && (
        <div className="border border-rose-950/40 bg-rose-950/5 p-5 rounded space-y-4 animate-fadeIn font-mono">
          <div className="flex items-center gap-2 border-b border-rose-950/30 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block animate-pulse" />
            <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">Compliance Report // Blocked Invariants Found</span>
          </div>

          <div className="space-y-4">
            {violations.map((v, idx) => (
              <div key={idx} className="border-l-2 border-rose-600 pl-4 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs text-white font-bold bg-rose-950/30 px-2 py-0.5 border border-rose-900/40 rounded-sm">
                    {v.id}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-bold">
                    {v.name}
                  </span>
                  <span className="text-[9px] text-rose-400 border border-rose-900 px-1.5 py-0.2 rounded-sm bg-rose-950/20">
                    LINE {v.line}
                  </span>
                </div>
                
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {v.message}
                </p>
                
                {v.codeSnippet && (
                  <div className="bg-neutral-950 border border-neutral-900 p-2.5 rounded text-[10.5px] text-neutral-500 font-mono italic">
                    Snippet: &quot;{v.codeSnippet}&quot;
                  </div>
                )}
                
                <div className="text-[10.5px] text-indigo-300 leading-relaxed font-light">
                  <strong className="text-indigo-400 uppercase tracking-wider text-[9px] block mb-0.5">// Recommended Mitigation</strong>
                  {v.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
