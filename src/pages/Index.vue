<template>
  <Layout>
    <LazyHydrate when-visible>
      <Blog />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Map />
    </LazyHydrate>
  </Layout>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Blog from "~/components/home/Blog.vue";
import Map from "~/components/home/Map.vue";

export default {
  components: {
    LazyHydrate,
    Blog,
    Map,
  },
  metaInfo: {
    title: "We involve for a better life",
  },
};
</script>

<style
</style>
