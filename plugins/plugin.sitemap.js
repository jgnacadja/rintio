module.exports = {
  use: "@gridsome/plugin-sitemap",
  options: {
    //exclude: [""],
    config: {
      "blog/articles/*": {
        changefreq: "weekly",
        priority: 0.5,
        lastmod: "2021-06-08",
      },
      "/a-propos": {
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2021-06-08",
      },
      "/offres": {
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2021-06-08",
      },
      "/blog": {
        changefreq: "monthly",
        priority: 0.7,
        lastmod: "2021-06-08",
      },
    },
  },
};
