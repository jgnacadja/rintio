<template>
  <div class="container mx-auto px-6 lg:px-8 xl:px-18 2xl:px-16">
    <div
      class="grid md:grid-cols-9 lg:grid-cols-4 gap-4 md:grid-flow-row lg:grid-flow-rows"
    >
      <div
        class="row-span-6 col-span-3 md:col-span-6 lg:col-span-2 lg:row-span-2"
      >
        <div
          v-for="edge in offer"
          :key="edge.node.id"
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          class="w-full relative px-4 bg-center bg-cover bg-no-repeat h-80 md:h-full"
          v-bind:style="[
            {
              backgroundImage: 'url(' + edge.node.coverImage.file.url + ')',
            },
          ]"
        >
          <div class="absolute bottom-6">
            <div
              class="text-white font-extrabold tracking-wider leading-relaxed font-roboto"
            >
              {{ edge.node.title }}
            </div>

            <div
              class="text-white font-bold tracking-wider leading-relaxed font-roboto text-xs"
              v-html="richtextToHTML(edge.node.metaDescription)"
            ></div>

            <div
              class="text-white tracking-wider leading-relaxed font-roboto text-xs flex flex-row justify-between -mt-5"
              v-html="edge.node.excerpt"
            ></div>
          </div>
          <div class="flex float-right">
            <div class="absolute bottom-6"
              v-show="active"
            >
              <g-link :to="edge.node.path">
                <button
                  class="
                    rounded-full
                    flex
                    justify-center
                    items-center
                    bg-primary
                    p-2
                    font-medium
                    md:text-lg
                    hover:text-white 
                    focus:outline-none
                    -mx-8
                  "
                >
                  <span class="hidden sm:flex" style="color: white"><Arrow /></span>
                </button>
              </g-link>
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="edge in offers"
        :key="edge.node.id"
        class="col-span-3 md:row-span-3 lg:col-span-1 lg:row-span-1"
        @mouseover="state = edge.node.id"
        @mouseleave="state = null"
      >
          <div
            class="shadow-lg bg-center bg-cover bg-no-repeat h-full"
            v-bind:style="[
              {
                backgroundImage: 'url(' + edge.node.coverImage.file.url + ')',
              },
            ]"
          >
            <div class="w-full overflow-hidden">
              <div class="w-full h-64"></div>
              <div class="w-full relative px-2 pb-4">
                <div class="px-8 pl-0">
                  <div
                    class="text-white font-extrabold tracking-wider leading-relaxed font-roboto"
                  >
                    {{ edge.node.title }}
                  </div>

                  <div
                    class="text-white font-bold tracking-wider leading-relaxed font-roboto text-xs"
                    v-html="richtextToHTML(edge.node.metaDescription)"
                  ></div>

                  <div
                    class="text-white tracking-wider leading-relaxed font-roboto text-xs"
                    v-bind:class="{ '-mt-5': edge.node.metaDescription }"
                    v-html="edge.node.excerpt"
                  ></div>
                </div>
                
                
                <div class="flex float-right">
                  <div class="absolute bottom-6"
                  >
       
                    <g-link :to="edge.node.path" v-if="state === edge.node.id">
                      <button
                        class="
                          rounded-full
                          flex
                          justify-center
                          items-center
                          bg-primary
                          p-2
                          font-medium
                          md:text-lg
                          hover:text-white
                          focus:outline-none
                          -mx-10
                        "
                      >
                        <span class="hidden sm:flex" style="color: white"><Arrow /></span>
                      </button>
                    </g-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<page-query>
query {
  featuredPost: contentfulCategory(path: "blog") {
    id
    title
    path
    belongsTo(order: DESC, limit: 3) {
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
    belongsTo(order: DESC) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
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

  events: contentfulCategory(path: "evenements") {
    id
    title
    path
    belongsTo(order: DESC) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            type
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

  page: contentfulPage(path: "Blog") {
    path
    seo {
      id
      title
      date
      name
      description
      keywords
      no_index
      no_follow
    }
    sections {
      id
      title
      date
      name
      columns {
        ... on ContentfulComponentImage {
          id
          title
          name
          image {
            file {
              url
            }
          }
        }
        ... on ContentfulComponentText {
          id
          title
          text
        }
      }
    }
  }
}
</page-query>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Arrow from "~/assets/images/icons/arrow.svg";

export default {
  props: {
    offer: {
      type: Array,
      default() {
        return [];
      },
    },
    offers: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components:{
    Arrow,
  },

  data() {
    return{
      active: false,
      state: false
    }
  },

  methods: {
    mouseOver: function(){
      this.active = true; 
    },
     mouseLeave: function(){
      this.active = false; 
    },

    mouseState: function(){
      this.state = true; 
    },

    richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  },
};
</script>
