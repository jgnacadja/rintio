<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" :article="$page.post.title" />
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
        <span
          class="
            relative
            text-white
            bg-secondary
            p-4
            text-sm
            hiddenx
            md:block
            ml-4
            mt-7
            -mb-7
            capitalize
            w-24
            text-center
          "
        >
          Big data
        </span>
        <g-image
          alt="iot"
          :src="$page.post.coverImage"
          class="object-cover w-full h-96 mb-0"
        />

        <div
          class="
            md:flex
            bg-white
            py-4
            rounded-sm
            shadow-sm
            md:shadow-sm
            min-h-0
            mt-4
            px-16
          "
        >
          <div class="flex py-2 space-x-16 items-center">
            <div class="flex space-x-4">
              <button
                class="
                  uppercase
                  p-3
                  flex
                  items-center
                  bg-secondary
                  max-w-max
                  bg-opacity-10
                  rounded-full
                  w-12
                  h-12
                  pointer-events-none
                "
              >
                <User />
              </button>

              <div class="px-1 md:px-0 text-left text-gray-400">
                <div class="text-sm">Vues</div>
                <div class="text-primary font-bold">813,454</div>
              </div>
            </div>
            <div class="flex space-x-4">
              <button
                class="
                  uppercase
                  p-3
                  flex
                  items-center
                  bg-secondary
                  max-w-max
                  bg-opacity-10
                  rounded-full
                  w-12
                  h-12
                  pointer-events-none
                "
              >
                <Calendar />
              </button>
              <div class="px-1 md:px-0 text-left text-gray-400">
                <div class="text-sm">Dernière Modification</div>
                <div class="text-primary font-bold">25/10/2021</div>
              </div>
            </div>
          </div>

          <div class="flex p-2 ml-auto space-x-2 items-center">
            <div class="text-xl items-center font-bold mt-1">Partager:</div>
            <div class="items-start">
              <div class="flex space-x-2">
                <a
                  href="https://www.linkedin.com/company/rintio/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://twitter.com/RintioGroup/" target="_blank">
                  <Twitter />
                </a>
                <a
                  href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p class="py-12" v-html="$page.post.content"></p>

        <div
          class="
            md:flex
            bg-white
            py-4
            rounded-sm
            shadow-sm
            md:shadow-sm
            min-h-0
            mt-4
            px-16
          "
        >
          <div class="flex py-2 items-center">
            <button
              class="
                uppercase
                p-3
                flex
                items-center
                bg-white
                max-w-max
                bg-opacity-10
                rounded-full
                w-12
                h-12
                pointer-events-none
              "
            >
              <Tag />
            </button>

            <div class="w-1/2 px-1 md:px-0 text-left ml-5">
              <div>
                Intelligence Artificielle, Big data, Data Science, Dataviz, API
                & Microservice
              </div>
            </div>
          </div>

          <div class="flex p-2 ml-auto space-x-2 items-center">
            <div class="text-xl items-center font-bold mt-1">Partager:</div>
            <div class="items-start">
              <div class="flex space-x-2">
                <a
                  href="https://www.linkedin.com/company/rintio/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://twitter.com/RintioGroup/" target="_blank">
                  <Twitter />
                </a>
                <a
                  href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
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
query query($path:String) {
    post: blogPost(path:$path) {
    id
    title
    path
    published
    categories {
      id
      title
    }
    date
    coverImage
    metaDescription
    subDescription
    descriptionUp
    descriptionDown
    content
  }
}
</page-query>

<script>
import PostSeo from "../mixins/SEO";

import LazyHydrate from "vue-lazy-hydration";
import Breadcrumb from "~/components/Breadcrumb.vue";
import User from "~/assets/images/icons/user.svg";
import Calendar from "~/assets/images/icons/calendar.svg";
import Tag from "~/assets/images/icons/tag.svg";
import Facebook from "~/assets/images/icons/facebook.svg";
import Instagram from "~/assets/images/icons/instagram.svg";
import Linkedin from "~/assets/images/icons/linkedin.svg";
import Twitter from "~/assets/images/icons/twitter.svg";

export default {
  mixins: [PostSeo],
  components: {
    LazyHydrate,
    Breadcrumb,
    User,
    Calendar,
    Tag,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
  },
  data() {
    return {
      path: "",
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.split("/")[1];
  },
};
</script>
