/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 21st.dev theme colors
        primary: '#10b981', // emerald-500
        secondary: '#34d399', // emerald-400
        accent: '#6ee7b7', // emerald-300
        background: '#0a0a0a', // very dark gray
        surface: '#1a1a1a', // dark gray
        text: '#ffffff', // white
        'text-secondary': '#9ca3af', // gray-400
        border: '#374151', // gray-700
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}