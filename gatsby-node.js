const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const fs = require("fs")

const getTemplate = templateName => {
  const template = path.resolve(
    __dirname,
    "src",
    "templates",
    templateName,
    "index.jsx"
  )

  if (fs.existsSync(template)) {
    return template
  } else {
    throw new Error(`Could not find the specified template file at ${template}`)
  }
}

/**
 * When Gatsby starts to create GraphQL nodes, we can extend some of these
 * nodes to include our own information for our benefit.
 *
 * Here, we slap on:
 * id       | Based on the markdown filename
 * slug     | Based on where the markdown file is in the file system
 * template | Based on which folder the markdown file is in the file system
 *
 * The ID will later be used for relational linking or whatever.
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == "Mdx") {
    const parent = getNode(node.parent)
    const directoryParts = parent.relativeDirectory.split(/[\\/]/)

    const folderName = directoryParts[0]
    const slug = createFilePath({ node, getNode })

    // Grab the filename of the Markdown file.
    const { name } = path.parse(
      createFilePath({ node, getNode, trailingSlash: false })
    )

    createNodeField({
      name: "id",
      node,
      value: name,
    })

    createNodeField({
      name: "slug",
      node,
      value: slug,
    })

    createNodeField({
      node,
      name: "template",
      value: folderName,
    })
  }
}

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions

  return graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___event_start] }
      ) {
        edges {
          node {
            fields {
              template
              slug
            }
            frontmatter {
              render
              redirects
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild("Error while running GraphQL query")
      return
    }

    result.data.allMdx.edges
      .filter(
        // Filter out edges where rendering is not enabled
        ({ node }) => node.frontmatter.render
      )
      .forEach(({ node }) => {
        const template = node.fields.template

        let slug = node.fields.slug

        if (node.frontmatter.redirects && Array.isArray(node.frontmatter.redirects)) {
          for (const redirect of node.frontmatter.redirects) {
            createRedirect({
              fromPath: redirect,
              toPath: slug
            })
          }
        }

        // Create a page at the expected location
        createPage({
          path: slug,
          component: getTemplate(template),
          context: node.fields,
        })
      })
  })
}
