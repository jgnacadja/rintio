module.exports = {
  use: "@gridsome/plugin-sitemap",
  options: {
    //exclude: [""],
    config: {
      "blog/articles/*": {
        changefreq: "weekly",
        priority: 0.5,
      },
      "/a-propos": {
        changefreq: "monthly",
        priority: 0.7,
      },
      "/offres": {
        changefreq: "monthly",
        priority: 0.7,
      },
      "/blog": {
        changefreq: "monthly",
        priority: 0.7,
      },
    },
  },
};
