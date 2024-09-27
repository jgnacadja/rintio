<template>
  <div
    class="md:px-20 md:flex w-full justify-center py-6 md:py-24"
    v-bind:style="[
      {
        backgroundImage: 'url(' + cover.image.file.url + ')',
      },
    ]"
  >
    <div class="w-full mx-auto mb-8 md:mb-0">
      <div class="mx-4 md:mx-0 text-center">
        <h1
          class="pb-8 text-xl md:text-5xl font-extrabold capitalize text-primary"
          v-html="title"
        ></h1>
      </div>
      <div
        class="grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 gap-4 mx-4 md:mx-0"
      >
        <div
          v-for="service in content"
          :key="service.id"
          class="bg-white text-center py-4 px-6 cursor-pointer group hover:bg-primary"
          @mouseover="state = service.id"
          @mouseleave="state = null"
        >
          <g-image
            v-if="state !== service.id"
            class="w-16 md:w-16 xl:w-18 mx-auto"
            :src="service.columns[0].image.file.url"
          />

          <g-image
            v-if="state === service.id"
            class="w-16 md:w-16 xl:w-18 mx-auto"
            :src="service.columns[1].image.file.url"
          />

          <h2 class="py-2 text-primary group-hover:text-white">
            {{ service.columns[2].title }}
          </h2>
          <div
            class="text-justify leading-8 group-hover:text-white text-ellipsis--2"
            v-html="richtextToHTML(service.columns[2].text)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    title: {
      type: String,
      default() {
        return "";
      },
    },
    cover: {
      type: Object,
      default() {
        return {};
      },
    },
    content: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      state: false,
    };
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
};
</script>
