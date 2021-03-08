import * as React from "react"
import styles from "./EventSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const EventSection = (props) => {
    return (
        <Section className="events" height="full">
            <h2>{props.name}</h2>
            <h3 class="section-tag">{props.tag}</h3>
        </Section>
    )
  }
  
  export default EventSection
  