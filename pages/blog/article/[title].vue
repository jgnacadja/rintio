<template>
  <article v-if="post">
    <Breadcrumb :path="breadcrumbPath" :article="post.title" />

    <!-- Hero -->
    <section
      v-if="post.coverImage?.file?.url"
      class="relative w-full h-96 bg-cover bg-center"
      :style="{ backgroundImage: `url(${post.coverImage.file.url})` }"
    >
      <div class="absolute inset-0 bg-primary/60" />
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="text-white max-w-3xl">
          <p v-if="post.categories?.[0]" class="text-secondary font-bold uppercase mb-2">
            {{ post.categories[0] }}
          </p>
          <h1 class="text-4xl md:text-5xl font-bold">{{ post.title }}</h1>
        </div>
      </div>
    </section>

    <!-- Métadonnées -->
    <section class="container mx-auto px-4 py-6 text-gray-600 border-b">
      <div class="flex items-center gap-4 text-sm">
        <span v-if="post.author">{{ post.author }}</span>
        <span v-if="post.date">{{ formatDate(post.date) }}</span>
        <span v-if="post.views !== undefined">{{ post.views }} vues</span>
      </div>
    </section>

    <!-- Contenu -->
    <section class="container mx-auto px-4 py-12 max-w-4xl">
      <div class="prose prose-lg max-w-none" v-html="renderContent(post.content)" />
    </section>

    <!-- Tags -->
    <section v-if="post.seo?.tags?.length" class="container mx-auto px-4 pb-8 max-w-4xl">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.seo.tags"
          :key="tag"
          class="px-3 py-1 bg-gray-100 text-primary text-sm rounded"
        >
          {{ tag }}
        </span>
      </div>
    </section>

    <!-- Partage social -->
    <section class="container mx-auto px-4 pb-8 max-w-4xl">
      <p class="text-gray-600 mb-2">Partager :</p>
      <div class="flex gap-3">
        <a
          :href="linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Partager sur LinkedIn"
          class="px-4 py-2 bg-primary text-white text-sm hover:bg-secondary transition"
        >
          LinkedIn
        </a>
        <a
          :href="twitterUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Partager sur Twitter"
          class="px-4 py-2 bg-primary text-white text-sm hover:bg-secondary transition"
        >
          Twitter
        </a>
        <a
          :href="facebookUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Partager sur Facebook"
          class="px-4 py-2 bg-primary text-white text-sm hover:bg-secondary transition"
        >
          Facebook
        </a>
      </div>
    </section>

    <!-- Posts liés -->
    <section v-if="related?.length" class="container mx-auto px-4 py-12 max-w-4xl">
      <h2 class="text-2xl font-bold text-primary mb-6">{{ $t('blog.related') }}</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="item in related"
          :key="item.id"
          :to="toPostLink(item.path)"
          class="block bg-white shadow hover:shadow-lg transition"
        >
          <img
            v-if="item.coverImage?.file?.url"
            :src="item.coverImage.file.url"
            :alt="item.title"
            class="w-full h-40 object-cover"
            width="320"
            height="160"
          />
          <div class="p-4">
            <h3 class="font-bold text-primary">{{ item.title }}</h3>
          </div>
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import type { ContentfulPost } from '~/types/contentful'
import { marked } from 'marked'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import dayjs from 'dayjs'

const route = useRoute()
const siteUrl = 'https://rintio.com'

const postPath = computed(() => String(route.params.title))
const fullPath = computed(() => `${siteUrl}${toPostLink(postPath.value)}`)
const breadcrumbPath = computed(() => 'blog')

const formatDate = (date: string) => dayjs(date).format('DD/MM/YYYY')

const renderContent = (content: any) => {
  if (!content) return ''
  if (typeof content === 'string') return marked(content)
  return documentToHtmlString(content)
}

const { data: post } = await useAsyncData<ContentfulPost>('blog-post', () =>
  $fetch('/api/contentful/post', { query: { path: postPath.value } })
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article introuvable' })
}

useSeo(post.value, siteUrl)

const { data: related } = await useAsyncData<ContentfulPost[]>('blog-related', () =>
  $fetch('/api/contentful/related', {
    query: { category: 'blog', excludePath: postPath.value }
  }).then((res: any) => res.items)
)

const linkedinUrl = computed(
  () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullPath.value)}`
)

const twitterUrl = computed(() => {
  const tags = post.value?.seo?.tags?.join(',') || 'rintio'
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullPath.value)}&text=${encodeURIComponent(
    post.value?.title || ''
  )}&via=rintioGroup&hashtags=${tags}`
})

const facebookUrl = computed(
  () =>
    `https://www.facebook.com/sharer.php?u=${encodeURIComponent(fullPath.value)}&href=${encodeURIComponent(
      fullPath.value
    )}&quote=${encodeURIComponent(post.value?.metaDescription || '')}`
)
</script>
