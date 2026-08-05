import type { ContentfulPost } from '~/types/contentful'

export function useSeo(post: ContentfulPost, siteUrl: string) {
  const imagePath = post.coverImage ? `${siteUrl}${post.coverImage.file.url}` : ''
  const canonicalUrl = `${siteUrl}${toPostLink(post.path)}`
  const seoTitle = post.seo?.title ?? post.title
  useHead({
    title: seoTitle,
    link: [{ rel: 'canonical', href: canonicalUrl }],
    meta: [
      { name: 'description', content: post.metaDescription },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:title', content: seoTitle },
      { property: 'og:type', content: 'article' },
      { property: 'og:description', content: post.metaDescription },
      { property: 'og:image', content: imagePath },
      { name: 'twitter:card', content: post.coverImage ? 'summary_large_image' : 'summary' },
      { name: 'twitter:image', content: imagePath },
      { property: 'twitter:title', content: seoTitle }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          description: post.metaDescription,
          datePublished: post.date,
          author: { name: 'Rintio' },
          headline: post.title,
          image: imagePath
        })
      }
    ]
  })
}
