<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s'
})

const { origin } = useRequestURL()

// Image de preview par défaut (partage social) : origine dynamique pour que
// les previews (Vercel, dev local, etc.) pointent vers un fichier qui existe réellement.
useHead({
  meta: [
    { property: 'og:image', content: `${origin}/logo.png` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: `${origin}/logo.png` }
  ]
})
</script>
