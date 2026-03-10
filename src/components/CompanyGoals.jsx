import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { companyGoals } from '../data/content';

export default function CompanyGoals() {
  const [activeTab, setActiveTab] = useState(0);
  const active = companyGoals[activeTab];

  return (
    <SectionWrapper id="company-goals">
      <SectionHeader
        eyebrow="Rebiz Company Goals"
        title="Creating a Supercharged GTM"
        subtitle="Enabling marketing to drive ARR and NRR with direct revenue accountability"
      />

      {/* Tab row */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
        {companyGoals.map((goal, i) => (
          <button
            key={goal.id}
            onClick={() => setActiveTab(i)}
            className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeTab === i
                ? 'brand-gradient text-white border-transparent shadow-md shadow-rz-orange/20'
                : 'border-rz-border text-rz-muted hover:text-rz-white hover:border-white/15 bg-rz-surface'
            }`}
          >
            {goal.tag}
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Left: title + description */}
          <div className="lg:col-span-1 space-y-5">
            <div className="bg-rz-surface border border-rz-border rounded-2xl p-6">
              <span className="text-xs font-semibold text-rz-orange tracking-widest uppercase">{active.tag}</span>
              <h3 className="mt-3 text-lg font-bold text-rz-white leading-snug">{active.title}</h3>
              <div className="mt-4 inline-flex items-center gap-1.5 bg-rz-raised/60 border border-rz-border rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full brand-gradient" />
                <span className="text-rz-muted text-xs">{active.metric}</span>
              </div>
              <div className="mt-5 pt-5 border-t border-rz-border/60">
                <p className="text-rz-muted text-sm leading-relaxed">{active.description}</p>
              </div>
            </div>
          </div>

          {/* Right: why it matters + marketing role */}
          <div className="lg:col-span-2">
            <div className="bg-rz-surface border border-rz-border rounded-2xl p-6 h-full">
              <h4 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-4">
                Why It Matters
              </h4>
              <p className="text-rz-muted text-sm leading-relaxed mb-6">{active.whyItMatters}</p>

              <div className="pt-5 border-t border-rz-border">
                <h4 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-3">
                  Marketing's Role
                </h4>
                <p className="text-rz-muted text-sm leading-relaxed">
                  Every marketing priority in this plan maps directly to this goal. Pipeline generation,
                  brand repositioning, PLG, ABM, and retention programs all connect to{' '}
                  <span className="text-rz-white font-medium">{active.title}</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => setActiveTab(t => Math.max(0, t - 1))}
          disabled={activeTab === 0}
          className="flex items-center gap-2 text-rz-muted text-sm hover:text-rz-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous goal
        </button>
        <span className="text-rz-subtle text-xs tabular-nums">
          {activeTab + 1} / {companyGoals.length}
        </span>
        <button
          onClick={() => setActiveTab(t => Math.min(companyGoals.length - 1, t + 1))}
          disabled={activeTab === companyGoals.length - 1}
          className="flex items-center gap-2 text-rz-muted text-sm hover:text-rz-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next goal →
        </button>
      </div>
    </SectionWrapper>
  );
}
