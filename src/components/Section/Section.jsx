import * as React from "react"

import styles from "./Section.module.scss"

const Section = (props) => {


    /*
    STYLING: Allows the logic of styling the sections to be handled in this section to reduce refactoring.. 
    */
    // DEFAULT (""): light
    let theme = ""
    // Set dark theme to classes if needed
    if (props.theme === "dark") {
        theme = "dark"
    }


    /*
    SIZE: Controls the heights of the sections. 
    */
    // DEFAULT (""): 33% VH
    let height = ""
    // Set dark theme to classes if needed
    if (props.height === "full") {
        height = "full"
    } else if (props.height === "half") {
        height = "half"
    }

    // Classes the section should have
    // THEME: The theme
    // HEIGHT: The height
    // Props.classes: Any classes that are inherited
    let classes = `${theme} ${height} ${props.className}`

    // props.children gets the contents of any composite component. E.g HeroSection
    return (
        <section className={classes}>
            <div className="container">
                {props.children} 
            </div>
        </section>
    )
  }
  
  export default Section
  