<template>
  <div
    class="
      container
      w-full
      mx-auto
      mt-8
      md:mt-24
      space-x-0
      md:flex
      md:px-16
      md:space-x-6
    "
  >
    <div class="w-full">
      <div class="mx-4 md:px-10">
        <h3 class="md:mb-12 text-lg text-primary font-extrabold">Evènements</h3>
      </div>

      <div id="header_slider" class="w-full h-full px-4 my-4">
        <div
          id="slide_item"
          class="
            md:flex
            hidden
            lg:space-x-4
            mx-4
            md:mx-0
            pt-6
            sm:p-12
            lg:px-24
            lg:p-0
            lg:space-y-0
            md:space-y-4
            lg:mt-12
          "
        >
          <div class="w-full sm:w-1/2 lg:w-1/4 shadow-md">
            <div class="h-96 bg-white pb-4"></div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 shadow-md">
            <div class="h-96 bg-white pb-4"></div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 shadow-md">
            <div class="h-96 bg-white pb-4"></div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 shadow-md">
            <div class="h-96 bg-white pb-4"></div>
          </div>
        </div>
        <div
          id="slide_item"
          class="
            md:flex
            hidden
            lg:space-x-4
            mx-4
            md:mx-0
            pt-6
            sm:p-12
            lg:px-24
            lg:p-0
            lg:space-y-0
            md:space-y-4
            lg:mt-12
          "
        >
          <div class="w-full sm:w-1/2 lg:w-1/4 shadow-md">
            <div class="h-96 bg-white pb-4"></div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 shadow-md">
            <div class="h-96 bg-white pb-4"></div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 shadow-md">
            <div class="h-96 bg-white pb-4"></div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/4 shadow-md">
            <div class="h-96 bg-white pb-4"></div>
          </div>
        </div>
      </div>
      <div class="flex float-right mt-4" style="margin-right: 3.58rem">
          <div
            class="z-10 bg-primary bg-opacity-10 w-12 h-12 mr-2 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
            @click="previousSlides()"
          >

            <ArrowLeft />
          </div>
          <div
            class="z-10 bg-primary bg-opacity-10 w-12 h-12 rounded-md border border-primary flex items-center justify-center text-black cursor-pointer"
            @click="nextSlides()"

          >
            <ArrowRight />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Pager } from "gridsome";
import Seo from "~/assets/images/Illustrations/seo.svg";
import RemoveTag from "~/assets/images/icons/remove.svg";
import ArrowLeft from "~/assets/images/icons/blog-arrow-left.svg";
import ArrowRight from "~/assets/images/icons/blog-arrow-right.svg";

export default {
    components: {
    Pager,
    Seo,
    RemoveTag,
    ArrowLeft,
    ArrowRight,
    },
    data() {
    return {
      path: "",
      search: "",
      searchByTag: "",
      page: 1,
      numberOfPages: 1,
      pinnedTabs: [],
      currentSlides: 1,
    };
  },
   mounted() {
    this.path = this.$router.currentRoute.path.slice(1).replace("-", " ");
  },
  computed: {
    searchResults() {
      if (this.search) {
        this.pinnedTabs = [];
        let filteredPosts = this.$page.posts.edges.filter((post) => {
          return post.node.title
            .toLowerCase()
            .includes(this.search.toLowerCase().trim());
        });
        this.numberOfPages = Math.ceil(filteredPosts.length / 5);
        return this.paginate(filteredPosts, 5, this.page);
      } else {
        console.log(this.$page.posts.edges);
        if (this.pinnedTabs.length !== 0) {
          console.log(this.pinnedTabs);

          /* // Get all the required ids
          var ids = filter.map(function (f) {
            return f.id;
          });
          var filtered = array.filter(function (a) {
            // Check if both source and target are present in list of ids
            return ids.indexOf(a.source) !== -1 && ids.indexOf(a.target) !== -1;
          }); */

          console.log(filtered);
          return [];
        } else {
          return this.paginate(this.$page.posts.edges, 5, this.page);
        }
      }
    },
  },
  methods: {
    paginate(array, page_size, page_number) {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    },
    pinTag(tag) {
      if (this.pinnedTabs.indexOf(tag) !== -1) {
        this.pinnedTabs = this.pinnedTabs.filter((tagged) => tagged != tag);
      } else {
        this.search = "";
        this.pinnedTabs.push(tag);
      }
    },
    nextSlide() {
      if (this.currentSlide == 3) {
        let activeSlide = document.querySelector(".slide.translate-x-0");
        activeSlide.classList.remove("translate-x-0");
        activeSlide.classList.add("translate-x-full");

        let nextSlide =
          activeSlide.previousElementSibling.previousElementSibling;
        nextSlide.classList.remove("translate-x-full");
        nextSlide.classList.add("translate-x-0");

        this.currentSlide = 1;
      } else {
        this.currentSlide++;

        let activeSlide = document.querySelector(".slide.translate-x-0");
        activeSlide.classList.remove("translate-x-0");
        activeSlide.classList.add("translate-x-full");

        let nextSlide = activeSlide.nextElementSibling;
        nextSlide.classList.remove("translate-x-full");
        nextSlide.classList.add("translate-x-0");
      }
    },

    previousSlide() {
      if (this.currentSlide == 1) {
        let activeSlide = document.querySelector(".slide.translate-x-0");
        activeSlide.classList.remove("translate-x-0");
        activeSlide.classList.add("translate-x-full");

        let previousSlide = activeSlide.nextElementSibling.nextElementSibling;
        previousSlide.classList.remove("translate-x-full");
        previousSlide.classList.add("translate-x-0");

        this.currentSlide = 3;
      } else {
        this.currentSlide--;

        let activeSlide = document.querySelector(".slide.translate-x-0");
        activeSlide.classList.remove("translate-x-0");
        activeSlide.classList.add("translate-x-full");

        let previousSlide = activeSlide.previousElementSibling;
        previousSlide.classList.remove("translate-x-full");
        previousSlide.classList.add("translate-x-0");
      }
    },
  },
}
</script>

