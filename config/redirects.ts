export interface LegacyRedirect {
  from: string
  to: string
}

// Ajouter ici les anciennes URLs (slugs renommés, articles déplacés, etc.)
// à rediriger en 301 vers leur URL actuelle. Ne pas toucher nuxt.config.ts.
export const legacyRedirects: LegacyRedirect[] = [
  { from: '/blog/article/africa-tech-up-tour-atut', to: '/blog/article/africa-techup-tour-atut' }
]
