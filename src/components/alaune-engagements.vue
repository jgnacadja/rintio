<template>
  <div class="section is-paddingless">
    <br />
    <div class v-if="NosEngagement">
      <div class="is-hidden-mobile">
        <h2 class="has-text-primary is-size-2 title">Nos Engagements</h2>
        <div class="section" style="
    padding: 0;
">
          <div class="columns">
            <div class="column is-6">
              <figure>
                <div class="card zoom">
                  <div class="card-image">
                    <span
                      class="is-white is-small tag has-text-primary realisationWS"
                      style="margin-left:20px"
                    >
                      <b>Nos Engagements</b>
                    </span>

                    <g-image :src="$static.feature.belongsTo.edges[1].node.coverImage" />
                  </div>

                  <span class="is-white is-small card-content is-overlay">
                    <div class="row shadow_1">
                      <div class="is-primary">
                        <b>{{ $static.feature.belongsTo.edges[1].node.subDescription }}</b>
                        <br />
                        <span v-html=" $static.feature.belongsTo.edges[1].node.subDescriptionDown "></span>
                        <br />
                        <span v-html=" $static.feature.belongsTo.edges[1].node.DescriptionDown "></span>
                      </div>
                    </div>
                  </span>
                  <span
                    class="tag is-primary is-large inscrireWSF"
                    style="position:relative;left:240px;height:25px"
                  >
                    <b style="font-size:15px;">S'inscrire</b>
                  </span>
                </div>
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
                      <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Nos Engagements</b>
                      </span>
                      <g-image
                        :src="
                          $static.articles.belongsTo.edges[0].node.coverImage
                        "
                      />
                      <span class="tag is-primary is-medium inscrireWS">
                        <b>En savoir plus</b>
                      </span>
                    </div>
                    <figcaption class>
                      <b v-html="$static.articles.belongsTo.edges[0].node.title"></b>
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
                      <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Nos Engagements</b>
                      </span>
                      <g-image
                        :src="
                          $static.articles.belongsTo.edges[1].node.coverImage
                        "
                      />
                      <span class="tag is-primary is-small inscrireWS">
                        <b>S'inscrire</b>
                      </span>
                    </div>
                    <figcaption class>
                      <b v-html="$static.articles.belongsTo.edges[1].node.title"></b>
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
                      <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Nos Engagements</b>
                      </span>
                      <g-image
                        :src="
                          $static.articles.belongsTo.edges[2].node.coverImage
                        "
                      />
                      <span class="tag is-primary is-small inscrireWS">
                        <b>En savoir plus</b>
                      </span>
                    </div>
                    <figcaption>
                      <b v-html="$static.articles.belongsTo.edges[2].node.title"></b>
                      <p
                        v-html="
                          $static.articles.belongsTo.edges[2].node
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
                      <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Nos Engagements</b>
                      </span>
                      <div style="width: 100%; margin: 0 auto;">
                        <div
                          style="position: relative; padding-bottom: 62.50%; padding-top: 25px;margin-bottom:28px; height: 0;"
                        >
                          <iframe
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                            src="https://www.youtube.com/embed/kKSC5LcqLlE"
                          ></iframe>
                        </div>
                      </div>

                      <!-- <g-image
                        :src="
                          $static.articles.belongsTo.edges[3].node.coverImage
                        "
                      />-->
                    </div>
                    <figcaption class>
                      <b v-html="$static.articles.belongsTo.edges[3].node.title"></b>
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
          <div class="columns" style="padding-top:10px">
            <div class="column is-half">
              <figure>
                <div class="zoom">
                  <span class="is-white is-small tag has-text-primary realisationWS" style>
                    <b>Nos réalisations</b>
                  </span>
                  <g-image
                    :src="$static.feature.belongsTo.edges[0].node.coverImage"
                    class="is-full"
                  />
                  <span class="tag is-primary is-medium inscrireWSFF">En savoir plus</span>
                </div>
                <figcaption></figcaption>
              </figure>
            </div>
            <div class="column is-marginless is-paddindless">
              <figure>
                <div class="zoom">
                  <span class="is-white is-small tag has-text-primary realisationWS" style>
                    <b>Nos réalisations</b>
                  </span>
                  <g-image :src="$static.new.belongsTo.edges[1].node.coverImage" />
                  <span class="tag is-primary is-small inscrireWS">
                    <b>En savoir plus</b>
                  </span>
                </div>
                <figcaption></figcaption>
              </figure>
            </div>
            <div class="column is-marginless is-paddindless">
              <figure>
                <div class="zoom">
                  <span class="is-white is-small tag has-text-primary realisationWS" style="">
                    Nos réalisations
                  </span>
                  <g-image
                    :src="$static.new.belongsTo.edges[1].node.coverImage"
                  />
                  <span class="tag  is-primary is-small inscrireWS"
                    >S'inscrire</span
                  >
                </div>
                <figcaption></figcaption>
              </figure>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <b v-html="$static.feature.belongsTo.edges[0].node.title"></b>
              <p v-html="$static.feature.belongsTo.edges[0].node.metaDescription" class="space"></p>
            </div>
            <div class="column">
              <b v-html="$static.new.belongsTo.edges[1].node.title"></b>
              <p v-html="$static.new.belongsTo.edges[1].node.metaDescription" class="space"></p>
            </div>
            <div class="column">
              <b v-html="$static.new.belongsTo.edges[0].node.title"></b>
              <p v-html="$static.new.belongsTo.edges[0].node.metaDescription" class="space"></p>
            </div>
          </div>
          <div class="columns" style="padding-top: 0px">
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
      <div class="is-hidden-tablet" style="padding-top:60px">
        <h2 class="has-text-primary is-size-4 title">Nos Engagements</h2>
        <div class>
          <figure>
            <button
              class="has-text-primary"
              id
              style="position: absolute; left: 30px;margin-top:20px;"
            >Nos Engagements</button>
            <div class="card zoom">
              <div class="card-image">
                <span
                  class="is-white is-small tag has-text-primary realisationWS"
                  style="margin-left:20px"
                >
                  <b>Nos réalisations</b>
                </span>

                <g-image :src="$static.feature.belongsTo.edges[1].node.coverImage" />
              </div>

              <span class="is-white is-small card-content is-overlay">
                <div class="row shadow_1MOBILE">
                  <div class="is-primary">
                    <b>{{ $static.feature.belongsTo.edges[1].node.subDescription }}</b>
                    <br />
                    <span v-html=" $static.feature.belongsTo.edges[1].node.subDescriptionDown "></span>
                    <br />
                    <span v-html=" $static.feature.belongsTo.edges[1].node.DescriptionDown "></span>
                  </div>
                </div>
              </span>
              <span
                class="tag is-primary is-large"
                style="height: 25px;position: relative;bottom: 40px;left: 35%;"
              >
                <b style="font-size:15px;">S'inscrire</b>
              </span>
            </div>
            <div class="row">
              <b v-html="$static.feature.belongsTo.edges[1].node.title"></b>
              <div class="columns is-mobile">
                <figcaption class="column is-11">
                  <p v-html="$static.feature.belongsTo.edges[1].node.metaDescription" class="space"></p>
                </figcaption>
                <div class="column" style="margin-top:75px;font-size:16.5px;margin-left:-25px;">
                  <arrowicon />
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- CE AUI EST AU MILIEUX -->
        <!-- <div v-for="article in $static.articles.belongsTo.edges" :key="article.node.id">
          <figure class="zoom">
            <button class="has-text-primary is-small" id="" style="position: relative; top:110px; right: -150px">
              Nos Engagements
            </button>
            <g-image :src="article.node.coverImage" class="" style="padding-top: 40px" />
            <span class="tag is-link" id="bouton2mob">S'inscrire</span>
            <figcaption>
              <b v-html="article.node.title"></b>
              <p v-html="article.node.metaDescription"></p>
              <arrowicon />
            </figcaption>
          </figure>
        </div>-->

        <div class="column is-6">
          <div class="columns is-multiline is-12">
            <div class="column is-half">
              <figure>
                <div class="zoom">
                  <span class="is-white is-small tag has-text-primary realisationWS" style>
                    <b>Nos Engagements</b>
                  </span>
                  <g-image
                    :src="
                          $static.articles.belongsTo.edges[2].node.coverImage
                        "
                  />
                  <span class="tag is-primary is-medium inscrireWS">
                    <b>En savoir plus</b>
                  </span>
                </div>
                <div class="row">
                  <b v-html="$static.articles.belongsTo.edges[2].node.title"></b>
                  <div class="columns is-mobile">
                    <figcaption class="column is-11">
                      <p
                        v-html="
                          $static.articles.belongsTo.edges[2].node
                            .metaDescription
                        "
                        class="space"
                      ></p>
                    </figcaption>
                    <div class="column" style="margin-top:80px;font-size:16.5px;margin-left:-15px;">
                      <arrowicon />
                    </div>
                  </div>
                </div>
              </figure>
            </div>

            <div class="column is-half">
              <figure>
                <div class="zoom">
                  <span class="is-white is-small tag has-text-primary realisationWS" style>
                    <b>Nos Engagements</b>
                  </span>
                  <g-image
                    :src="
                          $static.articles.belongsTo.edges[0].node.coverImage
                        "
                  />
                  <span class="tag is-primary is-small inscrireWS">
                    <b>S'inscrire</b>
                  </span>
                </div>
                <div class="row">
                  <b v-html="$static.articles.belongsTo.edges[0].node.title"></b>
                  <div class="columns is-mobile">
                    <figcaption class="column is-11">
                      <p
                        v-html="
                          $static.articles.belongsTo.edges[0].node
                            .metaDescription
                        "
                        class="space"
                      ></p>
                    </figcaption>
                    <div class="column" style="margin-top:20px;font-size:16.5px;margin-left:-15px;">
                      <arrowicon />
                    </div>
                  </div>
                </div>
              </figure>
            </div>

            <div class="columns"></div>

            <div class="column is-half mb-0">
              <figure>
                <div class="zoom">
                  <span class="is-white is-small tag has-text-primary realisationWS" style>
                    <b>Nos Engagements</b>
                  </span>
                  <g-image
                    :src="
                          $static.articles.belongsTo.edges[1].node.coverImage
                        "
                  />
                  <span class="tag is-primary is-small inscrireWS">
                    <b>En savoir plus</b>
                  </span>
                </div>
                <div class="row">
                  <b v-html="$static.articles.belongsTo.edges[1].node.title"></b>
                  <div class="columns is-mobile">
                    <figcaption class="column is-11">
                      <p
                        v-html="
                          $static.articles.belongsTo.edges[1].node
                            .metaDescription
                        "
                        class="space"
                      ></p>
                    </figcaption>
                    <div class="column" style="margin-top:20px;font-size:16.5px;margin-left:-15px;">
                      <arrowicon />
                    </div>
                  </div>
                </div>
              </figure>
            </div>

            <div class="column is-half mb-0">
              <figure>
                <div class="zoom">
                  <span class="is-white is-small tag has-text-primary realisationWS" style>
                    <b>Nos Engagements</b>
                  </span>
                  <div style="width: 100%; margin: 0 auto;">
                    <div
                      style="position: relative; padding-bottom: 62.50%; padding-top: 25px;margin-bottom:28px; height: 0;"
                    >
                      <iframe
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                        src="https://www.youtube.com/embed/kKSC5LcqLlE"
                      ></iframe>
                    </div>
                  </div>

                  <!-- <g-image
                        :src="
                          $static.articles.belongsTo.edges[3].node.coverImage
                        "
                  />-->
                </div>
                <b v-html="$static.articles.belongsTo.edges[3].node.title"></b>
                <div class="row">
                  <div class="columns is-mobile">
                    <figcaption class="column is-10">
                      <p
                        v-html=" $static.articles.belongsTo.edges[3].node.metaDescription
                              "
                        class="space"
                      ></p>
                    </figcaption>
                    <div class="column" style="margin-top:18px;font-size:16.5px;">
                      <arrowicon />
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="columns is-multiline is-12">
            <div class="column is-half">
              <div class="column is-half mb-0">
                <figure>
                  <div class="zoom">

                    <div style="width: 100%; margin: 0 auto;">
                                          <span class="is-white is-small tag has-text-primary realisationWS">
                      <b>Nos Engagements</b>
                    </span>
                      <div
                        style="position: relative; padding-bottom: 62.50%; padding-top: 25px;margin-bottom:28px; height: 0;"
                      >
                      
                        <iframe
                          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                          src="https://www.youtube.com/embed/iPuAzztSkOE"
                        ></iframe>
                      </div>
                    </div>

                    <!-- <g-image
                        :src="
                          $static.articles.belongsTo.edges[3].node.coverImage
                        "
                    />-->
                  </div>
                  <b v-html="$static.articles.belongsTo.edges[3].node.title"></b>
                  <div class="row">
                    <div class="columns is-mobile">
                      <figcaption class="column is-10">
                        <p
                          v-html=" $static.articles.belongsTo.edges[3].node.metaDescription
                              "
                          class="space"
                        ></p>
                      </figcaption>
                      <div class="column" style="margin-top:18px;font-size:16.5px;">
                        <arrowicon />
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
              <figure>
                <div class="zoom">
                  <span
                    class="is-white is-small tag has-text-primary realisationWS"
                    style="left:15px; bottom:-35px"
                  >
                    <b>Nos Engagements</b>
                  </span>
                  <g-image
                    :src="$static.feature.belongsTo.edges[0].node.coverImage"
                    style="height:150px"
                  />
                </div>
                <div class="row">
                  <b v-html="$static.feature.belongsTo.edges[0].node.title"></b>
                  <div class="columns is-mobile">
                    <figcaption class="column is-11">
                      <p
                        v-html="
                          $static.feature.belongsTo.edges[0].node
                            .metaDescription
                        "
                        class="space"
                      ></p>
                    </figcaption>
                    <div class="column" style="font-size:16.5px;margin-left:-15px;">
                      <arrowicon />
                    </div>
                  </div>
                </div>
              </figure>
            </div>

            <div class="column is-half">
              <figure>
                <div class="zoom">
                  <span class="is-white is-small tag has-text-primary realisationWS" style>
                    <b>Nos Engagements</b>
                  </span>
                  <g-image
                    :src="
                          $static.new.belongsTo.edges[0].node.coverImage
                        "
                  />
                  <span
                    class="tag is-primary is-small inscrireWS"
                    styel="
    left: 95px;
    border-radius: 0px;
    width: 150px;
    height: 30px;
"
                  >
                    <b>En savoir plus</b>
                  </span>
                </div>
                <div class="row">
                  <b v-html="$static.new.belongsTo.edges[0].node.title"></b>
                  <div class="columns is-mobile">
                    <figcaption class="column is-11">
                      <p
                        v-html="
                          $static.new.belongsTo.edges[0].node
                            .metaDescription
                        "
                        class="space"
                      ></p>
                    </figcaption>
                    <div class="column" style="font-size:16.5px;margin-left:-15px;">
                      <arrowicon />
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>

        <!-- <DHJJJJJJJJJJJ> -->
      </div>
    </div>

    <div v-if="alaUne">
      <h2 class="has-text-primary is-size-2 title">A la Une / Rintio Stories</h2>
      <div class="columns" style="padding-top:30px">
        <div class="column is-6">
          <figure>
            <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Nos Réalisations</b>
                      </span>
            <g-image :src="$static.alaUne_feature.belongsTo.edges[0].node.coverImage" class="zoom" />
            <figcaption>
              <b v-html="$static.alaUne_feature.belongsTo.edges[0].node.title"></b>
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
                            <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Nos Engagements</b>
                      </span>
                <g-image
                  :src="$static.alaUne.belongsTo.edges[0].node.coverImage"
                  style="position:relative z-index:0"
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
                                           <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Nos Engagements</b>
                      </span>
                <g-image :src="$static.alaUne.belongsTo.edges[1].node.coverImage" class="zoom" />
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
                                           <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Rintio Factory</b>
                      </span>
                <g-image :src="$static.alaUne.belongsTo.edges[4].node.coverImage" class="zoom" />
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
                                                           <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Rintio Factorie</b>
                      </span>
                <g-image :src="$static.alaUne.belongsTo.edges[3].node.coverImage" class="zoom" />
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
        <div class="column">
          <figure>
                                                       <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Rintio Réalisations</b>
                      </span>
            <g-image :src="$static.alaUne.belongsTo.edges[2].node.coverImage" class="zoom" />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[2].node.title"></b>
              <p
                v-html="$static.alaUne.belongsTo.edges[2].node.metaDescription"
                class="space"
              ></p>
              <div style="mzrgin-top : 1% " class="columns is-pulled-left">
                <div class="column is-1">
                    <a href="#"><i class="fal fa-heart fa-1x has-text-danger"></i></a>
                </div>
                <div style="margin-left: -2%" class="column is-2">
                    <a class="has-text-black" href="#">247</a>
                </div>
                <div class="column is-1">
                    <a href="#"><i class="fal fa-comment fa-1x has-text-primary is-pulled-left"></i></a>
                </div>

                <div style="margin-left: -2%" class="column is-2 icon-tag">
                    <a class="has-text-black" href="#">57</a>
                </div>
                <div class="column is-1 ">
                    <a href="#"><i class="fal fa-share fa-1x has-text-primary is-pulled-left"></i></a>                                
                </div>

                <div style="margin-left: -2%" class="column is-1 icon-tag">
                    <a class="has-text-black" href="#">33</a>
                </div>
              </div>
              <arrowicon />
              
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure>
                                                                   <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Rintio Réalisations</b>
                      </span>
            <g-image :src="$static.alaUne.belongsTo.edges[5].node.coverImage" class="zoom" />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[5].node.title"></b>
              <p
                v-html="$static.alaUne.belongsTo.edges[5].node.metaDescription"
                class="space"
              ></p>
                <div style="margin-top : 1%" class="columns is-pulled-left">
                <div class="column is-1">
                    <a href="#"><i class="fal fa-heart fa-1x has-text-danger"></i></a>
                </div>
                <div style="margin-left: -2%" class="column is-2">
                    <a class="has-text-black" href="#">247</a>
                </div>
                <div class="column is-1">
                    <a href="#"><i class="fal fa-comment fa-1x has-text-primary is-pulled-left"></i></a>
                </div>

                <div style="margin-left: -2%" class="column is-2 icon-tag">
                    <a class="has-text-black" href="#">57</a>
                </div>
                <div class="column is-1 ">
                    <a href="#"><i class="fal fa-share fa-1x has-text-primary is-pulled-left"></i></a>                                
                </div>

                <div style="margin-left: -2%" class="column is-1 icon-tag">
                    <a class="has-text-black" href="#">33</a>
                </div>
              </div>
              <arrowicon />
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure>
            <span class="is-white is-small tag has-text-primary realisationWS" style>
               <b>Rintio Réalisations</b>
             </span>
            <g-image :src="$static.alaUne.belongsTo.edges[6].node.coverImage" class="zoom" />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[6].node.title"></b>
              <p
                v-html="$static.alaUne.belongsTo.edges[6].node.metaDescription"
                class="space"
              ></p>
              <div style="mzrgin-top : 1% " class="columns is-pulled-left">
                <div class="column is-1">
                    <a href="#"><i class="fal fa-heart fa-1x has-text-danger"></i></a>
                </div>
                <div style="margin-left: -2%" class="column is-2">
                    <a class="has-text-black" href="#">247</a>
                </div>
                <div class="column is-1">
                    <a href="#"><i class="fal fa-comment fa-1x has-text-primary is-pulled-left"></i></a>
                </div>

                <div style="margin-left: -2%" class="column is-2 icon-tag">
                    <a class="has-text-black" href="#">57</a>
                </div>
                <div class="column is-1 ">
                    <a href="#"><i class="fal fa-share fa-1x has-text-primary is-pulled-left"></i></a>                                
                </div>

                <div style="margin-left: -2%" class="column is-1 icon-tag">
                    <a class="has-text-black" href="#">33</a>
                </div>
              </div>
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
              <p v-html="$static.alaUne.belongsTo.edges[7].node.metaDescription" class="space"></p>
              <arrowicon />
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure>
                                                                   <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Rintio Réalisations</b>
                      </span>
            <g-image :src="$static.alaUne.belongsTo.edges[8].node.coverImage" class="zoom" />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[8].node.title"></b>
              <p v-html="$static.alaUne.belongsTo.edges[8].node.metaDescription" class="space"></p>
              <arrowicon />
            </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure>
                                                                   <span class="is-white is-small tag has-text-primary realisationWS" style>
                        <b>Rintio Réalisations</b>
                      </span>
            <g-image :src="$static.alaUne.belongsTo.edges[9].node.coverImage" class="zoom" />
            <figcaption>
              <b v-html="$static.alaUne.belongsTo.edges[9].node.title"></b>
              <p v-html="$static.alaUne.belongsTo.edges[9].node.metaDescription" class="space"></p>
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
            subDescription
            subDescriptionDown
            DescriptionDown
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
  left:20px;
  z-index: 1;
}
.card {
  box-shadow: none;
}
.shadow_1 {
  background-color: grey;
  opacity: 0.9;
  color: white;
  width: 95%;
  margin-left: 6%;
  padding-left: 1.5%;
  font-size: 14px;
  position: relative;
  bottom: -75%;
}
.shadow_1MOBILE {
  background-color: grey;
  opacity: 0.9;
  color: white;
  width: 100%;
  padding-left: 1.5%;
  font-size: 14px;
  position: relative;
  bottom: -60%;
}

.icon-tag{
    margin-left: 10%;
}

.icon-tag-next-box{
    margin-left: 2%;
}

</style>
