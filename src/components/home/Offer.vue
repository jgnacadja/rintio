<template>
  <div
    class="bg-offer mt-0 md:mt-14 md:px-10 lg:px-20 md:flex w-full justify-center md:py-24 md:space-x-4"
  >
    <div class="w-full md:w-1/4 mb-8 md:mb-0">
      <div class="mx-4 md:mx-0">
        <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
          Nos offres
        </h3>
        <!-- Title Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
        </div>
      </div>
      <div class="mx-4 md:mx-0 pt-6">
        <h2 class="my-3 text-2xl md:text-5xl font-extrabold text-primary">
          Prestation<br />
          <span class="text-secondary">client</span>
        </h2>

        <p class="my-3 font-light">
          Les solutions que nous proposons à nos précieux clients. Découvrez nos
          offres qui accéléront certainement votre productivité.
        </p>
        <div class="mt-4 text-center">
          <g-link to="/offres">
            <button
              type="submit"
              class="px-6 py-2 md:py-4 flex text-white text-sm bg-secondary rounded-sm hover:bg-primary uppercase"
            >
              Tout consulter
            </button>
          </g-link>
        </div>
      </div>
    </div>

    <div class="w-full md:w-3/4 flex-row flex-wrap flex px-3">
      <div
        class="w-full md:flex md:space-x-6 space-y-6 md:space-y-0"
        v-observe-visibility="{
          callback: animate,
          once: true,
          throttle: 300,
        }"
      >
        <transition name="slide-in-up">
          <div class="w-full md:w-2/3" v-if="show">
            <div
              class="shadow-lg group container bg-white w-full bg-center bg-cover bg-no-repeat bg-offshoring h-full xs:mx-auto sm:mx-auto"
            >
              <div class="w-full overflow-hidden md:h-full">
                <div class="w-full h-40 md:h-full"></div>
                <div class="w-full relative px-4 pb-4 md:-mt-24">
                  <div
                    class="text-white font-extrabold tracking-wider leading-relaxed font-roboto"
                  >
                    Offshoring
                  </div>

                  <div
                    class="text-white font-bold tracking-wider leading-relaxed font-roboto text-xs"
                  >
                    Concentrez vous sur votre cœur d’activité.
                  </div>

                  <div
                    class="text-white tracking-wider leading-relaxed text-xs flex flex-row justify-between"
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

        <div class="w-full md:w-1/3 space-y-6">
          <transition name="slide-in-up">
            <div
              class="shadow-lg group container bg-white w-full md:max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-offshoring_2"
              v-if="show"
            >
              <div class="w-full overflow-hidden">
                <div class="w-full h-40"></div>
                <div class="w-full relative px-4 pb-4">
                  <div
                    class="text-white font-extrabold tracking-wider leading-relaxed font-roboto"
                  >
                    Offshoring
                  </div>

                  <div
                    class="text-white font-bold tracking-wider leading-relaxed font-roboto text-xs"
                  >
                    Un développeur à partir de 50€ / Jour
                  </div>

                  <div
                    class="text-white tracking-wider leading-relaxed text-xs"
                  >
                    #Python #Java #Php. 1 mois offert.
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <transition name="slide-in-up">
            <div
              class="shadow-lg group container bg-white w-full md:max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-datalab"
              v-if="show"
            >
              <div class="w-full overflow-hidden">
                <div class="w-full h-40"></div>
                <div class="w-full relative px-4 pb-4">
                  <div
                    class="text-white font-extrabold tracking-wider leading-relaxed font-roboto"
                  >
                    Data Lab
                  </div>

                  <div
                    class="text-white tracking-wider leading-relaxed text-xs"
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
