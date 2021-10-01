import React from "react";
// Import Section definition
import Section from "@components/Section";
import { heroNameClass } from "./HeroSection.module.scss";

const HeroSection = ({ name, children, height = "full", className = "" }) => {
  return (
    <Section
      className={`hero d-flex align-items-center ${className}`}
      height={height}
    >
      <div className="text-center">
        <h1 className={heroNameClass}>{name}</h1>
        {children}
      </div>
    </Section>
  );
};

export default HeroSection;
