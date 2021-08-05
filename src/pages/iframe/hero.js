import React from "react";
import SiteButton from "../../components/SiteButton";

// markup
const FreshersPage = () => {
  return (
    <div className="text-center">
      <SiteButton
        className="btn-solid-red m-1"
        href="/"
        target="_blank"
      >
        computingsociety.co.uk
      </SiteButton>
      <SiteButton
        className="btn-outline-red m-1"
        href="mailto:hello@computingsociety.co.uk"
      >
        E-mail Us
      </SiteButton>
      <SiteButton className="btn-solid-discord m-1" href="https://dc.cmpsc.uk/">
        Join Discord
      </SiteButton>
    </div>
  );
};

export default FreshersPage;
