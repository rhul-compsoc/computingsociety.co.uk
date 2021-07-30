module.exports = {
  siteMetadata: {
    title: "RHUL Computing Society",
    decription: "Royal Holloway, University of London Computing Society",
    author: "jcsawyer123",
    twitter: "jcsawyer123",
    github: "rhul-compsoc",
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
        useResolveUrlLoader: true,
        sassOptions: {
          includePaths: ["src/assets/scss"],
        },
        implementation: require("sass"),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      }
    },
  ],
};
