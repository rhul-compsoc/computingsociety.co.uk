import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
// Import Section definition
import Section from "../Section/Section";

const EventSection = ({
  name = "Untitled Section",
  tag = "Untitled Tag",
  completed = true,
}) => {
  return (
    <Section className="Events" height="full" theme={completed && 'dark'}>
      <h2>{name}</h2>
      <h3 className="section-tag">{tag}</h3>

      <div className="row event">
        <StaticQuery
          query={graphql`
            {
              allMdx(filter: { fields: { template: { eq: "events" } } }) {
                edges {
                  node {
                    id
                    frontmatter {
                      name
                      event_start
                      full_description
                      event_completed
                      links {
                        label
                        href
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
              .filter(({ node }) => node.frontmatter.event_completed === completed)
              .map(({ node }) => (
                <div key={node.id} className="col-sm-6 col-md-5 col-lg-4 item">
                  <div className="box">
                    <div className="item-head">
                      <h4 className="name">{node.frontmatter.name}</h4>
                      <p className="date">
                        {new Date(
                          node.frontmatter.event_start
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="item-body">
                      <p className="description">
                        {node.frontmatter.full_description}
                      </p>
                      {node.frontmatter.links.length > 0 && (
                        <div class="links">
                          {node.frontmatter.links.map((link) => (
                            <p className="link">
                              <a href={link.href} key={link.href}>
                                {link.label}
                              </a>
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
          }
        </StaticQuery>
      </div>
    </Section>
  );
};

export default EventSection;
