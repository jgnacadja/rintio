<template>
  <div class="container is-fluid">
    <br />
    <div v-if="alaUne">
      <div class="columns">
        <div
          class="column is-6"
          v-for="edge in $static.alaUne_feature.belongsTo.edges"
          :key="edge.node.id"
        >
          <figure>
            <span
              class="is-white is-small tag has-text-primary realisationWS"
              style="
    border-radius: 0px;
"
            >
              <b>Nos Réalisations</b>
            </span>
            <g-image :src="edge.node.coverImage" class="zoom" />
            <figcaption>
              <b v-html="edge.node.title"></b>
              <p
                v-html="
                  edge.node.metaDescription
                "
                class="space"
              ></p>
            </figcaption>
          </figure>
        </div>

        <div class="column is-6">
          <div class="row">
            <div class="columns is-multiline is-12">
              <div
                class="column is-half"
                v-for="edge in $static.alaUneHalfOne.belongsTo.edges"
                :key="edge.node.id"
              >
                <figure>
                  <span
                    class="is-white is-small tag has-text-primary realisationWS"
                    style="
    border-radius: 0px;
"
                  >
                    <b>Nos Engagements</b>
                  </span>
                  <g-image
                    :src="edge.node.coverImage"
                    style="position:relative z-index:0 height: 598px;"
                    class="zoom"
                  />

                  <figcaption>
                    <b v-html="edge.node.title"></b>
                    <p
                      v-html="
                      edge.node.metaDescription
                    "
                      class="space"
                    ></p>
                    <arrowicon class="is-hidden-tablet" />
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="row">
              <div class="columns is-hidden-mobile" style="padding-top: 0px">
                <div class="column">
                  <arrowicon />
                </div>
                <div class="column">
                  <arrowicon />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="columns is-multiline is-12">
                <div
                  class="column is-half"
                  v-for="edge in $static.alaUneHalfTwo.belongsTo.edges"
                  :key="edge.node.id"
                >
                  <figure>
                    <span
                      class="is-white is-small tag has-text-primary realisationWS"
                      style="
    border-radius: 0px;
"
                    >
                      <b>Nos Engagements</b>
                    </span>
                    <g-image
                      :src="edge.node.coverImage"
                      style="position:relative z-index:0 height: 598px;"
                      class="zoom"
                    />

                    <figcaption>
                      <b v-html="edge.node.title"></b>
                      <p
                        v-html="
                      edge.node.metaDescription
                    "
                        class="space"
                      ></p>
                      <arrowicon class="is-hidden-tablet" />
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-hidden-mobile" style="padding-top: 0px">
        <div class="column is-half">
          <arrowicon />
        </div>
        <div class="column">
          <arrowicon />
        </div>
        <div class="column">
          <arrowicon />
        </div>
      </div>
      <div class="columns is-1" style="padding-top:20px">
        <div
          class="column"
          v-for="edge in $static.alaUneHalfBottomRow.belongsTo.edges"
          :key="edge.node.id"
        >
          <figure>
            <span
              class="is-white is-small tag has-text-primary realisationWS"
              style="
    border-radius: 0px;
"
            >
              <b>Nos Réalisations</b>
            </span>
            <g-image :src="edge.node.coverImage" class="zoom" />
            <figcaption>
              <b v-html="edge.node.title"></b>
              <p v-html="edge.node.metaDescription" class="space"></p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="columns is-1" style="padding-top:20px">
        <div
          class="column"
          v-for="edge in $static.alaUneHalfBottomRowTwo.belongsTo.edges"
          :key="edge.node.id"
        >
          <figure>
            <span
              class="is-white is-small tag has-text-primary realisationWS"
              style="
    border-radius: 0px;
"
            >
              <b>Nos Réalisations</b>
            </span>
            <g-image :src="edge.node.coverImage" class="zoom" />
            <figcaption>
              <b v-html="edge.node.title"></b>
              <p v-html="edge.node.metaDescription" class="space"></p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div v-if="NosEngagement">
      <div class="columns">
        <div
          class="column is-6"
          v-for="edge in $static.nosEngagements_feature.belongsTo.edges"
          :key="edge.node.id"
        >
          <figure>
            <span
              class="is-white is-small tag has-text-primary realisationWS"
              style="border-radius: 0px"
            >
              <b>Nos Engagements</b>
            </span>
            <g-image :src="edge.node.coverImage" class="zoom" />
            <!-- <span class="is-white is-small card-content is-overlay">
              
            </span>-->
            <div class="row shadow_1">
              <div class="is-primary">
                <b>{{ edge.node.subDescription }}</b>
                <br />
                <span v-html=" edge.node.subDescriptionDown "></span>
                <br />
                <span v-html=" edge.node.DescriptionDown "></span>
              </div>
            </div>
            <div class="button-container-center">
              <a class="button is-primary button-link">{{ edge.node.button }}</a>
            </div>
            <figcaption>
              <b v-html="edge.node.title"></b>
              <p
                v-html="
                  edge.node.metaDescription
                "
                class="space"
              ></p>
            </figcaption>
          </figure>
        </div>

        <div class="column is-6">
          <div class="row">
            <div class="columns is-multiline is-12">
              <div
                class="column is-half"
                v-for="edge in $static.nosEngagementsHalfOne.belongsTo.edges"
                :key="edge.node.id"
              >
                <figure>
                  <span
                    class="is-white is-small tag has-text-primary realisationWS"
                    style="
    border-radius: 0px;
"
                  >
                    <b>Nos Engagements</b>
                  </span>
                  <g-image
                    :src="edge.node.coverImage"
                    style="position:relative z-index:0 height: 598px;"
                    class="zoom"
                  />
                  <div class="button-container-center button-container-fluid">
                    <a class="button is-primary button-link-half">{{ edge.node.button }}</a>
                  </div>
                  <figcaption>
                    <b v-html="edge.node.title"></b>
                    <p
                      v-html="
                      edge.node.metaDescription
                    "
                      class="space"
                    ></p>
                    <arrowicon class="is-hidden-tablet" />
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="row">
              <div class="columns is-hidden-mobile" style="padding-top: 0px">
                <div class="column">
                  <arrowicon />
                </div>
                <div class="column">
                  <arrowicon />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="columns is-multiline is-12">
                <div
                  class="column is-half"
                  v-for="edge in $static.nosEngagementsHalfTwo.belongsTo.edges"
                  :key="edge.node.id"
                >
                  <figure>
                    <span
                      class="is-white is-small tag has-text-primary realisationWS"
                      style="
    border-radius: 0px;
"
                    >
                      <b>Nos Engagements</b>
                    </span>
                    <g-image
                      :src="edge.node.coverImage"
                      style="position:relative z-index:0 height: 598px;"
                      class="zoom"
                    />
                    <div
                      class="button-container-center button-container-fluid"
                      v-if="edge.node.button"
                    >
                      <a class="button is-primary button-link-half">{{ edge.node.button }}</a>
                    </div>
                    <figcaption>
                      <b v-html="edge.node.title"></b>
                      <p
                        v-html="
                      edge.node.metaDescription
                    "
                        class="space"
                      ></p>
                      <arrowicon class="is-hidden-tablet" />
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-hidden-mobile" style="padding-top: 0px">
        <div class="column is-half">
          <arrowicon />
        </div>
        <div class="column">
          <arrowicon />
        </div>
        <div class="column">
          <arrowicon />
        </div>
      </div>
      <div class="columns" style="padding-top:20px">
        <div
          class="column is-6"
          v-for="edge in $static.nosEngagementsBottomRow.belongsTo.edges"
          :key="edge.node.id"
        >
          <figure>
            <span
              class="is-white is-small tag has-text-primary realisationWS"
              style="border-radius: 0px"
            >
              <b>Nos Engagements</b>
            </span>
            <g-image :src="edge.node.coverImage" class="zoom" />
            <div
              class="button-container-center button-container-fluid-large"
              v-if="edge.node.button"
            >
              <a class="button is-primary button-link .button-link-half-self">{{ edge.node.button }}</a>
            </div>
            <figcaption>
              <b v-html="edge.node.title"></b>
              <p v-html="edge.node.metaDescription" class="space"></p>
            </figcaption>
          </figure>
        </div>
        <div
          class="column is-3"
          v-for="edge in $static.nosEngagementsBottomRowHalf.belongsTo.edges"
          :key="edge.node.id"
        >
          <figure>
            <span
              class="is-white is-small tag has-text-primary realisationWS"
              style="border-radius: 0px"
            >
              <b>Nos Engagements</b>
            </span>
            <g-image :src="edge.node.coverImage" class="zoom" />
            <div class="button-container-center button-container-fluid" v-if="edge.node.button">
              <a class="button is-primary button-link-half">{{ edge.node.button }}</a>
            </div>
            <figcaption>
              <b v-html="edge.node.title"></b>
              <p v-html="edge.node.metaDescription" class="space"></p>
            </figcaption>
          </figure>
        </div>
      </div>
            <div class="columns is-hidden-mobile" style="padding-top: 0px">
        <div class="column is-half">
          <arrowicon />
        </div>
        <div class="column">
          <arrowicon />
        </div>
        <div class="column">
          <arrowicon />
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
            button
            path
          }
        }
      }
    }
  }
  nosEngagements_feature: category(id: "Nos Engagements feature") {
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
            subDescription
            subDescriptionDown
            DescriptionDown
            button
            path
          }
        }
      }
    }
  }

  nosEngagementsHalfOne: category(id: "Nos Engagements") {
    id
    title
    path
    belongsTo(limit: 2) {
      edges {
        node {
          ... on Article {
            id
            title
            coverImage
            path
            content
            metaDescription
            button
            path
          }
        }
      }
    }
  }

  nosEngagementsHalfTwo: category(id: "Nos Engagements") {
    id
    title
    path
    belongsTo(skip: 2, limit: 2) {
      edges {
        node {
          ... on Article {
            id
            title
            coverImage
            path
            content
            metaDescription
            button
            path
          }
        }
      }
    }
  }
  nosEngagementsBottomRow: category(id: "Nos Engagements") {
    id
    title
    path
    belongsTo(skip: 4, limit: 1) {
      edges {
        node {
          ... on Article {
            id
            title
            coverImage
            path
            content
            metaDescription
            button
            path
          }
        }
      }
    }
  }
  nosEngagementsBottomRowHalf: category(id: "Nos Engagements") {
    id
    title
    path
    belongsTo(skip: 5, limit: 2) {
      edges {
        node {
          ... on Article {
            id
            title
            coverImage
            path
            content
            metaDescription
            button
            path
          }
        }
      }
    }
  }

  alaUne: category(id: "A la Une / Rintio Stories") {
    id
    title
    path
    belongsTo {
      edges {
        node {
          ... on Article {
            id
            title
            date
            coverImage
            path
            content
            metaDescription
            button
            path
          }
        }
      }
    }
  }

  alaUne_feature: category(id: "A la Une / Rintio Stories feature") {
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
            button
            path
          }
        }
      }
    }
  }

  alaUneHalfOne: category(id: "A la Une / Rintio Stories") {
    id
    title
    path
    belongsTo(limit: 2) {
      edges {
        node {
          ... on Article {
            id
            title
            date
            coverImage
            path
            content
            metaDescription
            button
            path
          }
        }
      }
    }
  }

  alaUneHalfTwo: category(id: "A la Une / Rintio Stories") {
    id
    title
    path
    belongsTo(skip: 2, limit: 2) {
      edges {
        node {
          ... on Article {
            id
            title
            date
            coverImage
            path
            content
            metaDescription
            button
            path
          }
        }
      }
    }
  }

  alaUneHalfBottomRow: category(id: "A la Une / Rintio Stories") {
    id
    title
    path
    belongsTo(skip: 4, limit: 3) {
      edges {
        node {
          ... on Article {
            id
            title
            date
            coverImage
            path
            content
            metaDescription
            button
            path
          }
        }
      }
    }
  }

  alaUneHalfBottomRowTwo: category(id: "A la Une / Rintio Stories") {
    id
    title
    path
    belongsTo(skip: 7, limit: 3) {
      edges {
        node {
          ... on Article {
            id
            title
            date
            coverImage
            path
            content
            metaDescription
            button
            path
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
.inscrireWSFF {
  border-color: transparent !important;
  font-size: 16px !important;
}
.inscrireWSFF {
  position: relative;
  bottom: 80px;
  left: 250px;
}
.inscrireWSF {
  position: relative;
  bottom: 70px;
  left: 300px;
}
.inscrireFeature {
  position: relative;
  bottom: 130px;
}
.inscrireWS {
  position: relative;
  top: -70px;
  left: 90px;
}
.realisationWS {
  position: relative;
  bottom: -50px;
  left: 20px;
  z-index: 1;
  border-radius: 0px;
}
.card {
  box-shadow: none;
}
.shadow_1 {
  background-color: #54514db8;
  opacity: 0.9;
  color: white;
  padding-left: 1.5%;
  font-size: 14px;
  position: relative;
  bottom: -75%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
  margin-top: -20%;
}

.button-link {
  font-size: 12px;
  padding-left: 6%;
  padding-right: 6%;
  margin-bottom: 5%;
}

.button-link-half {
  padding-left: 12%;
  padding-right: 12%;
  font-size: 12px;
  margin-bottom: 5%;
}

.button-container-center {
  text-align: center;
}

.button-container {
  margin-top: -8%;
  margin-bottom: 4%;
}

.button-container-fluid {
  margin-top: -18%;
  margin-bottom: 4%;
}

.button-container-fluid-large {
  margin-top: -10%;
}

@media only screen and (max-width: 415px) {
  .content-14 {
    font-size: 14px;
  }

  .wrapper_container {
    padding-left: 10%;
    padding-right: 10%;
  }

  .shadow_1 {
    background-color: #54514db8;
    opacity: 0.9;
    color: white;
    padding-left: 1.5%;
    font-size: 14px;
    position: relative;
    bottom: -75%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;
    margin-top: -40%;
  }

  .button-container-fluid-large {
    margin-top: -15%;
  }

  .button-link {
    font-size: 12px;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 5%;
  }
}
</style>
