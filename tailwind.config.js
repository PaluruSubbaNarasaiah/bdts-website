/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9e6',
          100: '#ffefc0',
          200: '#ffe299',
          300: '#ffd073',
          400: '#ffbe4d',
          500: '#ff9d26', // Primary orange
          600: '#e67e00',
          700: '#cc6000',
          800: '#b24200',
          900: '#992700',
        },
        secondary: {
          50: '#f7f7ff',
          100: '#e6e6ff',
          200: '#c2c2ff',
          300: '#9e9eff',
          400: '#7a7aff',
          500: '#5656ff',
          600: '#3232ff',
          700: '#0e0eff',
          800: '#0000ea',
          900: '#0000c6',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffefc0',
          200: '#ffe799',
          300: '#ffde73',
          400: '#ffd54d',
          500: '#ffcc26', // Gold
          600: '#e6b300',
          700: '#cc9a00',
          800: '#b28200',
          900: '#996a00',
        },
       dark: {
          900: '#000000',
          800: '#0a0a0a',
          700: '#141414',
          600: '#1e1e1e',
          500: '#282828',
          400: '#323232',
          300: '#3c3c3c',
          200: '#464646',
          100: '#505050',
          50: '#5a5a5a',
        },
        darkMode: 'class',
        light: {
          900: '#ffffff',
          800: '#f0f0f0',
          700: '#e0e0e0',
          600: '#d0d0d0',
          500: '#c0c0c0',
          400: '#b0b0b0',
          300: '#a0a0a0',
          200: '#909090',
          100: '#808080',
          50: '#707070',
        },
        success: {
          500: '#10b981', // Green
        },
        warning: {
          500: '#f59e0b', // Amber
        },
        error: {
          500: '#ef4444', // Red
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Orbitron', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 5px theme(colors.primary.500), 0 0 20px theme(colors.primary.500)',
        'neon-gold': '0 0 5px theme(colors.accent.500), 0 0 20px theme(colors.accent.500)',
        'neon-hover': '0 0 10px theme(colors.primary.500), 0 0 40px theme(colors.primary.500)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};