<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ALaUne
        v-if="$page.featuredPost"
        :featuredPost="$page.featuredPost.belongsTo.edges"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Carrousel
        v-if="$page.events"
        :events="$page.events.belongsTo.edges"
        :type="'event'"
      />
    </LazyHydrate>
    
    <LazyHydrate when-visible>
      <Carrousel
        v-if="$page.posts"
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
import moment from "moment";
import LazyHydrate from "vue-lazy-hydration";
import Keywords from "~/assets/keywords.json";
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
      title: "Blog",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Entreprise spécialisée dans la mise en oeuvre de solutions informatiques et en intelligence Artificielle en Afrique et dans le Monde",
        },
        {
          key: "keywords",
          name: "keywords",
          content: Keywords.list,
        },
      ],
    };
  },

  data() {
    return {
      path: "",
      config: {
        keywords: [
          "service",
          "numérique",
          "cloud",
          "Devops",
          "offshoring",
          "nearingShore",
          "Afrique",
          "informatique",
          "IT",
          "webservice",
          "Big data",
          "IA",
          "intelligence",
          "Application",
          "python",
          "cluster",
          "java",
          "E-learning",
        ],
      },
      currentSlide: 1,
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.slice(1).replace("-", " ");
  },
  methods: {
    paginate(array, page_size, page_number) {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    },
    nextSlide() {
      if (this.currentSlide == 3) {
        let activeSlide = document.querySelector(".slide.translate-x-0");
        activeSlide.classList.remove("translate-x-0");
        activeSlide.classList.add("translate-x-full");

        let nextSlide =
          activeSlide.previousElementSibling.previousElementSibling;
        nextSlide.classList.remove("translate-x-full");
        nextSlide.classList.add("translate-x-0");

        this.currentSlide = 1;
      } else {
        this.currentSlide++;

        let activeSlide = document.querySelector(".slide.translate-x-0");
        activeSlide.classList.remove("translate-x-0");
        activeSlide.classList.add("translate-x-full");

        let nextSlide = activeSlide.nextElementSibling;
        nextSlide.classList.remove("translate-x-full");
        nextSlide.classList.add("translate-x-0");
      }
    },

    previousSlide() {
      if (this.currentSlide == 1) {
        let activeSlide = document.querySelector(".slide.translate-x-0");
        activeSlide.classList.remove("translate-x-0");
        activeSlide.classList.add("translate-x-full");

        let previousSlide = activeSlide.nextElementSibling.nextElementSibling;
        previousSlide.classList.remove("translate-x-full");
        previousSlide.classList.add("translate-x-0");

        this.currentSlide = 3;
      } else {
        this.currentSlide--;

        let activeSlide = document.querySelector(".slide.translate-x-0");
        activeSlide.classList.remove("translate-x-0");
        activeSlide.classList.add("translate-x-full");

        let previousSlide = activeSlide.previousElementSibling;
        previousSlide.classList.remove("translate-x-full");
        previousSlide.classList.add("translate-x-0");
      }
    },
  },
  filters: {
    // Filter definitions
    FormatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
      }
    },
  },
};
</script>
