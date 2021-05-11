import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
// Import Section definition
import Section from "../Section/Section";
import SiteLink from "../SiteLink";

const EventSection = ({
  name = "Untitled Section",
  tag = "Untitled Tag",
  completed = true,
}) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <Section className="Events" height="full" theme={completed && "dark"} id="events_section">
      <h2>{name}</h2>
      <h3 className="section-tag">{tag}</h3>

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
        {(data) => {
          let events = data.allMdx.edges.filter(
            ({ node }) => node.frontmatter.event_completed === completed
          );
          let truncated = false;

          if (events.length > 3 && !viewMore) {
            events = events.slice(0, 3);
            truncated = true;
          }

          return (
            <>
              <div className="row event">
                {events.map(({ node }) => (
                  <div
                    key={node.id}
                    className="col-12 col-sm-6 col-md-5 col-lg-4 item"
                  >
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
                          <div className="links">
                            {node.frontmatter.links.map((link) => (
                              <SiteLink href={link.href} key={link.label}>
                                {link.label}
                              </SiteLink>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {truncated && !viewMore && (
                <SiteLink onClick={() => setViewMore(true)}>See More</SiteLink>
              )}
              {viewMore && (
                <SiteLink onClick={() => setViewMore(false)}>See Less</SiteLink>
              )}
            </>
          );
        }}
      </StaticQuery>
    </Section>
  );
};

export default EventSection;
