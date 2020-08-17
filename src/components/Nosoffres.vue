<template>
  <div>
    <div class="columns">
      <div class="column is-half">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <g-image
                :src="$static.features.belongsTo.edges[0].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow">
              <b>{{ $static.features.belongsTo.edges[0].node.title }}</b> <br />
              {{ $static.features.belongsTo.edges[0].node.metaDescription }}
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns">
          <div class="column is-half">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <g-image
                    :src="$static.articles.belongsTo.edges[0].node.coverImage"
                  />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class=" is-primary shadow">
                  <b>{{ $static.articles.belongsTo.edges[0].node.title }}</b> <br />
                  {{ $static.articles.belongsTo.edges[0].node.metaDescription }}
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <g-image
                    :src="$static.articles.belongsTo.edges[1].node.coverImage"
                  />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class=" is-primary shadow">
                  <b>{{ $static.articles.belongsTo.edges[1].node.title }}</b> <br />
                  {{ $static.articles.belongsTo.edges[1].node.metaDescription }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <g-image
                    :src="$static.articles.belongsTo.edges[2].node.coverImage"
                  />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class=" is-primary shadow">
                  <b>{{ $static.articles.belongsTo.edges[2].node.title }}</b> <br />
                  {{ $static.articles.belongsTo.edges[2].node.metaDescription }}
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <g-image
                    :src="$static.articles.belongsTo.edges[3].node.coverImage"
                  />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class=" is-primary shadow">
                  <b> {{ $static.articles.belongsTo.edges[3].node.title }}</b> <br />
                  {{ $static.articles.belongsTo.edges[3].node.metaDescription }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by3">
              <g-image
                :src="$static.feature.belongsTo.edges[0].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow">
              <b> {{ $static.feature.belongsTo.edges[0].node.title }}</b> <br />
              {{ $static.feature.belongsTo.edges[0].node.metaDescription }}
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <g-image
                :src="$static.articles.belongsTo.edges[4].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow">
            <b>   {{ $static.articles.belongsTo.edges[4].node.title }}</b> <br />
              {{ $static.articles.belongsTo.edges[4].node.metaDescription }}
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <g-image
                :src="$static.articles.belongsTo.edges[5].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow">
             <b> {{ $static.articles.belongsTo.edges[5].node.title }}</b> <br />
              {{ $static.articles.belongsTo.edges[5].node.metaDescription }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by3">
              <g-image
                :src="$static.feature.belongsTo.edges[1].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow">
              <b>{{ $static.feature.belongsTo.edges[1].node.title }}</b> <br />
              {{ $static.feature.belongsTo.edges[1].node.metaDescription }}
            </div>
          </div>
        </div>
      </div>
       <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image ">
              <g-image
                :src="$static.articles.belongsTo.edges[6].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow">
            <b>   {{ $static.articles.belongsTo.edges[6].node.title }}</b> <br />
              {{ $static.articles.belongsTo.edges[6].node.metaDescription }}
            </div>
          </div>
        </div>
      </div>
       <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image ">
              <g-image
                :src="$static.articles.belongsTo.edges[7].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow">
             <b> {{ $static.articles.belongsTo.edges[7].node.title }}</b> <br />
              {{ $static.articles.belongsTo.edges[7].node.metaDescription }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
       <div class="column is-half">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by3">
              <g-image
                :src="$static.feature.belongsTo.edges[2].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow">
              <b>{{ $static.feature.belongsTo.edges[2].node.title }}</b> <br />
              {{ $static.feature.belongsTo.edges[2].node.metaDescription }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {  
    features: category(id: "Nos offres features")  {
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

   feature: category(id: "Nos offres feature")  {
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
  
  articles: category(id: "Nos offres")  {
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
.shadow {
  background-color: grey;
  opacity: 0.7;
  color: white;
}
</style>
