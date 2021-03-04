import * as React from "react"
import styles from "./SupportedBySection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const SupportedBySection = (props) => {
    return (
        <Section className="sponsors" height="half">#
            <h1>{props.name}</h1>
            <p>{props.tag}</p>

            <p>Interested in supporting us?</p>
            <button>Find out more</button>
        </Section>
    )
  }
  
  export default SupportedBySection
  