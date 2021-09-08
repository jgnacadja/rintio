<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <About
        :title="$page.page.sections[0].name"
        :swipper="$page.page.sections[0].columns[0]"
        :content="$page.page.sections[0].columns[1]"
        :button="$page.page.sections[0].columns[2]"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Services
        :title="$page.page.sections[1].name"
        :cover="$page.page.sections[1].columns[0]"
        :content="$page.page.sections[1].columns.slice(1)"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Team
        :content="$page.page.sections[2].columns[0]"
        :team="$page.page.sections[2].columns.slice(1)"
      />
    </LazyHydrate>

    <LazyHydrate when-idle>
      <Stats :content="$page.page.sections[3].columns" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Experts
        :content="$page.page.sections[4].columns[0]"
        :experts="$page.page.sections[4].columns.slice(1)"
      />
    </LazyHydrate>
  </Layout>
</template>

<page-query>
query {
  page: contentfulPage(path: "A propos") {
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
import About from "~/components/home/About.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";
import Services from "~/components/about/Services.vue";
import Experts from "~/components/about/Experts.vue";
import Stats from "~/components/about/Stats.vue";
import Team from "~/components/about/Team.vue";

export default {
  components: {
    LazyHydrate,
    About,
    Breadcrumb,
    Services,
    Experts,
    Stats,
    Team,
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
};
</script>