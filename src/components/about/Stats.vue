<template>
  <div
    class="md:px-20 md:flex w-full justify-center py-6 md:py-24 text-white bg-primary"
    v-observe-visibility="{
      callback: animate,
      once: true,
      throttle: 300,
    }"
  >
    <div class="flex flex-wrap mx-auto mb-8 md:mb-0 md:space-x-24 ">
      <div class="w-1/2 md:w-auto sm:text-left text-center" >
        <p id="customer" class="text-5xl md:text-8xl font-bold">0</p>
        <!-- Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-colorblind"></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-colorblind ml-2"
          ></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-colorblind ml-2"
          ></span>
        </div>
        <div>
          <p class="text-sm font-bold">Technologies utilisées</p>
          </div>
      </div>
      <div class="w-1/2 md:w-auto sm:text-left text-center" >
        <p id="customer" class="text-5xl md:text-8xl font-bold"><span id="project">0</span>+</p>
        <!-- Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-colorblind"></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-colorblind ml-2"
          ></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-colorblind ml-2"
          ></span>
        </div>
        <div><p class="text-sm font-bold">Projets réalisés</p></div>
      </div>
      <div class="w-1/2 md:w-auto sm:text-left text-center" >
        <p id="customer" class="text-5xl md:text-8xl font-bold"><span id="member">0</span>+</p>
        <!-- Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-colorblind"></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-colorblind ml-2"
          ></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-colorblind ml-2"
          ></span>
        </div>
        <p class="text-sm font-bold">Pays Internationals</p>
      </div>
      <div class="w-1/2 md:w-auto sm:text-left text-center" >
        <p id="experience" class="text-5xl md:text-8xl font-bold">0</p>
        <!-- Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-colorblind"></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-colorblind ml-2"
          ></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-colorblind ml-2"
          ></span>
        </div>
       <div><p class="text-sm font-bold">Membres d'équipe</p></div>
      </div>
      </div>
  </div>
</template>

<script>
import Expert from "~/assets/images/icons/expert.svg";

export default {
  components: {
    Expert,
  },
  methods: {
    animateValue: function (obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML =
          Math.floor(progress * (end - start) + start) < 10
            ? `0${Math.floor(progress * (end - start) + start)}`
            : Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
    animate: function (isVisble, entry) {
      const customer = document.getElementById("customer");
      const project = document.getElementById("project");
      const member = document.getElementById("member");
      const experience = document.getElementById("experience");

      if (entry.isIntersecting) {
        this.animateValue(customer, 0, 50, 5000);
        this.animateValue(project, 0, 30, 5000);
        this.animateValue(member, 0, 5, 5000);
        this.animateValue(experience, 0, 50, 5000);
      }
    },
  },
};

</script>


