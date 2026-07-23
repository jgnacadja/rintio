<template>
  <main v-if="page && page.sections">
    <Breadcrumb :path="breadcrumbPath" />

    <!-- Section titre + description -->
    <section v-if="page.sections[0]" class="container mx-auto px-4 py-12">
      <h1
        v-if="page.sections[0].columns?.[0]?.title"
        class="text-4xl font-bold text-primary mb-6"
      >
        {{ page.sections[0].columns[0].title }}
      </h1>
      <div
        v-if="page.sections[0].columns?.[0]?.text"
        class="text-lg text-gray-700"
        v-html="richtextToHTML(page.sections[0].columns[0].text)"
      />
    </section>

    <!-- Liste des offres -->
    <section class="container mx-auto px-4 pb-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="offer in offers"
          :key="offer.id"
          :to="offer.path"
          class="block bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <NuxtImg
            v-if="offer.coverImage?.file?.url"
            :src="offer.coverImage.file.url"
            :alt="offer.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2">{{ offer.title }}</h3>
            <div
              class="text-gray-600 text-sm line-clamp-3"
              v-html="richtextToHTML(offer.metaDescription)"
            />
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { ContentfulPage, ContentfulPost } from '~/types/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const route = useRoute()
const breadcrumbPath = computed(() => route.path.slice(1).replace('-', ' '))

const richtextToHTML = (content: any) => {
  if (!content) return ''
  return documentToHtmlString(content)
}

const { data: page } = await useAsyncData<ContentfulPage>('offres-page', () =>
  $fetch('/api/contentful/page', { query: { path: 'Offres' } })
)

const { data: offers } = await useAsyncData<ContentfulPost[]>('offres-list', () =>
  $fetch('/api/contentful/posts', { query: { category: 'offres', limit: '100' } }).then(
    (res: any) => res.items
  )
)

useSeoMeta({
  title: () => page.value?.seo?.title || 'Nos offres',
  description: () => page.value?.seo?.description || '',
  keywords: () =>
    Array.isArray(page.value?.seo?.keywords)
      ? page.value?.seo?.keywords.join(', ')
      : page.value?.seo?.keywords || ''
})
</script>
