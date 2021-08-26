<template>
  <div id="app">
    <vueper-slides :autoplay="settings.autoplay" :pause-on-hover="settings.pauseOnHover" fade :touchable="settings.touchable" :fixed-height="settings.fixedHeight" :arrows="settings.arrows">
      <vueper-slide>
        <template v-slot:content>
          <div
            class="bg-cover h-full bg-center text-black py-2 md:py-32 px-2 md:px-20 object-fill bg-homeslider-1"
          >
            <div class="md:w-5/12">
              <h3
                class="font-bold text-sm 2xl:text-lg 3xl:text-3xl uppercase text-secondary font-roboto"
              >
                Rintio Prestation
              </h3>
              <h1
                class="text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-primary font-roboto"
              >
                Nous accélérons votre transformation digitale
              </h1>
              <p class="text-xl 2xl:text-xl 3xl:text-2xl mb-10 leading-8">
                Rintio vous accompagne dans la mise en place de vos solutions
                digitales en mettant à votre disposition une équipe hautement
                qualifiée.
              </p>
              <a
                href="#"
                class="bg-secondary py-4 px-8 2xl:py-6 2xl:px-12 text-white font-bold hover:bg-primary uppercase text-xs 2xl:text-lg"
                >En savoir plus
              </a>
            </div>
          </div>
        </template>
      </vueper-slide>
      <vueper-slide>
        <template v-slot:content>
          <div
            class="bg-cover h-full bg-center text-black py-2 md:py-32 px-2 md:px-20 object-fill bg-homeslider-2"
          >
            <div class="md:w-5/12">
              <h3
                class="font-bold text-sm 2xl:text-2xl uppercase text-secondary font-roboto"
              >
                Technologie
              </h3>
              <h1
                class="text-5xl 2xl:text-7xl font-extrabold text-primary font-roboto"
              >
                DataScience et Intelligence Artificielle
              </h1>
              <p class="text-2xl mb-10 leading-8">
                Restez leader en donnant de la voix à vos données grâce à nos
                solutions de data visualisation et nos modèles prédictifs.
              </p>
              <a
                href="#"
                class="bg-secondary py-4 px-8 2xl:py-6 2xl:px-12 text-white font-bold hover:bg-primary uppercase text-xs 2xl:text-lg"
                >En savoir plus
              </a>
            </div>
          </div>
        </template>
      </vueper-slide>
      <vueper-slide>
        <template v-slot:content>
          <div
            class="bg-cover h-full bg-center text-black py-2 md:py-32 px-2 md:px-20 object-fill bg-homeslider-3"
          >
            <div class="md:w-5/12">
              <h3
                class="font-bold text-sm 2xl:text-2xl uppercase text-secondary font-roboto"
              >
                Rintio Formation
              </h3>
              <h1
                class="text-5xl xl:text-7xl font-extrabold text-primary font-roboto"
              >
                Africa TechUp Tour
              </h1>
              <p class="text-2xl mb-10 leading-8">
                Parcourez le monde avec nous dans notre quête continue de
                partage de connaissance.
              </p>
              <a
                href="#"
                class="bg-secondary py-4 px-8 2xl:py-6 2xl:px-12 text-white font-bold hover:bg-primary uppercase text-xs 2xl:text-lg"
                >En savoir plus
              </a>
            </div>
          </div>
        </template>
      </vueper-slide>
      <vueper-slide>
        <template v-slot:content>
          <div
            class="bg-cover h-full bg-center text-black py-2 md:py-32 px-2 md:px-20 object-fill bg-homeslider-4"
          >
            <div class="md:w-5/12">
              <h3
                class="font-bold text-sm 2xl:text-2xl uppercase text-secondary font-roboto"
              >
                Rintio Story
              </h3>
              <h1
                class="text-5xl 2xl:text-7xl font-extrabold text-primary font-roboto"
              >
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
                class="bg-secondary py-4 px-8 2xl:py-6 2xl:px-12 text-white font-bold hover:bg-primary uppercase text-xs 2xl:text-lg"
                >En savoir plus
              </a>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Slider",
  components: { VueperSlides, VueperSlide },
  data: () => ({
  settings: {
    autoplay: true,
    pauseOnHover: true,
    touchable: false,
    fixedHeight: true,
    arrows: false
  },
})
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
.bg-homeslider-1 {
  background-image: url("./../../../static/images/home/slider/work.webp");
}

.bg-homeslider-2 {
  background-image: url("./../../../static/images/home/slider/IA-1.webp");
}

.bg-homeslider-3 {
  background-image: url("./../../../static/images/home/slider/atut.webp");
}

.bg-homeslider-4 {
  background-image: url("./../../../static/images/home/slider/coraq-slider-web-100x.webp");
}

.height, .vueperslides--fixed-height {
  height: calc(100vh - 96px);
}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}

.slick-dots li button:before {
  display: none !important;
}
</style>
