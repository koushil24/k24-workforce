/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: { 700: '#102A5C', 800: '#0A1A3A', 900: '#06122B' },
        electric: '#1F6FEB',
        gold: '#D4A82A',
      },
      fontFamily: { sans: ['Inter', 'Noto Sans Kannada', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
