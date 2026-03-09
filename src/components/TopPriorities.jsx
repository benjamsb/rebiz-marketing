import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { priorities } from '../data/content';

const weightColors = {
  Foundation:     'bg-rz-orange/15 text-rz-orange border-rz-orange/30',
  Enabler:        'bg-blue-500/15 text-blue-400 border-blue-500/30',
  Revenue:        'bg-teal-500/15 text-teal-400 border-teal-500/30',
  Pipeline:       'bg-rose-500/15 text-rose-400 border-rose-500/30',
  Infrastructure: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
};

export default function TopPriorities() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

  return (
    <SectionWrapper id="priorities">
      <SectionHeader
        eyebrow="Top Marketing Priorities"
        title="Executing a proven tactical plan"
        subtitle="These sequential initiatives have led previous ventures through dramatic market expansion, ARR + NRR growth and category dominance."
      />

      <div className="space-y-3">
        {priorities.map((p, i) => {
          const isOpen = openId === p.id;
          return (
            <motion.div
              key={p.id}
              className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                isOpen ? 'border-rz-orange/40 shadow-lg shadow-rz-orange/8' : 'border-rz-border'
              } bg-rz-surface`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              {/* Header row */}
              <button
                className="w-full flex items-start gap-5 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                onClick={() => toggle(p.id)}
              >
                {/* Rank number */}
                <span className="brand-gradient-text text-3xl font-bold tabular-nums leading-none flex-shrink-0 mt-0.5">
                  {p.rank}
                </span>

                {/* Title + tags */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-rz-white leading-snug">{p.title}</h3>
                    <span className={`text-[10px] font-bold tracking-widest uppercase border rounded px-2 py-0.5 ${weightColors[p.weight]}`}>
                      {p.weight}
                    </span>
                  </div>
                  {!isOpen && (
                    <p className="text-rz-muted text-sm line-clamp-1">{p.rationale}</p>
                  )}
                </div>

                {/* Chevron */}
                <motion.span
                  className="text-rz-subtle text-lg flex-shrink-0 mt-0.5"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  ↓
                </motion.span>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-rz-border/50 grid md:grid-cols-3 gap-6">
                      {/* Rationale */}
                      <div className="md:col-span-1">
                        <h4 className="text-xs font-semibold text-rz-orange uppercase tracking-widest mb-2">
                          Strategic Rationale
                        </h4>
                        <p className="text-rz-muted text-sm leading-relaxed">{p.rationale}</p>

                        {/* Impact */}
                        <div className="mt-4 rounded-lg bg-rz-raised/50 border border-rz-border/60 p-3">
                          <h4 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-1">
                            Expected Impact
                          </h4>
                          <p className="text-rz-muted text-xs leading-relaxed">{p.impact}</p>
                        </div>
                      </div>

                      {/* Tactics */}
                      <div className="md:col-span-2">
                        <h4 className="text-xs font-semibold text-rz-orange uppercase tracking-widest mb-3">
                          Key Tactics
                        </h4>
                        <ul className="space-y-2.5">
                          {p.tactics.map((tactic, ti) => (
                            <motion.li
                              key={ti}
                              className="flex items-start gap-3 text-sm text-rz-muted"
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: ti * 0.05, duration: 0.3 }}
                            >
                              <span className="w-5 h-5 rounded-full brand-gradient text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                {ti + 1}
                              </span>
                              <span className="leading-relaxed">{tactic}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
