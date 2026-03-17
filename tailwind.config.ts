import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#DDBC75',
          light: '#EDD494',
          dark: '#C4A355',
          muted: '#DDBC7520',
        },
        brand: {
          black: '#1A1D1D',
          dark: '#111414',
          surface: '#222626',
          border: '#2E3333',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(221,188,117,0.12) 0%, transparent 60%), linear-gradient(160deg, #1A1D1D 0%, #0d0f0f 100%)',
        'gold-shimmer':
          'linear-gradient(105deg, #DDBC75 0%, #EDD494 45%, #C4A355 100%)',
        'card-gradient':
          'linear-gradient(180deg, rgba(26,29,29,0) 60%, rgba(26,29,29,0.95) 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
