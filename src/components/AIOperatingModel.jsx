import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { aiAgents, agentTypes } from '../data/content';

const layerStyles = {
  Strategy:       { border: 'border-rz-orange/40', badge: 'bg-rz-orange/15 text-rz-orange border-rz-orange/30', dot: 'bg-rz-orange' },
  Execution:      { border: 'border-blue-500/40',  badge: 'bg-blue-500/15 text-blue-400 border-blue-500/30',   dot: 'bg-blue-400' },
  Infrastructure: { border: 'border-teal-500/40',  badge: 'bg-teal-500/15 text-teal-400 border-teal-500/30',  dot: 'bg-teal-400' },
};

function AgentCard({ agent, index, isOpen, onToggle }) {
  return (
    <motion.div
      className="bg-rz-surface border border-rz-border rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <button
        className="w-full flex items-start gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
        onClick={onToggle}
      >
        <div className="w-9 h-9 brand-gradient rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0">
          ⚡
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-rz-white text-sm">{agent.name}</h4>
          <p className="text-rz-muted text-xs mt-0.5 leading-relaxed line-clamp-2">{agent.description}</p>
        </div>
        <motion.span
          className="text-rz-subtle flex-shrink-0 mt-1"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-rz-border/60">
              <p className="text-rz-subtle text-xs uppercase tracking-wider mb-3 font-semibold">Example applications</p>
              <ul className="space-y-2">
                {agent.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-rz-muted">
                    <span className="text-rz-orange mt-0.5 flex-shrink-0">→</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AIOperatingModel() {
  const [openAgent, setOpenAgent] = useState(null);

  const toggle = (name) => setOpenAgent(prev => (prev === name ? null : name));

  return (
    <SectionWrapper id="ai-model">
      <SectionHeader
        eyebrow="AI Operating Model"
        title="AI-Augmented Marketing"
        subtitle="Equipping every marketing function with a team of AI agents that amplify impact and efficiency. Combining automation with a human in the loop for speed with brand consistency, accuracy and compliance."
      />

      {/* Three-layer model */}
      <div className="space-y-3 mb-14">
        {aiAgents.map((layer, i) => {
          const style = layerStyles[layer.layer];
          return (
            <motion.div
              key={layer.layer}
              className={`rounded-2xl border ${style.border} bg-rz-surface overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="grid md:grid-cols-4 gap-0">
                {/* Layer label */}
                <div className="md:border-r border-rz-border/60 p-6 flex flex-col justify-center">
                  <span className={`text-[10px] font-bold tracking-widest uppercase border rounded px-2 py-1 self-start mb-3 ${style.badge}`}>
                    {layer.sublabel}
                  </span>
                  <h3 className="text-lg font-bold text-rz-white">{layer.layer}</h3>
                  <p className="text-rz-muted text-xs mt-2 leading-relaxed">{layer.description}</p>
                </div>

                {/* Functions list */}
                <div className="md:col-span-3 p-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {layer.functions.map((fn, fi) => (
                      <motion.div
                        key={fi}
                        className="flex items-start gap-2.5 text-sm text-rz-muted"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + fi * 0.06 }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${style.dot}`} />
                        {fn}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Connecting arrow */}
        <div className="flex justify-center py-2">
          <div className="flex flex-col items-center gap-1 text-rz-subtle text-xs">
            <span>Human strategy flows down through AI execution into automated infrastructure</span>
          </div>
        </div>
      </div>

      {/* Agent type cards */}
      <div>
        <h3 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-5">
          AI Agent Types in Active Use
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agentTypes.map((agent, i) => (
            <AgentCard
              key={agent.name}
              agent={agent}
              index={i}
              isOpen={openAgent === agent.name}
              onToggle={() => toggle(agent.name)}
            />
          ))}
        </div>
      </div>

      {/* Philosophy note */}
      <motion.div
        className="mt-10 rounded-xl border border-rz-border bg-rz-surface p-6 flex gap-5 items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-rz-orange text-xl flex-shrink-0">◆</span>
        <div>
          <h4 className="text-sm font-bold text-rz-white mb-1">The Guiding Principle</h4>
          <p className="text-rz-muted text-sm leading-relaxed">
            AI is a leverage tool, not a cost-cutting mechanism. The goal is to do more meaningful work
            per human hour: faster iteration, broader coverage, and better data, while keeping strategic
            judgment, customer insight, and brand voice firmly in human hands. Where AI hits its limits,
            the right agencies, contractors, and FTEs fill the gaps.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
