import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
// Import Section definition
import Section from "../Section/Section";
import { SiteLink } from "../SiteClickable";

const NewsSection = ({
  name = "Untitled Section",
  tag = "Untitled Tag",
  ignoreTags = [],
  truncateAt = 3,
  theme = "",
}) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <Section
      className="Events"
      height="full"
      theme={theme}
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
                fields: { template: { eq: "news" } }
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
                    page_created
                    page_edited
                    full_description
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
            .map((edge) =>
              Object.assign(edge, {
                node: Object.assign(edge.node, {
                  frontmatter: Object.assign(edge.node.frontmatter, {
                    page_created: new Date(edge.node.frontmatter.page_created),
                    page_edited: new Date(edge.node.frontmatter.page_edited),
                  }),
                }),
              })
            )
            .sort(({ node: a }, { node: b }) =>
              a.frontmatter.page_created - b.frontmatter.page_created
            );
          let truncated = false;

          if (truncateAt) {
            // Truncate documents if there are more than 3 events.
            if (events.length > truncateAt && !viewMore) {
              events = events.slice(0, truncateAt);
              truncated = true;
            }
          }

          return (
            <>
              <div className="row event">
                {events.map(({ node }) => {
                  const {
                    page_created
                  } = node.frontmatter;
                  return (
                    <div
                      key={node.id}
                      className="col-12 col-sm-6 col-md-5 col-lg-4 item"
                    >
                      <div className="box">
                        <div className="item-head">
                          <h4 className="name">{node.frontmatter.name}</h4>
                          <p className="date">
                            {page_created.toLocaleDateString()}
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
                              <SiteLink to={node.fields.slug}>
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

export default NewsSection;
