<template>
  <div class="bg-services md:px-20 md:flex w-full justify-center py-6 md:py-24">
    <div class="w-full mx-auto mb-8 md:mb-0">
      <div class="mx-4 md:mx-0 text-center">
        <h1
          class="pb-8 text-xl md:text-5xl font-extrabold capitalize text-primary"
        >
          Notre Expertise
          <span class="text-secondary"> d’interventions</span>
        </h1>
      </div>
      <div class="md:block flex-row flex-wrap space-y-10 md:space-y-10 mx-4 md:mx-0 pt-6">
        <div class="md:flex md:space-x-10 space-y-6 md:space-y-0 md:h-96">
          <div class="bg-primary md:w-1/3 text-center py-4 px-6">
            <Data class="w-20 mx-auto" />
            <h2 class="py-2 text-white">Big data & Data science</h2>
            <p class="text-justify leading-8 text-white">
              Rintio est une entreprise de services du numérique. Nous sommes
              spécialisées dans le
              <span class="font-bold"
                >développement et l’intégration de solutions.</span
              >
            </p>
          </div>
          <div
            class="bg-white md:w-1/3 text-center py-4 px-6 cursor-pointer group hover:bg-primary"
            @mouseover="IaHover = true"
            @mouseleave="IaHover = false"
          >
            <Ia class="w-20 mx-auto" v-if="!IaHover" />
            <Ia2 class="w-20 mx-auto" v-if="IaHover" />

            <h2 class="py-2 text-primary group-hover:text-white">
              Intelligence artificielle
            </h2>
            <p class="text-justify leading-8 group-hover:text-white">
              Rintio est une entreprise de services du numérique. Nous sommes
              spécialisées dans le
              <span class="font-bold"
                >développement et l’intégration de solutions.</span
              >
            </p>
          </div>
          <div
            class="bg-white md:w-1/3 text-center py-4 px-6 cursor-pointer group hover:bg-primary"
            @mouseover="CodeHover = true"
            @mouseleave="CodeHover = false"
          >
            <Code class="w-20 mx-auto" v-if="!CodeHover" />
            <Code2 class="w-20 mx-auto" v-if="CodeHover" />
            <h2 class="py-2 text-primary group-hover:text-white">
              Developpement
            </h2>
            <p class="text-justify leading-8 group-hover:text-white">
              Rintio est une entreprise de services du numérique. Nous sommes
              spécialisées dans le
              <span class="font-bold"
                >développement et l’intégration de solutions.</span
              >
            </p>
          </div>
        </div>
        <div class="md:flex md:space-x-10 space-y-6 md:space-y-0 md:h-96">
          <div
            class="bg-white md:w-1/3 text-center py-4 px-6 cursor-pointer group hover:bg-primary"
            @mouseover="ApiHover = true"
            @mouseleave="ApiHover = false"
          >
            <Api class="w-20 mx-auto" v-if="!ApiHover" />
            <Api2 class="w-20 mx-auto" v-if="ApiHover" />
            <h2 class="py-2 text-primary group-hover:text-white">
              API & Microservices
            </h2>
            <p class="text-justify leading-8 group-hover:text-white">
              Rintio est une entreprise de services du numérique. Nous sommes
              spécialisées dans le
              <span class="font-bold"
                >développement et l’intégration de solutions.</span
              >
            </p>
          </div>
          <div
            class="bg-white md:w-1/3 text-center py-4 px-6 cursor-pointer group hover:bg-primary"
            @mouseover="CloudHover = true"
            @mouseleave="CloudHover = false"
          >
            <Cloud class="w-20 mx-auto" v-if="!CloudHover" />
            <Cloud2 class="w-20 mx-auto" v-if="CloudHover" />
            <h2 class="py-2 text-primary group-hover:text-white">
              Cloud & Devops
            </h2>
            <p class="text-justify leading-8 group-hover:text-white">
              Rintio est une entreprise de services du numérique. Nous sommes
              spécialisées dans le
              <span class="font-bold"
                >développement et l’intégration de solutions.</span
              >
            </p>
          </div>
          <div
            class="bg-white md:w-1/3 text-center py-4 px-6 cursor-pointer group hover:bg-primary"
            @mouseover="PilotHover = true"
            @mouseleave="PilotHover = false"
          >
            <Pilot class="w-20 mx-auto" v-if="!PilotHover" />
            <Pilot2 class="w-20 mx-auto" v-if="PilotHover" />
            <h2 class="font-bold py-2 text-primary group-hover:text-white">
              Pilotage
            </h2>
            <p class="text-justify leading-8 group-hover:text-white">
              Rintio est une entreprise de services du numérique. Nous sommes
              spécialisées dans le
              <span class="font-bold"
                >développement et l’intégration de solutions.</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "~/assets/images/icons/data.svg";
import Ia from "~/assets/images/icons/ia.svg";
import Ia2 from "~/assets/images/icons/ia-2.svg";
import Code from "~/assets/images/icons/code.svg";
import Code2 from "~/assets/images/icons/code-2.svg";
import Api from "~/assets/images/icons/api.svg";
import Api2 from "~/assets/images/icons/api-2.svg";
import Cloud from "~/assets/images/icons/cloud.svg";
import Cloud2 from "~/assets/images/icons/cloud-2.svg";
import Pilot from "~/assets/images/icons/pilot.svg";
import Pilot2 from "~/assets/images/icons/pilot-2.svg";

export default {
  components: {
    Data,
    Ia,
    Ia2,
    Code,
    Code2,
    Api,
    Api2,
    Cloud,
    Cloud2,
    Pilot,
    Pilot2,
  },
  data() {
    return {
      IaHover: false,
      CodeHover: false,
      ApiHover: false,
      CloudHover: false,
      PilotHover: false,
    };
  },
};
</script>

<style scoped>
.bg-services {
  background-image: url("./../../../static/images/home/offer.png");
}
</style>
