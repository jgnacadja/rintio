<template>
  <Layout>
    <div class="container section is-fluid">
      <h1 class="title is-size-1 has-text-primary" style="text-align : left"> Ils nous font confiance</h1>
        <ClientOnly >
           <div class="columns bg">
             <div class="column">
                <i class='fas fa-angle-left fa-3x has-text-primary prev'></i>
             </div>
             <div class="column">
                        <g-image src="~/assets/logo-carousel/societe_generale_logo.png"></g-image>

             </div>
             <div class="column"> 
                <i class='fas fa-angle-right fa-3x has-text-primary is-pulled-right'></i>
             </div>

           </div>
        </ClientOnly>
       </div>
  </Layout>
</template>
<script>
import $ from "jquery";
export default {
  components: {
    NosExperts,
    alaUneEngagements
  },
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

.bg {
  background-color: grey;
  height:150px;
}
.prev
{
  top: 25px;
}

</style>
