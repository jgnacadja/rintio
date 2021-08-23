<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

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
            Les <span class="font-bold">services</span> que nous proposons sont destinés aux <span class="font-bold">petites, 
            moyennes et grandes entreprises</span>  et <span class="font-bold">organismes publics</span>  qui cherchent 
            un cadre souple et économique pour mettre la <span class="font-bold">technologie</span> au 
            service de leur efficacité et de la satisfaction de leurs clients. 
            Nous veillons à ce que le développement de nos clients soit durable 
            au sein de leur écosystème. C'est l'un de nos engagements prioritaires.
             
          </p>
        </div>
      </div>
    </div>

    <LazyHydrate when-visible>
      <Services />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Experts />
    </LazyHydrate>

    <LazyHydrate when-idle>
      <Stats />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Team />
    </LazyHydrate>
  </Layout>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import About from "~/components/home/About.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";
import Services from "~/components/about/Services.vue";
import Experts from "~/components/about/Experts.vue";
import Stats from "~/components/about/Stats.vue";
import Team from "~/components/about/Team.vue";
import Keywords from "~/assets/keywords.json";

export default {
  components: {
    LazyHydrate,
    About,
    Breadcrumb,
    Services,
    Experts,
    Stats,
    Team,
  },
  metaInfo() {
    return {
      title: "A propos",
      meta: [
        {
          key: "description",
          name: "description",
          content: "Entreprise spécialisée dans la mise en oeuvre de solutions informatiques et en intelligence Artificielle en Afrique et dans le Monde",
        },
        {
          key: "keywords",
          name: "keywords",
          content: Keywords.list,
        },
      ],
    };
  },

  data() {
    return {
      path: "",
      config: {
        keywords: ['service','numérique','cloud','Devops','offshoring',
        'nearingShore','Afrique','informatique','IT','webservice',
        'Big data','IA','intelligence','Application','python',
        'cluster','java','E-learning'
        ],
      },
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.slice(1).replace("-", " ");
  },
};
</script>

