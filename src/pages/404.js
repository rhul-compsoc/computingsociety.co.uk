import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section/Section";
import { SiteButton, SiteLink } from "../components/SiteClickable";
import SiteSEO from "../components/SiteSEO";
import image from "../images/20210831_153548_cropped.jpg"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SiteSEO title="404" description="Page not Found" />
      <Section>
        <h1>OwO What's This?</h1>
        <p>The page you're looking for doesn't exist, no longer exists or has never existed.</p>
        <SiteButton className="btn-solid-red" to="/">Back to the homepage</SiteButton>

        <img className="img-fluid py-3" src={image} alt="A deconstructed sign from Royal Holloway, scattered over the grass. Segments of the sign include the International Building, Bourne Building and the Bedford Building." />

      </Section>
    </Layout>
  );
};

export default NotFoundPage;
