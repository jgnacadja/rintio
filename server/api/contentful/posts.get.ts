export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  // Query params avec valeurs par défaut
  const category = (query.category as string) || 'blog'
  const order = (query.order as string) || '-fields.date'
  const limit = Math.min(parseInt(query.limit as string) || 10, 100)
  const skip = Math.max(parseInt(query.skip as string) || 0, 0)

  // Validation de la catégorie
  const validCategories = ['blog', 'evenements', 'offres']
  if (!validCategories.includes(category)) {
    throw createError({
      statusCode: 400,
      statusMessage: `Category must be one of: ${validCategories.join(', ')}`
    })
  }

  try {
    const { fetchEntries } = useContentful()

    const response = await fetchEntries({
      content_type: 'post',
      'fields.category': category,
      order: order,
      limit: limit.toString(),
      skip: skip.toString()
    })

    // Mapper les posts
    const posts = response.items.map((post: any) => {
      const coverImage = post.fields.coverImage?.fields?.file?.url

      return {
        id: post.sys.id,
        title: post.fields.title,
        path: post.fields.path,
        author: post.fields.author,
        categories: post.fields.categories || [category],
        date: post.fields.date,
        coverImage: coverImage,
        excerpt: post.fields.excerpt,
        metaDescription: post.fields.metaDescription
      }
    })

    return {
      items: posts,
      total: response.total,
      skip: skip,
      limit: limit,
      hasMore: skip + limit < response.total
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch posts from Contentful'
    })
  }
})
