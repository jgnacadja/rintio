<template>
  <div
    class="container w-full mx-auto mt-4 md:mt-24 md:px-20 space-x-0 md:flex"
  >
    <div class="w-full">
      <div class="w-full my-6 mx-24 3xl:mx-52 4xl:mx-96">
        <h2
          class="
            px-1
            md:text-md
            md:mx-auto
            mt-20
            md:-mt-16
            lg:-mt-16
            xl:-mt-12
            2xl:-mt-12
            text-primary
            font-bold
          "
          v-html="richtextToHTML(title.text)"
        ></h2>
      </div>
      <div class="3xl:mx-52 4xl:mx-96">
        <VueSlickCarousel
          v-bind="settings"
          ref="carouselref"
          class="border rounded shadow-sm bg-white"
          @afterChange="currentIndex = $event"
        >
          <div v-for="edge in featuredPost" :key="edge.node.id">
            <g-link :to="edge.node.path">
              <div
                class="
                  grid grid-cols-1
                  md:grid-cols-2
                  md:px-8
                  md:gap-x-8
                  md:py-4
                "
              >
                <div
                  class="
                    col-start-1
                    row-start-2
                    mt-72
                    md:mt-0
                    md:row-start-1
                    px-4
                  "
                >
                  <h2
                    class="
                      text-lg
                      md:text-2xl
                      text-left
                      font-bold
                      text-secondary text-opacity-70
                      py-3
                      mt-24
                      md:mt-0
                    "
                  >
                    {{ edge.node.title }}
                  </h2>
                  <div
                    class="py-3 text-justify"
                    v-html="richtextToHTML(edge.node.metaDescription)"
                  ></div>
                  <div
                    class="
                      flex
                      items-center
                      text-sm
                      font-medium
                      my-5
                      md:mt-2
                      md:mb-4
                    "
                  >
                    <div class="ml-1">
                      <img
                        :src="edge.node.coverImage.file.url"
                        alt=""
                        class="
                          rounded-full
                          inset-0
                          w-12
                          h-12
                          object-cover
                          bg-gray-100
                        "
                      />
                    </div>

                    <div class="flex flex-col px-4">
                      <p class="text-primary text-base font-medium">
                        {{ edge.node.author }}
                      </p>
                      <p class="text-gray-400 -mt-6">
                        {{ edge.node.date | formatDate }}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    col-start-1
                    row-start-1
                    flex
                    md:col-start-2
                    md:row-span-3
                  "
                >
                  <div class="w-full grid grid-cols-1 grid-rows-2 gap-2">
                    <div class="relative col-span-3 row-span-2 md:col-span-2">
                      <img
                        :src="edge.node.coverImage.file.url"
                        alt=""
                        class="
                          absolute
                          inset-0
                          w-full
                          md:h-full
                          h-96
                          object-cover
                          bg-gray-100
                          md:rounded-lg
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </g-link>
          </div>
        </VueSlickCarousel>
        <div class="flex float-right mt-4" style="margin-right: 2rem">
          <button @click="showPrev">
            <div
              class="
                z-10
                bg-opacity-10
                w-8
                h-8
                mr-2
                rounded-md
                border
                flex
                items-center
                justify-center
                text-black
                cursor-pointer
              "
              v-bind:class="{
                'bg-gray-100': currentIndex == 0,
                'bg-primary border-primary': currentIndex != 0,
              }"
            >
              <ArrowLeft />
            </div>
          </button>

          <button @click="showNext">
            <div
              class="
                z-10
                bg-opacity-10
                w-8
                h-8
                rounded-md
                border
                flex
                items-center
                justify-center
                text-black
                cursor-pointer
              "
              v-bind:class="{
                'bg-gray-100': currentIndex == featuredPost.length - 1,
                'bg-primary border-primary':
                  currentIndex != featuredPost.length - 1,
              }"
            >
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ArrowLeft from "~/assets/images/icons/blog-arrow-left.svg";
import ArrowRight from "~/assets/images/icons/blog-arrow-right.svg";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    title: {
      type: Object,
      default() {
        return {};
      },
    },
    featuredPost: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    ArrowLeft,
    ArrowRight,
    VueSlickCarousel,
  },
  data() {
    return {
      num_index: 0,
      settings: {
        dots: false,
        dotsClass: "articledots",
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        currentIndex: 0,
      },
      currentIndex: 0,
      currentIndexEvent: 0,
    };
  },
  methods: {
    showNext() {
      this.$refs.carouselref.next();
    },
    showPrev() {
      this.$refs.carouselref.prev();
    },

    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
  filters: {
    // Filter definitions
    formatDate(value) {
      if (value) {
        return dayjs(String(value)).format("MM/DD/YYYY");
      }
    },
  },
};
</script>
