<template>
  <div>
      <div v-for="article in $static.feature.belongsTo.edges" :key="article.node.id">
                <g-image :src="article.node.coverImage"></g-image>
                <p>{{article.node.content}} </p>
      </div>
  </div>
</template>

<static-query>
query {  
    feature: category(id: "Nos offres")  {
    id
    title
    path
    belongsTo {
      edges {
        node {
          ... on Article {
            id
            title
            coverImage
            path
            content
          }
        }
      }
    }
  }
}

</static-query>

<script>
export default {

}
</script>

<style>

</style>