<template>
  <footer class="bg-primary">
    <div class="max-w-6xl m-auto text-white flex flex-wrap justify-left">
      <!-- Col-1 -->
      <div class="p-5 w-full sm:w-4/12 md:w-3/12">
        <Logo />
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="bg-secondary">
      <div class="px-3 m-auto py-4 font-bold text-white text-center">
        Rintio 2019 © Tous droits réservés
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./Logo";
export default {
  components: {
    Logo,
  },
};
</script>
