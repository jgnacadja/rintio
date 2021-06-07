<template>
  <div class="md:flex w-full mx-4 md:mx-0 md:text-left">
    <div class="md:px-20 md:w-1/2">
      <div class="flex">
        <div class="mx-auto">
          <div class="max-w-lg mx-auto my-10">
            <div class="mx-4 md:mx-0 pt-6">
              <h1 class="my-3 text-sm font-semibold text-primary uppercase">
                Contactez-nous
              </h1>
              <!-- Title Dot -->
              <div class="-mt-3">
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
            </div>

            <div class="mx-4 md:mx-0 pt-6">
              <h1
                class="
                  my-3
                  text-xl
                  md:text-5xl
                  font-extrabold
                  text-primary
                  capitalize
                "
              >
                Besoin d'échanger sur
                <span class="text-secondary">votre besoin ?</span>
              </h1>

              Toutes nos équipes au BENIN et et à l'international se tiennent à
              votre disposition !
            </div>

            <div>
              <div class="flex p-4 items-center">
                <div class="w-2/12 text-center">
                  <button
                    class="
                      uppercase
                      p-3
                      flex
                      items-center
                      bg-secondary
                      max-w-max
                      bg-opacity-10
                      rounded-full
                      w-12
                      h-12
                      pointer-events-none
                    "
                  >
                    <Phone />
                  </button>
                </div>
                <div class="w-10/12 px-4 md:px-0">
                  <div>+33 6 25 18 40 11</div>
                  <div>+225 01 07 07 77</div>
                  <div>+229 97 11 94 79</div>
                </div>
              </div>

              <div class="flex p-4 items-center">
                <div class="w-2/12 text-center">
                  <button
                    class="
                      uppercase
                      p-3
                      flex
                      items-center
                      bg-secondary
                      text-secondary
                      max-w-max
                      bg-opacity-10
                      rounded-full
                      w-12
                      h-12
                      pointer-events-none
                    "
                  >
                    <Mail />
                  </button>
                </div>
                <div class="w-10/12 px-4 md:px-0">
                  <div>contact@rintio.com</div>
                </div>
              </div>

              <div class="flex p-4 items-center">
                <div class="w-2/12 text-center">
                  <button
                    class="
                      uppercase
                      p-3
                      flex
                      items-center
                      bg-secondary
                      text-secondary
                      max-w-max
                      bg-opacity-10
                      rounded-full
                      w-12
                      h-12
                      pointer-events-none
                    "
                  >
                    <Location />
                  </button>
                </div>
                <div class="w-10/12 px-4 md:px-0">
                  <div>
                    17 Rue Creval Duval, Ruel Malmaison Region Paris/ île de
                    France.
                  </div>
                  <div>Abidjan.</div>
                  <div>
                    Carrefour Zogbo, face BOA Bénin imeuble LNB, 1er étage,
                    Cotonou
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:px-32 md:w-1/2">
      <!-- Contact Form -->
      <div class="flex items-center">
        <div class="container mx-auto">
          <div
            class="
              max-w-lg
              mx-auto
              my-10
              bg-white
              p-5
              rounded-sm
              shadow-md
              md:shadow-xl
              min-h-0
            "
          >
            <div class="mx-4 md:m-7">
              <h1 class="my-3 text-lg md:text-3xl font-semibold text-gray-700">
                Envoyer nous un message
              </h1>
            </div>
            <div class="mx-4 md:m-7">
              <form id="form">
                <div class="mb-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nom complet"
                    required
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-sm
                      focus:outline-none
                      focus:ring focus:ring-indigo-100
                      focus:border-indigo-300
                    "
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-sm
                      focus:outline-none
                      focus:ring focus:ring-indigo-100
                      focus:border-indigo-300
                    "
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    name="object"
                    id="object"
                    placeholder="Objet"
                    required
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-sm
                      focus:outline-none
                      focus:ring focus:ring-indigo-100
                      focus:border-indigo-300
                    "
                  />
                </div>
                <div class="mb-6">
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Message"
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-sm
                      focus:outline-none
                      focus:ring focus:ring-indigo-100
                      focus:border-indigo-300
                    "
                    required
                  ></textarea>
                </div>
                <div class="mb-6">
                  <button
                    type="submit"
                    class="
                      w-full
                      px-3
                      py-2
                      md:py-4
                      text-white text-base
                      md:text-xl
                      bg-secondary
                      rounded-sm
                      focus:bg-secondary
                      focus:outline-none
                    "
                  >
                    Envoyer
                  </button>
                </div>
                <p class="text-base text-center text-gray-400" id="result"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Phone from "~/assets/images/icons/phone.svg";
import Mail from "~/assets/images/icons/envelope.svg";
import Location from "~/assets/images/icons/maps-and-flags.svg";

export default {
  components: {
    Phone,
    Mail,
    Location,
  },
};
</script>
