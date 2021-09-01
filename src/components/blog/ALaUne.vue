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
        >
          À la une
        </h2>
      </div>

      <div class="mx-24 3xl:mx-52 4xl:mx-96">
        <VueSlickCarousel
          v-bind="settings"
          ref="carouselref"
          class="border rounded shadow-sm bg-white"
        >
          <div v-for="edge in featuredPost" :key="edge.node.id">
            <div
              class="grid grid-cols-1 md:grid-cols-2 md:px-8 md:gap-x-8 md:py-4"
            >
              <div class="col-start-1 row-start-2 mt-72 md:mt-0 md:row-start-1 px-4">
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
                <p class="py-3 text-justify">
                  {{ edge.node.metaDescription }}
                </p>
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
                    <p class="text-primary text-base font-medium">{{edge.node.author}}</p>
                    <p class="text-gray-400 -mt-6">
                      {{ edge.node.date | FormatDate }}
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="col-start-1 row-start-1 flex md:col-start-2 md:row-span-3"
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
          </div>
        </VueSlickCarousel>
        <div class="flex float-right mt-4" style="margin-right: 2rem">
          <div
            class="
              z-10
              bg-primary bg-opacity-10
              w-8
              h-8
              mr-2
              rounded-md
              border border-primary
              flex
              items-center
              justify-center
              text-black
              cursor-pointer
            "
          >
            <button @click="showPrev">
              <ArrowLeft />
            </button>
          </div>
          <div
            class="
              z-10
              bg-primary bg-opacity-10
              w-8
              h-8
              rounded-md
              border border-primary
              flex
              items-center
              justify-center
              text-black
              cursor-pointer
            "
          >
            <button @click="showNext">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ArrowLeft from "~/assets/images/icons/blog-arrow-left.svg";
import ArrowRight from "~/assets/images/icons/blog-arrow-right.svg";

export default {
  props: {
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
      settings: {
        dots: false,
        dotsClass: "articledots",
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
      },
    };
  },
  methods: {
    showNext() {
      this.$refs.carouselref.next();
    },
    showPrev() {
      this.$refs.carouselref.prev();
    },
  },
  filters: {
    // Filter definitions
    FormatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
      }
    },
  },
};
</script>
