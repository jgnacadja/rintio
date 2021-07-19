<template>
  <div class="sliderAx">
    <div id="slider-1">
      <div
        class="
          bg-cover bg-center
          height
          text-black
          py-2
          md:py-32
          px-2
          md:px-20
          object-fill
          bg-homeslider-1
        "
      >
        <div class="md:w-5/12">
          <h3 class="font-bold text-sm uppercase text-secondary font-roboto">
            Rintio Prestation
          </h3>
          <h1 class="text-5xl font-extrabold text-primary font-roboto">
            Nous accélérons votre transformation digitale
          </h1>
          <p class="text-2xl mb-10 leading-8">
            Rintio vous accompagne dans la mise en place de vos solutions
            digitales en mettant à votre disposition une équipe hautement
            qualifiée.
          </p>
          <a
            href="#"
            class="
              bg-secondary
              py-4
              px-8
              text-white
              font-bold
              uppercase
              text-xs
              hover:bg-primary
            "
            >En savoir plus</a
          >
        </div>
      </div>
      <!-- container -->
      <br />
    </div>

    <div id="slider-2">
      <div
        class="
          bg-cover bg-center
          height
          text-blacks
          py-2
          md:py-32
          px-2
          md:px-20
          object-fill
          bg-homeslider-2
        "
      >
        <div class="md:w-5/12">
          <h3 class="font-bold text-sm uppercase text-secondary font-roboto">
            Technologie
          </h3>
          <h1 class="text-5xl font-extrabold text-primary font-roboto">
            DataScience et Intelligence Artificielle
          </h1>
          <p class="text-2xl mb-10 leading-8">
            Restez leader en donnant de la voix à vos données grâce à nos
            solutions de data visualisation et nos modèles prédictions.
          </p>
          <a
            href="#"
            class="
              bg-secondary
              py-4
              px-8
              text-white
              font-bold
              uppercase
              text-xs
              hover:bg-primary
            "
            >En savoir plus</a
          >
        </div>
      </div>
      <!-- container -->
      <br />
    </div>

    <div id="slider-3">
      <div
        class="
          bg-cover bg-center
          height
          text-black
          py-2
          md:py-32
          px-2
          md:px-20
          object-fill
          bg-homeslider-3
        "
      >
        <div class="md:w-5/12">
          <h3 class="font-bold text-sm uppercase text-secondary font-roboto">
            Rintio Formation
          </h3>
          <h1 class="text-5xl font-extrabold text-primary font-roboto">
            Africa TechUp Tour
          </h1>
          <p class="text-2xl mb-10 leading-8">
            Parcourez le monde avec nous dans notre quête continue de partage de
            connaissance.
          </p>
          <a
            href="#"
            class="
              bg-secondary
              py-4
              px-8
              text-white
              font-bold
              uppercase
              text-xs
              hover:bg-primary
            "
            >En savoir plus</a
          >
        </div>
      </div>
      <!-- container -->
      <br />
    </div>

    <div id="slider-4">
      <div
        class="
          bg-cover bg-center
          height
          text-black
          py-2
          md:py-32
          px-2
          md:px-20
          object-fill
          bg-homeslider-4
        "
      >
        <div class="md:w-5/12">
          <h3 class="font-bold text-sm uppercase text-secondary font-roboto">
            Rintio Story
          </h3>
          <h1 class="text-5xl font-extrabold text-primary font-roboto">
            CHMP & Coraq Lab
          </h1>
          <p class="text-2xl mb-10 leading-8">
            Développement des  plateformes e-learning <a href="https://coraq.formation.chmp.org/" target="blanck">Coraq Lab</a>  & <a href="https://preprod.formation.chmp.org/" target="blanck">CHMP formations</a> en partenariat avec
            CHMP et Initiative 5%, financé par Expertise France.
          </p>
          <a
            href="#"
            class="
              bg-secondary
              py-4
              px-8
              text-white
              font-bold
              uppercase
              text-xs
              hover:bg-primary
            "
            >En savoir plus</a
          >
        </div>
      </div>
      <!-- container -->
      <br />
    </div>

    <div class="flex justify-between w-24 mx-auto -mt-20 space-x-2">
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
      <button
        id="sButton4"
        @click="sliderButton4()"
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
      settings: {
        autoplay: true,
        infinite: true,
        rows: 1,
        edgeFriction: 0.35,
        initialSlide: 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    };
  },
/*   mounted() {
    //require our external library and load it in window
    window.$ = require("jquery");

    $("#slider-2").hide();
    $("#slider-3").hide();
    $("#slider-4").hide();
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
            $("#slider-4").delay(400).fadeIn(400);
            $("#sButton3").removeClass("bg-secondary");
            $("#sButton4").addClass("bg-secondary");

            el.counter = 2;

            break;
          }
          case 3: {
            $("#slider-4").fadeOut(400);
            $("#slider-1").delay(400).fadeIn(400);
            $("#sButton4").removeClass("bg-secondary");
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
      $("#slider-4").fadeOut(400);
      $("#slider-1").delay(400).fadeIn(400);
      $("#sButton2").removeClass("bg-secondary");
      $("#sButton3").removeClass("bg-secondary");
      $("#sButton4").removeClass("bg-secondary");
      $("#sButton1").addClass("bg-secondary");
      this.reinitLoop(4000);
      this.counter = 0;
    },

    sliderButton2: function () {
      $("#slider-1").fadeOut(400);
      $("#slider-3").fadeOut(400);
      $("#slider-4").fadeOut(400);
      $("#slider-2").delay(400).fadeIn(400);
      $("#sButton1").removeClass("bg-secondary");
      $("#sButton3").removeClass("bg-secondary");
      $("#sButton4").removeClass("bg-secondary");
      $("#sButton2").addClass("bg-secondary");
      this.reinitLoop(4000);
      this.counter = 1;
    },

    sliderButton3: function () {
      $("#slider-1").fadeOut(400);
      $("#slider-2").fadeOut(400);
      $("#slider-4").fadeOut(400);
      $("#slider-3").delay(400).fadeIn(400);
      $("#sButton1").removeClass("bg-secondary");
      $("#sButton2").removeClass("bg-secondary");
      $("#sButton4").removeClass("bg-secondary");
      $("#sButton3").addClass("bg-secondary");
      this.reinitLoop(4000);
      this.counter = 2;
    },

    sliderButton4: function () {
      $("#slider-1").fadeOut(400);
      $("#slider-2").fadeOut(400);
      $("#slider-3").fadeOut(400);
      $("#slider-4").delay(400).fadeIn(400);
      $("#sButton1").removeClass("bg-secondary");
      $("#sButton2").removeClass("bg-secondary");
      $("#sButton3").removeClass("bg-secondary");
      $("#sButton4").addClass("bg-secondary");
      this.reinitLoop(4000);
      this.counter = 3;
    },
  }, */
};
</script>

<style scoped>
.bg-homeslider-1 {
  background-image: url("./../../../static/images/home/slider/rinttio-1.jpg");
}

.bg-homeslider-2 {
  background-image: url("./../../../static/images/home/slider/IA-1.png");
}

.bg-homeslider-3 {
  background-image: url("./../../../static/images/home/slider/atut.png");
}

.bg-homeslider-4 {
  background-image: url("./../../../static/images/home/slider/coraq-slider-web-100x.png");
}

.height {
  height: calc(100vh - 96px);
}
</style>