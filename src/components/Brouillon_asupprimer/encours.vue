<template>
<div id="wrap">
  <span><strong>{{currentIndex + 1}} / {{bannerList.length}}</strong></span>
  <ul>
    <li v-for="(banner, index) in bannerList" :key="index" :class="{ on: index === currentIndex }">
      <img :src="imgSrcbanner." :alt="index">
    </li>
  </ul>
  <button @click="roll('prev')" class="fa fa-backward"></button>
  <button v-if="!playing" @click="play" class="fa fa-play"></button>
  <button v-if="playing" @click="pause" class="fa fa-pause"></button>
  <button @click="roll('next')" class="fa fa-forward"></button>
</div>
</template>
<script>
   let timer = null;
const AUTO_INTERVAL = 2000;

export default({
  el: "#wrap",
  data() {
        return {
            playing: false,
            bannerList: [
              { imgSrc: "http://placekitten.com/400/300?image=1" },
              { imgSrc: "http://placekitten.com/400/300?image=2" },
              { imgSrc: "http://placekitten.com/400/300?image=3" },
              { imgSrc: "http://placekitten.com/400/300?image=4" }
            ],
            currentIndex: 0
        };
      },
      created() {
          console.log(this.playing);
      },
  methods: {
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
    }
  }
});

</script>
