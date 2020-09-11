<template>
  <section>
    <div class="container is-fluid">
      <div class="row is-hidden-mobile">
        <div class="columns">
          <div
            class="column is-6"
            v-for="edge in $static.featuredpublication.belongsTo.edges"
            :key="edge.node.id"
          >
            <figure>
              <g-image :src="edge.node.coverImage" />
            </figure>
            <b class="image-titile">{{ edge.node.title }}</b>
            <br />
            <div class="columns">
              <div class="column">
                <b class="image-titile has-text-primary is-pulled-left">{{ edge.node.date }}</b>
                <br />
              </div>
              <div class="column">
                <b class="image-titile has-text-primary is-pulled-left">{{ edge.node.publie }}</b>
                <br />
              </div>
            </div>
            <b class="image-titile" v-html="edge.node.content"></b>
            <br />
            <div class="columns">
              <div class="column is-1">
                <a href="#">
                  <i class="fal fa-heart fa-1x has-text-danger"></i>
                </a>
              </div>
              <div class="column is-1 icon-tag">
                <a class="has-text-black" href="#">247</a>
              </div>
              <div class="column is-1">
                <a href="#">
                  <i class="fal fa-comment fa-1x has-text-primary is-pulled-left"></i>
                </a>
              </div>

              <div class="column is-1 icon-tag">
                <a class="has-text-black" href="#">57</a>
              </div>
              <div class="column is-1">
                <a href="#">
                  <i class="fal fa-share fa-1x has-text-primary is-pulled-left"></i>
                </a>
              </div>

              <div class="column is-1 icon-tag">
                <a class="has-text-black" href="#">33</a>
              </div>
              <div class="column card-image-box">
                <a href="#">
                  <i class="fal fa-arrow-circle-right fa-1x has-text-primary is-pulled-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            class="column is-3"
            v-for="edge in $static.publications.belongsTo.edges"
            :key="edge.node.id"
          >
            <figure>
              <g-image :src="edge.node.coverImage" />
            </figure>
            <b class="image-titile">{{ edge.node.title }}</b>
            <br />
            <div class="columns">
              <div class="column">
                <b class="image-titile has-text-primary is-pulled-left">{{ edge.node.date }}</b>
                <br />
              </div>
              <div class="column">
                <b class="image-titile has-text-primary is-pulled-left">{{ edge.node.publie }}</b>
                <br />
              </div>
            </div>
            <b class="image-titile" v-html="edge.node.content"></b>
            <br />
            <div class="columns">
              <div class="column is-1">
                <a href="#">
                  <i class="fal fa-heart fa-1x has-text-danger"></i>
                </a>
              </div>
              <div class="column is-2 icon-tag-next-box">
                <a class="has-text-black" href="#">247</a>
              </div>
              <div class="column is-1">
                <a href="#">
                  <i class="fal fa-comment fa-1x has-text-primary is-pulled-left"></i>
                </a>
              </div>

              <div class="column is-2 icon-tag-next-box">
                <a class="has-text-black" href="#">57</a>
              </div>
              <div class="column is-1">
                <a href="#">
                  <i class="fal fa-share fa-1x has-text-primary is-pulled-left"></i>
                </a>
              </div>

              <div class="column is-1 icon-tag-next-box">
                <a class="has-text-black" href="#">33</a>
              </div>
              <div class="column card-image-box">
                <a href="#">
                  <i class="fal fa-arrow-circle-right fa-1x has-text-primary is-pulled-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row is-hidden-desktop is-hidden-tablet">
        <b-carousel :arrow="true" :arrow-hover="true" :pause-hover="true">
          <b-carousel-item
            v-for="edge in $static.allPublications.belongsTo.edges"
            :key="edge.node.id"
          >
            <div class="column is-12">
              <figure>
                <g-image :src="edge.node.coverImage" />
              </figure>
              <b class="image-titile">{{ edge.node.title }}</b>
              <br />
              <div class="columns">
                <div class="column">
                  <b class="image-titile has-text-primary is-pulled-left">{{ edge.node.date }}</b>
                  <br />
                </div>
                <div class="column">
                  <b class="image-titile has-text-primary is-pulled-left">{{ edge.node.publie }}</b>
                  <br />
                </div>
              </div>
              <b class="image-titile" v-html="edge.node.content"></b>
              <br />
                  <div class="is-pulled-left">
                    <a href="#">
                      <i class="fal fa-heart fa-1x has-text-danger"></i>
                    </a>
                    <a class="has-text-black" href="#">247</a>
                  </div>
                  <div class="is-pulled-left icon-tag-mobile">
                    <a href="#">
                      <i class="fal fa-comment fa-1x has-text-primary"></i>
                    </a>
                    <a class="has-text-black" href="#">57</a>
                  </div>
                  <div class="is-pulled-left icon-tag-mobile">
                    <a href="#">
                      <i class="fal fa-share fa-1x has-text-primary"></i>
                    </a>
                    <a class="has-text-black" href="#">33</a>
                  </div>
                  <div class="is-pulled-right">
                    <a href="#">
                      <i class="fal fa-arrow-circle-right fa-1x has-text-primary"></i>
                    </a>
                  </div>
            </div>
          </b-carousel-item>
        </b-carousel>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  featuredpublication: category(id: "Nos Publications") {
    id
    title
    path
    belongsTo(limit: 1) {
      edges {
        node {
          ... on Article {
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

  publications: category(id: "Nos Publications") {
    id
    title
    path
    belongsTo(skip: 1) {
      edges {
        node {
          ... on Article {
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

  allPublications: category(id: "Nos Publications") {
    id
    title
    path
    belongsTo {
      edges {
        node {
          ... on Article {
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

export default {
  components: {
    arrowicon,
  },
};
</script>



<style>
.pub-tag {
  background-color: #fff;
  font-size: 10px;
  width: 100px;
}
.image-titile {
  font-weight: 800;
}

.heart-icon {
  color: red;
}
.icon-tag-mobile {
  margin-left: 2%;
}
.icon-tag {
  margin-left: -5%;
}

.icon-tag-next-box {
  margin-left: -2%;
}

.content-icon {
  margin-left: 5%;
}
.card-image-box {
  margin-left: 20%;
}

.carousel-indicator is-inside is-bottom {
  display: none;
}
</style>