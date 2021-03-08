import * as React from "react"
import styles from "./EventSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const EventSection = (props) => {
    return (
        <Section className="Events" height="full">
            <h2>{props.name}</h2>
            <h3 class="section-tag">{props.tag}</h3>

            <div className="row event">
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box ">
                        <div className="item-head">
                            <h4 className="name">Upcoming Event</h4>
                            <p className="date">01/01/22 </p>
                        </div>
                        <div className="item-body">
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="link disabled"><a href="#eventPage" className="disabled">Event Page..</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box ">
                        <div className="item-head">
                            <h4 className="name">Upcoming Event</h4>
                            <p className="date">TBA</p>
                        </div>
                        <div className="item-body">
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="link disabled"><a href="#eventPage" className="disabled">Event Page..</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box ">
                        <div className="item-head">
                            <h4 className="name">Upcoming Event</h4>
                            <p className="date">TBA</p>
                        </div>
                        <div className="item-body">
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="link "><a href="#eventPage" className="disabled">Event Page..</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
  }
  
  export default EventSection
  