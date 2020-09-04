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
                                    <div class="column is-3">
                                    </div>
                                    <div class="column is-3">
                                        <span><i class="fal fa-eye fa-1x"></i></span>
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
                                <a href="#"><i class="fal fa-heart fa-1x has-text-danger"></i></a>
                            </div>
                            <div class="column is-1 icon-tag">
                                <a class="has-text-black" href="#">247</a>
                            </div>
                            <div class="column is-1">
                                <a href="#"><i class="fal fa-comment fa-1x has-text-primary is-pulled-left"></i></a>
                            </div>

                            <div class="column is-1 icon-tag">
                                <a class="has-text-black" href="#">57</a>
                            </div>
                            <div class="column is-1 ">
                                <a href="#"><i class="fal fa-share fa-1x has-text-primary is-pulled-left"></i></a>                                
                            </div>

                            <div class="column is-1 icon-tag">
                                <a class="has-text-black" href="#">33</a>
                            </div>
                            <div class="column card-image-box">
                                    <a href="#"><i class="fal fa-arrow-circle-right fa-1x has-text-primary is-pulled-right"></i></a>
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
                                <a href="#"><i class="fal fa-heart fa-1x has-text-danger"></i></a>
                            </div>
                            <div class="column is-2 icon-tag-next-box">
                                <a class="has-text-black" href="#">247</a>
                            </div>
                            <div class="column is-1">
                                <a href="#"><i class="fal fa-comment fa-1x has-text-primary is-pulled-left"></i></a>
                            </div>

                            <div class="column is-2 icon-tag-next-box">
                                <a class="has-text-black" href="#">57</a>
                            </div>
                            <div class="column is-1 ">
                                <a href="#"><i class="fal fa-share fa-1x has-text-primary is-pulled-left"></i></a>                                
                            </div>

                            <div class="column is-1 icon-tag-next-box">
                                <a class="has-text-black" href="#">33</a>
                            </div>
                            <div  class="column card-image-box">
                                    <a href="#"><i class="fal fa-arrow-circle-right fa-1x has-text-primary is-pulled-right"></i></a>
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
                                <a href="#"><i class="fal fa-heart fa-1x has-text-danger"></i></a>
                            </div>
                            <div class="column is-2 icon-tag-next-box">
                                <a class="has-text-black" href="#">247</a>
                            </div>
                            <div class="column is-1">
                                <a href="#"><i class="fal fa-comment fa-1x has-text-primary is-pulled-left"></i></a>
                            </div>

                            <div class="column is-2 icon-tag-next-box">
                                <a class="has-text-black" href="#">57</a>
                            </div>
                            <div class="column is-1 ">
                                <a href="#"><i class="fal fa-share fa-1x has-text-primary is-pulled-left"></i></a>                                
                            </div>

                            <div class="column is-1 icon-tag-next-box">
                                <a class="has-text-black" href="#">33</a>
                            </div>
                            <div  class="column card-image-box">
                                    <a href="#"><i class="fal fa-arrow-circle-right fa-1x has-text-primary is-pulled-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row is-hidden-desktop is-hidden-tablet">
                <VueSlickCarousel :arrows="true">
                    <div>
                        <figure>
                            <g-image :src="$static.publication.belongsTo.edges[0].node.coverImage"/>
                        </figure>
                        <figcaption>
                            <div class="column is-6">
                                <b class="image-titile" v-html="$static.publication.belongsTo.edges[0].node.title"></b> <br />
                                <div class="columns">
                                    <div class="column is-1 is-pulled-left">
                                        <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[0].node.date"></b> <br />
                                    </div>
                                    <div class="column is-1">
                                        <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[0].node.publie"></b> <br />
                                    </div>
                                </div>
                                <b class="image-titile" v-html="$static.publication.belongsTo.edges[0].node.content"></b> <br />
                                <div class="is-pulled-left">  
                                    <a href="#"><i class="fal fa-heart fa-1x has-text-danger"></i></a>     
                                    <a class="has-text-black" href="#">247</a>
                                </div>
                                <div class="is-pulled-left icon-tag-mobile">  
                                    <a href="#"><i class="fal fa-comment fa-1x has-text-primary"></i></a>     
                                    <a class="has-text-black" href="#">57</a>
                                </div>
                                <div class="is-pulled-left icon-tag-mobile">  
                                    <a href="#"><i class="fal fa-share fa-1x has-text-primary"></i></a>     
                                    <a class="has-text-black" href="#">33</a>
                                </div>
                                <div class="is-pulled-right">  
                                    <a href="#"><i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i></a>     
                                </div>
                            </div>
                        </figcaption>
                    </div>
                     <div>
                        <figure>
                            <g-image :src="$static.publication.belongsTo.edges[1].node.coverImage"/>
                            <figcaption>
                                <div class="column is-6">
                                    <b class="image-titile" v-html="$static.publication.belongsTo.edges[1].node.title"></b> <br />
                                    <div class="columns">
                                        <div class="column is-1 is-pulled-left">
                                            <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[1].node.date"></b> <br />
                                        </div>
                                        <div class="column is-1">
                                            <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[1].node.publie"></b> <br />
                                        </div>
                                    </div>
                                    <b class="image-titile" v-html="$static.publication.belongsTo.edges[1].node.content"></b> <br />
                                                                    <div class="is-pulled-left">  
                                    <a href="#"><i class="fal fa-heart fa-1x has-text-danger"></i></a>     
                                    <a class="has-text-black" href="#">247</a>
                                    </div>
                                    <div class="is-pulled-left icon-tag-mobile">  
                                        <a href="#"><i class="fal fa-comment fa-1x has-text-primary"></i></a>     
                                        <a class="has-text-black" href="#">57</a>
                                    </div>
                                    <div class="is-pulled-left icon-tag-mobile">  
                                        <a href="#"><i class="fal fa-share fa-1x has-text-primary"></i></a>     
                                        <a class="has-text-black" href="#">33</a>
                                    </div>
                                    <div class="is-pulled-right">  
                                        <a href="#"><i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i></a>     
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <g-image class="" :src="$static.publication.belongsTo.edges[2].node.coverImage"/>
                            <figcaption>
                                <div class="column is-6">
                                    <b class="image-titile" v-html="$static.publication.belongsTo.edges[2].node.title"></b> <br />
                                    <div class="columns">
                                        <div class="column is-1 is-pulled-left">
                                            <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[2].node.date"></b> <br />
                                        </div>
                                        <div class="column is-1">
                                            <b class="image-titile has-text-primary is-pulled-left" v-html="$static.publication.belongsTo.edges[2].node.publie"></b> <br />
                                        </div>
                                    </div>
                                    <b class="image-titile" v-html="$static.publication.belongsTo.edges[2].node.content"></b> <br />
                                                                    <div class="is-pulled-left">  
                                    <a href="#"><i class="fal fa-heart fa-1x has-text-danger"></i></a>     
                                    <a class="has-text-black" href="#">247</a>
                                    </div>
                                    <div class="is-pulled-left icon-tag-mobile">  
                                        <a href="#"><i class="fal fa-comment fa-1x has-text-primary"></i></a>     
                                        <a class="has-text-black" href="#">57</a>
                                    </div>
                                    <div class="is-pulled-left icon-tag-mobile">  
                                        <a href="#"><i class="fal fa-share fa-1x has-text-primary"></i></a>     
                                        <a class="has-text-black" href="#">33</a>
                                    </div>
                                    <div class="is-pulled-right">  
                                        <a href="#"><i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i></a>     
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </VueSlickCarousel>
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    
  components: {
    arrowicon,
    VueSlickCarousel
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

.heart-icon{
    color :red ;
}
.icon-tag-mobile{
    margin-left: 2%;
}
.icon-tag{
    margin-left: -5%;
}

.icon-tag-next-box{
    margin-left: -2%;
}

.content-icon{
    margin-left: 5%;
}
.card-image-box{
    margin-left: 20%;
}

</style>