<template>
  <div>
    <Mainmenu />
    <transition name="fade" appear>
      <main>
            <Alaune/>

        <slot />
      </main>
    </transition>
  </div>
</template>

<script>
import Mainmenu from "~/components/Mainmenu.vue";
import Alaune from "~/components/Alaune.vue";
export default {
  components: {
    Mainmenu,
    Alaune
  }
};
</script>
