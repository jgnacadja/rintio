<template>
  <Layout>
    <div style="padding-left:2%; padding-right:2%">
      <div class="section section is-fluid" style="padding:0px">
      <div>
        <h1 class="title is-size-2 has-text-primary">A propos</h1>
      </div>
        

      <div class="content-14 content-16 has-text-justified content-14-top ">
        Rintio est une entreprise de services du numérique. Nous sommes
        spécialisés dans le développement et l’intégration de solution
        informatique, le traitement de données, les technologies Big Data et
        l’Intelligence Artificielle. Nous proposons entre autres: des
        prestations en Offshoring (Coding, Admin Infrastructure & Cloud, DevOps)
        pour nos clients en Europe et aux Etats Unis. 
        
      </div>
      <div class="columns">
        <div class="column is-offset-10">
          <arrowicon/>
        </div>
      </div>
    </div> 
    <Nosoffres />
    <alaUneEngagements :alaUne="true" />
    <alaUneEngagements :NosEngagement="true" />
    <NosExperts />
    </div>
  </Layout>
</template>

<script>
import NosExperts from "~/components/Experts.vue";
import alaUneEngagements from "~/components/alaune-engagements.vue";
import arrowicon from "~/components/arrow-icon.vue";
import Nosoffres from "~/components/Nosoffres.vue";

export default {
  components: {
    NosExperts,
    alaUneEngagements,
    arrowicon,
    Nosoffres,
  },
  metaInfo: {
    title: "We involve for a better life",
  },
};
</script>

<style>
body {
font-family: 'Montserrat,sans-serif';
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
