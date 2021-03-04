import * as React from "react"
import styles from "./EventSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const EventSection = (props) => {
    return (
        <Section className="events" height="full">
            <h1>{props.name}</h1>
            <p>{props.tag}</p>
        </Section>
    )
  }
  
  export default EventSection
  