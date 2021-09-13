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
                    v-bind:style="[ edge.node.type === 'blog' ? {backgroundImage: 'url(' + edge.node.coverImage + ')'} : null]"
                    v-bind:class="{
                      'text-primary': edge.node.type !== 'blog',
                      'text-white': edge.node.type === 'blog',
                    }"
                  >
                    <div class="text-9xl">
                      {{ edge.node.date | getDay }}
                    </div>
                    <div class="text-xl capitalize">
                      {{ edge.node.date | getMonth }}
                    </div>
                  </div>
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

        <!-- -------------------------------------------- -->
        <div class="
              w-full
              h-84
              bg-white
              shadow-xl
              border border-white
              flex
              flex-row
            "
          >
          <div class="
              w-4/12
              bg-gray-100
              m-7
              rounded-md
              border 1px border-gray
              flex
              flex-col
            ">
            <!-- ------------------- -->
                
                <DatePicker v-model="date" color="blue" is-expanded/>
            <!-- ------------- -->
            
          </div>          
          <div class="
              w-9/12
              bg-white-50
              m-8
              flex
              flex-col
            "> 
              <div class="
              w-12/12
              bg-white
              ml-2
              mr-2
              h-12 
              flex
              flex-row
              ">
                    <div
                      class="
                        z-10
                        w-32
                        
                        bg-primary bg-opacity-10
                        text-xs
                        mb-1
                        border border-primary
                        flex
                        items-center
                        justify-center
                        text-black
                        cursor-pointer
                      "
                    >
                    Aujourd'hui
                    </div>
                    <div
                      class="
                        z-10
                        w-9/12
                        mb-1
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-black
                        cursor-pointer
                      "
                    >
                    Avril 2021
                    </div>
                
                    <div>
                    <select       class="
                        z-10
                        w-32
                        h-10
                        mb-1
                        pl-4
                        outline-none
                        bg-primary bg-opacity-10
                        text-xs
                        border border-primary
                        flex
                        items-center
                        justify-center
                        text-black
                        cursor-pointer 
                      
                      ">
                      <option >Aujourd'hui</option>
                      <option>Mois</option>
                      <option>Année</option>
                    </select>
                    
                      <!-- <img src="../../assets/images/blog/polygon.png" alt="enligne" class="h-2 ml-1 mt-6"/> -->

                    </div>
                



              </div>

              <div class="
              w-12/12
              bg-gray-100
              mt-1
              ml-2
              mr-2
              mb-2
              h-1
              border 1px border-gray
              flex
              flex-col
              ">
              </div>

              <div class="
              w-12/12
              bg-gray-100
              ml-2
              mr-2
              mb-2
              h-28
              border-l-8 border-red-600
              flex
              flex-row
            ">
                <div class="
                w-28
                bg-gray-100
                m-2
                border-r-2 border-gray-400
                h-24
                flex
                flex-col
                items-center
                justify-center
                
                ">
                  
                  <div class=" text-primary text-3xl font-bold">07</div>
                  <div class=" text-black text-sm mt-2">Mer</div>
                </div>
                  <div class="w-full
                    bg-gray-100
                    h-20
                    flex
                    flex-col
                   ">

                    <div >
                      <div class="mt-1.5 mb-1 justify-center text-xl text-primary font-bold">Bootcamp Africa TechUp Tour Douala</div>
                      <div class=" items-center justify-center h-12 text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus non a sed proin. Aliquam dictum in molestie vel mi enim nullam porta. Tortor amet amet, amet .</div>
                    </div>
                  
                  
                    <div class="flex h-6">
                      <div class="items-center justify-center h-5 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          alt="Paris"
                          title="Paris localisation"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div class="text-black text-xs ml-3 mt-1.5 justify-center h-4 font-medium">9h 30</div>
                      <img src="../../assets/images/blog/maps.png" alt="enligne" class="h-4  mt-1 ml-6"/>
                      <div class="text-black text-xs  mt-1.5 ml-2 justify-center h-4 font-medium">En ligne</div>
                    </div>

                  </div>

              </div>
      
              <div class="
              w-12/12
              bg-gray-100
              ml-2
              mr-2
              h-28
              border-l-8 border-primary
              flex
              flex-row
            ">
                <div class="
                  w-28
                  bg-gray-100
                  m-2
                  border-r-2 border-gray-400
                  h-24
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-primary
                  "> 
                    <div class=" text-primary text-3xl font-bold">10</div>
                    <div class=" text-black text-sm mt-2">Sam</div>

                  

                  </div>

                  <div class="w-full
                    bg-gray-100
                    h-20
                    flex
                    flex-col
                   ">

                    <div >
                      <div class="mt-2 justify-center text-xl text-primary font-bold">Hackathon Africa TechUp Tour Douala</div>
                      <div class=" items-center justify-center h-12 text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus non a sed proin. Aliquam dictum in molestie vel mi enim nullam porta. Tortor amet amet, amet .</div>
                    </div>
                  
                  
                    <div class="flex ">
                      <div class="items-center justify-center h-5 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          alt="Paris"
                          title="Paris localisation"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div class="text-black text-xs ml-3 mt-1.5 justify-center h-4 font-medium">8h 30</div>
                      <img src="../../assets/images/blog/maps.png" alt="enligne" class="h-4  mt-1 ml-6"/>
                      <div class="text-black text-xs  mt-1.5 ml-2 justify-center h-4 font-medium">En ligne</div>

                    </div>

                  </div>
  

              </div>
          </div>

        </div>
        <!-- ------------------------------------------------>
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
import { Calendar, DatePicker } from 'v-calendar';



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
    Calendar,
    DatePicker,
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

.vc-container.vc-is-expanded {
  height: 100%;
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
