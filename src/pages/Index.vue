<template>
  <Layout>
    <div class="wrapper_container">
      <div class="section section is-fluid" style="padding:0px">
        <div>
          <h1 class="title is-size-2-tablet is-size-4-mobile has-text-primary">A propos</h1>
        </div>

        <div class="content-14 content-16 has-text-justified content-14-top">
          Rintio est une entreprise de services du numérique. Nous sommes
          spécialisés dans le développement et l’intégration de solution
          informatique, le traitement de données, les technologies Big Data et
          l’Intelligence Artificielle. Nous proposons entre autres: des
          prestations en Offshoring (Coding, Admin Infrastructure & Cloud, DevOps)
          pour nos clients en Europe et aux Etats Unis.
        </div>
        <div class="columns">
          <div class="column is-offset-10">
            <arrowicon />
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper_container wrapper_container-plus-less">
      <div class="section section is-fluid" style="padding:0px">
        <div>
          <h1 class="title is-size-2-tablet is-size-4-mobile has-text-primary">Nos Offres</h1>
        </div>
      </div>
    </div>
    <Nosoffres />
    <div class="wrapper_container wrapper_container-less">
      <div class="section section is-fluid" style="padding:0px">
        <div>
          <h1
            class="title is-size-2-tablet is-size-4-mobile has-text-primary"
          >A la une / Rintio Stories</h1>
        </div>
      </div>
    </div>
    <alaUneEngagements :alaUne="true" />
    <div class="wrapper_container wrapper_container-unless">
      <div class="section section is-fluid" style="padding:0px">
        <div>
          <h1 class="title is-size-2-tablet is-size-4-mobile has-text-primary">Nos Experts</h1>
        </div>
      </div>
    </div>
    <NosExperts />
    <div class="wrapper_container wrapper_container-plus-less">
      <div class="section section is-fluid" style="padding:0px">
        <div>
          <h1 class="title is-size-2-tablet is-size-4-mobile has-text-primary">Rintio Data Lab</h1>
        </div>
      </div>
    </div>
    <Rintiodatalab />
    <div class="wrapper_container">
      <div class="section section is-fluid" style="padding:0px">
        <div>
          <h1
            class="title is-size-2-tablet is-size-4-mobile has-text-primary"
          >A la une / Rintio Stories</h1>
        </div>
      </div>
    </div>
    <alaUneEngagements :NosEngagement="true" />
    <div class="wrapper_container wrapper_container-plus">
      <div class="section section is-fluid" style="padding:0px">
        <div>
          <h1
            class="title is-size-2-tablet is-size-4-mobile has-text-primary"
          >Ils nous font confiance</h1>
        </div>
      </div>
    </div>
    <Ilsnousfontconfiance />
    <div class="wrapper_container wrapper_container-less">
      <div class="section section is-fluid" style="padding:0px">
        <div>
          <h1 class="title is-size-2-tablet is-size-4-mobile has-text-primary">Nos Implantations</h1>
        </div>
      </div>
    </div>
    <Nosimplantations />
    <div class="wrapper_container">
      <div class="section section is-fluid" style="padding:0px">
        <div>
          <h1 class="title is-size-2-tablet is-size-4-mobile has-text-primary">Contactez-nous</h1>
        </div>
      </div>
    </div>
    <Contact />
  </Layout>
</template>

<script>
import NosExperts from "~/components/Experts.vue";
import alaUneEngagements from "~/components/alaune-engagements.vue";
import arrowicon from "~/components/arrow-icon.vue";
import Nosoffres from "~/components/Nosoffres.vue";
import Publications from "~/components/Publications.vue";
import Ilsnousfontconfiance from "~/components/Ilsnousfontconfiance.vue";
import Nosimplantations from "~/components/Nosimplantations.vue";
import Rintiodatalab from "~/components/RintioDatalab.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    NosExperts,
    alaUneEngagements,
    arrowicon,
    Nosoffres,
    Rintiodatalab,
    Publications,
    Ilsnousfontconfiance,
    Nosimplantations,
    Contact,
  },
  metaInfo: {
    title: "We involve for a better life",
  },
};
</script>

<style>
body {
  font-family: "Montserrat,sans-serif";
}
.content-14-top {
  padding-top: 2%;
  margin-left: 1%;
}

.wrapper_container {
  padding-left: 2%;
  padding-right: 5%;
}

.wrapper_container-plus {
  padding-top: 10%;
  padding-bottom: 3%;
}

.wrapper_container-plus-unless {
  padding-top: 5%;
  padding-bottom: 3%;
}

.wrapper_container-less {
  padding-top: 10%;
}

.wrapper_container-unless {
  padding-top: 5%;
}

@media only screen and (max-width: 415px) {
  .content-14 {
    font-size: 14px;
  }

  .wrapper_container {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>

