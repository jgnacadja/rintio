<template>
  <div>
    <transition name="fade" appear>
      <main>
        <Nav />
        <slot />
        <Footer />
      </main>
    </transition>
  </div>
</template>

<style lang="css" scoped>
</style>

<script>
import Nav from "./partials/Nav.vue";
import Footer from "./partials/Footer.vue";

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>