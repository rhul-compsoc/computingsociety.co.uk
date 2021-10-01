import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
// Import Section definition
import Section from "@components/Section";
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
      className="media"
      theme={theme}
      id="news_section"
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
            .sort(
              ({ node: a }, { node: b }) =>
                b.frontmatter.page_created - a.frontmatter.page_created
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
              <div className="row news">
                {events.map(({ node }) => {
                  const { page_created } = node.frontmatter;
                  return (
                    <div key={node.id} className="col-12 item">
                      <div className="row box">
                        <div className="col-12 col-sm-8">
                          <h4 className="name">{node.frontmatter.name}</h4>
                          <p className="description">
                            {node.frontmatter.full_description}
                          </p>
                        </div>
                        <div className="col-12 col-sm-4 text-end">
                          <p className="date">
                            {page_created.toLocaleDateString()}
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
