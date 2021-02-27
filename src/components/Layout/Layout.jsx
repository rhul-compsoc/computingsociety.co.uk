import * as React from "react"
import '../../assets/scss/init.scss'


// Load Components
import Header from '../Header'
import Footer from '../Footer'


// Stylesss
import styles from "./Layout.module.scss"


const Layout = (props) => {
      return (
        <div>
            <div>
                <Header />
                {/* <main>{props.children}</main> */}
                <Footer />
            </div>
        </div>
    )
  }
  
export default Layout
  