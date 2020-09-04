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
import Nosoffres from "~/components/Nosoffres.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Mainmenu,
    Nosoffres,
  }


};
</script>
