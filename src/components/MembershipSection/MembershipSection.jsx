import React from "react";
// Import Section definition
import Section from "../Section/Section";
import { SiteButton } from "../SiteClickable";

const MembershipSection = ({ name, tag, theme = "" }) => {
  return (
    <Section
      className="membership"
      height="half"
      theme={theme}
      name={name}
      tag={tag}
    >
      <div className="btn-group pt-3">
        <SiteButton
          className="btn-solid-red m-2"
          href="https://www.su.rhul.ac.uk/societies/a-z/computing/"
        >
          get membership @ su.rhul.ac.uk
        </SiteButton>
      </div>
    </Section>
  );
};

export default MembershipSection;
