import MermaidDiagram from './components/MermaidDiagram';
import ReplayDemo from './components/ReplayDemo';
import SovereignBoundary from './components/SovereignBoundary';

// ── Chart strings ────────────────────────────────────────────────────────────
const CHART_SYSTEM_OVERVIEW = `
graph TB
    subgraph PKG["anchor (PyPI Package)"]
        L1["Layer 1 — Static Compliance Engine"]
        L2["Layer 2 — Runtime Interceptor"]
        DC["Diamond Cage — WASM Sandbox"]
        GOV["Governance Federation\\n9 Domains · 6 Regulators · 3 Frameworks"]
    end

    subgraph MESH["anchor-web (Sovereign Mesh)"]
        HUB["Hub Node — FastAPI Master"]
        SPOKE["Spoke Node — Enterprise Local Data Plane"]
        FE["Frontend Portals — 4 React Apps"]
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
        USER_ENT["Enterprise User (owner · admin · lead)"]
        USER_OVR["Auditor / Regulator"]
        USER_ROOT["Root Admin"]
    end

    subgraph PORTALS["Frontend Portals — anchor-web monorepo"]
        DASH["Dashboard Portal (React 19 + Vite)"]
        ROOT["Root-Admin Portal (LiveNOC)"]
        OVR["Oversight Portal (Regulators)"]
    end

    subgraph BACKEND["Backend API — animuslab-anchor.hf.space"]
        API["REST API (FastAPI)"]
        WS_SPOKE["WebSocket: /ws/spoke/hubId"]
        WS_FLEET["WebSocket: /ws/fleet/entityId"]
    end

    USER_ENT --> DASH
    USER_OVR --> OVR
    USER_ROOT --> ROOT

    DASH -->|"REST + JWT"| API
    DASH -->|"wss://"| WS_SPOKE
    OVR -->|"REST + JWT"| API
    ROOT -->|"REST + admin token"| API
    ROOT -->|"wss://"| WS_FLEET
`;

const CHART_ENFORCEMENT_KERNEL = `
graph TB
    subgraph L1["Layer 1 — Static Compliance (anchor check)"]
        CLI["CLI Entry Point — anchor init / check / heal / sync"]
        ENGINE["PolicyEngine — AST Scanning + Rule Evaluation"]
        LOADER["Federation Loader (domains · frameworks · regulators)"]
        HEALER["Auto-Fix Engine (anchor heal)"]
        ADAPTERS["Language Adapters: Python · TypeScript · Rust · Go · Java"]
    end

    subgraph L2["Layer 2 — Runtime Interceptor"]
        GUARD["AnchorGuard — First-party Integration API"]
        FRAMEWORK["SDK Patches (9 AI providers: OpenAI · Anthropic · Cohere...)"]
        BACKSTOP["Universal HTTP Backstop (requests / httpx)"]
        SCANNER["Response Pattern Scanner (RSP rules)"]
        AUDITOR["Decision Auditor — Cryptographic Audit Chain"]
    end

    subgraph DC["Diamond Cage — WASM Behavioral Sandbox"]
        WASM["WasmEdge + Python 3.11 WASM"]
        VERIFY["verify_patch() — Differential Behavioral Verification"]
    end

    CLI --> ENGINE
    ENGINE --> LOADER
    ENGINE --> ADAPTERS
    LOADER --> HEALER
    GUARD --> FRAMEWORK
    GUARD --> BACKSTOP
    FRAMEWORK --> SCANNER
    SCANNER --> AUDITOR
    DC --> VERIFY
    VERIFY --> L1
`;

const CHART_GOVERNANCE_FEDERATION = `
graph TD
    CONST["constitution.anchor — Root Manifest v5.0\\n9 domains · 3 frameworks · 6 regulators · 47 rules"]

    CONST --> DOM["9 Domain Prefixes"]
    CONST --> FW["3 Framework Prefixes"]
    CONST --> GOV["6 Regulator Prefixes"]

    DOM --> SEC["SEC — Security\\ninjection · credentials · shell · supply chain"]
    DOM --> ETH["ETH — Ethics\\nprohibited proxies · explainability · bias"]
    DOM --> PRV["PRV — Privacy\\nPII · data sovereignty · retention"]
    DOM --> ALN["ALN — Alignment\\nguardrails · moderation · hallucination"]
    DOM --> AGT["AGT — Agentic\\ncross-agent trust · tool use · DAG enforcement"]
    DOM --> OTHERS["LEG · OPS · SUP · SHR"]

    FW --> FINOS["FINOS-xxx"]
    FW --> OWASP["OWASP-LLM-xx"]
    FW --> NIST["NIST-xxx"]

    GOV --> RBI["RBI-GOV-xx"]
    GOV --> EU["EU-ART-xx (AI Act)"]
    GOV --> SECREG["SEC-REG-xx"]
    GOV --> OTHERS2["SEBI · CFPB · FCA"]

    NOTE["Alias chains: SEC-007 maps to OWASP-LLM-02 maps to EU-ART-15\\nOne rule. Multiple regulatory IDs. Single enforcement point."]
`;

const CHART_DIAMOND_CAGE = `
graph LR
    subgraph PRE["Pre-Deployment (anchor check --sandbox)"]
        FILE["Suspect Python File"]
        CAGE["DiamondCage\\nWasmEdge + Python 3.11 WASM"]
    end

    subgraph ISO["Isolation Guarantees"]
        FS["Filesystem: /app mount only"]
        NET["Network: Blocked"]
        ENV["Environment: Stripped"]
        TIME["Timeout: Enforced (DoS protection)"]
    end

    subgraph DIFF["V3: Differential Verification"]
        ORIG["Original Script\\nBehaviorSnapshot A"]
        PATCH["Patched Script\\nBehaviorSnapshot B"]
        CMP["Compare:\\nstdout · stderr · exit code · timing"]
    end

    subgraph VERDICTS["Verdicts"]
        SAFE["PROVED_SAFE\\nBehavioral equivalence confirmed"]
        CHANGED["BEHAVIOUR_CHANGED\\nObservable output differs"]
        MALICIOUS["MALICIOUS_HALLUCINATION\\nPatch attempts unauthorized access"]
        CAGE_ERR["CAGE_ERROR\\nTimeout or sandbox failure"]
    end

    FILE --> CAGE
    CAGE --> FS & NET & ENV & TIME
    CAGE --> ORIG
    CAGE --> PATCH
    ORIG --> CMP
    PATCH --> CMP
    CMP --> SAFE & CHANGED & MALICIOUS & CAGE_ERR
`;

const CHART_DB_MODELS = `
erDiagram
    Organization ||--o{ Fleet : "has entities"
    Organization ||--o{ User : "has members"
    Organization ||--o{ OrgInvite : "has invites"
    Fleet ||--o{ WebhookSubscription : "has webhooks"
    Fleet ||--o{ LedgerEntry : "has audit entries"
    Fleet ||--o{ EnforcementNotice : "receives notices"
    LedgerEntry ||--o{ LedgerEntry : "parent chain"

    Organization {
        string id PK
        string hub_id
        string domain
        string org_type
        string regional_key
        string status
    }

    Fleet {
        string entity_id PK
        string org_id FK
        string name
        string tier
        string key_hash
    }

    User {
        string id PK
        string email
        string org_id FK
        string role
        string clearance_id
        string jurisdiction
        string status
    }

    LedgerEntry {
        string id PK
        string entity_id FK
        string chain_hash
        string signature
        boolean is_compliant
    }

    EnforcementNotice {
        string id PK
        string entity_id FK
        string severity
        string status
        string jurisdiction
    }
`;

const CHART_PERSISTENCE = `
graph TD
    subgraph T1["Tier 1 — Hub Relational DB (Neon Postgres)"]
        ORG["Organization"]
        FLEET["Fleet — AI Entity Registry"]
        LEDGER["LedgerEntry — Metadata Header Only"]
        WEBHOOK["WebhookSubscription (dialect: RBI | SEC | EU | NIST)"]
        ENFORC["EnforcementNotice (regulator-filed)"]
    end

    subgraph T2["Tier 2 — Spoke Local SQLite (Enterprise On-Premise)"]
        SPOKE_ENTRY["SpokeEntry — Full AES-256-GCM Forensic Payload\\nNever transmitted to Hub via REST"]
    end

    subgraph T3["Tier 3 — Local JSONL Chain"]
        CHAIN["AuditEntry JSONL records — SHA-256 chain-linked\\n.anchor/runtime_chain.jsonl"]
    end

    SDK["Anchor SDK (Runtime Interceptor)"] -->|"full payload POST /api/spoke/ingest"| T2
    T2 -->|"AUDIT_HEADER 200 bytes via WebSocket"| T1
    SDK -->|"local write chain-linked"| T3
`;

const CHART_WRITE_PATH = `
sequenceDiagram
    participant SDK as Anchor SDK
    participant LOCAL as runtime_chain.jsonl
    participant SPOKE as Spoke SQLite (Enterprise)
    participant HUB as Hub DB (Neon Postgres)
    participant AUDITOR as Oversight Portal

    SDK->>LOCAL: Append AuditEntry with SHA-256 chain_hash
    SDK->>SPOKE: POST /api/spoke/ingest
    SPOKE->>SPOKE: INSERT full_payload (encrypted)

    SPOKE->>HUB: WebSocket AUDIT_HEADER (~200 bytes)
    HUB->>HUB: INSERT LedgerEntry (chain_hash + is_compliant only)

    AUDITOR->>HUB: GET /api/ledger
    HUB-->>AUDITOR: LedgerEntry rows (metadata only — no raw payload)

    AUDITOR->>HUB: POST /api/forensic/relay
    HUB->>SPOKE: WebSocket FORENSIC_PULL
    SPOKE->>SPOKE: SELECT full_payload then AES-256-GCM encrypt
    SPOKE->>HUB: WebSocket FORENSIC_RESPONSE
    HUB->>HUB: Decrypt with ANCHOR_MASTER_KEY
    HUB-->>AUDITOR: Decrypted forensic payload
`;

const CHART_CRYPTO_CHAIN = `
graph LR
    G["Genesis Entry\\nprev_chain_hash = 0x0000...0000"]
    E1["Entry 1\\nprev = SHA-256(genesis)"]
    E2["Entry 2\\nprev = SHA-256(Entry 1)"]
    EN["Entry N\\nprev = SHA-256(Entry N-1)"]

    G -->|"SHA-256"| E1 -->|"SHA-256"| E2 -->|"..."| EN

    FORMULA["chain_hash = SHA-256(prev_chain_hash + findings_hash)\\nsignature  = HMAC-SHA256(chain_hash, ANCHOR_SECRET_KEY)\\nTampering any entry invalidates all downstream hashes."]
`;

const CHART_DIALECT_ENGINE = `
graph LR
    ENTRY["AuditEntry\\n5 Primitives: action · object · context · authority · flow"]

    ENTRY -->|"to_rbi_json()"| RBI["RBI FREE-AI Pillar 2\\nSeven Sutras mapping\\nETH to Sutra 4 (Fairness)\\nSEC to Sutra 5 (Security)\\nPRV to Sutra 3 (Privacy)"]

    ENTRY -->|"to_sec_json()"| SEC["SEC Reg S-K / Item 1.05\\n8-K Material AI Risk Disclosure\\nform_type: 8-K\\nmateriality_signal: HIGH | LOW"]

    ENTRY -->|"to_eu_article12_json()"| EU["EU AI Act Article 12.2\\nAutomatic Event Logging\\nconformity: ISO/IEC 42001:2023\\nintegrity_proof: HMAC-SHA256"]

    ENTRY -->|"webhook dialect=NIST"| NIST["NIST AI RMF\\nRisk tier mapping\\ncontrol_framework alignment"]
`;

const CHART_PORTAL_ROUTING = `
graph TD
    subgraph DASH["Dashboard Portal — Enterprise Users"]
        DR["/ Auth (TOTP)"]
        DR --> R_DASH["/dashboard — Overview + Hub Activation"]
        DR --> R_PROJ["/projects — Project Inventory"]
        DR --> R_MESH["/mesh — TacticalLattice 3D Hub Map"]
        DR --> R_VIOL["/violations — ViolationFeed"]
        DR --> R_FOR["/forensic — ForensicQueue"]
        DR --> R_REP["/reports — ReportsExport"]
        DR --> R_TEAM["/team — TeamManagement"]
        DR --> R_PROF["/profile — Profile (localStorage)"]
    end

    subgraph OVR["Oversight Portal — Regulators"]
        OV["/login — Auth (Clearance ID + TOTP)"]
        OV --> OV_DASH["/dashboard — Forensic Vault"]
        OV --> OV_LED["/ledger — DecisionLedger"]
        OV --> OV_CHAIN["/chain — ChainVerifier"]
        OV --> OV_LIVE["/live-ticker — LiveTicker (30ms auto-scroll)"]
        OV --> OV_ENF["/enforce — IssueNotice"]
        OV --> OV_JUR["/jurisdiction — JurisdictionSummary"]
        OV --> OV_TREND["/trend — ComplianceTrend"]
        OV --> OV_AT["/audit-trail — AuditTrail"]
    end

    subgraph ROOT["Root-Admin Portal — System Operations"]
        RA["/dashboard — Global Dashboard (10s poll)"]
        RA --> RA_PROV["/provisioning — Enterprise Provisioning"]
        RA --> RA_AUD["/auditors — Auditor Management"]
        RA --> RA_NOC["/noc — LiveNOC WebSocket Firehose"]
        RA --> RA_WL["/whitelist — Access Whitelist"]
        RA --> RA_APPR["/approvals — PendingApprovals (8s poll)"]
    end
`;

const CHART_AUTH_FLOW = `
sequenceDiagram
    participant U as Enterprise User
    participant AP as Auth Portal
    participant API as Backend API

    Note over U,API: Stage 0 — ID Scan (100ms debounce)
    U->>AP: Types clearance_id
    AP->>API: POST /api/auth/identify-first
    API-->>AP: email · hub_id · display_name · org_name
    AP->>AP: Auto-fill form fields

    Note over U,API: Stage 1 — Identify
    U->>AP: Submit clearanceId + orgId + email
    AP->>API: POST /api/auth/enterprise/identify
    API-->>AP: intent_token · display_name

    Note over U,API: Stage 2 — TOTP Verification
    U->>AP: Submit 6-digit TOTP code
    AP->>API: POST /api/auth/enterprise/verify-totp
    API-->>AP: access_token · role · org_id · hub_id
    AP->>AP: Decode JWT via atob() — store in localStorage
    AP->>AP: Navigate to /dashboard

    Note over U,API: Session Restore (on any mount)
    AP->>API: GET /api/auth/me with Bearer token
    API-->>AP: enriched user object
`;

const CHART_WEBSOCKET_TELEMETRY = `
sequenceDiagram
    participant DASH as Dashboard / TacticalLattice
    participant WS1 as wss:.../ws/spoke/hubId
    participant NOC as LiveNOC Root-Admin
    participant WS2 as wss:.../ws/fleet/entityId

    Note over DASH,WS1: Spoke Channel — Per-Entity Audit Stream
    DASH->>WS1: Connect on mount (requires active hubs)
    WS1-->>DASH: onopen — wsConnected=true
    WS1-->>DASH: onmessage — keep last 20 messages
    WS1-->>DASH: onclose/onerror — wsConnected=false (no auto-reconnect)

    Note over NOC,WS2: Fleet Channel — Global Operations Firehose
    NOC->>WS2: Connect on mount with admin token
    WS2-->>NOC: onmessage — keep last 100 messages
    NOC->>NOC: setTimeout(reconnect, 5000) — unlimited retries
    NOC->>WS2: Auto-reconnect after 5s
`;

const CHART_3D_COMPONENTS = `
graph TD
    subgraph STACK["React Three Fiber Ecosystem"]
        R3F["@react-three/fiber — Canvas"]
        RAPIER["@react-three/rapier — Physics · RigidBody · BallCollider"]
        DREI["@react-three/drei — OrbitControls · PerspectiveCamera"]
        MESHLINE["meshline — MeshLineMaterial · MeshLineGeometry"]
        THREE_LIB["three.js — TextureLoader · CanvasTexture"]
    end

    subgraph BADGE_ENT["EnterpriseBadge.jsx (Dashboard Login)"]
        EB_ROPE["20 RigidBody ball segments (rope simulation)"]
        EB_BADGE["Badge RigidBody (draggable)"]
        EB_TEX["HTML5 Canvas 2D to CanvasTexture\\norg_id · role · clearance_id · hub_id"]
    end

    subgraph BADGE_AUD["AuditorBadge.jsx (Oversight Login)"]
        AB_BADGE["Badge mesh — name · agency · clearanceId · hubId"]
        AB_ACTIVE["active prop controls animation state"]
    end

    subgraph LATTICE["TacticalLattice.jsx (Dashboard /mesh)"]
        TL_CAM["PerspectiveCamera + OrbitControls"]
        TL_NODES["Sphere meshes per hub\\ngreen=active · amber=pending · red=offline"]
        TL_LINES["MeshLine tubes — hub connections"]
    end

    R3F --> EB_ROPE & AB_BADGE & TL_CAM
    RAPIER --> EB_ROPE
    DREI --> TL_CAM
    MESHLINE --> TL_LINES
    THREE_LIB --> EB_TEX
`;

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono p-4 md:p-12 lg:p-24 selection:bg-green-900 selection:text-green-400">
      <header className="border-b border-gray-800 pb-6 mb-12">
        <h1 className="text-2xl font-bold tracking-widest text-gray-200">[ ANIMUS_LAB ]</h1>
        <p className="text-sm text-gray-500 mt-2">SYSTEM.WITNESS // PORT: 443 // ANCHOR_OS v5.0.4</p>
        <p className="text-sm text-gray-500">ARCHITECT: TANISHQ DASARI</p>
      </header>

      <article className="space-y-20 max-w-5xl">

        {/* ── EXECUTIVE SUMMARY ──────────────────────────────────────────── */}
        <section>
          <h2 className="text-3xl text-white font-bold mb-6 tracking-tight">The $500M AI Governance Illusion</h2>
          <h3 className="text-xl text-gray-400 mb-4 border-l-2 border-green-500 pl-4">Deterministic Enforcement vs. Post-Execution Observability</h3>
          <p className="mb-4">
            The market is funding compliance dashboards and API wrappers. This is a structural failure. A risk score cannot prevent an autonomous agent from bypassing a subroutine or executing a kinetic data dump at runtime.
          </p>
          <p className="mb-4">
            Anchor is a Layer 1 Deterministic Reasoning Engine. It utilizes Abstract Syntax Tree (AST) evaluation and stateful topological sequence tracking to mathematically terminate unauthorized compute threads before the LLM API fires.
          </p>
          <p>
            The governance mesh spans two repositories: <span className="text-green-400">anchor</span> (the Python enforcement kernel, distributed via PyPI) and <span className="text-blue-400">anchor-web</span> (the Sovereign Relay control plane — federated Hub/Spoke architecture). Together they form the only production-grade AI governance system with cryptographic audit chains, multi-jurisdiction regulatory dialect translation, and a WASM-sandboxed behavioral verifier.
          </p>
        </section>

        {/* ── LIVE DEMO: RUNTIME GOVERNANCE FAILURE REPLAY ─────────────── */}
        <ReplayDemo />

        {/* ── SECTION I: SYSTEM OVERVIEW ──────────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">I. System Overview — Two Repositories, One Mesh</h3>
          <p className="text-sm text-gray-400 mb-4">The enforcement kernel and the sovereign control plane operate as a unified governance mesh across the AI development lifecycle — from static code analysis at commit time to live interception at inference time.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// MAP: complete_system_architecture — system_overview</div>
            <MermaidDiagram chart={CHART_SYSTEM_OVERVIEW} label="System Overview" />
          </div>
        </section>

        {/* ── SECTION II: GLOBAL TOPOLOGY ─────────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">II. Global Network Topology</h3>
          <p className="text-sm text-gray-400 mb-4">Four specialized frontend portals map to a centralized FastAPI engine and dual WebSocket mesh. Each portal serves a distinct regulatory actor with cryptographically scoped access credentials.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// MAP: anchor_architecture_diagrams §1 — global_topology</div>
            <MermaidDiagram chart={CHART_GLOBAL_TOPOLOGY} label="Global Network Topology" />
          </div>
        </section>

        {/* ── SECTION III: ENFORCEMENT KERNEL ─────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">III. The Enforcement Kernel</h3>
          <p className="text-sm text-gray-400 mb-4">Two enforcement layers operate in sequence. Layer 1 evaluates code at commit time using AST traversal and regex scanning against the federated rule constitution. Layer 2 intercepts live LLM API calls and evaluates model responses in under 2ms using the Diamond Cage WASM sandbox.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// MAP: complete_system_architecture — enforcement_kernel</div>
            <MermaidDiagram chart={CHART_ENFORCEMENT_KERNEL} label="Enforcement Kernel" />
          </div>
        </section>

        {/* ── SECTION IV: CORE LOADER & FEDERATION ─────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">IV. Core Loader — Federation Runtime</h3>
          <p className="text-sm text-gray-400 mb-4">
            <code className="text-green-400">core/loader.py</code> is the federation bootstrap. On every <code className="text-yellow-400">anchor check</code> invocation it fetches the remote <code className="text-gray-300">constitution.anchor</code> manifest (SHA-256 integrity verified), merges all 18 rule files across domains, frameworks, and government regulators, then hands the compiled rule set to <code className="text-green-400">PolicyEngine</code>.
          </p>

          <div className="bg-[#0d1117] border border-gray-800 rounded p-4 overflow-x-auto text-xs font-mono">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2">// anchor/core/ — file manifest</div>
            <pre className="text-gray-300/80">{`core/
├── engine.py          # PolicyEngine — AST scanning + rule evaluation
├── loader.py          # Federation loader (domains + frameworks + regulators)
├── constitution.py    # Remote integrity verification (SHA-256)
├── policy_loader.py   # Local policy.anchor merge (raise-only enforcement)
├── crypto.py          # HMAC-SHA256 chain signing
├── sandbox.py         # Diamond Cage (WASM sandbox + verify_patch)
├── healer.py          # Auto-fix suggestion engine (anchor heal)
├── verdicts.py        # Architectural drift analysis (Intent Anchoring)
├── model_auditor.py   # ML model weight auditing (safetensors/gguf)
├── history.py         # Git history traversal (Intent Anchoring)
├── config.py          # Settings (governance_lock_url, timeouts)
├── registry.py        # Language adapter registry
└── models.py          # Core data models (IntentAnchor, CallContext)`}</pre>
          </div>

          <div className="mt-4 bg-[#0d1117] border border-gray-800 rounded p-4 overflow-x-auto text-xs font-mono">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2">// governance/ — federated rule file tree</div>
            <pre className="text-cyan-400/80">{`governance/
├── constitution.anchor      # Root manifest (v5.0) — integrity anchor
├── mitigation.anchor        # Detection patterns + fix guidance
├── policy.anchor            # Project-local private rules (raise-only)
├── domains/                 # 9 semantic domains
│   ├── security.anchor      # SEC — injection, credentials, shell, supply chain
│   ├── ethics.anchor        # ETH — prohibited proxies, explainability, bias
│   ├── privacy.anchor       # PRV — PII, data sovereignty, retention
│   ├── alignment.anchor     # ALN — guardrails, moderation, hallucination
│   ├── agentic.anchor       # AGT — cross-agent trust, tool use, DAG enforcement
│   ├── legal.anchor         # LEG — IP, licensing
│   ├── operational.anchor   # OPS — uptime, resilience
│   ├── supply_chain.anchor  # SUP — dependency provenance
│   └── shared.anchor        # SHR — cross-domain rules
├── frameworks/
│   ├── FINOS_Framework.anchor    # FINOS AI Governance (Rosetta Stone)
│   ├── OWASP_LLM.anchor          # OWASP LLM Top 10 2025
│   └── NIST_AI_RMF.anchor        # NIST AI RMF 1.0
└── government/
    ├── RBI_Regulations.anchor    # RBI FREE-AI Report 2025
    ├── EU_AI_Act.anchor          # EU AI Act 2024/1689
    ├── SEC_Regulations.anchor    # SEC 2026 Exam Priorities
    ├── SEBI_Regulations.anchor   # SEBI AI/ML Regulations
    ├── CFPB_Regulations.anchor   # CFPB Regulation B
    └── FCA_Regulations.anchor    # FCA AI Governance 2024`}</pre>
          </div>
        </section>

        {/* ── SECTION V: GOVERNANCE FEDERATION ───────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">V. Governance Federation — Rule Taxonomy</h3>
          <p className="text-sm text-gray-400 mb-4">The rule constitution is federated across 9 semantic domains, 3 frameworks, and 6 regulators. A single violation carries multiple IDs via alias chains — one enforcement point, every jurisdiction simultaneously.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// MAP: anchor_database_schema — rule_taxonomy</div>
            <MermaidDiagram chart={CHART_GOVERNANCE_FEDERATION} label="Governance Federation Rule Taxonomy" />
          </div>
        </section>

        {/* ── SECTION VI: DIAMOND CAGE ─────────────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">VI. Diamond Cage — WASM Behavioral Sandbox</h3>
          <p className="text-sm text-gray-400 mb-4">
            The Diamond Cage is a deterministic pre-deployment verifier. Triggered via <code className="text-yellow-400">anchor check --sandbox</code>, it executes suspect Python files inside a <strong className="text-white">WasmEdge + Python 3.11 WASM</strong> environment with filesystem, network, environment, and timeout isolation. V3 implements differential verification: the original and patched scripts both run, and their behavioral snapshots are compared byte-for-byte.
          </p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// MAP: anchor/core/sandbox.py — diamond_cage</div>
            <MermaidDiagram chart={CHART_DIAMOND_CAGE} label="Diamond Cage WASM Sandbox" />
          </div>

          <div className="mt-4 bg-[#0d1117] border border-purple-900/40 rounded p-4 text-xs font-mono">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2">// AnchorViolationError — the surgical containment primitive</div>
            <pre className="text-gray-300/80">{`# BLOCK mode: raised when a prompt or response violates a BLOCKER/CRITICAL rule
# Kills the specific API call — session stays alive
raise AnchorViolationError(
    rule_id="ETH-002",
    severity="BLOCKER",
    message="Prohibited proxy pattern detected in system prompt",
    domain="ETHICS"
)

# Three enforcement modes (set per-entity or globally):
# BLOCK  →  raise AnchorViolationError  (payload killed, session alive)
# WARN   →  logger.warning()            (call proceeds, violation logged)
# AUDIT  →  silent recording            (never interrupts, always records)`}</pre>
          </div>
        </section>

        {/* ── SECTION VII: RUNTIME LAYER — AUDITENTRY SCHEMA ───────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">VII. Runtime Layer — AuditEntry Schema</h3>
          <p className="text-sm text-gray-400 mb-4">
            Every governance event is materialized as an <code className="text-green-400">AuditEntry</code>. It carries the 5 Primitives (action · object · context · authority · flow), full cryptographic chain state, and translates deterministically into four regulatory export formats.
          </p>

          <div className="bg-[#0d1117] border border-gray-800 rounded p-4 text-xs font-mono overflow-x-auto">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2">// PAYLOAD: .anchor/runtime_chain.jsonl — AuditEntry schema v1.0</div>
            <pre className="text-gray-300/80">{`{
  "schema_version": "1.0",
  "entry_id": "UUID",
  "timestamp": "2026-04-02T05:14:31Z",

  "execution_context": {
    "layer": "runtime",
    "jurisdiction": "EU | GLOBAL | US | IN",
    "provider": "openai | anthropic | custom-decorator",
    "project_name": "string",
    "git_commit": "40-char SHA"
  },

  // 5 Primitives — the reasoning ontology
  "primitives": {
    "action":    "generate | classify | retrieve | execute | embed",
    "object":    "prompt | response | tool_call | memory | file",
    "context":   "session_id, model_name, temperature",
    "authority": "clearance_id, org_id, hub_id, role",
    "flow":      "sequential | parallel | agentic_dag"
  },

  "cryptography": {
    "findings_hash":   "SHA-256 of violation data",
    "prev_chain_hash": "chain_hash of previous entry",
    "chain_hash":      "SHA-256(prev_chain_hash + findings_hash)",
    "signature":       "HMAC-SHA256(chain_hash, ANCHOR_SECRET_KEY)"
  },

  "governance_status": {
    "is_compliant": true,
    "status": "CLEAN | VIOLATION"
  },

  "violations": [
    {
      "rule_id":   "ETH-002",
      "severity":  "BLOCKER | CRITICAL | HIGH | MEDIUM | LOW",
      "message":   "Human-readable description",
      "domain":    "ETHICS | SECURITY | PRIVACY | ALIGNMENT | AGENTIC"
    }
  ],

  "telemetry": {
    "latency_ms":        0.0,
    "prompt_preview":    "first N chars of prompt",
    "response_preview":  "first N chars of response"
  }
}`}</pre>
          </div>
        </section>

        {/* ── SECTION VIII: SQLALCHEMY DATABASE MODELS ────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">VIII. SQLAlchemy Database Models</h3>
          <p className="text-sm text-gray-400 mb-4">
            The Hub runs Neon PostgreSQL (cloud) via SQLAlchemy. The Spoke runs a local SQLite instance. Full forensic payloads never persist in the Hub layer — only the chain_hash and compliance flag.
          </p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// SCHEMA: anchor-web/server/models.py — ERD</div>
            <MermaidDiagram chart={CHART_DB_MODELS} label="SQLAlchemy Database Models ERD" />
          </div>
        </section>

        {/* ── SOVEREIGN BOUNDARY VISUALIZATION ────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">IX. The Sovereign Boundary</h3>
          <p className="text-sm text-gray-400 mb-4">The defining architectural constraint of Anchor: raw forensic payloads never leave the enterprise boundary. We move the governance logic to the data, not the data to the governance cloud.</p>
          <SovereignBoundary />
        </section>

        {/* ── SECTION X: THREE-TIER PERSISTENCE ───────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">X. Three-Tier Forensic Persistence</h3>
          <p className="text-sm text-gray-400 mb-4">Three persistence tiers enforce data sovereignty by design. Raw forensic payloads never leave the enterprise perimeter via REST. The Hub carries only cryptographic metadata. Full forensic data is retrieved on explicit demand via the Sovereign Relay Protocol, encrypted with AES-256-GCM.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// SCHEMA: persistence_model</div>
            <MermaidDiagram chart={CHART_PERSISTENCE} label="Three-Tier Forensic Persistence" />
          </div>

          <div className="mt-6 overflow-x-auto border border-gray-800 rounded">
            <div className="text-gray-600 text-xs px-4 py-2 border-b border-gray-800 bg-[#111]">// SCHEMA: LedgerEntry — what the Hub stores (metadata only)</div>
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-[#111] text-gray-200 border-b border-gray-800">
                <tr>
                  <th className="px-4 py-3 font-medium">Field</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {[
                  ['entry_id', 'TEXT PK', 'UUID — cross-reference key between Hub and Spoke'],
                  ['chain_hash', 'TEXT', 'SHA-256(prev_chain_hash + findings_hash) — tamper-evident link'],
                  ['signature', 'TEXT', 'HMAC-SHA256 signed with ANCHOR_SECRET_KEY'],
                  ['is_compliant', 'BOOLEAN', 'CLEAN or VIOLATION — the only status field on the Hub tier'],
                  ['full_payload', 'TEXT', 'Spoke SQLite ONLY — never transmitted to Hub via REST'],
                ].map(([f, t, d]) => (
                  <tr key={f} className="hover:bg-[#111] transition-colors">
                    <td className="px-4 py-3 text-green-400 font-mono text-xs">{f}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{t}</td>
                    <td className="px-4 py-3 text-xs">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION XI: THE WRITE PATH ─────────────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XI. The Write Path & Sovereign Relay</h3>
          <p className="text-sm text-gray-400 mb-4">The exact sequence from edge interception to forensic delivery. The full payload never leaves the enterprise except under explicit forensic pull request, at which point it is encrypted with AES-256-GCM before transit.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// SEQUENCE: full_write_path</div>
            <MermaidDiagram chart={CHART_WRITE_PATH} label="Write Path & Sovereign Relay" />
          </div>
        </section>

        {/* ── SECTION XII: CRYPTOGRAPHIC CHAIN ──────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XII. Cryptographic Audit Chain</h3>
          <p className="text-sm text-gray-400 mb-4">Every audit event is SHA-256 linked to the previous entry. Tampering any single record breaks all subsequent hashes — making retroactive manipulation mathematically detectable without a trusted third party.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// MAP: chain_linking</div>
            <MermaidDiagram chart={CHART_CRYPTO_CHAIN} label="Cryptographic Audit Chain" />
          </div>
        </section>

        {/* ── SECTION XIII: REGULATORY DIALECT ENGINE ───────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XIII. Regulatory Dialect Engine</h3>
          <p className="text-sm text-gray-400 mb-4">A single AuditEntry object translates deterministically into four distinct regulatory report formats. The target dialect is derived automatically from the rule ID prefix and the 5-Primitive execution context. No manual mapping required.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// MAP: dialect_translation</div>
            <MermaidDiagram chart={CHART_DIALECT_ENGINE} label="Regulatory Dialect Engine" />
          </div>
        </section>

        {/* ── SECTION XIV: WEBSOCKET ENDPOINTS ────────────────────────────── */}
        <section className="space-y-6">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XIV. WebSocket Endpoints</h3>
<p className="text-sm text-gray-400 mb-4">Two persistent WebSocket channels form the real-time backbone. The Fleet channel feeds the LiveNOC firehose. The Spoke channel is the sovereign relay gateway — using regional key auth instead of JWT, enforcing a strict registration handshake before any data flows.</p>

          <div className="border border-gray-800 rounded overflow-hidden">
            <div className="bg-[#111] px-4 py-3 border-b border-gray-800 flex items-center gap-3">
              <span className="text-purple-400 font-bold text-xs">WSS</span>
              <code className="text-white text-sm">/ws/fleet/&#123;entity_id&#125;</code>
              <span className="ml-auto text-gray-600 text-xs">NOC Dashboard Feed</span>
            </div>
            <div className="p-4 text-xs space-y-3">
              <div className="flex gap-4"><span className="text-gray-500 w-24 shrink-0">Auth</span><span>JWT token as query param <code className="text-yellow-400">?token=...</code></span></div>
              <div className="flex gap-4"><span className="text-gray-500 w-24 shrink-0">Role</span><span><code className="text-red-400">admin</code> required</span></div>
              <div className="flex gap-4"><span className="text-gray-500 w-24 shrink-0">On connect</span><span><code className="text-green-400">manager.connect(websocket, entity_id)</code></span></div>
              <div className="flex gap-4"><span className="text-gray-500 w-24 shrink-0">Messages</span><span>Real-time <code className="text-purple-400">VIOLATION_ALERT</code> objects from <code className="text-green-400">manager.broadcast()</code></span></div>
              <div className="bg-[#0d1117] rounded p-3 font-mono">
                <pre className="text-gray-300">{`{
  "type":        "VIOLATION_ALERT",
  "timestamp":   "ISO-8601",
  "entry_id":    "UUID",
  "project":     "my-ai-app",
  "violations":  [...],
  "fingerprint": "first-16-chars-of-chain_hash"
}`}</pre>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 rounded overflow-hidden">
            <div className="bg-[#111] px-4 py-3 border-b border-gray-800 flex items-center gap-3">
              <span className="text-purple-400 font-bold text-xs">WSS</span>
              <code className="text-white text-sm">/ws/spoke</code>
              <span className="ml-auto text-gray-600 text-xs">Sovereign Relay Gateway</span>
            </div>
            <div className="p-4 text-xs space-y-3">
              <div className="flex gap-4"><span className="text-gray-500 w-24 shrink-0">Auth</span><span>Hub ID + Regional Key in <code className="text-yellow-400">SPOKE_REGISTER</code> message — no JWT required</span></div>
              <div className="flex gap-4"><span className="text-gray-500 w-24 shrink-0">Key source</span><span><code className="text-green-400">hub.regional_key</code> from Hub database</span></div>
              <div className="bg-[#0d1117] rounded p-3 font-mono">
                <pre className="text-gray-300">{`1. Accept WebSocket
2. Wait 10s for SPOKE_REGISTER message
3. Verify hub.regional_key == reg.regional_key
4. Send HUB_ACK → register in spoke_registry
5. Loop:
   AUDIT_HEADER   → store lightweight header in LedgerEntry
   FORENSIC_PULL  → forward pull request to registered spoke
   FORENSIC_RESP  → decrypt + serve to auditor`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION XV: 20-ROUTE API TABLE ──────────────────────────────── */}
        <section className="space-y-6">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XV. Complete API Route Table — 20 Routes</h3>
          <p className="text-sm text-gray-400 mb-4">The FastAPI Hub exposes 18 REST routes + 2 WebSocket channels. Auth routes gate enterprise and regulatory identity. Data routes serve the forensic and audit chain. Admin routes power the Root-Admin portal.</p>

          <div className="overflow-x-auto border border-gray-800 rounded">
            <div className="text-gray-600 text-xs px-4 py-2 border-b border-gray-800 bg-[#111]">// AUTH ROUTES (10)</div>
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-[#111] text-gray-200 border-b border-gray-800">
                <tr><th className="px-4 py-3 font-medium w-16">Method</th><th className="px-4 py-3 font-medium">Endpoint</th><th className="px-4 py-3 font-medium">Function</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50 bg-[#0a0a0a]">
                {([
                  ['POST','text-green-400','/api/auth/identify-first','Debounced ID scan — returns email, hub_id, display_name for auto-fill (100ms debounce)'],
                  ['POST','text-green-400','/api/auth/enterprise/identify','Stage 1: Identifies enterprise user, returns session-scoped intent_token'],
                  ['POST','text-green-400','/api/auth/enterprise/verify-totp','Stage 2: Validates TOTP, issues role-scoped JWT (owner | admin | lead)'],
                  ['POST','text-green-400','/api/auth/oversight/identify','Stage 1: Identifies regulator, returns intent_token + agency_hub_id'],
                  ['POST','text-green-400','/api/auth/oversight/verify-totp','Stage 2: Validates TOTP, issues auditor JWT with jurisdiction scope'],
                  ['POST','text-green-400','/api/auth/register/org','Provisions new enterprise organization + hub_id + owner account'],
                  ['POST','text-green-400','/api/auth/register/auditor','Provisions new regulatory auditor with clearance_id + TOTP secret'],
                  ['GET','text-blue-400','/api/auth/me','Returns enriched user object from Bearer JWT — used for session restore on mount'],
                  ['POST','text-green-400','/api/auth/activate/hub','Hub activation ceremony — owner only, triggers SPOKE_REGISTER flow'],
                  ['GET','text-blue-400','/api/auth/jurisdictions','Returns available regulatory jurisdictions for login dropdown'],
                ] as [string,string,string,string][]).map(([m,c,r,d]) => (
                  <tr key={`${m}-${r}`} className="hover:bg-[#111] transition-colors">
                    <td className={`px-4 py-3 font-bold text-xs ${c}`}>{m}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-300">{r}</td>
                    <td className="px-4 py-3 text-xs">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto border border-gray-800 rounded">
            <div className="text-gray-600 text-xs px-4 py-2 border-b border-gray-800 bg-[#111]">// DATA & FORENSIC ROUTES (5)</div>
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-[#111] text-gray-200 border-b border-gray-800">
                <tr><th className="px-4 py-3 font-medium w-16">Method</th><th className="px-4 py-3 font-medium">Endpoint</th><th className="px-4 py-3 font-medium">Function</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50 bg-[#0a0a0a]">
                {([
                  ['GET','text-blue-400','/api/stats','Aggregate compliance metrics — polled every 10s by Dashboard and Root-Admin'],
                  ['GET','text-blue-400','/api/ledger','Returns LedgerEntry metadata arrays — chain hashes + compliance flags only, no raw payload'],
                  ['POST','text-green-400','/api/spoke/ingest','Validates MAT token, isolates full forensic payload into enterprise-local Spoke SQLite'],
                  ['POST','text-green-400','/api/forensic/relay','Executes Sovereign Relay — triggers FORENSIC_PULL over WebSocket, AES-256-GCM encrypted'],
                  ['GET','text-blue-400','/api/audit/{id}/verify','Verifies cryptographic chain integrity for a given entity\'s full audit ledger'],
                ] as [string,string,string,string][]).map(([m,c,r,d]) => (
                  <tr key={`${m}-${r}`} className="hover:bg-[#111] transition-colors">
                    <td className={`px-4 py-3 font-bold text-xs ${c}`}>{m}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-300">{r}</td>
                    <td className="px-4 py-3 text-xs">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto border border-gray-800 rounded">
            <div className="text-gray-600 text-xs px-4 py-2 border-b border-gray-800 bg-[#111]">// OVERSIGHT & ADMIN ROUTES (5) + WebSocket (2) = 20 total</div>
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-[#111] text-gray-200 border-b border-gray-800">
                <tr><th className="px-4 py-3 font-medium w-16">Method</th><th className="px-4 py-3 font-medium">Endpoint</th><th className="px-4 py-3 font-medium">Function</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50 bg-[#0a0a0a]">
                {([
                  ['GET','text-blue-400','/api/oversight/enforcement','Returns enforcement notices for requesting auditor (READ_ONLY: own notices only)'],
                  ['POST','text-green-400','/api/oversight/enforcement','Files new enforcement notice against an entity. Severity: LOW → CRITICAL'],
                  ['PATCH','text-yellow-400','/api/oversight/enforcement/{id}','Advances notice state: OPEN → ACKNOWLEDGED → RESOLVED'],
                  ['GET','text-blue-400','/api/oversight/jurisdiction-summary','Aggregated compliance posture by jurisdiction (RBI · SEC · EU · NIST)'],
                  ['GET','text-blue-400','/api/oversight/audit-trail','Paginated auditor action log with ?limit=X query param'],
                  ['WSS','text-purple-400','/ws/fleet/{entity_id}','LiveNOC firehose — VIOLATION_ALERT broadcast. Auth: JWT ?token=. Role: admin'],
                  ['WSS','text-purple-400','/ws/spoke','Sovereign Relay Gateway — Hub↔Spoke handshake. Auth: regional_key in SPOKE_REGISTER'],
                ] as [string,string,string,string][]).map(([m,c,r,d]) => (
                  <tr key={`${m}-${r}`} className="hover:bg-[#111] transition-colors">
                    <td className={`px-4 py-3 font-bold text-xs ${c}`}>{m}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-300">{r}</td>
                    <td className="px-4 py-3 text-xs">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION XVI: PORTAL ROUTING ───────────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XVI. Enterprise Portal Architecture</h3>
          <p className="text-sm text-gray-400 mb-4">Three role-scoped portals share a common FastAPI backend. Each portal implements a separate authentication pathway and serves a distinct actor in the governance lifecycle.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// MAP: anchor_architecture_diagrams §2 — portal_routing</div>
            <MermaidDiagram chart={CHART_PORTAL_ROUTING} label="Enterprise Portal Architecture" />
          </div>
        </section>

        {/* ── SECTION XVII: AUTH FLOWS ──────────────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XVII. Multi-Factor Authentication Architecture</h3>
          <p className="text-sm text-gray-400 mb-4">Both the Enterprise Dashboard and the Oversight Portal implement a two-stage TOTP authentication flow. Stage 0 performs a debounced ID scan for pre-fill. Stage 1 identifies the actor. Stage 2 validates the TOTP code and issues a role-scoped JWT.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// SEQUENCE: enterprise_auth</div>
            <MermaidDiagram chart={CHART_AUTH_FLOW} label="Multi-Factor Authentication Flow" />
          </div>
        </section>

        {/* ── SECTION XVIII: REAL-TIME TELEMETRY ────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XVIII. Real-Time Telemetry Architecture</h3>
          <p className="text-sm text-gray-400 mb-4">Two persistent WebSocket channels handle real-time governance telemetry. The Spoke channel delivers per-entity audit events scoped by hub. The Fleet channel delivers the global system firehose with auto-reconnect and unlimited retry.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// SEQUENCE: websocket_architecture</div>
            <MermaidDiagram chart={CHART_WEBSOCKET_TELEMETRY} label="Real-Time Telemetry Architecture" />
          </div>
        </section>

        {/* ── SECTION XIX: 3D COMPONENTS ──────────────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XIX. 3D Component Architecture</h3>
          <p className="text-sm text-gray-400 mb-4">Three React Three Fiber components provide the immersive visual layer — a physics-simulated lanyard badge on login, a full 3D hub-node network map in the dashboard, and an auditor credential badge in the oversight portal.</p>

          <div className="bg-[#0c0c0c] border border-gray-800 rounded p-4">
            <div className="text-gray-600 mb-3 border-b border-gray-800 pb-2 text-xs">// MAP: @react-three/fiber ecosystem</div>
            <MermaidDiagram chart={CHART_3D_COMPONENTS} label="3D Component Architecture" />
          </div>
        </section>

        {/* ── SECTION XX: KEY DESIGN PRINCIPLES ───────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XX. Key Design Principles</h3>

          <div className="overflow-x-auto border border-gray-800 rounded">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-[#111] text-gray-200 border-b border-gray-800">
                <tr><th className="px-4 py-3 font-medium">Principle</th><th className="px-4 py-3 font-medium">Implementation</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50 bg-[#0a0a0a]">
                {[
                  ['Constitutional Floor','constitution.anchor defines immutable severity baselines. policy.anchor can only RAISE, never lower.'],
                  ['Federated Identity','Each rule has a canonical ID (e.g. SEC-007) that maps through alias chains to FINOS, OWASP, and regulator rules.'],
                  ['Data Sovereignty','Raw forensic data stays on the enterprise Spoke node. Only cryptographic metadata flows to the Hub.'],
                  ['Audit-Not-Block','The @enforce decorator records violations without interrupting the application. Block mode is opt-in.'],
                  ['Surgical Containment','AnchorViolationError blocks the specific payload but keeps the application session alive.'],
                  ['Zero-Knowledge Proof','Regulators verify compliance via chain_hash + signature without needing access to raw prompts/responses.'],
                  ['Multi-Dialect Export','One AuditEntry exports as RBI (Sutras), SEC (8-K), EU AI Act (Article 12), or NIST RMF format.'],
                  ['Differential Verification','Diamond Cage runs original and patched scripts side-by-side, comparing behavioral snapshots byte-for-byte.'],
                ].map(([p,i]) => (
                  <tr key={p} className="hover:bg-[#111] transition-colors">
                    <td className="px-4 py-3 text-green-400 font-bold text-xs whitespace-nowrap">{p}</td>
                    <td className="px-4 py-3 text-xs">{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION XXI: LAYER 2 PROVIDER MATRIX ──────────────────────────── */}
        <section className="space-y-4">
          <h3 className="text-xl text-white mb-2 uppercase tracking-widest border-b border-gray-800 pb-2">XXI. Layer 2 — Provider Interception Matrix</h3>
          <p className="text-sm text-gray-400 mb-4">Layer 2 monkey-patches 9 first-party AI SDK providers using <code className="text-green-400">wrapt</code>, and captures all remaining AI API traffic through a universal HTTP backstop covering 30+ domains. Zero SDK changes required by the developer.</p>

          <div className="overflow-x-auto border border-gray-800 rounded">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-[#111] text-gray-200 border-b border-gray-800">
                <tr><th className="px-4 py-3 font-medium">Layer</th><th className="px-4 py-3 font-medium">Provider</th><th className="px-4 py-3 font-medium">Hook Point</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50 bg-[#0a0a0a]">
                {[
                  ['SDK Patch','text-purple-400','OpenAI','openai.chat.completions.create'],
                  ['SDK Patch','text-purple-400','Anthropic','anthropic.messages.create'],
                  ['SDK Patch','text-purple-400','Google Gemini','google.generativeai.generate_content'],
                  ['SDK Patch','text-purple-400','LangChain','langchain.BaseLanguageModel.invoke'],
                  ['SDK Patch','text-purple-400','Ollama','ollama.chat'],
                  ['SDK Patch','text-purple-400','Groq','groq.chat.completions.create'],
                  ['SDK Patch','text-purple-400','Cohere','cohere.Client.chat'],
                  ['SDK Patch','text-purple-400','Mistral AI','mistralai.MistralClient.chat'],
                  ['SDK Patch','text-purple-400','HuggingFace','transformers.Pipeline.__call__'],
                  ['HTTP Backstop','text-orange-400','30+ AI APIs','requests.Session.send + httpx.Client.send'],
                ].map(([layer, lc, provider, hook]) => (
                  <tr key={hook} className="hover:bg-[#111] transition-colors">
                    <td className={`px-4 py-3 text-xs font-bold ${lc}`}>{layer}</td>
                    <td className="px-4 py-3 text-gray-300 text-xs">{provider}</td>
                    <td className="px-4 py-3 font-mono text-xs text-green-400/80">{hook}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── CLOSING ──────────────────────────────────────────────────────── */}
        <section className="space-y-4 pb-8 pt-8">
          <p className="text-gray-300">
            Anchor provides the mathematical standard for Layer 1 AI enforcement. The governance kernel is active. The sovereign relay is live. The standard is open for integration.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-6">
            <a href="https://github.com/AnimusLab/Anchor" target="_blank" rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 font-bold tracking-wider border-b border-green-500/30 pb-1 transition-colors">
              [ ACCESS_THE_REPOSITORY ]
            </a>
            <a href="https://pypi.org/project/anchor-audit/" target="_blank" rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 font-bold tracking-wider border-b border-blue-500/30 pb-1 transition-colors">
              [ pip install anchor-audit ]
            </a>
          </div>
        </section>

        <footer className="pt-8 border-t border-gray-800 text-xs text-gray-600 flex justify-between">
          <span>// END_TRANSMISSION</span>
          <span>STATUS: SECURE_WSS_ACTIVE // 20 ROUTES // v5.0.4</span>
        </footer>

      </article>
    </main>
  );
}