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
        md:block
      "
    >
      <div class="relative">
        <g-image
          class="absolute -top-12 left-0"
          src="~/assets/images/home/about/about.png"
          alt="Workplace"
          Title="About"
          width="600"
        />

        <g-image
          class="absolute -top-12 p-20"
          src="~/assets/images/home/about/team.webp"
          alt="team"
          title="team"
          width="600"
        />
      </div>
    </div>
    <div class="w-full md:w-1/2 mb-8 md:mb-0 mt-96 md:mt-0">
      <div class="mx-4 md:mx-0">
        <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
          Qui sommes-nous ?
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
        <h2
          class="
            my-3
            text-2xl
            md:text-5xl
            font-extrabold
            text-primary
          "
        >
          Entreprise de prestation de <br class="hidden md:block" />
          services
          <span class="text-secondary">numérique</span>
        </h2>


        <p class="my-3 font-light text-justify leading-8">
          Le <span class="font-bold">numérique</span> est devenu aujourd'hui un outil incontournable dans 
          l'organisation, la gestion et la rentabilité des entreprises. 
          Quelque soit le domaine d'intervention, Il facilite le fonctionnement  
          les différents secteurs et peut également s'adapter aux spécificités 
          de chaque entreprise ou institution. RINTIO vous aide à atteindre 
          vos objectifs grâce à la création d'<span class="font-bold">outils informatiques performants</span> . 
          Il solutionne tous vos problèmes liés à l’<span class="font-bold">analyse</span> et le <span class="font-bold">traitement 
          de données</span> volumineuses. Composée d'une équipe dynamique et spécialisée, 
          RINTIO est une entreprise qui intervient entre autre dans le <span class="font-bold">développement </span> 
          et l'intégration de <span class="font-bold">solutions numériques</span>  de <span class="font-bold">traitement données</span> , 
          de <span class="font-bold">technologies </span> 
          Big Data et d'<span class="font-bold">intelligence artificielle</span> . Où que vous soyez, RINTIO est disposé 
          à vous servir et à donner pour vous satisfaire, le meilleur d'elle même.
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
  background-image: url("./../../../static/images/home/about/team.webp");
}
</style>