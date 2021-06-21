<template>
  <Layout>
    <div class="h-screen w-full flex justify-center content-center flex-wrap">
      <p class="font-sans text-black error-text">404</p>
    </div>

    <div
      class="
        absolute
        w-full
        bottom-4
        mb-6
        text-black text-center
        font-sans
        text-xl
      "
    >
      <span class="opacity-50">Retour à </span>
      <g-link class="border-b" to="/">l'acceuil</g-link>
    </div>
  </Layout>
</template>

<style scoped>
.error-text {
  font-size: 130px;
}

@media (min-width: 768px) {
  .error-text {
    font-size: 220px;
  }
}
</style>>
