import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A5C',
          dark: '#122840',
          light: '#254e7a',
        },
        slate: {
          DEFAULT: '#5B8DB8',
          light: '#7aadd4',
          dark: '#3d6e96',
        },
        terra: {
          DEFAULT: '#C75A3C',
          dark: '#a8432a',
          light: '#d97a62',
        },
        gold: {
          DEFAULT: '#D4A843',
          dark: '#b08c2e',
          light: '#e0bf6c',
        },
        charcoal: {
          DEFAULT: '#1E2426',
          light: '#2d3538',
        },
        fog: {
          DEFAULT: '#F5F2EE',
          dark: '#e8e3dc',
        },
      },
      fontFamily: {
        display: ['var(--font-barlow-condensed)', 'Barlow Condensed', 'sans-serif'],
        body: ['var(--font-barlow)', 'Barlow', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease forwards',
        fadeIn: 'fadeIn 0.6s ease forwards',
        'fadeUp-delay-1': 'fadeUp 0.8s ease 0.15s forwards',
        'fadeUp-delay-2': 'fadeUp 0.8s ease 0.3s forwards',
        'fadeUp-delay-3': 'fadeUp 0.8s ease 0.45s forwards',
        'bounce-slow': 'bounce 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
