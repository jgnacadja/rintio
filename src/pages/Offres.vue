<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

    <div class="items-center w-full justify-center py-6">
      <div class="text-center mx-4 sm:mx-4 lg:mx-32 xl:mx-64">
        <h1
          class="my-3 text-2xl lg:text-5xl font-extrabold text-primary capitalize"
        >
          Nous offrons des solutions professionnelles pour les entreprises
        </h1>
        <p class="md:w-2/3 mx-auto py-4 md:px-0">
          Rintio est une entreprise de services du numérique. Nous sommes
          spécialisées dans le développement et l’intégration de solutions
          informatiques.
        </p>
      </div>
    </div>

    <LazyHydrate when-visible>
      <Offers />
    </LazyHydrate>
  </Layout>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Breadcrumb from "~/components/Breadcrumb.vue";
import Offers from "~/components/offer/Offers.vue";
export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    Offers,
  },
  metaInfo: {
    title: "Nos offres",
  },
  data() {
    return {
      path: "",
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.slice(1).replace("-", " ");
  },
};
</script>