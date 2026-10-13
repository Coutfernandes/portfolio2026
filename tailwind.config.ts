import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        mono: ['Space Mono', 'Consolas', 'monospace'],
        marker: ['Permanent Marker', 'cursive'],
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'reveal-up': { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: { marquee: 'marquee 38s linear infinite', 'reveal-up': 'reveal-up 700ms ease-out both' },
    },
  },
  plugins: [],
} satisfies Config