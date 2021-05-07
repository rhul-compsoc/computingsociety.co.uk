module.exports = {
  siteMetadata: {
    title: "Computing Society",
    decription: "",
    author: "jcsawyer123",
    twitter: "jcsawyer123",
    github: "jcsawyer123",
    siteUrl: "https://www.computingsociety.co.uk",
  },
  mapping: {
    "Mdx.frontmatter.people.id": "Mdx.fields.id",
    // "MarkdownRemark.frontmatter.pastevents.event": "MarkdownRemark.fields.name",
    // "MarkdownRemark.frontmatter.events.event": "MarkdownRemark.fields.name",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["src/assets/scss"],
        },
        implementation: require("sass"),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
  ],
};
