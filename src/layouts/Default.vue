<template>
  <div>
    <transition name="fade" appear>
      <main class="main-bg">
        <div class="flex justify-between bg-white">
          <g-link class="z-50" to="/"><Logo class="mx-4 md:mx-20 my-6" /></g-link>
          <Nav />
        </div>
        <slot />
        <Footer />
      </main>
    </transition>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      twitter {
        site
        creator
      }
    }
  }
</static-query>

<script>
import Logo from "~/assets/images/rintio-logo-small.svg";
import Nav from "./partials/Nav.vue";
import Footer from "./partials/Footer.vue";

export default {
  components: {
    Logo,
    Nav,
    Footer,
  },
  metaInfo() {
    return {
      meta: [
        {
          key: "author",
          name: "author",
          content: this.$static.metadata.author,
        },
        {
          key: "twitter:site",
          name: "twitter:site",
          content: this.$static.metadata.twitter.site,
        },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: this.$static.metadata.twitter.creator,
        },
      ],
    };
  },
};
</script>

<style scoped>
.main-bg {
  background-color: #fbfbfb;
}
</style>