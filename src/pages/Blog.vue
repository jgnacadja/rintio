<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

    <div
      class="
        md:flex
        container
        mx-auto
        md:px-16
        space-x-0
        md:space-x-6
        w-full
        mt-24
      "
    >
      <div id="home" class="container px-4 w-3/4">
        <div v-if="searchResults.length > 0" class="space-y-6">
          <!-- main post -->
          <div
            class="mb-4 lg:mb-0 p-4 lg:p-0 w-full relative block bg-white"
            v-for="post in searchResults"
            :key="post.node.id"
          >
            <g-link :to="post.node.path">
              <g-image
                alt="iot"
                :src="post.node.coverImage"
                class="object-cover w-full h-96 mb-0"
              />
              <span
                class="
                  relative
                  text-white
                  bg-secondary
                  p-4
                  text-sm
                  hidden
                  md:block
                  ml-4
                  -mt-7
                  capitalize
                  w-32
                  text-center
                "
                v-html="post.node.categories.title"
              >
              </span>
              <p
                class="
                  text-gray-800
                  font-bold
                  mt-2
                  mb-2
                  leading-tight
                  text-xl
                  mx-4
                "
              >
                {{ post.node.title }}
              </p>
              <p class="text-primary text-xs space-x-8 mx-4">
                <span>{{ post.node.date }}</span>
              </p>
              <p
                class="text-gray-600 mb-4 pb-8 mx-4"
                v-html="post.node.metaDescription"
              ></p>
            </g-link>
          </div>

          <!-- paginator -->

          <Pager
            class="flex justify-center pager p-2"
            :info="$page.posts.pageInfo"
          />
        </div>

        <div v-else>
          <div class="shadow-md w-full p-24 h-full text-center">
            <seo class="h-96 w-full" />
            <h3>Aucun résultat correspondant à votre recherche</h3>
            <p>
              Veuillez essayer d'ajuster vos mots-clés de recherche ou vos
              filtres.
            </p>
          </div>
        </div>
      </div>

      <div id="home" class="container px-4 w-1/4">
        <div class="md:mx-0 pt-6">
          <h1 class="text-lg md:text-xl font-extrabold mb-0">Recherche</h1>
          <div class="mb-4 -mt-3">
            <span class="inline-block w-1/3 border border-secondary"></span>
            <span class="inline-block w-2/3 border border-grey-300"></span>
          </div>
        </div>

        <div class="pt-2 relative mx-auto text-gray-600">
          <input
            class="
              border-2 border-gray-300
              bg-white
              h-12
              px-5
              pr-16
              rounded
              text-sm
              focus:outline-none
              w-full
            "
            type="search"
            name="search"
            placeholder=""
            v-model="search"
          />
          <button
            type="submit"
            class="absolute -right-3 top-3 mr-4 p-2 bg-secondary rounded"
          >
            <svg
              class="text-white h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>

        <div class="md:mx-0 pt-6">
          <h1 class="text-lg md:text-xl font-bold mb-0">Articles à la une</h1>
          <div class="mb-4 -mt-3">
            <span class="inline-block w-1/3 border border-secondary"></span>
            <span class="inline-block w-2/3 border border-grey-300"></span>
          </div>
        </div>

        <div class="w-full hidden md:block">
          <!-- post 1 -->
          <div
            class="w-full flex flex-col md:flex-row mb-5"
            v-for="edge in $page.onlinePost.edges"
            :key="edge.node.id"
          >
            <div class="w-2/5 h-full">
              <g-link :to="edge.node.path">
                <g-image
                  alt="iot"
                  :src="edge.node.coverImage"
                  class="block md:hidden lg:block h-24 m-4 md:m-0 w-full"
                />
                <span
                  class="
                    relative
                    text-white
                    bg-secondary
                    p-2
                    text-sm
                    hidden
                    md:block
                    ml-4
                    -mt-7
                    capitalize
                    w-24
                    text-center
                  "
                >
                  {{ edge.node.categories.title }}
                </span>
              </g-link>
            </div>
            <div class="bg-white px-4 w-3/5 h-24">
              <g-link :to="edge.node.path">
                <p class="text-primary text-xs mt-4">
                  <span>{{ edge.node.date | FormatDate }}</span>
                </p>
                <p class="md:mt-0 text-gray-800 font-semibold mb-2 text-sm">
                  {{ edge.node.title }}
                </p>
              </g-link>
            </div>
          </div>
        </div>

        <div class="md:mx-0">
          <h1 class="text-lg md:text-xl font-bold mb-0">Catégories</h1>
          <div class="mb-4 -mt-3">
            <span class="inline-block w-1/3 border border-secondary"></span>
            <span class="inline-block w-2/3 border border-grey-300"></span>
          </div>
        </div>
        <div>
          <ul class="list-outside list-disc ml-6 font-bold">
            <li
              v-for="edge in $page.category.edges"
              :key="edge.node.id"
              class="text-secondary"
            >
              <div class="text-gray-700">{{ edge.node.title }}</div>
            </li>
          </ul>
        </div>

        <div class="md:mx-0 pt-2">
          <h1 class="text-lg md:text-xl font-bold mb-0">
            Mots clés populaires
          </h1>
          <div class="mb-4 -mt-3">
            <span class="inline-block w-1/3 border border-secondary"></span>
            <span class="inline-block w-2/3 border border-grey-300"></span>
          </div>
        </div>
        <div>
          <span
            v-for="edge in $page.tags.edges"
            :key="edge.node.id"
            class="
              inline-flex
              items-center
              justify-center
              px-2
              py-2
              m-1
              text-xs
              leading-none
              bg-gray-200
              text-gray-700
              hover:text-white
              hover:bg-secondary
            "
            >{{ edge.node.title }}
          </span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  posts:  allBlogPost(perPage: 5, page: $page) @paginate {
    pageInfo {
      currentPage
      perPage: perPage
      totalPages
    }
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
    perPage: 3
    page: 1
    filter: { categories: { in: "Blog" } }
    limit: 3
    order: DESC
  ) @paginate {
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

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    Pager,
    Seo,
  },
  metaInfo: {
    title: "Blog",
  },
  data() {
    return {
      path: "",
      search: "",
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.slice(1).replace("-", " ");
  },
  computed: {
    searchResults() {
      return this.$page.posts.edges.filter((post) => {
        return post.node.title
          .toLowerCase()
          .includes(this.search.toLowerCase().trim());
      });
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
    color: red;
    text-align: center;
    text-decoration: none;

    &:hover:not(.active) {
      background-color: blue;
      color: #fff !important;
    }
  }
}

.pager a {
  width: 2rem;
  padding: 1rem;
  border: 1px solid rgb(223, 223, 223);
}

.pager a:hover {
  background-color: $red-rintio;
  color: #fff !important;
}

.active {
  background-color: $red-rintio;
  color: #fff !important;
  padding: 1rem;
  border: 1px solid $red-rintio;
}
</style>
