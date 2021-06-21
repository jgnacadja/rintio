<template>
  <div
    class="
      w-full
      bg-primary bg-opacity-20
      flex
      justify-between
      text-gray-800
      px-20
      py-6
      capitalize
      font-openSans
    "
  >
    <div v-if="!article">{{ path }}</div>
    <div v-if="article">{{ article }}</div>
    <div>
      <g-link to="/">
        {{ home }}
      </g-link>
      /
      <g-link v-if="article" to="/blog">
        <span v-bind:class="{ 'text-primary font-bold': !article }">{{
          path
        }}</span>
      </g-link>
      <span
        v-if="!article"
        v-bind:class="{ 'text-primary font-bold': !article }"
        >{{ path }}</span
      >
      <span v-bind:class="{ 'text-primary font-bold': article }" v-if="article">
        / {{ article }}</span
      >
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