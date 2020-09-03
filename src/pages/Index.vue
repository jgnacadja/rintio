<template>
  <Layout>
    <div class="container section is-fluid">
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
    <Rintiodatalab />
    <Nosimplantations />
  </Layout>
</template>

<script>
import NosExperts from "~/components/Experts.vue";
import alaUneEngagements  from "~/components/alaune-engagements.vue";
import Nosimplantations from "~/components/Nosimplantations.vue";
import Rintiodatalab from "~/components/RintioDatalabE.vue";

export default {
  components: {
    NosExperts,
    alaUneEngagements,
    Rintiodatalab,
    Nosimplantations,
  },
  metaInfo: {
    title: "We involve for a better life",
  },
};
</script>

<style>

</style>