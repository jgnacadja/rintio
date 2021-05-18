<template>
  <div class="bg-offer md:px-16 flex w-full justify-center py-6 md:py-24">
    <div class="md:w-1/4">
      <div class="mx-4 md:mx-0">
        <h1 class="mb-3 text-sm font-semibold uppercase text-primary">
          Nos offres
        </h1>
        <!-- Title Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
        </div>
      </div>
      <div class="mx-4 md:mx-0 pt-6">
        <h1
          class="my-3 text-xl md:text-5xl font-extrabold capitalize text-primary"
        >
          Prestation<br />
          <span class="text-secondary">Client</span>
        </h1>

        <p class="my-3 text-sm">
          Les solutions que nous proposons à nos précieux clients. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut.
        </p>
        <div class="mt-4 text-center">
          <button
            type="submit"
            class="px-3 py-2 md:py-4 text-white text-sm bg-secondary rounded-sm focus:bg-secondary focus:outline-none uppercase"
          >
            Tout consulter
          </button>
        </div>
      </div>
    </div>

    <div
      class="w-3/4 flex-row justify-center items-start flex-wrap mx-auto hidden md:flex"
    >
      <div class="bgmap">1</div>
    </div>
  </div>
</template>

<style scoped>
.bg-offer {
  background-image: url("./../../../static/images/home/offer.png");
}
</style>
