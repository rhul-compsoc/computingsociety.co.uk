import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section/Section";
import SiteLink from "../components/SiteLink";
import SiteSEO from "../components/SiteSEO";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SiteSEO title="404" description="Page not Found" />
      <Section>
        <h1>OwO What's This?</h1>
        <p>The page you're looking for doesn't exist, no longer exists or has never existed.</p>

        <SiteLink to="/">Try going home</SiteLink>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;
