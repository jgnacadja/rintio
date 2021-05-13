<template>
  <Layout>
    <LazyHydrate when-visible>
      <Map />
    </LazyHydrate>
  </Layout>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Map from "~/components/home/Map.vue";

export default {
  components: {
    LazyHydrate,
    Map,
  },
  metaInfo: {
    title: "We involve for a better life",
  },
};
</script>

<style
</style>
