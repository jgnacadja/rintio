import { useContentful } from '~/utils/useContentful'

function buildLookupMaps(includes: any) {
  const entryMap = new Map<string, any>()
  const assetMap = new Map<string, any>()

  for (const entry of includes?.Entry || []) {
    entryMap.set(entry.sys.id, entry)
  }
  for (const asset of includes?.Asset || []) {
    assetMap.set(asset.sys.id, asset)
  }

  return { entryMap, assetMap }
}

function resolveLink(link: any, maps: { entryMap: Map<string, any>; assetMap: Map<string, any> }) {
  if (!link?.sys) return null
  const { linkType, id } = link.sys
  if (linkType === 'Entry') return maps.entryMap.get(id) || null
  if (linkType === 'Asset') return maps.assetMap.get(id) || null
  return null
}

function resolveAssetFile(asset: any) {
  if (!asset) return undefined
  return {
    file: {
      url: asset.fields?.file?.url,
      fileName: asset.fields?.file?.fileName,
      contentType: asset.fields?.file?.contentType
    },
    title: asset.fields?.title,
    description: asset.fields?.description
  }
}

function transformSection(
  section: any,
  maps: { entryMap: Map<string, any>; assetMap: Map<string, any> }
): any {
  if (!section) return null
  const type = section.sys.contentType?.sys?.id
  const fields = { ...section.fields }

  // Resolve direct asset links
  if (fields.image) fields.image = resolveAssetFile(resolveLink(fields.image, maps))
  if (fields.coverImage) fields.coverImage = resolveAssetFile(resolveLink(fields.coverImage, maps))

  // Resolve nested component links
  if (fields.columns && Array.isArray(fields.columns)) {
    fields.columns = fields.columns
      .map((col: any) => {
        const resolved = resolveLink(col, maps)
        if (!resolved) return null
        return transformSection(resolved, maps)
      })
      .filter(Boolean)
  }

  return {
    id: section.sys.id,
    type,
    ...fields
  }
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const path = query.path as string

  if (!path) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Query param "path" is required'
    })
  }

  const validPaths = ['Acceuil', 'Acceuil France', 'Blog', 'A propos', 'Offres']
  if (!validPaths.includes(path)) {
    throw createError({
      statusCode: 400,
      statusMessage: `Path must be one of: ${validPaths.join(', ')}`
    })
  }

  try {
    const { fetchEntries } = useContentful()

    const response = await fetchEntries({
      content_type: 'page_landing',
      'fields.path': path,
      include: '10',
      limit: '1'
    })

    if (!response.items || response.items.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: `Page "${path}" not found`
      })
    }

    const page = response.items[0]
    const maps = buildLookupMaps(response.includes || {})

    const seoEntry = resolveLink(page.fields.seo, maps)
    const sections = (page.fields.sections || [])
      .map((sectionLink: any) => resolveLink(sectionLink, maps))
      .filter(Boolean)
      .map((section: any) => transformSection(section, maps))
      .filter(Boolean)

    return {
      path: page.fields.path,
      seo: seoEntry
        ? {
            title: seoEntry.fields?.title,
            description: seoEntry.fields?.description,
            keywords: seoEntry.fields?.keywords,
            image: resolveAssetFile(resolveLink(seoEntry.fields?.image, maps))?.file?.url,
            noIndex: seoEntry.fields?.no_index,
            noFollow: seoEntry.fields?.no_follow
          }
        : undefined,
      sections
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
