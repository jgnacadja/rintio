<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

    <div class="items-center w-full justify-center py-6">
      <div class="text-center mx-4 sm:mx-4 lg:mx-32 xl:mx-64">
        <h1 class="my-3 text-2xl lg:text-5xl font-extrabold text-primary">
          Nous offrons des solutions professionnelles pour les entreprises
        </h1>
        <p class="md:w-2/3 mx-auto py-4 md:px-0">
          Rintio apporte des solutions innovantes aux entreprises et
          institutions en communiquant les technologies du numérique aux grands
          enjeux de nos sociétés.
        </p>
      </div>
    </div>

    <LazyHydrate when-visible>
      <Offers />
    </LazyHydrate>
    

    <div class="bg-gray-100 h-full bg-center bg-no-repeat bg-cover mt-24  3xl:px-64 py-12">
      <div
        class="
          grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:grid-flow-row xl:grid-flow-rows
        "
      >
        <div class="col-span-3 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1 items-center justify-center mx-auto my-auto">
          <g-image src="~/assets/images/project.png" class="" />
        </div>
        <div class="col-span-3 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1  ">
          <div class=" xl:px-24 pr-8">
            <div class="mx-4 md:mx-0 lg:pt-6">
              <h2
                class="
                  my-3
                  text-2xl
                  md:text-5xl
                  font-extrabold
                  text-primary
                  mx-auto
                  pr-6
                  mb-4
                "
              >
                Donnez vie à vos
                <span class="text-secondary">projets</span>
              </h2>

              <p class="my-8 font-light text-justify leading-10">
                Rintio est une entreprise de services du numérique. Nous sommes
                spécialisées dans le
                <span class="font-bold"
                  >développement et l’intégration de solutions
                  informatiques</span
                >, le <span class="font-bold">traitement de données</span>, les
                technologies <span class="font-bold">Big Data</span> et l’<span
                  class="font-bold"
                  >Intelligence Artificielle</span
                >. Nous proposons, entre autres, des prestations en Offshoring
                (<span class="font-bold"
                  >Coding, Admin Infrastructure & Cloud, DevOps</span
                >) pour nos clients en afrique et dans le monde.
              </p>
              <div class="mt-4">
                <g-link to="/a-propos">
                  <button
                    v-if="!about"
                    type="submit"
                    class="
                      px-10
                      py-4
                      md:py-6
                      text-white text-sm
                      bg-secondary
                      rounded-sm
                      font-bold
                      hover:bg-primary
                      focus:outline-none
                      uppercase
                    "
                  >
                    Débuter un projet
                  </button>
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </Layout>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Breadcrumb from "~/components/Breadcrumb.vue";
import Offers from "~/components/offer/Offers.vue";
import Keywords from "~/assets/keywords.json";
//import Project from "~/assets/images/project-start.svg";
import Project from "~/assets/images/project.png";

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    Offers,
    Project,
  },
  metaInfo() {
    return {
      title: "Nos offres",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Entreprise spécialisée dans la mise en oeuvre de solutions informatiques et en intelligence Artificielle en Afrique et dans le Monde",
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
        keywords: [
          "service",
          "numérique",
          "cloud",
          "Devops",
          "offshoring",
          "nearingShore",
          "Afrique",
          "informatique",
          "IT",
          "webservice",
          "Big data",
          "IA",
          "intelligence",
          "Application",
          "python",
          "cluster",
          "java",
          "E-learning",
        ],
      },
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.slice(1).replace("-", " ");
  },
};
</script>

<style scoped>
.bg-offer {
  background-image: url("./../../static/images/bg-offer-2.png");
}
</style>