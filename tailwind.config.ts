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
        // Legacy colors
        void: '#0a0a0f',
        navy: '#1a1a2e',
        'off-white': '#e0e0e0',
        
        // Defensive Ops - The Vault (Blue/Clinical)
        defensive: {
          bg: '#0d1117',
          primary: '#58a6ff',
          success: '#7ee787',
          warning: '#f0883e',
          border: 'rgba(88, 166, 255, 0.2)',
        },
        
        // Offensive Recon - The Shadow (Red/Terminal)
        offensive: {
          bg: '#000000',
          primary: '#ff0055',
          accent: '#00ff41',
          warning: '#ffee00',
          border: 'rgba(255, 0, 85, 0.3)',
        },
        
        // OSINT - The Panopticon (Cyan/Surveillance)
        osint: {
          bg: '#0a0e27',
          primary: '#00ffc8',
          accent: '#ff006e',
          warning: '#ffbe0b',
          border: 'rgba(0, 255, 200, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains-mono)'],
        display: ['var(--font-space-grotesk)'],
        defensive: ['var(--font-ibm-plex-sans)'],
        terminal: ['var(--font-fira-code)'],
      },
      animation: {
        'grain': 'grain 0.1s steps(10) infinite',
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'radar-sweep': 'radar-sweep 4s linear infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'blink': 'blink 1s step-end infinite',
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
        heartbeat: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scan-line': {
          '0%': { top: '0', opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { top: '100%', opacity: '0' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
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
