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
      <div id="home" class="container px-4 w-full md:w-3/4">
        <div
          v-if="searchResults.length > 0 && search !== null"
          class="space-y-6"
        >
          <!-- main post -->
          <div
            class="
              mb-4
              lg:mb-0
              p-4
              lg:p-0
              w-full
              relative
              block
              bg-white
              shadow-sm
            "
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

          <div
            class="
              px-5
              py-5
              flex flex-col
              xs:flex-row
              items-center
              xs:justify-between
            "
          >
            <div>
              <nav
                class="relative z-0 inline-flex rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  v-if="numberOfPages > 1"
                  @click="page = 1"
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    bg-white
                    text-lg text-gray-700
                    hover:bg-gray-50
                  "
                >
                  «
                </a>
                <a
                  v-if="numberOfPages > 1"
                  @click="page = index - 1"
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    bg-white
                    text-lg text-gray-700
                    hover:bg-gray-50
                  "
                >
                  ‹
                </a>
                <a
                  v-for="index in numberOfPages"
                  :key="index"
                  @click="page = index"
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    bg-white
                    text-lg text-gray-700
                    hover:bg-gray-50
                  "
                >
                  {{ index }}
                </a>
                <a
                  v-if="numberOfPages > 1"
                  @click="page = index + 1"
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    bg-white
                    text-lg text-gray-700
                    hover:bg-gray-50
                  "
                >
                  ›
                </a>
                <a
                  v-if="numberOfPages > 1"
                  @click="page = numberOfPages"
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    bg-white
                    text-lg text-gray-700
                    hover:bg-gray-50
                  "
                >
                  »
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="shadow w-full p-24 h-full text-center">
            <seo class="h-96 w-full" />
            <h3>Aucun résultat correspondant à votre recherche</h3>
            <p>
              Veuillez essayer d'ajuster vos mots-clés de recherche ou vos
              filtres.
            </p>
          </div>
        </div>
      </div>

      <div id="home" class="container px-4 w-full md:w-1/4">
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
              hover:text-white
              hover:bg-secondary
              cursor-pointer
            "
            v-bind:class="{
              'bg-secondary text-white':
                pinnedTabs.indexOf(edge.node.id) !== -1,
              'bg-gray-200 text-gray-700':
                pinnedTabs.indexOf(edge.node.id) === -1,
            }"
            @click="pinTag(edge.node.id)"
          >
            {{ edge.node.title }}
            <svg
              v-if="pinnedTabs.indexOf(edge.node.id) !== -1"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
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

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    Pager,
    Seo,
    RemoveTag,
  },
  metaInfo: {
    title: "Blog",
  },
  data() {
    return {
      path: "",
      search: "",
      searchByTag: "",
      page: 1,
      numberOfPages: 1,
      pinnedTabs: [],
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
