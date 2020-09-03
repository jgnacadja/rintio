<template>
  <div>
    <h2 class="title is-size-2 has-text-primary" style="text-align: left">
        Nos offres
      </h2>
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
            <div class="row shadow_1">
                          <div class=" is-primary ">
              
              <b>{{ $static.features.belongsTo.edges[0].node.title }}</b> <br />
              {{ $static.features.belongsTo.edges[0].node.metaDescription }} <br /> 
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
                    <li> {{ $static.features.belongsTo.edges[0].node.subMetaDescriptionRigthDown }}</li>
                  </ul>
                
                </div>
                <div class="column">
                  <arrowicon :colore="true" :no_colore ="true" />
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
                  <g-image
                    :src="$static.articles.belongsTo.edges[0].node.coverImage"
                  />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                
                <div class=" is-primary shadow_2">
                  <b>{{ $static.articles.belongsTo.edges[0].node.title }}</b> <br />
                  <div class="shadow_3">
                    
                  {{ $static.articles.belongsTo.edges[0].node.metaDescription }}
                  {{ $static.articles.belongsTo.edges[0].node.subDescription }}
                  </div>
                  
                </div> 
                <div class="buttons are-medium" style="margin-top:10px;margin-left:22%;">
                  <button class="button is-link" style="width:150px; color: white;height:30px; border-radius:0px; font-size:12px;">Profitez de l'offre</button>
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
                <div class=" is-primary shadow_2">
                  <b>{{ $static.articles.belongsTo.edges[1].node.title }}</b> <br/>
                  <div class="columns is-mobile shadow_3">
                      <div class="column is-10">
                            {{ $static.articles.belongsTo.edges[1].node.metaDescription }}
                      </div>
                      <div class="column">
                        <br/>
                        <arrowicon :colore="true" :no_colore="true" class="icon is-small" style="position: relative;bottom: -20px;"/>
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
                  <g-image
                    :src="$static.articles.belongsTo.edges[2].node.coverImage"
                  />
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class=" is-primary shadow_2">
                  <b>{{ $static.articles.belongsTo.edges[2].node.title }}</b> <br />
                  <div class="shadow_3">
                    {{ $static.articles.belongsTo.edges[2].node.metaDescription }}<br />
                    {{ $static.articles.belongsTo.edges[2].node.subDescription }}

                  </div>
                  
                </div>
                <div class="buttons are-medium" style="margin-top:10px;margin-left:22%;">
                  <button class="button is-link" style="width:150px; color: white;height:30px; border-radius:0px; font-size:12px;">Profitez de l'offre</button>
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
                <div class=" is-primary shadow_2">
                  <b>{{ $static.articles.belongsTo.edges[3].node.title }}</b> <br/>
                  <div class="columns is-mobile">
                      <div class="column is-10 shadow_3">
                            {{ $static.articles.belongsTo.edges[3].node.metaDescription }}
                      </div>
                      <div class="column">
                        <br/>
                        <arrowicon :colore="true" :no_colore="true" class="icon is-small" style="position: relative;bottom: 1px;"/>
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
                :src="$static.feature.belongsTo.edges[0].node.coverImage"
              />
            </figure>
          </div>

          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow">
              <b> {{ $static.feature.belongsTo.edges[0].node.title }}</b> <br/>
               
              <div class="columns is-mobile">
                <div class="column is-10 shadow_4">
                 {{ $static.feature.belongsTo.edges[0].node.descriptionUp }}
                  {{ $static.feature.belongsTo.edges[0].node.descriptionDown }} <br/>
                </div>
                <div class="column">
                    <arrowicon :colore="true" :no_colore="true" class="icon is-small" style="position: relative;bottom: -20px;"/>
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
              <g-image
                :src="$static.articles.belongsTo.edges[4].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow_2">
                  <b>{{ $static.articles.belongsTo.edges[4].node.title }}</b> <br/>
                  <div class="columns is-mobile">
                      <div class="column is-10 shadow_3">
                            {{ $static.articles.belongsTo.edges[4].node.metaDescription }}
                      </div>
                      <div class="column">
                        
                        <arrowicon :colore="true" :no_colore="true" class="icon is-small" style="position: relative;bottom: -30px;"/>
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
              <g-image
                :src="$static.articles.belongsTo.edges[5].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class=" is-primary shadow_2">
                  <b>{{ $static.articles.belongsTo.edges[5].node.title }}</b> <br/>
                  <div class="columns is-mobile">
                      <div class="column is-10 shadow_3">
                            {{ $static.articles.belongsTo.edges[5].node.metaDescription }}
                      </div>
                      <div class="column">
                        <br/>
                        <arrowicon :colore="true" :no_colore="true" class="icon is-small" style="position: relative;bottom: -20px;"/>
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
                :src="$static.feature.belongsTo.edges[1].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow">
              <b> {{ $static.feature.belongsTo.edges[1].node.title }}</b> <br/>
                
              <div class=" columns is-mobile">
                <div class="column is-10 shadow_4">
                  {{ $static.feature.belongsTo.edges[1].node.descriptionUp }} <br/>
                  {{ $static.feature.belongsTo.edges[1].node.descriptionDown }}
                </div>
                <div class="column">
                    <arrowicon :colore="true" :no_colore="true" class="icon is-small" style="position: relative;bottom: -20px;"/>
                </div>
              </div>
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
            <div class=" is-primary shadow_2">
                  <b>{{ $static.articles.belongsTo.edges[6].node.title }}</b> <br/>
                  <div class="columns is-mobile">
                      <div class="column is-10 shadow_3">
                            {{ $static.articles.belongsTo.edges[6].node.metaDescription }}
                      </div>
                      <div class="column">
                        <br/>
                        <arrowicon :colore="true" :no_colore="true" class="icon is-small" style="position: relative;bottom: 0px;"/>
                      </div>
                  </div>
                  
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
            <div class=" is-primary shadow_2">
                  <b>{{ $static.articles.belongsTo.edges[7].node.title }}</b> <br/>
                  <div class="columns is-mobile">
                      <div class="column is-10 shadow_3">
                            {{ $static.articles.belongsTo.edges[7].node.metaDescription }}<br/><br/>
                            {{ $static.articles.belongsTo.edges[7].node.subDescription }}
                            
                      </div>
                      <div class="column">
                        <br/>
                        <arrowicon :colore="true" :no_colore="true" class="icon is-small" style="position: relative;bottom: 0px;"/>
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
                :src="$static.feature.belongsTo.edges[2].node.coverImage"
              />
            </figure>
          </div>
          <div class="card-content is-overlay is-fluid">
            <div class="is-primary shadow">
              <b> {{ $static.feature.belongsTo.edges[2].node.title }}</b> <br/>
             
              <div class="columns is-mobile">
                <div class="column is-10 shadow_4">
                  <ul>
                    <li>{{ $static.feature.belongsTo.edges[2].node.descriptionUp }}</li>
                    <li>{{ $static.feature.belongsTo.edges[2].node.descriptionDown }}</li> 
                  </ul>
                </div>
                <div class="column">
                    <arrowicon :colore="true" :no_colore="true" class="icon is-small" style="position: relative;bottom: -20px;"/>
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
  components : {
      arrowicon
  }
};
</script>

<style>

.shadow_1{
  background-color: grey;
  opacity: 1;
  color: white;
  position: relative;
  bottom: -70%;
}
.shadow {
  background-color: grey;
  opacity: 1;
  color: white;
  margin-top: 20%;
}
.shadow_2{
  background-color: grey;
  opacity: 0.9;
  font-weight: 900;
  color: white;
  margin-top: 15%;
}
.shadow_3{
  font-size: 12px;
}
.shadow_4{
  font-size: 12px;
}
</style>
