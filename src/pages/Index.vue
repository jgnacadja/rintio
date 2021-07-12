<template>
  <Layout>
    <LazyHydrate when-idle>
      <Homeslider />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <About />
    </LazyHydrate>

    <LazyHydrate when-visible>
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
import Homeslider from "~/components/home/Homeslider.vue";
import About from "~/components/home/About.vue";
import Offer from "~/components/home/Offer.vue";
import Story from "~/components/home/Story.vue";
import Partner from "~/components/home/Partner.vue";
import Blog from "~/components/home/Blog.vue";
import Map from "~/components/home/Map.vue";
import Keywords from "~/assets/keywords.json";

export default {
  components: {
    LazyHydrate,
    Homeslider,
    About,
    Offer,
    Story,
    Partner,
    Blog,
    Map,
  },
  metaInfo() {
    return {
      title: "We involve for a better life",
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
        {
          key: "keywords",
          name: "keywords",
          content: Keywords.list,
        },
      ],
    };
  },
};
</script>

<style
</style>
