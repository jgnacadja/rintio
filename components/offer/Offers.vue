<template>
  <div class="container mx-auto px-6 lg:px-8 xl:px-18 2xl:px-16">
    <div class="grid md:grid-cols-9 lg:grid-cols-4 gap-4 md:grid-flow-row lg:grid-flow-rows">
      <!-- Offre mise en avant -->
      <div
        v-if="featuredOffer"
        class="row-span-6 col-span-3 md:col-span-6 lg:col-span-2 lg:row-span-2"
      >
        <NuxtLink
          :to="featuredOffer.path"
          class="block w-full relative px-4 bg-center bg-cover bg-no-repeat h-80 md:h-full"
          :style="{ backgroundImage: `url(${featuredOffer.coverImage?.file?.url})` }"
        >
          <div class="absolute bottom-6">
            <div class="text-white font-extrabold tracking-wider leading-relaxed font-roboto">
              {{ featuredOffer.title }}
            </div>

            <div
              class="text-white font-bold tracking-wider leading-relaxed font-roboto text-xs"
              v-html="richtextToHTML(featuredOffer.metaDescription)"
            />

            <div
              v-if="featuredOffer.excerpt"
              class="text-white tracking-wider leading-relaxed font-roboto text-xs flex flex-row justify-between -mt-5"
              v-html="featuredOffer.excerpt"
            />
          </div>
          <div class="flex float-right">
            <div class="absolute bottom-6">
              <span
                class="rounded-full flex justify-center items-center bg-primary p-2 font-medium md:text-lg text-white -mx-8"
                aria-label="Voir l'offre"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Liste des offres -->
      <div
        v-for="offer in offers"
        :key="offer.id"
        class="col-span-3 md:row-span-3 lg:col-span-1 lg:row-span-1"
      >
        <NuxtLink
          :to="offer.path"
          class="block shadow-lg bg-center bg-cover bg-no-repeat h-full"
          :style="{ backgroundImage: `url(${offer.coverImage?.file?.url})` }"
        >
          <div class="w-full overflow-hidden">
            <div class="w-full h-64"></div>
            <div class="w-full relative px-2 pb-4">
              <div class="px-8 pl-0">
                <div class="text-white font-extrabold tracking-wider leading-relaxed font-roboto">
                  {{ offer.title }}
                </div>

                <div
                  class="text-white font-bold tracking-wider leading-relaxed font-roboto text-xs"
                  v-html="richtextToHTML(offer.metaDescription)"
                />

                <div
                  v-if="offer.excerpt"
                  class="text-white tracking-wider leading-relaxed font-roboto text-xs"
                  :class="{ '-mt-5': offer.metaDescription }"
                  v-html="offer.excerpt"
                />
              </div>

              <div class="flex float-right">
                <div class="absolute bottom-6">
                  <span
                    class="rounded-full flex justify-center items-center bg-primary p-2 font-medium md:text-lg text-white -mx-8"
                    aria-label="Voir l'offre"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import type { ContentfulPost } from '~/types/contentful'

interface Props {
  featuredOffer?: ContentfulPost
  offers?: ContentfulPost[]
}

withDefaults(defineProps<Props>(), {
  featuredOffer: undefined,
  offers: () => []
})

const richtextToHTML = (content?: any) => {
  if (!content) return ''
  if (typeof content === 'string') return content
  return documentToHtmlString(content)
}
</script>
