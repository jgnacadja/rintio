module.exports = {
  purge: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.md",
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#014A7F',
        'secondary': '#FF0C0B',
        'danger': '#e3342f',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#014A7F',
        'secondary': '#FF0C0B',
        'danger': '#e3342f',
       }),
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'serif'],
      },
    },
  },
  variants: {
    fontWeight: ['hover'],
  },
  plugins: [],
};
