<template>
  <div
    class="md:px-16 md:flex w-full justify-center flex-wrap py-6 md:py-24 text-black"
    style="background: #e8e8e8"
  >
    <div
      class="w-full md:w-full lg:w-1/4 text-center md:text-center lg:text-left"
    >
      <div class="mx-4 md:mx-0">
        <h3 class="mb-3 text-sm text-primary font-semibold uppercase">
          {{ title }}
        </h3>
        <!-- Title Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
        </div>
      </div>
      <div class="mx-4 md:mx-0 pt-6">
        <h2
          class="text-2xl md:text-5xl text-primary font-extrabold"
          v-html="content.title"
        ></h2>

        <div
          class="hidden md:block my-3 font-light"
          v-html="richtextToHTML(content.text)"
        ></div>
      </div>
    </div>

    <div
      class="w-full md:w-full lg:w-3/4 flex-row justify-center items-start flex-wrap mx-auto flex lg:space-x-4"
    >
      <div class="1/3 space-y-4">
        <div
          class="rounded-xl md:rounded-3xl p-2 m-2 bg-white text-gray-100 w-24 sm:w-28 md:w-48 lg:w-48 xl:w-60 h-24 sm:h-28 md:h-48 lg:h-48 xl:h-60 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[0].image.file.url" :alt="partners[0].name" />
        </div>
        <div
          class="rounded-xl md:rounded-3xl ml-auto p-2 m-2 bg-white text-yellow-100 w-20 sm:w-16 md:w-28 lg:w-32 xl:w-40 h-20 sm:h-16 md:h-28 lg:h-32 xl:h-40 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[1].image.file.url" :alt="partners[1].name" />
        </div>
      </div>
      <div class="1/3 space-y-4">
        <div
          class="rounded-xl md:rounded-3xl ml-auto p-2 m-2 bg-white text-indigo-100 w-20 sm:w-28 md:w-44 lg:w-40 xl:w-56 h-20 sm:h-28 md:h-44 lg:h-40 xl:h-56 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[2].image.file.url" :alt="partners[2].name" />
        </div>
        <div
          class="rounded-xl md:rounded-3xl ml-auto p-2 m-2 bg-white text-green-100 w-16 sm:w-24 md:w-40 lg:w-32 xl:w-52 h-16 sm:h-24 md:h-40 lg:h-32 xl:h-52 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[3].image.file.url" :alt="partners[3].name" />
        </div>
        <div class="md:flex">
          <div
            class="rounded-xl md:rounded-3xl ml-auto md:ml-0 lg:ml-auto p-2 m-2 bg-white text-purple-100 w-16 sm:w-20 md:w-20 lg:w-16 xl:w-24 h-16 sm:h-16 md:h-20 lg:h-16 xl:h-24 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <g-image class="mb-0"
              :src="partners[4].image.file.url"
              :alt="partners[4].name"
            />
          </div>
          <div
            class="rounded-xl md:rounded-3xl ml-auto md:ml-0 lg:ml-0 xl:ml-auto p-2 m-2 bg-white text-red-100 w-16 sm:w-20 md:w-20 lg:w-16 xl:w-24 h-16 sm:h-16 md:h-20 lg:h-16 xl:h-24 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <g-image class="mb-0"
              :src="partners[5].image.file.url"
              :alt="partners[5].name"
            />
          </div>
        </div>
      </div>
      <div class="1/3 space-y-4">
        <div
          class="rounded-xl md:rounded-3xl ml-auto p-2 m-2 bg-white text-pink-100 w-24 sm:w-32 md:w-56 lg:w-60 xl:w-full h-24 sm:h-24 md:h-40 lg:h-36 xl:h-52 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[6].image.file.url" :alt="partners[6].name" />
        </div>
        <div class="md:flex">
          <div
            class="rounded-xl md:rounded-3xl p-2 m-2 bg-white text-blue-100 w-16 sm:w-20 md:w-24 lg:w-24 xl:w-32 h-16 sm:h-16 md:h-24 lg:h-24 xl:h-32 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <g-image class="mb-0"
              :src="partners[7].image.file.url"
              :alt="partners[7].name"
            />
          </div>
          <div
            class="rounded-xl md:rounded-3xl p-2 m-2 xl:ml-auto bg-white text-orange-100 w-16 sm:w-20 md:w-24 lg:w-24 xl:w-32 h-16 sm:h-16 md:h-24 lg:h-24 xl:h-32 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <g-image class="mb-0"
              :src="partners[8].image.file.url"
              :alt="partners[8].name"
            />
          </div>
        </div>
        <div
          class="rounded-xl md:rounded-3xl p-2 m-2 lg:ml-auto bg-white text-teal-100 w-20 sm:w-32 md:w-56 lg:w-52 xl:w-56 h-20 sm:h-32 md:h-56 lg:h-52 xl:h-56 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <g-image class="mb-0" :src="partners[9].image.file.url" :alt="partners[9].name" />
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
    content: {
      type: Object,
      default() {
        return {};
      },
    },
    partners: {
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
