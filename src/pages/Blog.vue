<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>
    <div
      class="md:flex container mx-auto md:px-16 space-x-0 md:space-x-6 w-full"
    >
      <div id="home" class="container px-4 text-center w-3/4">
        <div class="space-y-6">
          <!-- main post -->
          <div
            class="mb-4 lg:mb-0 p-4 lg:p-0 w-full relative block bg-white"
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
          >
            <g-image
              alt="iot"
              src="~/assets/images/home/blog/iot.png"
              class="object-cover w-full h-64 mb-0"
            />
            <span
              class="relative text-white bg-secondary p-4 text-sm hidden md:block ml-4 -mt-7 capitalize w-24 text-center"
            >
              Big data
            </span>
            <p
              class="text-gray-800 font-bold mt-2 mb-2 leading-tight text-xl mx-4"
            >
              {{ edge.node.title }}
            </p>
            <p class="text-primary text-xs space-x-8 mx-4">
              <span>10 Jan 2020</span>
              <span>Publié par : xxxxxxxxxxxxx</span>
            </p>
            <p class="text-gray-600 mb-4 mx-4">
              Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression...
            </p>
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
          </div>

          <!-- main post 1-->
          <h2></h2>
        </div>
      </div>

      <div class="w-1/4">
        <h3>Recherche</h3>
        <input type="text" />
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