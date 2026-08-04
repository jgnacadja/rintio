export interface LinkMaps {
  entryMap: Map<string, any>
  assetMap: Map<string, any>
}

export function buildLookupMaps(includes: any): LinkMaps {
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

export function resolveLink(link: any, maps: LinkMaps): any {
  if (!link?.sys) return null
  const { linkType, id } = link.sys
  if (linkType === 'Entry') return maps.entryMap.get(id) || null
  if (linkType === 'Asset') return maps.assetMap.get(id) || null
  return null
}

export function richTextToPlainText(document: any): string {
  if (!document) return ''
  if (typeof document === 'string') return document

  const walk = (node: any): string => {
    if (!node) return ''
    if (node.nodeType === 'text') return node.value || ''
    if (Array.isArray(node.content)) return node.content.map(walk).join('')
    return ''
  }

  return walk(document).trim()
}

export function resolveAssetFile(asset: any):
  | {
      file: { url: string; fileName?: string; contentType?: string }
      title?: any
      description?: any
    }
  | undefined {
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
