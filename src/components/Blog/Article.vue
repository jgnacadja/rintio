<template>
  <div
    class="
      container
      w-full
      mx-auto
      mt-4
      md:mt-24
      space-x-0
      md:flex
      md:px-16
    "
  >
    <div class="w-full ">
    <div class="w-full my-6 mx-auto">
      <h3 class="px-3 md:text-md md:mx-auto text-primary font-bold">Articles</h3>
    </div>
      <VueSlickCarousel v-bind="settings">
        <!--first slide-card-->
                    <div class=" md:mx-2 w-full">
          <div class=" shadow-lg group container bg-white max-w-sm mx-auto bg-white bg-center bg-cover bg-no-repeat  w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
         <g-image
             alt="Atut"
              title="Africa TechUp Tour"
              src="~/assets/images/home/story/atut.png"
              class="object-cover w-full h-48 mb-0"
            />
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-wider leading-relaxed font-roboto">
                    Africa TechUp Tour
                  </div>
                  
                  <div
                   class="tracking-tight leading-relaxed font-roboto text-xs mt-2"
                  >
                <p class="text-gray-600 font-light text-base text-justify">
              Rintio, co-organisateur du Africa TechUp Tour apporte toutes son
              expertise en Data et IA dans la formation de la jeunesse.
            </p>
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
          <!--second slide-card-->
        <div class=" md:mx-2 w-full container ">
          <div class=" shadow-lg group container bg-white max-w-sm mx-auto bg-white bg-center bg-cover bg-no-repeat  w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
                <g-image
              alt="atut2020"
              title="Africa TechUp Tour 2020"
              src="~/assets/images/home/story/atut2020.png"
              class="object-cover w-full h-48 mb-0"
            />
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-wider leading-relaxed font-roboto">
                    Africa TechUp Tour
                  </div>
                  
                  <div
                   class="tracking-wider leading-relaxed font-roboto text-xs mt-2"
                  >
                  <p class="text-gray-600 font-light text-base text-justify">
              La campagne 2020, déjà lancée. Etudiants, mathématiciens,
              Statisticiens, Inscrivez vous
              <g-link href="http://africatechuptour.com/" class="underline text-blue-600">ici</g-link>.
            </p>
                  </div>
                  
                </div>
              </div>
          </div>
          </div>
        <!--third slide-card-->
        <div class=" md:mx-2 w-full  ">
          <div class=" shadow-lg group container bg-white max-w-sm mx-auto bg-white bg-center bg-cover bg-no-repeat  w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
                <g-image
        alt="sgmaroc"
              title="Team sgmaroc"
              src="~/assets/images/home/story/sgmaroc.png"
              class="object-cover w-full h-48 mb-0"
            />
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-tighter leading-relaxed font-roboto">
                   SG Maroc imagine la banque du future avec l’IA
                  </div>
                  
                  <div
                   class="tracking-tighter leading-relaxed font-roboto text-xs mt-2"
                  >
                  <p class="text-gray-600 font-light text-base text-justify">
              Pendant une semaine, les experts RINTIO ont animé des ateliers de
              ... du Maroc.
            </p>
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
        <!--fourth slide-card-->
        <div class=" md:mx-2 w-full  ">
          <div class=" shadow-lg group container bg-white max-w-sm mx-auto bg-white bg-center bg-cover bg-no-repeat  w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
                <g-image
              alt="idermato"
              title="IA et Dermatologie"
              src="~/assets/images/home/story/idermato.png"
              class="object-cover w-full h-48 mb-0"
            />
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-tighter leading-relaxed font-roboto">
              iDermato : IA et Dermatologie
                  </div>
                  
                  <div
                   class="tracking-tight leading-relaxed font-roboto text-xs mt-2"
                  >
                  <p class="text-gray-600 tracking-tighter font-light text-base text-justify">
              Un projet Pan-Africain inédit. L’IA au service des dermatologues
              et généralistes pour le diagnostique d’affection ...
            </p>
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
        <!--fith slide-card-->
        <div class=" md:mx-2 w-full  ">
          <div class=" shadow-lg group container bg-white max-w-sm mx-auto bg-white bg-center bg-cover bg-no-repeat  w-11/12 mx-2"> 
              <div class="w-full overflow-hidden">
         <g-image
             alt="Atut"
              title="Africa TechUp Tour"
              src="~/assets/images/home/story/atut.png"
              class="object-cover w-full h-48 mb-0"
            />
                <div class="w-full relative px-4 pb-4 pt-2 bg-white">
                  <div class="text-primary font-bold tracking-wider leading-relaxed font-roboto">
                    Africa TechUp Tour
                  </div>
                  
                  <div
                   class="tracking-tight leading-relaxed font-roboto text-xs mt-2"
                  >
                <p class="text-gray-600 font-light text-base text-justify">
              Rintio, co-organisateur du Africa TechUp Tour apporte toutes son
              expertise en Data et IA dans la formation de la jeunesse.
            </p>
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
        <!--fourth slide-card-->        
      </VueSlickCarousel>
    </div>
  </div>
</template>

<static-query>
query {
  posts: allBlogPost(filter: { categories: { in: "Blog" } }, order: DESC)
    @paginate {
    edges {
      node {
        id
        title
        path
        categories {
          id
          title
        }
        date
        coverImage
        metaDescription
      }
    }
  }
}
</static-query>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() { 
    return {
      settings:{
          dots: true,
          dotsClass:'articledots',
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          arrows:true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]
      },
    };
  }, 
  created() {
    setInterval(this.getTime, 1000);
  },
  mounted() {
    console.log(this.$static.posts)
  },
  methods:{
    getTime: function () {
      var now = new Date();
      var days = now.getDay();
      var months = now.getMonth();
      var years = now.getFullYear();
      var hour = now.getHours();
      var minute = now.getMinutes();

      if (days.toString().length == 1) {
        days = "0" + days;
      }
      if (months.toString().length == 1) {
        months = "0" + months;
      }
      if (years.toString().length == 1) {
        years = "0" + years;
      }
      if (hour.toString().length == 1) {
        hour = "0" + hour;
      }
      if (minute.toString().length == 1) {
        minute = "0" + minute;
      }

      this.days = days;

if (this.days.toString().length == 1) this.days = "0" + this.days;      
if (this.months.toString().length == 1) this.months = "0" + this.months;      
if (this.years.toString().length == 1) this.years = "0" + this.years;      
if (this.hour.toString().length == 1) this.hour = "0" + this.hour;      
if (this.minute.toString().length == 1) this.minute = "0" + this.minute;      

      this.months = months;
      this.years = years;
      this.hour = hour;
      this.minute = minute;

    },
  },
};
</script>

<style scoped>
.bg-offer {
  background-image: url("./../../../static/images/home/offer.png");
}

.bg-offshoring {
  background-image: url("./../../../static/images/home/offer/offshoring.png");
}

.bg-offshoring_2 {
  background-image: url("./../../../static/images/home/offer/offshoring2.png");
}

.bg-datalab {
  background-image: url("./../../../static/images/home/offer/datalab.png");
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.bg-offshoring_2 {
  background-image: url("./../../../static/images/home/offer/offshoring2.png");
}
</style>
