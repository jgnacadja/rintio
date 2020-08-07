<template>
  <Layout>
    <ClientOnly>
      <carousel
        id="slider"
        :perPage="3"
        :autoplay="true"
        :autoplayTimeout="3000"
        :speed="500"
        :loop="true"
        :centerMode="true"
        :paginationEnabled="false"
      >
        <slide>
          <g-image src="~/assets/logo.png"></g-image>
        </slide>
        <slide>carousel
          <g-image src="~/assets/logo.png"></g-image>
        </slide>
        <slide>
          <g-image src="~/assets/logo.png"></g-image>
        </slide>
        <slide>
          <g-image src="~/assets/logo.png"></g-image>
        </slide>
        <slide>
          <g-image src="~/assets/logo.png"></g-image>
        </slide>
        <slide>
          <g-image src="~/assets/logo.png"></g-image>
        </slide>
      </carousel>
    </ClientOnly>
  </Layout>
</template>

<script>
import $ from "jquery";
export default {
  metaInfo: {
    title: "Rintio",
  },
  components: {
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
};
</script>

<style>
</style>
