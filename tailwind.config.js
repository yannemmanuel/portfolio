/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#233554',
        },
        slate: {
          DEFAULT: '#8892b0',
          light: '#a8b2d1',
          lighter: '#ccd6f6',
        },
        teal: {
          DEFAULT: '#64ffda',
          tint: 'rgba(100, 255, 218, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
