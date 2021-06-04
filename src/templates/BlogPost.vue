<template>
  <Layout>
      <LazyHydrate when-idle>
        <Breadcrumb :path="path" />
      </LazyHydrate>

      <div
        class="md:flex container mx-auto md:px-16 space-x-0 md:space-x-6 w-full"
      >
        <div
          id="home" class="container px-4 text-center w-3/4"
        >
          {{$page.post}}
        </div>
      </div>
    
  </Layout>
</template>


<page-query>
query query($path:String = "") {
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