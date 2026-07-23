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
    const coverImage = post.fields.coverImage?.fields?.file?.url
    const content = post.fields.content // Richtext ou markdown

    // Formater la réponse
    return {
      id: post.sys.id,
      title: post.fields.title,
      path: post.fields.path,
      author: post.fields.author,
      categories: post.fields.categories || [],
      date: post.fields.date,
      coverImage: coverImage,
      content: content,
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
