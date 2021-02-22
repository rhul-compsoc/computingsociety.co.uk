import * as React from "react"
import styles from "./HeroSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const HeroSection = (props) => {
    return (
        <Section className="hero" height="full">
            <h1>{props.name}</h1>
            <p>{props.tag}</p>
        </Section>
    )
  }
  
  export default HeroSection
  