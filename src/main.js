// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import "~/main.scss";
import "~/variables.scss";
import "~/assets/font-awesome/all.js";

import VueScrollTo from "vue-scrollto";

import Typography from "typography";

import VueObserveVisibility from "vue-observe-visibility";

import VueTailwind from "vue-tailwind";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  scaleRatio: 2.6,
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
});

const fontsCss = require('./assets/css/fonts.css')

export default function (Vue, { head }) {
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

  Vue.use(VueTailwind);
}
