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
      <ul class="columns " id="animate" >
        <li  class="column " style="background-color:white; margin-right:10px;"
            v-for="testimonial in testimonials" 
            :key="testimonial.id" :id="testimonial.name">{{ full(testimonial.name)}}
              <g-image
                :src="testimonial.src"
                :alt="testimonial.alt"
                :title="testimonial.title"
                :width="testimonial.width"
                :height="testimonial.width"
                fit="contain" 
                  />          
        </li>
      </ul>
    </figure>
    <span class="column has-text-left">
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
              name:"sqg",
              src: "images/sqg.png",
              alt: "Société Générale",
              title: "Cotonou, Bénin",
              width: "2400",
              height: "647",
            },
            bnp: {
              name:"bnp",
              src: "images/bnp.png",
              alt: "BNP Paribas",
              title: "Abidjan, Côte d'ivoire",
              width: "5000",
              height: "1300",
            },
            hacklab: {
              name: "hacklab",
              src: "images/hacklab.png",
              alt: "Hacklab",
              title: "Paris, France",
              width: "2082",
              height: "1519",
            },
            actudata: {
              name:"actudata",
              src: "images/actudata.png",
              alt: "Actudata",
              title: "Paris, France",
             width: "1199",
              height: "382",
            },
          },
        };
      },
      methods: {
        carousel(zone) {
         
          //alert(zone);
          var elem=document.getElementById(zone);
          elem.style.display="block";
          elem.style.width="200px";
          //alert(elem.classList.contains("is-one-fifth"));
          if(elem.classList.contains("is-one-fifth")){
            elem.classList.remove("is-one-fifth"); 
            elem.style.backgroundColor="yellow";
          }
          else{
            elem.classList.add("is-one-fifth");
            elem.style.backgroundColor="red";
          }
          
         // //alert(elmen.style.left);
          elmen.style.padding="200px";
          //alert(elmen.style.padding);
        },
        full(zone) {
          setTimeout(this.carousel, 10, zone);
          setTimeout(this.full, 1000, zone);
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
figure ul li{
  position:absolute;
  overflow: hidden;
}
figure ul li{
  position:relative;
}
figure ul li img {
  max-height: 50px;
}
.slides{
  display: none;
}
</style>