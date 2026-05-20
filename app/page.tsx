export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-mono p-8 md:p-16">
      <header className="border-b border-gray-800 pb-4 mb-10">
        <h1 className="text-xl font-bold tracking-widest text-gray-400">[ ANIMUS_LAB ]</h1>
        <p className="text-sm text-gray-600 mt-2">SYSTEM.WITNESS // PORT: 443 // ANCHOR v5.0.4</p>
        <p className="text-sm text-gray-600">ARCHITECT: TANISHQ DASARI</p>
      </header>
      
      <article className="space-y-12 max-w-4xl">
        <div>
          <h2 className="text-3xl text-white font-bold mb-6 tracking-tight">The $500M AI Governance Illusion</h2>
          <h3 className="text-xl text-gray-400 mb-4 border-l-2 border-green-500 pl-4">Why API Wrappers Will Cause the Next Flash Crash</h3>
        </div>

        <section className="space-y-4">
          <p>
            The market is pouring hundreds of millions into &quot;AI Governance.&quot; The fatal flaw is that 90% of this capital is funding compliance dashboards, policy documentation, and post-execution observability. 
          </p>
          <p>
            A dashboard does not stop kinetic code. A risk score cannot prevent an autonomous agent from bypassing a subroutine or dumping a database at runtime. We are building the infrastructure of the future on a foundation of paperwork.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl text-white mt-8 mb-4">I. The Attack Vector: Intent Drift</h3>
          <p>
            The industry standard for controlling LLMs relies on system prompts and API wrappers. This architecture is structurally compromised. It passes the entire operational intent directly to a probabilistic model. 
          </p>
          <p>
            If a model orchestrating high-frequency trades experiences semantic drift and hallucinates compliance, the capital is destroyed before the observability dashboard even registers the anomaly. We do not need better suggestions. We need mathematical assassination of unauthorized compute threads.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl text-white mt-8 mb-4">II. The Layer 1 Primitive: Anchor Core</h3>
          <p>
            Anchor is not a passive repository. It is a decentralized network engineered with active API discovery, operating strictly as a Deterministic Reasoning Engine.
          </p>
          <p>
            In this architecture, the prompt never reaches the LLM unverified. It is intercepted by the Anchor <span className="text-green-400">PolicyEngine</span>. Utilizing `tree-sitter` for Abstract Syntax Tree (AST) evaluation and an Aho-Corasick automaton for O(n) pattern matching, the engine reads structural intent before execution. If it detects a node bypass or a topological violation, it raises an `AnchorViolationError` and assassinates the thread.
          </p>
        </section>

        <section className="space-y-4 border-l border-gray-800 pl-6 ml-2 my-8">
          <h3 className="text-xl text-white mt-2 mb-4">III. System Architecture & Node Topology</h3>
          <p>
            The network operates on a decentralized, multi-tiered execution topology built for zero-trust enterprise environments.
          </p>
          <ul className="list-none space-y-6 mt-6">
            <li>
              <strong className="text-gray-200 block mb-1">» The Interceptor (SDK Edge Node)</strong>
              <span className="text-sm text-gray-400">Sits at the compute layer. Ingests raw operational intent, validates the AST via the `DecisionAuditor`, and executes stateful topological sequence tracking. Evaluates strict compliance federations mapped to SEC, RBI, and EU-AI-Act regulations.</span>
            </li>
            <li>
              <strong className="text-gray-200 block mb-1">» Three-Tier Forensic Persistence</strong>
              <span className="text-sm text-gray-400 block mb-2">To guarantee regulatory survival, Anchor utilizes a mathematically enforced audit trail:</span>
              <ul className="text-sm text-gray-500 list-disc pl-5 space-y-1">
                <li><span className="text-gray-400">Tier 3 (Local):</span> SHA-256 cryptographic JSONL chain appending locally at the point of execution.</li>
                <li><span className="text-gray-400">Tier 2 (Spoke):</span> Enterprise on-premise SQLite logging the full AES-256-GCM encrypted payload.</li>
                <li><span className="text-gray-400">Tier 1 (Hub):</span> A relational Hub database receiving ~200-byte WebSocket headers for live dashboard telemetry, isolating sensitive data from the cloud.</li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-200 block mb-1">» Sovereign Relay Protocol</strong>
              <span className="text-sm text-gray-400">Allows regulators via the Oversight Portal to request specific, decrypted historical payloads directly from the localized Spoke nodes through an authenticated WebSocket channel, eliminating centralized data-lake vulnerabilities.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4 pb-8">
          <h3 className="text-xl text-white mt-8 mb-4">IV. The Inevitability</h3>
          <p>
            Regulatory frameworks are closing in. Institutions relying on probabilistic wrappers and static GRC frameworks will face catastrophic liability when their autonomous agents fail. 
          </p>
          <p>
            Anchor provides the mathematical standard for Layer 1 enforcement. The network is active. The standard is open for integration.
          </p>
          <div className="pt-6">
            <a href="https://github.com/AnimusLab/Anchor" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 font-bold tracking-wider border-b border-green-500/30 pb-1 transition-colors">
              [ ACCESS_THE_REPOSITORY ]
            </a>
          </div>
        </section>

        <footer className="pt-8 mt-12 border-t border-gray-800 text-xs text-gray-600 flex justify-between">
          <span>// END_TRANSMISSION</span>
          <span>STATUS: SECURE_WSS_ACTIVE</span>
        </footer>
      </article>
    </main>
  );
}