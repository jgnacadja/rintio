<template>
  <div
    class="
      grid grid-cols-6
      md:grid-cols-4
      lg:grid-cols-3
      gap-4
      md:grid-flow-row
      lg:grid-flow-rows
      bg-offer
      py-8
      px-4
      xl:px-12
      xl:py-16
        2xl:px-32
      2xl:py-24
    "
  >
    <div
      class="
        row-span-4
        col-span-6
        md:row-span-6
        md:col-span-4
        lg:col-span-1
        lg:row-span-2
        w-full
        h-full
      "
    >
      <div class="">
        <div class="">
          <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
            Nos offres
          </h3>
          <!-- Title Dot -->
          <div class="-mt-3">
            <span
              class="inline-block w-20 h-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
            ></span>
            <span
              class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
            ></span>
          </div>
        </div>
        <div class="pt-6">
          <h2 class="my-3 text-2xl md:text-5xl font-extrabold text-primary">
            Prestation<br />
            <span class="text-secondary">client</span>
          </h2>

          <p class="my-3 font-light">
            Les solutions que nous proposons à nos précieux clients. Découvrez
            nos offres qui accéléront certainement votre productivité.
          </p>
          <div class="mt-4 text-center">
            <g-link to="/offres">
              <button
                type="submit"
                class="
                  px-6
                  py-2
                  md:py-4
                  flex
                  text-white text-sm
                  bg-secondary
                  rounded-sm
                  hover:bg-primary
                  uppercase
                "
              >
                Tout consulter
              </button>
            </g-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        col-span-6
        md:col-span-2
        row-span-2
        md:row-span-2
        lg:col-span-1
        lg:row-span-2
        w-full
        h-full
      "
    >
      <div
        class="
          shadow-lg
          group
          bg-center bg-cover bg-no-repeat bg-offshoring
          h-80
          md:h-full
          relative
        "
      >
        <div class="absolute bottom-4 px-4">
          <div
            class="
              text-white
              font-extrabold
              tracking-wider
              leading-relaxed
              font-roboto
              2xl:text-4xl
            "
          >
            Offshoring
          </div>

          <div class="text-white font-bold leading-relaxed font-roboto text-xs 2xl:text-xl">
            Concentrez vous sur votre cœur d’activité.
          </div>

          <div
            class="
              text-white
              tracking-wider
              leading-relaxed
              text-xs
              2xl:text-lg
              justify-between
            "
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
    <div
      class="
        col-span-6
        md:col-span-2
        row-span-2
        md:row-span-1
        lg:col-span-1
        lg:row-span-1
        w-full
        h-full
      "
    >
      <div
        class="
          shadow-lg
          group
          bg-white bg-center bg-cover bg-no-repeat
          bg-offshoring_2
        "
      >
        <div class="w-full">
          <div class="w-full h-40"></div>
          <div class="w-full relative px-4 pb-4">
            <div
              class="
                text-white
                font-extrabold
                tracking-wider
                leading-relaxed
                font-roboto
              "
            >
              Offshoring
            </div>

            <div
              class="
                text-white
                font-bold
                tracking-wider
                leading-relaxed
                font-roboto
                text-xs
              "
            >
              Un développeur à partir de 50€ / Jour
            </div>

            <div class="text-white tracking-wider leading-relaxed text-xs">
              #Python #Java #Php. 1 mois offert.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        col-span-6
        md:col-span-2
        row-span-2
        md:row-span-1
        lg:col-span-1
        lg:row-span-1
      "
    >
      <div
        class="
          shadow-lg
          group
          bg-white bg-center bg-cover bg-no-repeat bg-datalab
        "
      >
        <div class="w-full">
          <div class="w-full h-40"></div>
          <div class="w-full relative px-4 pb-4">
            <div class="text-white font-extrabold leading-relaxed font-roboto">
              Data Lab
            </div>

            <div class="text-white tracking-wider leading-relaxed text-xs">
              Accélérez votre croissance en exploitant pleinement lepotentiel de
              vos données.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
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
