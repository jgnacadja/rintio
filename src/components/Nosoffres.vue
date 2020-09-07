<template>
  <div class="container is-fluid">
    <h2 class="title is-size-2 has-text-primary" style="text-align: left">Nos offres</h2>
    <div class="columns">
      <div class="column is-half">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <g-image :src="$static.features.belongsTo.edges[0].node.coverImage" />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="row shadow_11">
              <div class="is-primary">
                <b>{{ $static.features.belongsTo.edges[0].node.title }}</b>
                <br />
                {{ $static.features.belongsTo.edges[0].node.metaDescription }}
                <br />
                <div class="columns is-mobile">
                  <div class="column">
                    <ul>
                      <li>{{ $static.features.belongsTo.edges[0].node.subMetaDescriptionLeft }}</li>
                      <li>{{ $static.features.belongsTo.edges[0].node.subMetaDescriptionLeftDown }}</li>
                    </ul>
                  </div>
                  <div class="column">
                    <ul>
                      <li>{{ $static.features.belongsTo.edges[0].node.subMetaDescriptionRigth }}</li>
                      <li>{{ $static.features.belongsTo.edges[0].node.subMetaDescriptionRigthDown }}</li>
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
        <div class="columns">
          <div class="column is-half">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <g-image :src="$static.articles.belongsTo.edges[0].node.coverImage" />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="is-primary shadow_21">
                  <b>{{ $static.articles.belongsTo.edges[0].node.title }}</b>
                  <br />
                  <div class="shadow_3">
                    <b
                      style="font-weight:bolder"
                    >{{ $static.articles.belongsTo.edges[0].node.metaDescription }}</b>
                    {{ $static.articles.belongsTo.edges[0].node.subDescription }}
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
          <div class="column is-half">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <g-image :src="$static.articles.belongsTo.edges[1].node.coverImage" />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="is-primary shadow_22">
                  <b>{{ $static.articles.belongsTo.edges[1].node.title }}</b>
                  <br />
                  <div class="columns is-mobile shadow_3">
                    <div
                      class="column is-10"
                    >{{ $static.articles.belongsTo.edges[1].node.metaDescription }}</div>
                    <div class="column">
                      <br />
                      <arrowicon
                        :colore="true"
                        :no_colore="true"
                        class="icon is-small"
                        style="position: relative;bottom: -44%; left:40%"
                      />
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
                <figure class="image is-4by3">
                  <g-image :src="$static.articles.belongsTo.edges[2].node.coverImage" />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="is-primary shadow_23">
                  <b>{{ $static.articles.belongsTo.edges[2].node.title }}</b>
                  <br />
                  <div class="shadow_3">
                    {{ $static.articles.belongsTo.edges[2].node.metaDescription }}
                    <br />

                    {{ $static.articles.belongsTo.edges[2].node.subDescription }}
                  </div>
                </div>
                <div class="buttons are-medium shadow41">
                  <button
                    class="button is-link"
                    style="width:70%; color: white;height:30px; border-radius:0px; font-size:12px;"
                  >Profitez de l'offre</button>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <g-image :src="$static.articles.belongsTo.edges[3].node.coverImage" />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="is-primary shadow_24">
                  <b>{{ $static.articles.belongsTo.edges[3].node.title }}</b>
                  <br />
                  <div class="columns is-mobile">
                    <div
                      class="column is-10 shadow_3"
                    >{{ $static.articles.belongsTo.edges[3].node.metaDescription }}</div>
                    <div class="column">
                      <br />
                      <arrowicon
                        :colore="true"
                        :no_colore="true"
                        class="icon is-small"
                        style="position: relative;bottom: -20%;left:40%;"
                      />
                    </div>
                  </div>
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
                :src="$static.feature.belongsTo.edges[0].node.coverImage" />
            </figure>
          </div>

          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow1">
              <b>{{ $static.feature.belongsTo.edges[0].node.title }}</b>
              <br />

              <div class="columns is-mobile">
                <div class="column is-10 shadow_4">
                  {{ $static.feature.belongsTo.edges[0].node.descriptionUp }}
                  {{ $static.feature.belongsTo.edges[0].node.descriptionDown }}
                  <br />
                </div>
                <div class="column">
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative;bottom: -60%;left:85%;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <g-image :src="$static.articles.belongsTo.edges[4].node.coverImage" />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow_25">
              <b>{{ $static.articles.belongsTo.edges[4].node.title }}</b>
              <br />
              <div class="columns is-mobile">
                <div
                  class="column is-10 shadow_3"
                >{{ $static.articles.belongsTo.edges[4].node.metaDescription }}</div>
                <div class="column">
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative;bottom: -70%;left:60%;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <g-image :src="$static.articles.belongsTo.edges[5].node.coverImage" />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow_26">
              <b>{{ $static.articles.belongsTo.edges[5].node.title }}</b>
              <br />
              <div class="columns is-mobile">
                <div
                  class="column is-10 shadow_3"
                >{{ $static.articles.belongsTo.edges[5].node.metaDescription }}</div>
                <div class="column">
                  <br />
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative;bottom: -50%;left:50%;"
                  />
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
                :src="$static.feature.belongsTo.edges[1].node.coverImage"/>
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow2">
              <b>{{ $static.feature.belongsTo.edges[1].node.title }}</b>
              <br />

              <div class="columns is-mobile">
                <div class="column is-10 shadow_4">
                  {{ $static.feature.belongsTo.edges[1].node.descriptionUp }}
                  <br />
                  {{ $static.feature.belongsTo.edges[1].node.descriptionDown }}
                </div>
                <div class="column">
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative;bottom: -50%;left:85%;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <g-image :src="$static.articles.belongsTo.edges[6].node.coverImage" />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow_27">
              <b>{{ $static.articles.belongsTo.edges[6].node.title }}</b>
              <br />
              <div class="columns is-mobile">
                <div class="column is-10 shadow_3">
                  {{ $static.articles.belongsTo.edges[6].node.metaDescription }}
                  <br />

                  {{ $static.articles.belongsTo.edges[6].node.subDescription }}
                </div>
                <div class="column shadow_3">
                  <br />
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative;bottom: -50%;left:60%;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <g-image :src="$static.articles.belongsTo.edges[7].node.coverImage" />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow_28">
              <b>{{ $static.articles.belongsTo.edges[7].node.title }}</b>
              <br />
              <div class="columns is-mobile">
                <div class="column is-10 shadow_3">
                  {{ $static.articles.belongsTo.edges[7].node.metaDescription }}
                  <br />

                  {{ $static.articles.belongsTo.edges[7].node.subDescription }}
                </div>
                <div class="column">
                  <br />
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative;bottom: -40%;left:60%;"
                  />
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
              <g-image :src="$static.feature.belongsTo.edges[2].node.coverImage" />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow3">
              <b>{{ $static.feature.belongsTo.edges[2].node.title }}</b>
              <br />

              <div class="columns is-mobile">
                <div class="column is-10 shadow_4">
                  <ul>
                    <li>{{ $static.feature.belongsTo.edges[2].node.descriptionUp }}</li>
                    <li>{{ $static.feature.belongsTo.edges[2].node.descriptionDown }}</li>
                  </ul>
                </div>
                <div class="column">
                  <arrowicon
                    :colore="true"
                    :no_colore="true"
                    class="icon is-small"
                    style="position: relative;bottom: -60%;left:88%"
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
            subMetaDescriptionLeft
            subMetaDescriptionLeftDown
            subMetaDescriptionRigth
            subMetaDescriptionRigthDown
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
  
  articles: category(id: "Nos offres")  {
    id
    title
    path
    belongsTo {
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
/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) { 

 }

/* Large devices (desktops, 992px and up)*/
 /*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px)  { 
  .shadow_11 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -50%;
}
.shadow1 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -45%;
}
.shadow2 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -47%;
}
.shadow3 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -50%;
}

.shadow_2 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  margin-top: 15%;
}
.shadow_21 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;

}
.shadow41{
position: relative;
bottom: -4%;
left:10%;
}
.shadow_22 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -2%;
}
.shadow_23 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
 
}
.shadow_24 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -5%;
}
.shadow_25 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: 16%;
}
.shadow_26 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: 18%;
}
.shadow_27 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -10%;
}
.shadow_28 {
  background-color: grey;
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
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -50%;
}
.shadow1 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -45%;
}
.shadow2 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -40%;
}
.shadow3 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -40%;
}

.shadow_2 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  margin-top: 15%;
}
.shadow_21 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: 10%;
}
.shadow_22 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom:5%;
}
.shadow41{
  position:relative;
  bottom:0%;
  margin-left:22%;
}
.shadow_23 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: 5%;
 
}
.shadow_24 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -5%;
}
.shadow_25 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: 5%;
}
.shadow_26 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: 12%;
}
.shadow_27 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -8%;
}
.shadow_28 {
  background-color: grey;
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
@media (min-width: 1200px) and (max-width: 1600px){ 
   .shadow_11 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -60%;
}
.shadow1 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -60%;
}
.shadow2 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -60%;
}
.shadow3 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -60%;
}

.shadow_2 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  margin-top: 15%;
}
.shadow_21 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -20%;
}
.shadow_22 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom:-30%;
}
.shadow41{
  position:relative;
  bottom:-25%;
  margin-left:30%;
}
.shadow_23 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -20%;
 
}
.shadow_24 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -46%;
}
.shadow_25 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -36%;
}
.shadow_26 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -36%;
}
.shadow_27 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -36%;
}
.shadow_28 {
  background-color: grey;
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
@media (min-width: 1601px)and (max-width: 1800px){ 
   .shadow_11 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -80%;
}
.shadow1 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -65%;
}
.shadow2 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -65%;
}
.shadow3 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -60%;
}

.shadow_2 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  margin-top: 15%;
}
.shadow_21 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -30%;
}
.shadow_22 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom:-46%;
}
.shadow41{
  position:relative;
  bottom:-34%;
  margin-left:25%;
}
.shadow_23 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -30%;
 
}
.shadow_24 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -46%;
}
.shadow_25 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -36%;
}
.shadow_26 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -36%;
}
.shadow_27 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -36%;
}
.shadow_28 {
  background-color: grey;
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
@media (min-width: 1801px){ 
   .shadow_11 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -75%;
  font-size: 23px;
}
.shadow1 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -65%;
}
.shadow2 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -65%;
}
.shadow3 {
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -60%;
}

.shadow_2 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  margin-top: 15%;
}
.shadow_21 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -30%;
}
.shadow_22 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom:-46%;
}
.shadow41{
  position:relative;
  bottom:-34%;
  margin-left:25%;
}
.shadow_23 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -30%;
 
}
.shadow_24 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -46%;
}
.shadow_25 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -38%;
}
.shadow_26 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -36%;
}
.shadow_27 {
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  position: relative;
  bottom: -36%;
}
.shadow_28 {
  background-color: grey;
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


</style>
