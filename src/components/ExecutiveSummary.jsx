import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader } from './SectionWrapper';

const pillars = [
  {
    label: 'Foundation',
    headline: '#1 in Category',
    body: 'Highly profitable, exceptional retention, undisputed market leader in its core vertical.',
  },
  {
    label: 'Core Growth Path',
    headline: '3× ARR Within Reach',
    body: 'A clear, funded path to triple ARR in the existing business without changing the fundamental product.',
  },
  {
    label: 'Platform Opportunity',
    headline: '50× TAM Unlocked',
    body: "New modular product suite opens a market 50\u00d7 larger than today's addressable footprint.",
  },
  {
    label: 'Marketing Mission',
    headline: 'Repeatable Growth Engine',
    body: 'PLG, ABM, brand elevation, and full-funnel attribution — built to match and then surpass sales-sourced pipeline.',
  },
];

const boardMetrics = [
  { label: 'Marketing-Influenced ARR',    tag: 'Revenue' },
  { label: 'Marketing-Sourced Pipeline',  tag: 'Pipeline' },
  { label: 'Pilot Conversion Funnel',     tag: 'PLG' },
  { label: 'Marketing-Assisted Win Rate', tag: 'Conversion' },
  { label: 'Marketing-Assisted NRR',      tag: 'Retention' },
  { label: 'Brand & Category Strength',   tag: 'Category' },
];

export default function ExecutiveSummary() {
  return (
    <SectionWrapper id="summary">
      <SectionHeader
        eyebrow="Executive Summary"
        title="The Strategic Opportunity in 30 Seconds"
        subtitle="Rebiz doesn't need to be fixed — it needs to be scaled. The marketing mission is to build the engine that makes that possible without compromising what works."
      />

      {/* Hero callout quote */}
      <motion.div
        className="relative mb-14 rounded-2xl overflow-hidden border border-rz-border"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Gradient left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 brand-gradient" />
        <div className="px-8 py-8 md:px-12 md:py-10 bg-rz-surface">
          <p className="mb-4 text-xs font-bold text-rz-orange tracking-widest uppercase">Marketing Leadership Mission Statement</p>
          <p className="text-lg md:text-xl text-rz-white leading-relaxed font-medium max-w-4xl">
            "Build the marketing engine that helps Rebiz evolve from category leader in its current market
            into the leading platform for a TAM 50× larger — by equipping the brand and GTM team for scale,
            increasing product adoption, delivering category-dominating content, maximizing full-funnel
            conversion, and transforming customer proof into durable revenue growth."
          </p>
        </div>
      </motion.div>

      {/* 4-pillar grid */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-16">
        {pillars.map((p, i) => (
          <motion.div
            key={p.label}
            className="bg-rz-surface border border-rz-border rounded-xl p-6 hover:border-rz-border-active transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -2 }}
          >
            <span className="text-xs font-semibold text-rz-orange tracking-widest uppercase">{p.label}</span>
            <h3 className="mt-2 text-xl font-bold text-rz-white">{p.headline}</h3>
            <p className="mt-2 text-rz-muted text-sm leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Board-level scorecard strip */}
      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-rz-subtle mb-5">
          Board-Level Marketing Scorecard
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {boardMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="flex items-center gap-4 bg-rz-surface border border-rz-border rounded-xl px-5 py-4"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              {/* Dot indicator */}
              <span className="w-2 h-2 rounded-full brand-gradient flex-shrink-0" />
              <span className="text-rz-white text-sm font-medium flex-1">{m.label}</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-rz-orange border border-rz-orange/30 rounded px-2 py-0.5">
                {m.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
