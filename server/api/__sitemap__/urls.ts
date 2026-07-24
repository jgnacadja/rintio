import { useContentful } from '~/utils/useContentful'

export default defineSitemapEventHandler(async () => {
  const { fetchEntries } = useContentful()

  const response = await fetchEntries({
    content_type: 'post',
    limit: '200'
  })

  return (response.items || [])
    .filter((post: any) => post.fields?.path)
    .map((post: any) => ({
      loc: `/blog/article/${post.fields.path}`,
      lastmod: post.sys?.updatedAt
    }))
})
