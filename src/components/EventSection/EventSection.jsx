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
    <Section
      className="Events"
      height="full"
      theme={completed && "dark"}
      id="events_section"
      name={name}
      tag={tag}
    >
      <StaticQuery
        query={graphql`
          {
            allMdx(
              filter: {
                frontmatter: { show: { eq: true } }
                fields: { template: { eq: "events" } }
              }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    name
                    event_start_string
                    event_start
                    full_description
                    event_completed
                    render
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
          let events = data.allMdx.edges
            .filter(
              ({ node }) => node.frontmatter.event_completed === completed
            )
            .sort(({ node: a }, { node: b }) =>
              completed
                ? b.frontmatter.event_start - a.frontmatter.event_start
                : a.frontmatter.event_start - b.frontmatter.event_start
            );
          let truncated = false;

          // Truncate documents if there are more than 3 events.
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
                          {node.frontmatter.event_start_string ??
                            new Date(
                              node.frontmatter.event_start
                            ).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="item-body">
                        <p className="description">
                          {node.frontmatter.full_description}
                        </p>
                        <div className="links">
                          {node.frontmatter.links.map((link) => (
                            <SiteLink href={link.href} key={link.label}>
                              {link.label}
                            </SiteLink>
                          ))}
                          {node.frontmatter.render && (
                            <SiteLink to={node.fields.slug}>View Page</SiteLink>
                          )}
                        </div>
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
