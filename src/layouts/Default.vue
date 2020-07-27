<template>
  <div>
    <TheMegamenu />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import Mainmenu from "~/components/Mainmenu.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Mainmenu,
    Footer
  }
};
</script>
