<template>
  <div>
    <Mainmenu />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
      <Footer />
  </div>
</template>

<style lang="css" scoped>
</style>

<script>
import Mainmenu from "~/components/Mainmenu.vue";
<<<<<<< HEAD
import Nosoffres from "~/components/Nosoffres.vue";

export default {
  components: {
    Mainmenu,
    Nosoffres,
  }
=======
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Mainmenu,
    Footer
  },
>>>>>>> alaune/engagements
};
</script>
