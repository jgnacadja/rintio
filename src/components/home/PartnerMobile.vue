<template>
  <div
    class="flex justify-center w-full py-6 text-black md:px-16 md:py-24"
    style="background: #e8e8e8"
  >
    <div class="md:w-1/4">
      <div class="mx-4 md:mx-0">
        <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
          Nos partenaires
        </h3>
        <!-- Title Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
          <span
            class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
          ></span>
          <span
            class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
          ></span>
        </div>
      </div>
      <div class="pt-6 mx-4 md:mx-0">
        <h2
          class="my-3 text-2xl font-extrabold md:text-5xl text-primary"
        >
          Ils nous<br />
          font <br />
          <span class="text-secondary">confiance</span>
        </h2>

        <p class="my-3 font-light text- xl">
          Il serait long et fastidieux de présenter la
          <span class="font-light"
            > liste exhaustive de nos
          clients.</span
          > Mais voici quelques exemples de collaborations qui illustrent
          une partie de notre savoir-faire.
        </p>
      </div>
    </div>

    <div
      class="flex-row flex-wrap items-start justify-center hidden w-3/4 mx-auto space-x-4 md:flex">
        <VueSlickCarousel v-bind="settings">
            <div class="flex">
                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 text-xl font-bold text-gray-100 bg-white shadow-xl rounded-3xl">
                    <Studely />
                </div>

                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 ml-auto text-xl font-bold text-yellow-100 bg-white shadow-xl rounded-3xl">
                    <Hacklab />
                </div>

                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 ml-auto text-xl font-bold text-indigo-100 bg-white shadow-xl rounded-3xl">
                    <Bnpparibas />
                </div>

                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 ml-auto text-xl font-bold text-green-100 bg-white shadow-xl rounded-3xl">
                    <CiviTime />
                </div>

                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 ml-auto text-xl font-bold text-purple-100 bg-white shadow-xl rounded-3xl">
                    <Isci />
                </div>

                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 ml-auto text-xl font-bold text-red-100 bg-white shadow-xl rounded-3xl">
                    <Initiative5 />
                </div>

                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 ml-auto text-xl font-bold text-pink-100 bg-white shadow-xl rounded-3xl">
                    <Societegeneral />
                </div>

                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 ml-auto text-xl font-bold text-blue-100 bg-white shadow-xl rounded-3xl">
                    <Actudata />
                </div>

                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 ml-auto text-xl font-bold text-orange-100 bg-white shadow-xl rounded-3xl">
                    <Compta360 />
                </div>

                <div class="flex items-center justify-center w-32 h-32 p-2 m-2 ml-auto text-xl font-bold text-teal-100 bg-white shadow-xl rounded-3xl">
                    <ExpertiseFrance />
                </div>
            </div>
        </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import Actudata from "~/assets/images/home/partner/actudata.svg";
import Bnpparibas from "~/assets/images/home/partner/bnpparibas.svg";
import CiviTime from "~/assets/images/home/partner/civiTime.svg";
import Compta360 from "~/assets/images/home/partner/compta360.svg";
import ExpertiseFrance from "~/assets/images/home/partner/expertiseFrance.svg";
import Hacklab from "~/assets/images/home/partner/hacklab.svg";
import Initiative5 from "~/assets/images/home/partner/initiative5.svg";
import Isci from "~/assets/images/home/partner/isci.svg";
import Societegeneral from "~/assets/images/home/partner/societegeneral.svg";
import Studely from "~/assets/images/home/partner/studely.svg";

export default {
  components: {
    Actudata,
    Bnpparibas,
    CiviTime,
    Compta360,
    ExpertiseFrance,
    Hacklab,
    Initiative5,
    Isci,
    Societegeneral,
    Studely,
  },
};
</script>
