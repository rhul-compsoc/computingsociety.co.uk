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
      <img src={HackawayLogo} alt="Royal Hackaway V7" />
      <h2 className={subtitle}>27th - 28th January 2024</h2>
    </div>
    {children}
  </HeroSection>
);

export default HackawaySection;