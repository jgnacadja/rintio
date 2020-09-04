<template>
    <section>
        <div class="container is-fluid">
            <h2 class="title is-size-4-mobile is-size-2-tablet has-text-primary">Nos Publications</h2>
            <div class="row is-hidden-mobile">
                <div class="columns">
                    <div class="column is-half">
                        <div class="card">
                            <div class="card-image">
                                <figure>
                                    <g-image :src="$static.publication.belongsTo.edges[0].node.coverImage" />
                                    <figcaption class="is-hidden-desktop">
                                    <div class="column is-6">
                                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[0].node.title"></b> <br />
                                        <b class="image-titile has-text-primary" v-html="$static.publication.belongsTo.edges[0].node.date"></b> <br />
                                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[0].node.content"></b> <br />
                                    </div>
                                    <div class="column is-3">
                                    </div>
                                    <div class="column is-3">
                                        <span><i class="fal fa-eye fa-2x"></i></span>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="col-lg-2 is-pulled-left">
                                            <font-awesome-icon class="has-text-danger" icon="heart" />
                                        </div>
                                        <div class="col-lg-2 is-pulled-left">
                                            <font-awesome-icon class="has-text-primary" icon="comment" />
                                        </div>
                                        <div class="col-lg-2 is-pulled-left">
                                            <font-awesome-icon class="has-text-primary" icon="long-arrow-alt-right" />
                                        </div>
                                        <div class="column is-pulled-right">
                                            <font-awesome-icon class="has-text-primary" icon="arrow-circle-right" />
                                        </div>
                                    </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="card-content is-overlay is-fluid">
                                <div class="columns">
                                    <div class="column is-3 pub-tag">
                                         <b v-html="$static.publication.id" class="has-text-primary has-text-centered"></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-3 is-hidden-mobile">
                        <div class="card">
                            <div class="card-image">
                                <figure>
                                    <g-image :src="$static.publication.belongsTo.edges[1].node.coverImage" />
                                </figure>
                            </div>
                            <div class="card-content is-overlay is-fluid">
                                <div class="columns">
                                    <div class="column is-6 pub-tag">
                                         <b v-html="$static.publication.id" class="has-text-primary has-text-centered"></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-3 is-hidden-mobile">
                        <div class="card">
                            <div class="card-image">
                                <g-image :src="$static.publication.belongsTo.edges[2].node.coverImage" />
                            </div>
                            <div class="card-content is-overlay is-fluid">
                                <div class="columns">
                                    <div class="column is-6 pub-tag">
                                         <b v-html="$static.publication.id" class="has-text-primary has-text-centered"></b>
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
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[0].node.title"></b> <br />
                        <div class="columns">
                            <div class="column">
                                <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[0].node.date"></b> <br />
                            </div>
                            <div class="column">
                                <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[0].node.publie"></b> <br />
                            </div>
                        </div>
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[0].node.content"></b> <br />
                        <div class="columns">
                            <div class="column is-1">
                                 <font-awesome-icon class="has-text-danger" icon="heart" />
                            </div>
                            <div class="column is-1">
                                <font-awesome-icon class="has-text-primary" icon="comment" />
                            </div>
                            <div class="column is-1">
                                <font-awesome-icon class="has-text-primary" icon="long-arrow-alt-right" />
                            </div>
                            <div class="column card-image-box">
                                <font-awesome-icon class="has-text-primary" icon="arrow-circle-right" />
                            </div>
                        </div>
                    </div>
                    <div class="column is-3">
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[1].node.title"></b> <br />
                          <div class="columns">
                            <div class="column">
                                <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[1].node.date"></b> <br />
                            </div>
                            <div class="column">
                                <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[1].node.publie"></b> <br />
                            </div>
                        </div>
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[1].node.content"></b> <br />
                        <div class="columns">
                            <div class="column is-1">
                                <font-awesome-icon class="has-text-danger" icon="heart" />
                            </div>
                            <div class="column is-1">
                                <font-awesome-icon class="has-text-primary" icon="comment" />
                            </div>
                            <div class="column is-1">
                                <font-awesome-icon class="has-text-primary" icon="long-arrow-alt-right" />
                            </div>
                            <div class="column is-1 card-image-box">
                                <font-awesome-icon class="has-text-primary" icon="arrow-circle-right" />
                            </div>
                        </div>
                    </div>
                    <div class="column is-3">
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[2].node.title"></b> <br />
                        <div class="columns">
                            <div class="column">
                                <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[2].node.date"></b> <br />
                            </div>
                            <div class="column">
                                <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[2].node.publie"></b> <br />
                            </div>
                        </div>
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[2].node.content"></b> <br />
                            <div class="columns">
                            <div class="column is-1">
                                 <font-awesome-icon class="has-text-danger" icon="heart" />
                            </div>
                            <div class="column is-1">
                                <font-awesome-icon class="has-text-primary" icon="comment" />
                            </div>
                            <div class="column is-1">
                                <font-awesome-icon class="has-text-primary" icon="long-arrow-alt-right" />
                            </div>
                            <div class="column card-image-box">
                                <font-awesome-icon class="has-text-primary" icon="arrow-circle-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row is-hidden-desktop">
                <tiny-slider :mouse-drag="true" :loop="false" items="1" gutter="20">
                    <post-resume v-for="post in $page.allPost.edges"
                                :key="post.node.id"
                                :title="post.node.title"
                                :media="post.node.media"
                                :path="post.node.path"
                                :excerpt="post.node.excerpt">
                    </post-resume>
                </tiny-slider>
            </div>
        </div>
    </section>
</template>

<static-query>
query{
    publication : category(id : "Nos Publications"){
        id
        title
        path
        belongsTo{
            edges{
                node{
                    ... on Article{
                        date(format: "YYYY-MM-DD")
                        id
                        title
                        publie
                        coverImage
                        content
                    }
                }
            }
        }
    } 
}
</static-query>

<script>
import { arrowicon } from "~/components/arrow-icon.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment , faHeart, faLongArrowAltRight , faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import VueTinySlider from 'vue-tiny-slider';

library.add(faComment , faHeart, faLongArrowAltRight, faArrowCircleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


export default {
    
  components: {
    arrowicon,
    VueTinySlider
  },
 
};
</script>



<style>
.pub-tag{
    background-color: #fff;
    font-size : 10px;
    width: 100px;
}
.image-titile{
    font-weight: 800;
}

.card-image-box{
    margin-left: 40%;
}
</style>