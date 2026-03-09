/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Light theme matching Rebiz.com: warm whites, brand orange→rose gradient, charcoal text.
      colors: {
        rz: {
          base:    '#FFFFFF',
          surface: '#FDF6F3',
          raised:  '#F5EBE7',
          orange:  '#F04F23',
          rose:    '#D31E55',
          blue:    '#2563EB',
          teal:    '#0D9488',
          white:   '#1A1A2E',
          muted:   '#64748B',
          subtle:  '#94A3B8',
          border:  'rgba(0,0,0,0.08)',
          'border-active': 'rgba(240,79,35,0.35)',
        },
      },
      fontFamily: {
        sans: ['"Fira Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Fira Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand': 'linear-gradient(135deg, #F04F23 0%, #D31E55 100%)',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(240,79,35,0.07) 0%, transparent 70%)',
        'grid': "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '28px 28px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
