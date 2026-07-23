import { useContentful } from '~/utils/useContentful'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const path = query.path as string

  // Validation
  if (!path) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Query param "path" is required'
    })
  }

  const validPaths = ['Acceuil', 'Blog', 'A propos', 'Offres']
  if (!validPaths.includes(path)) {
    throw createError({
      statusCode: 400,
      statusMessage: `Path must be one of: ${validPaths.join(', ')}`
    })
  }

  try {
    const { fetchEntries } = useContentful()

    const response = await fetchEntries({
      content_type: 'page',
      'fields.path': path,
      limit: '1'
    })

    if (!response.items || response.items.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: `Page "${path}" not found`
      })
    }

    const page = response.items[0]

    // Formater la réponse
    return {
      path: page.fields.path,
      seo: {
        title: page.fields.seoTitle || page.fields.title,
        description: page.fields.seoDescription,
        keywords: page.fields.seoKeywords,
        image: page.fields.seoImage?.fields?.file?.url
      },
      sections: (page.fields.sections || []).map((section: any) => ({
        id: section.sys.id,
        type: section.sys.contentType?.sys?.id,
        ...section.fields
      }))
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch page from Contentful'
    })
  }
})
