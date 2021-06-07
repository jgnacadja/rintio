// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import "~/main.scss";
import axios from "axios";
import "~/assets/font-awesome/all.js";

import VueScrollTo from "vue-scrollto";

import Typography from "typography";

import VueObserveVisibility from "vue-observe-visibility";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  scaleRatio: 1.9,
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
});

export default function (Vue, { router, head, isClient }) {
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "fr" };

  // import vue meta
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollTo);

  head.style.push({
    type: "text/css",
    cssText: typography.toString(),
  });

  Vue.use(VueObserveVisibility);
}
