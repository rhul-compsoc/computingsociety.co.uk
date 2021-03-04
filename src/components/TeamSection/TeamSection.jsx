import * as React from "react"
import styles from "./TeamSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const TeamSection = (props) => {
    return (
        <Section className="team" height="full">
            <h1>{props.name}</h1>
            <p>{props.tag}</p>
        </Section>
    )
  }
  
  export default TeamSection
  