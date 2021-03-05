import * as React from "react"
import styles from "./SupportedBySection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const SupportedBySection = (props) => {
    return (
        <Section className="sponsors" height="half">
            <h2>{props.name}</h2>
            <h3 class="section-tag">{props.tag}</h3>

            <p>Interested in supporting us?</p>
            <button>Find out more</button>
        </Section>
    )
  }
  
  export default SupportedBySection
  