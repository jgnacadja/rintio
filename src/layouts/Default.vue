<template>
  <div>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>

<style lang="css" scoped>
</style>

<script>
export default {
  components: {
  }
};
</script>