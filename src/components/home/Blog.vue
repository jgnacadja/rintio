<template>
  <div class="items-center w-full justify-center py-6 md:py-24">
    <div class="text-center">
      <h3 class="mb-3 text-sm text-primary font-semibold uppercase">
        Nos publications
      </h3>
    </div>

    <div class="text-center">
      <h2 class="my-3 text-xl md:text-5xl font-extrabold text-primary">
        Rintio<span class="text-secondary"> blog</span>
      </h2>
      <h4 class=" py-4">Articles à la une</h4>
    </div>

    <div
      class="
        grid
        md:grid-cols-6
        xl:grid-cols-2
        gap-4
        md:grid-flow-row
        xl:grid-flow-rows
        px-2
        xl:px-24
      "
    >
      <div
        class="
          row-span-2
          col-span-3
          xl:col-span-1
          xl:row-span-2
          bg-white
          h-full
          shadow-sm
        "
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
            class="text-gray-800 font-bold mt-2 mb-2 leading-tight text-xl mx-4"
          >
            {{ edge.node.title }}
          </h5>
          <p class="text-primary  text-xs space-x-8 mx-4">
            <span>{{ edge.node.date | FormatDate }}</span>
             <span class="pt-0 float-right flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sm:hidden h-4 w-5"
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
          <p class="text-gray-600 text-justify font-light mb-4 mx-4">
            {{ edge.node.metaDescription }}
          </p>
        </g-link>
      </div>
      <div
        class="col-span-3 row-span-1 xl:col-span-1 xl:row-span-1 bg-white shadow-md"
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
                class="
                  object-cover
                  h-full
                  w-full
                 
                "
              />
            </g-link>
          </div>
          <div
            class="
              px-4
              w-3/5
              mt-4
            "
          >
            <g-link :to="edge.node.path">
              <h5
                class="
                  text-left
                  text-gray-800
                  font-semibold
                  mb-2
                  text-lg
                  md:text-xl
                  
                "
              >
                {{ edge.node.title }}
              </h5>
              <p class=" text-primary text-xs mt-2 md:mt-4 ">
                <span>{{ edge.node.date | FormatDate }}</span>
                <span class="pt-0 float-right flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="sm:hidden h-4 w-5"
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
                class="
                  w-full
                  font-light
                  text-justify text-xs
                  md:text-sm
                  text-gray-600
                  text-ellipsis--2
                "
              >
                {{ edge.node.metaDescription }}
              </p>
              
            </g-link>
          </div>
        </div>
      </div>
    </div>

    <div class="md:flex  mx-auto py-4 px-2 xl:px-24 w-full">
      <g-link to="/blog" class="ml-auto">
        <button
          href="#"
          class="
            flex
            ml-auto
            md:text-lg
            font-medium
            hover:text-secondary
            focus:outline-none
          "
        >
          Voir plus de publications <span class="pl-2 pt-1"><Arrow /></span>
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
//import Like from "~/assets/images/icons/like.svg";
//import Comment from "~/assets/images/icons/comment.svg";
//import Share from "~/assets/images/icons/share.svg";
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