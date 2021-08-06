<template>
  <div class="self-center">
    <div class="lg:hidden">
      <button
        class="flex items-center p-3 text-gray-600 navbar-burger"
        @click="openMenu = !openMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          alt="Logo Rintio"
          title="Logo Rintio"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div
      v-bind:class="{
        '-translate-x-0 ease-out': openMenu,
        'translate-x-full ease-in': !openMenu,
      }"
      class="fixed inset-y-0 right-0 z-40 w-full h-full overflow-y-auto transition duration-300 transform bg-white lg:hidden lg:translate-x-0"
    >
      <div class="items-center justify-center mt-6 space-y-2">
        <button
          class="flex items-center p-3 ml-auto text-gray-600 navbar-burger"
          @click="openMenu = !openMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          id="home"
          class="w-full mx-4 mt-2 text-left transition duration-300 border-b-2 border-transparent hover:border-secondary"
        >
          <div class="h-full pt-4">
            <g-link to="/">
              <span class="my-auto font-bold uppercase font-openSans"
                >Acceuil</span
              >
            </g-link>
          </div>
        </div>

        <div
          id="about"
          class="w-full mx-4 text-left transition duration-300 border-b-2 border-transparent hover:border-secondary"
        >
          <div class="h-full pt-4">
            <g-link to="/a-propos">
              <span class="my-auto font-bold uppercase font-openSans">
                A propos
              </span>
            </g-link>
          </div>
        </div>

        <div
          id="offer"
          class="w-full mx-4 text-left transition duration-300 border-b-2 border-transparent hover:border-secondary"
        >
          <div class="h-full pt-4">
            <g-link to="/offres">
              <span class="my-auto font-bold uppercase font-openSans">
                Nos offres</span
              >
            </g-link>
          </div>
        </div>

        <div
          id="blog"
          class="w-full mx-4 text-left transition duration-300 border-b-2 border-transparent hover:border-secondary"
        >
          <div class="h-full pt-4">
            <g-link to="/blog">
              <span class="my-auto font-bold uppercase font-openSans">
                Blog</span
              >
            </g-link>
          </div>
        </div>
        <div
          id="blog_1"
          class="w-full mx-4 text-left transition duration-300 border-b-2 border-transparent hover:border-secondary"
        ></div>
      </div>
      <div class="absolute flex pl-3 bottom-5">
        <a
          class="flex items-center w-10 h-10 mr-2 text-lg text-gray-600 bg-white border border-gray-600 rounded-full place-content-center"
          href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
          target="_blank"
          rel="noopener"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          class="flex items-center w-10 h-10 mr-2 text-lg text-gray-600 bg-white border border-gray-600 rounded-full place-content-center"
          href="https://www.linkedin.com/company/rintio/"
          target="_blank"
          rel="noopener"
        >
          <i class="relative fab fa-linkedin-in"></i>
        </a>
        <a
          class="flex items-center w-10 h-10 mr-2 text-lg text-gray-600 bg-white border border-gray-600 rounded-full place-content-center"
          href="https://twitter.com/RintioGroup/"
          target="_blank"
          rel="noopener"
        >
          <i class="relative fab fa-twitter"></i>
        </a>
        <a
          class="flex items-center w-10 h-10 mr-2 text-lg text-gray-600 bg-white border border-gray-600 rounded-full place-content-center"
          href="https://twitter.com/RintioGroup/"
          target="_blank"
          rel="noopener"
        >
          <i class="relative fab fa-instagram"></i>
        </a>
      </div>
    </div>

    <nav class="hidden h-24 px-10 lg:flex">
      <div
        id="home"
        class="w-40 mx-auto text-center transition duration-300 border-b-2 border-transparent hover:border-secondary"
      >
        <div class="h-full pt-10">
          <g-link to="/">
            <span class="my-auto font-bold uppercase font-openSans"
              >Acceuil</span
            >
          </g-link>
        </div>
      </div>

      <div
        id="about"
        class="w-40 mx-auto text-center transition duration-300 border-b-2 border-transparent hover:border-secondary"
      >
        <div class="h-full pt-10">
          <g-link to="/a-propos">
            <span class="my-auto font-bold uppercase font-openSans"
              >A propos</span
            >
          </g-link>
        </div>
      </div>

      <div
        id="offer"
        class="w-40 mx-auto text-center transition duration-300 border-b-2 border-transparent hover:border-secondary"
      >
        <div class="h-full pt-10">
          <g-link to="/offres">
            <span class="my-auto font-bold uppercase font-openSans"
              >Nos offres</span
            >
          </g-link>
        </div>
      </div>

      <div
        id="blog"
        class="w-40 mx-auto text-center transition duration-300 border-b-2 border-transparent hover:border-secondary"
      >
        <div class="h-full pt-10">
          <g-link to="/blog">
            <span class="my-auto font-bold uppercase font-openSans">Blog</span>
          </g-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    //require our external library and load it in window
    // eslint-disable-next-line no-undef
    window.$ = require("jquery");
    this.setActive(this.$router.currentRoute.path.slice(1));
  },
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    setActive: function (route) {
      switch (route) {
        case "":
          // eslint-disable-next-line no-undef
          $("#home").addClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#about").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#offer").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#blog").removeClass("border-secondary text-secondary");

          break;
        case "a-propos":
          // eslint-disable-next-line no-undef
          $("#home").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#about").addClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#offer").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#blog").removeClass("border-secondary text-secondary");
          break;
        case "offres":
          // eslint-disable-next-line no-undef
          $("#home").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#about").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#offer").addClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#blog").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          break;
        case "blog":
          // eslint-disable-next-line no-undef
          $("#home").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#about").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#offer").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#blog").addClass("border-secondary text-secondary");
          break;
      }
    },
  },
};
</script>
