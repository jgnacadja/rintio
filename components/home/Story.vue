<template>
  <div class="items-center justify-center w-full py-6 md:py-24 md:px-4 lg:px-12 xl:px-24">
    <div class="text-center">
      <h2 class="my-3 text-xl font-extrabold md:text-5xl text-primary" v-html="content.title"></h2>
      <div class="py-4 mx-auto font-light md:w-1/2" v-html="richtextToHTML(content.text)"></div>
    </div>
    <div class="flex flex-col gap-4 md:flex-row md:items-start">
      <div class="shadow-sm md:w-1/2 md:flex-shrink-0">
        <NuxtLink :to="toPostLink(stories[0]?.path)">
          <div class="w-full bg-white">
            <div class="aspect-w-16 aspect-h-11">
              <img
                alt="coraq"
                title="Coraq Chmp"
                :src="stories[0]?.coverImage?.file?.url"
                class="object-cover w-full mb-0"
                width="640"
                height="440"
              />
            </div>

            <h3
              class="mx-4 my-4 text-xl font-bold leading-tight text-primary 4xl:text-4xl 4xl:leading-10"
            >
              {{ stories[0]?.title }}
            </h3>
            <p
              class="mx-4 mb-4 text-base font-light text-justify text-gray-600 4xl:text-2xl 4xl:leading-10"
            >
              {{ stories[0]?.excerpt }}
            </p>
          </div>
        </NuxtLink>
      </div>

      <div class="grid content-start flex-1 grid-cols-2 gap-4">
        <div v-for="story in stories.slice(1)" :key="story.id" class="shadow-sm">
          <NuxtLink :to="toPostLink(story?.path)">
            <div class="w-full h-full p-4 bg-white lg:p-0">
              <div
                class="aspect-w-16 aspect-h-14 xs:aspect-w-16 xs:aspect-h-12 sm:aspect-w-16 sm:aspect-h-6 md:aspect-w-16 md:aspect-h-8 xl:aspect-w-16 xl:aspect-h-10"
              >
                <img
                  alt="Atut"
                  title="Africa TechUp Tour"
                  :src="story?.coverImage?.file?.url"
                  class="object-cover w-full mb-0 h-52"
                  width="640"
                  height="400"
                />
              </div>

              <h3
                class="mx-4 my-4 text-xl font-bold leading-tight text-primary 4xl:text-4xl 4xl:leading-10"
              >
                {{ story.title }}
              </h3>
              <p
                class="mx-4 mb-4 text-base font-light text-justify text-gray-600 4xl:text-2xl 4xl:leading-10 text-ellipsis--2"
              >
                {{ story.excerpt }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    },
    stories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content)
    }
  }
}
</script>
