import * as React from "react"
import styles from "./PastEventSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const PastEventSection = (props) => {
    return (
        <Section className="PastEvents" height="full" theme="dark">
            <h2>{props.name}</h2>
            <h3 class="section-tag">{props.tag}</h3>
        </Section>
    )
  }
  
  export default PastEventSection
  