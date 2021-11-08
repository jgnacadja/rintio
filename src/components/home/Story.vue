<template>
  <div
    class="items-center justify-center w-full py-6 md:py-24 md:px-4 lg:px-12 xl:px-24"
  >
    <div class="text-center">
      <h2
        class="my-3 text-xl font-extrabold md:text-5xl text-primary"
        v-html="content.title"
      ></h2>
      <div
        class="py-4 mx-auto font-light md:w-1/2"
        v-html="richtextToHTML(content.text)"
      ></div>
    </div>
    <div
      class="grid gap-4 md:grid-cols-6 xl:grid-cols-4 md:grid-flow-row xl:grid-flow-rows"
    >
      <div class="col-span-3 row-span-6 xl:col-span-2 xl:row-span-2 shadow-sm">
      <g-link :to="stories[0].path">
        <div class="w-full h-full bg-white">
          <g-image
            alt="coraq"
            title="Coraq Chmp"
            :src="stories[0].coverImage.file.url"
            class="object-cover w-full mb-0"
          />

          <h3
            class="mx-4 my-4 text-xl font-bold leading-tight text-primary 4xl:text-4xl 4xl:leading-10"
          >
            {{ stories[0].seoTitle }}
          </h3>
          <p
            class="mx-4 mb-4 text-base font-light text-justify text-gray-600 4xl:text-2xl 4xl:leading-10"
          >
            {{ stories[0].excerpt }}
          </p>
        </div>
      </g-link>
      </div>

      <div
        class="col-span-3 row-span-3 xl:col-span-1 xl:row-span-1 shadow-sm"
        v-for="story in stories.slice(1)"
        :key="story.id"
      >
      <g-link :to="story.path">
        <div class="w-full h-full p-4 bg-white lg:p-0">
          <g-image
            alt="Atut"
            title="Africa TechUp Tour"
            :src="story.coverImage.file.url"
            class="object-cover w-full mb-0 h-52"
          />

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
      </g-link>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    content: {
      type: Object,
      default() {
        return {};
      },
    },
    stories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
};
</script>
