<template>
  <div class="min-h-screen flex items-center justify-center bg-primary text-white">
    <div class="text-center px-4">
      <h1 class="text-6xl font-bold mb-4">
        {{ error?.statusCode || 404 }}
      </h1>
      <p class="text-xl mb-8">
        {{ error?.statusCode === 404 ? $t('error.404_message') : error?.statusMessage || $t('error.404_message') }}
      </p>
      <NuxtLink
        to="/"
        class="inline-block bg-secondary py-4 px-8 font-bold uppercase hover:bg-white hover:text-primary transition-colors"
      >
        {{ $t('error.back_home') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    statusMessage?: string
  }
}

defineProps<Props>()
</script>
