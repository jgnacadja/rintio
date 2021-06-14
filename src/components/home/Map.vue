  <template>
  <div class="bg-map bg-cover items-center w-full justify-center py-6 md:py-24">
    <div class="mx-4 md:mx-0 md:text-center mb-4 md:mb-10">
      <h1 class="text-xl md:text-5xl font-extrabold text-primary capitalize">
        Nos implantations
      </h1>
    </div>
    <div class="text-center">
      <p class="mx-4 md:w-1/2 my-3 text-sm md:mx-auto">
        Notre Présence dans le monde.
      </p>
    </div>

    <div class="hidden md:flex justify-center items-center w-3/4 mx-auto">
      <div class="py-4 mx-4 w-full md:w-1/3">
        <a
          href="https://goo.gl/maps/vBBTTGEydxDGfaXz7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="
              shadow-lg
              group
              container
              bg-white
              max-w-sm
              mx-auto
              bg-center bg-cover bg-no-repeat bg-map-cotonou
            "
          >
            <div class="w-full overflow-hidden">
              <div class="w-full h-40"></div>
              <div class="w-full relative justify-between flex px-4 py-6">
                <span
                  class="
                    font-extrabold
                    text-white
                    tracking-wider
                    leading-relaxed
                    font-sans
                  "
                  >Cotonou, Bénin
                </span>

                <span class="flex items-center text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {{ hour }}h:{{ minute }}m:{{ second }}s
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="py-4 mx-4 w-full md:w-1/3">
        <a
          href="https://goo.gl/maps/dtQk9dyzfcHwkpfLA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="
              shadow-lg
              group
              container
              bg-white
              max-w-sm
              mx-auto
              bg-center bg-cover bg-no-repeat bg-map-paris
            "
          >
            <div class="w-full overflow-hidden">
              <div class="w-full h-40"></div>
              <div class="w-full relative justify-between flex px-4 py-6">
                <span
                  class="
                    font-extrabold
                    text-white
                    tracking-wider
                    leading-relaxed
                    font-sans
                  "
                  >Paris, France
                </span>

                <span class="flex items-center text-white text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {{ hourFr }}h:{{ minute }}m:{{ second }}s
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="py-4 mx-4 w-full md:w-1/3">
        <div
          class="
            shadow-lg
            group
            container
            bg-white
            max-w-sm
            mx-auto
            bg-center bg-cover bg-no-repeat bg-map-abidjan
          "
        >
          <div class="w-full overflow-hidden">
            <div class="w-full h-40"></div>
            <div class="w-full relative justify-between flex px-4 py-6">
              <span
                class="
                  font-extrabold
                  text-white
                  tracking-wider
                  leading-relaxed
                  font-sans
                "
              >
                Abidjan, Cote d’Ivoire
              </span>

              <span class="flex items-center text-white text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ hourCi }}h:{{ minute }}m:{{ second }}s
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      hourFr: "",
      hourCi: "",
      hour: "",
      minute: "",
      second: "",
    };
  },
  created() {
    setInterval(this.getTime, 1000);
  },
  methods: {
    getTime: function () {
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      if (hour.toString().length == 1) {
        hour = "0" + hour;
      }
      if (minute.toString().length == 1) {
        minute = "0" + minute;
      }
      if (second.toString().length == 1) {
        second = "0" + second;
      }

      this.hour = hour;
      this.hourFr = Number(hour) + 1;
      this.hourCi = Number(hour) - 1;

      if (this.hour.toString().length == 1) this.hour = "0" + this.hour;

      if (this.hourFr.toString().length == 1) this.hourFr = "0" + this.hourFr;

      if (this.hourCi.toString().length == 1) this.hourCi = "0" + this.hourCi;

      if (minute.toString().length == 1) minute = "0" + minute;

      if (second.toString().length == 1) second = "0" + second;

      this.minute = minute;
      this.second = second;
    },
  },
};
</script>


<style scoped>
.bg-map {
  background-image: url("./../../../static/images/home/map.png");
}

.bg-map-cotonou {
  background-image: url("./../../../static/images/home/map/cotonou.png");
}

.bg-map-paris {
  background-image: url("./../../../static/images/home/map/paris.png");
}

.bg-map-abidjan {
  background-image: url("./../../../static/images/home/map/abidjan.png");
}
</style>
