<template>
  <Layout>
      <LazyHydrate when-idle>
        <Breadcrumb :path="path" />
      </LazyHydrate>

      <div
        class="md:flex container mx-auto md:px-16 space-x-0 md:space-x-6 w-full"
      >
        <div
          id="home" class="container px-4 w-3/4"
        >

         <span
          class="relative text-white bg-secondary p-4 text-sm hidden md:block ml-4 mt-7 -mb-7 capitalize w-24 text-center"
        >
          Big data
        </span>
        <g-image
          alt="iot"
          src="~/assets/images/home/blog/iot.png"
          class="object-cover w-full h-64 mb-0"
        />
       
        <div
            class="md:flex bg-white p-1 rounded-sm shadow-md md:shadow-xl min-h-0 mt-4"
          >
            
            <div class="md:w-1/2">
              <div class="flex p-2">
                  <div class="w-1/12">
                    <button
                      class="uppercase p-3 flex items-center bg-secondary max-w-max bg-opacity-10 rounded-full w-12 h-12 pointer-events-none"
                    >
                      <User />
                    </button>
                  </div>

                  <div class="w-2/12 px-1 md:px-0 text-left ml-5">
                    <div>
                      Vues
                    </div>
                    <div class="text-primary">
                      813,454
                    </div>
                  </div>

                  <div class="w-1/12">
                    <button
                      class="uppercase p-3 flex items-center bg-secondary max-w-max bg-opacity-10 rounded-full w-12 h-12 pointer-events-none"
                    >
                    <Calendar />
                    </button>
                  </div>
                  <div class="w-5/12 px-1 md:px-0 text-left ml-5">
                    <div>Dernière Modification</div>
                    <div class="text-primary">25/10/2021</div>
                  </div>
              </div>
            </div>
            <div class="md:w-1/2 justify-center items-center">
              <div class="flex p-2">
                  <div class="w-5/12">
                    <div class="text-lg items-center font-bold">
                      Partager sur :
                    </div>
                  </div>

                  <div class="w-7/12">
                    <div class="flex">
                      <a
                        class="w-5 mr-2 flex items-center place-content-center rounded-full bg-primary text-white text-xs"
                        href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        class="w-5 h-5 mr-2 flex items-center place-content-center rounded-full bg-primary text-white text-xs"
                        href="https://www.linkedin.com/company/rintio/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in relative"></i>
                      </a>
                      <a
                        class="w-5 h-5 mr-2 flex items-center place-content-center rounded-full bg-primary text-white text-xs"
                        href="https://twitter.com/RintioGroup/"
                        target="_blank"
                      >
                        <i class="fab fa-twitter relative"></i>
                      </a>
                      <a
                        class="w-5 h-5 mr-2 flex items-center place-content-center rounded-full bg-primary text-white text-xs"
                        href="https://twitter.com/RintioGroup/"
                        target="_blank"
                      >
                        <i class="fab fa-instagram relative"></i>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <p class="mt-6 mb-4 text-lg font-extrabold items-start">
            {{$page.post.title}}
          </p>
          <p>
            {{$page.post.metaDescription}}
          </p>
          
          
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
import User from "~/assets/images/icons/envelope.svg";
import Calendar from "~/assets/images/icons/maps-and-flags.svg";


export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    User,
    Calendar
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