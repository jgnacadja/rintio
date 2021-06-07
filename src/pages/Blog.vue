<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

    <div
      class="md:flex container mx-auto md:px-16 space-x-0 md:space-x-6 w-full mt-24"
    >
      <div id="home" class="container px-4 w-3/4">
        <div class="space-y-6">
          <!-- main post -->
          <div
            class="mb-4 lg:mb-0 p-4 lg:p-0 w-full relative block bg-white"
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
          >
            <g-link :to="edge.node.path">
              <g-image
                alt="iot"
                :src="edge.node.coverImage"
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
                  w-64
                  text-center
                "
              >
                {{ edge.node.categories.id }}
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
                {{ edge.node.title }}
              </p>
              <p class="text-primary text-xs space-x-8 mx-4">
                <span>{{ edge.node.date }}</span>
                <span>Publié par : xxxxxxxxxxxxx</span>
              </p>
              <p
                class="text-gray-600 mb-4 mx-4"
                v-html="edge.node.metaDescription"
              ></p>
              <div class="flex space-x-8 mx-4">
                <p class="flex space-x-2">
                  <Like /> <span class="text-xs">24k</span>
                </p>
                <p class="flex space-x-2">
                  <Comment /> <span class="text-xs">247</span>
                </p>
                <p class="flex space-x-2">
                  <Share /> <span class="text-xs">24</span>
                </p>
              </div>
            </g-link>
          </div>

          <!-- paginator -->
          <ul
            class="
              flex
              list-reset
              border border-grey-light
              rounded
              w-auto
              font-sans
            "
          >
            <li>
              <a
                class="
                  block
                  hover:text-white
                  hover:bg-blue
                  text-blue
                  border-r border-grey-light
                  px-3
                  py-2
                "
                href="#"
                >Previous</a
              >
            </li>
            <li>
              <a
                class="
                  block
                  hover:text-white
                  hover:bg-blue
                  text-blue
                  border-r border-grey-light
                  px-3
                  py-2
                "
                href="#"
                >1</a
              >
            </li>
            <li>
              <a
                class="
                  block
                  hover:text-white
                  hover:bg-blue
                  text-blue
                  border-r border-grey-light
                  px-3
                  py-2
                "
                href="#"
                >2</a
              >
            </li>
            <li>
              <a
                class="block text-white bg-blue border-r border-blue px-3 py-2"
                href="#"
                >3</a
              >
            </li>
            <li>
              <a
                class="block hover:text-white hover:bg-blue text-blue px-3 py-2"
                href="#"
                >Next</a
              >
            </li>
          </ul>
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
          <h1 class="text-lg md:text-xl font-bold mb-0">Articles Populaires</h1>
          <div class="mb-4 -mt-3">
            <span class="inline-block w-1/3 border border-secondary"></span>
            <span class="inline-block w-2/3 border border-grey-300"></span>
          </div>
        </div>

        <div class="w-full hidden md:block">
          <!-- post 1 -->
          <div class="w-full flex flex-col md:flex-row mb-5">
            <div class="w-2/5 h-full">
              <g-image
                alt="iot"
                src="~/assets/images/home/blog/ia.png"
                class="
                  block
                  md:hidden
                  lg:block
                  h-64
                  md:h-full
                  m-4
                  md:m-0
                  w-full
                "
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
                  w-24
                  text-center
                "
              >
                Big data
              </span>
            </div>
            <div class="bg-white px-4 w-3/5 h-full">
              <p class="text-primary text-xs mt-4">
                <span>10 Jan 2020</span>
              </p>
              <p class="md:mt-0 text-gray-800 font-semibold mb-2 text-xl">
                Article 2
              </p>
              <p class="block p-2 pl-0 pt-1 text-sm text-gray-600">
                Lorem Ipsum est simplement du faux texte employé dans...
              </p>
            </div>
          </div>

          <div class="w-full flex flex-col md:flex-row">
            <div class="w-2/5 h-full">
              <g-image
                alt="iot"
                src="~/assets/images/home/blog/ia.png"
                class="
                  block
                  md:hidden
                  lg:block
                  h-64
                  md:h-full
                  m-4
                  md:m-0
                  w-full
                "
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
                  w-24
                  text-center
                "
              >
                Big data
              </span>
            </div>
            <div class="bg-white px-4 w-3/5 h-full">
              <p class="text-primary text-xs mt-4">
                <span>10 Jan 2020</span>
              </p>
              <p class="md:mt-0 text-gray-800 font-semibold mb-2 text-xl">
                Article 2
              </p>
              <p class="block p-2 pl-0 pt-1 text-sm text-gray-600">
                Lorem Ipsum est simplement du faux texte employé dans...
              </p>
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
            <li class="text-secondary">
              <div class="text-gray-700">Intelligence Artificielle</div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">Big Data</div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">Data Science & Data Analytics</div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">Cloud</div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">DevOps</div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">Dataviz</div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">API & Microservice</div>
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
            >Scrum</span
          >
          <span
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
            >Méthode agile</span
          >
          <span
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
            >Intelligence Artificielle</span
          >
          <span
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
            >API</span
          >
          <span
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
            >Formation</span
          >
          <span
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
            >DevOps</span
          >
        </div>
      </div>
    </div>
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
        categories{
          id
        }
        date
        metaDescription
        coverImage
      }
    }
  }
}
</page-query>


<script>
import LazyHydrate from "vue-lazy-hydration";
import Breadcrumb from "~/components/Breadcrumb.vue";

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
  },
  metaInfo: {
    title: "Blog",
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