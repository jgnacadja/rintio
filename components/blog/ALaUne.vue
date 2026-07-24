<template>
  <div class="container w-full mx-auto mt-4 md:mt-24 md:px-20 space-x-0 md:flex">
    <div class="w-full">
      <!-- Titre de la section -->
      <div class="w-full my-6 mx-24 3xl:mx-52 4xl:mx-96">
        <h2
          v-if="title?.text"
          class="px-1 md:text-md md:mx-auto mt-20 md:-mt-16 lg:-mt-16 xl:-mt-12 2xl:-mt-12 text-primary font-bold"
          v-html="richtextToHTML(title.text)"
        />
      </div>

      <div v-if="featuredPosts?.length" class="3xl:mx-52 4xl:mx-96">
        <!-- Carrousel Embla -->
        <div ref="emblaRef" class="overflow-hidden border rounded shadow-sm bg-white w-full">
          <div class="flex">
            <div v-for="post in featuredPosts" :key="post.id" class="flex-[0_0_100%] min-w-0">
              <NuxtLink :to="`/blog/article/${post.path}`" class="block">
                <div class="grid grid-cols-1 md:grid-cols-2 md:px-8 md:gap-x-8 md:py-4">
                  <!-- Colonne gauche : Contenu texte & Auteur -->
                  <div class="col-start-1 row-start-2 mt-72 md:mt-0 md:row-start-1 px-4">
                    <h2
                      class="text-lg md:text-2xl text-left font-bold text-secondary text-opacity-70 py-3 mt-24 md:mt-0"
                    >
                      {{ post.title }}
                    </h2>

                    <div
                      class="py-3 text-justify text-gray-700"
                      v-html="richtextToHTML(post.metaDescription)"
                    />

                    <!-- Bloc Auteur & Date -->
                    <div class="flex items-center text-sm font-medium my-5 md:mt-2 md:mb-4">
                      <div v-if="post.coverImage?.file?.url" class="ml-1">
                        <img
                          :src="post.coverImage.file.url"
                          :alt="post.title"
                          class="rounded-full w-12 h-12 object-cover bg-gray-100"
                          width="48"
                          height="48"
                        />
                      </div>

                      <div class="flex flex-col px-4">
                        <p class="text-primary text-base font-medium">
                          {{ post.author }}
                        </p>
                        <p class="text-gray-400 text-xs">
                          {{ formatDate(post.date) }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Colonne droite : Image principale -->
                  <div class="col-start-1 row-start-1 flex md:col-start-2 md:row-span-3">
                    <div class="w-full grid grid-cols-1 grid-rows-2 gap-2">
                      <div class="relative col-span-3 row-span-2 md:col-span-2">
                        <img
                          v-if="post.coverImage?.file?.url"
                          :src="post.coverImage.file.url"
                          :alt="post.title"
                          class="absolute inset-0 w-full md:h-full h-96 object-cover bg-gray-100 md:rounded-lg"
                          width="640"
                          height="384"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Boutons de contrôle -->
        <div class="flex float-right mt-4 mr-8">
          <button @click="showPrev" :disabled="!canScrollPrev" aria-label="Article précédent">
            <div
              class="z-10 bg-opacity-10 w-8 h-8 mr-2 rounded-md border flex items-center justify-center text-black transition-colors"
              :class="{
                'bg-gray-100 opacity-50 cursor-not-allowed': !canScrollPrev,
                'bg-primary border-primary cursor-pointer': canScrollPrev
              }"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </div>
          </button>

          <button @click="showNext" :disabled="!canScrollNext" aria-label="Article suivant">
            <div
              class="z-10 bg-opacity-10 w-8 h-8 rounded-md border flex items-center justify-center text-black transition-colors"
              :class="{
                'bg-gray-100 opacity-50 cursor-not-allowed': !canScrollNext,
                'bg-primary border-primary cursor-pointer': canScrollNext
              }"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import type { Document } from '@contentful/rich-text-types'
import type { ContentfulPost } from '~/types/contentful'
import dayjs from 'dayjs'

// 1. Props
interface Props {
  title?: { text?: Document | string }
  featuredPosts?: ContentfulPost[]
}

withDefaults(defineProps<Props>(), {
  title: () => ({}),
  featuredPosts: () => []
})

// 2. Configuration Embla Carousel (1 slide à la fois)
const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: false,
  align: 'start'
})

// Navigation & États des boutons
const canScrollPrev = ref(false)
const canScrollNext = ref(false)

const updateScrollState = () => {
  if (!emblaApi.value) return
  canScrollPrev.value = emblaApi.value.canScrollPrev()
  canScrollNext.value = emblaApi.value.canScrollNext()
}

watch(emblaApi, (api) => {
  if (!api) return
  api.on('select', updateScrollState)
  api.on('reInit', updateScrollState)
  updateScrollState()
})

const showPrev = () => emblaApi.value?.scrollPrev()
const showNext = () => emblaApi.value?.scrollNext()

// 3. Utilitaires (Date & Richtext)
const formatDate = (value?: string) => (value ? dayjs(value).format('DD/MM/YYYY') : '')

const richtextToHTML = (content?: Document | string) => {
  if (!content) return ''
  if (typeof content === 'string') return content
  return documentToHtmlString(content)
}
</script>
