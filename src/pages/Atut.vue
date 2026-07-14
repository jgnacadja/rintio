<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

    <div class="items-center w-full justify-center py-6">
      <div class="text-center mx-4 sm:mx-4 lg:mx-32 xl:mx-64">
        <h1 class="my-3 text-2xl lg:text-5xl font-extrabold text-primary">
          Africa TechUp Tour
        </h1>
        <div class="md:w-2/3 mx-auto py-4 md:px-0">
          <p class="text-gray-700 leading-8">
            Rintio est partenaire officiel de l'Africa TechUp Tour (ATUT), une
            initiative majeure pour promouvoir l'innovation technologique et
            l'entrepreneuriat digital en Afrique de l'Ouest. Décourez notre
            engagement et nos initiatives avec ce mouvement transformateur.
          </p>
        </div>
      </div>
    </div>

    <LazyHydrate when-visible>
      <Carrousel
        v-if="$page.atuEvents"
        :eventsSectionTitle="'Événements Africa TechUp Tour'"
        :events="$page.atuEvents.belongsTo.edges"
        :type="'event'"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Carrousel
        v-if="$page.atuPosts"
        :postsSectionTitle="'Nos initiatives et partenariats'"
        :posts="$page.atuPosts.belongsTo.edges"
        :type="'post'"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Carrousel
        v-if="$page.retrospectives"
        :postsSectionTitle="'Rétrospectives et retours d\'expérience'"
        :posts="$page.retrospectives.belongsTo.edges"
        :type="'post'"
      />
    </LazyHydrate>
  </Layout>
</template>

<page-query>
query {
  atuEvents: contentfulCategory(path: "africa-techup-tour") {
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

  atuPosts: contentfulCategory(path: "blog") {
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

  retrospectives: contentfulCategory(path: "blog") {
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
}
</page-query>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Breadcrumb from "~/components/Breadcrumb.vue";
import Carrousel from "~/components/blog/Carrousel.vue";

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    Carrousel,
  },
  metaInfo() {
    return {
      title: "Africa TechUp Tour Bénin — Rintio | Innovation Afrique",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Africa TechUp Tour : Rintio, partenaire officiel au Bénin. Innovation technologique, entrepreneurship digital et transformation en Afrique de l'Ouest.",
        },
        {
          key: "keywords",
          name: "keywords",
          content:
            "Africa TechUp Tour, ATUT, innovation, startup, Bénin, Afrique, entrepreneurship, technologie, digital",
        },
      ],
    };
  },
  data() {
    return {
      path: "",
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.slice(1).replace("-", " ");
  },
};
</script>
