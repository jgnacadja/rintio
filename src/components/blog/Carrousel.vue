<template>
  <div
    class="container w-full mx-auto mt-4 md:mt-24 space-x-0 md:flex"
  >
    <div class="w-full">
      <div class="w-full my-6 mx-auto">
        <h3 class="px-3 md:text-md md:mx-auto mt-20 md:-mt-16 lg:-mt-16 xl:-mt-12 2xl:-mt-12 text-primary font-bold">
          <span v-if="type === 'post'">Articles</span>
          <span v-if="type === 'offer'">Offres</span>
        </h3>
      </div>
      <div v-if="type === 'offer'">
        <VueSlickCarousel v-bind="settings" ref="carouselblog">
          <!--first slide-card-->
          <div
            class="md:mx-0 w-full"
            v-for="edge in allposts"
            :key="edge.node.id"
          >
            <g-link :to="edge.node.path">
              <div
                class="shadow-lg group container max-w-sm bg-center bg-cover bg-no-repeat h-72 w-11/12 mx-2 relative"
                v-bind:style="{
                  'background-image': 'url(' + edge.node.coverImage + ')',
                }"
              >
                <div class="w-full bg-transparent">
                  <div class="w-full px-4 pb-4 pt-2 absolute bottom-2 lg:-bottom-6 h-24 lg:h-32 text-white">
                    <div
                      class="font-bold tracking-wider leading-relaxed text-lg font-roboto"
                    >
                      {{ edge.node.title }}
                    </div>

                    <div
                      class="tracking-tight leading-normal font-roboto text-sm mt-2"
                    >
                      <p
                        class="font-light text-base text-ellipsis--6 md:text-ellipsis--2"
                      >
                        {{ edge.node.metaDescription }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </g-link>
          </div>
        </VueSlickCarousel>
        <div class="flex float-right mt-4" style="margin-right: 2rem">
          <div
            class="z-10 bg-primary bg-opacity-10 w-8 h-8 mr-2 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
          >
            <button @click="showPrev">
              <ArrowLeft />
            </button>
          </div>
          <div
            class="z-10 bg-primary bg-opacity-10 w-8 h-8 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
          >
            <button @click="showNext">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div v-if="type === 'post'">
        <VueSlickCarousel v-bind="settings" ref="carouselblog">
          <!--first slide-card-->
          <div
            class="md:mx-2 w-full"
            v-for="edge in allposts"
            :key="edge.node.id"
          >
            <div
              class="shadow-lg group container max-w-sm bg-center bg-cover bg-no-repeat w-11/12 mx-2"
            >
              <g-link :to="edge.node.path">
                <div class="w-full overflow-hidden">
                  <g-image
                    alt="Scrum"
                    title="Africa TechUp Tour"
                    :src="edge.node.coverImage"
                    class="object-cover w-full h-48 mb-0"
                  />
                  <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                    <div
                      class="text-primary font-bold tracking-wider leading-relaxed font-roboto"
                    >
                    <span class="relative hidden w-20 font-light h-9 p-2 ml-0 text-sm text-center text-white capitalize bg-secondary md:block -mt-7" data-v-27823496="">
                      {{ edge.node.categories.title }}

                    </span>
                      {{ edge.node.title }}
                    </div>

                    <div
                      class="tracking-tight leading-relaxed font-roboto text-xs mt-2"
                    >
                      <p
                        class="text-gray-600 font-light text-base text-justify text-ellipsis--2 "
                      >
                        {{ edge.node.metaDescription }}
                      </p>
                    </div>
                  </div>
                </div>
              </g-link>
            </div>
          </div>
        </VueSlickCarousel>
        <div class="flex float-right mt-4" style="margin-right: 2rem">
          <div
            class="z-10 bg-primary bg-opacity-10 w-8 h-8 mr-2 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
          >
            <button @click="showPrev">
              <ArrowLeft />
            </button>
          </div>
          <div
            class="z-10 bg-primary bg-opacity-10 w-8 h-8 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ArrowLeft from "~/assets/images/icons/blog-arrow-left.svg";
import ArrowRight from "~/assets/images/icons/blog-arrow-right.svg";

export default {
  props: {
    allposts: {
      type: Array,
      default() {
        return [];
      },
    },
    type: {
      type: String,
      default() {
        return "";
      },
    },
  },
  components: {
    VueSlickCarousel,
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      settings: {
        dots: false,
        dotsClass: "articledots",
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
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
    showNext() {
      this.$refs.carouselblog.next();
    },
    showPrev() {
      this.$refs.carouselblog.prev();
    },
  },
};
</script>
<style lang="scss" scoped>
.text-ellipsis--2 {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
}

.text-ellipsis--6 {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
}

</style>
