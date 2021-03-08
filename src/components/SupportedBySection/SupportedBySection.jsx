import * as React from "react"
import styles from "./SupportedBySection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const SupportedBySection = (props) => {
    return (
        <Section className="sponsors" height="half">
            <h2>{props.name}</h2>
            <h3 class="section-tag">{props.tag}</h3>

            <p className={styles.details}>Interested in supporting us?</p>
            <a  className="btn  btn-solid-red"
                href='#'>Find Out More
            </a>        
        </Section>
    )
  }
  
  export default SupportedBySection
  