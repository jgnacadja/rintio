import {
  buildLookupMaps,
  resolveLink,
  resolveAssetFile,
  richTextToPlainText
} from '~/utils/contentfulResolver'

type CategorySlug =
  'offres' | 'blog' | 'evenements' | 'stories' | 'story' | 'datalab' | 'offres-france'

const categoryTitleMap: Record<CategorySlug, string> = {
  offres: 'Offres',
  blog: 'Blog',
  evenements: 'Evènements',
  stories: 'Stories',
  story: 'Story',
  datalab: 'Datalab',
  'offres-france': 'Offres France'
}

const validCategories: CategorySlug[] = [
  'blog',
  'evenements',
  'offres',
  'stories',
  'story',
  'datalab',
  'offres-france'
]

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const category = validCategories.includes(query.category as CategorySlug)
    ? (query.category as CategorySlug)
    : 'blog'
  const order = (query.order as string) || '-fields.date'
  const limit = Math.min(Number.parseInt(query.limit as string) || 10, 100)
  const skip = Math.max(Number.parseInt(query.skip as string) || 0, 0)

  try {
    const { fetchEntries } = useContentful()

    // Récupérer l'ID de la catégorie
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
      order: order,
      limit: limit.toString(),
      skip: skip.toString(),
      include: '2'
    })

    const maps = buildLookupMaps(response.includes || {})

    const posts = response.items.map((post: any) => {
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
        categories: categories.length ? categories : [categoryTitleMap[category]],
        date: post.fields.date,
        coverImage,
        excerpt: post.fields.excerpt,
        metaDescription: richTextToPlainText(post.fields.metaDescription)
      }
    })

    return {
      items: posts,
      total: response.total,
      skip,
      limit,
      hasMore: skip + limit < response.total
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch posts from Contentful'
    })
  }
})
