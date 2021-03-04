import * as React from "react"
// import "../assets/index"

// ==============
// COMPONENTS
// ==============
import { Layout } from "../components/Layout"
import HeroSection from "../components/HeroSection"

// ==============
// STYLES
// ==============
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

// ==============
// DATA
// ==============
const links = [
  {
    text: "Link",
    url: "https://www.computingsociety.co.uk",
    description:
      "Home link",
    color: "#E95800",
  }
]


// ==============
// SITE MARKUP
// ==============

const IndexPage = () => {
  return (

    <layout>

        <HeroSection 
          name="Computing Society" 
          tag="This is a website">
        </HeroSection>
   

        <MembershipSection 
          name="Membership" 
          tag="Our members always come first. We aim to provide great experiences for everyone.">
        </MembershipSection>

        <EventSection 
          name="Events" 
          tag="These are our upcoming events">
        </EventSection>


        <PastEventSection 
          name="Past Events" 
          tag="We have a range of events throughout the year">
        </PastEventSection>


    </layout>

  )
}

export default IndexPage
