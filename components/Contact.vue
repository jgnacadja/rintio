<template>
  <div class="w-full px-4 justify-evenly md:px-0 md:text-left">
    <div
      class="md:grid gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:grid-flow-row xl:grid-flow-rows"
    >
      <div class="col-span-2 sm:col-span-1 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1">
        <div class="sm:px-8 lg:px-10">
          <div>
            <div class="mx-auto">
              <div class="max-w-lg mx-auto my-10">
                <div class="pt-6 mx-4 md:mx-0">
                  <p class="my-3 text-sm font-semibold uppercase text-primary">Contactez-nous</p>
                  <!-- Title Dot -->
                  <div class="-mt-3">
                    <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
                    <span class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"></span>
                    <span class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"></span>
                  </div>
                </div>

                <div class="pt-6 mx-4 md:mx-0">
                  <h2 class="my-3 text-2xl font-extrabold md:text-5xl text-primary">
                    Besoin d'échanger sur
                    <span class="text-secondary">votre besoin ?</span>
                  </h2>

                  Toutes nos équipes au Bénin et à l'international se tiennent à votre disposition !
                </div>

                <div>
                  <div class="flex items-center p-4">
                    <div class="w-2/12 text-center">
                      <button
                        tabindex="-1"
                        aria-hidden="true"
                        class="flex items-center w-12 h-12 p-3 uppercase rounded-full pointer-events-none bg-secondary max-w-max bg-opacity-10"
                      >
                        <NuxtImg
                          src="/images/icons/phone.svg"
                          alt=""
                          class="w-5 h-5"
                          width="50"
                          height="40"
                        />
                      </button>
                    </div>
                    <div class="w-10/12 px-4 md:px-0">
                      <div>
                        <a class="hover:text-secondary" href="tel:+33 6 27 54 50 21"
                          >+33 6 27 54 50 21</a
                        >
                      </div>
                      <div>
                        <a class="hover:text-secondary" href="tel:+225 01 07 07 77"
                          >+225 01 07 07 77</a
                        >
                      </div>
                      <div>
                        <a class="hover:text-secondary" href="tel:+229 97 10 49 64"
                          >+229 97 10 49 64</a
                        >
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center p-4">
                    <div class="w-2/12 text-center">
                      <button
                        tabindex="-1"
                        aria-hidden="true"
                        class="flex items-center w-12 h-12 p-3 uppercase rounded-full pointer-events-none bg-secondary text-secondary max-w-max bg-opacity-10"
                      >
                        <NuxtImg
                          src="/images/icons/envelope.svg"
                          alt=""
                          class="w-5 h-5"
                          width="50"
                          height="32"
                        />
                      </button>
                    </div>
                    <div class="w-10/12 px-4 md:px-0">
                      <div>
                        <a class="hover:text-secondary" href="mailto:contact@rintio.com"
                          >contact@rintio.com</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1">
        <div class="sm:px-8 lg:px-5">
          <!-- Contact Form -->
          <div class="items-center">
            <div class="mx-auto">
              <div
                id="formulaire"
                class="max-w-lg min-h-0 p-5 mx-auto my-10 bg-white rounded-sm shadow-md md:shadow-xl"
              >
                <div class="mx-4 md:m-7">
                  <h2 class="my-3 text-lg font-semibold text-gray-700 md:text-3xl">
                    Envoyer nous un message
                  </h2>
                </div>
                <div class="mx-4 md:m-7">
                  <form id="form" name="form" @submit.prevent="sendEmail">
                    <div class="mb-6">
                      <label for="name" class="sr-only">Nom complet</label>
                      <input
                        type="text"
                        v-model="form.name"
                        name="name"
                        id="name"
                        placeholder="Nom complet"
                        required
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                    <div class="mb-6">
                      <label for="email" class="sr-only">Email</label>
                      <input
                        type="email"
                        v-model="form.email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                    <div class="mb-6">
                      <label for="object" class="sr-only">Objet</label>
                      <input
                        type="text"
                        v-model="form.object"
                        name="object"
                        id="object"
                        placeholder="Objet"
                        required
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      />
                    </div>
                    <div class="mb-6">
                      <label for="message" class="sr-only">Message</label>
                      <textarea
                        rows="5"
                        v-model="form.message"
                        name="message"
                        id="message"
                        placeholder="Message"
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                        required
                      ></textarea>
                    </div>
                    <div class="mb-6">
                      <button
                        type="submit"
                        :disabled="status === 'loading'"
                        class="w-full px-3 py-2 text-base text-white rounded-sm md:py-4 md:text-xl bg-secondary focus:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                      >
                        {{ status === 'loading' ? 'Envoi...' : 'Envoyer' }}
                      </button>
                    </div>
                    <p class="text-base text-center" id="result" :class="color" v-if="result">
                      {{ result }}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: null,
  email: null,
  object: null,
  message: null
})
const result = ref(null)
const color = ref(null)
const status = ref('idle')

const resetForm = () => {
  form.value = {
    name: null,
    email: null,
    object: null,
    message: null
  }
}

const sendEmail = async () => {
  if (status.value === 'loading') return

  status.value = 'loading'
  result.value = null
  color.value = null

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    result.value = 'Votre message a été envoyé'
    color.value = 'text-green-500'
    status.value = 'success'
    resetForm()
  } catch (error) {
    result.value = 'Une erreur est survenue, veuillez réessayer'
    color.value = 'text-red-500'
    status.value = 'error'
  }
}
</script>
