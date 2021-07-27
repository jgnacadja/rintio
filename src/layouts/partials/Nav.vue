<template>
  <div class="self-center">
    <div class="lg:hidden">
      <button
        class="navbar-burger flex items-center text-gray-600 p-3"
        @click="openMenu = !openMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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
      class="
        fixed
        lg:hidden
        inset-y-0
        right-0
        z-40
        h-full
        w-full
        transition
        duration-300
        transform
        bg-white
        overflow-y-auto
        lg:translate-x-0
      "
    >
      <div class="items-center justify-center mt-6 space-y-2">
        <button
          class="navbar-burger flex items-center text-gray-600 p-3 ml-auto"
          @click="openMenu = !openMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
          class="
            mx-4
            mt-2
            text-left
            w-full
            border-b-2 border-transparent
            transition
            duration-300
            hover:border-secondary
          "
        >
          <div class="h-full pt-4">
            <g-link to="/">
              <span class="font-bold uppercase font-openSans my-auto"
                >Acceuil</span
              >
            </g-link>
          </div>
        </div>

        <div
          id="about"
          class="
            mx-4
            text-left
            w-full
            border-b-2 border-transparent
            transition
            duration-300
            hover:border-secondary
          "
        >
          <div class="h-full pt-4">
            <g-link to="/a-propos">
              <span class="font-bold uppercase font-openSans my-auto">
                A propos
              </span>
            </g-link>
          </div>
        </div>

        <div
          id="offer"
          class="
            mx-4
            text-left
            w-full
            border-b-2 border-transparent
            transition
            duration-300
            hover:border-secondary
          "
        >
          <div class="h-full pt-4">
            <g-link to="/offres">
              <span class="font-bold uppercase font-openSans my-auto">
                Nos offres</span
              >
            </g-link>
          </div>
        </div>

        <!--         <div
          id="blog"
          class="mx-4 text-left w-full border-b-2 border-transparent transition duration-300 hover:border-secondary"
        >
          <div class="h-full pt-4">
            <g-link to="/blog">
              <span class="font-bold uppercase font-openSans my-auto">  
                Blog</span>
            </g-link>
          </div>
        </div>  -->
      </div>
      <div class="flex absolute bottom-5 pl-3">
        <a
          class="
            w-10
            h-10
            mr-2
            flex
            items-center
            place-content-center
            rounded-full
            bg-white
            border border-gray-600
            text-gray-600 text-lg
          "
          href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
          target="_blank"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          class="
            w-10
            h-10
            mr-2
            flex
            items-center
            place-content-center
            rounded-full
            bg-white
            border border-gray-600
            text-gray-600 text-lg
          "
          href="https://www.linkedin.com/company/rintio/"
          target="_blank"
        >
          <i class="fab fa-linkedin-in relative"></i>
        </a>
        <a
          class="
            w-10
            h-10
            mr-2
            flex
            items-center
            place-content-center
            rounded-full
            bg-white
            border border-gray-600
            text-gray-600 text-lg
          "
          href="https://twitter.com/RintioGroup/"
          target="_blank"
        >
          <i class="fab fa-twitter relative"></i>
        </a>
        <a
          class="
            w-10
            h-10
            mr-2
            flex
            items-center
            place-content-center
            rounded-full
            bg-white
            border border-gray-600
            text-gray-600 text-lg
          "
          href="https://twitter.com/RintioGroup/"
          target="_blank"
        >
          <i class="fab fa-instagram relative"></i>
        </a>
      </div>
    </div>

    <nav class="px-10 h-24 hidden lg:flex">
      <div
        id="home"
        class="
          mx-auto
          text-center
          w-40
          border-b-2 border-transparent
          transition
          duration-300
          hover:border-secondary
        "
      >
        <div class="h-full pt-10">
          <g-link to="/">
            <span class="font-bold uppercase font-openSans my-auto"
              >Acceuil</span
            >
          </g-link>
        </div>
      </div>

      <div
        id="about"
        class="
          mx-auto
          text-center
          w-40
          border-b-2 border-transparent
          transition
          duration-300
          hover:border-secondary
        "
      >
        <div class="h-full pt-10">
          <g-link to="/a-propos">
            <span class="font-bold uppercase font-openSans my-auto"
              >A propos</span
            >
          </g-link>
        </div>
      </div>

      <div
        id="offer"
        class="
          mx-auto
          text-center
          w-40
          border-b-2 border-transparent
          transition
          duration-300
          hover:border-secondary
        "
      >
        <div class="h-full pt-10">
          <g-link to="/offres">
            <span class="font-bold uppercase font-openSans my-auto"
              >Nos offres</span
            >
          </g-link>
        </div>
      </div>

      <div
        id="blog"
        class="
          mx-auto
          text-center
          w-40
          border-b-2 border-transparent
          transition
          duration-300
          hover:border-secondary
        "
      >
        <div class="h-full pt-10">
          <g-link to="/blog">
            <span class="font-bold uppercase font-openSans my-auto">Blog</span>
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
          $("#home").addClass("border-secondary text-secondary");
          $("#about").removeClass("border-secondary text-secondary");
          $("#offer").removeClass("border-secondary text-secondary");
          $("#blog").removeClass("border-secondary text-secondary");
          break;
        case "a-propos":
          $("#home").removeClass("border-secondary text-secondary");
          $("#about").addClass("border-secondary text-secondary");
          $("#offer").removeClass("border-secondary text-secondary");
          $("#blog").removeClass("border-secondary text-secondary");
          break;
        case "offres":
          $("#home").removeClass("border-secondary text-secondary");
          $("#about").removeClass("border-secondary text-secondary");
          $("#offer").addClass("border-secondary text-secondary");
          $("#blog").removeClass("border-secondary text-secondary");
          break;
        case "blog":
          $("#home").removeClass("border-secondary text-secondary");
          $("#about").removeClass("border-secondary text-secondary");
          $("#offer").removeClass("border-secondary text-secondary");
          $("#blog").addClass("border-secondary text-secondary");
          break;
      }
    },
  },
};
</script>
