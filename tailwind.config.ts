import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2rem',
        lg: '4rem',
        xl: '4rem',
        screen: '0rem',
      },
    },
    extend: {
      screens: {
        full: '100vw',
      },
      fontFamily: {
        sans: [
          'work-sans',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        serif: ['ivypresto-display'],
        'text-serif': ['ivypresto-text'],
        mono: ['franklin-gothic-ext-comp-urw, sans-serif', 'franklin-gothic'],
      },
      colors: {
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
        },
        accent: {
          green: 'var(--accent-green)',
        },
        gh: 'var(--gh-cell)',
      },
    },
  },
  plugins: [],
} satisfies Config;
