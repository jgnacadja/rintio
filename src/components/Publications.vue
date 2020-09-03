<template>
    <section>
        <div class="container is-fluid">
            <h2 class="title is-size-4-mobile is-size-2-tablet has-text-primary">Nos Publications</h2>
            <div class="row">
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
                                        <span><i class="fal fa-eye fa-2x"></i></span>
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
                        <b class="image-titile has-text-primary" v-html="$static.publication.belongsTo.edges[0].node.date"></b> <br />
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[0].node.content"></b> <br />
                    </div>
                    <div class="column is-3">
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[1].node.title"></b> <br />
                        <b class="image-titile has-text-primary" v-html="$static.publication.belongsTo.edges[1].node.date"></b> <br />
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[1].node.content"></b> <br />
                    </div>
                    <div class="column is-3">
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[2].node.title"></b> <br />
                        <b class="image-titile has-text-primary" v-html="$static.publication.belongsTo.edges[2].node.date"></b> <br />
                        <b class="image-titile" v-html="$static.publication.belongsTo.edges[2].node.content"></b> <br />
                    </div>
                </div>
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
                        coverImage
                        content
                    }
                }
            }
        }
    } 
}
</static-query>

<style>
.pub-tag{
    background-color: #fff;
    font-size : 10px;
    width: 100px;
}
.image-titile{
    font-weight: 800;
}
</style>