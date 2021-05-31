<template>
  <div class="sliderAx">
    <div id="slider-1">
      <div
        class="bg-cover bg-center height text-white py-2 md:py-24 px-2 md:px-20 object-fill bg-homeslider-1"
      >
        <div class="md:w-1/2">
          <p class="font-bold text-sm uppercase text-secondary font-openSans">
            Technologie
          </p>
          <p class="text-5xl font-extrabold font-openSans">
            DataScience & <br />Intelligence Artificielle
          </p>
          <p class="text-2xl mb-10 leading-8">
            Notre processus qui s'appuie sur des méthodes et des techniques pour
            prendre des données brutes - l'extraction d'informations et des
            années d'expérience vous aideront à devenir le leader du secteur.
          </p>
          <a
            href="#"
            class="bg-secondary py-4 px-8 text-white font-bold uppercase text-xs hover:bg-gray-200 hover:text-gray-800"
            >En savoir plus</a
          >
        </div>
      </div>
      <!-- container -->
      <br />
    </div>

    <div id="slider-2">
      <div
        class="bg-cover bg-center height text-black py-2 md:py-24 px-2 md:px-20 object-fill bg-homeslider-2"
      >
        <div class="md:w-1/2">
          <p class="font-bold text-sm uppercase text-secondary font-openSans">
            Rintio Formation
          </p>
          <p class="text-5xl font-extrabold font-openSans">
            Africa <br />TechUp Tour
          </p>
          <p class="text-2xl mb-10 leading-8">
            En Afrique, promesses et mirages du numérique.
          </p>
          <a
            href="#"
            class="bg-secondary py-4 px-8 text-white font-bold uppercase text-xs hover:bg-gray-200 hover:text-gray-800"
            >En savoir plus</a
          >
        </div>
      </div>
      <!-- container -->
      <br />
    </div>

    <div id="slider-3">
      <div
        class="bg-cover bg-center height text-white py-2 md:py-24 px-2 md:px-20 object-fill bg-homeslider-3 items-center"
      >
        <div class="md:w-1/2">
          <p class="font-bold text-sm uppercase text-secondary font-openSans">
            Rintio Story
          </p>
          <p class="text-5xl font-extrabold font-openSans">
            CHMP & <br />Coraq-lab
          </p>
          <p class="text-2xl mb-10 leading-8">
            Lancement de la plateforme elearning dévélopée par Rintio.
          </p>
          <a
            href="#"
            class="bg-secondary py-4 px-8 text-white font-bold uppercase text-xs hover:bg-gray-200 hover:text-gray-800"
            >En savoir plus</a
          >
        </div>
      </div>
      <!-- container -->
      <br />
    </div>

    <div class="flex justify-between w-16 mx-auto -mt-20 space-x-2">
      <button
        id="sButton1"
        @click="sliderButton1()"
        class="bg-gray-400 rounded-full w-4 pb-2 focus:outline-none"
      ></button>
      <button
        id="sButton2"
        @click="sliderButton2()"
        class="bg-gray-400 rounded-full w-4 p-2 focus:outline-none"
      ></button>
      <button
        id="sButton3"
        @click="sliderButton3()"
        class="bg-gray-400 rounded-full w-4 p-2 focus:outline-none"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      xx: "",
    };
  },
  mounted() {
    //require our external library and load it in window
    window.$ = require("jquery");

    $("#slider-2").hide();
    $("#slider-3").hide();
    $("#sButton1").addClass("bg-secondary");

    this.loopSlider();
  },
  methods: {
    loopSlider: function () {
      const el = this;
      this.xx = setInterval(function () {
        switch (el.counter) {
          case 0: {
            $("#slider-1").fadeOut(400);
            $("#slider-2").delay(400).fadeIn(400);
            $("#sButton1").removeClass("bg-secondary");
            $("#sButton2").addClass("bg-secondary");
            el.counter = 1;

            break;
          }
          case 1: {
            $("#slider-2").fadeOut(400);
            $("#slider-3").delay(400).fadeIn(400);
            $("#sButton2").removeClass("bg-secondary");
            $("#sButton3").addClass("bg-secondary");

            el.counter = 2;

            break;
          }
          case 2: {
            $("#slider-3").fadeOut(400);
            $("#slider-1").delay(400).fadeIn(400);
            $("#sButton3").removeClass("bg-secondary");
            $("#sButton1").addClass("bg-secondary");

            el.counter = 0;

            break;
          }
        }
      }, 8000);
    },

    reinitLoop: function (time) {
      clearInterval(this.xx);
      setTimeout(this.loopSlider(), time);
    },

    sliderButton1: function () {
      $("#slider-2").fadeOut(400);
      $("#slider-3").fadeOut(400);
      $("#slider-1").delay(400).fadeIn(400);
      $("#sButton2").removeClass("bg-secondary");
      $("#sButton3").removeClass("bg-secondary");
      $("#sButton1").addClass("bg-secondary");
      this.reinitLoop(4000);
      this.counter = 0;
    },

    sliderButton2: function () {
      $("#slider-1").fadeOut(400);
      $("#slider-3").fadeOut(400);
      $("#slider-2").delay(400).fadeIn(400);
      $("#sButton1").removeClass("bg-secondary");
      $("#sButton3").removeClass("bg-secondary");
      $("#sButton2").addClass("bg-secondary");
      this.reinitLoop(4000);
      this.counter = 1;
    },

    sliderButton3: function () {
      $("#slider-1").fadeOut(400);
      $("#slider-2").fadeOut(400);
      $("#slider-3").delay(400).fadeIn(400);
      $("#sButton1").removeClass("bg-secondary");
      $("#sButton2").removeClass("bg-secondary");
      $("#sButton3").addClass("bg-secondary");
      this.reinitLoop(4000);
      this.counter = 1;
    },
  },
};
</script><style scoped>
.bg-homeslider-1 {
  background-image: url("./../../../static/images/home/slider/1.png");
}

.bg-homeslider-2 {
  background-image: url("./../../../static/images/home/slider/2.png");
}

.bg-homeslider-3 {
  background-image: url("./../../../static/images/home/slider/3.png");
}

.height {
  height: calc(100vh - 108px);
}
</style>