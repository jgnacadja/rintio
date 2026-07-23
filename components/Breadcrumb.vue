<template>
  <div
    class="w-full bg-primary bg-opacity-20 flex justify-between text-gray-800 px-8 md:px-20 py-6 capitalize font-roboto"
  >
    <div v-if="!article">{{ path }}</div>
    <div v-if="article">{{ article }}</div>
    <div>
      <NuxtLink to="/">
        {{ home }}
      </NuxtLink>
      /
      <NuxtLink v-if="article" to="/blog">
        <span :class="{ 'text-primary font-bold': !article }">{{ path }}</span>
      </NuxtLink>
      <span v-if="!article" :class="{ 'text-primary font-bold': !article }">{{ path }}</span>
      <span v-if="article" :class="{ 'text-primary font-bold': article }"> | {{ article }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// Déclaration propre des props avec valeurs par défaut
interface Props {
  path?: string
  article?: string
}

withDefaults(defineProps<Props>(), {
  path: '',
  article: ''
})

// Variable directement accessible dans le template
const home = 'Acceuil'
</script>
