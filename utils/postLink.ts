export const toPostLink = (path?: string): string => {
  if (!path) return '/'
  const trimmed = path.trim().replace(/\/+$/, '')
  if (trimmed.startsWith('/blog/article/')) return trimmed
  if (trimmed.startsWith('blog/article/')) return '/' + trimmed
  return `/blog/article/${trimmed.replace(/^\/+/, '')}`
}
