<template>
  <nav class="px-10 h-24 hidden md:flex">
    <div
      id="home"
      class="mx-auto text-center w-40 hover:border-b-8 border-secondary"
    >
      <div class="h-full pt-10">
        <g-link to="/">
          <span class="font-bold uppercase font-openSans my-auto">Acceuil</span>
        </g-link>
      </div>
    </div>

    <div
      id="about"
      class="mx-auto text-center w-40 hover:border-b-8 border-secondary"
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
      class="mx-auto text-center w-40 hover:border-b-8 border-secondary"
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
      class="mx-auto text-center w-40 hover:border-b-8 border-secondary"
    >
      <div class="h-full pt-10">
        <g-link to="/blog">
          <span class="font-bold uppercase font-openSans my-auto">Blog</span>
        </g-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    //require our external library and load it in window
    window.$ = require("jquery");
    this.setActive(this.$router.currentRoute.path.slice(1));
  },
  methods: {
    setActive: function (route) {
      switch (route) {
        case "":
          $("#home").addClass("border-b-8");
          $("#about").removeClass("border-b-8");
          $("#offer").removeClass("border-b-8");
          $("#blog").removeClass("border-b-8");
          break;
        case "a-propos":
          $("#home").removeClass("border-b-8");
          $("#about").addClass("border-b-8");
          $("#offer").removeClass("border-b-8");
          $("#blog").removeClass("border-b-8");
          break;
        case "offres":
          $("#home").removeClass("border-b-8");
          $("#about").removeClass("border-b-8");
          $("#offer").addClass("border-b-8");
          $("#blog").removeClass("border-b-8");
          break;
        case "blog":
          $("#home").removeClass("border-b-8");
          $("#about").removeClass("border-b-8");
          $("#offer").removeClass("border-b-8");
          $("#blog").addClass("border-b-8");
          break;
      }
    },
  },
};
</script>