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

<script>
import Mainmenu from "~/components/Mainmenu.vue";
import Nosoffres from "~/components/Nosoffres.vue";

export default {
  components: {
    Mainmenu,
    Nosoffres,
  }
};
</script>
