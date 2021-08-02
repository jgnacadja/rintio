<template>
  <div class="lg:px-20 md:flex w-full justify-center py-6 md:py-24">
    <div class="w-full mx-auto mb-8 md:mb-0">
      <div class="mx-4 md:mx-0 text-center">
        <h1
          class="pb-8 text-xl md:text-5xl font-extrabold capitalize text-primary"
        >
          Notre
          <span class="text-secondary"> équipe</span>
        </h1>

        <p class="my-3 w-ful lg:w-1/2 mx-auto">
          Rintio a été fondée en 2017 par une équipe d’ingénieurs dans le souci
          de soulager les entreprises dans l’analyse et le traitement de données
          volumineuses, nous sommes spécialisés dans le
          <span class="font-bold">
            domaine des technologies et services de l’information.</span
          >
        </p>
      </div>
      <div
        class="lg:flex hidden lg:space-x-4  md:mx-0 pt-6 sm:p-12 lg:px-0  xl:px-24  2xl:px-64 3xl:px-96 lg:p-0 lg:space-y-0 lg:space-y-0 md:space-y-4 lg:mt-12"
      >
        <div class="w-full md:w-1/2  shadow-md">
          <div class="h-full bg-white ">
            <g-image
              src="~/assets/images/home/about/Michel.jpg"
              alt=""
            ></g-image>
            <h2 class="mt-10 lg:mt-0 mb-2 px-6 lg:px-2 font-normal lg:text-2xl 3xl:text-4xl 2xl:px-4 3xl:px-8 text-primary">
              Michel <span class="font-bold uppercase">Idjinou</span>
            </h2>
            <h3
              class="text-secondary border-b-2 border-secondary px-6 lg:px-2 lg:text-lg pb-2 3xl:text-2xl 2xl:px-4 3xl:px-8 uppercase"
            >
              c.e.o
            </h3>
            <p class="mb-0 px-6">• Ingénieur Informatique</p>
            <p class="mb-0 px-6">• Architecte d'entreprise </p>
            <div class="flex py-4 px-6">
              <a
                class="ml-auto w-7 h-7 mr-2 flex items-center place-content-center rounded-full border hover:border-none text-primary text-xs hover:bg-secondary hover:text-white"
                href="https://www.linkedin.com/in/michel-idjinou/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in relative"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2  shadow-md">
          <div class="h-full bg-white">
            <g-image
              src="~/assets/images/home/about/Jacques.jpeg"
              alt=""
            ></g-image>
            <h2 class="mt-10 lg:mt-0 mb-2 px-6 lg:px-2 font-normal lg:text-2xl 3xl:text-4xl 2xl:px-4 3xl:px-8 text-primary">
              Jacques <span class="font-bold uppercase">Gnacadja</span>
            </h2>
            <h3
              class="text-secondary border-b-2 border-secondary px-6 lg:px-2 lg:text-lg 3xl:text-2xl 2xl:px-4 3xl:px-8 pb-2 uppercase"
            >
              c.o.o
            </h3>
            <p class="mb-0 px-6">• Ingenieur Génie Télécom</p>
            <p class="mb-0 px-6">• Chef projet Digital</p>
            
            <div class="flex py-4 px-6">
              <a
                class="ml-auto w-7 h-7 mr-2 flex items-center place-content-center rounded-full border hover:border-none text-primary text-xs hover:bg-secondary hover:text-white"
                href="https://www.linkedin.com/in/jacques-r-gnacadja-a3222276/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in relative"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 shadow-md">
          <div class="h-full bg-white ">
            <g-image
              src="~/assets/images/home/about/Iskilou.jpeg"
              alt=""
            ></g-image>
            <h2 class="mt-10 lg:mt-0 mb-2 px-6 lg:px-2 font-normal lg:text-2xl 3xl:text-4xl 2xl:px-4 3xl:px-8 text-primary">
              Iskilou <span class="font-bold uppercase">Yerima</span>
            </h2>
            <h3
              class="text-secondary border-b-2 border-secondary px-6 lg:px-2 lg:text-lg 3xl:text-2xl 2xl:px-4 3xl:px-8 pb-2 uppercase"
            >
              c.t.o
            </h3>
            <p class="mb-0 px-6">• Ingenieur Génie Logiciel</p>
            <p class="mb-0 px-6">• Chef Project Backend</p>
            <div class="flex py-4 px-6">
              <a
                class="ml-auto w-7 h-7 mr-2 flex items-center place-content-center rounded-full border hover:border-none text-primary text-xs hover:bg-secondary hover:text-white"
                href="https://www.linkedin.com/in/iskilou-y%C3%A9rima-sanni-1052a950/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in relative"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full p-5 ">
        <VueSlickCarousel v-bind="settings" class="space-x-4">
          <div class="w-full ">
            <div class="h-full shadow-md mx-1 bg-white pb-4">
              <g-image
                src="~/assets/images/home/about/Michel.jpg"
                alt=""
              ></g-image>
              <h2 class="mt-0 mb-2 px-2 sm:px-6 font-normal text-xl xs:text-2xl sm:text-4xl md:text-5xl text-primary">
                Michel <span class="font-bold uppercase">Idjinou</span>
              </h2>
              <h3
                class="text-secondary border-b-2 border-secondary px-2 sm:px-6 pb-2 uppercase"
              >
                c.e.o
              </h3>
              <p class="mb-0 px-6">• PhD Informatique</p>
              <p class="mb-0 px-6">• Data Architect, Cloud & DevOps Engineer</p>
              <div class="flex  py-4 px-6">
                <a
                  class="ml-auto w-7 h-7 mr-2 flex items-center place-content-center rounded-full bg-white border-2 border-primary hover:border-none text-primary text-xs hover:bg-secondary hover:text-white"
                  href="https://www.linkedin.com/in/michel-idjinou/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in relative"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="h-full bg-white pb-4 mx-1 shadow-md">
              <g-image
                src="~/assets/images/home/about/Jacques.jpeg"
                alt=""
              ></g-image>
              <h2 class="mt-0 mb-2 px-2 sm:px-6 font-normal text-xl xs:text-2xl sm:text-4xl md:text-5xl text-primary">
                Jacques <span class="font-bold uppercase">Gnacadja</span>
              </h2>
              <h3
                class="text-secondary border-b-2 border-secondary px-2 sm:px-6 pb-2 uppercase"
              >
                c.o.o
              </h3>
              <p class="mb-0 px-6">• Chef projet Digital</p>
              <p class="mb-0 px-6">• Ingenieur Réseaux Télécom</p>
              <div class="flex  py-4 px-6">
                <a
                  class="ml-auto w-7 h-7 mr-2 flex items-center place-content-center rounded-full bg-white border-2 border-primary hover:border-none text-primary text-xs hover:bg-secondary hover:text-white"
                  href="https://www.linkedin.com/in/jacques-r-gnacadja-a3222276/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in relative"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/3">
            <div class="h-full bg-white pb-4 mx-1 shadow-md">
              <g-image
                src="~/assets/images/home/about/Iskilou.jpeg"
                alt=""
              ></g-image>
              <h2 class="mt-0 mb-2 px-2 sm:px-6 font-normal text-xl xs:text-2xl sm:text-4xl md:text-5xl text-primary">
                Iskilou <span class="font-bold uppercase">Yerima</span>
              </h2>
              <h3
                class="text-secondary border-b-2 border-secondary px-2 sm:px-6 pb-2 uppercase"
              >
                c.t.o
              </h3>
              <p class="mb-0 px-6">• Chef Project Backend</p>
              <p class="mb-0 px-6">• Ingenieur Génie Télécom</p>
              <div class="flex  py-4 px-6">
                <a
                  class="ml-auto w-7 h-7 mr-2 flex items-center place-content-center rounded-full bg-white border-2 border-primary hover:border-none text-primary text-xs hover:bg-secondary hover:text-white"
                  href="https://www.linkedin.com/in/iskilou-y%C3%A9rima-sanni-1052a950/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in relative"></i>
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
