<template>
  <div class="justify-center w-full py-6 lg:px-20 md:flex md:py-24">
    <div class="w-full mx-auto mb-8 md:mb-0">
      <div class="mx-4 text-center md:mx-0">
        <h1
          class="pb-8 text-xl font-extrabold capitalize md:text-5xl text-primary"
          v-html="content.title"
        ></h1>

        <div
          class="mx-auto my-3 w-ful lg:w-1/2"
          v-html="richtextToHTML(content.text)"
        ></div>
      </div>
      <div
        class="hidden pt-6 lg:flex lg:space-x-4 md:mx-0 sm:p-12 lg:px-0 xl:px-24 2xl:px-64 3xl:px-96 lg:p-0 lg:space-y-0 md:space-y-4 lg:mt-12"
      >
        <div
          class="w-full shadow-md md:w-1/2"
          v-for="leader in team"
          :key="leader.id"
        >
          <div class="h-full bg-white">
            <g-image
              class="w-full 4xl:w-full"
              :src="leader.image.file.url"
              :alt="leader.image.name"
            ></g-image>
            <h2
              class="px-6 mt-10 mb-2 font-normal lg:mt-0 lg:px-2 lg:text-2xl 3xl:text-4xl 2xl:px-4 3xl:px-8 text-primary"
              v-html="leader.name"
            ></h2>
            <h3
              class="px-6 pb-2 uppercase border-b-2 text-secondary border-secondary lg:px-2 lg:text-lg 3xl:text-2xl 2xl:px-4 3xl:px-8"
            >
              {{ leader.title }}
            </h3>
            <p
              class="px-6 mb-0"
              v-for="skill in leader.text.content"
              :key="skill.content"
            >
              {{ skill.content[0].value }}
            </p>
            <div class="flex px-6 py-4">
              <a
                class="flex items-center ml-auto mr-2 text-xs border rounded-full w-7 h-7 place-content-center hover:border-none text-primary hover:bg-secondary hover:text-white"
                :href="leader.ctaLink"
                target="_blank"
                rel="noopener"
              >
                <em class="relative fab fa-linkedin-in"></em>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full p-5">
        <VueSlickCarousel v-bind="settings" class="space-x-4">
          <div class="w-full" v-for="leader in team" :key="leader.id">
            <div class="h-full pb-4 mx-1 bg-white shadow-md">
              <g-image
                class="w-full 4xl:w-full"
                :src="leader.image.file.url"
                :alt="leader.image.name"
              ></g-image>
              <h2
                class="px-2 mt-0 mb-2 text-xl font-normal sm:px-6 xs:text-2xl sm:text-4xl md:text-5xl text-primary"
                v-html="leader.name"
              ></h2>
              <h3
                class="px-2 pb-2 uppercase border-b-2 text-secondary border-secondary sm:px-6"
              >
                {{ leader.title }}
              </h3>
              <p
                class="px-6 mb-0"
                v-for="skill in leader.text.content"
                :key="skill.content"
              >
                {{ skill.content[0].value }}
              </p>
              <div class="flex px-6 py-4">
                <a
                  class="flex items-center ml-auto mr-2 text-xs bg-white border-2 rounded-full w-7 h-7 place-content-center border-primary hover:border-none text-primary hover:bg-secondary hover:text-white"
                  :href="leader.ctaLink"
                  target="_blank"
                  rel="noopener"
                >
                  <em class="relative fab fa-linkedin-in"></em>
                </a>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    content: {
      type: Object,
      default() {
        return {};
      },
    },
    team: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { VueSlickCarousel },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
  data() {
    return {
      settings: {
        autoplay: true,
        infinite: true,
        rows: 1,
        edgeFriction: 0.35,
        initialSlide: 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        dots: true,
        dotsClass: "teamdots",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .slick-slider {
    display: none;
  }
}
</style>
