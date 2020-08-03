<template>
  <div>
    <Mainmenu />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>

<script>
import Mainmenu from "~/components/Mainmenu.vue";
export default {
  components: {
    Mainmenu,
  },
};
</script>
