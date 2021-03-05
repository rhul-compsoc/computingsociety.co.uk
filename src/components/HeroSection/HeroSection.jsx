import * as React from "react"
import styles from "./HeroSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const HeroSection = (props) => {
    return (
        <Section className="hero" height="full">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                    <h1>Royal Holloway<br />Computing Society</h1>
                </div>
            </div>


        </Section>
    )
  }
  
  export default HeroSection
  