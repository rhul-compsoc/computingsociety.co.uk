import { graphql, StaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import * as React from "react";
// Import Section definition
import Section from "../Section/Section";

const TeamSection = (props) => {
  return (
    <Section className="team" height="full" theme="dark">
      <a name="team_section" />
      <h2>{props.name}</h2>
      <h3 className="section-tag">{props.tag}</h3>

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
                  data.allMdx.edges.map(({ node }) => (
                    <div key={node.id}>
                      <h4>{node.frontmatter.shortname}</h4>
                      <div class="row">
                        {node.frontmatter.people.map((person) => (
                          <div className="col-6 col-sm-4 col-md-3">
                            <div className="card col-12">
                              <div className="card-picture">
                                {person.id.frontmatter.image && (
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
                                    {person.id.frontmatter.name}
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
                  ))
                }
              </StaticQuery>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TeamSection;
