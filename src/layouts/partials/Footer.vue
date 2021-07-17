<template>
  <div>
    <Contact />

    <footer class="bg-primary">
      <div class="text-white md:flex w-full px-4 md:px-0 md:mx-0 md:text-left">
        <!-- Col-1 -->
        <div class="md:px-20 p-5 w-full sm:w-4/12 md:w-3/12">
          <div class="w-10">
            <Logo />
          </div>
        </div>

        <!-- Col-2 -->
        <div class="-my-5 p-8 w-full sm:w-4/12 md:w-3/12 md:m-5">
          <!-- Col Title -->
          <div class="uppercase text-white font-extrabold mb-6 font-roboto">
            Produits
          </div>
          <!-- Title Dot -->
          <div class="-mt-8">
            <span
              class="inline-block w-20 h-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
            ></span>
            <span
              class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
            ></span>
          </div>

          <!-- Links -->
          <a
            href="https://coraq.formation.chmp.org"
            class="w-full my-3 block text-white hover:text-gray-200 font-medium duration-300"
          >
            &bull; Coraq Lab - CHMP
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.rintio.idermato&hl=fr&gl=US"
            class="my-3 block text-white hover:text-gray-200 font-medium duration-300"
          >
            &bull; Idermato
          </a>
          <a
            href="#"
            class="my-3 block text-white hover:text-gray-300 font-medium duration-300"
          >
            &bull; Duniya Data
          </a>
        </div>

        <!-- Col-3 -->
        <div class="-my-5 p-8 w-full sm:w-4/12 md:w-3/12 md:m-5">
          <!-- Col Title -->
          <div class="uppercase text-white font-extrabold mb-6 font-roboto">
            Liens utiles
          </div>
          <!-- Title Dot -->
          <div class="-mt-8">
            <span
              class="inline-block w-20 h-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
            ></span>
            <span
              class="inline-block w-2 h-2 rounded-full bg-secondary ml-2"
            ></span>
          </div>

          <!-- Links -->
          <a
            href="#"
            class="w-full my-3 block text-white hover:text-gray-200 font-medium duration-300"
          >
            &bull; Rintio Data Lab
          </a>
          <a
            href="#"
            class="my-3 block text-white hover:text-gray-200 font-medium duration-300"
          >
            &bull; Rintio Innovative Factory
          </a>
          <a
            href="#"
            class="my-3 block text-white hover:text-gray-300 font-medium duration-300"
          >
            &bull; Nos engagements
          </a>
          <a
            href="#"
            class="my-3 block text-white hover:text-gray-300 font-medium duration-300"
          >
            &bull; Africa Tech Up Tour
          </a>
        </div>

        <!-- Col-4 -->
        <div class="-my-5 p-8 w-full sm:w-4/12 md:w-3/12 md:m-5">
          <div class="h-auto">
            <div class="text-red-light mb-3">Newsletter</div>
            <div class="flex mt-4" v-res>
              <input
                type="text"
                class="w-full md:w-auto p-2 border border-grey-light round text-grey-dark text-sm h-auto rounded-l-sm text-gray-700 focus:outline-none"
                placeholder="Votre adresse"
              />
              <button
                class="bg-orange text-white rounded-r-sm h-auto text-xs p-3 bg-secondary px-3 py-2 font-semibold focus:outline-none"
              >
                <span class="hidden md:block">Je m'abonne</span>
                <Send class="md:hidden" />
              </button>
            </div>
            <p class="mt-6 mb-4">Suivez nous sur :</p>
            <div class="flex">
              <a
                class="w-5 h-5 mr-2 flex items-center place-content-center rounded-full bg-white text-primary text-xs"
                href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="w-5 h-5 mr-2 flex items-center place-content-center rounded-full bg-white text-primary text-xs"
                href="https://www.linkedin.com/company/rintio/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in relative"></i>
              </a>
              <a
                class="w-5 h-5 mr-2 flex items-center place-content-center rounded-full bg-white text-primary text-xs"
                href="https://twitter.com/RintioGroup/"
                target="_blank"
              >
                <i class="fab fa-twitter relative"></i>
              </a>
              <a
                class="w-5 h-5 mr-2 flex items-center place-content-center rounded-full bg-white text-primary text-xs"
                href="https://twitter.com/RintioGroup/"
                target="_blank"
              >
                <i class="fab fa-instagram relative"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div class="bg-secondary">
        <div class="px-3 m-auto py-4 font-bold text-white text-center">
          Rintio 2019 © Tous droits réservés
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "./Logo";
import Contact from "~/components/Contact.vue";
import Send from "~/assets/images/icons/send.svg";

export default {
  components: {
    Logo,
    Contact,
    Send
  },
};
</script>
