<template>
  <section class=" newclass_ilsnousfontconfiance" >
    <h2
      class="container is-fluid title is-size-4-mobile is-size-2-tablet has-text-primary newclass_nostestimonials"
      >Ils nous font confiance
    </h2>
    <section class="columns is-desktop is-vcentered has-text-centered">
      <span class="column has-text-right" @click="avanceourecule(-1)" >
        <g-image
              :src="fleche.left.src"
              :alt="fleche.left.alt"
              :title="fleche.left.title"
              :width="fleche.left.title"
              :height="fleche.left.title"
              fit="contain"
              class="ilsnousfontconfiance_fleche_"
            />
      </span> 
    <figure class="column   is-four-fifths"  >
      <ul class="columns " id="animate">
             
        <li  class="column " id="slides" v-for="testimonial in testimonials" 
            :key="testimonial.id">
          <g-image
            :src="testimonial.src"
            :alt="testimonial.alt"
            :title="testimonial.title"
            width="10"
            height="10"
            fit="contain" 
          />
        </li>
        <li  class="column slides" v-for="testimonial in testimonials" 
            :key="testimonial.id">
          <g-image
            :src="testimonial.src"
            :alt="testimonial.alt"
            :title="testimonial.title"
            width="10"
            height="10"
            fit="contain" 
          />
        </li>
      </ul>
    </figure>
    <span class="column has-text-left" @click='carouse("slides",-360)'>
         <g-image
              :src="fleche.right.src"
              :alt="fleche.right.alt"
              :title="fleche.right.title"
              :width="fleche.right.title"
              :height="fleche.right.title"
              fit="contain"
              class="ilsnousfontconfiance_fleche_"
            />
      </span>
    </section>
  </section>
</template>
<script>
    var slideIndex = 1;
    var start=0;
    export default {
      data() {
        return {
          isImageModalActive: "ADIO",
          counter: 0,
          fleche:{
            left:{
              src: "images/left.svg",
              alt: "Cotonou, Bénin",
              title: "Cotonou, Bénin",
              width: "5",
              height: "5",
            },
            right:{
              src: "images/right.svg",
              alt: "Cotonou, Bénin",
              title: "Cotonou, Bénin",
              width: "5",
              height: "5",
            },
          },
          testimonials: {
            sqg: {
              src: "images/sqg.png",
              alt: "Cotonou, Bénin",
              title: "Cotonou, Bénin",
              width: "2400",
              height: "647",
            },
            bnp: {
              src: "images/bnp.png",
              alt: "Abidjan, Côte d'ivoire",
              title: "Abidjan, Côte d'ivoire",
              width: "5000",
              height: "1300",
            },
            hacklab: {
              src: "images/hacklab.png",
              alt: "Paris, France",
              title: "Paris, France",
              width: "2082",
              height: "1519",
            },
            actudata: {
              src: "images/actudata.png",
              alt: "Paris, France",
              title: "Paris, France",
             width: "1199",
              height: "382",
            },
          },
          testimonials_reverse: {
            hacklab: {
              src: "images/hacklab.png",
              alt: "Paris, France",
              title: "Paris, France",
              width: "2082",
              height: "1519",
            },
            actudata: {
              src: "images/actudata.png",
              alt: "Paris, France",
              title: "Paris, France",
             width: "1199",
              height: "382",
            },
            sqg: {
              src: "images/sqg.png",
              alt: "Cotonou, Bénin",
              title: "Cotonou, Bénin",
              width: "2400",
              height: "647",
            },
            bnp: {
              src: "images/bnp.png",
              alt: "Abidjan, Côte d'ivoire",
              title: "Abidjan, Côte d'ivoire",
              width: "5000",
              height: "1300",
            },
          },
        };
      },
      methods: {
        carouse(zone,p) {
          //document.getElementById(zone).innerHTML = findTrueDate(zone);
          let element=0;
            element+=100;
          //  document.getElementById(zone).style.paddingRight = element+"px"; 
          var x = document.getElementById(zone).children;
        },
      },
    };
</script>
<style>
.newclass_ilsnousfontconfiance {
  margin-top: 50px;
  margin-bottom: 50px;
}
.ilsnousfontconfiance_fleche_{
  height:20px;
}
section.is-vcentered{
  background-color: #D3D3D3;
}
figure ul li img{
  max-height: 50px;
}
.slides{
  display: none;
}
</style>