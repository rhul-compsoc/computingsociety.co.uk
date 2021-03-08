import * as React from "react"
import styles from "./WhatWeDoSection.module.scss"

// Loading Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUsers, faGraduationCap, faBus, faCommentAlt, faChalkboard } from "@fortawesome/free-solid-svg-icons";

// Import Section definition
import Section from "../Section/Section"

const WhatWeDoSection = (props) => {
    return (
        <Section className="features" height="full">

            <h2>{props.name}</h2>
            <h3 className="section-tag">{props.tag}</h3>


            <div className="container">
                <div className="row justify-content-center features">
                    <div className="col-sm-6 col-md-5 col-lg-4 item justify-content-center  d-flex align-items-center">
                        <div className="box ">
                            <FontAwesomeIcon className="icon" icon={faChalkboard} />
                            <h3 className="name">Workshops</h3>
                            <p className="description">This is one of our ways to provide our members with new skills to further
                                their abilities. </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                        <div className="box">
                            <FontAwesomeIcon className="icon" icon={faAward} />
                            <i className="fas fa-award icon"></i>
                            <h3 className=" name">Competitions</h3>
                            <p className="description">From Hackathons to Capture The Flags, we find ways to challenge our
                                members whilst also promoting positive development.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                        <div className="box">
                            <FontAwesomeIcon className="icon" icon={faUsers} />
                            <h3 className="name">Socials </h3>
                            <p className="description">Whether it is a film night or an SU Takeover. We arrange events that are
                                purely social.;
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                        <div className="box">
                        <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                            <h3 className="name">Industry Talks </h3>
                            <p className="description">Companies coming in to talk to our members is invaluable. The insight
                                provided to how different companies and individuals operate is critical to the successs of
                                our members
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                        <div className="box">
                            <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                            <h3 className="name">Academic Support </h3>
                            <p className="description">University can be challenging. We provide support to our members to help
                                them tackle tough topics. This includes teaching non-computer science students the
                                programming know-how they require.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                        <div className="box">
                            <FontAwesomeIcon className="icon" icon={faBus} />
                            <h3 className="name">Trips</h3>
                            <p className="description">Computer Science is a broad field. To cater to this we provide
                                opportunities to go on a range of trips such as:&nbsp;<em>networking events, conventions,
                                    museums&nbsp;</em>and more!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
  }
  
  export default WhatWeDoSection
  