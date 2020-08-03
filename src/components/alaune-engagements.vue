<template>
  <div>
    <div v-for="edge in $static.articles.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
    </div>
  </div>
</template>

<static-query>
query AlauneEngagement{
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
</static-query>



<script>
export default {};
</script>

<style>
</style>