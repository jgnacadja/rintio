<template>
<div class="self-center">
  	<div class="md:hidden">
			<button class="navbar-burger flex items-center text-gray-600 p-3">
				<svg class="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
   <nav class="px-10 h-24 hidden md:flex">
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
          <span class="font-bold uppercase font-openSans my-auto">Acceuil</span>
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