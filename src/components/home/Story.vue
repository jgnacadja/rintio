<template>
  <div class="items-center w-full justify-center py-6 md:py-24 md:px-20">
    <div class="text-center">
      <h2
        class="my-3 text-xl md:text-5xl font-extrabold text-primary"
      >
        Rintio<span class="text-secondary font-roboto"> story</span>
      </h2>
      <h4 class="md:w-1/2 mx-auto py-4">
        Vivez
        <span class="font-bold">
          notre parcours dans l'écosystème technologique</span
        >
        à travers nos actions.
      </h4>
    </div>

    <div class="md:flex container mx-auto space-x-0 md:space-x-6 w-full">
      <!-- main story -->
      <div
        class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-1/2 relative block bg-white"
      >
        <g-image
          alt="coraq"
          title="Coraq Chmp"
          src="~/assets/images/home/story/coraq.png"
          class="object-cover w-full mb-0"
        />

        <h3 class="text-primary font-bold my-4 leading-tight text-xl mx-4">
          RINTIO renforce sa stratégie d’appui des formations en ligne en
          mettant en production la plateforme E-learrning Coraq Lab
        </h3>
        <p class="text-gray-600 font-light mb-4 mx-4 text-base">
          Dans la vision d’ apporter des solutions innovantes aux Entreprises et
          Institutions en communiant les technologies du numérique aux grands
          enjeux de nos sociétés, RINTIO vient de mettre en production la
          plateforme Coraq-Lab :Cela constitue pour RINTIO un grand pas en avant
          dans sa stratégie d’appui des formations en ligne.
        </p>
      </div>

      <!-- sub-main story -->
      <div class="w-full md:w-1/2 md:space-y-6">
        <div class="md:flex md:space-x-6">
          <!-- story 1 -->
          <div
            class="
              mb-4
              lg:mb-0
              p-4
              lg:p-0
              w-full
              md:w-1/2
              relative
              block
              bg-white
            "
          >
            <g-image
              alt="Atut"
              title="Africa TechUp Tour"
              src="~/assets/images/home/story/atut.png"
              class="object-cover w-full h-52 mb-0"
            />

            <h3 class="text-primary font-bold my-4 leading-tight text-xl mx-4">
              Africa TechUp Tour
            </h3>
            <p class="text-gray-600 font-light mb-4 mx-4 text-base">
              Rintio, co-organisateur du Africa TechUp Tour apporte toutes son
              expertise en Data et IA dans la formation de la jeunesse.
            </p>
          </div>

          <!-- story 2 -->
          <div
            class="
              mb-4
              lg:mb-0
              p-4
              lg:p-0
              w-full
              md:w-1/2
              relative
              block
              bg-white
            "
          >
            <g-image
              alt="atut2020"
              title="Africa TechUp Tour 2020"
              src="~/assets/images/home/story/atut2020.png"
              class="object-cover w-full h-52 mb-0"
            />

            <h3 class="text-primary font-bold my-4 leading-tight text-xl mx-4">
              Africa TechUp Tour
            </h3>
            <p class="text-gray-600 font-light mb-4 mx-4 text-base">
              La campagne 2020, déjà lancée. Etudiants, mathématiciens,
              Statisticiens, Inscrivez vous
              <g-link href="#" class="underline text-blue-600">ici</g-link>.
            </p>
          </div>
        </div>

        <div class="md:flex md:space-x-6">
          <!-- story 3 -->
          <div
            class="
              mb-4
              lg:mb-0
              p-4
              lg:p-0
              w-full
              md:w-1/2
              relative
              block
              bg-white
            "
          >
            <g-image
              alt="sgmaroc"
              title="Team sgmaroc"
              src="~/assets/images/home/story/sgmaroc.png"
              class="object-cover w-full h-52 mb-0"
            />

            <h3 class="text-primary font-bold my-4 leading-tight text-xl mx-4">
              SG Maroc imagine la banque du future avec l’IA
            </h3>
            <p class="text-gray-600 font-light mb-4 mx-4 text-base">
              Pendant une semaine, les experts RINTIO ont animé des ateliers de
              ... du Maroc.
            </p>
          </div>

          <!-- story 4 -->
          <div
            class="
              mb-4
              lg:mb-0
              p-4
              lg:p-0
              w-full
              md:w-1/2
              relative
              block
              bg-white
            "
          >
            <g-image
              alt="idermato"
              title="IA et Dermatologie"
              src="~/assets/images/home/story/idermato.png"
              class="object-cover w-full h-52 mb-0"
            />

            <h3 class="text-primary font-bold my-4 leading-tight text-xl mx-4">
              iDermato : IA et Dermatologie
            </h3>
            <p class="text-gray-600 font-light mb-4 mx-4 text-base">
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