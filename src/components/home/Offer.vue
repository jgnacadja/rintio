<template>
  <div class="bg-offer md:px-20 md:flex w-full justify-center md:py-24">
    <div class="w-full md:w-1/4 mb-8 md:mb-0" >
      <div class="mx-4 md:mx-0">
        <h1 class="mb-3 text-sm font-semibold uppercase text-primary">
          Nos offres
        </h1>
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
        <h1
          class="my-3 text-xl md:text-5xl font-extrabold capitalize text-primary"
        >
          Prestation<br />
          <span class="text-secondary capitalize">client</span>
        </h1>

        <p class="my-3 text-2xl">
          Les solutions que nous proposons à nos précieux clients. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut.
        </p>
        <div class="mt-4 text-center">
          <button
            type="submit"
            class="px-6 py-2 md:py-4 flex text-white text-sm bg-secondary rounded-sm focus:bg-secondary focus:outline-none uppercase"
          >
            Tout consulter
          </button>
        </div>
      </div>
    </div>

    <div class="w-full md:w-3/4 flex-row flex-wrap flex">
      <div class="w-full md:flex md:space-x-6 space-y-6 md:space-y-0">
        <div class="w-full md:w-2/3">
          <div
            class="shadow-lg group container bg-white w-full bg-center bg-cover bg-no-repeat bg-offshoring h-full xs:mx-auto sm:mx-auto"
          >
            <div class="w-full overflow-hidden md:h-full">
              <div class="w-full h-40 md:h-full"></div>
              <div class="w-full relative px-4 pb-4 md:-mt-24">
                <div
                  class="text-white font-extrabold tracking-wider leading-relaxed font-sans"
                >
                  Offshoring
                </div>

                <div
                  class="text-white font-bold tracking-wider leading-relaxed font-sans text-xs"
                >
                  Concentrez vous sur votre cœur d’activité.
                </div>

                <div
                  class="text-white tracking-wider leading-relaxed font-sans text-xs flex flex-row justify-between"
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

        <div class="w-full md:w-1/3 space-y-6">
          <div
            class="shadow-lg group container bg-white max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-offshoring_2"
          >
            <div class="w-full overflow-hidden">
              <div class="w-full h-40"></div>
              <div class="w-full relative px-4 pb-4">
                <div
                  class="text-white font-extrabold tracking-wider leading-relaxed font-sans"
                >
                  Offshoring
                </div>

                <div
                  class="text-white font-bold tracking-wider leading-relaxed font-sans text-xs"
                >
                  Un développeur à partir de 50€ / Jour
                </div>

                <div
                  class="text-white tracking-wider leading-relaxed font-sans text-xs"
                >
                  #Python #Java #Php. 1 mois offert.
                </div>
              </div>
            </div>
          </div>

          <div
            class="shadow-lg group container bg-white max-w-sm mx-auto bg-center bg-cover bg-no-repeat bg-datalab"
          >
            <div class="w-full overflow-hidden">
              <div class="w-full h-40"></div>
              <div class="w-full relative px-4 pb-4">
                <div
                  class="text-white font-extrabold tracking-wider leading-relaxed font-sans"
                >
                  Data Lab
                </div>

                <div
                  class="text-white tracking-wider leading-relaxed font-sans text-xs"
                >
                  Accélérez votre croissance en exploitant pleinement
                  lepotentiel de vos données.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
</style>
