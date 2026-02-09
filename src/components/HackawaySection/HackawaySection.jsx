import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import {
  container,
  hackawayHeroSection,
  subtitle,
} from "./HackawaySection.module.scss";
import HackawayLogo from "./hackaway-logo.png";

const HackawaySection = ({ height = "full", children }) => (
  <HeroSection
    name=""
    height={height}
    className={hackawayHeroSection}
  >
    <div className={container}>
      <img src={HackawayLogo} alt="Royal Hackaway V9" />
      <h2 className={subtitle}>31st January - 1st February 2026</h2>
    </div>
    {children}
  </HeroSection>
);

export default HackawaySection;