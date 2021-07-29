<template>
  <Layout>
    <LazyHydrate when-idle>
      <BreadcrumbBlog />
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
          class="relative w-11/12 h-44 md:h-96 overflow-hidden mx-auto shadow-lg rounded-md bg-white"
        >
          <div
            id="slide_item"
            class="absolute px-10 pb-10 inset-0 bg-transparent flex items-end justify-center transition-all ease-in-out duration-1000 transform translate-x-0 slide"
          >
            <p
              class="bg-gray-900 px-7 py-3 text-white font-bold uppercase rounded-md opacity-80"
            >
              Start your morning
            </p>

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
            class="z-10 bg-primary bg-opacity-10 w-12 h-12 mr-2 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
            @click="previousSlide()"
          >

            <ArrowLeft />
          </div>
          <div
            class="z-10 bg-primary bg-opacity-10 w-12 h-12 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
            @click="nextSlide()"

          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>

<LazyHydrate when-visible>

      <Article/>
    </LazyHydrate>
    
    <LazyHydrate when-visible>

      <Event />
    </LazyHydrate>

    <LazyHydrate when-visible>

      <Post />
    </LazyHydrate>
  </Layout>
</template>

<page-query>
query {
  posts:  allBlogPost {
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
      node{
        id
        title
      }
    }
  }
  category: allCategory {
    edges {
      node{
        id
        title
      }
    }
  }
  
  onlinePost : allBlogPost(
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

}

</page-query>

<script>
import moment from "moment";
import LazyHydrate from "vue-lazy-hydration";
import Breadcrumb from "~/components/Breadcrumb.vue";
import { Pager } from "gridsome";
import Seo from "~/assets/images/Illustrations/seo.svg";
import RemoveTag from "~/assets/images/icons/remove.svg";
import ArrowLeft from "~/assets/images/icons/blog-arrow-left.svg";
import ArrowRight from "~/assets/images/icons/blog-arrow-right.svg";
import Keywords from "~/assets/keywords.json";
import BreadcrumbBlog from "~/components/Blog/BreadcrumbBlog.vue";
import Event from "~/components/Blog/Event.vue";
import Articles from '../components/Blog/Articles.vue';
import Article from '../components/Blog/Article.vue';
//import Post from "~/components/blog/Post.vue";

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    Pager,
    Seo,
    RemoveTag,
    ArrowLeft,
    ArrowRight,
    BreadcrumbBlog,
    Event,
    Article,
    //Post
    Articles  },
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
      search: "",
      searchByTag: "",
      page: 1,
      numberOfPages: 1,
      pinnedTabs: [],
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
  computed: {
    searchResults() {
      if (this.search) {
        this.pinnedTabs = [];
        let filteredPosts = this.$page.posts.edges.filter((post) => {
          return post.node.title
            .toLowerCase()
            .includes(this.search.toLowerCase().trim());
        });
        this.numberOfPages = Math.ceil(filteredPosts.length / 5);
        return this.paginate(filteredPosts, 5, this.page);
      } else {
        console.log(this.$page.posts.edges);
        if (this.pinnedTabs.length !== 0) {
          console.log(this.pinnedTabs);

          /* // Get all the required ids
          var ids = filter.map(function (f) {
            return f.id;
          });
          var filtered = array.filter(function (a) {
            // Check if both source and target are present in list of ids
            return ids.indexOf(a.source) !== -1 && ids.indexOf(a.target) !== -1;
          }); */

          console.log(filtered);
          return [];
        } else {
          return this.paginate(this.$page.posts.edges, 5, this.page);
        }
      }
    },
  },
  methods: {
    paginate(array, page_size, page_number) {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    },
    pinTag(tag) {
      if (this.pinnedTabs.indexOf(tag) !== -1) {
        this.pinnedTabs = this.pinnedTabs.filter((tagged) => tagged != tag);
      } else {
        this.search = "";
        this.pinnedTabs.push(tag);
      }
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

<style lang="scss" scoped>
@import "../variables.scss";

.pager {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 1rem;

  &__link {
    color: #e5e7eb;
    text-align: center;
    text-decoration: none;

    &:hover:not(.active) {
      background-color: #9ca3af;
      color: #000 !important;
    }
  }
}

.pager a {
  background-color: #fff;
  width: 2rem;
  padding: 1rem;
  border: 1px solid rgb(223, 223, 223);
}

.pager a:hover {
  background-color: #f9fafb;
  color: #000 !important;
}

.active {
  background-color: #e5e7eb !important;
  color: #000 !important;
  padding: 1rem;
  border: 1px solid #3b82f6 !important;
}
</style>
