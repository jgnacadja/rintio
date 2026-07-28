import { useContentful } from '~/utils/useContentful'
import { toPostLink } from '~/utils/postLink'

export default defineSitemapEventHandler(async () => {
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
})
