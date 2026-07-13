#!/usr/bin/env node

/**
 * Script pour générer automatiquement le sitemap avec les dates de modification actuelles
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require("fs");
const path = require("path");
const { format } = require("date-fns");
const { fr } = require("date-fns/locale");

const SITE_URL = "https://rintio.com";
const CONTENT_DIR = path.join(__dirname, "../content/articles");
const OUTPUT_FILE = path.join(__dirname, "../sitemap.xml");

// Fonction pour obtenir la date de modification d'un fichier
function getFileModDate(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return format(stats.mtime, "yyyy-MM-dd", { locale: fr });
  } catch (error) {
    console.error(`Erreur lors de la lecture de ${filePath}:`, error);
    return format(new Date(), "yyyy-MM-dd");
  }
}

// Fonction pour convertir le nom de fichier en URL
function fileNameToUrl(fileName) {
  return fileName.replace(/\.md$/, "").replace(/\s+/g, "-").toLowerCase();
}

// Fonction pour générer le contenu du sitemap
function generateSitemapContent() {
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Pages statiques
  const staticPages = [
    { url: "", changefreq: "daily", priority: "1.0" },
    { url: "a-propos", changefreq: "monthly", priority: "0.8" },
    { url: "offres", changefreq: "weekly", priority: "0.9" },
    { url: "blog", changefreq: "weekly", priority: "0.85" },
  ];

  staticPages.forEach((page) => {
    const pageUrl = page.url ? `${SITE_URL}/${page.url}` : SITE_URL;
    const lastmod = format(new Date(), "yyyy-MM-dd");

    sitemapContent += `  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Articles du blog
  try {
    const files = fs
      .readdirSync(CONTENT_DIR)
      .filter((file) => file.endsWith(".md"));

    files.forEach((file) => {
      const filePath = path.join(CONTENT_DIR, file);
      const slug = fileNameToUrl(path.basename(file, ".md"));
      const lastmod = getFileModDate(filePath);
      const articleUrl = `${SITE_URL}/blog/article/${slug}`;

      sitemapContent += `  <url>
    <loc>${articleUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    });
  } catch (error) {
    console.error(
      `Erreur lors de la lecture du répertoire des articles: ${error.message}`,
    );
  }

  sitemapContent += `</urlset>`;
  return sitemapContent;
}

// Fonction principale
function main() {
  try {
    console.log("🔄 Génération du sitemap en cours...");
    const content = generateSitemapContent();

    fs.writeFileSync(OUTPUT_FILE, content, "utf-8");
    console.log(`✅ Sitemap généré avec succès: ${OUTPUT_FILE}`);
    console.log(`📍 Total: ${(content.match(/<url>/g) || []).length} URLs`);

    return 0;
  } catch (error) {
    console.error("❌ Erreur lors de la génération du sitemap:", error);
    return 1;
  }
}

if (require.main === module) {
  process.exit(main());
}

module.exports = generateSitemapContent;
