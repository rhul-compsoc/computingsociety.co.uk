import * as React from "react"
import styles from "./HeroSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const HeroSection = (props) => {
    return (
        <Section className="hero d-flex align-items-center" height="full">

            {/* <div className="col-12 col-sm-10 col-md-8 col-lg-8"> */}
                    <div className="row">
                        <div className="col">
                            <div className="text-center profile-card">
                                <div>
                                <h1>Royal Holloway<br />Computing Society</h1>
                                </div>
             
                                <div className="row">
                                    <div className="col">
                                        <div className="btn-group pt-3">
                                            <a className="btn btn-solid-red m-1"
                                                href='https://www.su.rhul.ac.uk/societies/a-z/computing/'>Become A Member
                                            </a>
                                            <a className="btn btn-outline-red m-1"
                                                href='mailto:hello@computingsociety.co.uk'>Contact Us
                                            </a>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
            {/* </div> */}


        </Section>
    )
  }
  
  export default HeroSection
  