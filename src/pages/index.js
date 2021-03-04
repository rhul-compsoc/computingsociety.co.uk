import * as React from "react"
// import "../assets/index"

// ==============
// COMPONENTS
// ==============
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"
import MembershipSection from "../components/MebershipSection"
import EventSection from "../components/EventSection"
import PastEventSection from "../components/PastEventSection"
import TeamSection from "../components/TeamSection"
import SupportedBySection from "../components/SupportedBySection/SupportedBySection"
import SponsorSection from "../components/SponsorSection/SponsorSection"

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

    <Layout>

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

        <TeamSection 
          name="The Team" 
          tag="This is all possible thanks to our hard working committee!">
        </TeamSection>

        <SupportedBySection 
          name="Supported By" 
          tag="All of what we do is generously supported by our partners in industry.">
        </SupportedBySection>

        <SponsorSection>
          
        </SponsorSection>

    </Layout>

  )
}

export default IndexPage
