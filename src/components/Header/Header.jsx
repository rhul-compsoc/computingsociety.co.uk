import * as React from "react"


// Components
import Navibar from "../Navibar"

// Styles
import styles from "./Header.module.scss"
import logoalt from "../../images/logo-inverted.svg"
import logo from "../../images/logo.svg"




const Header = (props) => {
    return (
    <header>

      <Navibar/>

    </header>

  )
}

export default Header