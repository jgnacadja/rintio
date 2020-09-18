<template>
  <div class="section container is-fluid">
    <div class="columns">
      <div
        class="column is-6"
        v-for="edge in $static.nosoffres_feature.belongsTo.edges"
        :key="edge.node.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <g-image :src="edge.node.coverImage" class="zoom" />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="row shadow_11 content-padding">
              <div class="is-primary">
                <b>{{ edge.node.title }}</b>
                <br />
                {{ edge.node.metaDescription }}
                <br />
                <div class="columns is-mobile">
                  <div class="column">
                    <ul>
                      <li>{{ edge.node.subMetaDescriptionLeft }}</li>
                      <li>{{ edge.node.subMetaDescriptionLeftDown }}</li>
                    </ul>
                  </div>
                  <div class="column">
                    <ul>
                      <li>{{ edge.node.subMetaDescriptionRigth }}</li>
                      <li>{{ edge.node.subMetaDescriptionRigthDown }}</li>
                    </ul>
                  </div>
                  <div class="column">
                    <arrowicon
                      :colore="true"
                      :no_colore="true"
                      style="    position: relative;
    bottom: -40%;left:4%; font-size:12px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div
            class="column is-6"
            v-for="edge in $static.nosoffresHalfOne.belongsTo.edges"
            :key="edge.node.id"
          >
            <div class="card zoom">
              <div class="card-image">
                <figure class="image is-4by3">
                  <g-image :src="edge.node.coverImage" />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="is-primary shadow_21 content-padding">
                  <b>{{ edge.node.title }}</b>
                  <br />
                  <div class="shadow_3">
                    <b style="font-weight:bolder">{{ edge.node.metaDescription }}</b>
                    {{ edge.node.subDescription }}
                  </div>
                </div>
                <div class="buttons are-medium shadow41">
                  <button
                    class="button is-link"
                    style="width:80%; color: white;height:30px; border-radius:0px; font-size:12px;"
                  >Profitez de l'offre</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div
        class="column is-6"
        v-for="edge in $static.nosoffres_subfeatureOne.belongsTo.edges"
        :key="edge.node.id"
      >
        <div class="card zoom">
          <div class="card-image">
            <figure class="image is-3by3">
              <g-image :src="edge.node.coverImage" />
            </figure>
          </div>

          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow1 content-padding">
              <b>{{ edge.node.title }}</b>
              <br />

              <div class="columns is-mobile">
                <div class="column is-10 shadow_4">
                  {{ edge.node.descriptionUp }} {{
                  edge.node.descriptionDown }}
                  <br />
                </div>
                <div class="column">
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative; bottom: -60%; left: 85%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="column"
        v-for="edge in $static.nosoffresHalfTwo.belongsTo.edges"
        :key="edge.node.id"
      >
        <div class="card zoom">
          <div class="card-image">
            <figure class="image is-4by3">
              <g-image :src="edge.node.coverImage" />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow_25 content-padding">
              <b>{{ edge.node.title }}</b>
              <br />
              <div class="columns is-mobile">
                <div class="column is-10 shadow_3">{{ edge.node.metaDescription }}</div>
                <div class="column">
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative; bottom: -70%; left: 60%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div
        class="column is-6"
        v-for="edge in $static.nosoffres_subfeatureTwo.belongsTo.edges"
        :key="edge.node.id"
      >
        <div class="card zoom">
          <div class="card-image">
            <figure class="image is-3by3">
              <g-image :src="edge.node.coverImage" />
            </figure>
          </div>

          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow1">
              <b>{{ edge.node.title }}</b>
              <br />

              <div class="columns is-mobile">
                <div class="column is-10 shadow_4">
                  {{ edge.node.descriptionUp }} {{
                  edge.node.descriptionDown }}
                  <br />
                </div>
                <div class="column">
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative; bottom: -60%; left: 85%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="column"
        v-for="edge in $static.nosoffresHalfThree.belongsTo.edges"
        :key="edge.node.id"
      >
        <div class="card zoom">
          <div class="card-image">
            <figure class="image is-4by3">
              <g-image :src="edge.node.coverImage" />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow_25 content-padding">
              <b>{{ edge.node.title }}</b>
              <br />
              <div class="columns is-mobile">
                <div class="column is-10 shadow_3">{{ edge.node.metaDescription }}</div>
                <div class="column">
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative; bottom: -70%; left: 60%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div
        class="column is-6"
        v-for="edge in $static.nosoffres_subfeatureThree.belongsTo.edges"
        :key="edge.node.id"
      >
        <div class="card zoom">
          <div class="card-image">
            <figure class="image is-3by3">
              <g-image :src="edge.node.coverImage" />
            </figure>
          </div>

          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow1 content-padding">
              <b>{{ edge.node.title }}</b>
              <br />

              <div class="columns is-mobile">
                <div class="column is-10 shadow_4">
                  {{ edge.node.descriptionUp }}
                  <br />
                  {{
                  edge.node.descriptionDown }}
                  <br />
                </div>
                <div class="column">
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative; bottom: -60%; left: 85%"
                  />
                </div>
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
  nosoffres_feature: category(id: "Nos offres features") {
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
            subMetaDescriptionLeft
            subMetaDescriptionLeftDown
            subMetaDescriptionRigth
            subMetaDescriptionRigthDown
          }
        }
      }
    }
  }

  nosoffres_subfeatureOne: category(id: "Nos offres feature") {
    id
    title
    path
    belongsTo(limit: 1) {
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
            descriptionUp
            descriptionDown
          }
        }
      }
    }
  }

  nosoffres_subfeatureTwo: category(id: "Nos offres feature") {
    id
    title
    path
    belongsTo(skip: 1, limit: 1) {
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
            descriptionUp
            descriptionDown
          }
        }
      }
    }
  }

  nosoffres_subfeatureThree: category(id: "Nos offres feature") {
    id
    title
    path
    belongsTo(skip: 2, limit: 1) {
      edges {
        node {
          ... on Article {
            id
            title
            coverImage
            path
            content
            metaDescription
            subMetaDescriptionLeft
            subMetaDescriptionLeftDown
            subMetaDescriptionRigth
            subMetaDescriptionRigthDown
            descriptionUp
            descriptionDown
          }
        }
      }
    }
  }

  nosoffresHalfOne: category(id: "Nos offres") {
    id
    title
    path
    belongsTo(limit: 4) {
      edges {
        node {
          ... on Article {
            id
            date
            title
            coverImage
            path
            content
            metaDescription
            subDescription
          }
        }
      }
    }
  }

  nosoffresHalfTwo: category(id: "Nos offres") {
    id
    title
    path
    belongsTo(skip: 4, limit: 2) {
      edges {
        node {
          ... on Article {
            id
            date
            title
            coverImage
            path
            content
            metaDescription
            subDescription
          }
        }
      }
    }
  }

  nosoffresHalfThree: category(id: "Nos offres") {
    id
    title
    path
    belongsTo(skip: 6, limit: 2) {
      edges {
        node {
          ... on Article {
            id
            date
            title
            coverImage
            path
            content
            metaDescription
            subDescription
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
  components: {
    arrowicon,
  },
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

/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up)*/
/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) {
  .shadow_11 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -50%;
  }
  .shadow1 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -45%;
  }
  .shadow2 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -47%;
  }
  .shadow3 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -50%;
  }

  .shadow_2 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    margin-top: 15%;
  }
  .shadow_21 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
  }
  .shadow41 {
    position: relative;
    bottom: -4%;
    left: 10%;
  }
  .shadow_22 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -2%;
  }
  .shadow_23 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
  }
  .shadow_24 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -5%;
  }
  .shadow_25 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: 16%;
  }
  .shadow_26 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: 18%;
  }
  .shadow_27 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -10%;
  }
  .shadow_28 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: 5%;
  }
  .shadow_3 {
    font-size: 12px;
  }
  .shadow_4 {
    font-size: 12px;
  }
}

/* Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 992px) and (max-width: 1199.98px) {
  .shadow_11 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -50%;
  }
  .shadow1 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -45%;
  }
  .shadow2 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -40%;
  }
  .shadow3 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -40%;
  }

  .shadow_2 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    margin-top: 15%;
  }
  .shadow_21 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: 10%;
  }
  .shadow_22 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: 5%;
  }
  .shadow41 {
    position: relative;
    bottom: 0%;
    margin-left: 22%;
  }
  .shadow_23 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: 5%;
  }
  .shadow_24 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -5%;
  }
  .shadow_25 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: 5%;
  }
  .shadow_26 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: 12%;
  }
  .shadow_27 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -8%;
  }
  .shadow_28 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
  }
  .shadow_3 {
    font-size: 12px;
  }
  .shadow_4 {
    font-size: 12px;
  }
}
/*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) and (max-width: 1600px) {
  .shadow_11 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -60%;
  }
  .shadow1 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -60%;
  }
  .shadow2 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -60%;
  }
  .shadow3 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -60%;
  }

  .shadow_2 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    margin-top: 15%;
  }
  .shadow_21 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -20%;
  }
  .shadow_22 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -30%;
  }
  .shadow41 {
    position: relative;
    bottom: -25%;
    margin-left: 30%;
  }
  .shadow_23 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -20%;
  }
  .shadow_24 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -46%;
  }
  .shadow_25 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -36%;
  }
  .shadow_26 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -36%;
  }
  .shadow_27 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -36%;
  }
  .shadow_28 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -50%;
  }
  .shadow_3 {
    font-size: 14px;
  }
  .shadow_4 {
    font-size: 15px;
  }
}
/*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1601px) and (max-width: 1800px) {
  .shadow_11 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -80%;
  }
  .shadow1 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -65%;
  }
  .shadow2 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -65%;
  }
  .shadow3 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -60%;
  }

  .shadow_2 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    margin-top: 15%;
  }
  .shadow_21 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -30%;
  }
  .shadow_22 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -46%;
  }
  .shadow41 {
    position: relative;
    bottom: -34%;
    margin-left: 25%;
  }
  .shadow_23 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -30%;
  }
  .shadow_24 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -46%;
  }
  .shadow_25 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -36%;
  }
  .shadow_26 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -36%;
  }
  .shadow_27 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -36%;
  }
  .shadow_28 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -50%;
  }
  .shadow_3 {
    font-size: 20px;
  }
  .shadow_4 {
    font-size: 16px;
  }
}
/*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1801px) {
  .shadow_11 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -75%;
    font-size: 23px;
  }
  .shadow1 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -65%;
  }
  .shadow2 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -65%;
  }
  .shadow3 {
    background-color: #54514db8;
    opacity: 1;
    color: white;
    position: relative;
    bottom: -60%;
  }

  .shadow_2 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    margin-top: 15%;
  }
  .shadow_21 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -30%;
  }
  .shadow_22 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -46%;
  }
  .shadow41 {
    position: relative;
    bottom: -34%;
    margin-left: 25%;
  }
  .shadow_23 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -30%;
  }
  .shadow_24 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -46%;
  }
  .shadow_25 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -38%;
  }
  .shadow_26 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -36%;
  }
  .shadow_27 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -36%;
  }
  .shadow_28 {
    background-color: #54514db8;
    opacity: 0.9;
    font-weight: 900;
    color: white;
    position: relative;
    bottom: -50%;
  }
  .shadow_3 {
    font-size: 23px;
  }
  .shadow_4 {
    font-size: 20px;
  }
}

.content-padding {
  padding: 0.5em;
}
</style>
