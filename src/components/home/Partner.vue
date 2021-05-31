<template>
  <div
    class="md:px-16 flex w-full justify-center py-6 md:py-24 bg-primary text-white"
  >
    <div class="md:w-1/4">
      <div class="mx-4 md:mx-0">
        <h1 class="mb-3 text-sm font-semibold uppercase">Nos partenaires</h1>
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
        <h1 class="my-3 text-xl md:text-5xl font-extrabold capitalize">
          Ils nous<br />
          font <br />
          <span class="text-secondary">confiance</span>
        </h1>

        <p class="my-3 text-  xl">
          Rintio est une entreprise de services du numérique. Nous sommes
          spécialisées dans le
          <span class="font-bold"
            >développement et l’intégration de solutions informatiques..</span
          >
        </p>
      </div>
    </div>

    <div
      class="w-3/4 flex-row justify-center items-start flex-wrap mx-auto hidden md:flex"
    >
      <div
        class="rounded-3xl p-2 m-2 bg-white text-gray-100 w-72 h-72 flex items-center justify-center text-xl font-bold"
      >
        <Studely />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-indigo-100 w-64 h-64 flex items-center justify-center text-xl font-bold"
      >
        <Bnpparibas />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-pink-100 w-56 h-56 flex items-center justify-center text-xl font-bold"
      >
        <Societegeneral />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-purple-100 w-24 h-24 flex items-center justify-center text-xl font-bold"
      >
        <Isci />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-green-100 w-60 h-60 flex items-center justify-center text-xl font-bold"
      >
        <CiviTime />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-yellow-100 w-40 h-40 flex items-center justify-center text-xl font-bold"
      >
        <Hacklab />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-teal-100 w-72 h-72 flex items-center justify-center text-xl font-bold"
      >
        <ExpertiseFrance />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-blue-100 w-24 h-24 flex items-center justify-center text-xl font-bold"
      >
        <Actudata />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-orange-100 w-20 h-20 flex items-center justify-center text-xl font-bold"
      >
        <Compta360 />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-red-100 w-24 h-24 flex items-center justify-center text-xl font-bold"
      >
        <Initiative5 />
      </div>
      <div
        class="rounded-3xl p-2 m-2 bg-white text-teal-100 w-40 h-40 flex items-center justify-center text-xl font-bold"
      >
        <ExpertiseFrance />
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
    Studely
  },
};
</script>