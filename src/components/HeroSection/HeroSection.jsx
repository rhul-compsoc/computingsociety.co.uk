import React from "react";
// Import Section definition
import Section from "../Section/Section";
import SiteButton from "../SiteButton";
import { heroNameClass } from "./HeroSection.module.scss";

const HeroSection = ({ name }) => {
  return (
    <Section className="hero d-flex align-items-center" height="full">
      <div className="text-center">
        <h1 className={heroNameClass}>{name}</h1>

        <div className="btn-group pt-3">
          <SiteButton
            className="btn-solid-red m-1"
            href="https://www.su.rhul.ac.uk/societies/a-z/computing/"
          >
            Become A Member
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
      </div>
    </Section>
  );
};

export default HeroSection;
