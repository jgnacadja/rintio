<template>
  <div class="sliderAx">
    <VueSlickCarousel v-bind="settings">
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
            <h3 class="font-bold text-sm 2xl:text-lg 3xl:text-3xl uppercase text-secondary font-roboto">
              Rintio Prestation
            </h3>
            <h1 class="text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-primary font-roboto">
              Nous accélérons votre transformation digitale
            </h1>
            <p class="text-xl 2xl:text-xl 3xl:text-2xl mb-10 leading-8">
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
                2xl:py-6
                2xl:px-12
                text-white
                font-bold
                uppercase
                text-xs
                2xl:text-lg
                 
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
            text-black
            py-2
            md:py-32
            px-2
            md:px-20
            object-fill
            bg-homeslider-2
          "
        >
          <div class="md:w-5/12">
            <h3 class="font-bold text-sm 2xl:text-2xl uppercase text-secondary font-roboto">
              Technologie
            </h3>
            <h1 class="text-5xl 2xl:text-7xl font-extrabold text-primary font-roboto">
              DataScience et Intelligence Artificielle
            </h1>
            <p class="text-2xl mb-10 leading-8">
              Restez leader en donnant de la voix à vos données grâce à nos
              solutions de data visualisation et nos modèles prédictifs.
            </p>
            <a
              href="#"
              class="
                 bg-secondary
                py-4
                px-8
                2xl:py-6
                2xl:px-12
                text-white
                font-bold
                uppercase
                text-xs
                2xl:text-lg
                 
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
            <h3 class="font-bold text-sm 2xl:text-2xl uppercase text-secondary font-roboto">
              Rintio Formation
            </h3>
            <h1 class="text-5xl xl:text-7xl font-extrabold text-primary font-roboto">
              Africa TechUp Tour
            </h1>
            <p class="text-2xl mb-10 leading-8">
              Parcourez le monde avec nous dans notre quête continue de partage
              de connaissance.
            </p>
            <a
              href="#"
              class="
                 bg-secondary
                py-4
                px-8
                2xl:py-6
                2xl:px-12
                text-white
                font-bold
                uppercase
                text-xs
                2xl:text-lg
                 
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
            <h3 class="font-bold text-sm 2xl:text-2xl uppercase text-secondary font-roboto">
              Rintio Story
            </h3>
            <h1 class="text-5xl 2xl:text-7xl font-extrabold text-primary font-roboto">
              CHMP & Coraq Lab
            </h1>
            <p class="text-2xl 2xl:text-2xl mb-10 leading-8">
              Développement des plateformes e-learning
              <a href="https://coraq.formation.chmp.org/" target="blanck"
                >Coraq Lab</a
              >
              &
              <a href="https://preprod.formation.chmp.org/" target="blanck"
                >CHMP formations</a
              >
              en partenariat avec CHMP et Initiative 5%, financé par Expertise
              France.
            </p>
            <a
              href="#"
              class="
                bg-secondary
                py-4
                px-8
                2xl:py-6
                2xl:px-12
                text-white
                font-bold
                uppercase
                text-xs
                2xl:text-lg
                 
              "
              >En savoir plus</a
            >
          </div>
        </div>
        <!-- container -->
        <br />
      </div>

      

      
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Slider",
  components: { VueSlickCarousel },
  data() {
    return {
      counter: 0,
      xx: "",
      settings: {
        autoplay: false,
        infinite: true,
        rows: 1,
        initialSlide: 0,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: false,
        fade: true,
        dots: true,
        dotsClass: "slick-dots",
        pauseOnFocus: false,
        pauseOnHover: false,
      },
    };
  },
  
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
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

.slick-dots li button:before {
  display: none;
}



</style>