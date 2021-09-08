<template>
  <div class="items-center justify-center w-full py-6 md:py-24">
    <div class="text-center">
      <h3 class="mb-3 text-sm font-semibold uppercase text-primary">
        {{ title }}
      </h3>
    </div>

    <div class="text-center">
      <h2
        class="my-3 text-xl font-extrabold md:text-5xl text-primary"
        v-html="content.title"
      ></h2>
      <div class="py-4" v-html="richtextToHTML(content.text)"></div>
    </div>

    <div
      class="
        grid
        gap-4
        px-2
        md:grid-cols-6
        xl:grid-cols-2
        md:grid-flow-row
        xl:grid-flow-rows
        xl:px-24
      "
    >
      <div
        class="
          h-full
          col-span-3
          row-span-2
          bg-white
          shadow-sm
          xl:col-span-1
          xl:row-span-2
        "
        v-for="edge in $static.featuredPost.belongsTo.edges"
        :key="edge.node.id"
      >
        <g-link :to="edge.node.path">
          <g-image
            alt="iot"
            title="scrum"
            :src="edge.node.coverImage.file.url"
            class="object-cover w-full h-64 mb-0"
          />

          <h5
            class="mx-4 mt-2 mb-2 text-xl font-bold leading-tight text-gray-800"
          >
            {{ edge.node.title }}
          </h5>
          <p class="mx-4 space-x-8 text-xs text-primary">
            <span>{{ edge.node.date | FormatDate }}</span>
            <span class="flex float-right pt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-4 sm:hidden"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="hidden sm:flex"> Publié par : </span>
              {{ edge.node.author }}
            </span>
          </p>
          <p
            class="mx-4 mb-4 font-light text-justify text-gray-600"
            v-html="richtextToHTML(edge.node.metaDescription)"
          ></p>
        </g-link>
      </div>
      <div
        class="
          col-span-3
          row-span-1
          bg-white
          shadow-sm
          xl:col-span-1
          xl:row-span-1
        "
        v-for="edge in $static.posts.belongsTo.edges"
        :key="edge.node.id"
      >
        <div class="flex flex-row h-full">
          <div class="w-2/5 h-48 md:h-full">
            <g-link :to="edge.node.path">
              <g-image
                alt="iot"
                title="scrum"
                :src="edge.node.coverImage.file.url"
                class="object-cover w-full h-full"
              />
            </g-link>
          </div>
          <div class="w-3/5 px-4 mt-4">
            <g-link :to="edge.node.path">
              <h5
                class="
                  mb-2
                  text-lg
                  font-semibold
                  text-left text-gray-800
                  md:text-xl
                "
              >
                {{ edge.node.title }}
              </h5>
              <p class="mt-2 text-xs text-primary md:mt-4">
                <span>{{ edge.node.date | FormatDate }}</span>
                <span class="flex float-right pt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-4 sm:hidden"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="hidden sm:flex"> Publié par : </span>
                  {{ edge.node.author }}
                </span>
              </p>
              <p
                class="
                  w-full
                  text-xs
                  font-light
                  text-justify text-gray-600
                  md:text-sm
                  text-ellipsis--2
                "
                v-html="richtextToHTML(edge.node.metaDescription)"
              ></p>
            </g-link>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-2 py-4 mx-auto md:flex xl:px-24">
      <g-link to="/blog" class="ml-auto">
        <button
          href="#"
          class="
            flex
            ml-auto
            font-medium
            md:text-lg
            hover:text-secondary
            focus:outline-none
          "
        >
          Voir plus de publications <span class="pt-1 pl-2"><Arrow /></span>
        </button>
      </g-link>
    </div>
  </div>
</template>

<static-query>
query {
  featuredPost: contentfulCategory(path: "blog") {
    id
    title
    path
    belongsTo(order: DESC, limit: 1) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            author
            categories {
              id
              title
            }
            date
            coverImage {
              file {
                url
              }
            }
            metaDescription
          }
        }
      }
    }
  }

  posts: contentfulCategory(path: "blog") {
    id
    title
    path
    belongsTo(order: DESC, skip: 1, limit: 2) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            author
            categories {
              id
              title
            }
            date
            coverImage {
              file {
                url
              }
            }
            metaDescription
          }
        }
      }
    }
  }
}
</static-query>

<script>
import Arrow from "~/assets/images/icons/arrow.svg";

import moment from "moment";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: {
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
  },
  components: {
    Arrow,
  },
  filters: {
    FormatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
      }
    },
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
};
</script>