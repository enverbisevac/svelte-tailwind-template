module.exports = {
  theme: {
    extend: {},
    backgroundColor: theme => ({
      primary: '#64b5f6',
      "primary-light": '#9be7ff',
      "primary-dark": '#2286c3',
      secondary: '#0277bd',
      "secondary-light": '#58a5f0',
      "secondary-dark": '#004c8c',
      "table-header": theme('colors.gray.300'),
      danger: "#e3342f"
    }),
    textColor: {
      'on-primary': "black",
      'on-primary-light': "black",
      'on-primary-dark': "white",
      'on-secondary': "white",
      'on-secondary-light': "black",
      'on-secondary-dark': "white",
      'danger': '#e3342f',
    },
  },
  variants: {},
  plugins: []
}
