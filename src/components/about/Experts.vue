<template>
  <div class="justify-center w-full py-6 lg:px-20 md:flex md:py-24">
    <div class="w-full mx-auto mb-8 md:mb-0">
      <div class="mx-4 text-center md:mx-0">
        <h1
          class="pb-8 text-xl font-extrabold capitalize md:text-5xl text-primary"
        >
          Notre
          <span class="text-secondary"> équipe</span>
        </h1>

        <p class="mx-auto my-3 w-ful lg:w-1/2">
          Fondée en 2017 par une équipe de trois ingénieurs ayant le soucis 
          d'apporter aux entreprises des solutions liées aux problèmes numériques, 
          RINTIO s'est spécialisée dans les 
          <span class="font-bold">
            domaines de la technologie et des services de l’information numérique.</span
          >
        </p>
      </div>
      <div
        class="hidden pt-6 lg:flex lg:space-x-4 md:mx-0 sm:p-12 lg:px-0 xl:px-24 2xl:px-64 3xl:px-96 lg:p-0 lg:space-y-0 md:space-y-4 lg:mt-12"
      >
        <div class="w-full shadow-md md:w-1/2">
          <div class="h-full bg-white ">
            <g-image
              src="~/assets/images/home/about/Michel.webp"
              alt=""
            ></g-image>
            <h2 class="px-6 mt-10 mb-2 font-normal lg:mt-0 lg:px-2 lg:text-2xl 3xl:text-4xl 2xl:px-4 3xl:px-8 text-primary">
              Michel <span class="font-bold uppercase">Idjinou</span>
            </h2>
            <h3
              class="px-6 pb-2 uppercase border-b-2 text-secondary border-secondary lg:px-2 lg:text-lg 3xl:text-2xl 2xl:px-4 3xl:px-8"
            >
              c.e.o
            </h3>
            <p class="px-6 mb-0">• Ingénieur Informatique</p>
            <p class="px-6 mb-0">• Architecte d'entreprise </p>
            <div class="flex px-6 py-4">
              <a
                class="flex items-center ml-auto mr-2 text-xs border rounded-full w-7 h-7 place-content-center hover:border-none text-primary hover:bg-secondary hover:text-white"
                href="https://www.linkedin.com/in/michel-idjinou/"
                target="_blank"
                rel="noopener"
              >
                <em class="relative fab fa-linkedin-in"></em>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full shadow-md sm:w-1/2">
          <div class="h-full bg-white">
            <g-image
              src="~/assets/images/home/about/Jacques.webp"
              alt=""
            ></g-image>
            <h2 class="px-6 mt-10 mb-2 font-normal lg:mt-0 lg:px-2 lg:text-2xl 3xl:text-4xl 2xl:px-4 3xl:px-8 text-primary">
              Jacques <span class="font-bold uppercase">Gnacadja</span>
            </h2>
            <h3
              class="px-6 pb-2 uppercase border-b-2 text-secondary border-secondary lg:px-2 lg:text-lg 3xl:text-2xl 2xl:px-4 3xl:px-8"
            >
              c.o.o
            </h3>
            <p class="px-6 mb-0">• Ingenieur Génie Télécom</p>
            <p class="px-6 mb-0">• Chef projet Digital</p>     
            <div class="flex px-6 py-4">
              <a
                class="flex items-center ml-auto mr-2 text-xs border rounded-full w-7 h-7 place-content-center hover:border-none text-primary hover:bg-secondary hover:text-white"
                href="https://www.linkedin.com/in/jacques-r-gnacadja-a3222276/"
                target="_blank"
                rel="noopener"
              >
                <em class="relative fab fa-linkedin-in"></em>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full shadow-md sm:w-1/2">
          <div class="h-full bg-white ">
            <g-image
              src="~/assets/images/home/about/Iskilou.webp"
              alt=""
            ></g-image>
            <h2 class="px-6 mt-10 mb-2 font-normal lg:mt-0 lg:px-2 lg:text-2xl 3xl:text-4xl 2xl:px-4 3xl:px-8 text-primary">
              Iskilou <span class="font-bold uppercase">Yerima</span>
            </h2>
            <h3
              class="px-6 pb-2 uppercase border-b-2 text-secondary border-secondary lg:px-2 lg:text-lg 3xl:text-2xl 2xl:px-4 3xl:px-8"
            >
              c.t.o
            </h3>
            <p class="px-6 mb-0">• Ingenieur Génie Logiciel</p>
            <p class="px-6 mb-0">• Chef Project Backend</p>
            <div class="flex px-6 py-4">
              <a
                class="flex items-center ml-auto mr-2 text-xs border rounded-full w-7 h-7 place-content-center hover:border-none text-primary hover:bg-secondary hover:text-white"
                href="https://www.linkedin.com/in/iskilou-y%C3%A9rima-sanni-1052a950/"
                target="_blank"
                rel="noopener"
              >
                <em class="relative fab fa-linkedin-in"></em>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full p-5 ">
        <VueSlickCarousel v-bind="settings" class="space-x-4">
          <div class="w-full ">
            <div class="h-full pb-4 mx-1 bg-white shadow-md">
              <g-image
                src="~/assets/images/home/about/Michel.webp"
                alt=""
              ></g-image>
              <h2 class="px-2 mt-0 mb-2 text-xl font-normal sm:px-6 xs:text-2xl sm:text-4xl md:text-5xl text-primary">
                Michel <span class="font-bold uppercase">Idjinou</span>
              </h2>
              <h3
                class="px-2 pb-2 uppercase border-b-2 text-secondary border-secondary sm:px-6"
              >
                c.e.o
              </h3>
              <p class="px-6 mb-0">• PhD Informatique</p>
              <p class="px-6 mb-0">• Data Architect, Cloud & DevOps Engineer</p>
              <div class="flex px-6 py-4">
                <a
                  class="flex items-center ml-auto mr-2 text-xs bg-white border-2 rounded-full w-7 h-7 place-content-center border-primary hover:border-none text-primary hover:bg-secondary hover:text-white"
                  href="https://www.linkedin.com/in/michel-idjinou/"
                  target="_blank"
                  rel="noopener"
                >
                  <em class="relative fab fa-linkedin-in"></em>
                </a>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="h-full pb-4 mx-1 bg-white shadow-md">
              <g-image
                src="~/assets/images/home/about/Jacques.webp"
                alt=""
              ></g-image>
              <h2 class="px-2 mt-0 mb-2 text-xl font-normal sm:px-6 xs:text-2xl sm:text-4xl md:text-5xl text-primary">
                Jacques <span class="font-bold uppercase">Gnacadja</span>
              </h2>
              <h3
                class="px-2 pb-2 uppercase border-b-2 text-secondary border-secondary sm:px-6"
              >
                c.o.o
              </h3>
              <p class="px-6 mb-0">• Chef projet Digital</p>
              <p class="px-6 mb-0">• Ingenieur Réseaux Télécom</p>
              <div class="flex px-6 py-4">
                <a
                  class="flex items-center ml-auto mr-2 text-xs bg-white border-2 rounded-full w-7 h-7 place-content-center border-primary hover:border-none text-primary hover:bg-secondary hover:text-white"
                  href="https://www.linkedin.com/in/jacques-r-gnacadja-a3222276/"
                  target="_blank"
                  rel="noopener"
                >
                  <em class="relative fab fa-linkedin-in"></em>
                </a>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/3">
            <div class="h-full pb-4 mx-1 bg-white shadow-md">
              <g-image
                src="~/assets/images/home/about/Iskilou.webp"
                alt=""
              ></g-image>
              <h2 class="px-2 mt-0 mb-2 text-xl font-normal sm:px-6 xs:text-2xl sm:text-4xl md:text-5xl text-primary">
                Iskilou <span class="font-bold uppercase">Yerima</span>
              </h2>
              <h3
                class="px-2 pb-2 uppercase border-b-2 text-secondary border-secondary sm:px-6"
              >
                c.t.o
              </h3>
              <p class="px-6 mb-0">• Chef Project Backend</p>
              <p class="px-6 mb-0">• Ingenieur Génie Télécom</p>
              <div class="flex px-6 py-4">
                <a
                  class="flex items-center ml-auto mr-2 text-xs bg-white border-2 rounded-full w-7 h-7 place-content-center border-primary hover:border-none text-primary hover:bg-secondary hover:text-white"
                  href="https://www.linkedin.com/in/iskilou-y%C3%A9rima-sanni-1052a950/"
                  target="_blank"
                  rel="noopener"
                >
                  <em class="relative fab fa-linkedin-in"></em>
                </a>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Slider',
  components: { VueSlickCarousel },
    data() {
    return {
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
        arrows:false,
        dots:true,
        dotsClass:'expertdots',
        "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "infinite": true,
        "dots": true
      }

    },{
      "breakpoint": 640,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 1
      }
    }

  ]
      },
    }
  },
};
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .slick-slider {
    display: none;
  }
}
</style>
