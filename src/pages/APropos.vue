<template>
  <Layout>
    <LazyHydrate when-idle>
      <About />
    </LazyHydrate>
  </Layout>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import About from "~/components/home/About.vue";
export default {
  components: {
    LazyHydrate,
    About,
  },
  metaInfo: {
    title: "A propos",
  },
};
</script>