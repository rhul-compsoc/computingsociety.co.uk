import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from "react"
import Layout from "../../components/Layout/Layout"

const EventTemplate = ({ data }) => {
  const { body } = data.mdx

  return (
    <Layout>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default EventTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`
