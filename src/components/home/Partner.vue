<template>
  <div
    class="md:px-16 flex w-full justify-center py-6 md:py-24 text-black"
    style="background: #e8e8e8"
  >
    <div class="md:w-1/4">
      <div class="mx-4 md:mx-0">
        <h3 class="mb-3 text-sm text-primary font-semibold uppercase">
          Nos partenaires
        </h3>
        <!-- Title Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
          <span
            class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
          ></span>
        </div>
      </div>
      <div class="mx-4 md:mx-0 pt-6">
        <h2
          class="
            my-3
            text-xl
            md:text-5xl
            text-primary
            font-extrabold
          "
        >
          Ils nous<br />
          font <br />
          <span class="text-secondary">confiance</span>
        </h2>

        <p class="my-3 text- xl">
          Il serait long et fastidieux de présenter la 
          <span class="font-bold"
            > liste exhaustive de nos
          clients.</span
          > Mais voici quelques exemples de collaborations qui illustrent
          une partie de notre savoir-faire.
        </p>
      </div>
    </div>

    <div
      class="
        w-3/4
        flex-row
        justify-center
        items-start
        flex-wrap
        mx-auto
        hidden
        md:flex
        space-x-4
      "
    >
      <div class="1/3 space-y-4">
        <div
          class="rounded-3xl p-2 m-2 bg-white text-gray-100 w-72 h-72 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <Studely />
        </div>
        <div
          class="rounded-3xl ml-auto p-2 m-2 bg-white text-yellow-100 w-40 h-40 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <Hacklab />
        </div>
      </div>
      <div class="1/3 space-y-4">
        <div
          class="rounded-3xl ml-auto p-2 m-2 bg-white text-indigo-100 w-64 h-64 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <Bnpparibas />
        </div>
        <div
          class="rounded-3xl ml-auto p-2 m-2 bg-white text-green-100 w-60 h-60 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <CiviTime />
        </div>
        <div class="flex">
          <div
            class="rounded-3xl ml-auto p-2 m-2 bg-white text-purple-100 w-24 h-24 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Isci />
          </div>
          <div
            class="rounded-3xl ml-auto p-2 m-2 bg-white text-red-100 w-24 h-24 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Initiative5 />
          </div>
        </div>
      </div>
      <div class="1/3 space-y-4">
        <div
          class="rounded-3xl ml-auto p-2 m-2 bg-white text-pink-100 w-full h-72 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <Societegeneral />
        </div>
        <div class="flex">
          <div
            class="rounded-3xl p-2 m-2 bg-white text-blue-100 w-32 h-32 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Actudata />
          </div>
          <div
            class="rounded-3xl p-2 m-2 ml-auto bg-white text-orange-100 w-32 h-32 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Compta360 />
          </div>
        </div>
        <div
          class="rounded-3xl p-2 m-2 ml-auto bg-white text-teal-100 w-64 h-64 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <ExpertiseFrance />
        </div>
      </div>
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
