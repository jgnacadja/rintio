<template>
  <div>
    <Contact />

    <footer class="bg-primary">
      <div></div>
      <div
        class="flex-wrap w-full px-4 text-white md:flex lg:flex-nowrap sm:px-0 lg:px-4 md:px-0 md:mx-0 md:text-left"
      >
        <!-- Col-1 -->
        <div class="w-full p-5 sm:px-10 lg:px-20 lg:w-3/12">
          <div class="w-10">
            <Logo />
          </div>

          <p class="mt-6 mb-4">Suivez nous sur :</p>
            <div class="flex">
              <a
                class="flex items-center w-5 h-5 mr-2 text-xs bg-white rounded-full place-content-center text-primary"
                href="https://web.facebook.com/RintioGroup/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener"
              >
                <em class="fab fa-facebook-f"></em>
              </a>
              <a
                class="flex items-center w-5 h-5 mr-2 text-xs bg-white rounded-full place-content-center text-primary"
                href="https://www.linkedin.com/company/rintio/"
                target="_blank"
                rel="noopener"
              >
                <em class="relative fab fa-linkedin-in"></em>
              </a>
              <a
                class="flex items-center w-5 h-5 mr-2 text-xs bg-white rounded-full place-content-center text-primary"
                href="https://twitter.com/RintioGroup/"
                target="_blank"
                rel="noopener"
              >
                <em class="relative fab fa-twitter"></em>
              </a>
              <a
                class="flex items-center w-5 h-5 mr-2 text-xs bg-white rounded-full place-content-center text-primary"
                href="https://twitter.com/RintioGroup/"
                target="_blank"
                rel="noopener"
              >
                <em class="relative fab fa-instagram"></em>
              </a>
            </div>
        </div>

        <!-- Col-2 -->
        <div
          class="hidden w-full p-8 -my-5 md:block sm:p-4 md:p4 lg:p-8 sm:w-3/12 lg:w-3/12 md:m-5"
        >
          <!-- Col Title -->
          <div class="mb-6 font-extrabold text-white uppercase font-roboto">
            Produits
          </div>
          <!-- Title Dot -->
          <div class="-mt-8">
            <span
              class="inline-block w-20 h-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
            ></span>
          </div>

          <!-- Links -->
          <a
            href="https://coraq.formation.chmp.org"
            class="block w-full my-3 font-medium text-white duration-300 hover:text-gray-200"
          >
            &bull; Coraq Lab - CHMP
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.rintio.idermato&hl=fr&gl=US"
            class="block my-3 font-medium text-white duration-300 hover:text-gray-200"
          >
            &bull; Idermato
          </a>
          <a
            href="#"
            class="block my-3 font-medium text-white duration-300 hover:text-gray-300"
          >
            &bull; Duniya Data
          </a>
        </div>

        <!-- Col-3 -->
        <div
          class="hidden w-full p-8 -my-5 md:block sm:p-4 md:p4 lg:p-8 sm:w-3/12 lg:w-3/12 md:m-5"
        >
          <!-- Col Title -->
          <div class="mb-6 font-extrabold text-white uppercase font-roboto">
            Liens utiles
          </div>
          <!-- Title Dot -->
          <div class="-mt-8">
            <span
              class="inline-block w-20 h-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
            ></span>
            <span
              class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
            ></span>
          </div>

          <!-- Links -->
          <a
            href="#"
            class="block w-full my-3 font-medium text-white duration-300 hover:text-gray-200"
          >
            &bull; Rintio Data Lab
          </a>
          <a
            href="#"
            class="block my-3 font-medium text-white duration-300 hover:text-gray-200"
          >
            &bull; Rintio Innovative Factory
          </a>
          <a
            href="#"
            class="block my-3 font-medium text-white duration-300 hover:text-gray-300"
          >
            &bull; Nos engagements
          </a>
          <a
            href="#"
            class="block my-3 font-medium text-white duration-300 hover:text-gray-300"
          >
            &bull; Africa Tech Up Tour
          </a>
        </div>

        <!-- mobile footer col-1 -->
        <div class="w-full px-5 py-2 mx-auto md:hidden">
          <button
            type="button"
            aria-expanded="true"
            class="flex items-center justify-between w-full py-2 text-sm font-extrabold text-left text-white border-b border-white focus:outline-none font-roboto"
            aria-controls="headlessui-disclosure-panel-2"
            @click="(openProducts = !openProducts), (openLinks = false)"
          >
            <span class="text-xl">Produits</span>
            <ChevronUp :class="openProducts ? 'transform rotate-180' : ''" />
          </button>

          <div
            class="pt-2 pb-2 transition ease-out transform"
            :class="
              openProducts
                ? 'scale-100 opacity-100 delay-100 duration-100'
                : 'scale-95 opacity-0 duration-75'
            "
          >
            <!-- Links -->
            <a
              href="https://coraq.formation.chmp.org"
              class="block w-full my-3 font-medium text-white duration-300 hover:text-gray-200"
              :class="!openProducts ? 'hidden' : ''"
            >
              &bull; Coraq Lab - CHMP
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.rintio.idermato&hl=fr&gl=US"
              class="block my-3 font-medium text-white duration-300 hover:text-gray-200"
              :class="!openProducts ? 'hidden' : ''"
            >
              &bull; Idermato
            </a>
            <a
              href="#"
              class="block my-3 font-medium text-white duration-300 hover:text-gray-300"
              :class="!openProducts ? 'hidden' : ''"
            >
              &bull; Duniya Data
            </a>
          </div>
        </div>

        <!-- mobile footer col-1 -->
        <div class="w-full px-5 py-2 md:hidden">
          <button
            type="button"
            aria-expanded="true"
            class="flex items-center justify-between w-full py-2 text-sm font-extrabold text-left text-white border-b border-white focus:outline-none font-roboto"
            aria-controls="headlessui-disclosure-panel-2"
            @click="(openLinks = !openLinks), (openProducts = false)"
          >
            <span class="text-xl">Liens utiles</span>
            <ChevronUp :class="openLinks ? 'transform rotate-180' : ''" />
          </button>

          <div
            class="pt-2 pb-2 transition ease-out transform"
            :class="
              openLinks
                ? 'scale-100 opacity-100 delay-100 duration-100'
                : 'scale-95 opacity-0 duration-75'
            "
          >
            <!-- Links -->
            <a
              href="#"
              class="block w-full my-3 font-medium text-white duration-300 hover:text-gray-200"
              :class="!openLinks ? 'hidden' : ''"
            >
              &bull; Rintio Data Lab
            </a>
            <a
              href="#"
              class="block my-3 font-medium text-white duration-300 hover:text-gray-200"
              :class="!openLinks ? 'hidden' : ''"
            >
              &bull; Rintio Innovative Factory
            </a>
            <a
              href="#"
              class="block my-3 font-medium text-white duration-300 hover:text-gray-300"
              :class="!openLinks ? 'hidden' : ''"
            >
              &bull; Nos engagements
            </a>
            <a
              href="#"
              class="block my-3 font-medium text-white duration-300 hover:text-gray-300"
              :class="!openLinks ? 'hidden' : ''"
            >
              &bull; Africa Tech Up Tour
            </a>
          </div>
        </div>

        <!-- Col-4 -->
        <div
          class="w-full px-4 py-8 pr-4 -my-5 2xl:px-8 2xl:pr-16 md:px-2 sm:w-4/12 xl:w-3/12 lg:m-5"
        >
          <div class="h-auto">
            <div class="mb-3 text-red-light">Newsletter</div>
            <iframe class="mj-w-res-iframe" title="Newsletter" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/6ZFB/Ki4" width="100%"></iframe>
          </div>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div class="bg-secondary">
        <div class="px-3 py-4 m-auto font-bold text-center text-white">
          Rintio 2019 © Tous droits réservés
        </div>
      </div>
    </footer>
  </div>
</template>

<script
  type="text/javascript"
  src="https://app.mailjet.com/statics/js/iframeResizer.min.js"
></script>

<script>
import Logo from "./Logo";
import Contact from "~/components/Contact.vue";
import Send from "~/assets/images/icons/send.svg";
import ChevronUp from "~/assets/images/icons/chevronup.svg";

export default {
  components: {
    Logo,
    Contact,
    Send,
    ChevronUp,
  },
  data() {
    return {
      openProducts: false,
      openLinks: false,
    };
  },
};
</script>
