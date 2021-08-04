import { graphql, StaticQuery } from "gatsby";
import React from "react";
import SiteLink from "../../components/SiteLink";

import { upcomingEventsClass } from './upcoming_events.module.scss';

// markup
const UpcomingEventsPage = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx(
            filter: {
              frontmatter: { show: { eq: true }, event_completed: { eq: false } }
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
                  event_start
                  event_end
                  event_date_string
                  event_date_display
                  full_description
                  event_completed
                  render
                  tags
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
          .filter((edge) => !edge.node.frontmatter.tags.includes('recurring'))
          .map((edge) =>
            Object.assign(edge, {
              node: Object.assign(edge.node, {
                frontmatter: Object.assign(edge.node.frontmatter, {
                  event_start: new Date(edge.node.frontmatter.event_start),
                  event_end: new Date(edge.node.frontmatter.event_end),
                }),
              }),
            })
          )
          .sort(({ node: a }, { node: b }) =>
            a.frontmatter.event_start - b.frontmatter.event_start
          );

        return (
          <>
            <div className={`row ${upcomingEventsClass}`}>
              {events.map(({ node }) => {
                const {
                  event_date_string,
                  event_date_display,
                  event_start,
                  event_end,
                } = node.frontmatter;
                return (
                  <div
                    key={node.id}
                    className="mb-4 col-12 col-sm-8 col-md-6 col-xl-3"
                  >
                    <div className="box">
                      <div>
                        <h4>{node.frontmatter.name}</h4>
                        <p>
                          {event_date_display === "start" &&
                            event_start.toLocaleDateString()}
                          {event_date_display === "end" &&
                            event_end.toLocaleDateString()}
                          {event_date_display === "string" &&
                            event_date_string}
                          {event_date_display === "both" &&
                            `${event_start.toLocaleDateString()} to ${event_end.toLocaleDateString()}`}
                        </p>
                      </div>
                      <div>
                        <p>
                          {node.frontmatter.full_description}
                        </p>
                        <div>
                          {node.frontmatter.links.map((link) => (
                            <SiteLink target="_blank" href={link.href} key={link.label}>
                              {link.label}
                            </SiteLink>
                          ))}
                          {node.frontmatter.render && (
                            <SiteLink target="_blank" to={node.fields.slug}>
                              View Page
                            </SiteLink>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      }}
    </StaticQuery>
  );
};

export default UpcomingEventsPage;
