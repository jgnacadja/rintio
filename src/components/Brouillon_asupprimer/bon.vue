<template>
  <section class=" newclass_ilsnousfontconfiance" >
    <h2
      class="container is-fluid title is-size-4-mobile is-size-2-tablet has-text-primary newclass_nostestimonials"
      >Ils nous font confiance
    </h2>
    <section id="wrap" class="columns is-mobile is-vcentered has-text-centered">
      <span class="column has-text-right" @click="roll('prev')" >
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
      <figure class="column  is-four-fifths fig_ilsnousfontconfiance" >  
        <ul >
            
            <li v-for="(banner, index) in bannerList" :key="index" :class="{ on: index === currentIndex }">
                <figure class=" is-mobile is-vcentered has-text-centered " > 
                   <g-image v-if="showit(1)"
                        :src="listed_element[currentIndex*indiclole()].imgSrc" />
                   <g-image v-if="showit(2)"
                        :src="listed_element[currentIndex*indiclole()+1].imgSrc" />
                   <g-image v-if="showit(3)"
                        :src="listed_element[currentIndex*indiclole()+2].imgSrc" />
                   <g-image v-if="indiclole(3)==4 && showit(4)" 
                        :src="listed_element[currentIndex*indiclole()+3].imgSrc" />
                </figure>
            </li>
            
        </ul>
      </figure>
      <figure class="column has-text-left"  @click="roll('next')">
         <g-image
              :src="fleche.right.src"
              :alt="fleche.right.alt"
              :title="fleche.right.title"
              :width="fleche.right.title"
              :height="fleche.right.title"
              fit="contain"
              class="ilsnousfontconfiance_fleche_"
            />
      </figure>
    </section>
  </section>
</template>
<script>
   let timer = null;
const AUTO_INTERVAL = 2000;
export default({
  el: "#wrap",
  data() {
        return {
            playing: true,
            lscreen:screen.width,
            show:true,
            fleche:{
              left:{
                src: "images/left.svg",
                alt: "flèche gauche",
                width: "5",
                height: "5",
              },
              right:{
                src: "images/right.svg",
                alt: "flèche droite",
                width: "5",
                height: "5",
              },
            },
            bannerList:[],
            listed_element: [
              { imgSrc: "http://placekitten.com/400/300?image=1" },
              { imgSrc: "http://placekitten.com/400/300?image=2" },
              { imgSrc: "http://placekitten.com/400/300?image=3" },
              { imgSrc: "http://placekitten.com/400/300?image=4" },
              { imgSrc: "images/sqg.png" },
              { imgSrc: "images/bnp.png" },
              { imgSrc: "images/hacklab.png" },
              { imgSrc: "images/actudata.png" },
              
              { imgSrc: "http://placekitten.com/400/300?image=1" },
              { imgSrc: "http://placekitten.com/400/300?image=2" },
              { imgSrc: "http://placekitten.com/400/300?image=3" },
              { imgSrc: "http://placekitten.com/400/300?image=4" },
              { imgSrc: "images/sqg.png" },
              { imgSrc: "images/bnp.png" },
              { imgSrc: "images/hacklab.png" },
              { imgSrc: "images/actudata.png" },
            ],
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
            currentIndex: 0,
        };
      },
  created() {
          console.log(this.playing);
          this.play();
          this.listedelement();
      },
  methods: {
    showit(position){
      let value=this.currentIndex*this.indiclole()+position;
      let longueur=this.listed_element.length;
      if(value<=longueur){
        this.show=true;
      }
      else{
         this.show=false;
      }
      return this.show;
    },
    indiclole(){
      let nombre;
         if(this.lscreen<769){
          nombre=3;
        }
        else{
          nombre=4;
        }
        return nombre;
    },
    monsieursetinterval(){
       return this.addIndex();
    },
    setAutoRoll() {
              //console.log(this.playing);

      timer = setInterval(this.monsieursetinterval, 2000);
    },
    addIndex() {
      let newIndex = this.currentIndex + 1;
      this.currentIndex = newIndex === this.bannerList.length ? 0 : newIndex;
    },
    roll(direction) {
      let diff = direction === "prev" ? -1 : 1;
      this.currentIndex = this.getTargetIndex(diff);
      if(this.playing) {
        clearInterval(timer);
        this.setAutoRoll();
      }
    },
    play() {
      this.setAutoRoll();
      this.playing = true;
    },
    pause() {
      clearInterval(timer);
      this.playing = false;
    },
    getTargetIndex(diff) {
      let length = this.bannerList.length;
      let index = this.currentIndex + diff;
      if (index === -1) {
        return length - 1;
      }
      if (index === length) {
        return 0;
      }
      return index;
    },
    listedelement(){
      let i=0;
      let longueur;
      let nombre;
      if(this.lscreen<769){
          nombre=3;
      }
      else{
         nombre=4;
      }
      let nombretotal=this.listed_element.length%nombre;
      if(nombretotal==0){
        longueur=this.listed_element.length/nombre;
      }
      else{
        longueur=this.listed_element.length/nombre+1;
        longueur=Math.round(longueur);
      }
      for (let index = 0; index < longueur; index++) {
        this.bannerList.push(i);
      }/**/
    },
  }
});

</script>
<style>
#wrap {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #D3D3D3;
}
.ilsnousfontconfiance_fleche_{
  height:20px;
}
#wrap figure ul li img {
  max-height: 50px;
  max-width: 20vw;
  display: inline-block;
  margin-left: 1%;
}
#wrap ul {
  list-style-type: none;
  padding: 0;
}
#wrap li {
  display: none;
}
#wrap li.on {
  display: block;
  position:relative;
  animation:animateright 0.4s
}
@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
</style>