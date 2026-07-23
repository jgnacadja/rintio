<template>
  <div class="relative overflow-hidden w-full height bg-black">
    <!-- Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="slide.sys?.id || index"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    >
      <div
        class="bg-cover h-full bg-center text-black py-2 md:py-32 px-2 md:px-20 object-fill flex items-center"
        :style="{
          backgroundImage: slide.fields?.image?.fields?.file?.url
            ? `url(https:${slide.fields.image.fields.file.url})`
            : slide.image?.file?.url
              ? `url(${slide.image.file.url})`
              : ''
        }"
      >
        <div
          class="md:w-5/12 bg-white/85 backdrop-blur-sm p-8 rounded-lg md:bg-transparent md:backdrop-blur-none md:p-0"
        >
          <h3
            class="font-bold text-sm 2xl:text-lg 3xl:text-3xl uppercase text-secondary font-roboto"
          >
            {{ slide.fields?.name || slide.name }}
          </h3>
          <h1
            class="text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-primary font-roboto mt-2 mb-4"
          >
            {{ slide.fields?.title || slide.title }}
          </h1>
          <div
            class="text-lg md:text-xl 2xl:text-xl 3xl:text-2xl mb-10 leading-8 text-gray-800 md:text-black"
            v-html="richtextToHTML(slide.fields?.text || slide.text)"
          ></div>
          <NuxtLink
            :to="slide.fields?.ctaLink || slide.ctaLink"
            class="inline-block bg-secondary py-4 px-8 2xl:py-6 2xl:px-12 text-white font-bold hover:bg-primary uppercase text-xs 2xl:text-lg transition-colors duration-300"
          >
            {{ slide.fields?.ctaText || slide.ctaText }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Indicators / Bullets -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="activeIndex = index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="index === activeIndex ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white'"
        :aria-label="`Slide ${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const props = defineProps({
  slides: {
    type: Array as () => any[],
    default: () => []
  }
})

const activeIndex = ref(0)
let timer: any = null

const richtextToHTML = (content: any) => {
  if (!content) return ''
  return documentToHtmlString(content)
}

const startAutoplay = () => {
  if (props.slides.length <= 1) return
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length
  }, 6000)
}

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style lang="scss" scoped>
.height {
  height: calc(100vh - 96px);
}
</style>
