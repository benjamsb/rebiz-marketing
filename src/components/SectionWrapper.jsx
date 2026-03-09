import { motion } from 'framer-motion';

// Shared scroll-reveal wrapper used by every top-level section.
// Keeps animation timing and spacing consistent without repetition.
export default function SectionWrapper({ id, children, className = '', fullWidth = false }) {
  return (
    <section id={id} className={`section-divider ${className}`}>
      <motion.div
        className={fullWidth ? '' : 'max-w-7xl mx-auto px-6 md:px-10 py-24'}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

// Consistent section header used across multiple sections
export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14">
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-rz-orange mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-rz-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-rz-muted max-w-2xl text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
