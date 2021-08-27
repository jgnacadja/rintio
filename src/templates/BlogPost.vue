<template>
  <Layout>
    <!-- component -->
    <div class="mx-auto">
      <div class="relative w-full mx-auto mb-4 md:mb-0" style="height: 24em">
        <div
          class="absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"
        ></div>
        <g-image
          alt="iot"
          :src="$page.post.coverImage"
          class="absolute top-0 left-0 z-0 object-cover w-full h-full"
        />

        <div class="absolute z-20 w-full h-full p-4 pt-10 text-center md:pt-28">
          <span
            class="inline-flex items-center justify-center px-4 py-1 mx-auto mb-4 text-gray-200 bg-secondary md:mb-10"
            >{{ $page.post.categories.title }}</span
          >
          <h2 class="text-4xl font-semibold leading-tight text-gray-100">
            {{ $page.post.title }}
          </h2>
        </div>
      </div>

      <div class="w-full py-6 mx-auto text-gray-800 capitalize font-roboto">
        <div
          class="items-center justify-between max-w-screen-xl mx-auto space-x-1 text-gray-800 md:flex"
        >
          <div class="">
            <g-link class="hover:text-primary" to="/"> Acceuil </g-link>
            <span> | </span>
            <g-link class="hover:text-primary" to="/blog"> Blog </g-link>
          </div>
          <div
            class="max-w-screen-xl px-4 mx-auto text-lg leading-relaxed text-gray-700 md:flex lg:px-0"
          >
            <div class="flex items-center py-2 space-x-16">
              <div class="flex space-x-4">
                <button
                  class="flex items-center w-10 h-10 p-3 uppercase rounded-full pointer-events-none bg-secondary max-w-max bg-opacity-10"
                >
                  <User />
                </button>

                <div class="px-1 text-sm text-left text-gray-800 md:px-0">
                  <div>Vues</div>
                  <div class="font-bold text-primary">813,454</div>
                </div>
              </div>
              <div class="flex space-x-4">
                <button
                  class="flex items-center w-10 h-10 p-3 uppercase rounded-full pointer-events-none bg-secondary max-w-max bg-opacity-10"
                >
                  <Calendar />
                </button>
                <div class="px-1 text-sm text-left text-gray-800 md:px-0">
                  <div>
                    <span v-if="!$page.post.author">Par Rintio</span>
                    <span v-if="$page.post.author"
                      >Par {{ $page.post.author }}</span
                    >
                  </div>
                  <div class="font-bold text-primary">
                    {{ $page.post.date }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="max-w-screen-xl px-4 mx-auto mt-12 text-lg leading-relaxed text-justify text-gray-700 lg:px-0"
      >
        <vue-markdown>{{ $page.post.content }}</vue-markdown>
      </div>

      <div
        class="max-w-screen-xl px-4 mx-auto mt-4 text-lg leading-relaxed text-gray-700 md:flex lg:px-0"
      >
        <div class="flex items-center py-2">
          <button
            class="flex items-center w-12 h-12 p-3 uppercase bg-white rounded-full pointer-events-none max-w-max bg-opacity-10"
          >
            <Tag />
          </button>

          <div>
            <span
              v-for="edge in $page.tags.edges"
              :key="edge.node.id"
              class="inline-flex items-center justify-center px-2 py-2 m-1 text-xs capitalize"
              >{{ edge.node.title }}
            </span>
          </div>
        </div>

        <div class="flex items-center p-2 ml-auto">
          <div class="items-start">
            <div class="flex space-x-2">
              <a
                :href="`https://www.linkedin.com/sharing/share-offsite/?url=${$static.metadata.siteUrl}${fullPath}`"
                target="_blank"
                rel="noopener"
              >
                <Linkedin />
              </a>
              <a
                :href="`https://twitter.com/intent/tweet?url=${$static.metadata.siteUrl}${fullPath}&text=${$page.post.title}&via=rintioGroup&hashtags=${tags}`"
                target="_blank"
                rel="noopener"
              >
                <Twitter />
              </a>
              <a
                :href="`https://www.facebook.com/sharer.php?u=${$static.metadata.siteUrl}${fullPath}&href=${$static.metadata.siteUrl}${fullPath}&quote=${$page.post.metaDescription}`"
                target="_blank"
                rel="noopener"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- popular posts -->
      <div
        class="flex items-center justify-between max-w-screen-xl px-4 mx-auto mt-16 mb-4 lg:px-0"
      >
        <h2 class="text-base font-bold md:text-3xl">Vous pouvez aussi lire</h2>
        <g-link
          to="/blog"
          class="hidden px-3 py-1 text-gray-800 bg-gray-200 rounded cursor-pointer md:block hover:bg-secondary hover:text-white"
        >
          Voir toutes les publications
        </g-link>
      </div>
      <div class="block max-w-screen-xl mx-auto space-x-0 lg:flex lg:space-x-6">
        <div
          class="w-full p-4 bg-white rounded shadow-md md:w-1/2 lg:w-1/3 lg:p-0"
          v-for="edge in $page.onlinePost.edges"
          :key="edge.node.id"
        >
          <g-image
            alt="iot"
            :src="edge.node.coverImage"
            class="w-full h-64 rounded"
          />
          <h2 class="px-4 mb-px text-lg font-bold text-gray-800">
            {{ edge.node.title }}
          </h2>
          <p class="h-12 px-4 mb-px text-gray-700">
            {{ edge.node.metaDescription | truncate }}
          </p>

          <g-link
            :to="edge.node.path"
            class="flex px-4 py-2 rounded text-primary"
          >
            Lire plus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 px-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </g-link>
        </div>
      </div>
      <!-- end popular posts -->
            <div
        class="flex items-center justify-center max-w-screen-xl px-4 mx-auto mt-8 mb-4 md:hidden lg:px-0"
      >
        <g-link
          to="/blog"
          class="px-3 py-1 text-gray-800 bg-gray-200 rounded cursor-pointer hover:bg-secondary hover:text-white"
        >
          Voir toutes les publications
        </g-link>
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
    date (format: "DD MMMM YYYY", locale: "fr")
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
    filter: { path: { nin: [$path] } }
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
        metaDescription
        subDescription
        descriptionUp
        descriptionDown
        content
      }
    }
  }
}
</page-query>

<script>
import VueMarkdown from "vue-markdown";

import PostSeo from "../mixins/SEO";


import User from "~/assets/images/icons/user.svg";
import Calendar from "~/assets/images/icons/calendar.svg";
import Tag from "~/assets/images/icons/tag.svg";
import Facebook from "~/assets/images/icons/facebook.svg";

import Linkedin from "~/assets/images/icons/linkedin.svg";
import Twitter from "~/assets/images/icons/twitter.svg";

export default {
  mixins: [PostSeo],
  components: {
    //LazyHydrate,
    //Breadcrumb,
    VueMarkdown,
    User,
    Calendar,
    Tag,
    Facebook,
    //Instagram,
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
  created() {
    this.$page.post.tags.forEach((tag) => {
      this.tags !== ""
        ? (this.tags = `${this.tags},${tag.title}`)
        : (this.tags = `${tag.title}`);
    });
  },
  filters: {
    truncate(value) {
      return value.substr(0, 50) + "...";
    },
  },
};
</script>
