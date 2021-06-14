module.exports = {
  use: "gridsome-plugin-gtm",
  options: {
    id: process.env.GOOGLE_TAG_MANAGER,
    enabled: true,
    debug: false,
  },
};
