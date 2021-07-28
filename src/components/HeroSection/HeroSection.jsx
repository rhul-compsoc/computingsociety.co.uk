import React from "react";
// Import Section definition
import Section from "../Section/Section";
import SiteButton from "../SiteButton";
import { heroNameClass } from "./HeroSection.module.scss";

const HeroSection = ({ name, children, height="full", className }) => {
  return (
    <Section className="hero d-flex align-items-center" height={height} className={className}>
      <div className="text-center">
        <h1 className={heroNameClass}>{name}</h1>
        { children }
      </div>
    </Section>
  );
};

export default HeroSection;
