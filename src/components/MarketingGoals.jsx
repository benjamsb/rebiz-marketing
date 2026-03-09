import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { marketingGoals, companyGoals } from '../data/content';

// Map company goal IDs to short titles for the badges
const coGoalLabel = (id) => {
  const g = companyGoals.find(g => g.id === id);
  return g ? g.tag : '';
};

const tagColors = ['bg-rz-orange/15 text-rz-orange border-rz-orange/30', 'bg-rose-500/15 text-rose-400 border-rose-500/30', 'bg-teal-500/15 text-teal-400 border-teal-500/30'];

export default function MarketingGoals() {
  const [openId, setOpenId] = useState(1); // default first open

  return (
    <SectionWrapper id="marketing-goals">
      <SectionHeader
        eyebrow="Marketing Goals"
        title="Transforming Rebiz Marketing"
        subtitle="Maximizing conversion, retention, expansion and awareness. Tying success directly to company-wide goals"
      />

      {/* Two-column layout: left = goal list, right = detail panel */}
      <div className="grid lg:grid-cols-5 gap-6">

        {/* Left: goal list */}
        <div className="lg:col-span-2 space-y-2">
          {marketingGoals.map((goal, i) => (
            <motion.button
              key={goal.id}
              className={`w-full text-left rounded-xl border transition-all duration-200 px-5 py-4 ${
                openId === goal.id
                  ? 'brand-gradient text-white border-transparent shadow-lg shadow-rz-orange/15'
                  : 'bg-rz-surface border-rz-border text-rz-muted hover:text-rz-white hover:border-white/15'
              }`}
              onClick={() => setOpenId(goal.id)}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ x: 2 }}
            >
              <div className="flex items-center gap-3">
                <span className={`text-xl font-bold tabular-nums flex-shrink-0 ${openId === goal.id ? 'text-white/60' : 'text-rz-subtle'}`}>
                  {goal.id}
                </span>
                <span className={`font-semibold text-sm leading-snug ${openId === goal.id ? 'text-white' : ''}`}>
                  {goal.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Right: detail panel */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {marketingGoals.filter(g => g.id === openId).map(goal => (
              <motion.div
                key={goal.id}
                className="bg-rz-surface border border-rz-border rounded-2xl p-7 h-full"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-semibold text-rz-orange tracking-widest uppercase">
                  Marketing Goal {goal.id}
                </span>
                <h3 className="mt-2 text-xl font-bold text-rz-white leading-snug">{goal.title}</h3>
                <p className="mt-4 text-rz-muted text-sm leading-relaxed">{goal.description}</p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {goal.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-rz-raised/60 border border-rz-border text-rz-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enables section */}
                <div className="mt-6 pt-5 border-t border-rz-border">
                  <p className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-3">
                    Enables Company Goals
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {goal.enablesGoals.map((cgId, idx) => (
                      <span
                        key={cgId}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${tagColors[idx % tagColors.length]}`}
                      >
                        {coGoalLabel(cgId)}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 space-y-2">
                    {goal.enablesGoals.map(cgId => {
                      const cg = companyGoals.find(g => g.id === cgId);
                      return cg ? (
                        <div key={cgId} className="flex items-start gap-2 text-xs text-rz-muted">
                          <span className="text-rz-orange mt-0.5 flex-shrink-0">→</span>
                          <span><strong className="text-rz-white">{cg.tag}:</strong> {cg.title}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
