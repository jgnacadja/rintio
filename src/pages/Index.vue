<template>
  <Layout>
    <LazyHydrate when-idle>
      <Homeslider />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <About
        :swipper="$page.page.sections[1].columns[0]"
        :content="$page.page.sections[1].columns[1]"
        :button="$page.page.sections[1].columns[2]"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Offer />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Story />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Partner />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Blog />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Map />
    </LazyHydrate>
  </Layout>
</template>

<page-query>
query {
  page: contentfulPage(path: "Acceuil") {
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
        ... on ContentfulComponentText {
          id
          title
          text
        }
        ... on ContentfulComponentSection {
          id
          title
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
        ... on ContentfulComponentButton {
              id
              title
              ctaText
              ctaLink
            }
      }
    }
  }
}
</page-query>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Homeslider from "~/components/home/Homeslider.vue";
import About from "~/components/home/About.vue";
import Offer from "~/components/home/Offer.vue";
import Story from "~/components/home/Story.vue";
import Partner from "~/components/home/Partner.vue";
import Blog from "~/components/home/Blog.vue";
import Map from "~/components/home/Map.vue";
import Keywords from "~/assets/keywords.json";

export default {
  components: {
    LazyHydrate,
    Homeslider,
    About,
    Offer,
    Story,
    Partner,
    Blog,
    Map,
  },
  metaInfo() {
    return {
      title: "We involve for a better life",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Entreprise spécialisée dans la mise en oeuvre de solutions informatiques et en intelligence Artificielle en Afrique et dans le Monde",
        },
        {
          key: "keywords",
          name: "keywords",
          content: Keywords.list,
        },
      ],
    };
  },
};
</script>
