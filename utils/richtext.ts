import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
export function richtextToHTML(content: any): string {
  return documentToHtmlString(content)
}
