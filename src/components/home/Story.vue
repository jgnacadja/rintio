<template>
  <div class="items-center w-full justify-center py-6 md:py-24">
    <div class="text-center">
      <h1
        class="my-3 text-xl md:text-5xl font-extrabold text-primary uppercase"
      >
        à la une / Rintio<span class="text-secondary font-openSans">
          Story</span
        >
      </h1>
      <p class="md:w-1/2 mx-auto py-4">
        Rintio est une entreprise de services du numérique. Nous sommes
        spécialisées dans le
        <span class="font-bold"
          >développement et l’intégration de solutions informatiques..</span
        >
      </p>
    </div>

    <div class="md:flex container mx-auto space-x-0 md:space-x-6 w-full">
      <!-- main story -->
      <div
        class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white"
      >
        <g-image
          alt="iot"
          src="~/assets/images/home/story/coraq.png"
          class="object-cover w-full mb-0"
        />

        <p class="text-primary font-bold my-4 leading-tight text-xl mx-4">
          CHMP Coraq-lab
        </p>
        <p class="text-gray-600 mb-4 mx-4 text-base">
          Lancement de la
        </p>
      </div>

      <!-- sub-main story -->
      <div class="w-full md:w-1/2 md:space-y-6">
        <div class="md:flex md:space-x-6">
          <!-- story 1 -->
          <div
            class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white"
          >
            <g-image
              alt="iot"
              src="~/assets/images/home/story/atut.png"
              class="object-cover w-full h-52 mb-0"
            />

            <p class="text-primary font-bold my-4 leading-tight text-xl mx-4">
              Africa TechUp Tour
            </p>
            <p class="text-gray-600 mb-4 mx-4 text-base">
              Rintio, co-organisateur du Africa TechUp Tour apporte toutes son
              expertise en Data et IA dans la formation de la jeunesse.
            </p>
          </div>

          <!-- story 2 -->
          <div
            class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white"
          >
            <g-image
              alt="iot"
              src="~/assets/images/home/story/atut2020.png"
              class="object-cover w-full h-52 mb-0"
            />

            <p class="text-primary font-bold my-4 leading-tight text-xl mx-4">
              Africa TechUp Tour
            </p>
            <p class="text-gray-600 mb-4 mx-4 text-base">
              La campagne 2020, déjà lancée. Etudiants, mathématiciens,
              Statisticiens, Inscrivez vous
              <g-link href="#" class="underline text-blue-600">ici</g-link>.
            </p>
          </div>
        </div>

        <div class="md:flex md:space-x-6">
          <!-- story 3 -->
          <div
            class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white"
          >
            <g-image
              alt="iot"
              src="~/assets/images/home/story/sgmaroc.png"
              class="object-cover w-full h-52 mb-0"
            />

            <p class="text-primary font-bold my-4 leading-tight text-xl mx-4">
              SG Maroc imagine la banque du future avec l’IA
            </p>
            <p class="text-gray-600 mb-4 mx-4 text-base">
              Pendant une semaine, les experts RINTIO ont animé des ateliers de
              ... du Maroc.
            </p>
          </div>

          <!-- story 4 -->
          <div
            class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white"
          >
            <g-image
              alt="iot"
              src="~/assets/images/home/story/idermato.png"
              class="object-cover w-full h-52 mb-0"
            />

            <p class="text-primary font-bold my-4 leading-tight text-xl mx-4">
              iDermato : IA et Dermatologie
            </p>
            <p class="text-gray-600 mb-4 mx-4 text-base">
              Un projet Pan-Africain inédit. L’IA au service des dermatologues
              et généralistes pour le diagnostique d’affection cutanée sur peaux
              noires.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "~/assets/images/icons/arrow.svg";
import Like from "~/assets/images/icons/like.svg";
import Comment from "~/assets/images/icons/comment.svg";
import Share from "~/assets/images/icons/share.svg";

export default {
  components: {
    Arrow,
    Like,
    Comment,
    Share,
  },
};
</script>