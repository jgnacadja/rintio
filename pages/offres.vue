<template>
  <main v-if="page && page.sections">
    <Breadcrumb :path="breadcrumbPath" />

    <!-- Section titre + description -->
    <section v-if="page.sections[0]" class="container mx-auto px-4 py-12">
      <h1 v-if="page.sections[0].columns?.[0]?.title" class="text-4xl font-bold text-primary mb-6">
        {{ page.sections[0].columns[0].title }}
      </h1>
      <div
        v-if="page.sections[0].columns?.[0]?.text"
        class="text-lg text-gray-700"
        v-html="richtextToHTML(page.sections[0].columns[0].text)"
      />
    </section>

    <!-- Liste des offres -->
    <LazyOfferOffers v-if="offers?.length" :featured-offer="featuredOffer" :offers="offersList" />
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

const featuredOffer = computed(() => offers.value?.[0])
const offersList = computed(() => (offers.value ? offers.value.slice(1) : []))

useSeoMeta({
  title: () => page.value?.seo?.title || 'Nos offres',
  description: () => page.value?.seo?.description || '',
  keywords: () =>
    Array.isArray(page.value?.seo?.keywords)
      ? page.value?.seo?.keywords.join(', ')
      : page.value?.seo?.keywords || ''
})
</script>
