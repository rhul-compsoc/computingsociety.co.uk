import React from "react";
// Import Section definition
import Section from "../Section/Section";
import SiteButton from "../SiteButton";

const MembershipSection = (props) => {
  return (
    <Section className="membership" height="half" theme="dark">
      <h2>{props.name}</h2>
      <h3 className="section-tag">{props.tag}</h3>

      <div className="btn-group pt-3">
        <SiteButton className="btn btn-solid-red m-2" href="#">
          get membership
        </SiteButton>

        <SiteButton className="btn btn-solid-discord m-2" href="#">
          Join discord
        </SiteButton>
      </div>
    </Section>
  );
};

export default MembershipSection;
