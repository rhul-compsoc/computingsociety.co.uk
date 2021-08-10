module.exports = {
  siteMetadata: {
    title: "RHUL Computing Society",
    decription: "Royal Holloway, University of London Computing Society",
    author: "jcsawyer123",
    twitter: "jcsawyer123",
    github: "rhul-compsoc",
    siteUrl: "https://computingsociety.co.uk",
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
    "gatsby-plugin-react-helmet",
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "RHUL Computing Society",
        short_name: "RHUL CompSoc",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#e5884e",
        display: "standalone",
        icon: "src/images/favicon.png"
      }
    }
  ],
};
