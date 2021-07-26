<template>
  <Layout>
    <LazyHydrate when-idle>
      <Breadcrumb :path="path" />    
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Articles />
    </LazyHydrate>

    
  </Layout>
</template>

<page-query>
query {
  posts:  allBlogPost {
    edges {
      node {
        id
        title
        path
        categories {
          id
          title
        }
      tags {
          id
          title
        }
        date
        metaDescription
        coverImage
        tags {
          id
          title
        }
      }
    }
  }
  tags: allTag {
    edges {
      node{
        id
        title
      }
    }
  }
  category: allCategory {
    edges {
      node{
        id
        title
      }
    }
  }
  
  onlinePost : allBlogPost(
    filter: { categories: { in: "Blog" } }
    limit: 3
    order: DESC
  ) {
    edges {
      node {
        id
        title
        path
        categories {
          id
          title
        }
        date
        coverImage
      }
    }
  }

}

</page-query>

<script>
import moment from "moment";
import LazyHydrate from "vue-lazy-hydration";
import Breadcrumb from "~/components/Breadcrumb.vue";
import Articles from "~/components/Blog/Articles.vue";
import ALaUne from "~/components/Blog/ALaUne.vue";
import { Pager } from "gridsome";
import Seo from "~/assets/images/Illustrations/seo.svg";
import RemoveTag from "~/assets/images/icons/remove.svg";
import Keywords from "~/assets/keywords.json";


export default {
  components: {
    LazyHydrate,
    Breadcrumb,
    Articles, 
    Pager,
    Seo,
    RemoveTag,
  },
  metaInfo() {
    return {
      title: "Blog",
      meta: [
        {
          key: "description",
          name: "description",
          content: "Entreprise spécialisée dans la mise en oeuvre de solutions informatiques et en intelligence Artificielle en Afrique et dans le Monde",
        },
        {
          key: "keywords",
          name: "keywords",
          content: Keywords.list,
        },
      ],
    };
  },
  data() {
    return {
      path: "",
      search: "",
      searchByTag: "",
      page: 1,
      numberOfPages: 1,
      pinnedTabs: [],
    };
  },
  mounted() {
    this.path = this.$router.currentRoute.path.slice(1).replace("-", " ");
  },
  computed: {
    searchResults() {
      if (this.search) {
        this.pinnedTabs = [];
        let filteredPosts = this.$page.posts.edges.filter((post) => {
          return post.node.title
            .toLowerCase()
            .includes(this.search.toLowerCase().trim());
        });
        this.numberOfPages = Math.ceil(filteredPosts.length / 5);
        return this.paginate(filteredPosts, 5, this.page);
      } else {
        console.log(this.$page.posts.edges);
        if (this.pinnedTabs.length !== 0) {
          console.log(this.pinnedTabs);

          /* // Get all the required ids
          var ids = filter.map(function (f) {
            return f.id;
          });
          var filtered = array.filter(function (a) {
            // Check if both source and target are present in list of ids
            return ids.indexOf(a.source) !== -1 && ids.indexOf(a.target) !== -1;
          }); */

          console.log(filtered);
          return [];
        } else {
          return this.paginate(this.$page.posts.edges, 5, this.page);
        }
      }
    },
  },
  methods: {
    paginate(array, page_size, page_number) {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice(
        (page_number - 1) * page_size,
        page_number * page_size
      );
    },
    pinTag(tag) {
      if (this.pinnedTabs.indexOf(tag) !== -1) {
        this.pinnedTabs = this.pinnedTabs.filter((tagged) => tagged != tag);
      } else {
        this.search = "";
        this.pinnedTabs.push(tag);
      }
    },
  },
  filters: {
    // Filter definitions
    FormatDate(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.pager {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 1rem;

  &__link {
    color: #e5e7eb;
    text-align: center;
    text-decoration: none;

    &:hover:not(.active) {
      background-color: #9ca3af;
      color: #000 !important;
    }
  }
}

.pager a {
  background-color: #fff;
  width: 2rem;
  padding: 1rem;
  border: 1px solid rgb(223, 223, 223);
}

.pager a:hover {
  background-color: #f9fafb;
  color: #000 !important;
}

.active {
  background-color: #e5e7eb !important;
  color: #000 !important;
  padding: 1rem;
  border: 1px solid #3b82f6 !important;
}
</style>
