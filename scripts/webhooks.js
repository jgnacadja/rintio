/**
 * Webhook Handler pour Contentful
 * Déclenche la génération du sitemap automatiquement quand du contenu est publié
 *
 * Configuration Contentful:
 * - Créer un webhook pointant vers: YOUR_DOMAIN/api/webhooks/contentful
 * - Events: Entry.publish, Entry.unpublish
 * - Content types: Post
 */

const generateSitemap = require("../scripts/generate-sitemap");

// Validation du secret webhook
function validateWebhookSignature(req, secret) {
  if (!secret) return true; // Skip si pas de secret configuré

  const signature = req.headers["x-contentful-webhook-signature"];
  if (!signature) return false;

  const crypto = require("crypto");
  const body = JSON.stringify(req.body);
  const hash = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("base64");

  return signature === hash;
}

/**
 * Handler Express pour le webhook Contentful
 */
function createWebhookHandler() {
  return (req, res) => {
    try {
      // Valider la signature si configurée
      if (
        !validateWebhookSignature(req, process.env.CONTENTFUL_WEBHOOK_SECRET)
      ) {
        return res.status(401).json({ error: "Invalid signature" });
      }

      const event = req.body;

      // Vérifier que c'est un événement de publication
      if (!event.sys || !event.sys.type) {
        return res.status(400).json({ error: "Invalid webhook payload" });
      }

      console.log(`📢 Webhook Contentful reçu: ${event.sys.type}`);

      // Vérifier si c'est un événement publish/unpublish
      if (
        ["Entry.publish", "Entry.unpublish"].includes(
          req.headers["x-contentful-topic"],
        )
      ) {
        console.log(`🔄 Régénération du sitemap après ${event.sys.type}...`);

        generateSitemap();

        return res.json({
          success: true,
          message: "Sitemap regenerated",
        });
      }

      return res.json({
        success: true,
        message: "Webhook received but no action taken",
      });
    } catch (error) {
      console.error("Erreur webhook:", error);
      return res.status(500).json({ error: error.message });
    }
  };
}

module.exports = createWebhookHandler;
