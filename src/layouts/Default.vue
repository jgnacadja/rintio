<template>
  <div>
    <Mainmenu />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    
    </transition>
    <NosExperts />

    <Footer />
  </div>
</template>

<script>
import Mainmenu from "~/components/Mainmenu.vue";
import Footer from "~/components/Footer.vue";
import NosExperts from "~/components/Experts.vue"

export default {
  components: {
    Mainmenu,
    Footer,
    NosExperts
  }
};
</script>
