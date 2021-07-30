import React from "react"
import HeroSection from "../HeroSection/HeroSection";
import { freshersHeroSection, title, subtitle, container } from './index.module.scss';
import logoImage from './logo.png'

const FreshersPictureHeroSection = () => (
  <HeroSection
    name="RHUL CompSoc"
    height="full"
    className={freshersHeroSection}
  >
    <div className={container}>
      <h1 className={title}>Fresher's</h1>
      <h2 className={subtitle}>Welcome Week 2021</h2>
    </div>
  </HeroSection>
)

export {
  FreshersPictureHeroSection
}
