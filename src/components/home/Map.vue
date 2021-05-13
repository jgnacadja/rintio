<template>
  <div
    class="bg-map bg-cover md:h-screen items-center w-full justify-center py-6 md:py-24"
  >
    <div class="mx-4 md:mx-0 md:text-center mb-4 md:mb-10">
      <h1 class="text-xl md:text-7xl font-extrabold text-primary capitalize">
        Nos implantations
      </h1>
    </div>
    <div class="text-center">
      <p class="mx-4 md:w-1/2 my-3 text-sm md:mx-auto">
        Rintio est une entreprise de services du numérique. Nous sommes
        spécialisées dans le
        <span class="font-bold"
          >développement et l’intégration de solutions informatiques..</span
        >
      </p>
    </div>

    <div class="hidden md:flex justify-center items-center w-3/4 mx-auto">
      <div class="py-4 mx-4 w-full md:w-1/3">
        <div
          class="shadow-lg group container bg-white max-w-sm mx-auto content-div"
        >
          <div class="w-full overflow-hidden">
            <div class="w-full h-40"></div>
            <div
              class="w-full relative left-6 transform transition duration-500 translate-y-20 group-hover:-translate-y-4"
            >
              <span
                class="font-extrabold text-white tracking-wider leading-relaxed font-sans"
                >Cotonou, Bénin
              </span>
            </div>
            <div
              class="py-6 px-6 bg-white transform transition duration-500 translate-y-28 group-hover:translate-y-0"
            >
              <span class="block text-gray-600 text-sm"> 18:00, GMT+1 </span>

              <span class="block text-gray-600 text-sm">
                contact@rintio.com , +229 97 11 94 79
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4 mx-4 w-full md:w-1/3">
        <div
          class="shadow-lg group container bg-white max-w-sm mx-auto content-div"
        >
          <div class="w-full overflow-hidden">
            <div class="w-full h-40"></div>
            <div
              class="w-full relative left-6 transform transition duration-500 translate-y-20 group-hover:-translate-y-4"
            >
              <span
                class="font-extrabold text-white tracking-wider leading-relaxed font-sans"
                >Paris, France
              </span>
            </div>
            <div
              class="py-6 px-6 bg-white transform transition duration-500 translate-y-28 group-hover:translate-y-0"
            >
              <span class="block text-gray-600 text-sm"> 18:00, GMT+1 </span>

              <span class="block text-gray-600 text-sm">
                contact@rintio.com , +33 6 25 18 40 11
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4 mx-4 w-full md:w-1/3">
        <div
          class="shadow-lg group container bg-white max-w-sm mx-auto content-div"
        >
          <div class="w-full overflow-hidden">
            <div class="w-full h-40"></div>
            <div
              class="w-full relative left-6 transform transition duration-500 translate-y-20 group-hover:-translate-y-4"
            >
              <span
                class="font-extrabold text-white tracking-wider leading-relaxed font-sans"
                >Abidjan, Cote d’Ivoire
              </span>
            </div>
            <div
              class="py-6 px-6 bg-white transform transition duration-500 translate-y-28 group-hover:translate-y-0"
            >
              <span class="block text-gray-600 text-sm"> 18:00, GMT+1 </span>

              <span class="block text-gray-600 text-sm">
                contact@rintio.com , +225 58 08 74 21
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.bg-map {
  background-image: url("./../../../static/images/home/map.png");
}
.content-div {
  background-image: url("https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
