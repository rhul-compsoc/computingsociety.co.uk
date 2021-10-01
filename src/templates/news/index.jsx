import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import GatsbyImage from "gatsby-image";
import React from "react";
import Layout from "@components/Layout/Layout";
import SiteSEO from "@components/SiteSEO";

import { personRow as personRowClass } from "./index.module.scss";

const NewsTemplate = ({ data }) => {
  const { body, frontmatter, timeToRead } = data.mdx;

  return (
    <Layout>
      <SiteSEO
        title={frontmatter.name}
        description={frontmatter.full_description}
        image={frontmatter.image?.publicURL}
      />
      <div class="container py-5">
        <div class="row">
          <div className="col-12 col-md-8">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <div className="col-12 col-md-4">
            <h2>Info</h2>
            <p>
              This document takes about {timeToRead} minute
              {timeToRead !== 1 && "s"} to read.
            </p>
            <h3>Authors</h3>
            {frontmatter.people.map((person) => (
              <div className={personRowClass}>
                <GatsbyImage
                  fluid={{
                    ...person.id.frontmatter.image.childImageSharp.fluid,
                    aspectRatio: 1,
                  }}
                  style={{
                    width: "32px",
                  }}
                />
                {person.id.frontmatter.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        name
        image {
          publicURL
        }
        full_description
        people {
          id {
            frontmatter {
              name
              image {
                childImageSharp {
                  fluid(maxWidth: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
