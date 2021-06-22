<template>
  <div class="md:flex w-full mx-4 md:mx-0 md:text-left">
    <div class="md:px-20 md:w-1/2">
      <div class="flex">
        <div class="mx-auto">
          <div class="max-w-lg mx-auto my-10">
            <div class="mx-4 md:mx-0 pt-6">
              <h3 class="my-3 text-sm font-semibold text-primary uppercase">
                Contactez-nous
              </h3>
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
              <h2
                class="
                  my-3
                  text-xl
                  md:text-5xl
                  font-extrabold
                  text-primary
                "
              >
                Besoin d'échanger sur
                <span class="text-secondary">votre besoin ?</span>
              </h2>

              Toutes nos équipes au Bénin et et à l'international se tiennent à
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
                  <div>
                    <a class="hover:text-secondary" href="tel:+33 6 25 18 40 11"
                      >+33 6 25 18 40 11</a
                    >
                  </div>
                  <div>
                    <a class="hover:text-secondary" href="tel:+225 01 07 07 77"
                      >+225 01 07 07 77</a
                    >
                  </div>
                  <div>
                    <a class="hover:text-secondary" href="tel:+229 97 11 94 79"
                      >+229 97 11 94 79</a
                    >
                  </div>
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
                  <div>
                    <a
                      class="hover:text-secondary"
                      href="mailto:contact@rintio.com"
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
              <h3 class="my-3 text-lg md:text-3xl font-semibold text-gray-700">
                Envoyer nous un message
              </h3>
            </div>
            <div class="mx-4 md:m-7">
              <form id="form" name="form" @submit.prevent="sendEmail">
                <div class="mb-6">
                  <input
                    type="text"
                    v-model="name"
                    name="name"
                    id="name"
                    placeholder="Nom complet"
                    requiredmethods
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
                    v-model="email"
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
                    v-model="object"
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
                    v-model="message"
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
                <p class="text-base text-center" id="result"></p>
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
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  components: {
    Phone,
    Mail,
    Location,
  },
  data() {
    return {
      name: null,
      email: null,
      object: null,
      message: null,
    };
  },
  // methods: {
  //   sendEmail(e) {
  //     try {
  //       emailjs.sendForm('service_kcg1fpl', 'template_q2ewdb3', e.target, 'user_Y2KIJGmvuqmYVVqo9JBO8',
  //       {
  //         name: this.name,
  //         email: this.email,
  //         object: this.object,
  //         message: this.message
  //       })
  //     // document.getElementById("popup").style.display="block"

  //     } catch(error) {
  //         console.log({error})
  //     }
  //     // Reset form field
  //     this.name = ''
  //     this.email = ''
  //     this.object = ''
  //     this.message = ''
  //   },
  // }

  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_kcg1fpl",
          "template_q2ewdb3",
          e.target,
          "user_Y2KIJGmvuqmYVVqo9JBO8"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            document.getElementById("result").innerHTML =
              "<span style='color:green'>Votre message a été envoyé.</span>";
            // innerHTML="Votre message a été envoyé.";
            // Reset form field
            document.getElementById("form").reset();

            // document.forms["form"]["name"].value="";
            // document.forms["form"]["email"].value="";
            // document.forms["form"]["object"].value="";
            // document.forms["form"]["message"].value="";

            // this.name = ''
            // this.email = ''
            // this.object = ''
            // this.message = ''
          },
          (error) => {
            console.log("FAILED...", error);
            document.getElementById("result").innerHTML =
              "<span style='color:red'>Problème de connection, vérifiez votre connexion.</span>";
          }
        );
    },
  },
};
</script>
