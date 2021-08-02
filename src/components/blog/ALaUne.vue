<template>
  <div
    class="
      container
      w-full
      mx-auto
      mt-8
      md:mt-24
      space-x-0
      md:flex
      md:px-16
      md:space-x-6
    "
  >
    <div id="home" class="container w-full">
      <div class="mx-4 md:px-10">
        <h3 class="md:mb-12 text-lg text-primary font-bold">
          Articles à la une
        </h3>
      </div>

      <VueSlickCarousel v-bind="settings" ref="carouselref">
        <div>
          <div
            class="
              grid grid-cols-1
              md:grid-cols-2
              md:px-8
              md:gap-x-8
              md:py-4
              rounded
              shadow-lg
              border
              bg-white
            "
          >
            <div class="col-start-1 row-start-2 md:row-start-1 px-4">
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
                Remise des diplôme au Africa TechUp Tour Abidjan 2021
              </h2>
              <p class="py-3 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse lacus interdum quis sociis vitae tempor volutpat.
                Elit faucibus arcu, amet, praesent. Laoreet fringilla amet
                tellus ultrices facilisi egestas maecenas. Integer cras
                tristique urna, diam, sed enim. Egestas vehicula ipsum vitae
                amet a nam lacinia.
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
                    src="https://i.imgur.com/Y8WHhk2.jpg"
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
                  <p class="text-primary text-base font-medium">Rintio</p>
                  <p class="text-gray-400 -mt-6">17 Mai 2021</p>
                </div>
              </div>
            </div>

            <div
              class="col-start-1 row-start-1 flex md:col-start-2 md:row-span-3"
            >
              <div
                class="w-full grid grid-cols-1 grid-rows-2 gap-2 h-80 md:h-full"
              >
                <div class="relative col-span-3 row-span-2 md:col-span-2">
                  <img
                    src="https://i.imgur.com/Y8WHhk2.jpg"
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
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ArrowLeft from "~/assets/images/icons/blog-arrow-left.svg";
import ArrowRight from "~/assets/images/icons/blog-arrow-right.svg";

export default {
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
};
</script>
