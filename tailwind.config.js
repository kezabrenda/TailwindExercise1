const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueprimary: colors.sky,
        bluesecondary: colors.cyan,
        pinkprimary: colors.purple,
        other1: colors.indigo,
        gray2: colors.coolGray
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary': '#cc8af5',
        'primarytwo': '#cc99ff',
        'primarythree': '#d16ba3',
        'primaryfour': '#e68080',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
