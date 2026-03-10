import { motion } from 'framer-motion';

// 90-day preview items — concise, action-oriented
const ninetyDayItems = [
  'Launch updated messaging architecture & brand system',
  'Finalize team structure, AI augmentation plan & tech stack',
  'Define top 50 enterprise ABM target accounts with sales',
  'Map clear PLG customer journey for mid-market',
  'Deliver attribution model for current and past deal visibility',
  'Establish pipeline of customers for advocacy content',
];

export default function ClosingCTA() {
  return (
    <section className="section-divider relative overflow-hidden">
      {/* Background treatment */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-rz-surface/60 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]" style={{ background: 'linear-gradient(135deg,#F04F23,#D31E55)', opacity: 0.06 }} />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-rz-orange mb-6">
            The Mandate
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-rz-white leading-tight mb-6 tracking-tight">
            Build the marketing engine that helps
            <br className="hidden md:block" />
            <span className="brand-gradient-text"> Rebiz evolve</span> from category leader
            <br className="hidden md:block" />
            into category-defining platform.
          </h2>

          <p className="text-rz-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Not by reinventing what works, but by scaling it, systematizing it, and connecting
            it to revenue accountability that makes marketing a forecasting input, not a cost line.
          </p>

          {/* 90-day preview */}
          <div className="text-left bg-rz-surface border border-rz-border rounded-2xl p-7 mb-10 max-w-2xl mx-auto">
            <h3 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-4">
              First 90 Days: Six Immediate Moves
            </h3>
            <ul className="space-y-3">
              {ninetyDayItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-rz-muted"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                >
                  <span className="w-5 h-5 rounded-full brand-gradient text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="mailto:?subject=Discuss%20the%20Rebiz%20Marketing%20Plan"
              className="brand-gradient text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-rz-orange/25 hover:opacity-90 transition-opacity text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Discuss the Plan
            </motion.a>
            <motion.a
              href="#priorities"
              className="border border-rz-border text-rz-muted hover:text-rz-white hover:border-white/20 font-semibold px-8 py-4 rounded-full transition-colors text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Review 90-Day Priorities
            </motion.a>
          </div>

          {/* Bottom signature */}
          <motion.div
            className="mt-16 pt-8 border-t border-rz-border flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 brand-gradient rounded flex items-center justify-center text-white text-xs font-bold">R</span>
              <span className="font-bold text-rz-muted text-sm">Rebiz</span>
            </div>
            <p className="text-rz-subtle text-xs">Head of Marketing · Mission & OKRs · Confidential</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
