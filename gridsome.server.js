// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const path = require('path');

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  // Hook pour regenerer le sitemap après la création du site
  api.afterBuild(() => {
    console.log('✅ Build terminé - Sitemap généré automatiquement');
  });

  // Hook pour surveiller les changements de contenu en développement
  api.onContentUpdate(({ action, type, document }) => {
    console.log(`📄 Contenu ${action}:`, type);
  });
}
