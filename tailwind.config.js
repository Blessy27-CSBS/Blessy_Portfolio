/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAFAF8',        // Off-white soft canvas
          card: '#FFFFFF',      // Pure white elevated card
          surface: '#F4F4F0',   // Soft light greige surface
          dark: '#1A1A1A',      // Near-black dark charcoal primary text
          muted: '#6B6B6B',     // Medium neutral gray subtext
          lime: '#84CC16',      // Vibrant lime / chartreuse accent
          limeDark: '#65A30D',  // High-contrast olive lime for text
          border: '#E0E0DC',    // Light gray subtle border
          paper: '#FAFAF8',
          taupe: '#6B6B6B',
          accent: '#84CC16',
          blue: '#84CC16',      // Map old blue to lime accent
          purple: '#1A1A1A',    // Map old purple to near-black
          indigo: '#6B6B6B',    // Map old indigo to muted gray
          cyan: '#84CC16',      // Map old cyan to lime
          emerald: '#65A30D',   // Map old emerald to dark lime
          text: '#1A1A1A',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Space Grotesk', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Anton', 'Impact', 'sans-serif'], // Map legacy serif calls gracefully
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft-xs': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'soft-sm': '0 4px 12px -2px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'soft-md': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.07), 0 8px 20px -4px rgba(0, 0, 0, 0.04)',
        'lime-glow': '0 0 20px rgba(132, 204, 22, 0.25), 0 4px 10px rgba(132, 204, 22, 0.15)',
        'glass-sm': '0 2px 8px rgba(0, 0, 0, 0.03)',
        'glass': '0 8px 24px -8px rgba(0, 0, 0, 0.05)',
        'glass-lg': '0 20px 40px -12px rgba(0, 0, 0, 0.07)',
        'glow-blue': '0 0 20px rgba(132, 204, 22, 0.25)',
        'glow-purple': '0 0 20px rgba(26, 26, 26, 0.15)',
        'glow-emerald': '0 0 20px rgba(101, 163, 13, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite',
        'marquee': 'marquee 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
