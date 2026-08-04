<template>
  <div class="container mx-auto px-6 lg:px-8 xl:px-18 2xl:px-16">
    <div class="grid md:grid-cols-9 lg:grid-cols-4 gap-4 md:grid-flow-row lg:grid-flow-rows">
      <!-- Offre mise en avant -->
      <div
        v-if="featuredOffer"
        class="row-span-6 col-span-3 md:col-span-6 lg:col-span-2 lg:row-span-2"
      >
        <NuxtLink
          :to="toPostLink(featuredOffer.path)"
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
              class="text-white tracking-wider leading-relaxed font-roboto text-xs flex flex-row justify-between"
              v-html="featuredOffer.excerpt"
            />
          </div>
          <div class="flex float-right">
            <div class="absolute bottom-6">
              <button
                class="rounded-full flex justify-center items-center bg-primary p-2 font-medium md:text-lg hover:text-white focus:outline-none -mx-8"
                aria-label="Voir l'offre"
              >
                <span class="hidden sm:flex" style="color: white">
                  <svg width="24" height="24" viewBox="0 0 47 24" fill="none" aria-hidden="true">
                    <path
                      d="M46.06 13.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L42.88 12l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM0 13.5h45v-3H0v3z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
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
          :to="toPostLink(offer.path)"
          class="block shadow-lg bg-center bg-cover bg-no-repeat h-full"
          :style="{ backgroundImage: `url(${offer.coverImage?.file?.url})` }"
        >
          <div class="w-full h-full overflow-hidden flex flex-col">
            <div class="w-full h-64"></div>
            <div class="w-full relative flex-1 px-2 pb-4">
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
                  class="text-white tracking-wider leading-relaxed font-roboto text-xs flex flex-row justify-between"
                  v-html="offer.excerpt"
                />
              </div>

              <div class="flex float-right">
                <div class="absolute bottom-6">
                  <button
                    class="rounded-full flex justify-center items-center bg-primary p-2 font-medium md:text-lg hover:text-white focus:outline-none -mx-8"
                    aria-label="Voir l'offre"
                  >
                    <span class="hidden sm:flex" style="color: white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 47 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M46.06 13.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L42.88 12l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM0 13.5h45v-3H0v3z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button>
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
