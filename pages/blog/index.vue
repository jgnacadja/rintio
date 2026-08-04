<template>
  <main v-if="page && page.sections">
    <Breadcrumb :path="breadcrumbPath" />

    <!-- Section titre / description (section 0) -->
    <section v-if="page.sections[0]" class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-primary mb-6">
        {{ page.sections[0].columns?.[0]?.title || 'Blog' }}
      </h1>
      <div
        v-if="page.sections[0].columns?.[0]?.text?.content?.length"
        class="text-lg text-gray-700"
        v-html="richtextToHTML(page.sections[0].columns[0].text)"
      />
    </section>

    <!-- À la une (3 premiers articles) -->
    <LazyBlogALaUne
      v-if="featuredPosts?.length"
      :title="featuredSectionTitle"
      :featured-posts="featuredPosts"
    />

    <!-- Carrousel événements -->
    <LazyBlogCarrousel
      v-if="events?.length"
      type="event"
      :events-section-title="eventsSectionTitle"
      :events="events"
    />

    <!-- Carrousel articles -->
    <LazyBlogCarrousel
      v-if="posts?.length"
      type="post"
      :posts-section-title="postsSectionTitle"
      :posts="posts"
    />
  </main>
</template>

<script setup lang="ts">
import type { ContentfulPage, ContentfulPost } from '~/types/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const route = useRoute()
const breadcrumbPath = computed(() => route.path.slice(1))

const richtextToHTML = (content: any) => {
  if (!content) return ''
  return documentToHtmlString(content)
}

const { data: page } = await useAsyncData<ContentfulPage>('blog-page', () =>
  $fetch('/api/contentful/page', { query: { path: 'Blog' } })
)

const { data: allBlogPosts } = await useAsyncData<ContentfulPost[]>('blog-all', () =>
  $fetch('/api/contentful/posts', { query: { category: 'blog', limit: '100' } }).then(
    (res: any) => res.items
  )
)

const { data: events } = await useAsyncData<ContentfulPost[]>('blog-events', () =>
  $fetch('/api/contentful/posts', { query: { category: 'evenements', limit: '100' } }).then(
    (res: any) => res.items
  )
)

const featuredPosts = computed(() => allBlogPosts.value?.slice(0, 3) || [])
const posts = computed(() => allBlogPosts.value?.slice(3) || [])

const featuredSectionTitle = computed(() =>
  page.value?.sections?.[2]?.columns?.[1]?.text
    ? { text: page.value.sections[2].columns[1].text }
    : undefined
)

const eventsSectionTitle = computed(() =>
  page.value?.sections?.[3]?.columns?.[0]?.text
    ? { text: page.value.sections[3].columns[0].text }
    : undefined
)

const postsSectionTitle = computed(() =>
  page.value?.sections?.[4]?.columns?.[0]?.text
    ? { text: page.value.sections[4].columns[0].text }
    : undefined
)

useSeoMeta({
  title: () => page.value?.seo?.title || 'Blog',
  description: () => page.value?.seo?.description || '',
  keywords: () =>
    Array.isArray(page.value?.seo?.keywords)
      ? page.value?.seo?.keywords.join(', ')
      : page.value?.seo?.keywords || ''
})
</script>
