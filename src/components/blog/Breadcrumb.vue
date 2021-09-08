<template>
  <div
    class=" w-full px-2 py-2 bg-right mt-0.5 bg-no-repeat bg-cover md:py-32 md:px-20 shadow-sm"
    v-bind:style="[
            {
              backgroundImage: 'url(' + content.image.file.url + ')',
            },
          ]"
  >
    <div class="md:w-5/12">
      <h2 class="flex text-2xl font-extrabold md:text-5xl text-secondary">
        Blog
      </h2>
      <p class="text-sm font-light">
        Accueil |
        <span class="font-bold text-primary"> Blog </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
