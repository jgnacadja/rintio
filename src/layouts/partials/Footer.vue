<template>
  <div>
    <Contact />

    <footer class="bg-primary">
      <div
        class="max-w-6xl py-10 m-auto text-white flex flex-wrap justify-left items-center"
      >
        <!-- Col-1 -->
        <div class="p-5 w-full sm:w-4/12 md:w-3/12">
          <div class="w-10">
            <Logo />
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

        <!-- Col-2 -->
        <div class="p-5 w-full sm:w-4/12 md:w-3/12">
          <!-- Col Title -->
          <div class="uppercase text-white font-extrabold mb-6 font-openSans">
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

        <!-- Col-3 -->
        <div class="p-5 w-full sm:w-4/12 md:w-3/12">
          <!-- Col Title -->
          <div class="uppercase text-white font-extrabold mb-6 font-openSans">
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
        <div class="p-5 w-full sm:w-4/12 md:w-3/12">
          <div class="px-3 py-4 bg-white text-primary w-full h-full my-auto">
            <p class="uppercase font-bold mb-3">Newsletter</p>
            <form>
              <div class="flex mb-3">
                <input
                  type="email"
                  class="w-full pl-4 pr-3 py-2 border-2 border-gray-600 outline-none focus:border-primary text-black"
                />
              </div>
              <div>
                <button
                  class="block w-full bg-secondary text-white px-3 py-2 font-semibold"
                >
                  Je m’abonne
                </button>
              </div>
            </form>
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

export default {
  components: {
    Logo,
    Contact
  },
};
</script>
