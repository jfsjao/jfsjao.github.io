import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        xp: {
          blue: '#245EDC',
          'blue-dark': '#0A246A',
          'blue-mid': '#3D6BC4',
          'blue-light': '#6CA0F6',
          inactive: '#7A96DF',
          close: '#C75050',
          'close-hov': '#E04040',
          minmax: '#4A7FD8',
          'minmax-hov': '#2D5DB5',
          desktop: '#3A6EA5',
          bliss: '#2E5FA3',
          start: '#3C8A3C',
          'start-hov': '#2E6B2E',
          taskbar: '#0A246A',
          'taskbar-btn': '#1E3F9E',
          'taskbar-btn-hov': '#2E55C0',
          'window-bg': '#ECE9D8',
          'window-border': '#0054E3',
          'window-inner': '#FFFFFF',
          text: '#000000',
          'text-inv': '#FFFFFF',
          'text-muted': '#6B6B6B',
          btn: '#ECE9D8',
          'btn-hov': '#D8D4C0',
          'input-bg': '#FFFFFF',
          'input-border': '#7F9DB9',
          online: '#00A651',
          away: '#FFB300',
          offline: '#9E9E9E',
        },
      },
      fontFamily: {
        xp: ['Tahoma', 'Segoe UI', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        'xp-sm': ['11px', '14px'],
        'xp-base': ['12px', '16px'],
        'xp-md': ['13px', '18px'],
      },
      boxShadow: {
        window:
          '2px 2px 8px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.15)',
        'window-inactive': '2px 2px 6px rgba(0,0,0,0.3)',
        'btn-xp':
          'inset 1px 1px 0 rgba(255,255,255,0.6), inset -1px -1px 0 rgba(0,0,0,0.2)',
        start: '2px 2px 4px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config
