<template>
  <div class="section is-paddingless">
    <div class="" v-if="NosEngagement">
      <h2 class="has-text-primary is-size-2">Nos Engagements</h2>
      <div class="is-hidden-mobile ">
        <div class="section">
          <div class="columns">
            <div class="column is-6">
              <figure>
                <g-image
                  :src="$static.feature.belongsTo.edges[1].node.coverImage"
                  class=""
                />
                <figcaption>
                  <b v-html="$static.feature.belongsTo.edges[1].node.title"></b>
                  <p
                    v-html="
                      $static.feature.belongsTo.edges[1].node.metaDescription
                    "
                    class="space"
                  ></p>
                </figcaption>
              </figure>
            </div>
            <div class="column is-6">
              <div class="columns is-multiline is-12">
                <div class="column is-half">
                  <figure>
                    <div class="zoom">
                      <g-image
                        :src="
                          $static.articles.belongsTo.edges[0].node.coverImage
                        "
                      />
                    </div>
                    <figcaption class="">
                      <b
                        v-html="$static.articles.belongsTo.edges[0].node.title"
                      >
                      </b>
                      <p
                        v-html="
                          $static.articles.belongsTo.edges[0].node
                            .metaDescription
                        "
                        class="space"
                      ></p>
                      <arrowicon />
                    </figcaption>
                  </figure>
                </div>

                <div class="column is-half">
                  <figure>
                    <div class="zoom">
                      <g-image
                        :src="
                          $static.articles.belongsTo.edges[1].node.coverImage
                        "
                      />
                    </div>
                    <figcaption class="">
                      <b
                        v-html="$static.articles.belongsTo.edges[1].node.title"
                      ></b>
                      <p
                        v-html="
                          $static.articles.belongsTo.edges[1].node
                            .metaDescription
                        "
                        class="space"
                      ></p>
                      <arrowicon />
                    </figcaption>
                  </figure>
                </div>

                <div class="columns"></div>

                <div class="column is-half mb-0">
                  <figure>
                    <div class="zoom">
                      <g-image
                        :src="
                          $static.articles.belongsTo.edges[2].node.coverImage
                        "
                      />
                    </div>
                    <figcaption>
                      <b
                        v-html="$static.feature.belongsTo.edges[1].node.title"
                      ></b>
                      <p
                        v-html="
                          $static.feature.belongsTo.edges[1].node
                            .metaDescription
                        "
                        class="space"
                      ></p>
                    </figcaption>
                  </figure>
                </div>

                <div class="column is-half mb-0">
                  <figure>
                    <div class="zoom">
                      <g-image
                        :src="
                          $static.articles.belongsTo.edges[3].node.coverImage
                        "
                      />
                    </div>
                    <figcaption class="">
                      <b
                        v-html="$static.articles.belongsTo.edges[3].node.title"
                      ></b>
                      <p
                        v-html="
                          $static.articles.belongsTo.edges[3].node
                            .metaDescription
                        "
                        class="space"
                      ></p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
         <div class="columns" style="padding-top: 0px">
            <div class="column is-half"><arrowicon /></div>
            <div class="column" ><arrowicon /></div>
            <div class="column" ><arrowicon /></div>
          </div>
          <div class="columns" style="padding-top:10px">
            
            <div class="column is-half">
              <figure>
                <div class="zoom">
                  <g-image
                    :src="$static.feature.belongsTo.edges[0].node.coverImage"
                    class="is-full"
                  />
                </div>
                <figcaption></figcaption>
              </figure>
            </div>
            <div class="column is-marginless is-paddindless">
              <figure>
                <div class="zoom">
                  <g-image
                    :src="$static.new.belongsTo.edges[0].node.coverImage"
                  />
                </div>
                <figcaption></figcaption>
              </figure>
            </div>
            <div class="column is-marginless is-paddindless">
              <figure>
                <div class="zoom">
                  <g-image
                    :src="$static.new.belongsTo.edges[1].node.coverImage"
                  />
                </div>
                <figcaption></figcaption>
              </figure>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <b v-html="$static.feature.belongsTo.edges[0].node.title"></b>
              <p
                v-html="$static.feature.belongsTo.edges[0].node.metaDescription"
                class="space"
              ></p>
            </div>
            <div class="column">
              <b v-html="$static.new.belongsTo.edges[0].node.title"></b>
              <p
                v-html="$static.new.belongsTo.edges[0].node.metaDescription"
                class="space"
              ></p>
            </div>
            <div class="column">
              <b v-html="$static.new.belongsTo.edges[1].node.title"></b>
              <p
                v-html="$static.new.belongsTo.edges[1].node.metaDescription"
                class="space"
              ></p>
            </div>
          </div>
          <div class="columns" style="padding-top: 0px">
            <div class="column is-half"><arrowicon /></div>
            <div class="column"><arrowicon /></div>
            <div class="column"><arrowicon /></div>
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
              <arrowicon />
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
              <arrowicon />
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
              <arrowicon />
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div v-if="alaUne">
      <h2 class="has-text-primary is-size-2">A la Une / Rintio Stories</h2>
      <div class="columns" style="padding-top:30px">
        <div class="column is-6">
          <figure>
            <g-image
              :src="$static.alaUne_feature.belongsTo.edges[0].node.coverImage"
              class="zoom"
            />
            <figcaption>
              <b
                v-html="$static.alaUne_feature.belongsTo.edges[0].node.title"
              ></b>
              <p
                v-html="
                  $static.alaUne_feature.belongsTo.edges[0].node.metaDescription
                "
                class="space"
              ></p>
            </figcaption>
          </figure>
        </div>

        <div class="column is-6">
          <div class="columns is-multiline is-12">
            <div class="column is-half">
              <figure>
                <g-image
                  :src="$static.alaUne.belongsTo.edges[0].node.coverImage"
                  class="zoom"
                />
                <figcaption>
                  <b v-html="$static.alaUne.belongsTo.edges[0].node.title"></b>
                  <p
                    v-html="
                      $static.alaUne.belongsTo.edges[0].node.metaDescription
                    "
                    class="space"
                  ></p>
                  <arrowicon />
                </figcaption>
              </figure>
            </div>

            <div class="column is-half">
              <figure>
                <g-image
                  :src="$static.alaUne.belongsTo.edges[1].node.coverImage"
                  class="zoom"
                />
                <figcaption>
                  <b v-html="$static.alaUne.belongsTo.edges[1].node.title"></b>
                  <p
                    v-html="
                      $static.alaUne.belongsTo.edges[1].node.metaDescription
                    "
                    class="space"
                  ></p>
                  <arrowicon />
                </figcaption>
              </figure>
            </div>

            <div class="column is-half mb-0">
              <figure>
                <g-image
                  :src="$static.alaUne.belongsTo.edges[4].node.coverImage"
                  class="zoom"
                />
                <figcaption>
                  <b v-html="$static.alaUne.belongsTo.edges[4].node.title"></b>
                  <p
                    v-html="
                      $static.alaUne.belongsTo.edges[4].node.metaDescription
                    "
                    class="space"
                  ></p>
                </figcaption>
              </figure>
            </div>

            <div class="column is-half mb-0">
              <figure>
                <g-image
                  :src="$static.alaUne.belongsTo.edges[3].node.coverImage"
                  class="zoom"
                />
                <figcaption>
                  <b v-html="$static.alaUne.belongsTo.edges[3].node.title"></b>
                  <p
                    v-html="
                      $static.alaUne.belongsTo.edges[3].node.metaDescription
                    "
                    class="space"
                  ></p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
     <div class="columns" style="padding-top: 0px">
            <div class="column is-half"><arrowicon /></div>
            <div class="column"><arrowicon /></div>
            <div class="column"><arrowicon /></div>
          </div>
      <div class="columns is-1" style="padding-top:20px">
        <div class="column">
          <figure>
            <g-image
              :src="$static.alaUne.belongsTo.edges[2].node.coverImage"
              class="zoom "
            />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[2].node.title"></b>
              <p
                v-html="$static.alaUne.belongsTo.edges[2].node.metaDescription"
                class="space"
              ></p>
              <arrowicon />
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure>
            <g-image
              :src="$static.alaUne.belongsTo.edges[5].node.coverImage"
              class="zoom"
            />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[5].node.title"></b>
              <p
                v-html="$static.alaUne.belongsTo.edges[5].node.metaDescription"
                class="space"
              ></p>
              <arrowicon />
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure>
            <g-image
              :src="$static.alaUne.belongsTo.edges[6].node.coverImage"
              class="zoom"
            />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[6].node.title"></b>
              <p
                v-html="$static.alaUne.belongsTo.edges[6].node.metaDescription"
                class="space"
              ></p>
              <arrowicon />
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="columns is-1">
        <div class="column">
          <figure>
            <g-image
              :src="$static.alaUne.belongsTo.edges[7].node.coverImage"
              class="zoom"
            />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[7].node.title"></b>
              <p
                v-html="$static.alaUne.belongsTo.edges[7].node.metaDescription"
                class="space"
              ></p>
              <arrowicon />
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure>
            <g-image
              :src="$static.alaUne.belongsTo.edges[8].node.coverImage"
              class="zoom"
            />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[8].node.title"></b>
              <p
                v-html="$static.alaUne.belongsTo.edges[8].node.metaDescription"
                class="space"
              ></p>
              <arrowicon />
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure>
            <g-image
              :src="$static.alaUne.belongsTo.edges[9].node.coverImage"
              class="zoom"
            />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[9].node.title"></b>
              <p
                v-html="$static.alaUne.belongsTo.edges[9].node.metaDescription"
                class="space"
              ></p>
              <arrowicon />
            </figcaption>
          </figure>
        </div>
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

  alaUne: category(id: "A la Une / Rintio Stories")  {
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
  alaUne_feature: category(id: "A la Une / Rintio Stories feature")  {
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
import arrowicon from "~/components/arrow-icon.vue";
export default {
  components: { arrowicon },
  props: ["NosEngagement", "alaUne"],
};
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
.space {
  padding-top: 10px;
}
</style>
