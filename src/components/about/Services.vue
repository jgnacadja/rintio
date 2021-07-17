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
            <h2 class="py-2 text-white"> Data science & IA  </h2>
            <p class="text-justify leading-8 text-white text-ellipsis--2">
              L’exploitation des données internes et externes à l’entreprise est clairement d’actualité. Rintio, entreprise du numérique est conscient du vrai potentiel qu’offrent ces données pour l’aide à la prise de décision. Pour cela, de nombreuses expressions sont employées pour mentionner la collecte et l’analyse de ces données : 
              Big Data, DataScience ou encore Business Intelligence.
              <span class="font-bold"
                ></span
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
              Formation
            </h2>
            <p class="text-justify leading-8 group-hover:text-white text-ellipsis--2">
              Nous avions pour ambition de renforcer la capacité des jeunes en Afrique dans les technologies de l'information ( Formation Big Data, Intelligence Artificielle, Java, Python, Développement d’API).etc...
              <span class="font-bold">
              
                </span
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
            <p class="text-justify leading-8 group-hover:text-white text-ellipsis--2">
              La performance de nos produits se base sur la maîtrise des technologies et méthodes tels que : API &amp; Micro-service, Big Data, IA, Robot Informatique, IOT, Dataviz, Devops, cloud, scrum, etc..
              <span class="font-bold"
                ></span
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
            <p class="text-justify leading-8 group-hover:text-white text-ellipsis--2">
              Rintio utilise cette nouvelle méthode et technologie pour l’intégration et le développement de ses applications et services. Il a également validé de puissants et nombreux algorithmes et processus lui permettant de répondre aux exigences de son métier.La plupart de ces fonctions est déjà disponible comme service et est particulièrement stable. 
              Il suffit d’exposer ces fonctions au travers d’API pour qu’elles puissent interagir avec de nouveaux micro-services.
              <span class="font-bold"
                ></span
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
            <p class="text-justify leading-8 group-hover:text-white text-ellipsis--2">
              DevOps est un ensemble de pratiques qui automatisent les processus entre les équipes de développement et 
              IT afin de leur permettre de développer, tester et livrer des logiciels plus rapidement et avec plus de fiabilité. 
              Le concept de DevOps repose sur la mise en place d'une culture de la collaboration entre les équipes qui étaient, historiquement, cloisonnées.
              <span class="font-bold"
                ></span
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
            <p class="text-justify leading-8 group-hover:text-white text-ellipsis--2">
              Pour rappel Scrum est une méthode agile dédiée à la « gestion de projet ». Cette méthode de gestion, ou plutôt ce Framework de management de projet, utilisé à Rintio dans l'intégration des applications mises en place et à pour objectif d’améliorer la productivité de son équipe. 
              Le framework s'appuie sur le découpage d'un projet en boîtes de temps, nommées « sprints ». 
              <span class="font-bold"
                ></span
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
.text-ellipsis--2{
  text-overflow:ellipsis;
  overflow:hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>
