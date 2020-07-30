// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Rintio',
  siteDescription: "We involve for a better life",

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Article",
        path: "content/articles/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true
          },
          // Creates a GraphQL collection from 'categories' in front-matter and adds a reference.
          categories: {
            typeName: "Category",
            create: true
          }
        }
      }
    },
  ],
  templates: {
    Article: "/article/:title",
    Category: "/category/:title",
    Tag: "/tag/:title"
  }
}
