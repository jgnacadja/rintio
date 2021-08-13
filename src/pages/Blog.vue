<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ALaUne :allposts="$page.onlinePost.edges" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Carrousel :alloffers="$page.allOffer.edges" :type="'offer'" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Carrousel :allevents="$page.AllEventpost.edges" :type="'event'" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Carrousel :allposts="$page.allPosts.edges" :type="'post'" />
    </LazyHydrate>
  </Layout>
</template>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        categories {
          id
          title
        }
        tags {
          id
          title
        }
        date
        metaDescription
        coverImage
        tags {
          id
          title
        }
      }
    }
  }
  tags: allTag {
    edges {
      node {
        id
        title
      }
    }
  }
  category: allCategory {
    edges {
      node {
        id
        title
      }
    }
  }

  onlinePost: allBlogPost(
    filter: { categories: { in: "Blog" } }
    limit: 3
    order: DESC
  ) {
    edges {
      node {
        id
        title
        path
        categories {
          id
          title
        }
        date
        metaDescription
        coverImage
      }
    }
  }

  allPosts: allBlogPost(filter: { categories: { in: "Blog" } }, order: DESC) {
    edges {
      node {
        id
        title
        path
        categories {
          id
          title
        }
        date
        coverImage
        metaDescription
      }
    }
  }

  allOffer: allBlogPost(filter: { categories: { in: "Offres" } }, order: DESC) {
    edges {
      node {
        id
        title
        path
        categories {
          id
          title
        }
        date
        coverImage
        metaDescription
      }
    }
  }
    AllEventpost: allBlogPost(
    filter: { categories: { in: "Evènements" } }
    order: DESC
  ) {
    edges {
      node {
        id
        title
        path
        categories {
          id
          title
        }
        date
        coverImage
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
