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

    <!-- Start project CTA -->
    <section
      v-if="page.sections[1]"
      class="bg-gray-100 h-full bg-center bg-no-repeat bg-cover mt-24 3xl:px-64 py-12"
    >
      <div
        class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:grid-flow-row xl:grid-flow-rows"
      >
        <div
          class="col-span-3 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1 items-center justify-center mx-auto my-auto"
        >
          <img
            v-if="page.sections[1].columns?.[1]?.image?.file?.url"
            :src="page.sections[1].columns[1].image.file.url"
            alt="Start project"
            class="mx-auto"
          />
        </div>
        <div class="col-span-3 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1">
          <h2
            v-if="page.sections[1].columns?.[1]?.title"
            class="my-3 text-2xl md:text-5xl font-extrabold text-primary mx-auto pr-6 mb-4"
            v-html="page.sections[1].columns[1].title"
          />
          <div
            v-if="page.sections[1].columns?.[1]?.text"
            class="text-gray-700 pr-6"
            v-html="richtextToHTML(page.sections[1].columns[1].text)"
          />
          <NuxtLink
            v-if="page.sections[1].columns?.[1]?.ctaLink"
            :to="page.sections[1].columns[1].ctaLink"
            class="inline-block mt-6 bg-primary text-white font-bold px-6 py-3 rounded hover:bg-secondary transition duration-300"
          >
            {{ page.sections[1].columns[1].ctaText }}
          </NuxtLink>
        </div>
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
