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
      <img src={HackawayLogo} alt="Royal Hackaway V6" />
      <h2 className={subtitle}>4th - 5th February 2023</h2>
    </div>
    {children}
  </HeroSection>
);

export default HackawaySection;