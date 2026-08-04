<template>
  <div
    class="grid grid-cols-6 gap-4 px-4 py-8 md:grid-cols-4 lg:grid-cols-3 md:grid-flow-row lg:grid-flow-rows xl:px-12 xl:py-16 2xl:px-32 2xl:py-24"
    :style="{ backgroundImage: `url(${cover?.image?.file?.url})` }"
  >
    <div
      class="w-full h-full col-span-6 row-span-4 md:row-span-6 md:col-span-4 lg:col-span-1 lg:row-span-2"
    >
      <div>
        <div>
          <p class="mb-3 text-sm font-semibold uppercase text-primary">
            {{ title }}
          </p>
          <div class="-mt-3">
            <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
            <span class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"></span>
            <span class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"></span>
          </div>
        </div>
        <div class="pt-6">
          <h2
            class="my-3 text-2xl font-extrabold md:text-5xl text-primary"
            v-html="content?.title"
          />

          <div class="my-3 font-light" v-html="richtextToHTML(content?.text)" />
          <div v-if="button?.ctaLink" class="mt-4 text-center">
            <NuxtLink :to="button.ctaLink">
              <button
                type="button"
                class="flex px-6 py-2 text-sm text-white uppercase rounded-sm md:py-4 bg-secondary hover:bg-primary"
              >
                {{ button.ctaText }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Offre mise en avant -->
    <div
      v-if="featuredOffer"
      class="w-full h-full col-span-6 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-2"
    >
      <NuxtLink
        :to="toPostLink(featuredOffer.path)"
        class="block relative bg-center bg-no-repeat bg-cover shadow-lg group h-80 md:h-full"
        :style="{ backgroundImage: `url(${featuredOffer.coverImage?.file?.url})` }"
      >
        <div class="absolute px-4 bottom-4">
          <div class="font-extrabold leading-relaxed tracking-wider text-white font-roboto">
            {{ featuredOffer.title }}
          </div>

          <div
            class="text-xs font-bold leading-relaxed text-white font-roboto"
            v-html="richtextToHTML(featuredOffer.metaDescription)"
          />

          <div
            v-if="featuredOffer.excerpt"
            class="text-white tracking-wider leading-relaxed font-roboto text-xs flex flex-row justify-between space-x-4"
            v-html="featuredOffer.excerpt"
          />
        </div>
      </NuxtLink>
    </div>

    <!-- Liste des offres -->
    <div
      v-for="offer in offers"
      :key="offer.id"
      class="w-full h-full col-span-6 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1"
    >
      <NuxtLink
        :to="toPostLink(offer.path)"
        class="block bg-white bg-center bg-no-repeat bg-cover shadow-lg group"
        :style="{ backgroundImage: `url(${offer.coverImage?.file?.url})` }"
      >
        <div class="w-full">
          <div class="w-full h-40"></div>
          <div class="relative w-full px-4 pb-4">
            <div class="font-extrabold leading-relaxed tracking-wider text-white font-roboto">
              {{ offer.title }}
            </div>

            <div
              class="text-xs font-bold leading-relaxed tracking-wider text-white font-roboto"
              v-html="richtextToHTML(offer.metaDescription)"
            />

            <div
              v-if="offer.excerpt"
              class="text-xs leading-relaxed tracking-wider text-white flex flex-row justify-between"
              v-html="offer.excerpt"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import type { ContentfulPost } from '~/types/contentful'

interface Props {
  cover?: { image?: { file?: { url?: string } } }
  title?: string
  content?: any
  button?: { ctaLink?: string; ctaText?: string }
  featuredOffer?: ContentfulPost
  offers?: ContentfulPost[]
}

withDefaults(defineProps<Props>(), {
  title: '',
  offers: () => []
})

const richtextToHTML = (content?: any) => {
  if (!content) return ''
  if (typeof content === 'string') return content
  return documentToHtmlString(content)
}
</script>

<style scoped>
/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
