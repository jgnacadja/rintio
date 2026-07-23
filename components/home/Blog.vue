<template>
  <div class="items-center justify-center w-full py-6 md:py-24">
    <!-- En-tête -->
    <div v-if="title" class="text-center">
      <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
        {{ title }}
      </h3>
    </div>

    <div class="text-center">
      <h2
        v-if="content.title"
        class="my-3 text-xl font-extrabold md:text-5xl text-primary"
        v-html="content.title"
      ></h2>
      <div
        v-if="content.text"
        class="py-4"
        v-html="richtextToHTML(content.text)"
      ></div>
    </div>

    <!-- Grille d'articles -->
    <div class="grid gap-4 px-2 md:grid-cols-6 xl:grid-cols-2 md:grid-flow-row xl:grid-flow-rows xl:px-24">
      <!-- Article à la une (Grand format) -->
      <div
        v-for="edge in featuredPosts"
        :key="edge.node.id"
        class="h-full col-span-3 row-span-2 bg-white shadow-sm xl:col-span-1 xl:row-span-2"
      >
        <NuxtLink :to="edge.node.path">
          <div class="aspect-w-7 aspect-h-8 xs:aspect-w-16 xs:aspect-h-7 sm:aspect-w-16 sm:aspect-h-6 md:aspect-w-16 md:aspect-h-8 xl:aspect-w-16 xl:aspect-h-8">
            <img
              v-if="edge.node.coverImage?.file?.url"
              :src="edge.node.coverImage.file.url"
              alt="Cover Image"
              class="object-cover w-full h-64 mb-0"
              loading="lazy"
            />
          </div>

          <h5 class="mx-4 mt-2 mb-2 text-xl font-bold leading-tight text-gray-800">
            {{ edge.node.title }}
          </h5>

          <p class="mx-4 space-x-8 text-xs text-primary">
            <span>{{ formatDate(edge.node.date) }}</span>
            <span class="flex float-right pt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-4 sm:hidden"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="hidden sm:flex">Publié par :</span>
              {{ edge.node.author }}
            </span>
          </p>

          <div
            class="mx-4 mb-4 font-light text-justify text-gray-600"
            v-html="richtextToHTML(edge.node.metaDescription)"
          ></div>
        </NuxtLink>
      </div>

      <!-- Articles récents (Format horizontal) -->
      <div
        v-for="edge in recentPosts"
        :key="edge.node.id"
        class="col-span-3 row-span-1 bg-white shadow-sm xl:col-span-1 xl:row-span-1"
      >
        <div class="flex flex-row h-full">
          <div class="w-2/5 h-48 md:h-full">
            <NuxtLink :to="edge.node.path">
              <div class="aspect-w-12 aspect-h-16 sm:aspect-w-16 sm:aspect-h-10 md:aspect-w-14 md:aspect-h-16 xl:aspect-w-10 xl:aspect-h-10 2xl:aspect-w-16 2xl:aspect-h-10 3xl:aspect-w-16 3xl:aspect-h-10">
                <img
                  v-if="edge.node.coverImage?.file?.url"
                  :src="edge.node.coverImage.file.url"
                  alt="Cover Image"
                  class="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </NuxtLink>
          </div>

          <div class="w-3/5 px-4 mt-4">
            <NuxtLink :to="edge.node.path">
              <h5 class="mb-2 text-lg font-semibold text-left text-gray-800 md:text-xl">
                {{ edge.node.title }}
              </h5>

              <p class="mt-2 text-xs text-primary md:mt-4">
                <span>{{ formatDate(edge.node.date) }}</span>
                <span class="flex float-right pt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-4 sm:hidden"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="hidden sm:flex">Publié par :</span>
                  {{ edge.node.author }}
                </span>
              </p>

              <div
                class="w-full text-xs font-light text-justify text-gray-600 md:text-sm text-ellipsis--2"
                v-html="richtextToHTML(edge.node.metaDescription)"
              ></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Lien vers le blog -->
    <div class="w-full px-2 py-4 mx-auto md:flex xl:px-24">
      <NuxtLink to="/blog" class="ml-auto">
        <button class="flex ml-auto font-medium md:text-lg hover:text-secondary focus:outline-none items-center">
          Voir plus de publications
          <span class="pl-2">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import type { Document } from '@contentful/rich-text-types'
import dayjs from 'dayjs'

// 1. Interfaces & Types
interface ContentfulMedia {
  file?: {
    url?: string
  }
}

interface PostNode {
  id: string
  title: string
  path: string
  author?: string
  date?: string
  coverImage?: ContentfulMedia
  metaDescription?: Document | string
}

interface PostEdge {
  node: PostNode
}

interface GraphQLCategoryResponse {
  featuredPost?: {
    belongsTo?: {
      edges?: PostEdge[]
    }
  }
  posts?: {
    belongsTo?: {
      edges?: PostEdge[]
    }
  }
}

interface Props {
  title?: string
  content?: {
    title?: string
    text?: Document | string
  }
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  content: () => ({})
})

// 2. Récupération des données avec useAsyncData (remplace <static-query>)
const { data: blogData } = await useAsyncData('home-blog-preview', async () => {
  const query = `
    query {
      featuredPost: contentfulCategory(path: "blog") {
        belongsTo(order: DESC, limit: 1) {
          edges {
            node {
              ... on ContentfulPost {
                id title path author date metaDescription
                coverImage { file { url } }
              }
            }
          }
        }
      }
      posts: contentfulCategory(path: "blog") {
        belongsTo(order: DESC, skip: 1, limit: 2) {
          edges {
            node {
              ... on ContentfulPost {
                id title path author date metaDescription
                coverImage { file { url } }
              }
            }
          }
        }
      }
    }
  `

  // Adaptez l'appel $fetch vers votre client/endpoint GraphQL Contentful
  return await $fetch<GraphQLCategoryResponse>('/api/graphql', {
    method: 'POST',
    body: { query }
  })
})

const featuredPosts = computed(() => blogData.value?.featuredPost?.belongsTo?.edges ?? [])
const recentPosts = computed(() => blogData.value?.posts?.belongsTo?.edges ?? [])

// 3. Utilitaires
const formatDate = (value?: string) => (value ? dayjs(value).format('MM/DD/YYYY') : '')

const richtextToHTML = (content?: Document | string) => {
  if (!content) return ''
  if (typeof content === 'string') return content
  return documentToHtmlString(content)
}
</script>

<style scoped>
.text-ellipsis--2 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>