<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb />
    </LazyHydrate>

    <div
      class="container w-full mx-auto mt-8 md:mt-24 space-x-0 md:flex md:px-16 md:space-x-6"
    >
      <div id="home" class="container w-full">
        <div class="mx-4 md:px-10">
          <h3 class="md:mb-12 text-lg text-primary font-bold">
            Articles à la une
          </h3>
        </div>

        <div
          id="header_slider"
          class="relative w-11/12 md:h-96 overflow-hidden mx-auto shadow-lg rounded-md bg-white pt-2"
        >
          <div
            id="slide_item"
            class="absolute px-10 pb-10 inset-0 bg-transparent flex items-end transition-all ease-in-out duration-1000 transform translate-x-0 slide"
          >
            <div class="mx-16 md:my-16">
              <div class="md:my-8 text-lg text-primary font-bold pt-4">
                Remise des diplômes au Africa TechUp Tour
                <br />Abidjan 2021
              </div>
              <p class="mt-8 md:my-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse lacus interdum quis sociis vitae tempor volutpat.
                Elit faucibus arcu, amet, praesent. Laoreet fringilla amet
                tellus ultrices facilisi egestas maecenas. Integer cras
                tristique urna, diam, sed enim. Egestas vehicula ipsum vitae
                amet a nam lacinia.
              </p>
              <div class="fixed h-full bg-white">
                <div class="fixed text-left mx-4 md:px-10">
                  <h3 class="md:mb-12 ml-2 text-sm text-primary font-bold pt-3">
                    Rintio
                    <p class="text-sm mb-2 text-gray-300">17 Mai 2021</p>
                  </h3>
                </div>
                <g-image
                  src="~/assets/images/Blog/article1.png"
                  alt=""
                  class="pt-2 w-auto"
                >
                </g-image>
              </div>
            </div>
            <div class="h-5/6 md:h-full my-px md:flex-shrink-0">
              <g-image
                src="~/assets/images/Blog/certificate1.png"
                alt=""
                class="h-96 pt-5 pb-5 w-auto"
              >
              </g-image>
            </div>
          </div>
          <div
            id="slide_item"
            class="absolute px-10 pb-10 inset-0 bg-transparent flex items-end justify-center transition-all ease-in-out duration-1000 transform translate-x-full slide"
          >
            <p
              class="bg-gray-900 px-7 py-3 text-white font-bold uppercase rounded-md opacity-80"
            >
              drink some coffee
            </p>
          </div>
          <div
            id="slide_item"
            class="absolute px-10 pb-10 inset-0 bg-transparent flex items-end justify-center transition-all ease-in-out duration-1000 transform translate-x-full slide"
          >
            <p
              class="bg-gray-900 px-7 py-3 text-white font-bold uppercase rounded-md opacity-80"
            >
              Coffee is always a good idea
            </p>
          </div>
        </div>
        <div class="flex float-right mt-4" style="margin-right: 3.58rem">
          <div
            class="z-10 bg-primary bg-opacity-10 w-8 h-8 mr-2 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
            @click="previousSlide()"
          >
            <ArrowLeft />
          </div>
          <div
            class="z-10 bg-primary bg-opacity-10 w-8 h-8 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
            @click="nextSlide()"
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>

    <LazyHydrate when-visible>
      <Carrousel :allposts="$page.allOffer.edges" :type="'offer'" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Carrousel :allposts="$page.allPosts.edges" :type="'post'" />
    </LazyHydrate>

        <!-- <LazyHydrate when-visible>
      <Carrousel :allposts="$page.AllEventpost.edges" :type="'Event'" />
    </LazyHydrate> -->
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
    filter: { categories: { in: "Blog" } }
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
//import RemoveTag from "~/assets/images/icons/remove.svg";
import ArrowLeft from "~/assets/images/icons/blog-arrow-left.svg";
import ArrowRight from "~/assets/images/icons/blog-arrow-right.svg";
import Keywords from "~/assets/keywords.json";
import Breadcrumb from "~/components/blog/Breadcrumb.vue";
//import Event from "~/components/blog/Event.vue";
import Carrousel from "../components/blog/Carrousel.vue";

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    ArrowLeft,
    ArrowRight,
    Carrousel,
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
