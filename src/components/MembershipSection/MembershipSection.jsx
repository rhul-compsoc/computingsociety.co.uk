import React from "react";
// Import Section definition
import Section from "../Section/Section";
import SiteButton from "../SiteButton";

const MembershipSection = ({ name, tag }) => {
  return (
    <Section className="membership" height="half" theme="dark" name={name} tag={tag}>
      <div className="btn-group pt-3">
        <SiteButton className="btn btn-solid-red m-2" href="https://www.su.rhul.ac.uk/societies/a-z/computing/">
          get membership
        </SiteButton>

        <SiteButton className="btn btn-solid-discord m-2" href="https://dc.cmpsc.uk/">
          Join Discord
        </SiteButton>
      </div>
    </Section>
  );
};

export default MembershipSection;
