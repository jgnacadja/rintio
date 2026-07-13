#!/usr/bin/env node

/**
 * Script de test pour vérifier la génération du sitemap
 * Usage: node scripts/test-sitemap.js
 */

const fs = require("fs");
const path = require("path");

console.log("\n📋 Test de la génération du sitemap\n");
console.log("=".repeat(60));

// Test 1: Vérifier l'existence des fichiers
console.log("\n✓ Test 1: Vérification des fichiers");
const requiredFiles = [
  "./scripts/generate-sitemap.js",
  "./scripts/sitemap.config.js",
  "./scripts/webhooks.js",
  "./gridsome.server.js",
  "./plugins/plugin.sitemap.js",
];

let allFilesExist = true;
requiredFiles.forEach((file) => {
  const exists = fs.existsSync(path.join(__dirname, "..", file));
  console.log(`  ${exists ? "✅" : "❌"} ${file}`);
  if (!exists) allFilesExist = false;
});

// Test 2: Vérifier le contenu du répertoire des articles
console.log("\n✓ Test 2: Vérification du contenu");
const articlesDir = path.join(__dirname, "../content/articles");
try {
  if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));
    console.log(
      `  ✅ Répertoire articles trouvé: ${files.length} fichier(s) markdown`,
    );
  } else {
    console.log(`  ⚠️  Répertoire articles non trouvé: ${articlesDir}`);
  }
} catch (error) {
  console.log(`  ❌ Erreur: ${error.message}`);
}

// Test 3: Vérifier le sitemap actuel
console.log("\n✓ Test 3: Vérification du sitemap");
const sitemapPath = path.join(__dirname, "../sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemapSize = fs.statSync(sitemapPath).size;
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  const urlCount = (sitemapContent.match(/<url>/g) || []).length;
  console.log(`  ✅ Sitemap trouvé`);
  console.log(`     - Taille: ${(sitemapSize / 1024).toFixed(2)} KB`);
  console.log(`     - URLs: ${urlCount}`);
  console.log(
    `     - Valide: ${sitemapContent.includes("<?xml") ? "✅" : "❌"}`,
  );
} else {
  console.log(`  ⚠️  Sitemap non trouvé: ${sitemapPath}`);
  console.log(`     → Exécutez: npm run sitemap:generate`);
}

// Test 4: Vérifier les variables d'environnement
console.log("\n✓ Test 4: Variables d'environnement");
const envVars = [
  "CONTENTFUL_SPACE_ID",
  "CONTENTFUL_ACCESS_TOKEN",
  "SITE_URL",
  "CONTENTFUL_WEBHOOK_SECRET",
];

envVars.forEach((envVar) => {
  const hasValue = !!process.env[envVar];
  console.log(
    `  ${hasValue ? "✅" : "⚠️ "} ${envVar}: ${
      hasValue ? "***" : "non défini"
    }`,
  );
});

// Test 5: Vérifier le package.json
console.log("\n✓ Test 5: Scripts npm");
try {
  const packageJson = require(path.join(__dirname, "../package.json"));
  const sitemapScript = packageJson.scripts?.["sitemap:generate"];
  if (sitemapScript) {
    console.log(`  ✅ Script sitemap:generate: ${sitemapScript}`);
  } else {
    console.log(`  ❌ Script sitemap:generate non trouvé`);
  }

  if (packageJson.scripts?.build?.includes("generate-sitemap")) {
    console.log(`  ✅ Build script inclut la génération du sitemap`);
  } else {
    console.log(`  ⚠️  Build script n'inclut pas la génération du sitemap`);
  }
} catch (error) {
  console.log(`  ❌ Erreur: ${error.message}`);
}

console.log("\n" + "=".repeat(60));
console.log("\n📝 Prochaines étapes:\n");
console.log("  1. Exécuter la génération:");
console.log("     npm run sitemap:generate\n");
console.log("  2. Vérifier le sitemap généré:");
console.log("     cat sitemap.xml\n");
console.log("  3. Soumettre à Google Search Console:");
console.log("     https://search.google.com/search-console/\n");
console.log("=".repeat(60) + "\n");
