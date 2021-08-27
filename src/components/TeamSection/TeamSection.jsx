import { graphql, StaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React, { useState } from "react";
// Import Section definition
import Section from "../Section/Section";
import { SiteLink } from "../SiteClickable";

const TeamSection = ({ name, tag }) => {
  return (
    <Section
      className="team"
      height="full"
      theme="dark"
      id="team_section"
      name={name}
      tag={tag}
    >
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-xl-8">
            <div className="row justify-content-center">
              <StaticQuery
                query={graphql`
                  {
                    allMdx(
                      filter: { fields: { template: { eq: "committee" } } }
                    ) {
                      edges {
                        node {
                          id
                          frontmatter {
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
                `}
              >
                {(data) =>
                  data.allMdx.edges
                    .sort(
                      ({ node: a }, { node: b }) =>
                        new Date(b.frontmatter.event_start) -
                        new Date(a.frontmatter.event_start)
                    )
                    .filter((_, index) => index === 0)
                    .map(({ node }) => {
                      const peopleWithPictures = node.frontmatter.people.filter(person => person.id.frontmatter.image)
                      const peopleWithoutPictures = node.frontmatter.people.filter(person => !person.id.frontmatter.image)

                      return (
                        <div key={node.id} className="py-4">
                          <h4>{node.frontmatter.shortname}</h4>
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
                      );
                    })
                }
              </StaticQuery>
            </div>
          </div>
        </div>
      </div>

      <SiteLink to="/committee">
        See previous committees
      </SiteLink>
    </Section>
  );
};

export default TeamSection;
