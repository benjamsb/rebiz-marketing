import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Animated counter hook — triggers once the element is in view
function useCountUp(target, duration = 1800, suffix = '') {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target, duration]);

  return [value, () => setStarted(true)];
}

// Renders e.g. "3×" with the × bottom-aligned to the number
function MultX({ children, className = '' }) {
  const str = String(children);
  if (!str.includes('×')) return <span className={className}>{str}</span>;
  const [num, ...rest] = str.split('×');
  return (
    <span className={`inline-flex items-end leading-none ${className}`}>
      <span>{num}</span><span>×</span>{rest.length > 0 && <span>{rest.join('×')}</span>}
    </span>
  );
}

// A single metric card inside the dashboard panel
function DashboardMetric({ label, value, sub, color = 'orange', delay = 0 }) {
  const colorMap = {
    orange: 'text-rz-orange',
    rose:   'text-rose-400',
    teal:   'text-teal-400',
    blue:   'text-blue-400',
  };
  return (
    <motion.div
      className="bg-rz-raised/60 border border-rz-border rounded-xl p-4 flex flex-col gap-1"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.5 }}
    >
      <span className="text-rz-subtle text-xs font-medium uppercase tracking-wider">{label}</span>
      <MultX className={`text-2xl font-bold ${colorMap[color]}`}>{value}</MultX>
      {sub && <span className="text-rz-muted text-xs">{sub}</span>}
    </motion.div>
  );
}

// Sparkline SVG — a simple growth curve to reinforce "upward trend" visually
function Sparkline({ color = '#F04F23' }) {
  // Static growth path, purely decorative
  const points = '0,65 20,58 45,50 70,36 100,20 130,10 160,4 190,2 220,0';
  return (
    <svg viewBox="0 0 220 70" className="w-full h-10" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// A simplified "pipeline stage" bar
function PipelineBar({ label, pct, color }) {
  const colorMap = {
    orange: 'bg-rz-orange',
    rose:   'bg-rose-500',
    teal:   'bg-teal-500',
    blue:   'bg-blue-500',
  };
  return (
    <div className="flex items-center gap-3">
      <span className="text-rz-muted text-xs w-24 flex-shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-black/[0.06] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorMap[color]}`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ delay: 1.2, duration: 0.9, ease: 'easeOut' }}
        />
      </div>
      <span className="text-rz-subtle text-xs w-8 text-right">{pct}%</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 bg-hero-glow" />
      {/* Brand gradient orb — bottom left */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-rz-orange/8 blur-[100px]" />
      {/* Brand gradient orb — top right */}
      <div className="absolute -top-20 right-20 w-72 h-72 rounded-full bg-rz-rose/8 blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* ── Left column: headline + CTAs ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-rz-orange mb-6">
              <span className="w-2 h-2 rounded-full brand-gradient animate-pulse-slow" />
              Confidential Strategic Brief
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-rz-white leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Head of Marketing
            <br />
            <span className="brand-gradient-text">Mission & OKRs</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-rz-muted text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Rebiz is the #1 retail analytics platform with a clear path to{' '}
            <strong className="text-rz-white">3× current ARR</strong> and a
            new product architecture that opens a{' '}
            <strong className="text-rz-white">50× larger TAM</strong>.
            This is the marketing engine that closes the gap.
          </motion.p>

          {/* CEO summary block */}
          <motion.div
            className="mt-8 border-l-2 border-rz-orange/60 pl-4"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-rz-muted text-sm leading-relaxed italic">
              "Build the marketing engine that helps Rebiz evolve from category
              leader into category-defining platform, through PLG, ABM,
              best-in-class brand, and a measurable revenue attribution system."
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <a
              href="#priorities"
              className="brand-gradient text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-rz-orange/20 text-sm"
            >
              View Strategic Plan
            </a>
            <a
              href="#okrs"
              className="border border-rz-border text-rz-muted hover:text-rz-orange hover:border-rz-orange/40 font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              See OKRs
            </a>
          </motion.div>

          {/* Key highlights row */}
          <motion.div
            className="mt-12 flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[
              { val: '3×', label: 'ARR Target' },
              { val: '50×', label: 'TAM Expansion' },
              { val: '6', label: 'Strategic OKRs' },
            ].map(item => (
              <div key={item.label} className="flex items-baseline gap-2">
                <MultX className="brand-gradient-text text-2xl font-bold">{item.val}</MultX>
                <span className="text-rz-subtle text-xs uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column: dashboard panel ── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Main panel */}
          <div className="bg-rz-surface border border-rz-border rounded-2xl overflow-hidden shadow-xl shadow-black/10">
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-rz-border bg-rz-raised/30">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
                </div>
                <span className="text-rz-muted text-xs font-medium ml-2">Rebiz Growth Command Center</span>
              </div>
              <span className="text-rz-subtle text-xs">24-Month View</span>
            </div>

            <div className="p-5 space-y-5">
              {/* Metric cards row */}
              <div className="grid grid-cols-3 gap-3">
                <DashboardMetric label="ARR Target"   value="3×"    sub="Current baseline" color="orange" delay={0} />
                <DashboardMetric label="NRR Goal"     value="3×"    sub="vs. today"        color="rose"   delay={0.1} />
                <DashboardMetric label="TAM Unlock"   value="50×"   sub="Platform TAM"     color="teal"   delay={0.2} />
              </div>

              {/* Sparkline */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-rz-subtle text-xs uppercase tracking-wider">Marketing-Sourced Pipeline</span>
                  <span className="text-emerald-500 text-xs font-semibold">↑ Target Trajectory</span>
                </div>
                <Sparkline color="#10B981" />
              </div>

              {/* Pipeline funnel bars */}
              <div className="space-y-3">
                <span className="text-rz-subtle text-xs uppercase tracking-wider block">Growth Priority Stack</span>
                <PipelineBar label="PLG Mid-Market"     pct={65} color="rose" />
                <PipelineBar label="Enterprise ABM"     pct={72} color="teal" />
                <PipelineBar label="Revenue Engine"     pct={55} color="blue" />
                <PipelineBar label="Brand & Category"   pct={44} color="orange" />
              </div>

              {/* Status strip */}
              <div className="flex items-center justify-between pt-2 border-t border-rz-border">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-slow" />
                  <span className="text-rz-subtle text-xs">Plan Active</span>
                </div>
                <span className="text-rz-subtle text-xs">6 Objectives · 38 Key Results</span>
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <motion.div
            className="absolute -bottom-6 -left-6 glass-card rounded-xl px-4 py-3 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 brand-gradient rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0">
                ✦
              </div>
              <div>
                <p className="text-rz-white text-xs font-semibold">Rule of 40 Target</p>
                <p className="text-rz-muted text-xs">Mid-30s → 45–54 in 24 months</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-rz-subtle text-xs tracking-widest uppercase">Scroll</span>
        <span className="text-rz-subtle text-lg">↓</span>
      </motion.div>
    </section>
  );
}
