import { toPostLink } from '~/utils/postLink'

export default defineSitemapEventHandler(async () => {
  try {
    const { fetchEntries } = useContentful()

    const response = await fetchEntries({
      content_type: 'post',
      limit: '200'
    })

    return (response.items || [])
      .filter((post: any) => post.fields?.path)
      .map((post: any) => ({
        loc: toPostLink(post.fields.path),
        lastmod: post.sys?.updatedAt
      }))
  } catch (error) {
    console.error('Failed to fetch posts from Contentful for sitemap', error)
    return []
  }
})
