<template>
  <div>
    <transition name="fade" appear>
      <main class="main-bg">
        <div class="flex justify-between bg-white">
          <g-link to="/"><Logo class="mx-12 my-6" /></g-link>
          <Nav />
        </div>
        <slot />
        <Footer />
      </main>
    </transition>
  </div>
</template>

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
};
</script>

<style scoped>
.main-bg {
  background-color: #fbfbfb;
}
</style>