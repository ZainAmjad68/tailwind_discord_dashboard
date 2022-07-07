const colors = require('tailwindcss/colors')  // provides additional colors that we can use to extend default collection

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#202225', // assign a custom name to a color you need
        secondary: '#5865f2', // assign a custom name to a color you need
        greyyy: colors.trueGray, // add more colors from tailwind extended color collection
        grey: {           // override tailwind's pallette for color grey
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
