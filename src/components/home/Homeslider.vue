<template>
  <div id="app">
    <vueper-slides
      class="no-shadow"
      :autoplay="settings.autoplay"
      :pause-on-hover="settings.pauseOnHover"
      fade
      :touchable="settings.touchable"
      :fixed-height="settings.fixedHeight"
      :arrows="settings.arrows"
    >
      <vueper-slide v-for="slide in slides" :key="slide.id">
        <template v-slot:content>
          <div
            class="bg-cover h-full bg-center text-black py-2 md:py-32 px-2 md:px-20 object-fill"
            v-bind:style="[
              {
                backgroundImage: 'url(' + slide.image.file.url + ')',
              },
            ]"
          >
            <div class="md:w-5/12">
              <h3
                class="font-bold text-sm 2xl:text-lg 3xl:text-3xl uppercase text-secondary font-roboto"
              >
                {{ slide.name }}
              </h3>
              <h1
                class="text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-primary font-roboto"
              >
                {{ slide.title }}
              </h1>
              <p
                class="text-xl 2xl:text-xl 3xl:text-2xl mb-10 leading-8"
                v-html="richtextToHTML(slide.text)"
              ></p>
              <a
                :href="slide.ctaLink"
                class="bg-secondary py-4 px-8 2xl:py-6 2xl:px-12 text-white font-bold hover:bg-primary uppercase text-xs 2xl:text-lg"
              >
                {{ slide.ctaText }}
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
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    slides: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      settings: {
        autoplay: true,
        pauseOnHover: true,
        touchable: false,
        fixedHeight: true,
        arrows: false,
      },
    };
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
.height,
.vueperslides--fixed-height {
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
