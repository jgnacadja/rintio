// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import "~/main.scss";
import "~/variables.scss";
import axios from "axios";
import "~/assets/font-awesome/all.js";

import VueScrollTo from "vue-scrollto";

import Typography from "typography";

import VueObserveVisibility from "vue-observe-visibility";

import VueTailwind from 'vue-tailwind'

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  scaleRatio: 2.6,
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
});

const fontsCss = `
/* montserrat-100 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 100;
  src: url('../fonts/montserrat-v15-latin-100.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-100.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-100.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-100italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 100;
  src: url('../fonts/montserrat-v15-latin-100italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-100italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-100italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-200italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 200;
  src: url('../fonts/montserrat-v15-latin-200italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-200italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-200italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-200italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-200italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-200 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 200;
  src: url('../fonts/montserrat-v15-latin-200.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-200.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-200.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-300italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 300;
  src: url('../fonts/montserrat-v15-latin-300italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-300italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-300italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-300 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/montserrat-v15-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-300.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-300.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/montserrat-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: url('../fonts/montserrat-v15-latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-500 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/montserrat-v15-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-500.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-500italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 500;
  src: url('../fonts/montserrat-v15-latin-500italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-500italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-500italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-600 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/montserrat-v15-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-600.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-600.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-600italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  src: url('../fonts/montserrat-v15-latin-600italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-600italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-600italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-700 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/montserrat-v15-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-700italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 700;
  src: url('../fonts/montserrat-v15-latin-700italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-700italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-700italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-800 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  src: url('../fonts/montserrat-v15-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-800.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-800.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-800italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 800;
  src: url('../fonts/montserrat-v15-latin-800italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-800italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-800italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-900 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  src: url('../fonts/montserrat-v15-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-900.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-900.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-900italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  src: url('../fonts/montserrat-v15-latin-900italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/montserrat-v15-latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/montserrat-v15-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/montserrat-v15-latin-900italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/montserrat-v15-latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/montserrat-v15-latin-900italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}

/* roboto-100 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: url('../fonts/roboto-v27-latin-100.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-100.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-100.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-100italic - latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  src: url('../fonts/roboto-v27-latin-100italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-100italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-100italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-300 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/roboto-v27-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-300.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-v27-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-300italic - latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  src: url('../fonts/roboto-v27-latin-300italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-300italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-300italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-italic - latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  src: url('../fonts/roboto-v27-latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-500 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/roboto-v27-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-500.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-500italic - latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  src: url('../fonts/roboto-v27-latin-500italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-500italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-500italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-700 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/roboto-v27-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-700italic - latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  src: url('../fonts/roboto-v27-latin-700italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-700italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-700italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-900 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url('../fonts/roboto-v27-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-900.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-900.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-900italic - latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  src: url('../fonts/roboto-v27-latin-900italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v27-latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v27-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v27-latin-900italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v27-latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v27-latin-900italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
`;



export default function (Vue, { router, head, isClient }) {
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "fr" };

  // Import Crisp
  head.script.push({
    src: "crisp.js",
    body: true,
  });

  // import vue meta
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
  });

  head.style.push({
    type: "text/css",
    cssText: fontsCss,
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollTo);

  head.style.push({
    type: "text/css",
    cssText: typography.toString(),
  });

  Vue.use(VueObserveVisibility);

  Vue.use(VueTailwind)
}
