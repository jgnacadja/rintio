import type { Document } from '@contentful/rich-text-types'

export interface ContentfulSeo {
  id: string
  title: string
  date?: string
  name?: string
  description?: string
  keywords?: string[] | string
  no_index?: boolean
  no_follow?: boolean
}

export interface ContentfulImage {
  file: {
    url: string
    details?: {
      size?: number
      image?: {
        width: number
        height: number
      }
    }
    fileName?: string
    contentType?: string
  }
  title?: string
  name?: string
}

export interface ContentfulComponentImage {
  id: string
  title?: string
  name?: string
  image: ContentfulImage
}

export interface ContentfulComponentHero {
  id: string
  title: string
  name?: string
  image?: ContentfulImage
  text?: string
  ctaText?: string
  ctaLink?: string
}

export interface ContentfulComponentText {
  id: string
  title?: string
  text: Document
}

export interface ContentfulComponentButton {
  id: string
  title?: string
  ctaText: string
  ctaLink: string
}

export type ContentfulComponent =
  | ContentfulComponentImage
  | ContentfulComponentHero
  | ContentfulComponentText
  | ContentfulComponentButton

export interface ContentfulComponentSection {
  id: string
  title?: string
  name?: string
  columns: ContentfulComponent[]
}

export interface ContentfulSection {
  id: string
  title: string
  date?: string
  name?: string
  columns: (ContentfulComponent | ContentfulComponentSection)[]
}

export interface ContentfulPage {
  path: string
  seo?: ContentfulSeo
  sections: ContentfulSection[]
}

export interface ContentfulCategory {
  id: string
  title: string
  path: string
}

export interface ContentfulPost {
  id: string
  title: string
  path: string
  author?: string
  categories?: ContentfulCategory[]
  date: string
  coverImage?: ContentfulImage
  seoTitle?: string
  seoTags?: string[]
  metaDescription?: string
  content: Document | string
  excerpt?: string
  type?: string
  views?: number
}
