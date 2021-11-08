module.exports = {
    // Create posts from markdown files
    use: "@gridsome/source-filesystem",
    options: {
        typeName: "BlogPost",
        path: "content/articles/*.md",
        refs: {
            // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
            tags: {
                typeName: "Tag",
                create: true,
            },
            // Creates a GraphQL collection from 'categories' in front-matter and adds a reference.
            categories: {
                typeName: "Category",
                create: true,
            },
        },
    },
};