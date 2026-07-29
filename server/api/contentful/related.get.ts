import { buildLookupMaps, resolveLink, resolveAssetFile } from '~/utils/contentfulResolver'

type CategorySlug = 'offres' | 'blog' | 'evenements'

const categoryTitleMap: Record<CategorySlug, string> = {
  offres: 'Offres',
  blog: 'Blog',
  evenements: 'Evènements'
}

const validCategories: CategorySlug[] = ['blog', 'evenements', 'offres']

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const category = validCategories.includes(query.category as CategorySlug)
    ? (query.category as CategorySlug)
    : 'blog'
  const excludePath = query.excludePath as string

  if (!excludePath) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Query param "excludePath" is required to exclude current article'
    })
  }

  try {
    const { fetchEntries } = useContentful()

    const categoryResponse = await fetchEntries({
      content_type: 'category',
      'fields.title': categoryTitleMap[category],
      limit: '1'
    })

    const categoryId = categoryResponse.items?.[0]?.sys?.id
    if (!categoryId) {
      throw createError({
        statusCode: 404,
        statusMessage: `Category "${category}" not found`
      })
    }

    const response = await fetchEntries({
      content_type: 'post',
      'fields.categories.sys.id': categoryId,
      order: '-fields.date',
      limit: '4',
      include: '2'
    })

    const maps = buildLookupMaps(response.includes || {})

    const relatedPosts = response.items
      .filter((post: any) => post.fields.path !== excludePath)
      .slice(0, 3)
      .map((post: any) => {
        const coverImage = resolveAssetFile(resolveLink(post.fields.coverImage, maps))

        return {
          id: post.sys.id,
          title: post.fields.title,
          path: post.fields.path,
          coverImage,
          metaDescription: post.fields.metaDescription
        }
      })

    return {
      items: relatedPosts,
      total: relatedPosts.length
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch related posts from Contentful'
    })
  }
})
