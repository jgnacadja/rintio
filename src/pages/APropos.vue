<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Services />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Experts />
    </LazyHydrate>

    <LazyHydrate when-visible>
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
  metaInfo: {
    title: "A propos",
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