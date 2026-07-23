<template>
  <main v-if="page && page.sections">
    <!-- Fil d'Ariane -->
    <Breadcrumb :path="breadcrumbPath" />

    <!-- Section 0 : About (HomeAbout) -->
    <LazyHomeAbout
      v-if="page.sections[0]"
      :title="page.sections[0].name"
      :swipper="page.sections[0].columns?.[0]"
      :content="page.sections[0].columns?.[1]"
      :button="page.sections[0].columns?.[2]"
    />

    <!-- Section 1 : Services -->
    <LazyAboutServices
      v-if="page.sections[1]"
      :title="page.sections[1].name"
      :cover="page.sections[1].columns?.[0]"
      :content="page.sections[1].columns?.slice(1)"
    />

    <!-- Section 2 : Team (Commentée) -->
    <!--
    <LazyAboutTeam
      v-if="page.sections[2]"
      :content="page.sections[2].columns?.[0]"
      :team="page.sections[2].columns?.slice(1)"
    />
    -->

    <!-- Section 3 : Stats -->
    <ClientOnly v-if="page.sections[3]">
      <LazyAboutStats :content="page.sections[3].columns" />
    </ClientOnly>

    <!-- Section 4 : Experts (Commentée) -->
    <!--
    <LazyAboutExperts
      v-if="page.sections[4]"
      :content="page.sections[4].columns?.[0]"
      :experts="page.sections[4].columns?.slice(1)"
    />
    -->
  </main>
</template>

<script setup lang="ts">
import type { ContentfulPage } from '~/types/contentful'

// 1. Calcul réactif du chemin pour le Fil d'Ariane (remplace mounted + $router)
const route = useRoute()
const breadcrumbPath = computed(() => route.path.slice(1).replace('-', ' '))

// 2. Data Fetching via l'API Contentful Nuxt 3
const { data: page, error } = await useAsyncData<ContentfulPage>('about', () =>
  $fetch('/api/contentful/page', {
    query: { path: 'A propos' }
  })
)

if (error.value || !page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page À propos introuvable',
    fatal: true
  })
}

// 3. SEO & Méta-données
useSeoMeta({
  title: () => page.value?.seo?.title || page.value?.seo?.name || 'À propos',
  description: () => page.value?.seo?.description || '',
  keywords: () =>
    Array.isArray(page.value?.seo?.keywords)
      ? page.value?.seo?.keywords.join(', ')
      : page.value?.seo?.keywords || '',
  ogTitle: () => page.value?.seo?.title || page.value?.seo?.name,
  ogDescription: () => page.value?.seo?.description
})
</script>
