<template>
  <div>
      s
  </div>
</template>

<page-query>
query {
  articles: allArticle {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>



<script>
export default {

}
</script>

<style>

</style>