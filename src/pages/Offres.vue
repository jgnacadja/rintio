<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

    <div class="items-center w-full justify-center py-6">
      <div class="text-center mx-4 sm:mx-4 lg:mx-32 xl:mx-64">
        <h1 class="my-3 text-2xl lg:text-5xl font-extrabold text-primary">
          {{$page.page.sections[0].columns[0].title}}
        </h1>
        <p
          class="md:w-2/3 mx-auto py-4 md:px-0"
          v-html="richtextToHTML($page.page.sections[0].columns[0].text.content[0])"
        ></p>
      </div>
    </div>

    <LazyHydrate when-visible>
      <Offers
        :offer="$page.offer.belongsTo.edges"
        :offers="$page.offers.belongsTo.edges"
      />
    </LazyHydrate>

    <div
      class="bg-gray-100 h-full bg-center bg-no-repeat bg-cover mt-24 3xl:px-64 py-12"
    >
      <div
        class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:grid-flow-row xl:grid-flow-rows"
      >
        <div
          class="col-span-3 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1 items-center justify-center mx-auto my-auto"
        >
          <g-image
            :src="$page.page.sections[1].columns[1].image.file.url"
            class=""
          />
        </div>
        <div
          class="col-span-3 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1"
        >
          <div class="xl:px-24 pr-8">
            <div class="mx-4 md:mx-0 lg:pt-6">
              <h2
                class="my-3 text-2xl md:text-5xl font-extrabold text-primary mx-auto pr-6 mb-4"
                v-html="$page.page.sections[1].columns[1].title"
              ></h2>

              <p
                class="my-8 font-light text-justify leading-10"
                v-html="richtextToHTML($page.page.sections[1].columns[1].text)"
              ></p>
              <div class="mt-4">
                <g-link :to="$page.page.sections[1].columns[1].ctaLink">
                  <button
                    v-if="!about"
                    type="submit"
                    class="px-10 py-4 md:py-6 text-white text-sm bg-secondary rounded-sm font-bold hover:bg-primary focus:outline-none uppercase"
                  >
                    {{$page.page.sections[1].columns[1].ctaText}}
                  </button>
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </Layout>
</template>

<page-query>
query {
    offer: contentfulCategory(path: "offres") {
    id
    title
    path
    belongsTo(order: ASC, limit: 1) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            type
            excerpt
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

  offers: contentfulCategory(path: "offres") {
    id
    title
    path
    belongsTo(order: ASC, skip: 1) {
      edges {
        node {
          ... on ContentfulPost {
            id
            title
            path
            type
            excerpt
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

  page: contentfulPage(path: "Offres") {
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
        ... on ContentfulComponentHero {
          id
          title
          name
          image {
            file {
              url
            }
          }
          text
          ctaText
          ctaLink
        }
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
import LazyHydrate from "vue-lazy-hydration";
import Breadcrumb from "~/components/Breadcrumb.vue";
import Offers from "~/components/offer/Offers.vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    Offers,
  },
  metaInfo() {
    return {
      title: this.$page.page.seo.name,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.page.description,
        },
        {
          key: "keywords",
          name: "keywords",
          content: this.$page.page.seo.keywords,
        },
      ],
    };
  },
  data() {
    return {
      path: "",
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.slice(1).replace("-", " ");
  },
  methods: {
        richtextToHTML(content) {
      return documentToHtmlString(content);
    },
  }
};
</script>