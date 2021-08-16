<template>
  <div
    class="items-center justify-center w-full py-6 md:py-24 md:px-4 lg:px-12 xl:px-24"
  >
    <div class="text-center">
      <h2 class="my-3 text-xl font-extrabold md:text-5xl text-primary">
        Rintio<span class="text-secondary font-roboto"> story</span>
      </h2>
      <div class="py-4 mx-auto font-light md:w-1/2">
        Suivez notre parcours dans l'écosystème de la technologie à travers nos diverses actions.
      </div>
    </div>

    <div
      class="grid gap-4 md:grid-cols-6 xl:grid-cols-4 md:grid-flow-row xl:grid-flow-rows"
    >
      <!-- RINTIO renforce sa stratégie d’appui des formations en ligne en mettant en production la plateforme E-learning Coraq Lab -->

      <div class="col-span-3 row-span-6 xl:col-span-2 xl:row-span-2">
        <div class="w-full h-full bg-white">
          <g-image
            alt="coraq"
            title="Coraq Chmp"
            src="~/assets/images/home/story/coraq.webp"
            class="object-cover w-full mb-0"
          />

          <h3
            class="mx-4 my-4 text-xl font-bold leading-tight text-primary 4xl:text-4xl 4xl:leading-10"
          >
            RINTIO renforce sa stratégie d’appui des formations en ligne en
            mettant en production la plateforme E-learning Coraq Lab
          </h3>
          <p
            class="mx-4 mb-4 text-base font-light text-justify text-gray-600 4xl:text-2xl 4xl:leading-10"
          >
            Dans sa vision d'être un acteur principal dans la formation aux outils du numériques, 
            RINTIO met en place la plateforme Conraq-Lab. Ceci constitue pour RINTIO, un pas en 
            avant dans sa stratégie d'appui aux formations en ligne. 
          </p>
        </div>
      </div>

      <!-- Africa TechUp Tour -->

      <div class="col-span-3 row-span-3 xl:col-span-1 xl:row-span-1">
        <div class="w-full h-full p-4 bg-white lg:p-0">
          <g-image
            alt="Atut"
            title="Africa TechUp Tour"
            src="~/assets/images/home/story/atut.webp"
            class="object-cover w-full mb-0 h-52"
          />

          <h3
            class="mx-4 my-4 text-xl font-bold leading-tight text-primary 4xl:text-4xl 4xl:leading-10"
          >
            Africa TechUp Tour
          </h3>
          <p
            class="mx-4 mb-4 text-base font-light text-justify text-gray-600 4xl:text-2xl 4xl:leading-10"
          >
            Co-organisateur de Africa TechUp Tour, RINTIO apporte son expertise en Big Data et 
            Intelligence Artificielle  dans la formation de jeunes développeurs africains
          </p>
        </div>
      </div>

      <!-- Africa TechUp Tour 2 -->

      <div class="col-span-3 row-span-3 xl:col-span-1 xl:row-span-1">
        <div class="w-full h-full p-4 bg-white lg:p-0">
          <g-image
            alt="atut2020"
            title="Africa TechUp Tour 2020"
            src="~/assets/images/home/story/atut2020.webp"
            class="object-cover w-full mb-0 h-52"
          />

          <h3
            class="mx-4 my-4 text-xl font-bold leading-tight text-primary 4xl:text-4xl 4xl:leading-10"
          >
            Africa TechUp Tour
          </h3>
          <p
            class="mx-4 mb-4 text-base font-light text-justify text-gray-600 4xl:text-2xl 4xl:leading-10"
          >
            La campagne 2020, déjà lancée. Etudiants, mathématiciens,
            Statisticiens, Inscrivez vous
            <g-link
              href="http://africatechuptour.com/"
              class="text-blue-600 underline"
              >ici</g-link
            >.
          </p>
        </div>
      </div>

      <!-- SG Maroc imagine la banque du future avec l’IA -->

      <div class="col-span-3 row-span-3 xl:col-span-1 xl:row-span-1">
        <div class="w-full h-full p-4 bg-white lg:p-0">
          <g-image
            alt="sgmaroc"
            title="Team sgmaroc"
            src="~/assets/images/home/story/sgmaroc.webp"
            class="object-cover w-full mb-0 h-52"
          />

          <h3
            class="mx-4 my-4 text-xl font-bold leading-tight text-primary 4xl:text-4xl 4xl:leading-10"
          >
            SG Maroc imagine la banque du future avec l’IA
          </h3>
          <p
            class="mx-4 mb-4 text-base font-light text-justify text-gray-600 4xl:text-2xl 4xl:leading-10"
          >
            Pendant une semaine, les experts RINTIO ont animé des ateliers de
            ... du Maroc.
          </p>
        </div>
      </div>

      <!-- iDermato : IA et Dermatologie -->

      <div class="col-span-3 row-span-3 xl:col-span-1 xl:row-span-1">
        <div class="w-full h-full p-4 bg-white lg:p-0">
          <g-image
            alt="idermato"
            title="IA et Dermatologie"
            src="~/assets/images/home/story/idermato.webp"
            class="object-cover w-full mb-0 h-52"
          />

          <h3
            class="mx-4 my-4 text-xl font-bold leading-tight text-primary 4xl:text-4xl 4xl:leading-10"
          >
            iDermato : IA et Dermatologie
          </h3>
          <p
            class="mx-4 mb-4 text-base font-light text-justify text-gray-600 4xl:text-2xl 4xl:leading-10"
          >
            iDermato est un projet Panafricain qui vise les échanges entre dermatologues et médécins 
            généralistes dans le diagnostique d'infections cutanées sur peaux noires.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
  },
};
</script>
