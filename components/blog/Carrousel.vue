<template>
  <div class="container w-full mx-auto mt-4 md:mt-24 md:px-20 space-x-0 md:flex">
    <div class="w-full">
      <!-- Titre de la section -->
      <div class="w-full my-6">
        <h2
          class="px-3 md:text-md md:mx-auto mt-20 md:-mt-16 lg:-mt-16 xl:-mt-12 2xl:-mt-12 text-primary font-bold font-montserrat"
        >
          <span
            v-if="type === 'post' && postsSectionTitle?.text"
            v-html="richtextToHTML(postsSectionTitle.text)"
          />
          <span
            v-if="type === 'event' && eventsSectionTitle?.text"
            v-html="richtextToHTML(eventsSectionTitle.text)"
          />
        </h2>
      </div>

      <!-- CAROUSEL POSTS -->
      <div v-if="type === 'post'">
        <div
          ref="emblaPostRef"
          class="overflow-hidden w-full"
          role="region"
          aria-label="Carrousel des articles"
        >
          <div class="flex -ml-4">
            <div
              v-for="post in posts"
              :key="post.id"
              class="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
            >
              <div
                class="shadow-md group container max-w-sm bg-center bg-cover bg-no-repeat w-11/12 mx-auto"
              >
                <NuxtLink :to="toPostLink(post.path)">
                  <div class="w-full overflow-hidden">
                    <img
                      :src="post.coverImage?.file?.url"
                      :alt="post.title"
                      class="object-cover w-full h-48 mb-0"
                      width="384"
                      height="192"
                    />
                    <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                      <div
                        class="min-h-[4.5rem] text-primary font-bold tracking-wider leading-relaxed font-roboto"
                      >
                        <span
                          v-if="post.categories?.[0]"
                          class="relative hidden whitespace-nowrap px-2 py-1 font-light text-sm text-center text-white capitalize bg-secondary md:inline-block -mt-7"
                        >
                          {{ post.categories[0] }}
                        </span>
                        {{ post.title }}
                      </div>

                      <div class="tracking-tight leading-relaxed font-roboto text-xs mt-2">
                        <div
                          class="min-h-[3rem] text-gray-600 font-light text-base text-ellipsis--2"
                          v-html="richtextToHTML(post.metaDescription)"
                        />
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Boutons de contrôle -->
        <div class="flex float-right mt-4 mr-8">
          <button
            @click="showPrevPost"
            :disabled="!canScrollPrevPost"
            aria-label="Article précédent"
            class="flex items-center justify-center text-black cursor-pointer z-10 w-8 h-8 mr-2 rounded-md border bg-opacity-10 transition-colors"
            :class="{
              'bg-gray-100 opacity-50 cursor-not-allowed': !canScrollPrevPost,
              'bg-primary border-primary': canScrollPrevPost
            }"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            @click="showNextPost"
            :disabled="!canScrollNextPost"
            aria-label="Article suivant"
            class="flex items-center justify-center text-black cursor-pointer z-10 w-8 h-8 rounded-md border bg-opacity-10 transition-colors"
            :class="{
              'bg-gray-100 opacity-50 cursor-not-allowed': !canScrollNextPost,
              'bg-primary border-primary': canScrollNextPost
            }"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- CAROUSEL ÉVÉNEMENTS -->
      <div v-if="type === 'event'">
        <div
          ref="emblaEventRef"
          class="overflow-hidden w-full"
          role="region"
          aria-label="Carrousel des événements"
        >
          <div class="flex -ml-4">
            <div
              v-for="event in events"
              :key="event.id"
              class="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
            >
              <div
                class="shadow-md group container max-w-sm bg-center bg-cover bg-no-repeat w-11/12 mx-auto relative"
              >
                <NuxtLink :to="toPostLink(event.path)">
                  <div class="w-full overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-black to-black opacity-25" />
                    <div
                      class="border-b-2 py-2 text-center font-semibold opacity-90 bg-cover bg-center"
                      :style="
                        event.type === 'blog' && event.coverImage?.file?.url
                          ? { backgroundImage: `url(${event.coverImage.file.url})` }
                          : {}
                      "
                      :class="{
                        'text-primary': event.type !== 'blog',
                        'text-white': event.type === 'blog'
                      }"
                    >
                      <div class="text-9xl">
                        {{ getDay(event.date) }}
                      </div>
                      <div class="text-xl capitalize">
                        {{ getMonth(event.date) }}
                      </div>
                    </div>
                    <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                      <div
                        class="text-primary font-bold tracking-wider leading-relaxed font-roboto my-2"
                      >
                        {{ event.title }}
                      </div>

                      <div class="tracking-tight leading-relaxed font-roboto text-xs">
                        <div
                          class="text-gray-600 font-light text-base text-ellipsis--2 my-2"
                          v-html="richtextToHTML(event.metaDescription)"
                        />
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Boutons de contrôle -->
        <div class="flex float-right mt-4 mr-8">
          <button
            @click="showPrevEvent"
            :disabled="!canScrollPrevEvent"
            aria-label="Événement précédent"
            class="flex items-center justify-center text-black cursor-pointer z-10 w-8 h-8 mr-2 rounded-md border bg-opacity-10 transition-colors"
            :class="{
              'bg-gray-100 opacity-50 cursor-not-allowed': !canScrollPrevEvent,
              'bg-primary border-primary': canScrollPrevEvent
            }"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            @click="showNextEvent"
            :disabled="!canScrollNextEvent"
            aria-label="Événement suivant"
            class="flex items-center justify-center text-black cursor-pointer z-10 w-8 h-8 rounded-md border bg-opacity-10 transition-colors"
            :class="{
              'bg-gray-100 opacity-50 cursor-not-allowed': !canScrollNextEvent,
              'bg-primary border-primary': canScrollNextEvent
            }"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import { useEventListener } from '@vueuse/core'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import type { Document } from '@contentful/rich-text-types'
import type { ContentfulPost } from '~/types/contentful'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'

dayjs.locale('fr')

// 1. Props
interface Props {
  postsSectionTitle?: { text?: Document | string }
  posts?: ContentfulPost[]
  eventsSectionTitle?: { text?: Document | string }
  events?: ContentfulPost[]
  type?: 'post' | 'event' | string
}

withDefaults(defineProps<Props>(), {
  postsSectionTitle: () => ({}),
  posts: () => [],
  eventsSectionTitle: () => ({}),
  events: () => [],
  type: ''
})

// 2. Configuration d'Embla Carousel
const emblaOptions = { loop: false, align: 'start' as const }
const [emblaPostRef, emblaPostApi] = emblaCarouselVue(emblaOptions)
const [emblaEventRef, emblaEventApi] = emblaCarouselVue(emblaOptions)

// État de navigation (Prev / Next)
const canScrollPrevPost = ref(false)
const canScrollNextPost = ref(false)
const canScrollPrevEvent = ref(false)
const canScrollNextEvent = ref(false)

const updatePostScrollState = () => {
  if (!emblaPostApi.value) return
  canScrollPrevPost.value = emblaPostApi.value.canScrollPrev()
  canScrollNextPost.value = emblaPostApi.value.canScrollNext()
}

const updateEventScrollState = () => {
  if (!emblaEventApi.value) return
  canScrollPrevEvent.value = emblaEventApi.value.canScrollPrev()
  canScrollNextEvent.value = emblaEventApi.value.canScrollNext()
}

watch(emblaPostApi, (api) => {
  if (!api) return
  api.on('select', updatePostScrollState)
  api.on('reInit', updatePostScrollState)
  updatePostScrollState()
})

watch(emblaEventApi, (api) => {
  if (!api) return
  api.on('select', updateEventScrollState)
  api.on('reInit', updateEventScrollState)
  updateEventScrollState()
})

// Actions de navigation
const showPrevPost = () => emblaPostApi.value?.scrollPrev()
const showNextPost = () => emblaPostApi.value?.scrollNext()
const showPrevEvent = () => emblaEventApi.value?.scrollPrev()
const showNextEvent = () => emblaEventApi.value?.scrollNext()

// 3. Adaptabilité des points de rupture via VueUse
const slidesPerBreakpoint = ref(4)

const updateSlidesPerBreakpoint = () => {
  if (import.meta.client) {
    const width = window.innerWidth
    if (width > 1024) slidesPerBreakpoint.value = 4
    else if (width > 700) slidesPerBreakpoint.value = 3
    else if (width > 480) slidesPerBreakpoint.value = 2
    else slidesPerBreakpoint.value = 1
  }
}

useEventListener('resize', updateSlidesPerBreakpoint)

onMounted(() => {
  updateSlidesPerBreakpoint()
})

// 4. Utilitaires d'affichage & dates (remplace les filtres Vue 2)
const getDay = (value?: string) => (value ? dayjs(value).format('DD') : '')
const getMonth = (value?: string) => (value ? dayjs(value).format('MMMM') : '')

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
