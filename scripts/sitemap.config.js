/**
 * Configuration avancée pour la génération du sitemap
 * Permet de personnaliser les URLs, priorités et fréquences
 */

module.exports = {
  // Configuration générale
  siteUrl: process.env.SITE_URL || "https://rintio.com",

  // Répertoire du contenu
  contentPaths: {
    articles: "./content/articles",
  },

  // Configuration des pages statiques
  staticPages: [
    {
      url: "",
      label: "Homepage",
      changefreq: "daily",
      priority: "1.0",
      lastmod: null, // utilise la date actuelle si null
    },
    {
      url: "a-propos",
      label: "À propos",
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: "offres",
      label: "Offres",
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      url: "blog",
      label: "Blog",
      changefreq: "weekly",
      priority: "0.85",
    },
  ],

  // Configuration pour les articles
  articles: {
    basePath: "blog/article",
    changefreq: "weekly",
    priority: "0.7",
    // Pattern pour exclure certains files
    exclude: ["draft-*", "archive-*", "[Ss]ratch*"],
  },

  // Configuration pour les locales (si multi-lang)
  locales: {
    enabled: false,
    default: "fr",
    supported: ["fr", "en"],
    // Ajouter un prefix de langue à l'URL
    prefixUrls: false,
  },

  // Configuration de sortie
  output: {
    path: "./sitemap.xml",
    // Path optionnel pour l'index des sitemaps si > 50k URLs
    indexPath: "./sitemap-index.xml",
    // Limite d'URLs par fichier sitemap (standard: 50000)
    urlsPerFile: 50000,
  },

  // Configuration du webhook
  webhook: {
    enabled: process.env.CONTENTFUL_WEBHOOK_ENABLED === "true",
    validateSignature: !!process.env.CONTENTFUL_WEBHOOK_SECRET,
    secret: process.env.CONTENTFUL_WEBHOOK_SECRET,
    // Délai avant de régénérer après le webhook (ms)
    debounceDelay: 2000,
  },

  // Logging
  logging: {
    verbose: process.env.VERBOSE_LOGGING === "true",
    writeLog: false,
    logPath: "./logs/sitemap.log",
  },

  // URLs personnalisées à inclure
  customUrls: [
    // Exemple:
    // {
    //   url: 'services/web-development',
    //   changefreq: 'monthly',
    //   priority: '0.8',
    //   lastmod: '2024-01-15',
    // },
  ],

  // URLs à exclure complètement
  excludeUrls: ["admin", "api", "thank-you", "404"],
};
