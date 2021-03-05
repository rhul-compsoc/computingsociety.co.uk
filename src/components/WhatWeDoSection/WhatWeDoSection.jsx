import * as React from "react"
import styles from "./WhatWeDoSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const WhatWeDoSection = (props) => {
    return (
        <Section className="team" height="full">
            <h2>{props.name}</h2>
            <h3 class="section-tag">{props.tag}</h3>
        </Section>
    )
  }
  
  export default WhatWeDoSection
  