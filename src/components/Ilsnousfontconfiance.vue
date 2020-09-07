<template>
  <section class="newclass_ilsnousfontconfiance" @resize="listedelement()">
    <h2
      class=" is-fluid title is-size-4-mobile is-size-2-tablet has-text-primary newclass_nostestimonials"
    >Ils nous font confiance</h2>
    <section id="wrap" class="columns is-mobile is-vcentered has-text-centered">
      <span class="column has-text-right" @click="roll('prev')">
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
      <figure class="column is-four-fifths fig_ilsnousfontconfiance">
        <ul class="container_testimonials_ilsnousfontconfiance animationdroitegauche" id="animation" >
          <li
            class="displaynone "
            v-for="(banner, index) in bannerList"
            :key="index"
            :class="{ on: index === currentIndex }"
          >
            <ul class="is-mobile is-vcentered columns">
              <li v-if="currentIndex==(bannerList.length-1) && mobile" class="column">
                <g-image v-if="showit(1)" :src="listed_element[currentIndex*indiclole()]" />
              </li>
              <li v-else class="column">
                <g-image v-if="showit(1)" :src="listed_element[currentIndex*indiclole()]" />
              </li>
              <li class="column">
                <g-image v-if="showit(2)" :src="listed_element[currentIndex*indiclole()+1]" />
              </li>
              <li class="column">
                <g-image v-if="showit(3)" :src="listed_element[currentIndex*indiclole()+2]" />
              </li>
              <li class="column" v-if="indiclole(3)==4 && showit(4)">
                <g-image
                  
                  :src="listed_element[currentIndex*indiclole()+3]"
                />
              </li>
            </ul>
          </li>
        </ul>
      </figure>
      <figure class="column has-text-left" @click="roll('next')">
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
export default {
  data() {
    return {
      playing: true,
      mobile: false,
      lscreen: screen.width,
      direction:"",
      show: true,
      fleche: {
        left: {
          src: "images/left.svg",
          alt: "flèche gauche",
          width: "5",
          height: "5",
        },
        right: {
          src: "images/right.svg",
          alt: "flèche droite",
          width: "5",
          height: "5",
        },
      },
      bannerList: [],
      listed_element: [
        "images/sqg.png",
        "images/bnp.png",
        "images/hacklab.png",
        "images/actudata.png",
      ],
      testimonials: {
        sqg: {
          name: "sqg",
          src: "images/sqg.png",
          alt: "Société Générale",
          title: "Cotonou, Bénin",
          width: "2400",
          height: "647",
        },
        bnp: {
          name: "bnp",
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
          name: "actudata",
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
    //console.log(this.playing);
    this.play();
    this.listedelement();
  },
  methods: {
    showit(position) {
      let value = this.currentIndex * this.indiclole() + position;
      let longueur = this.listed_element.length;
      if (value <= longueur) {
        this.show = true;
      } else {
        this.show = false;
      }
      return this.show;
    },
    indiclole() {
      let nombre;
      if (this.lscreen < 769) {
        nombre = 3;
      } else {
        nombre = 4;
      }
      return nombre;
    },
    monsieursetinterval() {
      return this.addIndex();
    },
    setAutoRoll() {
      //console.log(this.playing);
      let direction=this.direction;
      let element=document.getElementById('animation');

      if(this.direction=="next"){
        element.classList.replace("animationgauchedroite","animationdroitegauche");
        this.direction="";
      }
      if(this.direction=="prev"){
        element.classList.replace("animationdroitegauche","animationgauchedroite");
        this.direction="next";
      }
     // alert(this.direction);
      timer = setInterval(this.monsieursetinterval, 5000);
      //timer=null;
    },
    addIndex() {
      let newIndex = this.currentIndex + 1;
      let direction=this.direction;
      let element=document.getElementById('animation');

      if(this.direction=="next"){
        element.classList.replace("animationgauchedroite","animationdroitegauche");
        this.direction="";
      }
      if(this.direction=="prev"){
        element.classList.replace("animationdroitegauche","animationgauchedroite");
        this.direction="next";
      }
      this.currentIndex = newIndex === this.bannerList.length ? 0 : newIndex;
      //alert("ouaip");
    },
    roll(direction) {
      let diff = direction === "prev" ? -1 : 1;
      this.currentIndex = this.getTargetIndex(diff);
      this.direction=direction;
      if (this.playing) {
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
    listedelement() {
      let i = 0;
      let longueur;
      let nombre;
      if (this.lscreen < 769) {
        nombre = 3;
        this.mobile = true;
      } else {
        nombre = 4;
        let longueur_liste = this.listed_element.length;
        for (let index = 0; index < longueur_liste; index++) {
          this.listed_element.push(this.listed_element[index]);
        }
        longueur_liste = this.listed_element.length;
        for (let index = 0; index < longueur_liste; index++) {
          //alert(this.listed_element[index]);
        }
        // alert("WTF");
      }
      //alert(this.listed_element.length);
      let nombretotal = this.listed_element.length % nombre;
      // alert(nombretotal);
      if (nombretotal == 0) {
        longueur = this.listed_element.length / nombre;
      } else {
        longueur = this.listed_element.length / nombre;
        //alert(longueur);
        longueur = Math.trunc(longueur) + 1;
        //alert(longueur);
      }
      //alert(longueur);
      for (let index = 0; index < longueur; index++) {
        this.bannerList.push(i);
      } /**/
    },
  },
};
</script>
<style>
.newclass_ilsnousfontconfiance{
  margin-left: 35px;
  margin-top: 35px;
}
#wrap {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #d3d3d3;
  margin-right: -35px;
  margin-left: -35px;
}
.ilsnousfontconfiance_fleche_ {
  height: 20px;
}
#wrap .container_testimonials_ilsnousfontconfiance{
  height:65px;
}
#wrap figure ul li img {
  max-height: 50px;
  max-width: 20vw;
  display: inline-block;
}
#wrap ul {
  list-style-type: none;
  padding: 0;
}
#wrap .displaynone {
  display: none;
}
#wrap li.on {
  display: block;
  position: relative;
  /*animation: animateleft 0.4s;*/
}
.animationgauchedroite li.on{
  animation: animateleft 0.4s;
}
.animationdroitegauche li.on{
  animation: animateright 0.4s;
}
@keyframes animateright {
  from {
    right: -300px;
    opacity: 0;
  }
  to {
    right: 0;
    opacity: 1;
  }
}
@keyframes animateleft {
  from {
    left: -300px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}
/*
@keyframes animateright{
  0%{right:-300px;opacity:0} 
  50%{right:0;opacity:1}
  100%{right:50%;opacity:0}
  }*/
</style>