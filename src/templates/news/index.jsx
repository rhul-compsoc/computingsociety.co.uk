import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../../components/Layout/Layout";
import SiteSEO from "../../components/SiteSEO";

const NewsTemplate = ({ data }) => {
  const { body, frontmatter } = data.mdx;

  return (
    <Layout>
      <SiteSEO
        title={frontmatter.name}
        description={frontmatter.full_description}
        image={frontmatter.image?.publicURL}
      />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default NewsTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        name
        image {
          publicURL
        }
        full_description
      }
    }
  }
`;
