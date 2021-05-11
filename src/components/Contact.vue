<template>
  <div class="flex container">
    <div class="w-1/2">1</div>
    <div class="w-1/2">
      <!-- Contact Form -->
      <div class="flex items-center min-h-screen">
        <div class="container mx-auto">
          <div class="max-w-lg mx-auto my-10 bg-white p-5 rounded-sm shadow-xl">
            <div class="m-7">
              <h1 class="my-3 text-3xl font-semibold text-gray-700">
                Envoyer nous un message
              </h1>
            </div>
            <div class="m-7">
              <form id="form">
                <div class="mb-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nom complet"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    name="object"
                    id="object"
                    placeholder="Objet"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div class="mb-6">
                  <textarea
                    rows="5"
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
                    class="w-full px-3 py-4 text-white text-xl bg-secondary rounded-sm focus:bg-secondary focus:outline-none"
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