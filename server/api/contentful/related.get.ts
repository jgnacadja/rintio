export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  // Query params
  const category = query.category as string
  const excludePath = query.excludePath as string

  // Validation
  if (!category) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Query param "category" is required (e.g., "blog", "evenements", "offres")'
    })
  }

  if (!excludePath) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Query param "excludePath" is required to exclude current article'
    })
  }

  try {
    const { fetchEntries } = useContentful()

    const response = await fetchEntries({
      content_type: 'post',
      'fields.category': category,
      order: '-fields.date',
      limit: '3'
    })

    // Filtrer et mapper les articles connexes
    const relatedPosts = response.items
      .filter((post: any) => post.fields.path !== excludePath)
      .slice(0, 3)
      .map((post: any) => {
        const coverImage = post.fields.coverImage?.fields?.file?.url

        return {
          id: post.sys.id,
          title: post.fields.title,
          path: post.fields.path,
          coverImage: coverImage,
          metaDescription: post.fields.metaDescription
        }
      })

    return {
      items: relatedPosts,
      total: relatedPosts.length
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch related posts from Contentful'
    })
  }
})
