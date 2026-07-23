<template>
  <Transition name="fade" appear>
    <div class="main-bg">
      <Header />
      <slot />
      <Footer />
    </div>
  </Transition>
</template>

<script setup>
import { useHead } from '#app'
const { data: metadata } = await useFetch('/api/metadata')
useHead({
  meta: [
    {
      name: 'description',
      content: metadata.value?.siteDescription || 'Rintio - Data & AI Solutions'
    },
    {
      name: 'author',
      content: 'Rintio'
    },
    {
      name: 'twitter:site',
      content: metadata.value?.twitter?.site || '@RintioGroup'
    },
    {
      name: 'twitter:creator',
      content: metadata.value?.twitter?.creator || '@RintioGroup'
    },
    {
      property: 'og:site_name',
      content: metadata.value?.siteName || 'Rintio'
    },
    {
      property: 'og:url',
      content: metadata.value?.siteUrl || 'https://rintio.com'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: metadata.value?.siteUrl
    }
  ]
})
</script>

<style scoped>
.main-bg {
  background-color: #fbfbfb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
