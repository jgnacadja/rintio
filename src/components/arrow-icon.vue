<template>
  <div class="columns">
    <div class="column" v-if="no_colore != true">
      <a href="#">
        <i class="fal fa-arrow-circle-right fa-2x has-text-primary is-pulled-right"></i>
      </a>
    </div>
    <div class="column" v-if="colore">
      <a href="#">
        <i
          class="fal fa-arrow-circle-right fa-2x is-pulled-right"
          style="
    color: white !important;
    /* color: white; */
;"
        ></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["colore", "no_colore"],
};
</script>

<style>
.fa-arrow-circle-right {
  margin-right: 6%;
}
</style>
