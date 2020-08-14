<template>
    <div class="container section is-fluid"> 
    <h2 class="title is-size-3 has-text-primary">Nos Engagements</h2>
    <!--div v-for="edge in $static.articles.belongsTo.edges" :key="edge.node.id">
        <div class="column is-mobile">
            <div class="column">
                <figure>
                    <g-image :src="edge.node.coverImage" :alt="edge.node.title" />
                    <figcaption v-html="edge.node.content"></figcaption>
                </figure>
                
            </div>
            <div class="column "> </div>
        </div>
     <div class="column is-half">
           <figure>
                <g-image :src="$static.feature.belongsTo.edges.node.coverImage"/>
                <figcaption class="" v-html="$static.articles.belongsTo.edges.node.content"></figcaption>
            </figure>
       </div>
        <div class="column">  
          <figure>
              <g-image :src="$static.articles.belongsTo.edges[0].node.coverImage"/>
              <figcaption class="" v-html="$static.articles.belongsTo.edges[0].node.content"></figcaption>
          </figure>
      </div>
_____________________________________________________________________________________________________________________
      <div style="position:relative; height:auto">
   <div style="position:absolute;z-index:1">
      <g-image :src="$static.articles.belongsTo.edges[1].node.coverImage" class="zoom"/>
   </div>
   <div style="position:absolute;  z-index:2;">
      <button class="is-link has-text-link" >Nos Engagements</button>
    </div> 
</div>
    </div-->
    <div class="is-hidden-mobile content is-size-6 ">
      <div class="section">
        <div class="columns is-12 is-multiline ">
          <div class="column is-12">
            <div class="columns is-mobile is-gapless">
              <div class="column is-6 is-marginless is-paddindless">
                <figure class="is-marginless is-paddindless">
                 <div class="zoom">
                    <g-image
                    :src="$static.feature.belongsTo.edges[1].node.coverImage"
                    class=""
                  />
                  <span class="tag is-link" id="bouton22mob">S'inscrire</span>
                 </div>
                  
                  <figcaption>
                    <b
                      v-html="$static.feature.belongsTo.edges[1].node.title"
                    ></b>
                    <p
                      v-html="
                        $static.feature.belongsTo.edges[1].node.metaDescription
                      "
                    ></p>
                    <span class="icon is-small has-text-primary">
                      <i class="fas fa-arrow-circle-right"></i
                    ></span>
                  </figcaption>
                </figure>
              </div>
              <div class="column is-6 is-multiline is-paddingless is-marginless">
                <div class="columns is-12 is-multiline">
                  <div class="column is-6 is-paddingless is-marginless" >
                    <figure>
                      <div class="zoom">
                        <g-image
                        :src="
                          $static.articles.belongsTo.edges[0].node.coverImage
                        " 
                      />
                      <span class="tag is-link" id="bouton3mob"
                        >S'inscrire</span
                      >
                      </div>
                      <figcaption class="">
                        <b
                          v-html="
                            $static.articles.belongsTo.edges[0].node.title
                          "
                        >
                        </b>
                        <p
                          v-html="
                            $static.articles.belongsTo.edges[0].node
                              .metaDescription
                          "
                        ></p>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="column is-6 is-paddingless is-marginless">
                    <figure class="is-marginless is-paddindless">
                      <div class="zoom">
                        <g-image
                        :src="
                          $static.articles.belongsTo.edges[1].node.coverImage
                        "
                      />
                      <span class="tag is-link" id="bouton3mob"
                        >S'inscrire</span
                      >
                      </div>
                      <figcaption class="">
                        <b
                          v-html="
                            $static.articles.belongsTo.edges[1].node.title
                          "
                        ></b>
                        <p
                          v-html="
                            $static.articles.belongsTo.edges[1].node
                              .metaDescription
                          "
                        ></p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div class="column is-12 is-multiline is-paddingless is-marginless">
                  <div class="columns is-8">
                    <div class="column is-6 is-paddingless is-marginless">
                      <figure>
                        <div class="zoom">
                          <g-image
                          :src="
                            $static.articles.belongsTo.edges[2].node.coverImage
                          "
                        />
                        <span class="tag is-link" id="bouton3mob"
                          >S'inscrire</span
                        >
                        </div>
                        <figcaption>
                    <b
                      v-html="$static.feature.belongsTo.edges[1].node.title"
                    ></b>
                    <p
                      v-html="
                        $static.feature.belongsTo.edges[1].node.metaDescription
                      "
                    ></p>
                    <span class="icon is-small has-text-primary">
                      <i class="fas fa-arrow-circle-right"></i
                    ></span>
                  </figcaption>
                      </figure>
                    </div>
                    <div class="column is-6 is-paddingless is-marginless">
                      <figure class="is-marginless is-paddindless">
                        <div class="zoom">
                          <g-image
                          :src="
                            $static.articles.belongsTo.edges[3].node.coverImage
                          "
                        />
                        <span class="tag is-link" id="bouton3mob"
                          >S'inscrire</span
                        >
                        </div>
                        <figcaption class="">
                          <b
                            v-html="
                              $static.articles.belongsTo.edges[3].node.title
                            "
                          ></b>
                          <p
                            v-html="
                              $static.articles.belongsTo.edges[3].node
                                .metaDescription
                            "
                          ></p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-12">
            <div class="columns is-gapless">
              <div class="column is-half ">
                <figure class="is-marginless is-paddindless">
                  <div class="zoom">
                    <g-image
                    :src="$static.feature.belongsTo.edges[0].node.coverImage"
                  />
                  <span class="tag is-link" id="bouton22mob">S'inscrire</span>
                  </div>
                  <figcaption>
                    <b
                      v-html="$static.feature.belongsTo.edges[0].node.title"
                    ></b>
                    <p
                      v-html="
                        $static.feature.belongsTo.edges[0].node.metaDescription
                      "
                    ></p>
                  </figcaption>
                </figure>
              </div>
              <div class="column ">
                <figure>
                  <div class="zoom">
                    <g-image
                    :src="$static.new.belongsTo.edges[0].node.coverImage"
                  />
                  <span class="tag is-link" id="bouton3mob">S'inscrire</span>
                  </div>
                  <figcaption>
                    <b v-html="$static.new.belongsTo.edges[0].node.title"></b>
                    <p
                      v-html="
                        $static.new.belongsTo.edges[0].node.metaDescription
                      "
                    ></p>
                  </figcaption>
                </figure>
              </div>
              <div class="column ">
                <figure class="is-marginless is-paddindless">
                  <div class="zoom">
                    <g-image
                    :src="$static.new.belongsTo.edges[1].node.coverImage"
                  />
                  <span class="tag is-link" id="bouton3mob">S'inscrire</span>
                  </div>
                  <figcaption>
                    <b v-html="$static.new.belongsTo.edges[1].node.title"></b>
                    <p
                      v-html="
                        $static.new.belongsTo.edges[1].node.metaDescription
                      "
                    ></p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="is-hidden-tablet has-text-centered ">
      <div class="">
        <figure>
          <button class="has-text-primary" id="bouton1mob">
            Nos Engagements
          </button>
          <g-image
            :src="$static.feature.belongsTo.edges[1].node.coverImage"
            class="zoom"
          />
          <span class="tag is-link" id="bouton2mob">S'inscrire</span>
          <figcaption>
            <b v-html="$static.feature.belongsTo.edges[1].node.title"></b>
            <p
              v-html="$static.feature.belongsTo.edges[1].node.metaDescription"
            ></p>
          </figcaption>
        </figure>
      </div>
      <div
        v-for="article in $static.articles.belongsTo.edges"
        :key="article.node.id"
      >
        <figure class="">
          <button class="has-text-primary" id="bouton1mob">
            Nos Engagements
          </button>
          <g-image :src="article.node.coverImage" class="zoom" />
          <span class="tag is-link" id="bouton2mob">S'inscrire</span>
          <figcaption>
            <b v-html="article.node.title"></b>
            <p v-html="article.node.metaDescription"></p>
          </figcaption>
        </figure>
      </div>
      <div
        v-for="article in $static.new.belongsTo.edges"
        :key="article.node.id"
      >
        <figure class="">
          <button class="has-text-primary" id="bouton1mob">
            Nos Engagements
          </button>
          <g-image :src="article.node.coverImage" class="zoom" />
          <span class="tag is-link" id="bouton2mob">En savoir plus</span>
          <figcaption>
            <b v-html="article.node.title"></b>
            <p v-html="article.node.metaDescription"></p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
 articles: category(id: "Nos Engagements") {
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
  feature: category(id: "Nos Engagements feature")  {
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
   new: category(id: "Nos Engagements, news")  {
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
.zoom {
  transition: transform 0.5s; /* Animation */
}
.zoom:hover {
  transform: scale(
    0.98
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
#bouton1mob {
  position: absolute;
  left: 30px;
}
#bouton2mob {
  position: relative;
  top: -40px;
  left: -160px;
}
#bouton3mob {
  position: relative;
  top: -40px;
  left: 10px;
}

#bouton22mob {
  position: relative;
  top: -60px;
}

</style>
