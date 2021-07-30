<template>
  <div
    class="container w-full mx-auto mt-4 md:mt-24 space-x-0 md:flex"
  >
    <div class="w-full">
      <div class="w-full my-6 mx-auto">
        <h3 class="px-3 md:text-md md:mx-auto text-primary font-bold">
      <h4 class="mb-5 text-lg text-primary font-bold">Evènements</h4>
        </h3>
      </div>
      <VueSlickCarousel v-bind="settings" ref="carouselEvent">
        <div class=" md:mx-2 w-full container ">
          <div class=" shadow-lg group container max-w-sm bg-white bg-center bg-cover bg-no-repeat bg-offshoring_2 w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
                <div class="w-full h-48"></div>
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-wider leading-relaxed font-roboto">
                    Hackathon Douala
                  </div>
                  <div
                   class="tracking-wider leading-relaxed font-roboto text-xs mt-2"
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
                    {{days}}/{{months}}/{{years}}  |  {{ hour }}H {{ minute }}
                  </span>
                  </div>
                  <div
                   class="text-black tracking-wider leading-relaxed font-roboto text-xs"
                  >
                      En ligne
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class=" md:mx-2 w-full">
          <div class=" shadow-lg group container max-w-sm bg-white bg-center bg-cover bg-no-repeat bg-offshoring_2 w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
                <div class="w-full h-48"></div>
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-wider leading-relaxed font-roboto">
                    Hackathon Douala
                  </div>
                  <div
                   class="tracking-wider leading-relaxed font-roboto text-xs mt-2"
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
                    {{days}}/{{months}}/{{years}}  |  {{ hour }}H {{ minute }}
                  </span>
                  </div>
                  <div
                   class="text-black tracking-wider leading-relaxed font-roboto text-xs"
                  >
                      En ligne
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class=" md:mx-2 w-full  ">
          <div class=" shadow-lg group container bg-white bg-center bg-cover bg-no-repeat bg-offshoring_2 w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
                <div class="w-full h-48"></div>
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-wider leading-relaxed font-roboto">
                    Hackathon Douala
                  </div>
                  <div
                   class="tracking-wider leading-relaxed font-roboto text-xs mt-2"
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
                    {{days}}/{{months}}/{{years}}  |  {{ hour }}H {{ minute }}
                  </span>
                  </div>
                  <div
                   class="text-black tracking-wider leading-relaxed font-roboto text-xs"
                  >
                      En ligne
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class=" md:mx-2 w-full  ">
          <div class=" shadow-lg group container max-w-sm bg-white bg-center bg-cover bg-no-repeat bg-offshoring_2 w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
                <div class="w-full h-48"></div>
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-wider leading-relaxed font-roboto">
                    Hackathon Douala
                  </div>
                  <div
                   class="tracking-wider leading-relaxed font-roboto text-xs mt-2"
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
                    {{days}}/{{months}}/{{years}}  |  {{ hour }}H {{ minute }}
                  </span>
                  </div>
                  <div
                   class="text-black tracking-wider leading-relaxed font-roboto text-xs"
                  >
                      En ligne
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class=" md:mx-2 w-full  ">
          <div class=" shadow-lg group container max-w-sm bg-white bg-center bg-cover bg-no-repeat bg-offshoring_2 w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
                <div class="w-full h-48"></div>
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-wider leading-relaxed font-roboto">
                    Hackathon Douala
                  </div>
                  <div
                   class="tracking-wider leading-relaxed font-roboto text-xs mt-2"
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
                    {{days}}/{{months}}/{{years}}  |  {{ hour }}H {{ minute }}
                  </span>
                  </div>
                  <div
                   class="text-black tracking-wider leading-relaxed font-roboto text-xs"
                  >
                      En ligne
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class=" md:mx-2 w-full  ">
          <div class=" shadow-lg group container max-w-sm bg-white bg-center bg-cover bg-no-repeat bg-offshoring_2 w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
                <div class="w-full h-48"></div>
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-wider leading-relaxed font-roboto">
                    Hackathon Douala
                  </div>
                  <div
                   class="tracking-wider leading-relaxed font-roboto text-xs mt-2"
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
                    {{days}}/{{months}}/{{years}}  |  {{ hour }}H {{ minute }}
                  </span>
                  </div>
                  <div
                   class="text-black tracking-wider leading-relaxed font-roboto text-xs"
                  >
                      En ligne
                  </div>
                </div>
              </div>
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
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ArrowLeft from "~/assets/images/icons/blog-arrow-left.svg";
import ArrowRight from "~/assets/images/icons/blog-arrow-right.svg";
export default {
  components: {
    VueSlickCarousel,
    ArrowLeft,
    ArrowRight,
  },
  data() { 
    return {
      days:"",
      months:"",
      years:"",
      hour: "",
      minute: "",
      settings:{
          dots: false,
          dotsClass:"articledots",
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 1,
          arrows:true,
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
              breakpoint: 600,
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
          ]
      },
    };
  }, 

created() {
    setInterval(this.getTime, 1000);
  },
  methods:{
        showNext() {
      this.$refs.carouselEvent.next();
    },
    showPrev() {
      this.$refs.carouselEvent.prev();
    },
    getTime: function () {
      var now = new Date();
      var days = now.getDay();
      var months = now.getMonth();
      var years = now.getFullYear();
      var hour = now.getHours();
      var minute = now.getMinutes();

      if (days.toString().length == 1) {
        days = "0" + days;
      }
      if (months.toString().length == 1) {
        months = "0" + months;
      }
      if (years.toString().length == 1) {
        years = "0" + years;
      }
      if (hour.toString().length == 1) {
        hour = "0" + hour;
      }
      if (minute.toString().length == 1) {
        minute = "0" + minute;
      }

      this.days = days;

if (this.days.toString().length == 1) this.days = "0" + this.days;      
if (this.months.toString().length == 1) this.months = "0" + this.months;      
if (this.years.toString().length == 1) this.years = "0" + this.years;      
if (this.hour.toString().length == 1) this.hour = "0" + this.hour;      
if (this.minute.toString().length == 1) this.minute = "0" + this.minute;      

      this.months = months;
      this.years = years;
      this.hour = hour;
      this.minute = minute;

    },
  },
};
</script>

<style scoped>
.bg-offshoring_2 {
  background-image: url("./../../../static/images/home/offer/offshoring2.png");
}
</style>



