/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        '3xl': '1920px',
        '4xl': '2560px'
      },
      colors: {
        primary: '#014A7F',
        secondary: '#FF0C0B',
        danger: '#e3342f',
        colorblind: '#FFD80B'
      },
      backgroundColor: {
        primary: '#014A7F',
        secondary: '#FF0C0B',
        danger: '#e3342f',
        colorblind: '#FFD80B'
      },
      borderColor: {
        primary: '#014A7F',
        secondary: '#FF0C0B',
        danger: '#e3342f'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // body
        roboto: ['Roboto', 'sans-serif'] // titres
      }
    }
  },
  plugins: ['@tailwindcss/typography']
}