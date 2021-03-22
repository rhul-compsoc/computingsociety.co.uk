import * as React from "react"
import styles from "./MembershipSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const MembershipSection = (props) => {
    return (
        <Section className="membership" height="half" theme="dark">
            <h2>{props.name}</h2>
            <h3 class="section-tag">{props.tag}</h3>


            <div className="btn-group pt-3">
                <a className="btn btn-solid-red m-2"
                    href='#'>get membership
                </a>   

                <a className="btn btn-solid-discord m-2"
                    href='#'>Join discord
                </a>   
            </div>

        </Section>
    )
  }
  
  export default MembershipSection
  