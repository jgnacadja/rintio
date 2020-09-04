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
<<<<<<< HEAD
import Mainmenu from "~/components/Mainmenu.vue";
import Nosoffres from "~/components/Nosoffres.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Mainmenu,
    Nosoffres,
  }


=======
export default {
  components: {
  }
>>>>>>> contact
};
</script>