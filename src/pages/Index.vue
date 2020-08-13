<template>
  <Layout>
    <section class="section">
      <h1 class="title is-size-1 has-text-primary">Ils nous font confiance </h1>
      <div class="columns bcg">
          <div class="column">
            <i class="fas fa-chevron-left has-text-primary is-pulled-left fa-3x prev"></i>
          </div>
          <div class="column">

          </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
    data () {
      return {
        images : [
              src="~/assets/logo-carousel/societe_generale_logo.png",
              src="~/assets/logo-carousel/logo_bnp.png",
              src="~/assets/logo-carousel/hacklab.png",
              src="~/assets/logo-carousel/societe_generale_logo.png"
        ]
      }
    } 
}
</script>

<style>
.bcg
{
  background-color: gray;
  
}
</style>