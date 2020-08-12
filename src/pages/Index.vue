<template>
  <Layout>
    <div class="container section is-fluid">
      <h1 class="title is-size-1 has-text-primary" style="text-align : left">Ils nous font confiance</h1><br><br>
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
      <div>
        <h1 class="title is-size-3 has-text-primary">A propos</h1>
      </div>
      <div class="content-14 content-16 has-text-justified content-14-top">
        Rintio est une entreprise de services du numérique. Nous sommes spécialisés dans le développement et l’intégration de solution
        informatique, le traitement de données, les technologies Big Data et l’Intelligence Artificielle. Nous proposons entre autres: des
        prestations en Offshoring (Coding, Admin Infrastructure & Cloud, DevOps) pour nos clients en Europe et aux Etats Unis.
      </div>
    </div>
    <alaUneEngagements />
    <NosExperts />
  </Layout>
</template>

           </div>
        </ClientOnly>
       </div>
  </Layout>
</template>
<script>
import $ from "jquery";
import NosExperts from "~/components/Experts.vue";
import alaUneEngagements  from "~/components/alaune-engagements.vue";

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
    title: "We involve for a better life",
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

.content-14-top {
  padding-top: 2%;
  margin-left: 1%;
}
@media only screen and (max-width: 415px) {
  .content-14 {
    font-size: 14px;
  }

  .content-14-top {
    padding-top: 5%;
    margin-left: 5% !important;
  }
}

@media only screen and (min-width: 1024px) {
  .content-16 {
    font-size: 16px;
  }
}
</style>
