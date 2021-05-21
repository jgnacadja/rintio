<template>
  <div
    class="w-full bg-primary bg-opacity-20 flex justify-between text-gray-800 px-20 py-6 capitalize font-openSans"
  >
    <div>{{ path }}</div>
    <div>
      {{ home }} /
      <span v-bind:class="{ 'text-primary font-bold': !article }">{{ path }}</span>
      <span v-if="article">/ {{ article }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default() {
        return "";
      },
    },
    article: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      home: "Acceuil",
    };
  },
};
</script>