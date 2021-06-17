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
                  :href="`https://www.linkedin.com/sharing/share-offsite/?url=${$static.metadata.siteUrl}${fullPath}`"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  :href="`https://twitter.com/intent/tweet?url=${$static.metadata.siteUrl}${fullPath}&text=${$page.post.title}&via=rintioGroup&hashtags=${tags}`"
                  target="_blank"
                >
                  <Twitter />
                </a>
                <a
                  :href="`https://www.facebook.com/sharer.php?u=${$static.metadata.siteUrl}${fullPath}&href=${$static.metadata.siteUrl}${fullPath}&quote=${$page.post.metaDescription}`"
                  target="_blank"
                >
                  <Facebook />
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
                  capitalize         
                "
                >{{ edge.node.title }}
              </span>
            </div>

          </div>

          <div class="flex p-2 ml-auto space-x-2 items-center">
            <div class="text-xl items-center font-bold mt-1">Partager:</div>
            <div class="items-start">
              <div class="flex space-x-2">
                <a
                  :href="`https://www.linkedin.com/sharing/share-offsite/?url=${$static.metadata.siteUrl}${fullPath}`"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  :href="`https://twitter.com/intent/tweet?url=${$static.metadata.siteUrl}${fullPath}&text=${$page.post.title}&via=rintioGroup&hashtags=${tags}`"
                  target="_blank"
                >
                  <Twitter />
                </a>
                <a
                  :href="`https://www.facebook.com/sharer.php?u=${$static.metadata.siteUrl}${fullPath}&href=${$static.metadata.siteUrl}${fullPath}&quote=${$page.post.metaDescription}`"
                  target="_blank"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="home" class="container px-4 w-1/4">
        <!-- <div class="md:mx-0 pt-6">
          <h1 class="text-lg md:text-xl font-extrabold mb-0">Recherche</h1>
          <div class="mb-4 -mt-3">
            <span class="inline-block w-1/3 border border-secondary"></span>
            <span class="inline-block w-2/3 border border-grey-300"></span>
          </div>
        </div> -->

        <div class="md:mx-0 pt-6">
          <h1 class="text-lg md:text-xl font-bold mb-0">Articles relatifs</h1>
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
              <g-image
                alt="iot"
                :src="edge.node.coverImage"
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
                {{ edge.node.categories.title }}
              </span>
            </div>
            <div class="bg-white px-4 w-3/5 h-full">
              <p class="text-primary text-xs mt-4">
                <span>{{ edge.node.date | FormatDate }}</span>
              </p>
              <p class="md:mt-0 text-gray-800 font-semibold mb-2 text-sm">
                {{ edge.node.title }}
              </p>
            </div>
          </div>
          <div class="mr-auto">
            <g-link to="/blog">
              <button
                href="#"
                class="flex text-sm md:text-base font-medium hover:text-secondary focus:outline-none"
              >
                Voir toutes les publications <span class="pl-2 pt-1"><Arrow /></span>
              </button>
            </g-link>
          </div>
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

    tags {
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

  tags: allTag {
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
        date
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
import PostSeo from "../mixins/SEO";
import moment from "moment";

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
      fullPath: "",
      tags: "",
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.split("/")[1];
    this.fullPath = this.$router.currentRoute.path;
  },

  filters: {
    // Filter definitions
    FormatDate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
  },
  created() {
    this.$page.post.tags.forEach((tag) => {
      this.tags !== ""
        ? (this.tags = `${this.tags},${tag.title}`)
        : (this.tags = `${tag.title}`);
    });
  },
};
</script>
