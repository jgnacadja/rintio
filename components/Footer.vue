<template>
  <Contact />

  <footer class="bg-primary">
    <div
      class="flex flex-wrap w-full px-4 text-white md:flex lg:flex-nowrap sm:px-0 lg:px-4 md:px-0 md:mx-0 md:text-left"
    >
      <!-- Col-1: Logo + Social Links -->
      <div class="w-full p-5 sm:px-10 lg:px-20 lg:w-3/12">
        <div class="w-10">
          <NuxtImg src="/images/rintio-logo.svg" alt="Rintio" title="Rintio" class="w-10" />
        </div>

        <p class="mt-6 mb-4">Suivez nous sur :</p>
        <div class="flex gap-2">
          <a
            v-for="link in socialLinks"
            :key="link.href"
            :href="link.href"
            :aria-label="link.label"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-5 h-5 text-xs bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition"
          >
            <i :class="`fab fa-${link.icon}`"></i>
          </a>
        </div>
      </div>

      <!-- Col-2: Liens Utiles (Desktop) -->
      <div class="hidden w-full p-8 -my-5 md:block sm:p-4 md:p-4 lg:p-8 sm:w-3/12 lg:w-3/12 md:m-5">
        <div class="mb-6 font-extrabold text-white uppercase font-roboto">Liens utiles</div>

        <div class="-mt-8">
          <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
          <span class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"></span>
          <span class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"></span>
        </div>

        <NuxtLink
          v-for="link in usefulLinks"
          :key="link.href"
          :to="link.href"
          class="block w-full my-3 font-medium text-white duration-300 hover:text-gray-200"
        >
          &bull; {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Mobile Footer Col-1: Products Accordion -->
      <div class="w-full px-5 py-2 md:hidden">
        <button
          type="button"
          aria-expanded="openProducts"
          class="flex items-center justify-between w-full py-2 text-sm font-extrabold text-left text-white border-b border-white focus:outline-none font-roboto"
          @click="openProducts = !openProducts"
        >
          <span class="text-xl">Produits</span>
          <svg
            :class="openProducts ? 'transform rotate-180' : ''"
            class="w-5 h-5 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>

        <Transition name="accordion">
          <div v-if="openProducts" class="pt-2 pb-2">
            <NuxtLink
              v-for="product in products"
              :key="product.href"
              :to="product.href"
              class="block w-full my-3 font-medium text-white duration-300 hover:text-gray-200"
            >
              &bull; {{ product.label }}
            </NuxtLink>
          </div>
        </Transition>
      </div>

      <!-- Mobile Footer Col-2: Links Accordion -->
      <div class="w-full px-5 py-2 md:hidden">
        <button
          type="button"
          aria-expanded="openLinks"
          class="flex items-center justify-between w-full py-2 text-sm font-extrabold text-left text-white border-b border-white focus:outline-none font-roboto"
          @click="openLinks = !openLinks"
        >
          <span class="text-xl">Liens utiles</span>
          <svg
            :class="openLinks ? 'transform rotate-180' : ''"
            class="w-5 h-5 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>

        <Transition name="accordion">
          <div v-if="openLinks" class="pt-2 pb-2">
            <NuxtLink
              v-for="link in usefulLinks"
              :key="link.href"
              :to="link.href"
              class="block w-full my-3 font-medium text-white duration-300 hover:text-gray-200"
            >
              &bull; {{ link.label }}
            </NuxtLink>
          </div>
        </Transition>
      </div>

      <!-- Col-3: Newsletter -->
      <div
        class="w-full px-4 py-8 pr-4 -my-5 2xl:px-8 2xl:pr-16 md:px-2 sm:w-4/12 xl:w-3/12 lg:m-5"
      >
        <div class="h-auto">
          <div class="mb-3 text-red-light">Newsletter</div>
          <iframe
            class="mj-w-res-iframe"
            title="Newsletter Rintio"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://app.mailjet.com/widget/iframe/6ZFB/Kvk"
            width="100%"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="bg-secondary">
      <div class="px-3 py-4 m-auto font-bold text-center text-white">
        Rintio {{ currentYear }} © Tous droits réservés
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import Contact from '~/components/Contact.vue'

const openProducts = ref(false)
const openLinks = ref(false)

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  {
    href: 'https://web.facebook.com/RintioGroup/?_rdc=1&_rdr',
    icon: 'facebook-f',
    label: 'Facebook Rintio'
  },
  {
    href: 'https://www.linkedin.com/company/rintio/',
    icon: 'linkedin-in',
    label: 'LinkedIn Rintio'
  },
  {
    href: 'https://twitter.com/RintioGroup/',
    icon: 'twitter',
    label: 'Twitter Rintio'
  },
  {
    href: 'https://www.instagram.com/RintioGroup/',
    icon: 'instagram',
    label: 'Instagram Rintio'
  }
]

const products = [
  {
    href: 'https://coraq.formation.chmp.org',
    label: 'Coraq Lab - CHMP'
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.rintio.idermato&hl=fr&gl=US',
    label: 'Idermato'
  },
  {
    href: '#',
    label: 'Duniya Data'
  }
]

const usefulLinks = [
  {
    href: '#',
    label: 'Rintio Data Lab'
  },
  {
    href: '#',
    label: 'Rintio Innovative Factory'
  },
  {
    href: '#',
    label: 'Nos engagements'
  },
  {
    href: '#',
    label: 'Africa Tech Up Tour'
  }
]
</script>

<style scoped>
iframe {
  overflow: hidden;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.2s ease;
}

.accordion-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.accordion-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
