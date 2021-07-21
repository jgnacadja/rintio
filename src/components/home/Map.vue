<template>
  <div class="bg-map bg-cover items-center w-full justify-center py-6 md:py-24">
    <div class="mx-4 md:mx-0 text-center mb-4 md:mb-10">
      <h2 class="text-2xl md:text-5xl font-extrabold text-primary capitalize">
        Nos <span class="text-secondary lowercase">implantations</span>
      </h2>
    </div>
    <div class="text-center">
      <h4 class="mx-4 md:w-1/2 my-3 text-sm md:mx-auto">
        Notre présence dans le monde.
      </h4>
    </div>

    <div
      class="md:flex hidden justify-center items-center w-full md:w-3/4 md:mx-auto"
    >
      <div class="py-4 md:mx-2 w-full md:w-1/3">
        <a
          href="https://goo.gl/maps/vBBTTGEydxDGfaXz7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="shadow-lg group container bg-white max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-map-cotonou"
          >
            <div class="w-full overflow-hidden">
              <div class="w-full h-40"></div>
              <div
                class="w-full relative justify-between flex px-4 py-4 bg-white"
              >
                <span class="tracking-wider leading-relaxed"
                  >Cotonou, Bénin
                </span>

                <span class="flex items-center text-sm">
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
                  {{ hour }}h:{{ minute }}m:{{ second }}s
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="py-4 md:mx-2 w-full md:w-1/3">
        <a
          href="https://goo.gl/maps/dtQk9dyzfcHwkpfLA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="shadow-lg group container bg-white max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-map-paris"
          >
            <div class="w-full overflow-hidden">
              <div class="w-full h-40"></div>
              <div
                class="w-full relative justify-between flex px-4 py-4 bg-white"
              >
                <span class="tracking-wider leading-relaxed"
                  >Paris, France
                </span>

                <span class="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
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
                  {{ hourFr }}h:{{ minute }}m:{{ second }}s
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="py-4 md:mx-2 w-full md:w-1/3">
        <div
          class="shadow-lg group container bg-white max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-map-abidjan"
        >
          <div class="w-full overflow-hidden">
            <div class="w-full h-40"></div>
            <div
              class="w-full relative justify-between flex px-4 py-4 bg-white"
            >
              <span class="tracking-wider leading-relaxed">
                Abidjan, Cote d’Ivoire
              </span>

              <span class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  alt="Abidjan"
                  title="Abidjan localisation"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ hourCi }}h:{{ minute }}m:{{ second }}s
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full p-10 md:hidden">
      <VueSlickCarousel v-bind="settings">
        <div class="py-4 md:mx-2 w-full h-full">
          <a
            href="https://goo.gl/maps/vBBTTGEydxDGfaXz7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="shadow-lg group container bg-white max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-map-cotonou"
            >
              <div class="w-full overflow-hidden">
                <div class="w-full h-40"></div>
                <div
                  class="w-full relative justify-between flex px-4 py-4 bg-white"
                >
                  <span class="tracking-wider leading-relaxed"
                    >Cotonou, Bénin <br /><br />
                  </span>

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
                    {{ hour }}h:{{ minute }}m:{{ second }}s
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="py-4 md:mx-2 w-full h-full">
          <a
            href="https://goo.gl/maps/dtQk9dyzfcHwkpfLA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="shadow-lg group container bg-white max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-map-paris"
            >
              <div class="w-full overflow-hidden">
                <div class="w-full h-40"></div>
                <div
                  class="w-full relative justify-between flex px-4 py-4 bg-white"
                >
                  <span class="tracking-wider leading-relaxed"
                    >Paris, France <br /><br />
                  </span>

                  <span class="flex items-start text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
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
                    {{ hourFr }}h:{{ minute }}m:{{ second }}s
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="py-4 md:mx-2 w-full h-full">
          <div
            class="shadow-lg group container bg-white max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-map-abidjan"
          >
            <div class="w-full overflow-hidden">
              <div class="w-full h-40"></div>
              <div
                class="w-full relative justify-between flex px-4 py-4 bg-white"
              >
                <span class="tracking-wider leading-relaxed">
                  Abidjan, Cote d’Ivoire
                </span>

                <span class="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    alt="Abidjan"
                    title="Abidjan localisation"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {{ hourCi }}h:{{ minute }}m:{{ second }}s
                </span>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Slider',
  components: { VueSlickCarousel },
  data() {
    return {
      hourFr: "",
      hourCi: "",
      hour: "",
      minute: "",
      second: "",
      settings: {
        autoplay: false,
        infinite: true,
        rows: 1,
        initialSlide: 1,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows:false,
        dots: true,
        dotsClass:'mappdots'
      },
    };
  },
  created() {
    setInterval(this.getTime, 1000);
  },
  methods: {
    getTime: function () {
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      if (hour.toString().length == 1) {
        hour = "0" + hour;
      }
      if (minute.toString().length == 1) {
        minute = "0" + minute;
      }
      if (second.toString().length == 1) {
        second = "0" + second;
      }

      this.hour = hour;
      this.hourFr = Number(hour) + 1;
      this.hourCi = Number(hour) - 1;

      if (this.hour.toString().length == 1) this.hour = "0" + this.hour;

      if (this.hourFr.toString().length == 1) this.hourFr = "0" + this.hourFr;

      if (this.hourCi.toString().length == 1) this.hourCi = "0" + this.hourCi;

      if (minute.toString().length == 1) minute = "0" + minute;

      if (second.toString().length == 1) second = "0" + second;

      this.minute = minute;
      this.second = second;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
.bg-map {
  background-image: url("./../../../static/images/home/map.png");
}

.bg-map-cotonou {
  background-image: url("./../../../static/images/home/map/cotonou.png");
}

.bg-map-paris {
  background-image: url("./../../../static/images/home/map/paris.png");
}

.bg-map-abidjan {
  background-image: url("./../../../static/images/home/map/abidjan.png");
}

@media (min-width: 768px) {
  .slick-slider {
    display: none;
  }
}

</style>
