import type { Config } from 'tailwindcss';

/**
 * Design system from the master blueprint.
 * Color palette is locked. Typography is locked.
 * Spacing follows the 8pt scale specified in Section 5.6.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        ink: '#0A0A0A',          // Primary Black — hero, dark sections, primary buttons
        bone: '#F7F7F5',         // Off-White — body backgrounds (warmer than pure white)
        charcoal: '#1E1E1E',     // Charcoal Grey — secondary dark sections, footer
        slate: '#6B6B6B',        // Mid Grey — body text, secondary information
        line: '#E8E8E5',         // Light Grey — section dividers, card backgrounds, hairline rules

        // Accents (used sparingly — never on CTAs in default state)
        hunter: '#1F3B2D',       // Hunter Green — pull quotes, statistic numbers, link hover
        heritage: '#D8B4A0',     // Heritage Pink — selective use only
      },
      fontFamily: {
        // Editorial serif for the hero H1 and select editorial moments
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Refined sans-serif throughout
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display scale (desktop) — H1 ranges 60–72px per spec
        'h1': ['clamp(2.5rem, 5.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h2': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '500' }],
        'h3': ['clamp(1.5rem, 2vw, 1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.12em', fontWeight: '500' }],
        'body': ['1.125rem', { lineHeight: '1.65' }],   // 18px
        'body-lg': ['1.1875rem', { lineHeight: '1.65' }], // 19px
        'caption': ['0.8125rem', { lineHeight: '1.5' }], // 13px
      },
      spacing: {
        // 8pt scale: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160
        'section': '6rem',     // 96px
        'section-lg': '8rem',  // 128px
        'section-xl': '10rem', // 160px
      },
      maxWidth: {
        // Per spec: 1200px container, 640-720px reading width
        'shell': '75rem',     // 1200px
        'reading': '40rem',   // 640px
        'reading-wide': '45rem', // 720px
      },
      borderRadius: {
        // Square corners are non-negotiable per design spec
        none: '0',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};

export default config;
