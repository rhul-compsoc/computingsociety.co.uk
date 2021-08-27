import { graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Layout from "../../components/Layout";
import Section from "../../components/Section/Section";
import SiteSEO from "../../components/SiteSEO";
import { MDXRenderer } from "gatsby-plugin-mdx";

const TeamSection = ({ data }) => {
  return (
    <Layout>
      <SiteSEO title="Committee" />
      {
        data.allMdx.edges
          .sort(
            ({ node: a }, { node: b }) =>
              new Date(b.frontmatter.event_start) -
              new Date(a.frontmatter.event_start)
          )
          .map(({ node }, i) => {
            const peopleWithPictures = node.frontmatter.people.filter(person => person.id.frontmatter.image)
            const peopleWithoutPictures = node.frontmatter.people.filter(person => !person.id.frontmatter.image)
            const id = `committee-${node.frontmatter.shortname.replace(/ /g, '')}`

            return (
              <Section
                className="team"
                height="half"
                theme={i % 2 === 0 ? 'light' : 'dark'}
                id={id}
                tag={node.frontmatter.name}
                name={node.frontmatter.shortname}
              >
                <div className="container py-3">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-xl-8">
                      <div className="row justify-content-center">
                        <div key={node.id} className="py-4">
                          <div className="row">
                            {[...peopleWithPictures, ...peopleWithoutPictures].map((person) => (
                              <div
                                className="col-6 col-sm-4 col-md-3 py-3"
                                key={`${node.id}-${person.id?.frontmatter.name}-${person.role}`}
                              >
                                <div className="card col-12">
                                  <div className="card-picture">
                                    {person.id?.frontmatter.image && (
                                      <GatsbyImage
                                        fluid={{
                                          ...person.id.frontmatter.image
                                            .childImageSharp.fluid,
                                          aspectRatio: 1,
                                        }}
                                        className="picture"
                                      />
                                    )}
                                  </div>
                                  <div className="card-content">
                                    <div className="text-center">
                                      <span className="card-person name">
                                        {person.id?.frontmatter.name}
                                      </span>
                                      <br />
                                      <span className="card-person role">
                                        {person.role}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <MDXRenderer>{node.body}</MDXRenderer>
                  </div>
                </div>
              </Section>
            );
          })}
    </Layout>
  );
};

export default TeamSection;

export const pageQuery = graphql`
{
  allMdx(
    filter: { fields: { template: { eq: "committee" } } }
  ) {
    edges {
      node {
        id
        body
        frontmatter {
          name
          shortname
          event_start
          people {
            id {
              frontmatter {
                name
                image {
                  childImageSharp {
                    fluid(maxWidth: 256) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            role
          }
        }
      }
    }
  }
}
`
