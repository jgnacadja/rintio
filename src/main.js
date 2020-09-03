// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import Buefy from "buefy";
import "~/main.scss";
import axios from 'axios'
import '~/assets/font-awesome/all.js'


export default function (Vue, { router, head, isClient }) {

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'fr' }

  // import vue meta
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit=no"
  });

  // Import Adobe Fonts
  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/bur4tax.css",
  });
  
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Register our Bulma component library
  Vue.use(Buefy);

    //http requests via axios
    Vue.use({
      install(Vue) {
        Vue.prototype.$api = axios.create({
          baseURL: 'https://api.sendgrid.com/v3/mail'
        })
      }
    })

}


