import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { experiences } from '../data/content';

function AchievementBlock({ label, text, index }) {
  return (
    <motion.div
      className="border-l border-rz-border pl-4 py-1"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
    >
      <span className="text-xs font-bold text-rz-orange tracking-widest uppercase block mb-1">{label}</span>
      <p className="text-rz-muted text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function WhyMe() {
  const [activeIdx, setActiveIdx] = useState(0);
  const exp = experiences[activeIdx];

  return (
    <SectionWrapper id="background">
      <div className="mb-14 flex items-start justify-between gap-8">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-rz-orange mb-3">
            Professional Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-rz-white leading-tight">
            Purpose-Built for Rebiz
          </h2>
          <p className="mt-4 text-rz-muted max-w-2xl text-lg leading-relaxed">
            Three successful expansion and repositioning stories similar to what Rebiz is facing today.
          </p>
        </div>
        <img
          src="/rebiz-marketing/headshot.jpg"
          alt="Ben Brown"
          className="hidden md:block flex-shrink-0 w-56 h-56 rounded-2xl object-cover object-top shadow-md"
        />
      </div>

      {/* Pattern recognition callout */}
      <motion.div
        className="mb-12 rounded-2xl bg-rz-surface border border-rz-orange/25 p-6 md:p-8"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 brand-gradient rounded-2xl flex items-center justify-center text-2xl text-white">
              ✦
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-rz-white mb-2">Leading Transformational Growth for Retail-Focused SaaS</h3>
            <p className="text-rz-muted text-sm leading-relaxed max-w-3xl">
              Rigorous product marketing + scalable demand engines (PLG, ABM, demand generation, and content) =
              marketing transformed from a support function into a catalyst for meteoric GTM growth.
              At every company: point solution → platform, small TAM → large TAM, weak pipeline → record pipeline.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Company tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {experiences.map((e, i) => (
          <button
            key={e.company}
            onClick={() => setActiveIdx(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeIdx === i
                ? 'brand-gradient text-white border-transparent shadow-md shadow-rz-orange/20'
                : 'border-rz-border text-rz-muted hover:text-rz-white hover:border-white/15 bg-rz-surface'
            }`}
          >
            {e.company}
          </button>
        ))}
      </div>

      {/* Experience detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="grid lg:grid-cols-5 gap-6"
        >
          {/* Left: headline + description + relevance */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-rz-surface border border-rz-border rounded-2xl p-6">
              <div className="mb-4">
                <span className="text-xs font-semibold text-rz-orange tracking-widest uppercase">{exp.company}</span>
                <span className="mx-2 text-rz-subtle">·</span>
                <span className="text-xs text-rz-subtle">{exp.role}</span>
              </div>
              <h3 className="text-lg font-bold text-rz-white leading-snug">{exp.headline}</h3>
              <p className="mt-3 text-rz-muted text-sm leading-relaxed">{exp.description}</p>
            </div>

            {/* Relevance to Rebiz */}
            <div className="rounded-2xl border border-rz-border bg-rz-surface p-6">
              <span className="text-xs font-bold text-rz-orange tracking-widest uppercase block mb-3">
                Relevance to Rebiz
              </span>
              <p className="text-rz-muted text-sm leading-relaxed">{exp.relevance}</p>
            </div>
          </div>

          {/* Right: achievement blocks */}
          <div className="lg:col-span-3 bg-rz-surface border border-rz-border rounded-2xl p-6">
            <h4 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-6">
              What Was Built
            </h4>
            <div className="space-y-5">
              {exp.achievements.map((a, i) => (
                <AchievementBlock key={i} index={i} label={a.label} text={a.text} />
              ))}
            </div>

            {/* ICP overlap tags */}
            <div className="mt-8 pt-5 border-t border-rz-border">
              <h4 className="text-xs font-semibold text-rz-subtle uppercase tracking-wider mb-3">
                ICP & Buyer Overlap with Rebiz
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Revenue lift',
                  'Conversion improvement',
                  'Store performance',
                  'Operational visibility',
                  'Labor / productivity',
                  'Measurable ROI',
                  'SMB + Enterprise',
                  'Multi-unit operators',
                ].map(tag => (
                  <span key={tag} className="text-xs text-rz-muted border border-rz-border rounded-full px-3 py-1 bg-rz-raised/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
