<template>
  <main v-if="page && page.sections">
    <HomeHomeslider v-if="page.sections[0]" :slides="page.sections[0].columns" />

    <LazyHomeAbout
      v-if="page.sections[1]"
      :title="page.sections[1].name"
      :swipper="page.sections[1].columns?.[0]"
      :content="page.sections[1].columns?.[1]"
      :button="page.sections[1].columns?.[2]"
    />

    <LazyHomeOffer
      v-if="page.sections[2]"
      :title="page.sections[2].name"
      :cover="page.sections[2].columns?.[0]"
      :content="page.sections[2].columns?.[1]"
      :button="page.sections[2].columns?.[2]"
      :featured-offer="featuredOffer"
      :offers="offersList"
    />

    <LazyHomeStory
      v-if="page.sections[3]"
      :content="page.sections[3].columns?.[0]"
      :stories="(page.sections[3].columns?.[1] as ContentfulComponentSection)?.columns"
    />

    <LazyHomeBlog
      v-if="page.sections[5]"
      :title="page.sections[5].name"
      :content="page.sections[5].columns?.[0]"
    />

    <LazyHomeMap
      v-if="page.sections[6]"
      :cover="page.sections[6].columns?.[0]"
      :content="page.sections[6].columns?.[1]"
    />
  </main>
</template>

<script setup lang="ts">
import type { ContentfulPage, ContentfulComponentSection, ContentfulPost } from '~/types/contentful'

const { data: page } = await useFetch<ContentfulPage>('/api/contentful/page', {
  key: 'page-accueil',
  query: { path: 'Acceuil' }
})

const { data: offersResponse } = await useFetch<{ items: ContentfulPost[] }>(
  '/api/contentful/posts',
  {
    key: 'home-offers',
    query: { category: 'offres', limit: '3' }
  }
)

const featuredOffer = computed(() => offersResponse.value?.items?.[0])
const offersList = computed(() => offersResponse.value?.items?.slice(1) || [])

// 2. SEO & Méta-données
useSeoMeta({
  title: () => page.value?.seo?.title || 'Acceuil',
  description: () => page.value?.seo?.description || '',
  keywords: () =>
    Array.isArray(page.value?.seo?.keywords)
      ? page.value?.seo?.keywords.join(', ')
      : page.value?.seo?.keywords || '',
  ogTitle: () => page.value?.seo?.title,
  ogDescription: () => page.value?.seo?.description
})
</script>
