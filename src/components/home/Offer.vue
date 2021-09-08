<template>
  <div
    class="grid grid-cols-6 gap-4 px-4 py-8 md:grid-cols-4 lg:grid-cols-3 md:grid-flow-row lg:grid-flow-rows xl:px-12 xl:py-16 2xl:px-32 2xl:py-24"
    v-bind:style="[
          {
            backgroundImage: 'url(' + cover.image.file.url + ')',
          },
        ]"
  >
    <div
      class="w-full h-full col-span-6 row-span-4 md:row-span-6 md:col-span-4 lg:col-span-1 lg:row-span-2"
    >
      <div class="">
        <div class="">
          <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
            {{ title }}
          </h3>
          <!-- Title Dot -->
          <div class="-mt-3">
            <span
              class="inline-block w-20 h-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
            ></span>
          </div>
        </div>
        <div class="pt-6">
          <h2
            class="my-3 text-2xl font-extrabold md:text-5xl text-primary"
            v-html="content.title"
          ></h2>

          <p class="my-3 font-light" v-html="richtextToHTML(content.text)"></p>
          <div class="mt-4 text-center">
            <g-link :to="button.ctaLink">
              <button
                type="submit"
                class="flex px-6 py-2 text-sm text-white uppercase rounded-sm md:py-4 bg-secondary hover:bg-primary"
              >
                {{ button.ctaText }}
              </button>
            </g-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-full col-span-6 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-2"
    >
      <div
        class="relative bg-center bg-no-repeat bg-cover shadow-lg group h-80 md:h-full"
        v-for="edge in $static.offer.belongsTo.edges"
        :key="edge.node.id"
        v-bind:style="[
          {
            backgroundImage: 'url(' + edge.node.coverImage.file.url + ')',
          },
        ]"
      >
        <div class="absolute px-4 bottom-4">
          <div
            class="font-extrabold leading-relaxed tracking-wider text-white font-roboto"
          >
            {{ edge.node.title }}
          </div>

          <div
            class="text-xs font-bold leading-relaxed text-white font-roboto"
            v-html="richtextToHTML(edge.node.metaDescription)"
          ></div>

          <div
            class="text-white tracking-wider leading-relaxed font-roboto text-xs flex flex-row justify-between -mt-5 space-x-4"
            v-html="edge.node.excerpt"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-full col-span-6 row-span-2 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1"
      v-for="edge in $static.offers.belongsTo.edges"
      :key="edge.node.id"
    >
      <div
        class="bg-white bg-center bg-no-repeat bg-cover shadow-lg group"
        v-bind:style="[
          {
            backgroundImage: 'url(' + edge.node.coverImage.file.url + ')',
          },
        ]"
      >
        <div class="w-full">
          <div class="w-full h-40"></div>
          <div class="relative w-full px-4 pb-4">
            <div
              class="font-extrabold leading-relaxed tracking-wider text-white font-roboto"
            >
              {{ edge.node.title }}
            </div>

            <div
              class="text-xs font-bold leading-relaxed tracking-wider text-white font-roboto"
              v-html="richtextToHTML(edge.node.metaDescription)"
            ></div>

            <div
              class="text-xs leading-relaxed tracking-wider text-white"
              v-bind:class="{ '-mt-5': edge.node.metaDescription }"
              v-html="edge.node.excerpt"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query{
   offer: contentfulCategory(path: "offres") {
    id
    title
    path
    belongsTo(order: ASC, limit: 1) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            type
            excerpt
            categories {
              id
              title
            }
            date
            coverImage {
              file {
                url
              }
            }
            metaDescription
          }
        }
      }
    }
  }

  offers: contentfulCategory(path: "offres") {
    id
    title
    path
    belongsTo(order: ASC, skip: 1, limit: 2) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            type
            excerpt
            categories {
              id
              title
            }
            date
            coverImage {
              file {
                url
              }
            }
            metaDescription
          }
        }
      }
    }
  }
}
</static-query>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    cover: {
      type: Object,
      default() {
        return {};
      },
    },
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
    button: {
      type: Object,
      default() {
        return {};
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
