<template>
  <div>
      <div v-for="edge in $page.articles.edges" :key="edge.node.id">
         <p>{{edge.node.title}}</p>

      </div>
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