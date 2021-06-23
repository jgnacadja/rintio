module.exports = {
  use: "gridsome-plugin-robots-txt",
  options: {
    host: "https://www.rintio.com",
    sitemap: "https://www.rintio.com/configs/sitemap.xml",
    policy: [
      {
        userAgent: "*",
        allow: "/",
        //disallow: ["/mentions-legales", "/cgu"],
      },
    ],
  },
};
