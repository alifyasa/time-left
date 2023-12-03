/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Chivo Mono"', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [],
}