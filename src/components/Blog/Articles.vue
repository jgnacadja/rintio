<template>
  <div class="pt-8 md:px-20">
     <div class="relative overflow-hidden bg-center rounded shadow-xl carousel md:container">
        <div class="relative w-full overflow-hidden carousel-inner">
          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
            checked="checked">
          <div class="absolute mx-auto bg-white bg-center opacity-0 carousel-item">
            <div class="justify-center w-full px-16 py-6 mx-auto md:flex md:py-20 md:space-x-6">
              <div class="md:flex-shrink-0 md:w-1/3">
                <img class="w-full rounded-lg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg" alt="Woman paying for a purchase">
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <div class="text-sm font-bold tracking-wide capitalize text-primary">
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
            class="absolute inset-y-0 left-0 z-10 flex content-center justify-center hidden w-10 h-10 my-auto ml-2 font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer control-1 md:ml-10 hover:text-white hover:bg-blue-700"><i
              class="mt-3 fas fa-angle-left"></i></label>
          <label for="carousel-2"
            class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-blue-700"><i
              class="mt-3 fas fa-angle-right"></i></label>
      
          <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="absolute mx-auto bg-white bg-center opacity-0 carousel-item">
            <div class="justify-center w-full px-16 py-6 mx-auto md:flex md:py-20 md:space-x-6">
              <div class="md:flex-shrink-0 md:w-1/3">
                <img class="w-full rounded-lg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg" alt="Woman paying for a purchase">
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <div class="text-sm font-bold tracking-wide capitalize text-primary">
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
            class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer  control-2 md:ml-10 hover:text-white hover:bg-blue-700"><i
              class="mt-3 fas fa-angle-left"></i></label>
          <label for="carousel-3"
            class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-blue-700"><i
              class="mt-3 fas fa-angle-right"></i></label>
      
          <!--Slide 3-->
          <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
          <div class="absolute mx-auto bg-white bg-center opacity-0 carousel-item">
            <div class="justify-center w-full px-16 py-6 mx-auto md:flex md:py-20 md:space-x-6">
              <div class="md:flex-shrink-0 md:w-1/3">
                <img class="w-full rounded-lg" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/dog.jpg" alt="Woman paying for a purchase">
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <div class="text-sm font-bold tracking-wide capitalize text-primary">
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
            class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer control-3 md:ml-10 hover:text-white hover:bg-blue-700"><i
              class="mt-3 fas fa-angle-left"></i></label>
          <label for="carousel-1"
            class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-blue-700"><i
              class="mt-3 fas fa-angle-right"></i></label>
      
          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label for="carousel-1"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-2"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-3"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700">•</label>
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
    <!-- <div class="container flex justify-center w-full px-16 py-6 mx-auto mt-12 bg-white md:py-20 md:space-x-6">
        <div class="items-center justify-center w-full mx-auto md:w-1/2 md:block">
            <div class="relative">
                <g-image
                class="absolute -top-20 -left-16"
                src="~/assets/images/Blog/article.png"
                alt="Workplace"
                width="500"
                />
            </div>
        </div>
        <div class="w-full mb-8 md:w-1/2 md:mb-0 mt-96 md:mt-0">
            <div class="mx-4 md:mx-0">
                <h4 class="mb-3 font-semibold text-primary">
                Remise des diplôme au Africa TechUp Tour Abidjan 2021
                </h4>
            </div>
            <div class="pt-6 mx-4 md:mx-0">
                <p class="leading-8 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse lacus interdum quis sociis vitae tempor volutpat. 
                Elit faucibus arcu, amet, praesent. Laoreet fringilla amet tellus ultrices facilisi egestas maecenas. 
                Integer cras tristique urna, diam, sed enim. Egestas vehicula ipsum vitae amet a nam lacinia.
                </p>
            </div>
    </div> -->
            <!-- <div class="container w-2/3 ">
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
            <!-- <div class="container flex flex-shrink-0 w-1/3 my-4">
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
        <!-- <div class="container relative mx-auto  md:mx-24">
            <div class="my-4 text-sm font-bold tracking-wide text-primary">
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
