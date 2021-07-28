import React from "react"
import HeroSection from "../HeroSection/HeroSection";
import { freshersHeroSection } from './index.module.scss';

const FreshersPictureHeroSection = () => (
  <HeroSection
    name="Royal Holloway Computing Society Fresher's Events"
    height="half"
    className={freshersHeroSection}
  />
)

export {
  FreshersPictureHeroSection
}
