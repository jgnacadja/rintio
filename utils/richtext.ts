import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
export function richtextToHTML(content: any): string {
  if (!content) return ''
  if (typeof content === 'string') return content
  if (typeof content === 'object' && content.nodeType) {
    return documentToHtmlString(content)
  }
  return ''
}
