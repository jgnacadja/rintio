<template>
  <div
    class="
      bg-offer
      md:px-16
      md:flex
      w-full
      justify-center
      py-6
      md:py-24
      md:space-x-6
      mt-20
      md:mt-0
    "
  >
    <div
      class="
        w-full
        md:w-1/2
        items-center
        justify-center
        mx-auto
        hidden
        md:block
      "
    >
      <div class="relative">
        <g-image
          class="absolute -top-12 left-0"
          src="~/assets/images/home/about/about.png"
          alt="Workplace"
          width="600"
        />

        <g-image
          class="absolute -top-12 p-20"
          src="~/assets/images/home/about/team.png"
          width="600"
        />
      </div>
    </div>

    <div class="w-full md:w-1/2 mb-8 md:mb-0">
      <div class="mx-4 md:mx-0">
        <h1 class="mb-3 text-sm font-semibold uppercase text-primary">
          Qui sommes-nous ?
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
          class="
            my-3
            text-xl
            md:text-5xl
            font-extrabold
            text-primary
          "
        >
          Entreprise de <br class="hidden md:block" />
          services du
          <span class="text-secondary">numérique</span>
        </h1>

        <p class="my-3 text-justify leading-8">
          Rintio est une entreprise de services du numérique. Nous sommes
          spécialisées dans le
          <span class="font-bold"
            >développement et l’intégration de solutions informatiques</span
          >, le <span class="font-bold">traitement de données</span>, les
          technologies <span class="font-bold">Big Data</span> et l’<span
            class="font-bold"
            >Intelligence Artificielle</span
          >. Nous proposons, entre autres, des prestations en Offshoring (<span
            class="font-bold"
            >Coding, Admin Infrastructure & Cloud, DevOps</span
          >) pour nos clients en afrique et dans le monde.
        </p>
        <div class="mt-4">
          <g-link to="/a-propos">
            <button
              v-if="!about"
              type="submit"
              class="
                px-6
                py-2
                md:py-4
                text-white text-sm
                bg-secondary
                rounded-sm
                hover:bg-primary
                focus:outline-none
                uppercase
              "
            >
              En savoir plus
            </button>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: "",
    };
  },
  mounted() {
    this.about = this.$router.currentRoute.path.includes("a-propos");
  },
};
</script>

<style scoped>
.bg-about {
  background-image: url("./../../../static/images/home/about/about.png");
}

.bg-about-team {
  background-image: url("./../../../static/images/home/about/team.png");
}
</style>