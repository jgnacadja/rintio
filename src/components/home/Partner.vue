<template>
  <div
    class="md:px-16 md:flex w-full justify-center flex-wrap py-6 md:py-24 text-black"
    style="background: #e8e8e8"
  >
    <div class="w-full md:w-full lg:w-1/4 text-center md:text-center lg:text-left">
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
      <div class=" mx-4 md:mx-0 pt-6">
        <h2
          class="
            text-2xl
            md:text-5xl
            text-primary
            font-extrabold
          "
        >
          Ils nous
          font 
          <span class="text-secondary">confiance</span>
        </h2>

        <p class="hidden md:block my-3 font-light text- xl">
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
      class="
        w-full md:w-full lg:w-3/4 
        flex-row
        justify-center
        items-start
        flex-wrap
        mx-auto
        flex
        lg:space-x-4
      "
    >
      <div class="1/3 space-y-4">
        <div
          class="rounded-xl md:rounded-3xl p-2 m-2 bg-white text-gray-100 w-12 md:w-48 lg:w-48 xl:w-60 h-12 md:h-48 lg:h-48 xl:h-60 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <Studely />
        </div>
        <div
          class="rounded-xl md:rounded-3xl md:ml-auto p-2 m-2 bg-white text-yellow-100 w-12 md:w-28 lg:w-32 xl:w-40 h-12 md:h-28 lg:h-32 xl:h-40 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <Hacklab />
        </div>
      </div>
      <div class="1/3 space-y-4 ">
        <div
          class="rounded-xl md:rounded-3xl md:ml-auto p-2 m-2 bg-white text-indigo-100 w-12 md:w-44 lg:w-40 xl:w-56 h-12 md:h-44 lg:h-40 xl:h-56 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <Bnpparibas />
        </div>
        <div
          class="rounded-xl md:rounded-3xl md:ml-auto p-2 m-2 bg-white text-green-100 w-12 md:w-40 lg:w-32 xl:w-52 h-12 md:h-40 lg:h-32 xl:h-52 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <CiviTime />
        </div>
        <div class="md:flex">
          <div
            class="rounded-xl md:rounded-3xl lg:ml-auto p-2 m-2 bg-white text-purple-100 w-12 md:w-20 lg:w-16 xl:w-24 h-12 md:h-20 lg:h-16 xl:h-24 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Isci />
          </div>
          <div
            class="rounded-xl md:rounded-3xl xl:ml-auto p-2 m-2 bg-white text-red-100 w-12 md:w-20 lg:w-16 xl:w-24 h-12 md:h-20 lg:h-16 xl:h-24 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Initiative5 />
          </div>
        </div>
      </div>
      <div class="1/3 space-y-4">
        <div
          class="rounded-xl md:rounded-3xl xl:ml-auto p-2 m-2 bg-white text-pink-100 w-12 md:w-56 lg:w-60 xl:w-full h-12 md:h-40 lg:h-36 xl:h-52 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <Societegeneral />
        </div>
        <div class="md:flex">
          <div
            class="rounded-xl md:rounded-3xl p-2 m-2 bg-white text-blue-100 w-12 md:w-24 lg:w-24 xl:w-32 h-12 md:h-24 lg:h-24 xl:h-32 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Actudata />
          </div>
          <div
            class="rounded-xl md:rounded-3xl p-2 m-2 xl:ml-auto bg-white text-orange-100 w-12 md:w-24 lg:w-24 xl:w-32 h-12 md:h-24 lg:h-24 xl:h-32 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Compta360 />
          </div>
        </div>
        <div
          class="rounded-xl md:rounded-3xl p-2 m-2 lg:ml-auto bg-white text-teal-100 w-12 md:w-56 lg:w-52 xl:w-56 h-12 md:h-56 lg:h-52 xl:h-56 flex items-center justify-center text-xl font-bold shadow-xl"
        >
          <ExpertiseFrance />
        </div>
      </div>
    </div>
  
   <!-- <div
      class="
        md:w-3/4
        flex-row
        justify-center
        items-start
        flex-wrap
        mx-auto
        md:flex
        space-x-4
      "
      >
      <div class=" grid grid-rows-6 md:grid-rows-3 grid-flow-col md:gap-4">
          <div
            class="rounded-3xl p-2 m-2 bg-white text-gray-100 w-28 md:w-72 h-28 md:h-72 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Studely />
          </div>
          <div
            class="rounded-3xl ml-auto p-2 m-2 bg-white text-yellow-100 w-28 md:w-40 h-28 md:h-40 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Hacklab />
          </div>

          <div
            class="rounded-3xl ml-auto p-2 m-2 bg-white text-indigo-100 w-28 md:w-64 h-28 md:h-64 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Bnpparibas />
          </div>
          <div
            class="rounded-3xl ml-auto p-2 m-2 bg-white text-green-100 w-28 md:w-60 h-28 md:h-60 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <CiviTime />
          </div>
          <div
            class="rounded-3xl ml-auto p-2 m-2 bg-white text-purple-100 w-28 md:w-24 h-28 md:h-24 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Isci />
          </div>
          <div
            class="rounded-3xl ml-auto p-2 m-2 bg-white text-red-100 w-28 md:w-24 h-28 md:h-24 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Initiative5 />
          </div>

          <div
            class="rounded-3xl ml-auto p-2 m-2 bg-white text-pink-100 w-28 md:w-full h-28 md:h-72 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <Societegeneral />
          </div>
          <div class="flex">
            <div
              class="rounded-3xl p-2 m-2 bg-white text-blue-100 w-28 md:w-32 h-28 md:h-32 flex items-center justify-center text-xl font-bold shadow-xl"
            >
              <Actudata />
            </div>
            <div
              class="rounded-3xl p-2 m-2 ml-auto bg-white text-orange-100 w-28 md:w-32 h-28 md:h-32 flex items-center justify-center text-xl font-bold shadow-xl"
            >
              <Compta360 />
            </div>
          </div>
          <div
            class="rounded-3xl p-2 m-2 ml-auto bg-white text-teal-100 w-28 md:w-64 h-28 md:h-64 flex items-center justify-center text-xl font-bold shadow-xl"
          >
            <ExpertiseFrance />
          </div>
        
      </div>
     

      
    </div> -->
  
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
