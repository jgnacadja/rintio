<template>
  <div>
    <!---->

    <div class="md:px-20 md:flex w-full justify-center py-6 md:py-24">
      <div class="w-full mx-auto mb-8 md:mb-0">
        <div class="mx-4 md:mx-0 text-center">
          <h1
            class="pb-8 text-xl md:text-5xl font-extrabold capitalize text-primary"
          >
            Nos
            <span class="text-secondary"> experts</span>
          </h1>

          <p class="my-3 md:w-1/2 mx-auto">
            Rintio est composé d’une équipe professionnelle et dynamique et d’un
            réseau de partenaires qui n’ont qu’un seul objectif:
            <span class="font-bold"
              >donner vie à vos projets en respectant les deadlines.</span
            >
          </p>
          <!---->

          <div class="mt-12 -mx-3 flex flex-wrap items-start">
            <div
              class="px-3 w-full sm:w-1/2 lg:w-1/4"
              v-for="expert in currentList"
              :key="expert"
            >
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex flex-row items-center">
                  <div class="w-1/3">
                    <div
                      class="overflow-hidden w-24 rounded-full h-24 mb-4 bg-gray-50 border border-gray-200 items-center justify-center mx-auto"
                    >
                      <g-image
                        :src="expert.imgUrl"
                        :alt="expert.imgAlt"
                      ></g-image>
                    </div>
                    <span class="inline-flex">
                      <a
                        class="w-5 h-5 mr-2 flex items-center place-content-center rounded-full border hover:border-none text-primary text-xs hover:bg-secondary hover:text-white"
                        :href="expert.linkedInUrl"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in relative"></i>
                      </a>
                    </span>
                  </div>

                  <div class="flex-grow w-2/3 pl-4 sm:pl-5 lg:pl-4 text-left">
                    <h6 class="font-bold text-sm uppercase text-gray-600 mb-4">
                      {{ expert.name }}
                    </h6>
                    <p
                      :key="career"
                      v-for="career in expert.career"
                      class="text-xs mb-2"
                    >
                      • {{ career }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---->
          <t-pagination
            :total-items="totalItems"
            :per-page="perPage"
            v-model="currentPage"
            :classes="classes"
            @change="updateList($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import experts from "~/assets/experts.json";
import { TPagination } from "vue-tailwind/dist/components";

export default {
  components: {
    TPagination,
  },
  data() {
    return {
      list: experts.list,
      currentList: experts.list,
      currentPage: 1,
      perPage: 4,
      totalItems: 1,
      classes: {
        wrapper: "table border-collapse text-center bg-white mx-auto shadow-sm",
        element:
          "w-8 h-8 border border-gray-200 table-cell hover:border-blue-100",
        activeElement:
          "w-8 h-8 border border-secondary table-cell hover:border-secondry",
        disabledElement: "w-8 h-8 border border-gray-200 table-cell",
        ellipsisElement: "w-8 h-8 border border-gray-200 hidden md:table-cell",
        activeButton:
          "bg-secondary w-full h-full text-white hover:bg-secondary transition duration-100 ease-in-out focus:outline-none",
        disabledButton:
          "opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",
        button:
          "hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        ellipsis: "",
      },
    };
  },
  mounted() {
    this.list = experts.list;
    this.totalItems = this.list.length;
    this.updateList(this.currentPage);
  },
  methods: {
    updateList(currentPage) {
      this.currentList= this.list.slice(
        (currentPage - 1) * this.perPage,
        currentPage * this.perPage
      );
    },
  },
};
</script>
