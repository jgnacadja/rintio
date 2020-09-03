<template>
  <div>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>

<style lang="css" scoped>
</style>

<script>
import Mainmenu from "~/components/Mainmenu.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Mainmenu,
    Footer
  },
};
</script>