import React from "react";
import { FreshersPictureHeroSection } from "../../components/FreshersPictureHeroSection";
import SiteButton from "../../components/SiteButton";

// markup
const FreshersPage = () => {
  return (
    <FreshersPictureHeroSection height="fullscreen">
      <SiteButton className="btn-solid-red m-1" target="_blank" to="/events/freshers2021">
        See upcoming events
      </SiteButton>
    </FreshersPictureHeroSection>
  );
};

export default FreshersPage;
