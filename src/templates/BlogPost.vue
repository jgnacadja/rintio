<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

    <div
      class="md:flex container mx-auto md:px-16 space-x-0 md:space-x-6 w-full"
    >
      <div id="home" class="container px-4 w-3/4">
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
          src="~/assets/images/home/blog/iot.png"
          class="object-cover w-full h-64 mb-0"
        />

        <div
          class="
            md:flex
            bg-white
            p-1
            rounded-sm
            shadow-sm
            md:shadow-sm
            min-h-0
            mt-4
          "
        >
          <div class="md:w-2/3">
            <div class="flex p-2">
              <div class="w-1/12">
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
              </div>

              <div class="w-2/12 px-1 md:px-0 text-left ml-5">
                <div class="text-xs">Vues</div>
                <div class="text-primary">813,454</div>
              </div>

              <div class="w-1/12">
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
              </div>
              <div class="w-5/12 px-1 md:px-0 text-left ml-5">
                <div class="text-xs">Dernière Modification</div>
                <div class="text-primary">25/10/2021</div>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 items-end">
            <div class="flex p-2 items-end">
              <div class="w-6/12 mt-1">
                <div class="text-xl items-center font-bold  mt-1">Partager sur :</div>
              </div>

              <div class="w-6/12 items-start">
                <div class="flex">
                  <a
                    class="
                      w-5
                      mr-2
                      flex
                      items-center
                      place-content-center
                      rounded-full
                      bg-primary
                      text-white text-xs
                    "
                    href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="
                      w-5
                      h-5
                      mr-2
                      flex
                      items-center
                      place-content-center
                      rounded-full
                      bg-primary
                      text-white text-xs
                    "
                    href="https://www.linkedin.com/company/rintio/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in relative"></i>
                  </a>
                  <a
                    class="
                      w-5
                      h-5
                      mr-2
                      flex
                      items-center
                      place-content-center
                      rounded-full
                      bg-primary
                      text-white text-xs
                    "
                    href="https://twitter.com/RintioGroup/"
                    target="_blank"
                  >
                    <i class="fab fa-twitter relative"></i>
                  </a>
                  <a
                    class="
                      w-5
                      h-5
                      mr-2
                      flex
                      items-center
                      place-content-center
                      rounded-full
                      bg-primary
                      text-white text-xs
                    "
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
          {{ $page.post.title }}
        </p>
        <p>
          {{ $page.post.metaDescription }}
        </p>

        <div
          class="
            md:flex
            bg-white
            p-1
            rounded-sm
            shadow-sm
            md:shadow-sm
            min-h-0
            mt-4
          "
        >
          <div class="md:w-2/3">
            <div class="flex p-2">
              <div class="w-1/12">
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
              </div>

              <div class="w-8/12 px-1 md:px-0 text-left ml-5">
                <div>
                  Intelligence Artificielle, Big data, Data Science, Dataviz,
                  API & Microservice
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 items-end">
            <div class="flex p-2 items-end">
              <div class="w-6/12 mt-1">
                <div class="text-xl items-center font-bold  mt-1">Partager sur :</div>
              </div>

              <div class="w-6/12 items-start">
                <div class="flex">
                  <a
                    class="
                      w-5
                      mr-2
                      flex
                      items-center
                      place-content-center
                      rounded-full
                      bg-primary
                      text-white text-xs
                    "
                    href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="
                      w-5
                      h-5
                      mr-2
                      flex
                      items-center
                      place-content-center
                      rounded-full
                      bg-primary
                      text-white text-xs
                    "
                    href="https://www.linkedin.com/company/rintio/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in relative"></i>
                  </a>
                  <a
                    class="
                      w-5
                      h-5
                      mr-2
                      flex
                      items-center
                      place-content-center
                      rounded-full
                      bg-primary
                      text-white text-xs
                    "
                    href="https://twitter.com/RintioGroup/"
                    target="_blank"
                  >
                    <i class="fab fa-twitter relative"></i>
                  </a>
                  <a
                    class="
                      w-5
                      h-5
                      mr-2
                      flex
                      items-center
                      place-content-center
                      rounded-full
                      bg-primary
                      text-white text-xs
                    "
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
      </div>

      <div id="home" class="container px-4 w-1/4">
        <div class="md:mx-0 pt-6">
          <h1 class="my-3 text-lg font-bold mb-0">Recherche</h1>
          <div>
            <span class="inline-block w-1/3 border border-secondary"></span>
            <span class="inline-block w-2/3 border border-grey-300"></span>
          </div>
        </div>

        <div class="mt-2">
          <div
            class="
              bg-white
              flex
              items-center
              border-2
              rounded-xl
              border-grey-300
            "
          >
            <input
              class="
                rounded-l-full
                w-full
                py-4
                px-6
                text-gray-700
                leading-tight
                focus:outline-none
              "
              id="search"
              type="text"
            />
            <div class="p-4">
              <button
                class="
                  bg-secondary
                  text-white
                  rounded-xl
                  p-2
                  hover:bg-blue-400
                  focus:outline-none
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                "
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="md:mx-0 pt-6">
          <h1 class="my-3 text-lg font-bold mb-0">Articles Populaires</h1>
          <div>
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
          <h1 class="my-3 text-lg font-bold mb-0">Catégories</h1>
          <div>
            <span class="inline-block w-1/3 border border-secondary"></span>
            <span class="inline-block w-2/3 border border-grey-300"></span>
          </div>
        </div>
        <div>
          <ul class="list-outside list-disc ml-6">
            <li class="text-secondary">
              <div class="text-gray-700">
                Intelligence Artificielle
              </div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">
                Big Data
              </div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">
                Data Science & Data Analytics
              </div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">
                Cloud
              </div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">
                DevOps
              </div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">
                Dataviz
              </div>
            </li>
            <li class="text-secondary">
              <div class="text-gray-700">
                API & Microservice
              </div>
            </li>
          </ul>
        </div>


        <div class="md:mx-0 pt-2">
          <h1 class="my-3 text-lg font-bold mb-0">Mots </h1>
          <div>
            <span class="inline-block w-1/3 border border-secondary"></span>
            <span class="inline-block w-2/3 border border-grey-300"></span>
          </div>
        </div>
        <div>
          <span class="inline-flex items-center justify-center px-2 py-1 m-1 p-2 text-xs font-bold leading-none text-gray-700 hover:text-white hover:bg-secondary bg-gray-300 rounded">Scrum</span>
          <span class="inline-flex items-center justify-center px-2 py-1 m-1 p-2 text-xs font-bold leading-none text-gray-700 hover:text-white hover:bg-secondary bg-gray-300 rounded">Méthode agile</span>
          <span class="inline-flex items-center justify-center px-2 py-1 m-1 p-2 text-xs font-bold leading-none text-gray-700 hover:text-white hover:bg-secondary bg-gray-300 rounded">Intelligence Artificielle</span>
          <span class="inline-flex items-center justify-center px-2 py-1 m-1 p-2 text-xs font-bold leading-none text-gray-700 hover:text-white hover:bg-secondary bg-gray-300 rounded">API</span>
          <span class="inline-flex items-center justify-center px-2 py-1 m-1 p-2 text-xs font-bold leading-none text-gray-700 hover:text-white hover:bg-secondary bg-gray-300 rounded">Formation</span>
          <span class="inline-flex items-center justify-center px-2 py-1 m-1 p-2 text-xs font-bold leading-none text-gray-700 hover:text-white hover:bg-secondary bg-gray-300 rounded">DevOps</span>
        </div>
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
import User from "~/assets/images/icons/user.svg";
import Calendar from "~/assets/images/icons/calendar.svg";
import Tag from "~/assets/images/icons/tag.svg";

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    User,
    Calendar,
    Tag,
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
