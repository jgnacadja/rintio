<template>
  <div class="container section is-fluid">
    <h2 class="title is-size-2 has-text-primary">Rintio Data Lab</h2>
    <div class="columns">
      <div class="column is-6">
        <figure>
          <g-image :src="$static.dataLab.belongsTo.edges[2].node.coverImage" class />
          <figcaption>
            <b v-html="$static.dataLab.belongsTo.edges[2].node.title"></b>
            <p
              v-html="
                      $static.dataLab.belongsTo.edges[2].node.metaDescription
                    "
              class="space"
            ></p>
          </figcaption>
        </figure>
      </div>
      <div class="column is-two-quarter">
        <figure>
          <g-image :src="$static.dataLab.belongsTo.edges[3].node.coverImage" class />
          <figcaption>
            <b v-html="$static.dataLab.belongsTo.edges[3].node.title"></b>
            <p
              v-html="
                      $static.dataLab.belongsTo.edges[3].node.metaDescription
                    "
              class="space"
            ></p>
            <arrowicon />
          </figcaption>
        </figure>
      </div>
      <div class="column is-two-quarter">
        <figure>
          <g-image :src="$static.dataLab.belongsTo.edges[4].node.coverImage" class />
          <figcaption>
            <b v-html="$static.dataLab.belongsTo.edges[4].node.title"></b>
            <p
              v-html="
                      $static.dataLab.belongsTo.edges[4].node.metaDescription
                    "
              class="space"
            ></p>
            <arrowicon />
          </figcaption>
        </figure>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <figure>
          <g-image :src="$static.dataLab.belongsTo.edges[1].node.coverImage" class />
          <figcaption>
            <b v-html="$static.dataLab.belongsTo.edges[1].node.title"></b>
            <p
              v-html="
                      $static.dataLab.belongsTo.edges[1].node.metaDescription
                    "
              class="space"
            ></p>
            <arrowicon />
          </figcaption>
        </figure>
      </div>
      <div class="column">
        <figure>
          <g-image :src="$static.dataLab.belongsTo.edges[0].node.coverImage" class />
          <figcaption>
            <b v-html="$static.dataLab.belongsTo.edges[0].node.title"></b>
            <p
              v-html="
                      $static.dataLab.belongsTo.edges[0].node.metaDescription
                    "
              class="space"
            ></p>
            <arrowicon />
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
<static-query>
query {
 dataLab: category(id: "Rintio Data Lab") {
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
            metaDescription
          }
        }
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