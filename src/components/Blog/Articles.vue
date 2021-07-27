<template>
  <div class="md:px-20 pt-8">
     <div class="carousel relative md:container bg-center rounded overflow-hidden shadow-xl">
        <div class="carousel-inner relative overflow-hidden w-full">
          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
            checked="checked">
          <div class="carousel-item absolute opacity-0 mx-auto bg-center bg-white">
            <div class="md:flex px-16 w-full justify-center py-6 md:py-20 md:space-x-6 mx-auto">
              <div class="md:flex-shrink-0 md:w-1/3">
                <img class="rounded-lg w-full" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg" alt="Woman paying for a purchase">
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <div class="capitalize tracking-wide text-sm text-primary font-bold">
                  Remise des diplômes au Africa TechUp Tour Abidjan 2021
                </div>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse lacus interdum quis sociis vitae tempor volutpat. 
                  Elit faucibus arcu, amet, praesent. Laoreet fringilla amet tellus ultrices facilisi egestas maecenas. 
                  Integer cras tristique urna, diam, sed enim. Egestas vehicula ipsum vitae amet a nam lacinia.
                </p>
              </div>
            </div>
          </div>
          <label for="carousel-3"
            class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-2"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>
      
          <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0 mx-auto bg-center bg-white">
            <div class="md:flex px-16 w-full justify-center py-6 md:py-20 md:space-x-6 mx-auto">
              <div class="md:flex-shrink-0 md:w-1/3">
                <img class="rounded-lg w-full" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg" alt="Woman paying for a purchase">
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <div class="capitalize tracking-wide text-sm text-primary font-bold">
                  Remise des diplômes au Africa TechUp Tour Abidjan 2021
                </div>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse lacus interdum quis sociis vitae tempor volutpat. 
                  Elit faucibus arcu, amet, praesent. Laoreet fringilla amet tellus ultrices facilisi egestas maecenas. 
                  Integer cras tristique urna, diam, sed enim. Egestas vehicula ipsum vitae amet a nam lacinia.
                </p>
              </div>
            </div>
          </div>
          <label for="carousel-1"
            class=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-3"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>
      
          <!--Slide 3-->
          <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0 mx-auto bg-center bg-white">
            <div class="md:flex px-16 w-full justify-center py-6 md:py-20 md:space-x-6 mx-auto">
              <div class="md:flex-shrink-0 md:w-1/3">
                <img class="rounded-lg w-full" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg" alt="Woman paying for a purchase">
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <div class="capitalize tracking-wide text-sm text-primary font-bold">
                  Remise des diplômes au Africa TechUp Tour Abidjan 2021
                </div>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse lacus interdum quis sociis vitae tempor volutpat. 
                  Elit faucibus arcu, amet, praesent. Laoreet fringilla amet tellus ultrices facilisi egestas maecenas. 
                  Integer cras tristique urna, diam, sed enim. Egestas vehicula ipsum vitae amet a nam lacinia.
                </p>
              </div>
            </div>
          </div>
          <label for="carousel-2"
            class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-1"
            class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>
      
          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label for="carousel-1"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-2"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-3"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
          </ol>
      
        </div>
      </div>
  </div>
</template>
<style>
        .carousel-open:checked+.carousel-item {
          position: static;
          opacity: 100;
        }
      
        .carousel-item {
          -webkit-transition: opacity 0.6s ease-out;
          transition: opacity 0.6s ease-out;
        }
      
        #carousel-1:checked~.control-1,
        #carousel-2:checked~.control-2,
        #carousel-3:checked~.control-3 {
          display: block;
        }
      
        .carousel-indicators {
          list-style: none;
          margin: 0;
          padding: 0;
          position: absolute;
          bottom: 2%;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 10;
        }
      
        #carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
        #carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
        #carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
          color: #2b6cb0;
          /*Set to match the Tailwind colour you want the active one to be */
        }
      </style>
    <!-- <div class="container px-16 flex w-full justify-center py-6 md:py-20 md:space-x-6 mx-auto mt-12 bg-white">
        <div class="w-full md:w-1/2 items-center justify-center mx-auto md:block">
            <div class="relative">
                <g-image
                class="absolute -top-20 -left-16"
                src="~/assets/images/Blog/article.png"
                alt="Workplace"
                width="500"
                />
            </div>
        </div>
        <div class="w-full md:w-1/2 mb-8 md:mb-0 mt-96 md:mt-0">
            <div class="mx-4 md:mx-0">
                <h4 class="mb-3 font-semibold text-primary">
                Remise des diplôme au Africa TechUp Tour Abidjan 2021
                </h4>
            </div>
            <div class="mx-4 md:mx-0 pt-6">
                <p class="text-justify leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse lacus interdum quis sociis vitae tempor volutpat. 
                Elit faucibus arcu, amet, praesent. Laoreet fringilla amet tellus ultrices facilisi egestas maecenas. 
                Integer cras tristique urna, diam, sed enim. Egestas vehicula ipsum vitae amet a nam lacinia.
                </p>
            </div>
    </div> -->
            <!-- <div class=" container w-2/3">
                <div class="container px-24 mx-auto my-4"> -->
                    <!-- <h4 class="text-primary">
                        Remise des diplôme au Africa TechUp Tour Abidjan 2021 
                    </h4>
                    <div class="container mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse lacus interdum quis sociis vitae tempor volutpat. 
                        Elit faucibus arcu, amet, praesent. Laoreet fringilla amet tellus ultrices facilisi egestas maecenas. 
                        Integer cras tristique urna, diam, sed enim. Egestas vehicula ipsum vitae amet a nam lacinia.
                    </div> -->
                    <!-- <div class="my-24">
                        <div class="relative">
                            <g-image
                            class="absolute"
                            src="~/assets/images/Blog/article1.png"
                        />
                        </div>
                    </div> -->
                <!-- </div>     
            </div> -->
            <!-- <div class="flex container w-1/3 my-4 flex-shrink-0">
                <div class="relative">
                    <g-image
                        class="relative"
                        src="~/assets/images/Blog/article.png"
                        width="400"
                        alt=""
                    />
                </div>
            </div> -->
        </div>
        <!-- <div class=" container mx-auto md:mx-24 relative">
            <div class="tracking-wide text-sm text-primary font-bold my-4">
                Remise des diplômes au Africa TechUp Tour Abidjan 2021
            </div>
            <p class="my-6 text-red-500">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Suspendisse lacus interdum quis sociis vitae tempor volutpat. 
               Elit faucibus arcu, amet, praesent. Laoreet fringilla amet tellus ultrices facilisi egestas maecenas. 
               Integer cras tristique urna, diam, sed enim. Egestas vehicula ipsum vitae amet a nam lacinia.
            </p>
        </div>
        <div class="md:flex-shrink-0">
            <g-image
                class="relative"
                src="~/assets/images/Blog/article.png"
                width="450"
                alt=""
            />
        </div> -->
    <!-- </div> -->
