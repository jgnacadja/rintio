<template>
  <div
    class="container w-full mx-auto mt-4 md:mt-24 md:px-20 space-x-0 md:flex"
  >
    <div class="w-full">
      <div class="w-full my-6">
        <h3
          class="
            px-3
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
          <span v-if="type === 'post'">Publications</span>
          <span v-if="type === 'event'">Evènements</span>
        </h3>
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
              class="
                shadow-md
                group
                container
                max-w-sm
                bg-center bg-cover bg-no-repeat
                w-11/12
              "
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
                      class="
                        text-primary
                        font-bold
                        tracking-wider
                        leading-relaxed
                        font-roboto
                      "
                    >
                      <span
                        class="
                          relative
                          hidden
                          w-20
                          font-light
                          h-9
                          p-2
                          ml-0
                          text-sm text-center text-white
                          capitalize
                          bg-secondary
                          md:block
                          -mt-7
                        "
                        data-v-27823496=""
                      >
                        {{ edge.node.categories.title }}
                      </span>
                      {{ edge.node.title }}
                    </div>

                    <div
                      class="
                        tracking-tight
                        leading-relaxed
                        font-roboto
                        text-xs
                        mt-2
                      "
                    >
                      <p
                        class="
                          text-gray-600
                          font-light
                          text-base
                          text-ellipsis--2
                        "
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
      <div v-if="type === 'event'">
        <VueSlickCarousel v-bind="settings" ref="carouselevent">
          <div
            class="md:mx-2 w-full container"
            v-for="edge in allevents"
            :key="edge.node.id"
          >
            <div
              class="
                shadow-md
                group
                container
                max-w-sm
                bg-center bg-cover bg-no-repeat
                w-11/12
                relative
              "
            >
              <g-link :to="edge.node.path">
                <div class="w-full overflow-hidden">
                  <div
                    class="
                      absolute
                      inset-0
                      bg-gradient
                      from-black
                      to-black
                      opacity-25
                    "
                  ></div>
                  <div
                     class="border-b-2 py-2 text-center font-semibold opacity-90"
                    v-bind:style="{
                      'background-image': 'url(' + edge.node.coverImage + ')',
                    }"
                     v-bind:class="{'text-primary': !edge.node.coverImage , 'text-white': edge.node.coverImage }"
                    
                  >
                    <div
                      class="text-9xl "
                    >
                      {{ edge.node.date | getDay }}
                    </div>
                    <div class="text-xl capitalize">
                      {{ edge.node.date | getMonth }}
                    </div>
                  </div>

                  <!-- <g-image
                    v-if="edge.node.coverImage"
                    alt=""
                    title=""
                    :src="edge.node.coverImage"
                    class="object-cover w-full h-48 mb-0"
                  /> -->
                  <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                    <div
                      class="
                        text-primary
                        font-bold
                        tracking-wider
                        leading-relaxed
                        font-roboto
                        my-2
                      "
                    >
                      {{ edge.node.title }}
                    </div>

                    <div
                      class="tracking-tight leading-relaxed font-roboto text-xs"
                    >
                      <p
                        class="
                          text-gray-600
                          font-light
                          text-base
                          text-ellipsis--2
                          my-2
                        "
                      >
                        {{ edge.node.metaDescription }}
                      </p>
                    </div>
                    <div
                      class="tracking-tight leading-normal font-roboto text-sm"
                    ></div>
                  </div>
                </div>
              </g-link>
              <!-- <div class="w-full bg-transparent">
                  <div
                    class="
                      w-full
                      px-4
                      pb-4
                      pt-2
                      absolute
                      bottom-2
                      lg:-bottom-6
                      h-24
                      md:h-24
                      lg:h-32
                      xl:h-24
                    "
                  >
                    <div
                      class="
                        font-bold
                        tracking-wider
                        leading-relaxed
                        text-lg
                        font-roboto
                        text-primary
                      "
                    >
                      {{ edge.node.title }}
                    </div>

                    <div
                      class="
                        tracking-tight
                        leading-normal
                        font-roboto
                        text-sm
                        mt-2
                      "
                    >
                      <p
                        class="
                          font-light
                          text-base
                          text-ellipsis--6
                          md:text-ellipsis--2
                        "
                      >
                        {{ edge.node.date | FormatDate }}
                      </p>
                    </div>
                  </div>
                </div> -->
            </div>

            <!-- <div
              class="
                shadow-md
                group
                container
                max-w-sm
                bg-white bg-center bg-cover bg-no-repeat
                bg-offshoring_2
                w-11/12
              "
            >
              <div class="w-full overflow-hidden">
                <div class="w-full h-48"></div>
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div
                    class="
                      text-primary
                      font-bold
                      tracking-wider
                      leading-relaxed
                      font-roboto
                    "
                  >
                    Hackathon Douala
                  </div>
                  <div
                    class="
                      tracking-wider
                      leading-relaxed
                      font-roboto
                      text-xs
                      mt-2
                    "
                  >
                    <span class="flex items-start text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        after-appear=""
                        alt="Cotonou"
                        title="Cotonou localisation"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {{ days }}/{{ months }}/{{ years }} | {{ hour }}H
                      {{ minute }}
                    </span>
                  </div>
                  <div
                    class="
                      text-black
                      tracking-wider
                      leading-relaxed
                      font-roboto
                      text-xs
                    "
                  >
                    En ligne
                  </div>
                </div>
              </div>
            </div> -->
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
            <button @click="showPrevEvent">
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
            <button @click="showNextEvent">
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
import "moment/locale/fr";
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
    alloffers: {
      type: Array,
      default() {
        return [];
      },
    },
    allevents: {
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
        arrows: false,
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
      settingsoffer: {
        dots: false,
        dotsClass: "articledots",
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
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
    showNextOffer() {
      this.$refs.carouseloffer.next();
    },
    showPrevOffer() {
      this.$refs.carouseloffer.prev();
    },
    showNextEvent() {
      this.$refs.carouselevent.next();
    },
    showPrevEvent() {
      this.$refs.carouselevent.prev();
    },
  },
  filters: {
    // Filter definitions
    FormatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
      }
    },
    getDay(value) {
      if (value) {
        return moment(String(value)).format("DD");
      }
    },
    getMonth(value) {
      if (value) {
        return moment(String(value)).format("MMMM");
      }
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
