/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ["EightBit", 'serif'],
        'vt': ["VT", 'monospace'],
        'noto-sans': ["Noto Sans", "sans-serif"],
        'title': ["Black Chancery", "serif"],
        'bona-nova': ["Bona Nova", "serif"],
      },
      colors: {
        'latte': '#FFFAEB',
        'sun': '#FFD147',
        'risd': '#005EF5'
      },
      screens: {
        'sm': '480px',
      },
      dropShadow: {
        'sexy': [
          '0 1px 1px rgba(0 0 0 / 0.075)',
          '0 2px 2px rgba(0 0 0 / 0.075)',
          '0 4px 4px rgba(0 0 0 / 0.075)',
          '0 8px 8px rgba(0 0 0 / 0.075)',
          '0 16px 16px rgba(0 0 0 / 0.075)'
        ],
      },
      boxShadow: {
        'crispy': [
          '0px 0.5px 0.5px rgba(139 98 183/ 0.57)',
          '0px 1.4px 1.3px -1.2px rgba(139 98 183 / 0.47)',
          '0px 4px 3.8px -2.5px rgba(139 98 183 / 0.38)',
          '0.1px 10.9px 10.2px -3.7px rgba(139 98 183 / 0.28)'
        ]
      }
    },
  },
  plugins: [],
}

