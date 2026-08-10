import os, shutil

rules_dir = r'd:\animus-manifesto\content\rules'

# Clean existing rules directory
if os.path.exists(rules_dir):
    shutil.rmtree(rules_dir)
os.makedirs(rules_dir, exist_ok=True)

rules = [
    # EU AI ACT RULES (Numerical Order by Article)
    ('001-eu-article-5-1-a-manipulative-loops', 'RULE-EU-001', 'Article 5(1)(a): Prohibited Manipulative & Subliminal Loops', 'EU AI Act Article 5(1)(a) (Recitals 27, 28, 29 & Annex III)', 'Prohibited Practice', 'BLOCK_COGNITIVE_MANIPULATION', 'Intercepts and blocks neuro-symbolic execution loops designed to deploy subliminal techniques or exploit human vulnerabilities.'),
    ('002-eu-article-5-1-e-untargeted-scraping', 'RULE-EU-002', 'Article 5(1)(e): Prohibited Untargeted Facial Image Scraping', 'EU AI Act Article 5(1)(e) (Recitals 30, 31 & Annex III)', 'Prohibited Practice', 'BLOCK_FACIAL_SCRAPING', 'Blocks unauthorized compilation of facial recognition databases via un-targeted web scraping or CCTV footage extraction.'),
    ('003-eu-article-5-1-c-social-scoring', 'RULE-EU-003', 'Article 5(1)(c): Prohibited Social Scoring & Behavioral Profiling', 'EU AI Act Article 5(1)(c) (Recitals 32, 33)', 'Prohibited Practice', 'BLOCK_SOCIAL_SCORING', 'Bans systematic evaluation or classification of natural persons based on social behavior leading to detrimental or unfavorable treatment.'),
    ('004-eu-article-6-high-risk-classification', 'RULE-EU-004', 'Article 6: Classification Rules for High-Risk AI Systems', 'EU AI Act Article 6 (Recitals 40-55, Annex I & III)', 'Statutory Classification', 'CLASSIFY_HIGH_RISK', 'Classifies AI systems intended for critical infrastructure, biometric identification, employment, or credit scoring as high-risk subject to strict ex-ante compliance.'),
    ('005-eu-article-6-1-safety-components', 'RULE-EU-005', 'Article 6(1) & Annex I: Integrated Product Safety Component Intercept Gate', 'EU AI Act Article 6(1) & Annex I (Recitals 42, 43)', 'Statutory Safety Control', 'SAFETY_COMPONENT_INTERCEPT', 'Intercepts AI modules serving as safety components in products subject to third-party conformity assessment under Union harmonisation legislation.'),
    ('006-eu-article-8-compliance-requirements', 'RULE-EU-006', 'Article 8: Ex-Ante Mandatory Compliance Gate for High-Risk Requirements', 'EU AI Act Article 8 (Recital 64)', 'Statutory Compliance Gate', 'VERIFY_EX_ANTE_REQUIREMENTS', 'Mandates that high-risk AI systems shall comply with all Section 2 requirements (Articles 9 through 15) taking into account intended purpose and state-of-the-art.'),
    ('007-eu-article-9-risk-management', 'RULE-EU-007', 'Article 9: Continuous Risk Management System & Failsafe Controls', 'EU AI Act Article 9 (Recitals 65, 66 & Annex III)', 'Statutory Risk Control', 'FAILSAFE_RISK_MITIGATION', 'Establishes a continuous, iterative risk management system running through the entire lifecycle of high-risk AI systems to eliminate or mitigate known risks.'),
    ('008-eu-article-10-data-governance', 'RULE-EU-008', 'Article 10: Training Data Quality, Bias Prevention & Governance', 'EU AI Act Article 10 (Recitals 67, 68 & Annex IV §2)', 'Statutory Data Control', 'BIAS_GATE_HALT', 'Mandates strict data governance practices for high-risk AI training, validation, and testing datasets, ensuring data completeness and bias prevention.'),
    ('009-eu-article-11-technical-documentation', 'RULE-EU-009', 'Article 11: Technical Documentation & Spec Lock Invariants', 'EU AI Act Article 11 (Recital 69 & Annex IV)', 'Statutory Compliance Control', 'ENFORCE_SPEC_LOCK', 'Requires technical documentation to be drawn up before a high-risk AI system is placed on the market and kept up-to-date.'),
    ('010-eu-article-12-record-keeping', 'RULE-EU-010', 'Article 12: Automated Log Retention & Tamper-Evident Records', 'EU AI Act Article 12 (Recitals 70, 71)', 'Statutory Audit Control', 'SEAL_COMPLIANCE_LOG', 'Mandates high-risk AI systems to include logging capabilities ensuring traceability of system operation throughout its lifecycle.'),
    ('011-eu-article-12-3-biometric-auditing', 'RULE-EU-011', 'Article 12(3): Remote Biometric Identification Log Array & Dual-Person Verification Gate', 'EU AI Act Article 12(3) (Recitals 71, 72)', 'Biometric Audit Control', 'BIOMETRIC_DUAL_VERIFY_LOG', 'Forces 2-person verification metadata arrays and automatic start/end timestamp logging on remote biometric identification calls.'),
    ('012-eu-article-13-transparency-information', 'RULE-EU-012', 'Article 13: Deployer Transparency & System Architecture Cards', 'EU AI Act Article 13 (Recitals 72, 73)', 'Statutory Transparency', 'EMBED_SYSTEM_CARD', 'Requires high-risk AI systems to be designed in such a way as to ensure that their operation is sufficiently transparent to enable deployers to interpret output.'),
    ('013-eu-article-14-human-oversight', 'RULE-EU-013', 'Article 14: Human Oversight & Dynamic Kill-Switch Control', 'EU AI Act Article 14 (Recitals 74, 75 & Annex IV)', 'Statutory Mandatory Control', 'HUMAN_OVERRIDE_MANDATE', 'Enforces continuous human oversight interfaces allowing human operators to override, interrupt, or halt high-risk AI system execution at any microsecond.'),
    ('014-eu-article-15-cybersecurity-robustness', 'RULE-EU-014', 'Article 15: Accuracy, Robustness & Adversarial Cybersecurity Safeguards', 'EU AI Act Article 15 (Recitals 76, 77, 78)', 'Statutory Security Control', 'HARDEN_WASM_SANDBOX', 'Requires high-risk AI systems to be resilient against prompt injection, data poisoning, and model evasion attacks throughout their lifecycle.'),
    ('015-eu-article-15-4-feedback-loop-protection', 'RULE-EU-015', 'Article 15(4): Feedback Loop Contamination Protection Gate', 'EU AI Act Article 15(4) (Recital 78)', 'Feedback Loop Protection', 'BLOCK_UNVETTED_FEEDBACK_LOOP', 'Prevents un-vetted agent outputs or synthetic generation streams from routing directly back into training or weight-update arrays without intermediate validation.'),
    ('016-eu-article-16-provider-obligations', 'RULE-EU-016', 'Article 16: Mandatory Obligations of High-Risk AI Providers', 'EU AI Act Article 16 (Recitals 60-64)', 'Statutory Provider Mandate', 'ENFORCE_PROVIDER_CE_MARK', 'Mandates providers to establish quality management systems, draw up technical documentation, and ensure conformity before CE marking.'),
    ('017-eu-article-17-quality-management', 'RULE-EU-017', 'Article 17: Quality Management System & Risk Auditing', 'EU AI Act Article 17 (Recitals 63, 64)', 'Quality Management System', 'QUALITY_SYSTEM_VERIFY', 'Requires providers to maintain a documented quality management system covering design controls, testing, and post-market surveillance.'),
    ('018-eu-article-19-automatically-generated-logs', 'RULE-EU-018', 'Article 19: Automatically Generated Log Storage & 6-Month Retention Gate', 'EU AI Act Article 19 (Recitals 70, 71)', 'Log Retention Control', 'RETENTION_STORE_MANDATE', 'Requires providers to retain automatically generated logs for at least 6 months under sovereign tamper-evident storage.'),
    ('019-eu-article-26-deployer-obligations', 'RULE-EU-019', 'Article 26: Mandatory Obligations of High-Risk AI Deployers', 'EU AI Act Article 26 (Recitals 80-84)', 'Deployer Operating Mandate', 'DEPLOYER_OPERATIONAL_GATE', 'Requires deployers to operate systems strictly per instructions, assign human oversight, and monitor input data relevance.'),
    ('020-eu-article-26-4-data-representativeness', 'RULE-EU-020', 'Article 26(4): Input Data Representativeness & Context Boundary Gate', 'EU AI Act Article 26(4) (Recital 82)', 'Data Representativeness Gate', 'VERIFY_DATA_REPRESENTATIVENESS', 'Verifies input payload metadata matrix matches Annex IV declared distribution before allowing execution to proceed.'),
    ('021-eu-article-26-7-worker-disclosure', 'RULE-EU-021', 'Article 26(7): Workplace Tracking Onboarding Clearance Flag', 'EU AI Act Article 26(7) (Recital 84)', 'Workplace Compliance Flag', 'CHECK_WORKER_DISCLOSURE_TOKEN', 'Verifies worker representative notification flag is legally cleared before firing employee evaluation or HR tracking agent scripts.'),
    ('022-eu-article-27-fundamental-rights-impact', 'RULE-EU-022', 'Article 27: Fundamental Rights Impact Assessment (FRIA) Gate', 'EU AI Act Article 27 (Recital 85)', 'Statutory Impact Assessment', 'FRIA_ASSESSMENT_HALT', 'Mandates deployers of high-risk AI in public or financial services to conduct a Fundamental Rights Impact Assessment prior to deployment.'),
    ('023-eu-article-50-transparency-watermark', 'RULE-EU-023', 'Article 50: Synthetic Content Marking & Watermarking Obligations', 'EU AI Act Article 50 (Recital 132)', 'Transparency Obligation', 'INJECT_DIGITAL_WATERMARK', 'Mandates machine-readable digital watermarking and provenance headers on all AI-generated text, audio, and image outputs.'),
    ('024-eu-article-50-2-deepfake-watermark', 'RULE-EU-024', 'Article 50(2): Synthetic Media Cryptographic Watermark Egress Gate', 'EU AI Act Article 50(2) (Recital 132)', 'Synthetic Egress Gate', 'ENFORCE_C2PA_WATERMARK', 'Blocks network egress of generated image or audio assets unless a machine-readable C2PA metadata watermark signature is attached.'),
    ('025-eu-article-50-4-text-generation-disclosure', 'RULE-EU-025', 'Article 50(4): Public AI Text Generation Disclosure Gate', 'EU AI Act Article 50(4) (Recital 133)', 'Text Disclosure Gate', 'ENFORCE_TEXT_DISCLOSURE_TAG', 'Monitors streaming text outputs; requires an ai_disclosure_tag or human_reviewer_token before allowing public distribution egress.'),
    ('026-eu-article-53-gpai-model-obligations', 'RULE-EU-026', 'Article 53: General-Purpose AI (GPAI) Model Compliance', 'EU AI Act Article 53 (Recitals 109-115)', 'GPAI Governance Control', 'GPAI_POLICY_GATE', 'Establishes technical documentation, copyright policy compliance, and training data summaries for General-Purpose AI models.'),
    ('027-eu-article-55-gpai-systemic-risk', 'RULE-EU-027', 'Article 55: Systemic Risk GPAI Model High-Assurance Controls', 'EU AI Act Article 55 (Recitals 112-118)', 'Systemic Risk Control', 'SYSTEMIC_RISK_SHUTDOWN', 'Imposes model evaluation, adversarial testing, systemic risk assessment, and incident tracking on high-impact GPAI models.'),
    ('028-eu-article-72-post-market-monitoring', 'RULE-EU-028', 'Article 72: Continuous Post-Market Monitoring System', 'EU AI Act Article 72 (Recital 145)', 'Post-Market Observability', 'POST_MARKET_MONITOR_LOG', 'Requires providers to establish a proactive post-market monitoring system to evaluate real-world system performance and safety.'),
    ('029-eu-article-99-penalties-fines', 'RULE-EU-029', 'Article 99: Statutory Penalties, Fines & Global Turnover Invariants', 'EU AI Act Article 99 (Recital 167)', 'Statutory Enforcement Penalty', 'ZERO_LEAKAGE_CONTAINMENT', 'Enforces zero-compliance-leakage runtime bounds to eliminate exposure to Article 99 turnover fines up to €35,000,000 or 7% of global turnover.'),

    # SEC MARKET ACCESS RULES (Numerical Order continuing)
    ('030-sec-reg-sci-loop-interception', 'SEC-REG-SCI', 'SEC Regulation SCI — System Capacity Loop Interception', '17 CFR § 242.1001 (Systems Compliance and Integrity)', 'Market Access Control', 'LOOP_CIRCUIT_BREAKER', 'Intercepts unbounded execution loops or unthrottled API call streams within trading pipelines to protect system capacity boundaries from runaway failures.'),
    ('031-sec-15c3-pretrade-risk-control', 'SEC-RULE-15C3', 'SEC Rule 15c3-5 — Pre-Trade Financial Limit Risk Control', '17 CFR § 240.15c3-5 (Market Access Rule)', 'Market Access Control', 'LOCKFREE_CAPITAL_ALLOCATOR', 'Enforces mandatory pre-trade credit verification and financial exposure limits, programmatically halting un-gated automated order routing scripts.'),
    ('032-sec-pda-fiduciary-conflict', 'SEC-PDA-CONFLICT', 'SEC Predictive Analytics — Fiduciary Conflict Minimization', 'SEC Release IA-6353 Conflict of Interest Mandate', 'Fiduciary Conflict Control', 'CONFLICT_MINIMIZER_GATE', 'Prohibits predictive optimization prompts or reward functions from deploying manipulative behavioral nudges that prioritize broker metrics over client value.'),
    ('033-sec-rule-206-anti-fraud-gate', 'RULE-SEC-206', 'SEC Rule 206(4)-1 — Anti-Fraud Market Manipulation Gate', 'Investment Advisers Act Rule 206(4)-1 (Marketing Rule)', 'Market Manipulation Control', 'ANTI_FRAUD_VERIFICATION', 'Blocks autonomous trading triggers that attempt to initiate market execution orders based entirely on unverified, raw social media web scraping gossip.'),
    ('034-sec-form-8k-incident-shield', 'SEC-FORM-8K', 'SEC Form 8-K / Reg S-P — Cyber Incident Exfiltration Shield', '17 CFR Part 229 - Item 1.05 Incident Disclosure', 'Cybersecurity Incident Control', 'INCIDENT_EXFILTRATION_SHIELD', 'Intercepts and halts outbound agent network streams or log telemetry attempting to export cluster topology configurations or cloud access keys.'),
    ('035-sec-finra-3110-tamper-evident-records', 'SEC-FINRA-3110', 'FINRA Rule 3110/4511 — Tamper-Evident 6-Year Records Journal', 'FINRA Rule 4511 / Exchange Act Rule 17a-4 (WORM)', 'Record Keeping Control', 'TAMPER_EVIDENT_JOURNAL', 'Enforces immutable, Ed25519-signed cryptographic ledger archiving for all model prompts and trading choices to pass statutory inspection baselines.'),

    # OPEN SOURCE SECURITY STANDARDS
    ('036-owasp-llm-01-prompt-injection', 'RULE-OWASP-001', 'OWASP LLM-01: Direct & Indirect Prompt Injection Boundary', 'OWASP Top 10 for LLM Applications (LLM01:2025)', 'Open Source Security Standard', 'SANCTIFY_INPUT_STREAM', 'Intercepts direct user prompt overrides and indirect RAG retrieval payload poisoning before model context window assembly.')

]

for filename, rule_id, title, statute, category, action, excerpt in rules:
    filepath = os.path.join(rules_dir, f'{filename}.md')
    jurisdiction = 'European Union' if 'EU' in rule_id else ('United States' if 'SEC' in rule_id else 'Global Security Standard')
    
    content = f"""---
id: {rule_id}
title: "{title}"
date: 2026-08-09
category: "{category}"
jurisdiction: "{jurisdiction}"
statuteRef: "{statute}"
severity: "BLOCKER"
mitigationAction: "{action}"
tags:
  - {rule_id}
  - {jurisdiction}
  - {title.split(':')[0]}
  - Machine Enforceable Gate
excerpt: "{excerpt}"
---

# {title}

**Statutory Framework:** {statute}  
**Rule ID:** `{rule_id}` | **Severity:** `PROGRAMMATIC BLOCKER`  
**Mitigation Action:** `{action}`  

---

## 1. Statutory Mandate & Legal Boundary

> *"{excerpt}"*

---

## 2. Technical Invariant & AST Engine Matcher

```toml
[POLICIES.{rule_id}]
rule_id = "{rule_id}"
statute = "{statute}"
severity = "BLOCKER"
action = "{action}"

[ENFORCEMENT]
fail_closed = true
audit_trail = "Ed25519_DAC"
latency_max_us = 800
```

---

## 3. Production Python / Rust Integration

```python
from anchor import AnchorGuard

@AnchorGuard.guard(policy="{rule_id}")
def process_machine_payload(payload: dict):
    # Evaluated in <0.8ms against {rule_id} AST query bounds
    return compliance_engine.enforce(payload)
```
"""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Wrote {filename}.md')

print(f'Done! Successfully generated {len(rules)} machine-enforceable rules.')
