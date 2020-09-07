<template>
  <section class="section">
    <div class="container is-fluid is-paddingless">
      <h2 class="title is-2-desktop is-6-mobile is-3-tablet has-text-primary">Rintio Data Lab</h2>
      <div class="row">
        <div class="columns">
          <div class="colum is-6-desktop is-6-mobile">
            <div class="card-image">
              <figure>
                <g-image :src="$static.dataLab.belongsTo.edges[3].node.coverImage" class />
                <figcaption class="is-hidden-desktop">
                  <p class v-html="$static.dataLab.belongsTo.edges[3].node.content"></p>
                  <ul class="is-pulled-right enum-img1">
                    <li>Diversifier votre activité</li>
                    <li>Pilotez votre activité en temps réel</li>
                    <li>Maîtrisez vos coûts opérationnels</li>
                    <li>Optimisiez vos processus métier</li>
                  </ul>
                </figcaption>
                <div class="column is-hidden-desktop has-text-centered">
                  <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
                  <div class="is-pulled-right">
                    <a href="#">
                      <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
                    </a>
                  </div>
                </div>
              </figure>
              <div class="card-content is-overlay is-fluid">
                <div class="columns">
                  <div class="column is-one-two">
                    <b
                      class="article-title text-center has-text-primary"
                      v-html="$static.dataLab.id"
                    ></b>
                  </div>
                </div>
              </div>
              <div
                class="card-content is-overlay is-fluid is-hidden-desktop description-image1-mobile"
              >
                <div class="columns">
                  <div class="column is-2">
                    <b v-html="$static.dataLab.id"></b>
                    <p class="has-text-justify">Une offre centrée sur la valorisation de vos Data</p>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="is-pulled-left">
                        <ul class="enumeration-mobile">
                          <li>Prototypage</li>
                          <li>R&D</li>
                        </ul>
                      </div>
                      <div class="is-pulled-right">
                        <ul class="enumeration-mobile">
                          <li>Stratégie Data & IA</li>
                          <li>Gouvernance Data & IA</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="card-content is-overlay is-fluid is-half-desktop is-hidden-mobile description-image1"
              >
                <div class="columns is-half-desktop is-6-mobile is-one-two-tablet">
                  <div class="column is-one-two">
                    <b v-html="$static.dataLab.id"></b>
                    <p class="has-text-justify">Une offre centrée sur la valorisation de vos Data</p>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-half-desktop is-2-mobile">
                    <ul class="enumeration-desktop">
                      <li>Prototypage</li>
                      <li>R&D</li>
                    </ul>
                  </div>
                  <div class="column is-half-desktop is-2-mobile">
                    <ul class="enumeration-desktop">
                      <li>Stratégie Data & IA</li>
                      <li>Gouvernance Data & IA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-3-desktop is-full-mobile">
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image :src="$static.dataLab.belongsTo.edges[2].node.coverImage" class />
                  <figcaption class="is-hidden-desktop">
                    <p
                      class="is-pulled-left"
                      v-html="$static.dataLab.belongsTo.edges[2].node.content"
                    ></p>
                  </figcaption>
                  <div class="column is-hidden-desktop has-text-centered">
                    <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
                    <div class="is-pulled-right">
                      <a href="#">
                        <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
                      </a>
                    </div>
                  </div>
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="columns">
                  <div class="column is-one-two">
                    <b
                      class="article-title text-center has-text-primary"
                      v-html="$static.dataLab.id"
                    ></b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-3-desktop is-hidden-mobile is-full-mobile">
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image :src="$static.dataLab.belongsTo.edges[4].node.coverImage" class />
                </figure>
                <figcaption class="is-hidden-desktop">
                  <p v-html="$static.dataLab.belongsTo.edges[4].node.content"></p>
                </figcaption>
                <div class="column is-hidden-desktop has-text-centered">
                  <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
                  <div class="is-pulled-right">
                    <a href="#">
                      <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="columns">
                  <div class="column is-one-two">
                    <b
                      class="article-title text-center has-text-primary"
                      v-html="$static.dataLab.id"
                    ></b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6 is-hidden-desktop">
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image :src="$static.dataLab.belongsTo.edges[0].node.coverImage" class />
                </figure>
                <figcaption class="is-hidden-desktop">
                  <p v-html="$static.dataLab.belongsTo.edges[0].node.content"></p>
                </figcaption>
                <div class="column is-hidden-desktop has-text-centered">
                  <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
                  <div class="is-pulled-right">
                    <a href="#">
                      <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="columns">
                  <div class="column is-one-two">
                    <b
                      class="article-title text-center has-text-primary"
                      v-html="$static.dataLab.id"
                    ></b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row is-hidden-mobile">
        <div class="columns">
          <div class="column is-6">
            <div class="is-pulled-left">
              <p class="is-pullled-left" v-html="$static.dataLab.belongsTo.edges[3].node.content"></p>
            </div>
            <div class="is-pulled-right">
              <ul class="enum-right">
                <li>Diverisifiez votre activité</li>
                <li>Pilotez votre activité en teps réel</li>
                <li>Maîtrisez vos coûts opérationels</li>
                <li>Optimisez vos processus métier</li>
              </ul>
            </div>
          </div>
          <div class="column is-3">
            <p v-html="$static.dataLab.belongsTo.edges[2].node.content"></p>
          </div>
          <div class="column is-3">
            <p v-html="$static.dataLab.belongsTo.edges[4].node.content"></p>
          </div>
        </div>
      </div>
      <div class="row has-text-centered is-hidden-mobile">
        <div class="columns">
          <div class="column is-6">
            <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
            <div class="is-pulled-right">
              <a href="#">
                <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
              </a>
            </div>
          </div>
          <div class="column is-3">
            <button class="btn-profiter">Profiter de l'offre</button>
            <div class="is-pulled-right">
              <a href="#">
                <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
              </a>
            </div>
          </div>
          <div class="column is-3">
            <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
            <div class="is-pulled-right">
              <a href="#">
                <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top : 30px" class="row">
        <div class="columns is-maringless">
          <div class="column is-6">
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image :src="$static.dataLab.belongsTo.edges[1].node.coverImage" class />
                  <figcaption class="is-hidden-desktop">
                    <p v-html="$static.dataLab.belongsTo.edges[1].node.content"></p>
                  </figcaption>
                  <div class="column is-hidden-desktop has-text-centered">
                    <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
                    <div class="is-pulled-right">
                      <a href="#">
                        <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
                      </a>
                    </div>
                  </div>
                </figure>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="columns">
                  <div class="column is-one-two">
                    <b
                      class="article-title text-center has-text-primary"
                      v-html="$static.dataLab.id"
                    ></b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6 is-hidden-mobile">
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image :src="$static.dataLab.belongsTo.edges[0].node.coverImage" class />
                </figure>
                <figcaption class="is-hidden-desktop">
                  <p v-html="$static.dataLab.belongsTo.edges[0].node.content"></p>
                </figcaption>
                <div class="column is-hidden-desktop has-text-centered">
                  <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
                  <div class="is-pulled-right">
                    <a href="#">
                      <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="columns">
                  <div class="column is-one-two">
                    <b
                      class="article-title text-center has-text-primary"
                      v-html="$static.dataLab.id"
                    ></b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-hidden-desktop is-full-mobile">
            <div class="card">
              <div class="card-image">
                <figure>
                  <g-image :src="$static.dataLab.belongsTo.edges[4].node.coverImage" class />
                </figure>
                <figcaption class="is-hidden-desktop">
                  <p v-html="$static.dataLab.belongsTo.edges[4].node.content"></p>
                </figcaption>
                <div class="column is-hidden-desktop has-text-centered">
                  <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
                  <div class="is-pulled-right">
                    <a href="#">
                      <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-content is-overlay is-fluid">
                <div class="columns">
                  <div class="column is-one-two">
                    <b
                      class="article-title text-center has-text-primary"
                      v-html="$static.dataLab.id"
                    ></b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row is-hidden-mobile">
        <div class="columns">
          <div class="column is-6">
            <p v-html="$static.dataLab.belongsTo.edges[1].node.content"></p>
          </div>
          <div class="column is-6">
            <p v-html="$static.dataLab.belongsTo.edges[0].node.content"></p>
          </div>
        </div>
      </div>
      <div class="row has-text-centered is-hidden-mobile">
        <div class="columns">
          <div class="column is-6">
            <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
            <div class="is-pulled-right">
              <a href="#">
                <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
              </a>
            </div>
          </div>
          <div class="column is-6">
            <button class="btn-profiter has-text-centered">Profiter de l'offre</button>
            <div class="is-pulled-right">
              <a href="#">
                <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
.article-title {
  padding: 10px;
  background-color: #fff;
  font-size: 10px;
}
.enumeration-mobile {
  list-style-type: disc;
  margin-left: 5%;
}

.enumeration-desktop {
  list-style-type: disc;
  margin-left: 10px;
}
.btn-profiter {
  background-color: #134a7f;
  color: #fff;
  border: none;
  height: 30px;
}

.description-image1-mobile {
  background-color: #474444bd;
  margin: 30% 5% 40% 5%;
  color: #fff;
}

.description-image1 {
  margin: 30% 5% 5% 5%;
  background-color: #474444bd;
  color: #fff;
}
.card {
  box-shadow: none;
}

.enum-img1 {
  margin-top: -20%;
  list-style-type: disc;
}
.enum-right {
  margin-top: 10%;
  list-style-type: disc;
}
</style>
