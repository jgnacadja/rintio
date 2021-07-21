<template>
  <div>
    <!---->

    <div class="md:px-20 md:flex w-full justify-center py-6 md:py-24">
      <div class="w-full mx-auto mb-8 md:mb-0">
        <div class="mx-4 md:mx-0 text-center">
          <h1
            class="
              pb-8
              text-xl
              md:text-5xl
              font-extrabold
              capitalize
              text-primary
            "
          >
            Nos
            <span class="text-secondary"> experts</span>
          </h1>

          <p class="my-3 md:w-1/2 mx-auto">
            Rintio est composé d’une équipe professionnelle et dynamique et d’un
            réseau de partenaire qui n’ont qu’un seul objectif:
            <span class="font-bold"
              >donner vie à vos projets en respectant les deadlines.</span
            >
          </p>
          <!---->

          <div class="mt-12 -mx-3 flex flex-wrap items-start">
            <div
              class="px-3 w-full sm:w-1/2 lg:w-1/4"
              v-for="expert in list"
              :key="expert"
            >
              <div
                class="
                  w-full
                  mx-auto
                  rounded-lg
                  bg-white
                  border border-gray-200
                  p-5
                  text-gray-800
                  font-light
                  mb-6
                "
                
              >
                <div class="w-full flex flex-row items-center">
                  <div class="w-1/3">
                    <div
                      class="
                        overflow-hidden
                        w-24
                        rounded-full
                        h-24
                        mb-4
                        bg-gray-50
                        border border-gray-200
                        items-center
                        justify-center
                        mx-auto
                      "
                    >
                      <g-image
                        :src="expert.imgUrl"
                        :alt="expert.imgAlt"
                      ></g-image>
                    </div>
                    <span class="inline-flex">
                      <a
                        class="
                          w-5
                          h-5
                          mr-2
                          flex
                          items-center
                          place-content-center
                          rounded-full
                          border
                          hover:border-none
                          text-primary text-xs
                          hover:bg-secondary
                          hover:text-white
                        "
                        :href="expert.linkedInUrl"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in relative"></i>
                      </a>
                    </span>
                  </div>

                  <div class="flex-grow w-2/3 pl-4 sm:pl-5 lg:pl-4 text-left">
                    <h6 class="font-bold text-sm uppercase text-gray-600 mb-4">
                      Mike.
                    </h6>
                    <p class="text-xs mb-2">• PhD Informatique</p>
                    <p class="text-xs mb-2">
                      • Data Architect, Cloud & DevOps Engineer
                    </p>
                    <p class="text-xs mb-2">
                      • +10 Ans d'Expériences : AXA, Amadeus, Orange
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 w-full sm:w-1/2 lg:w-1/4">
              <div
                class="
                  w-full
                  mx-auto
                  rounded-lg
                  bg-white
                  border border-gray-200
                  p-5
                  text-gray-800
                  font-light
                  mb-6
                "
              >
                <div class="w-full flex flex-row items-center">
                  <div class="w-1/3">
                    <div
                      class="
                        overflow-hidden
                        w-24
                        rounded-full
                        h-24
                        mb-4
                        bg-gray-50
                        border border-gray-200
                        items-center
                        justify-center
                        mx-auto
                      "
                    >
                      <g-image
                        src="~/assets/images/icons/expert.svg"
                        alt=""
                      ></g-image>
                    </div>
                    <span class="inline-flex">
                      <a
                        class="
                          w-5
                          h-5
                          mr-2
                          flex
                          items-center
                          place-content-center
                          rounded-full
                          border
                          hover:border-none
                          text-primary text-xs
                          hover:bg-secondary
                          hover:text-white
                        "
                        href="https://www.linkedin.com/company/rintio/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in relative"></i>
                      </a>
                    </span>
                  </div>
                  <div class="flex-grow w-2/3 pl-4 sm:pl-5 lg:pl-4 text-left">
                    <h6 class="font-bold text-sm uppercase text-gray-600 mb-4">
                      Carlyna.
                    </h6>
                    <p class="text-xs mb-2">• PhD Informatique</p>
                    <p class="text-xs mb-2">• Data Engineer</p>
                    <p class="text-xs mb-2">
                      • +5 Ans d'Expériences : Ysance, Inria
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 w-full sm:w-1/2 lg:w-1/4">
              <div
                class="
                  w-full
                  mx-auto
                  rounded-lg
                  bg-white
                  border border-gray-200
                  p-5
                  text-gray-800
                  font-light
                  mb-6
                "
              >
                <div class="w-full flex flex-row items-center">
                  <div class="w-1/3">
                    <div
                      class="
                        overflow-hidden
                        w-24
                        rounded-full
                        h-24
                        mb-4
                        bg-gray-50
                        border border-gray-200
                        items-center
                        justify-center
                        mx-auto
                      "
                    >
                      <g-image
                        src="~/assets/images/icons/expert.svg"
                        alt=""
                      ></g-image>
                    </div>
                    <span class="inline-flex">
                      <a
                        class="
                          w-5
                          h-5
                          mr-2
                          flex
                          items-center
                          place-content-center
                          rounded-full
                          border
                          hover:border-none
                          text-primary text-xs
                          hover:bg-secondary
                          hover:text-white
                        "
                        href="https://www.linkedin.com/company/rintio/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in relative"></i>
                      </a>
                    </span>
                  </div>
                  <div class="flex-grow w-2/3 pl-4 sm:pl-5 lg:pl-4 text-left">
                    <h6 class="font-bold text-sm uppercase text-gray-600 mb-4">
                      Habib.
                    </h6>
                    <p class="text-xs mb-2">• PhD Informatique</p>
                    <p class="text-xs mb-2">
                      • Data Scientist , Project Manager
                    </p>
                    <p class="text-xs mb-2">
                      • +7 Ans d'Expériences : Ericsson, Orange, Bouygues
                      Telecom
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 w-full sm:w-1/2 lg:w-1/4">
              <div
                class="
                  w-full
                  mx-auto
                  rounded-lg
                  bg-white
                  border border-gray-200
                  p-5
                  text-gray-800
                  font-light
                  mb-6
                "
              >
                <div class="w-full flex flex-row items-center">
                  <div class="w-1/3">
                    <div
                      class="
                        overflow-hidden
                        w-24
                        rounded-full
                        h-24
                        mb-4
                        bg-gray-50
                        border border-gray-200
                        items-center
                        justify-center
                        mx-auto
                      "
                    >
                      <g-image
                        src="~/assets/images/icons/expert.svg"
                        alt=""
                      ></g-image>
                    </div>
                    <span class="inline-flex">
                      <a
                        class="
                          w-5
                          h-5
                          mr-2
                          flex
                          items-center
                          place-content-center
                          rounded-full
                          border
                          hover:border-none
                          text-primary text-xs
                          hover:bg-secondary
                          hover:text-white
                        "
                        href="https://www.linkedin.com/company/rintio/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in relative"></i>
                      </a>
                    </span>
                  </div>
                  <div class="flex-grow w-2/3 pl-4 sm:pl-5 lg:pl-4 text-left">
                    <h6 class="font-bold text-sm uppercase text-gray-600 mb-4">
                      Talla.
                    </h6>
                    <p class="text-xs mb-2">• Ingénieur Informatique</p>
                    <p class="text-xs mb-2">• Block Chain & DevOps Engineer</p>
                    <p class="text-xs mb-2">• +8 Ans d'Expériences: Tota</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 w-full sm:w-1/2 lg:w-1/4">
              <div
                class="
                  w-full
                  mx-auto
                  rounded-lg
                  bg-white
                  border border-gray-200
                  p-5
                  text-gray-800
                  font-light
                  mb-6
                "
              >
                <div class="w-full flex flex-row items-center">
                  <div class="w-1/3">
                    <div
                      class="
                        overflow-hidden
                        w-24
                        rounded-full
                        h-24
                        mb-4
                        bg-gray-50
                        border border-gray-200
                        items-center
                        justify-center
                        mx-auto
                      "
                    >
                      <g-image
                        src="~/assets/images/home/about/Fiacre.jpeg"
                        alt=""
                      ></g-image>
                    </div>
                    <span class="inline-flex">
                      <a
                        class="
                          w-5
                          h-5
                          mr-2
                          flex
                          items-center
                          place-content-center
                          rounded-full
                          border
                          hover:border-none
                          text-primary text-xs
                          hover:bg-secondary
                          hover:text-white
                        "
                        href="https://www.linkedin.com/company/rintio/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in relative"></i>
                      </a>
                    </span>
                  </div>
                  <div class="flex-grow w-2/3 pl-4 sm:pl-5 lg:pl-4 text-left">
                    <h6 class="font-bold text-sm uppercase text-gray-600 mb-4">
                      Fiacre.
                    </h6>
                    <p class="text-xs mb-2">
                      • Ingénieur Informatique, Actuaire
                    </p>
                    <p class="text-xs mb-2">• Projet Manager, Scrum Master</p>
                    <p class="text-xs mb-2">• +7 Ans d'Exp : SNCF, AXA</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 w-full sm:w-1/2 lg:w-1/4">
              <div
                class="
                  w-full
                  mx-auto
                  rounded-lg
                  bg-white
                  border border-gray-200
                  p-5
                  text-gray-800
                  font-light
                  mb-6
                "
              >
                <div class="w-full flex flex-row items-center">
                  <div class="w-1/3">
                    <div
                      class="
                        overflow-hidden
                        w-24
                        rounded-full
                        h-24
                        mb-4
                        bg-gray-50
                        border border-gray-200
                        items-center
                        justify-center
                        mx-auto
                      "
                    >
                      <g-image
                        src="~/assets/images/icons/expert.svg"
                        alt=""
                      ></g-image>
                    </div>
                    <span class="inline-flex">
                      <a
                        class="
                          w-5
                          h-5
                          mr-2
                          flex
                          items-center
                          place-content-center
                          rounded-full
                          border
                          hover:border-none
                          text-primary text-xs
                          hover:bg-secondary
                          hover:text-white
                        "
                        href="https://www.linkedin.com/company/rintio/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in relative"></i>
                      </a>
                    </span>
                  </div>
                  <div class="flex-grow w-2/3 pl-4 sm:pl-5 lg:pl-4 text-left">
                    <h6 class="font-bold text-sm uppercase text-gray-600 mb-4">
                      Julien.
                    </h6>
                    <p class="text-xs mb-2">• Ingénieur Informatique</p>
                    <p class="text-xs mb-2">
                      • Ingénieur Informatique • +6 Ans d'Expériences : Orange,
                      Oracle,Société Générale
                    </p>
                    <p class="text-xs mb-2">• +8 Ans d'Expériences: Tota</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 w-full sm:w-1/2 lg:w-1/4">
              <div
                class="
                  w-full
                  mx-auto
                  rounded-lg
                  bg-white
                  border border-gray-200
                  p-5
                  text-gray-800
                  font-light
                  mb-6
                "
              >
                <div class="w-full flex flex-row items-center">
                  <div class="w-1/3">
                    <div
                      class="
                        overflow-hidden
                        w-24
                        rounded-full
                        h-24
                        mb-4
                        bg-gray-50
                        border border-gray-200
                        items-center
                        justify-center
                        mx-auto
                      "
                    >
                      <g-image
                        src="~/assets/images/icons/expert.svg"
                        alt=""
                      ></g-image>
                    </div>
                    <span class="inline-flex">
                      <a
                        class="
                          w-5
                          h-5
                          mr-2
                          flex
                          items-center
                          place-content-center
                          rounded-full
                          border
                          hover:border-none
                          text-primary text-xs
                          hover:bg-secondary
                          hover:text-white
                        "
                        href="https://www.linkedin.com/company/rintio/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in relative"></i>
                      </a>
                    </span>
                  </div>
                  <div class="flex-grow w-2/3 pl-4 sm:pl-5 lg:pl-4 text-left">
                    <h6 class="font-bold text-sm uppercase text-gray-600 mb-4">
                      Nicaise.
                    </h6>
                    <p class="text-xs mb-2" v-for="career in expert.career" :key="career">
                     • {{career}}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

