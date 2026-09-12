/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0a0a0c',
          50: '#f5f5f7',
          100: '#e8e8ed',
          200: '#d1d1db',
          300: '#a0a0b0',
          400: '#6b6b80',
          500: '#4a4a5a',
          600: '#2e2e3a',
          700: '#1a1a24',
          800: '#111118',
          900: '#0a0a0c',
          950: '#050508',
        },
        primary: {
          DEFAULT: '#ff6b26',
          50: '#fff4ee',
          100: '#ffe4d0',
          200: '#ffc5a0',
          300: '#ff9e66',
          400: '#ff7d38',
          500: '#ff6b26',
          600: '#e54d0a',
          700: '#bf3a08',
          800: '#992e0b',
          900: '#7a270d',
        },
        amber: {
          DEFAULT: '#f59e0b',
          glow: '#fbbf24',
        },
        surface: {
          DEFAULT: 'rgba(255,255,255,0.04)',
          hover: 'rgba(255,255,255,0.08)',
          glass: 'rgba(255,255,255,0.06)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        fira: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'hero-mesh':
          'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(255,107,38,0.15) 0%, rgba(10,10,12,0) 60%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(245,158,11,0.08) 0%, transparent 60%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'gradient-x': 'gradientX 4s ease infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-subtle': 'bounceSm 2s ease-in-out infinite',
        'counter': 'counter 1.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,107,38,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255,107,38,0.6), 0 0 80px rgba(255,107,38,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        bounceSm: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderColor: {
        glass: 'rgba(255,255,255,0.08)',
        'glass-hover': 'rgba(255,255,255,0.16)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
};
