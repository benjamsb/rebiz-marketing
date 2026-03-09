import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Summary',     href: '#summary' },
  { label: 'Co. Goals',   href: '#company-goals' },
  { label: 'Mktg Goals',  href: '#marketing-goals' },
  { label: 'Priorities',  href: '#priorities' },
  { label: 'OKRs',        href: '#okrs' },
  { label: 'Background',  href: '#background' },
  { label: 'AI Model',    href: '#ai-model' },
];

export default function Nav() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeSection, setActive]    = useState('');

  // Solid background once user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the in-view nav link via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-rz-base/95 backdrop-blur-md border-b border-rz-border shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="brand-gradient w-7 h-7 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            R
          </span>
          <div className="leading-tight">
            <span className="font-bold text-rz-white text-sm tracking-tight">Rebiz</span>
            <span className="hidden sm:block text-rz-subtle text-[10px] tracking-widest uppercase">
              Mktg Strategy
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors duration-150 ${
                activeSection === link.href.slice(1)
                  ? 'text-rz-orange bg-rz-orange/10'
                  : 'text-rz-muted hover:text-rz-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#priorities"
            className="hidden sm:block brand-gradient text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Review Priorities
          </a>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded text-rz-muted hover:text-rz-white"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1 transition-transform" style={{ transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : '' }} />
            <span className="block w-5 h-0.5 bg-current mb-1 transition-opacity" style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-current transition-transform" style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : '' }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-rz-surface border-t border-rz-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2.5 px-3 rounded text-sm text-rz-muted hover:text-rz-white hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#priorities"
                className="mt-3 brand-gradient text-white text-sm font-semibold px-4 py-2.5 rounded-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Review Priorities
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
