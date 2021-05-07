<template>
  <div class="container is-fluid">
    <div class="row">
      <div class="columns">
        <div
          class="column is-6"
          v-for="edge in $static.dataLab_feature.belongsTo.edges"
          :key="edge.node.id"
        >
          <figure>
            <span
              class="is-white is-small tag has-text-primary realisationWS"
              style="border-radius: 0px"
            >
              <b>Rintio Data Lab</b>
            </span>
            <g-image :src="edge.node.coverImage" class="zoom" />
            <p v-html="edge.node.content" class="is-mobile"></p>
            <figcaption>
              <p
                v-html="
                  edge.node.metaDescription
                "
                class="space"
              ></p>
            </figcaption>
          </figure>
        </div>
        <div
          class="column is-3"
          v-for="edge in $static.dataLab.belongsTo.edges"
          :key="edge.node.id"
        >
          <figure>
            <span
              class="is-white is-small tag has-text-primary realisationWS"
              style="border-radius: 0px"
            >
              <b>Rintio Data Lab</b>
            </span>
            <g-image :src="edge.node.coverImage" class="zoom" />

            <figcaption>
              <p v-html="
                  edge.node.content
                " class="space"></p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div>
        <div class="row">
          <div class="columns is-hidden-mobile" style="padding-top: 0px">
            <div
              class="column is-6"
              v-for="edge in $static.dataLab_feature.belongsTo.edges"
              :key="edge.node.id"
            >
              <div class="columns">
                <div class="column button-container-center" v-if="edge.node.button">
                  <a class="button is-primary button-link-half">{{ edge.node.button }}</a>
                </div>
                <arrowicon class="arrow-pulled" />
              </div>
            </div>
            <div
              class="column is-3"
              v-for="edge in $static.dataLab.belongsTo.edges"
              :key="edge.node.id"
            >
              <div class="columns">
                <div class="column button-container-center" v-if="edge.node.button">
                  <a class="button is-primary button-link-half-d">{{ edge.node.button }}</a>
                </div>
                <arrowicon class="arrow-pulled" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns">
          <div
            class="column is-6"
            v-for="edge in $static.dataLabRow.belongsTo.edges"
            :key="edge.node.id"
          >
            <figure>
              <span
                class="is-white is-small tag has-text-primary realisationWS"
                style="border-radius: 0px"
              >
                <b>Rintio Data Lab</b>
              </span>
              <g-image :src="edge.node.coverImage" class="zoom" />
              <p v-html="edge.node.content" class="is-mobile"></p>
              <figcaption>
                <p
                  v-html="
                  edge.node.metaDescription
                "
                  class="space"
                ></p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="row">
          <div class="columns is-hidden-mobile" style="padding-top: 0px">
            <div
              class="column is-6"
              v-for="edge in $static.dataLabRow.belongsTo.edges"
              :key="edge.node.id"
            >
              <div class="columns">
                <div class="column button-container-center" v-if="edge.node.button">
                  <a class="button is-primary button-link-half">{{ edge.node.button }}</a>
                </div>
                <arrowicon class="arrow-pulled" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  dataLab_feature: category(id: "Rintio Data Lab") {
    id
    title
    path
    belongsTo(limit: 1) {
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

  dataLab: category(id: "Rintio Data Lab") {
    id
    title
    path
    belongsTo(skip: 1, limit: 2) {
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

  dataLabRow: category(id: "Rintio Data Lab") {
    id
    title
    path
    belongsTo(skip: 3, limit: 2) {
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
}
</static-query>

<script>
import arrowicon from "~/components/arrow-icon.vue";

export default {
  components: { arrowicon },
};
</script>

<style scoped>
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
  padding-left: 7%;
  padding-right: 7%;
  font-size: 12px;
  margin-bottom: 5%;
}

.button-link-half-d {
  padding-left: 17%;
  padding-right: 17%;
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

.arrow-wrapper {
  margin-top: -9%;
}

.arrow-pulled {
  margin-top: 0%;
  margin-right: 2em;
  margin-left: 0em;
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