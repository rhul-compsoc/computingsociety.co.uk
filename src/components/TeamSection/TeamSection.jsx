import * as React from "react"
import styles from "./TeamSection.module.scss"
import Img from "gatsby-image"

// Import Section definition
import Section from "../Section/Section"

// Face
import JoshImg from './assets/jcsawyer1231-1.jpg'

const TeamSection = (props) => {
    return (
        <Section className="team" height="full" theme="dark">
            <h2>{props.name}</h2>
            <h3 class="section-tag">{props.tag}</h3>

            <div className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-xl-8">
                        <div className="row justify-content-center">
                            
                            <div className="card col-6 col-sm-4 col-md-3"> 
                                <div className="card-picture">
                                    <img className="picture" src={JoshImg} alt="Person" sizes="(max-width: 140px) 100vw, 140px" />                         
                                </div>
                                <div className="card-content">
                                    <div className="text-center">
                                        <span className="card-person name">Joshua Sawyer</span>
                                        <br />
                                        <span className="card-person role">President</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </Section>
    )
  }
  
  export default TeamSection
  