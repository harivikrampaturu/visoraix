/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0f766e', light: '#2dd4bf', dark: '#115e59' },
        secondary: { DEFAULT: '#0369a1', light: '#38bdf8', dark: '#075985' },
        surface: {
          DEFAULT: '#f0fdfa',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
        },
        ink: { DEFAULT: '#134e4a', soft: '#115e59', muted: '#5f7a76' },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 28px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 36px rgba(0,0,0,0.16)',
        glow: '0 0 24px #0f766e55',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-page': 'slidePage 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slidePage: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
