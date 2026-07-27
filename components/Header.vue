<template>
  <header class="bg-white shadow-md">
    <!-- Desktop Header -->
    <div class="hidden lg:flex justify-between items-center h-24 px-10">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">
        <NuxtImg
          src="/images/rintio.svg"
          alt="Rintio.com"
          title="Rintio"
          class="w-44"
          width="179"
          height="48"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="flex gap-0" aria-label="Navigation principale">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :class="[
            'w-40 text-center py-10 font-bold uppercase font-openSans',
            'border-b-2 border-transparent transition duration-300',
            'hover:border-secondary',
            route.path === item.path && 'border-secondary text-secondary'
          ]"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>

    <!-- Mobile Header -->
    <div class="lg:hidden flex justify-between items-center p-3">
      <!-- Logo Mobile -->
      <NuxtLink to="/" class="flex items-center">
        <NuxtImg
          src="/images/rintio.svg"
          alt="Rintio.com"
          title="Rintio"
          class="w-32"
          width="179"
          height="48"
        />
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button
        @click="openMenu = !openMenu"
        class="flex items-center p-3 text-gray-600"
        aria-label="Ouvrir le menu"
        :aria-expanded="openMenu"
        aria-controls="mobile-menu-panel"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Panel -->
    <Transition name="slide">
      <div
        v-if="openMenu"
        id="mobile-menu-panel"
        class="fixed inset-y-0 right-0 z-40 w-full h-full overflow-y-auto bg-white lg:hidden"
      >
        <!-- Close Button -->
        <div class="flex justify-end p-3">
          <button
            @click="openMenu = !openMenu"
            class="flex items-center text-gray-600"
            aria-label="Fermer le menu"
            :aria-expanded="openMenu"
            aria-controls="mobile-menu-panel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <nav class="space-y-2 mt-6 mx-4" aria-label="Navigation mobile">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'block w-full text-left py-4 font-bold uppercase font-openSans',
              'border-b-2 border-transparent transition duration-300',
              'hover:border-secondary',
              route.path === item.path && 'border-secondary text-secondary'
            ]"
            @click="openMenu = false"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Social Links Mobile -->
        <div class="absolute flex gap-2 pl-3 bottom-5">
          <a
            v-for="link in socialLinks"
            :key="link.href"
            :href="link.href"
            :aria-label="`${link.label} (nouvel onglet)`"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-10 h-10 text-lg text-gray-600 bg-white border border-gray-600 rounded-full hover:bg-secondary hover:text-white hover:border-secondary transition"
          >
            <i :class="`fab fa-${link.icon}`" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const openMenu = ref(false)

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'A propos' },
  { path: '/offres', label: 'Nos offres' },
  { path: '/blog', label: 'Blog' }
]

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
  }
]
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
