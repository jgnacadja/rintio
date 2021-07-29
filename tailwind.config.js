module.exports = {
    purge: [
        "./src/**/*.vue",
        "./src/**/*.js",
        "./src/**/*.md",
        "./src/**/*.html",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '320px',
                '3xl': '1920px',
                '4xl': '2560px'
            },
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
                'colorblind': '#FFD80B',
            }),
            borderColor: theme => ({
                ...theme('colors'),
                'primary': '#014A7F',
                'secondary': '#FF0C0B',
                'danger': '#e3342f',
            }),
            backgroundImage: theme => ({
                'map': "url('/src/assets/images/home/map.png')",
            }),
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    variants: {
        fontWeight: ['hover'],
        borderWidth: ['hover'],
        borderStyle: ['hover'],
        animation: ["responsive", "motion-safe", "motion-reduce", "hover"],
        translate: ["active", "hover", "group-hover"],

    },
    plugins: [],
};