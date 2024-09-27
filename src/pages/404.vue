<template>
  <Layout>
    <div class="h-screen w-full flex flex-col justify-center content-center flex-wrap">
      <p class="w-full mx-auto lg:w-1/3 -mt-24 mb-3 text-xl font-bold text-black md:text-2xl">
        Page non trouvée (404)
      </p>
      <p class="w-full mx-auto lg:w-1/3 mb-3 text-base font-medium text-gray-700">
        La page que vous recherchez a peut-être été déplacée ou n'existe plus.
        Retournez sur notre
        <g-link to="/" class="underline">page d'accueil</g-link>, ou consultez
        l'une des sections ci-dessous.
      </p>
    </div>

    <div
      class="
        absolute
        w-full
        bottom-4
        mb-6
        text-black text-center
        font-roboto
        text-xl
      "
    >
      <span class="opacity-50">Retour à </span>
      <g-link class="border-b" to="/">l'acceuil</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "404",
    };
  },
};
</script>

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
