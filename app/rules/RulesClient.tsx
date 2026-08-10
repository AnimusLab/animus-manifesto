'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ContentItem } from '@/lib/content';

interface Props {
  rules: ContentItem[];
}

export default function RulesClient({ rules }: Props) {
  const [selectedTab, setSelectedTab] = useState<'ALL' | 'EU_AI_ACT' | 'SEC_MARKET_ACCESS' | 'SECURITY_STANDARDS'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRules = rules.filter((rule) => {
    const matchesTab =
      selectedTab === 'ALL' ||
      (selectedTab === 'EU_AI_ACT' && (rule.jurisdiction === 'European Union' || rule.category === 'Prohibited Practice')) ||
      (selectedTab === 'SEC_MARKET_ACCESS' && (rule.jurisdiction === 'United States' || rule.category === 'Market Access Control')) ||
      (selectedTab === 'SECURITY_STANDARDS' && (rule.category === 'Open Source Security Standard' || rule.tags.includes('OWASP')));

    const matchesSearch =
      searchQuery === '' ||
      rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.statuteRef?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  }).sort((a, b) => a.slug.localeCompare(b.slug, undefined, { numeric: true }));


  return (
    <div className="space-y-12 animate-fadeIn">
      {/* HEADER HERO */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/30 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-indigo-400">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          STATUTORY RULES MATRIX // PRODUCTION CATALOG ({rules.length} RULES)
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Statutory Rules &amp; Governance Catalog
        </h1>

        <p className="text-lg text-neutral-300 font-light max-w-3xl leading-relaxed">
          The compiled `.anchor` policy matrix translating EU AI Act Articles 5–99, SEC Rules 15c3-5/Reg SCI, OWASP LLM Top 10, and RBI Model Risk guidelines into machine-enforced AST invariants.
        </p>
      </section>

      {/* SEARCH & FILTER CONTROLS */}
      <section className="space-y-6 border-y border-neutral-900/80 py-8 bg-[#070707]/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
          {/* TAB BUTTONS */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTab('ALL')}
              className={`px-4 py-2 rounded-sm border transition-all font-bold ${
                selectedTab === 'ALL'
                  ? 'bg-white text-black border-white shadow-md'
                  : 'bg-neutral-950/40 border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              All Rules ({rules.length})
            </button>
            <button
              onClick={() => setSelectedTab('EU_AI_ACT')}
              className={`px-4 py-2 rounded-sm border transition-all font-bold ${
                selectedTab === 'EU_AI_ACT'
                  ? 'bg-rose-950/60 border-rose-500/60 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                  : 'bg-neutral-950/40 border-neutral-800 text-rose-400/80 hover:text-rose-300'
              }`}
            >
              🇪🇺 EU AI Act (Arts 5, 12, 14, 50)
            </button>
            <button
              onClick={() => setSelectedTab('SEC_MARKET_ACCESS')}
              className={`px-4 py-2 rounded-sm border transition-all font-bold ${
                selectedTab === 'SEC_MARKET_ACCESS'
                  ? 'bg-indigo-950/60 border-indigo-500/60 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                  : 'bg-neutral-950/40 border-neutral-800 text-indigo-400/80 hover:text-indigo-300'
              }`}
            >
              🇺🇸 SEC Rules (15c3-5 &amp; Reg SCI)
            </button>
            <button
              onClick={() => setSelectedTab('SECURITY_STANDARDS')}
              className={`px-4 py-2 rounded-sm border transition-all font-bold ${
                selectedTab === 'SECURITY_STANDARDS'
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-neutral-950/40 border-neutral-800 text-emerald-400/80 hover:text-emerald-300'
              }`}
            >
              🛡️ Security Standards (OWASP &amp; NIST)
            </button>
          </div>

          {/* SEARCH INPUT */}
          <div className="relative min-w-[280px]">
            <input
              type="text"
              placeholder="Search rule ID, statute, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-sm px-4 py-2 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* RULES GRID */}
      <section className="space-y-6">
        {filteredRules.length === 0 ? (
          <div className="p-12 border border-neutral-900 bg-neutral-950/20 text-center font-mono text-neutral-500 text-xs">
            No rules matching query &quot;{searchQuery}&quot;.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 font-mono text-xs">
            {filteredRules.map((rule) => {
              const isEU = rule.jurisdiction === 'European Union' || rule.category === 'Prohibited Practice';
              const isSEC = rule.jurisdiction === 'United States' || rule.category === 'Market Access Control';
              const isSecurity = rule.category === 'Open Source Security Standard' || rule.tags.includes('OWASP');

              let glassClass = 'glass-panel glass-panel-glow-amber';
              let badgeColor = 'bg-amber-950/60 border-amber-500/40 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]';
              let titleHover = 'group-hover:text-amber-300';
              let buttonColor = 'text-amber-400 hover:text-amber-300';

              if (isEU) {
                glassClass = 'glass-panel glass-panel-glow-rose';
                badgeColor = 'bg-rose-950/60 border-rose-500/40 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.3)]';
                titleHover = 'group-hover:text-rose-300';
                buttonColor = 'text-rose-400 hover:text-rose-300';
              } else if (isSEC) {
                glassClass = 'glass-panel glass-panel-glow-indigo';
                badgeColor = 'bg-indigo-950/60 border-indigo-500/40 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.3)]';
                titleHover = 'group-hover:text-indigo-300';
                buttonColor = 'text-indigo-400 hover:text-indigo-300';
              } else if (isSecurity) {
                glassClass = 'glass-panel glass-panel-glow-emerald';
                badgeColor = 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]';
                titleHover = 'group-hover:text-emerald-300';
                buttonColor = 'text-emerald-400 hover:text-emerald-300';
              }

              return (
                <article
                  key={rule.slug}
                  className={`p-8 transition-all rounded-sm flex flex-col justify-between space-y-6 group ${glassClass}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`border px-2.5 py-0.5 rounded-sm font-bold text-[10px] uppercase tracking-wider ${badgeColor}`}>
                        {rule.category}
                      </span>
                      <span className="text-neutral-400 font-bold">{rule.id}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] text-neutral-400 block">{rule.statuteRef}</span>
                      <h2 className={`text-xl font-bold text-white transition-colors leading-tight ${titleHover}`}>
                        {rule.title}
                      </h2>
                    </div>

                    <p className="text-neutral-300 font-sans font-light text-sm leading-relaxed">
                      {rule.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {rule.tags.map((tag) => (
                        <span key={tag} className="border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] text-neutral-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-neutral-400 text-[11px]">Mitigation: <code className="text-emerald-400">{rule.mitigationAction}</code></span>
                    <Link
                      href={`/rules/${rule.slug}`}
                      className="text-white hover:text-indigo-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      View Full Rule Spec →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
