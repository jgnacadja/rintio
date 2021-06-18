<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" :article="$page.post.title" />
    </LazyHydrate>

    <!-- component -->
    <div class="max-w-screen-xl mx-auto">
      <div class="mt-10">
        <div
          class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style="height: 24em"
        >
          <div
            class="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black opacity-70"
          ></div>
          <g-image
            alt="iot"
            :src="$page.post.coverImage"
            class="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div class="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              class="px-4 py-1 bg-secondary text-gray-200 inline-flex items-center justify-center mb-2"
              >{{$page.post.categories.title}}</a
            >
            <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
              {{$page.post.title}}
            </h2>
          </div>
        </div>

        <div
          class="md:flex px-4 lg:px-0 mt-4 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed"
        >
          <div class="flex py-2 space-x-16 items-center">
            <div class="flex space-x-4">
              <button
                class="uppercase p-3 flex items-center bg-secondary max-w-max bg-opacity-10 rounded-full w-10 h-10 pointer-events-none"
              >
                <User />
              </button>

              <div class="px-1 md:px-0 text-left text-sm text-gray-800">
                <div>Vues</div>
                <div class="text-primary font-bold">813,454</div>
              </div>
            </div>
            <div class="flex space-x-4">
              <button
                class="uppercase p-3 flex items-center bg-secondary max-w-max bg-opacity-10 rounded-full w-10 h-10 pointer-events-none"
              >
                <Calendar />
              </button>
              <div class="px-1 md:px-0 text-left text-sm text-gray-800">
                <div>
                  <span v-if="!$page.post.author">Par Rintio</span>
                  <span v-if="$page.post.author"
                    >Par {{$page.post.author}}</span
                  >
                </div>
                <div class="text-primary font-bold">
                  {{ $page.post.date }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex p-2 ml-auto items-center">
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

        <div
          class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed"
        >
          <vue-markdown class="content">{{
            $page.post.content
          }}</vue-markdown>
        </div>

        <div
          class="md:flex px-4 lg:px-0 mt-4 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed"
        >
          <div class="flex py-2 items-center">
            <button
              class="uppercase p-3 flex items-center bg-white max-w-max bg-opacity-10 rounded-full w-12 h-12 pointer-events-none"
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

          <div class="flex p-2 ml-auto items-center">
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

        <!-- popular posts -->
        <div
          class="flex mt-16 mb-4 px-4 lg:px-0 max-w-screen-md mx-auto items-center justify-between"
        >
          <h2 class="font-bold text-3xl">Vous pouvez aussi lire</h2>
          <g-link
            to="/blog"
            class="bg-gray-200 hover:bg-secondary hover:text-white text-gray-800 px-3 py-1 rounded cursor-pointer"
          >
            Voir toutes les publications
          </g-link>
        </div>
        <div
          class="block space-x-0 lg:flex max-w-screen-md mx-auto lg:space-x-6"
        >
          <div
            class="rounded w-full md:w-1/2 lg:w-1/3 p-4 lg:p-0"
            v-for="edge in $page.onlinePost.edges"
            :key="edge.node.id"
          >
            <g-image
              alt="iot"
              :src="edge.node.coverImage"
              class="rounded h-64"
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-lg text-gray-800">
                {{ edge.node.title }}
              </h2>
              <p class="text-gray-700 mt-2">
                {{ edge.node.metaDescription }}
              </p>

              <g-link
                :to="edge.node.path"
                class="inline-block py-2 rounded text-primary mt-2 ml-auto"
              >
                Lire plus
              </g-link>
            </div>
          </div>
        </div>
        <!-- end popular posts -->
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
import moment from "moment";
import VueMarkdown from "vue-markdown";

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
    VueMarkdown,
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
  created() {
    this.$page.post.tags.forEach((tag) => {
      this.tags !== ""
        ? (this.tags = `${this.tags},${tag.title}`)
        : (this.tags = `${tag.title}`);
    });
  },
};
</script>
