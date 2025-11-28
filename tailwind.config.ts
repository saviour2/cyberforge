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
        void: '#0a0a0f',
        navy: '#1a1a2e',
        'neon-cyan': '#00ff9d',
        'hot-pink': '#ff006e',
        'electric-yellow': '#ffbe0b',
        'off-white': '#e0e0e0',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        display: ['var(--font-space-grotesk)'],
      },
      animation: {
        'grain': 'grain 0.1s steps(10) infinite',
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        glitch: {
          '0%': {
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(5deg)',
          },
          '40%': {
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(-5deg)',
          },
          '60%': {
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(5deg)',
          },
          '80%': {
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(-5deg)',
          },
          '100%': {
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 255, 157, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0, 255, 157, 0.6)',
          },
        },
        scanline: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(100vh)',
          },
        },
      },
      backgroundImage: {
        'radial-void': 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)',
      },
    },
  },
  plugins: [],
}

export default config
