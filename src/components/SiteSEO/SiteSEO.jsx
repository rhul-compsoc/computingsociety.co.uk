/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SiteSEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  let newDesc = description?.replace(/\n/g, ' ')

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {title && <meta name="twitter:title" content={title} />}
      {newDesc && <meta property="og:description" content={newDesc} />}
      {newDesc && <meta name="description" content={newDesc} />}
      {newDesc && <meta name="twitter:description" content={newDesc} />}
      {image && <meta property="og:image" content={image}></meta>}
      {image && <meta name="twitter:card" content="summary_large_image"></meta>}
      {image && <meta name="twitter:image" content={site.siteMetadata.siteUrl + image}></meta>}
    </Helmet>
  );
};

export default SiteSEO;
