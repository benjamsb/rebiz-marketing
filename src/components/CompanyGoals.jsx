import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { companyGoals } from '../data/content';

export default function CompanyGoals() {
  const [activeId, setActiveId] = useState(null);

  return (
    <SectionWrapper id="company-goals">
      <SectionHeader
        eyebrow="Rebiz Company Goals"
        title="Five Goals. 24 Months. No Trade-offs."
        subtitle="Rebiz's growth agenda requires marketing to serve all five simultaneously — not as separate campaigns, but as one coordinated engine."
      />

      {/* Horizontal timeline connector for desktop */}
      <div className="hidden xl:flex items-start gap-0 mb-6 relative">
        <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-rz-orange/40 via-rz-rose/40 to-transparent z-0" />
        {companyGoals.map((goal, i) => (
          <div key={goal.id} className="flex-1 relative z-10 px-1">
            <div className="flex flex-col items-center">
              <motion.button
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-200 ${
                  activeId === goal.id
                    ? 'brand-gradient text-white border-transparent shadow-lg shadow-rz-orange/20'
                    : 'bg-rz-surface border-rz-border text-rz-muted hover:border-rz-orange/40 hover:text-rz-orange'
                }`}
                onClick={() => setActiveId(activeId === goal.id ? null : goal.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {goal.id}
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      {/* Cards — always visible on mobile, expandable on desktop */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
        {companyGoals.map((goal, i) => {
          const isActive = activeId === goal.id;
          return (
            <motion.div
              key={goal.id}
              className={`bg-rz-surface border rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'border-rz-orange/50 shadow-lg shadow-rz-orange/10 xl:col-span-2'
                  : 'border-rz-border hover:border-white/15'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onClick={() => setActiveId(activeId === goal.id ? null : goal.id)}
              layout
            >
              {/* Card header */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold text-rz-orange tracking-widest uppercase">
                      {goal.tag}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold text-rz-white leading-snug">
                      {goal.title}
                    </h3>
                  </div>
                  {/* Expand icon */}
                  <motion.span
                    className="text-rz-subtle mt-1 flex-shrink-0"
                    animate={{ rotate: isActive ? 90 : 0 }}
                  >
                    ›
                  </motion.span>
                </div>

                {/* Metric badge */}
                <div className="mt-3 inline-flex items-center gap-1.5 bg-rz-raised/60 border border-rz-border rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full brand-gradient" />
                  <span className="text-rz-muted text-xs">{goal.metric}</span>
                </div>
              </div>

              {/* Expanded detail */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-rz-border/60 pt-4 space-y-3">
                      <p className="text-rz-muted text-sm leading-relaxed">{goal.description}</p>
                      <div className="rounded-lg bg-rz-raised/40 border border-rz-border/60 p-3">
                        <span className="text-rz-orange text-xs font-semibold uppercase tracking-wider block mb-1">
                          Why it matters
                        </span>
                        <p className="text-rz-muted text-xs leading-relaxed">{goal.whyItMatters}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-6 text-rz-subtle text-xs text-center">
        Click any goal to expand. Marketing goals on the next section map directly to these five.
      </p>
    </SectionWrapper>
  );
}
