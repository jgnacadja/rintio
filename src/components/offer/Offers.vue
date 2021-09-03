<template>
  <div class="container mx-auto px-6 lg:px-8 xl:px-18 2xl:px-16">
    <div
      class="grid md:grid-cols-9 lg:grid-cols-4 gap-4 md:grid-flow-row lg:grid-flow-rows"
    >
      <div
        class="row-span-6 col-span-3 md:col-span-6 lg:col-span-2 lg:row-span-2"
      >
        <div
          v-for="edge in offer"
          :key="edge.node.id"
          class="w-full relative px-4 bg-center bg-cover bg-no-repeat h-full"
          v-bind:style="[
            {
              backgroundImage: 'url(' + edge.node.coverImage.file.url + ')',
            },
          ]"
        >
          <div class="absolute bottom-6">
            <div
              class="text-white font-extrabold tracking-wider leading-relaxed font-roboto"
            >
              {{ edge.node.title }}
            </div>

            <div
              class="text-white font-bold tracking-wider leading-relaxed font-roboto text-xs"
              v-html="richtextToHTML(edge.node.metaDescription)"
            ></div>

            <div
              class="text-white tracking-wider leading-relaxed font-roboto text-xs flex flex-row justify-between -mt-5"
              v-html="edge.node.excerpt"
            ></div>
          </div>
        </div>
      </div>

      <div
        v-for="edge in offers"
        :key="edge.node.id"
        class="col-span-3 md:row-span-3 lg:col-span-1 lg:row-span-1"
      >
        <div
          class="shadow-lg bg-center bg-cover bg-no-repeat h-full"
          v-bind:style="[
            {
              backgroundImage: 'url(' + edge.node.coverImage.file.url + ')',
            },
          ]"
        >
          <div class="w-full overflow-hidden">
            <div class="w-full h-64"></div>
            <div class="w-full relative px-4 pb-4">
              <div
                class="text-white font-extrabold tracking-wider leading-relaxed font-roboto"
              >
                {{ edge.node.title }}
              </div>

              <div
                class="text-white font-bold tracking-wider leading-relaxed font-roboto text-xs"
                v-html="richtextToHTML(edge.node.metaDescription)"
              ></div>

              <div
                class="text-white tracking-wider leading-relaxed font-roboto text-xs"
                v-bind:class="{ '-mt-5': edge.node.metaDescription }"
                v-html="edge.node.excerpt"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    offer: {
      type: Array,
      default() {
        return [];
      },
    },
    offers: {
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
