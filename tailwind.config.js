import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
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
        colorblind: '#FFD80B',
        'gray-rintio': '#A1A7B3'
      },
      backgroundColor: {
        primary: '#014A7F',
        secondary: '#FF0C0B',
        danger: '#e3342f',
        colorblind: '#FFD80B',
        'gray-rintio': '#A1A7B3'
      },
      borderColor: {
        primary: '#014A7F',
        secondary: '#FF0C0B',
        danger: '#e3342f',
        'gray-rintio': '#A1A7B3'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // body
        roboto: ['Roboto', 'sans-serif'] // titres
      }
    }
  },
  plugins: [typography]
}
