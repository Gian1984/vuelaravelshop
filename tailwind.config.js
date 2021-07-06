const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            teal: colors.teal,
            cyan: colors.cyan,
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
