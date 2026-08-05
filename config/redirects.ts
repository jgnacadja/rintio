export interface LegacyRedirect {
  from: string
  to: string
}

// Add legacy URLs here (renamed slugs, moved articles, etc.)
// to 301-redirect to their current URL.
export const legacyRedirects: LegacyRedirect[] = [
  { from: '/blog/article/africa-tech-up-tour-atut', to: '/blog/article/africa-techup-tour-atut' }
]
