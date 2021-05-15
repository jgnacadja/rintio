<template>
  <div class="items-center w-full justify-center py-6 md:py-24">
    <div class="text-center">
      <p class="font-extrabold text-primary uppercase">Nos publications</p>
    </div>

    <div class="text-center">
      <h1
        class="my-3 text-xl md:text-5xl font-extrabold text-secondary uppercase"
      >
        Articles<span class="text-primary"> A la une</span>
      </h1>
      <p class="md:w-1/2 mx-auto py-4">
        Nous créons ensemble des outils créatifs depuis plus de dix ans et nous
        avons une connaissance approfondie des applications logicielles.
      </p>
    </div>

    <div class="md:flex container mx-auto px-16 space-x-0 md:space-x-6">
      <!-- main post -->
      <div
        class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white"
      >
        <img
          src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          class="object-cover w-full h-64"
        />
        <span class="text-green-700 text-sm hidden md:block mt-4">
          Technology
        </span>
        <h1 class="text-gray-800 font-bold mt-2 mb-2 leading-tight">
          Ignorant branched humanity led now marianne too.
        </h1>
        <p class="text-gray-600 mb-4">
          Necessary ye contented newspaper zealously breakfast he prevailed.
          Melancholy middletons yet understood decisively boy law she.
        </p>
      </div>

      <!-- sub-main posts -->
      <div class="w-full md:w-1/2">
        <!-- post 1 -->
        <div class="w-full flex flex-col md:flex-row mb-10">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="block md:hidden lg:block h-64 md:h-32 m-4 md:m-0"
          />
          <div class="bg-white px-4">
            <span class="text-green-700 text-sm hidden md:block">
              Gadgets
            </span>
            <div class="md:mt-0 text-gray-800 font-semibold mb-2">
              At every tiled on ye defer do. No attention suspected oh
              difficult.
            </div>
            <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
              Wonder matter now can estate esteem assure fat roused. Am
              performed on existence as discourse is. Pleasure friendly at
              marriage blessing or
            </p>
          </div>
        </div>

        <!-- post 2 -->
        <div class="rounded w-full flex flex-col md:flex-row mb-10">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="block md:hidden lg:block h-64 md:h-32 m-4 md:m-0"
          />
          <div class="bg-white px-4">
            <span class="text-green-700 text-sm hidden md:block">
              Bitcoin
            </span>
            <div class="md:mt-0 text-gray-800 font-semibold mb-2">
              Fond his say old meet cold find come whom. The sir park sake bred.
            </div>
            <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
              Integer commodo, sapien ut vulputate viverra, Integer commodo
              Integer commodo, sapien ut vulputate viverra, Integer commodo
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-16 space-x-0 md:space-x-6">
      <a
        href="./blog.html"
        class="inline-block py-8 mt-2 flex text-lg font-medium"
      >
        Voir plus de publications <span class="pl-2 pt-1"><Arrow /></span>
      </a>
    </div>
  </div>
</template>

<script>
import Arrow from "~/assets/images/icons/arrow.svg";

export default {
  components: {
    Arrow,
  },
};
</script>