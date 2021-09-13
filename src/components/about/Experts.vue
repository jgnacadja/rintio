<template>
  <div>
    <!---->

    <div class="justify-center w-full py-6 md:px-20 md:flex md:py-24">
      <div class="w-full mx-auto mb-8 md:mb-0">
        <div class="mx-4 text-center md:mx-0">
          <h1
            class="pb-8 text-xl font-extrabold capitalize md:text-5xl text-primary"
            v-html="content.title"
          ></h1>

          <p
            class="mx-auto my-3 md:mb-24 md:w-1/2"
            v-html="richtextToHTML(content.text)"
          ></p>
          <!---->
          <VueSlickCarousel v-bind="settings">
            <div class="px-3" v-for="expert in experts" :key="expert">
              <div
                class="w-full p-5 mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg md:h-44 lg:h-56 xl:h-44 h-52"
              >
                <div class="flex flex-row items-center w-full space-x-0">
                  <div class="w-1/3">
                    <div
                      class="items-center justify-center w-16 h-16 mx-auto mb-4 overflow-hidden border border-gray-200 rounded-full bg-gray-50"
                    >
                      <g-image
                        :src="expert.image.file.url"
                        :alt="expert.image.name"
                      ></g-image>
                    </div>
                    <span class="inline-flex">
                      <a
                        class="flex items-center w-5 h-5 mr-2 text-xs border rounded-full place-content-center hover:border-none text-primary hover:bg-secondary hover:text-white"
                        :href="expert.ctaLink"
                        target="_blank"
                      >
                        <em class="relative fab fa-linkedin-in"></em>
                      </a>
                    </span>
                  </div>

                  <div class="flex-grow w-2/3 pl-4 text-left sm:pl-5 lg:pl-4">
                    <h6 class="mb-4 text-sm font-bold text-gray-600 uppercase">
                      {{ expert.name }}
                    </h6>
                    <p
                      class="mb-2 text-xs"
                      v-for="skill in expert.text.content.slice(0,3)"
                      :key="skill.content"
                    >
                      {{ skill.content[0].value }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    content: {
      type: Object,
      default() {
        return {};
      },
    },
    experts: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { VueSlickCarousel },
  data() {
    return {
      currentPage: 1,
      perPage: 8,
      totalItems: 1,
      classes: {
        wrapper: "table border-collapse text-center bg-white mx-auto shadow-sm",
        element:
          "w-8 h-8 border border-gray-200 table-cell hover:border-blue-100",
        activeElement:
          "w-8 h-8 border border-secondary table-cell hover:border-secondry",
        disabledElement: "w-8 h-8 border border-gray-200 table-cell",
        ellipsisElement: "w-8 h-8 border border-gray-200 hidden md:table-cell",
        activeButton:
          "bg-secondary w-full h-full text-white hover:bg-secondary transition duration-100 ease-in-out focus:outline-none",
        disabledButton:
          "opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",
        button:
          "hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        ellipsis: "",
      },
      settings: {
        dots: true,
        autoplay: false,
        dotsClass: "expertsdots",
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        slidesPerRow: 1,
        initialSlide: 0,
        arrows: true,
        responsive: [
          {
            breakpoint: 1536,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 1535,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
};
</script>
