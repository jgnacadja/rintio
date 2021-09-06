<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :content="this.$page.page.sections[0].columns[0]" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ALaUne
        v-if="$page.featuredPost"
        :title="this.$page.page.sections[1].columns[0]"
        :featuredPost="$page.featuredPost.belongsTo.edges"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Carrousel
        v-if="$page.events"
        :eventsSectionTitle="this.$page.page.sections[2].columns[0]"
        :events="$page.events.belongsTo.edges"
        :type="'event'"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Carrousel
        v-if="$page.posts"
        :postsSectionTitle="this.$page.page.sections[3].columns[0]"
        :posts="$page.posts.belongsTo.edges"
        :type="'post'"
      />
    </LazyHydrate>
  </Layout>
</template>

<page-query>
query {
  featuredPost: contentfulCategory(path: "blog") {
    id
    title
    path
    belongsTo(order: DESC, limit: 3) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            author
            categories {
              id
              title
            }
            date
            coverImage {
              file {
                url
              }
            }
            metaDescription
          }
        }
      }
    }
  }

  posts: contentfulCategory(path: "blog") {
    id
    title
    path
    belongsTo(order: DESC) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            categories {
              id
              title
            }
            date
            coverImage {
              file {
                url
              }
            }
            metaDescription
          }
        }
      }
    }
  }

  events: contentfulCategory(path: "evenements") {
    id
    title
    path
    belongsTo(order: DESC) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            type
            categories {
              id
              title
            }
            date
            coverImage {
              file {
                url
              }
            }
            metaDescription
          }
        }
      }
    }
  }

  page: contentfulPage(path: "Blog") {
    path
    seo {
      id
      title
      date
      name
      description
      keywords
      no_index
      no_follow
    }
    sections {
      id
      title
      date
      name
      columns {
        ... on ContentfulComponentImage {
          id
          title
          name
          image {
            file {
              url
            }
          }
        }
        ... on ContentfulComponentText {
          id
          title
          text
        }
      }
    }
  }
}
</page-query>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Breadcrumb from "~/components/blog/Breadcrumb.vue";
import Carrousel from "../components/blog/Carrousel.vue";
import ALaUne from "../components/blog/ALaUne.vue";

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    Carrousel,
    ALaUne,
  },
  metaInfo() {
    return {
      title: this.$page.page.name,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.page.description,
        },
        {
          key: "keywords",
          name: "keywords",
          content: this.$page.page.seo.keywords,
        },
      ],
    };
  },
};
</script>
