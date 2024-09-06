/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js,ts,jsx,tsx}' ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': [ 'Roboto', 'sans-serif' ],
      }
    },
  },
  plugins: [],
}