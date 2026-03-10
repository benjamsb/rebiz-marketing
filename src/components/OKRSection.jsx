import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { okrs } from '../data/content';

// Timeframe badge styling
const tfColors = {
  '90d': 'bg-rz-orange/15 text-rz-orange border-rz-orange/30',
  '6mo': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  '12mo': 'bg-teal-500/15 text-teal-400 border-teal-500/30',
};

// Static progress values — represent plan targets, not live data
const tfProgress = { '90d': 0, '6mo': 0, '12mo': 0 };

function KeyResult({ kr, index }) {
  return (
    <motion.div
      className="border border-rz-border rounded-xl p-4 bg-rz-raised/30"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
    >
      <div className="flex items-start gap-3">
        {/* Timeframe badge */}
        <span className={`flex-shrink-0 text-[10px] font-bold tracking-widest uppercase border rounded px-2 py-1 mt-0.5 ${tfColors[kr.timeframe] || tfColors['12mo']}`}>
          {kr.timeframe}
        </span>
        <p className="text-rz-muted text-sm leading-relaxed flex-1">{kr.text}</p>
      </div>
    </motion.div>
  );
}

export default function OKRSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeOKR = okrs[activeTab];

  return (
    <SectionWrapper id="okrs">
      <SectionHeader
        eyebrow="Objectives and Key Results"
        title="Measuring Marketing Impact"
        subtitle="Establishing foundational OKRs that guide marketing strategy and directly support Rebiz growth goals."
      />

      {/* Tab row — horizontally scrollable on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
        {okrs.map((okr, i) => (
          <button
            key={okr.id}
            onClick={() => setActiveTab(i)}
            className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeTab === i
                ? 'brand-gradient text-white border-transparent shadow-md shadow-rz-orange/20'
                : 'border-rz-border text-rz-muted hover:text-rz-white hover:border-white/15 bg-rz-surface'
            }`}
          >
            {okr.label}
          </button>
        ))}
      </div>

      {/* OKR detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeOKR.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Left: objective + rationale + KPIs */}
          <div className="lg:col-span-1 space-y-5">
            <div className="bg-rz-surface border border-rz-border rounded-2xl p-6">
              <span className="text-xs font-semibold text-rz-orange tracking-widest uppercase">{activeOKR.label}</span>
              <h3 className="mt-3 text-lg font-bold text-rz-white leading-snug">{activeOKR.objective}</h3>

              <div className="mt-5 pt-5 border-t border-rz-border/60">
                <h4 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-2">
                  Business Rationale
                </h4>
                <p className="text-rz-muted text-sm leading-relaxed">{activeOKR.rationale}</p>
              </div>
            </div>

            {/* KPI instrumentation */}
            <div className="bg-rz-surface border border-rz-border rounded-2xl p-6">
              <h4 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-4">
                KPI Instrumentation
              </h4>
              <ul className="space-y-2.5">
                {activeOKR.kpis.map((kpi, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-rz-muted">
                    <span className="text-rz-orange flex-shrink-0 mt-0.5">◆</span>
                    {kpi}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right: key results list */}
          <div className="lg:col-span-2">
            <div className="bg-rz-surface border border-rz-border rounded-2xl p-6">
              <h4 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-5">
                Key Results ({activeOKR.keyResults.length})
              </h4>

              <div className="space-y-3">
                {activeOKR.keyResults.map((kr, i) => (
                  <KeyResult key={i} kr={kr} index={i} />
                ))}
              </div>


            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Objective navigation arrows */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => setActiveTab(t => Math.max(0, t - 1))}
          disabled={activeTab === 0}
          className="flex items-center gap-2 text-rz-muted text-sm hover:text-rz-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous objective
        </button>
        <span className="text-rz-subtle text-xs tabular-nums">
          {activeTab + 1} / {okrs.length}
        </span>
        <button
          onClick={() => setActiveTab(t => Math.min(okrs.length - 1, t + 1))}
          disabled={activeTab === okrs.length - 1}
          className="flex items-center gap-2 text-rz-muted text-sm hover:text-rz-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next objective →
        </button>
      </div>
    </SectionWrapper>
  );
}
