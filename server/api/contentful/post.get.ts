import { useContentful } from '~/utils/useContentful'
import { buildLookupMaps, resolveLink, resolveAssetFile } from '~/utils/contentfulResolver'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const path = query.path as string

  // Validation
  if (!path) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Query param "path" is required (e.g., "blog/article/monarticle")'
    })
  }

  try {
    const { fetchEntries } = useContentful()

    const response = await fetchEntries({
      content_type: 'post',
      'fields.path': path,
      limit: '1',
      include: '2'
    })

    if (!response.items || response.items.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: `Post "${path}" not found`
      })
    }

    const post = response.items[0]
    const maps = buildLookupMaps(response.includes || {})
    const coverImage = resolveAssetFile(resolveLink(post.fields.coverImage, maps))
    const categories = (post.fields.categories || [])
      .map((cat: any) => resolveLink(cat, maps))
      .filter(Boolean)
      .map((cat: any) => cat.fields?.title)
      .filter(Boolean)

    return {
      id: post.sys.id,
      title: post.fields.title,
      path: post.fields.path,
      author: post.fields.author,
      categories,
      date: post.fields.date,
      coverImage,
      content: post.fields.content,
      excerpt: post.fields.excerpt,
      metaDescription: post.fields.metaDescription,
      seo: {
        title: post.fields.seoTitle || post.fields.title,
        tags: post.fields.seoTags || [],
        keywords: post.fields.seoKeywords || []
      },
      views: post.fields.views || 0,
      publishedAt: post.sys.createdAt,
      updatedAt: post.sys.updatedAt
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch post from Contentful'
    })
  }
})
