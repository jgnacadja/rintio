<template>
  <div class="items-center w-full justify-center py-6 md:py-24">
    <div class="text-center">
      <p class="font-extrabold text-primary uppercase">Nos publications</p>
    </div>

    <div class="text-center">
      <h1
        class="my-3 text-xl md:text-5xl font-extrabold text-secondary uppercase"
      >
        Articles<span class="text-primary"> à la une</span>
      </h1>
      <p class="md:w-1/2 mx-auto py-4">
        Nous créons ensemble des outils créatifs depuis plus de dix ans et nous
        avons une connaissance approfondie des applications logicielles.
      </p>
    </div>

    <div
      class="md:flex container mx-auto md:px-16 space-x-0 md:space-x-6 w-full"
    >
      <!-- main post -->
      <div
        class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white"
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
        <p class="text-gray-800 font-bold mt-2 mb-2 leading-tight text-xl mx-4">
          Article 1
        </p>
        <p class="text-primary text-xs space-x-8 mx-4">
          <span>10 Jan 2020</span>
          <span>Publié par : xxxxxxxxxxxxx</span>
        </p>
        <p class="text-gray-600 mb-4 mx-4">
          Lorem Ipsum est simplement du faux texte employé dans la composition
          et la mise en page avant impression...
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

      <div
        class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white md:hidden"
      >
        <g-image
          alt="iot"
          src="~/assets/images/home/blog/ia.png"
          class="object-cover w-full h-64 mb-0"
        />
        <span
          class="relative text-white bg-secondary p-4 text-sm hidden md:block ml-4 -mt-7 capitalize w-24 text-center"
        >
          Big data
        </span>
        <p class="text-gray-800 font-bold mt-2 mb-2 leading-tight text-xl mx-4">
          Article 1
        </p>
        <p class="text-primary text-xs space-x-8 mx-4">
          <span>10 Jan 2020</span>
          <span>Publié par : xxxxxxxxxxxxx</span>
        </p>
        <p class="text-gray-600 mb-4 mx-4">
          Lorem Ipsum est simplement du faux texte employé dans la composition
          et la mise en page avant impression...
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

      <!-- main post 2 -->

      <div
        class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white md:hidden"
      >
        <g-image
          alt="iot"
          src="~/assets/images/home/blog/connect.png"
          class="object-cover w-full h-64 mb-0"
        />
        <span
          class="relative text-white bg-secondary p-4 text-sm hidden md:block ml-4 -mt-7 capitalize w-24 text-center"
        >
          Big data
        </span>
        <p class="text-gray-800 font-bold mt-2 mb-2 leading-tight text-xl mx-4">
          Article 1
        </p>
        <p class="text-primary text-xs space-x-8 mx-4">
          <span>10 Jan 2020</span>
          <span>Publié par : xxxxxxxxxxxxx</span>
        </p>
        <p class="text-gray-600 mb-4 mx-4">
          Lorem Ipsum est simplement du faux texte employé dans la composition
          et la mise en page avant impression...
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

      <!-- sub-main posts -->
      <div class="w-full md:w-1/2 hidden md:block">
        <!-- post 1 -->
        <div class="w-full flex flex-col md:flex-row mb-10">
          <div class="w-2/5 h-full">
            <g-image
              alt="iot"
              src="~/assets/images/home/blog/ia.png"
              class="block md:hidden lg:block h-64 md:h-full m-4 md:m-0 w-full"
            />
            <span
              class="relative text-white bg-secondary p-4 text-sm hidden md:block ml-4 -mt-7 capitalize w-24 text-center"
            >
              Big data
            </span>
          </div>
          <div class="bg-white px-4 w-3/5 h-full">
            <p class="text-primary text-xs mt-4 space-x-8">
              <span>10 Jan 2020</span>
              <span>Publié par : xxxxxxxxxxxxx</span>
            </p>
            <p class="md:mt-0 text-gray-800 font-semibold mb-2 text-xl">
              Article 2
            </p>
            <p class="block p-2 pl-0 pt-1 text-sm text-gray-600">
              Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression...
            </p>
            <div class="flex space-x-8">
              <p class="flex space-x-2 mb-5">
                <Like /> <span class="text-xs">24k</span>
              </p>
              <p class="flex space-x-2 mb-0">
                <Comment /> <span class="text-xs">247</span>
              </p>
              <p class="flex space-x-2 mb-0">
                <Share /> <span class="text-xs">24</span>
              </p>
            </div>
          </div>
        </div>

        <!-- post 2 -->
        <div class="w-full flex flex-col md:flex-row mb-10">
          <div class="w-2/5 h-full">
            <g-image
              alt="iot"
              src="~/assets/images/home/blog/connect.png"
              class="block md:hidden lg:block h-64 md:h-full m-4 md:m-0 w-full"
            />
            <span
              class="relative text-white bg-secondary p-4 text-sm hidden md:block ml-4 -mt-7 capitalize w-24 text-center"
            >
              Big data
            </span>
          </div>
          <div class="bg-white px-4 w-3/5 h-full">
            <p class="text-primary text-xs mt-4 space-x-8">
              <span>10 Jan 2020</span>
              <span>Publié par : xxxxxxxxxxxxx</span>
            </p>
            <p class="md:mt-0 text-gray-800 font-semibold mb-2 text-xl">
              Article 2
            </p>
            <p class="block p-2 pl-0 pt-1 text-sm text-gray-600">
              Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression...
            </p>
            <div class="flex space-x-8">
              <p class="flex space-x-2 mb-5">
                <Like /> <span class="text-xs">24k</span>
              </p>
              <p class="flex space-x-2 mb-0">
                <Comment /> <span class="text-xs">247</span>
              </p>
              <p class="flex space-x-2 mb-0">
                <Share /> <span class="text-xs">24</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto md:px-16 space-x-0 md:space-x-6 ml-4 md:ml-0">
      <button
        href="#"
        class="py-8 mt-2 flex md:text-lg font-medium hover:text-secondary w-auto"
      >
        Voir plus de publications <span class="pl-2 pt-1"><Arrow /></span>
      </button>
    </div>
  </div>
</template>

<script>
import Arrow from "~/assets/images/icons/arrow.svg";
import Like from "~/assets/images/icons/like.svg";
import Comment from "~/assets/images/icons/comment.svg";
import Share from "~/assets/images/icons/share.svg";

export default {
  components: {
    Arrow,
    Like,
    Comment,
    Share,
  },
};
</script>