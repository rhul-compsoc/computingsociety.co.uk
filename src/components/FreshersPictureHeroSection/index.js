import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import {
  container,
  freshersHeroSection,
  subtitle,
  title,
} from "./index.module.scss";

const FreshersPictureHeroSection = ({ height = "full", children }) => (
  <HeroSection
    name="RHUL CompSoc"
    height={height}
    className={freshersHeroSection}
  >
    <div className={container}>
      <h1 className={title}>Fresher's</h1>
      <h2 className={subtitle}>Welcome Week 2021</h2>
    </div>
    {children}
  </HeroSection>
);

export { FreshersPictureHeroSection };
