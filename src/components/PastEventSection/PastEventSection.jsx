import * as React from "react"
import styles from "./PastEventSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const PastEventSection = (props) => {
    return (
        <Section className="PastEvents" height="full">
            <h1>{props.name}</h1>
            <p>{props.tag}</p>
        </Section>
    )
  }
  
  export default PastEventSection
  