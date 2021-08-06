<template>
  <div class="items-center justify-center w-full py-6 md:py-24">
    <div class="text-center">
      <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
        Nos publications
      </h3>
    </div>

    <div class="text-center">
      <h2 class="my-3 text-xl font-extrabold md:text-5xl text-primary">
        Rintio<span class="text-secondary"> blog</span>
      </h2>
      <div class="py-4 ">Articles à la une</div>
    </div>

    <div
      class="grid gap-4 px-2  md:grid-cols-6 xl:grid-cols-2 md:grid-flow-row xl:grid-flow-rows xl:px-24"
    >
      <div
        class="h-full col-span-3 row-span-2 bg-white shadow-sm  xl:col-span-1 xl:row-span-2"
        v-for="edge in $static.post.edges"
        :key="edge.node.id"
      >
        <g-link :to="edge.node.path">
          <g-image
            alt="iot"
            title="scrum"
            :src="edge.node.coverImage"
            class="object-cover w-full h-64 mb-0"
          />

          <h5
            class="mx-4 mt-2 mb-2 text-xl font-bold leading-tight text-gray-800"
          >
            {{ edge.node.title }}
          </h5>
          <p class="mx-4 space-x-8 text-xs text-primary">
            <span>{{ edge.node.date | FormatDate }}</span>
             <span class="flex float-right pt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-4 sm:hidden"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="hidden sm:flex"> Publié par : </span>
                  Rintio
                </span>
            
          </p>
          <p class="mx-4 mb-4 font-light text-justify text-gray-600">
            {{ edge.node.metaDescription }}
          </p>
        </g-link>
      </div>
      <div
        class="col-span-3 row-span-1 bg-white shadow-md xl:col-span-1 xl:row-span-1"
        v-for="edge in $static.otherPost.edges"
        :key="edge.node.id"
      >
        <div class="flex flex-row ">
          <div class="w-2/5 h-48 md:h-64 lg:h-60 xl:h-56 2xl:h-48">
            <g-link :to="edge.node.path">
              <g-image
                alt="iot"
                title="scrum"
                :src="edge.node.coverImage"
                class="object-cover w-full h-full "
              />
            </g-link>
          </div>
          <div
            class="w-3/5 px-4 mt-4 "
          >
            <g-link :to="edge.node.path">
              <h5
                class="mb-2 text-lg font-semibold text-left text-gray-800  md:text-xl"
              >
                {{ edge.node.title }}
              </h5>
              <p class="mt-2 text-xs  text-primary md:mt-4">
                <span>{{ edge.node.date | FormatDate }}</span>
                <span class="flex float-right pt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-4 sm:hidden"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="hidden sm:flex"> Publié par : </span>
                  Rintio
                </span>
              </p>
              <p
                class="w-full text-xs font-light text-justify text-gray-600  md:text-sm text-ellipsis--2"
              >
                {{ edge.node.metaDescription }}
              </p>
              
            </g-link>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-2 py-4 mx-auto md:flex xl:px-24">
      <g-link to="/blog" class="ml-auto">
        <button
          href="#"
          class="flex ml-auto font-medium  md:text-lg hover:text-secondary focus:outline-none"
        >
          Voir plus de publications <span class="pt-1 pl-2"><Arrow /></span>
        </button>
      </g-link>
    </div>
  </div>
</template>

<static-query>
query {
  
  post : allBlogPost(
    perPage: 1
    page: 1
    filter: { categories: { in: "Blog" } }
    limit: 1
    order: DESC
  ) @paginate {
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
        metaDescription
      }
    }
  }

  otherPost : allBlogPost(
    perPage: 2
    page: 1
    filter: { categories: { in: "Blog" } }
    skip: 1
    limit: 2
    order: DESC
  ) @paginate {
    edges {
      node {
        id
        title
        path
        metaDescription
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

</static-query>

<script>
import Arrow from "~/assets/images/icons/arrow.svg";

import moment from "moment";

export default {
  components: {
    Arrow,
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
<style scoped>
.text-ellipsis--2 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>