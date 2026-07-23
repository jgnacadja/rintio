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

    <!-- Articles à la une (3 derniers) -->
    <section v-if="featuredPosts?.length" class="container mx-auto px-4 pb-16">
      <h2 class="text-2xl font-bold text-primary mb-6">{{ $t('blog.featured') }}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in featuredPosts"
          :key="post.id"
          :to="post.path"
          class="block bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <NuxtImg
            v-if="post.coverImage?.file?.url"
            :src="post.coverImage.file.url"
            :alt="post.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2">{{ post.title }}</h3>
            <p class="text-sm text-gray-500 mb-2">{{ post.author }} — {{ formatDate(post.date) }}</p>
            <div
              class="text-gray-600 text-sm line-clamp-3"
              v-html="richtextToHTML(post.metaDescription)"
            />
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Événements -->
    <section v-if="events?.length" class="container mx-auto px-4 pb-16">
      <h2 class="text-2xl font-bold text-primary mb-6">{{ $t('blog.events') }}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="event in events"
          :key="event.id"
          :to="event.path"
          class="block bg-white shadow overflow-hidden hover:shadow-lg transition-shadow"
        >
          <NuxtImg
            v-if="event.coverImage?.file?.url"
            :src="event.coverImage.file.url"
            :alt="event.title"
            class="w-full h-40 object-cover"
          />
          <div class="p-4">
            <p class="text-xs text-secondary font-bold uppercase">{{ formatDate(event.date) }}</p>
            <h3 class="text-lg font-bold text-primary">{{ event.title }}</h3>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Tous les articles -->
    <section v-if="posts?.length" class="container mx-auto px-4 pb-16">
      <h2 class="text-2xl font-bold text-primary mb-6">{{ $t('blog.posts') }}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="post.path"
          class="block bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <NuxtImg
            v-if="post.coverImage?.file?.url"
            :src="post.coverImage.file.url"
            :alt="post.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2">{{ post.title }}</h3>
            <p class="text-sm text-gray-500 mb-2">{{ post.author }} — {{ formatDate(post.date) }}</p>
            <div
              class="text-gray-600 text-sm line-clamp-3"
              v-html="richtextToHTML(post.metaDescription)"
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
import dayjs from 'dayjs'

const route = useRoute()
const breadcrumbPath = computed(() => route.path.slice(1))

const richtextToHTML = (content: any) => {
  if (!content) return ''
  return documentToHtmlString(content)
}

const formatDate = (date: string) => {
  return dayjs(date).format('DD/MM/YYYY')
}

const { data: page } = await useAsyncData<ContentfulPage>('blog-page', () =>
  $fetch('/api/contentful/page', { query: { path: 'Blog' } })
)

const { data: featuredPosts } = await useAsyncData<ContentfulPost[]>('blog-featured', () =>
  $fetch('/api/contentful/posts', { query: { category: 'blog', limit: '3' } }).then(
    (res: any) => res.items
  )
)

const { data: posts } = await useAsyncData<ContentfulPost[]>('blog-posts', () =>
  $fetch('/api/contentful/posts', { query: { category: 'blog', limit: '100', skip: '3' } }).then(
    (res: any) => res.items
  )
)

const { data: events } = await useAsyncData<ContentfulPost[]>('blog-events', () =>
  $fetch('/api/contentful/posts', { query: { category: 'evenements', limit: '100' } }).then(
    (res: any) => res.items
  )
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
