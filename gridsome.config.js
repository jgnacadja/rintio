const nodeExternals = require("webpack-node-externals");

const tailwindcss = require("tailwindcss");
const contentful = require("./plugins/plugin.contentful");
const tailwind = require("./plugins/plugin.tailwind");

module.exports = {
  siteName: "Rintio",
  siteDescription: "We involve for a better life",
  siteUrl: `https://rintio.com`,
  titleTemplate: "Rintio - %s",
  icon: "./src/assets/favicon.png",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  plugins: [contentful, tailwind],

  chainWebpack(config, { isServer }) {
    config.module.rules.delete("svg");
    config.module
      .rule("svg")
      .test(/\.svg$/)
      .use("vue")
      .loader("vue-loader")
      .end()
      .use("svg-to-vue-component")
      .loader("svg-to-vue-component/loader");

    if (isServer) {
      config.externals(
        nodeExternals({
          allowlist: [
            /\.css$/,
            /\?vue&type=style/,
            /vue-instantsearch/,
            /instantsearch.js/,
            /typeface-league-spartan/,
          ],
        })
      );
    }
  },

  templates: {
    //ContentfulPost: "/article/:title",
    //ContentfulCategory: "/category/:title",
    //ContentfulTag: "/tag/:title",
  },
};
