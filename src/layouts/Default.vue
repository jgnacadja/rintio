<template>
  <div>
    <Mainmenu />
    <transition name="fade" appear>
      <main> 
           <div class="container is-fluid">
              <div class="has-text-link	">
                <h1 class="title is-1 has-text-link">A propos</h1>
              </div>
            Rintio est une entreprise de services du numérique. Nous sommes spécialisés dans le développement et l’intégration de solution 
            informatique, le traitement de données, les technologies Big Data et l’Intelligence Artificielle. Nous proposons entre autres: des 
            prestations en Offshoring (Coding, Admin Infrastructure & Cloud, DevOps) pour nos clients en Europe et aux Etats Unis.
       
         </div>
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<style lang="css" scoped>

</style>

<script>
import Mainmenu from "~/components/Mainmenu.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Mainmenu,
    Footer
  }
};
</script>
