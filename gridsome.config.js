const nodeExternals = require("webpack-node-externals");

const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Rintio",
  siteDescription: "We involve for a better life",
  siteUrl: `https://rintio.com`,
  titleTemplate: "Rintio - %s",
  icon: "./src/assets/rintio_favicon.png",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Article",
        path: "content/articles/*.md",
        refs: {
          // Creates a GraphQL collection from 'categories' in front-matter and adds a reference.
          categories: {
            typeName: "Category",
            create: true,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",

      // these options are optional, as they are copies of the default values...
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false,
      },
    },
  ],

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
          whitelist: [
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
    Article: "/article/:title",
    Category: "/category/:title",
  },
};
