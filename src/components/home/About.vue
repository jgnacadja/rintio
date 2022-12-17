<template>
  <div
    class="md:px-16 md:flex w-full justify-center py-6 md:py-24 md:space-x-6"
  >
    <div class="w-full md:w-1/2 items-center justify-center mx-auto md:block">
      <div class="relative">
        <svg
          class="Hero__image-grid md:-mt-14 w-5/6 mx-auto md:mx-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 590.91 632.66"
        >
          <defs>
            <clipPath id="heroclip1">
              <rect
                class="hero__swipe-1"
                id="heroclip1Rect"
                x="0"
                y="51.24"
                width="488.79"
                height="221.87"
                fill="#fff"
                data-svg-origin="590.1000061035156 162.17499923706055"
                transform="matrix(1,0,0,1,0,0)"
                style="transform-origin: 0px 0px"
              ></rect>
            </clipPath>

            <clipPath id="heroclip2">
              <rect
                class="hero__swipe-2"
                id="heroclip1Rect"
                x="279.36"
                y="293.94"
                width="292.4"
                height="268.6"
                fill="#fff"
                data-svg-origin="487.75999450683594 428.24000549316406"
                transform="matrix(1,0,0,1,0,0)"
                style="transform-origin: 0px 0px"
              ></rect>
            </clipPath>

            <clipPath id="heroclip3">
              <rect
                class="hero__swipe-3"
                id="heroclip3Rect"
                x="82.73"
                y="233.41"
                width="174.53"
                height="162.61"
                fill="#fff"
                data-svg-origin="176.25999879837036 314.71500396728516"
                transform="matrix(1,0,0,1,0,0)"
                style="transform-origin: 0px 0px"
              ></rect>
            </clipPath>

            <clipPath id="heroclip4">
              <rect
                class="hero__swipe-4"
                id="heroclip4Rect"
                x="181.03"
                y="405.79"
                width="75.83"
                height="73.12"
                fill="#fff"
                data-svg-origin="175.86000061035156 442.3500099182129"
                transform="matrix(1,0,0,1,0,0)"
                style="transform-origin: 0px 0px"
              ></rect>
            </clipPath>
          </defs>
          <g
            class="fouc fouc--hero"
            opacity="0"
            data-svg-origin="591 314.5249938964844"
            transform="matrix(1,0,0,1,0,0)"
            style="transform-origin: 0px 0px; opacity: 1"
          >
            <circle
              class="hero__circle"
              cx="484.18"
              cy="52.56"
              r="50"
              fill="#134a7f"
              data-svg-origin="90.18000030517578 79.55999755859375"
              transform="matrix(1,0,0,1,0,0)"
              style="transform-origin: 0px 0px; opacity: 1"
            ></circle>
            <circle
              class="hero__circle"
              cx="279.39"
              cy="563.49"
              r="30"
              fill="#ff0c0b"
              data-svg-origin="488.3900146484375 563.489990234375"
              transform="matrix(1,0,0,1,0,0)"
              style="transform-origin: 0px 0px; opacity: 1"
            ></circle>

            <rect
              class="hero__swipe-1"
              x="0"
              y="52"
              width="488"
              height="220"
              fill="#23d8a0"
              data-svg-origin="590 162"
              transform="matrix(1,0,0,1,0,0)"
              style="transform-origin: 0px 0px"
            ></rect>
            <rect
              class="hero__swipe-2"
              x="279"
              y="294"
              width="292"
              height="268"
              fill="#FAFAFA"
              data-svg-origin="488 428"
              transform="matrix(1,0,0,1,0,0)"
              style="transform-origin: 0px 0px"
            ></rect>
            <rect
              class="hero__swipe-3"
              x="92"
              y="234"
              width="173"
              height="162"
              fill="#FAFAFA"
              data-svg-origin="175 315"
              transform="matrix(1,0,0,1,0,0)"
              style="transform-origin: 0px 0px"
            ></rect>
            <rect
              class="hero__swipe-4"
              x="181"
              y="405.8"
              width="75"
              height="73"
              fill="#23d8a0"
              data-svg-origin="176 442.5"
              transform="matrix(1,0,0,1,0,0)"
              style="transform-origin: 0px 0px"
            ></rect>

            <image
              class="about_hero__swipe-1"
              clip-path="url(#heroclip1)"
              preserveAspectRatio="xMidYMid slice"
              :xlink:href="swipper.columns[0].image.file.url"
              x="0"
              y="51"
              width="490"
              height="223"
            ></image>
            <image
              clip-path="url(#heroclip2)"
              :xlink:href="swipper.columns[1].image.file.url"
              preserveAspectRatio="xMidYMid slice"
              x="279"
              y="293"
              width="294"
              height="270"
            ></image>
            <image
              clip-path="url(#heroclip3)"
              :xlink:href="swipper.columns[2].image.file.url"
              preserveAspectRatio="xMidYMid slice"
              x="92"
              y="233"
              width="176"
              height="164"
            ></image>
            <image
              clip-path="url(#heroclip4)"
              :xlink:href="swipper.columns[3].image.file.url"
              preserveAspectRatio="xMidYMid slice"
              x="181"
              y="404"
              width="78"
              height="76"
            ></image>
          </g>
        </svg>
      </div>
    </div>
    <div class="w-full md:w-1/2 mb-8 md:mb-0 md:mt-0">
      <div class="mx-4 md:mx-0">
        <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
          {{ title }}
        </h3>
        <!-- Title Dot -->
        <div class="-mt-3">
          <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
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
          class="my-3 text-2xl md:text-5xl font-extrabold text-primary"
          v-html="content.title"
        ></h2>

        <div
          class="my-3 font-light text-justify leading-8"
          v-html="richtextToHTML(content.text)"
        ></div>
        <div class="mt-4">
          <g-link :to="button.ctaLink">
            <button
              type="submit"
              class="px-6 py-2 md:py-4 text-white text-sm bg-secondary rounded-sm hover:bg-primary focus:outline-none uppercase"
            >
              {{ button.ctaText }}
            </button>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
    swipper: {
      type: Object,
      default() {
        return {};
      },
    },
    title: {
      type: String,
      default() {
        return "";
      },
    },
    content: {
      type: Object,
      default() {
        return {};
      },
    },
    button: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    var animationIsOk = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;

    if (animationIsOk) {
      var tl = gsap.timeline({
        delay: 1.7,
        defaults: {
          transformOrigin: "right center",
          ease: "expo.in",
          duration: 1.2,
          stagger: {
            each: 0.5,
            from: "start",
          },
        },
      });
      tl.set(".fouc--hero", {
        opacity: 1,
      })
        .from(".hero__swipe-1", {
          scaleX: 0,
          duration: 1.5,
        })
        .from(
          ".hero__swipe-2",
          {
            scaleX: 0,
            duration: 0.6,
          },
          "<"
        )
        .from(
          ".hero__swipe-3",
          {
            scaleX: 0,
          },
          "<"
        )
        .from(
          ".hero__swipe-4",
          {
            scaleX: 0,
            duration: 0.4,
          },
          "<"
        )
        .from(
          ".hero__circle",
          {
            duration: 0.4,
            transformOrigin: "center",
            opacity: 0,
            scale: 0.8,
            ease: "sine.out",
          },
          "<"
        );
    }
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
};
</script>
