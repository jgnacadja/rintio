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
      <h4 class="lg:w-1/2 mx-auto py-4">Articles à la une</h4>
    </div>

    <div
      class=" pl-0  lg:flex  container mx-auto md:px-16 space-x-0 md:space-x-6  w-full"
    >
      <!-- main post -->
      <div
        class="  md:ml-6  mb-4 lg:mb-0 p-4 lg:p-0 w-full lg:w-1/2  relative block bg-white h-full shadow-sm"
        v-for="edge in $static.post.edges"
        :key="edge.node.id"
      >
        <g-link :to="edge.node.path">
          <g-image
            alt="iot"
            title="scrum"
            :src="edge.node.coverImage"
            class=" object-cover w-full h-64 mb-0"
          />
          <!-- <span
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
          </span> -->
          <h5
            class="text-gray-800 font-bold mt-2 mb-2 leading-tight text-xl mx-4"
          >
            {{ edge.node.title }}
          </h5>
          <p class="text-primary md:h-11 text-xs space-x-8 mx-4">
            <span>{{ edge.node.date | FormatDate}}</span>
            <span class="float-right">Publié par : Rintio</span>
          </p>
          <p class=" text-gray-600 text-justify font-light mb-4 mx-4">
            {{ edge.node.metaDescription }}
          </p>
          <div class="flex space-x-8 mx-4 mb-1"></div>
        </g-link> 
      </div>

      <!-- sub-main posts -->
      <div class=" pl-0  w-full lg:w-1/2   ">
        <!-- post 1 -->
        <div
          class=" w-full   sm:h-38  lg:h-64 xl:h-60  2xl:h-56 h-48 md:h-auto   flex flex-row md:flex-row  mb-10"
          v-for="edge in $static.otherPost.edges"
          :key="edge.node.id"
        >
       
          <div class=" w-2/5">
            <g-link :to="edge.node.path">
              <g-image
                alt="iot"
                title="scrum"
                :src="edge.node.coverImage"
                class=" object-cover h-full ml-0 sm:ml-0 sm:h-1/2 sm:h-full lg:block md:h-52 m-4 md:m-0 w-full lg:h-full xl:h-full 2xl:h-full "
              />
            </g-link>
          </div>
          <div class="mt-4  bg-white px-4 md:mt-0  w-3/5 h-full shadow-sm mb:pb-1 sm:mt-4" >
            <g-link :to="edge.node.path">
              <h5 class=" h-4 text-left md:mt-0 text-gray-800 font-semibold mb-2 text-lg md:text-xl ">
                {{ edge.node.title }}
              </h5>
              <p class=" h-px  text-primary text-xs mt-2 md:mt-4  h-8 space-x-8">
                <span  >{{ edge.node.date | FormatDate }}</span>
                <span class=" pt-0 float-right flex">
                       
                       <svg xmlns="http://www.w3.org/2000/svg" class=" sm:hidden h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                       </svg>

                      <span class="hidden sm:flex"> 
                        
                        Publié par :

                      </span>
                  Rintio
               
                
                  
                </span>
                
              </p>
              <p
                class="  w-full md:h-32 block font-light pt-0 text-justify text-xs md:text-sm text-gray-600 text-ellipsis--2 " 
              >
                {{ edge.node.metaDescription }}
              </p>
              <div class="flex space-x-8"></div>
            </g-link>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex container mx-auto md:px-16 w-full">
      <g-link to="/blog" class="ml-auto">
        <button
          href="#"
          class="flex ml-auto mr-8 md:ml-0 md:mr-0 md:text-lg font-medium hover:text-secondary focus:outline-none"
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
import Like from "~/assets/images/icons/like.svg";
import Comment from "~/assets/images/icons/comment.svg";
import Share from "~/assets/images/icons/share.svg";
import moment from "moment";

export default {
  components: {
    Arrow,
    Like,
    Comment,
    Share,
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
.text-ellipsis--2{
  text-overflow:ellipsis;
  overflow:hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>