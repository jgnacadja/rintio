<template>

    <!--<div class=" maincar ">
        <VueSlickCarousel v-bind="settings">
        <div class="  text-white  text-4xl font-semibold">
          
          <div class="bg-blue-600 h-80 w-70 mr-8">
            
          </div>
        </div>
        <div class="  text-white  text-4xl font-semibold">
          
          <div class="bg-blue-600 h-80 w-70 mr-8">
            
          </div>
        </div>
        <div class=" text-white  text-4xl font-semibold">
          
          <div class="bg-blue-600 h-80 w-70 mr-8">
            
          </div>
        </div>
        <div class="  text-white  text-4xl font-semibold">
          
          <div class="bg-blue-600 h-80 w-70 mr-8">
            
          </div>
        </div>
        <div class="  text-white  text-4xl font-semibold">
          
          <div class="bg-blue-600 h-80 w-70 mr-8">
            
          </div>
        </div>
        
        </VueSlickCarousel>
    </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'Slider',
    components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        rows: 1,
        initialSlide: 4,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
      },
    }
  },
}
</script>

<style>
/* .maincar {
  width:98%;
  margin: 0 auto;
} */

  /* .slick-slide {
    margin: 0 27px;
  }

  .slick-list {
    margin: 0 -27px;
  }
  .carousel-item {
        height:50vh!important ;
    } 
  .maincar {
  position: relative;
  max-width: 1500px;
  width: 150%;
  margin: 0 auto;
}*/
  .maincar {
    width: 98%;
    overflow: hidden;
    padding-bottom: 30px;
    margin: 0 auto;
    margin-top: 4em;
  }
  .slick-dots li button:before,.slick-dots li:first-child button:before  {
    /* content: "\f054" !important; */
    font-size: 30px;
    font-weight: bold;
    content: ">" !important;
}

  .slick-dots li:first-child button:before {
    /* content: "\f054" !important; */
    content: "<" !important;
}

ul.slick-dots li{
    display: none !important;
}
ul.slick-dots li:first-child, ul.slick-dots li:last-child {
    display: inline-block !important;
}

.slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: right;
}

.slick-dots li:first-child button:before {
    /* content: "\f054" !important; */
    content: "<" !important;
    background-color: white;
    border: 1px solid black;
    border-radius: 3px;
    color: black;
        width: 26px;
}

.slick-dots li.slick-active button:before {
    /* height: 20px; */
    opacity: 0.75;
    color: black;
    border: 1px solid black;
    border-radius: 3px;
    width: 25px;
}


</style>