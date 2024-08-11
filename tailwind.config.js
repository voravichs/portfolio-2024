/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ["EightBit", 'serif']
      },
      colors: {
        'latte': '#FFFAEB',
        'sun': '#FFD147',
        'risd': '#005EF5'
      },
      screens: {
        'sm': '480px',
      },
    },
  },
  plugins: [],
}

