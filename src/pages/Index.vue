<template>
  <Layout>
    <LazyHydrate when-idle>
      <Offer />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Story />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Partner />
    </LazyHydrate>

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
import Offer from "~/components/home/Offer.vue";
import Story from "~/components/home/Story.vue";
import Partner from "~/components/home/Partner.vue";
import Blog from "~/components/home/Blog.vue";
import Map from "~/components/home/Map.vue";

export default {
  components: {
    LazyHydrate,
    Offer,
    Story,
    Partner,
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
