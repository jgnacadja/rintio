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
        'primary': '#f0fff4',
        'secondary': '#c6f6d5',
        'danger': '#e3342f',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#f0fff4',
        'secondary': '#c6f6d5',
        'danger': '#e3342f',
       }),
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
