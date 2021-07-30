<template>
  <div
    class="justify-center w-full mt-0  bg-offer md:mt-14 md:px-8 md:flex md:py-24 md:space-x-0 md:flex-col lg:flex-row"
  >
    <div class="w-full mb-8 lg:w-1/4 md:w-full md:mb-8 lg:mb-0">
      <div class="mx-4 md:mx-3">
        <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
          Nos offres
        </h3>
        <!-- Title Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
          <span
            class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
          ></span>
          <span
            class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
          ></span>
        </div>
      </div>
      <div class="pt-6 mx-4 md:mx-0">
        <h2 class="my-3 text-2xl font-extrabold md:text-5xl text-primary">
          Prestation<br />
          <span class="text-secondary">client</span>
        </h2>

        <p class="my-3 font-light ">
          Les solutions que nous proposons à nos précieux clients. Découvrez nos
          offres qui accéléront certainement votre productivité.
        </p>
        <div class="mt-4 text-center">
          <g-link to="/offres">
            <button
              type="submit"
              class="flex px-6 py-2 text-sm text-white uppercase rounded-sm md:py-4 bg-secondary hover:bg-primary"
            >
              Tout consulter
            </button>
          </g-link>
        </div>
      </div>
    </div>

    <div class="w-full px-1 md:flex-shrink-0 lg:w-2/3 md:px-0 lg:px-2">
      <div
        class="flex-row w-full space-y-6 md:flex md:space-x-4 md:space-y-0"
        v-observe-visibility="{
          callback: animate,
          once: true,
          throttle: 300,
        }"
      >
        <transition name="slide-in-up">
          <div class="w-full lg:flex-shrink-0 lg:w-1/2" v-if="show">
            <div
              class="container w-full h-full bg-white bg-center bg-no-repeat bg-cover shadow-lg group bg-offshoring xs:mx-auto sm:mx-auto"
            >
              <div class="w-full overflow-hidden md:h-full">
                <div class="w-full h-40 md:h-full"></div>
                <div class="relative w-full px-4 pb-4 md:-mt-24">
                  <div
                    class="font-extrabold leading-relaxed tracking-wider text-white font-roboto"
                  >
                    Offshoring
                  </div>

                  <div
                    class="text-xs font-bold leading-relaxed tracking-wider text-white font-roboto"
                  >
                    Concentrez vous sur votre cœur d’activité.
                  </div>

                  <div
                    class="flex flex-row justify-between text-xs leading-relaxed tracking-wider text-white"
                  >
                    <div>
                      • Dev. Python Java Php <br />
                      • Admin. cloud & Infra
                    </div>

                    <div>
                      • Migration Cloud <br />
                      • DevOps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div class="w-full space-y-4 md:w-3/4 lg:space-x-0">
          <transition name="slide-in-up">
            <div
              class="container bg-white bg-center bg-no-repeat bg-cover shadow-lg  group lg:max-w-sm md:mx-auto lg:mx-px bg-offshoring_2"
              v-if="show"
            >
              <div class="w-full overflow-hidden">
                <div class="w-full h-40"></div>
                <div class="relative w-full px-4 pb-4">
                  <div
                    class="font-extrabold leading-relaxed tracking-wider text-white font-roboto"
                  >
                    Offshoring
                  </div>

                  <div
                    class="text-xs font-bold leading-relaxed tracking-wider text-white font-roboto"
                  >
                    Un développeur à partir de 50€ / Jour
                  </div>

                  <div
                    class="text-xs leading-relaxed tracking-wider text-white"
                  >
                    #Python #Java #Php. 1 mois offert.
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <transition name="slide-in-up">
            <div
              class="container mx-auto bg-white bg-center bg-no-repeat bg-cover shadow-lg  group lg:max-w-sm bg-datalab"
              v-if="show"
            >
              <div class="w-full overflow-hidden">
                <div class="w-full h-40"></div>
                <div class="relative w-full px-4 pb-4">
                  <div
                    class="font-extrabold leading-relaxed tracking-wider text-white font-roboto"
                  >
                    Data Lab
                  </div>

                  <div
                    class="text-xs leading-relaxed tracking-wider text-white"
                  >
                    Accélérez votre croissance en exploitant pleinement
                    lepotentiel de vos données.
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    animate: function (isVisble, entry) {
      if (entry.isIntersecting) {
        this.show = true;
      }
    },
  },
};
</script>

<style scoped>
.bg-offer {
  background-image: url("./../../../static/images/home/offer.png");
}

.bg-offshoring {
  background-image: url("./../../../static/images/home/offer/offshoring.png");
}

.bg-offshoring_2 {
  background-image: url("./../../../static/images/home/offer/offshoring2.png");
}

.bg-datalab {
  background-image: url("./../../../static/images/home/offer/datalab.png");
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
